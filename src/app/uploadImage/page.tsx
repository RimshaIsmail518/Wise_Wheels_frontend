'use client';

import React, { useState, useCallback } from 'react';
import { Camera, Info, Home, MessageCircle, CheckCircle2, Eye, Star, Trash2, X, GripVertical, CropIcon } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import ReactCrop, { type Crop } from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

// Drag and Drop Kit Imports
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, horizontalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface ImageFile {
  id: string;
  preview: string;
  name: string;
  isFeatured: boolean;
}

// --- 1. SORTABLE IMAGE CARD COMPONENT ---
function SortablePhotoCard({ img, onRemove, onToggleFeatured, onPreview, onCrop }: any) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: img.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 50 : 'auto',
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div ref={setNodeRef} style={style} className="relative group rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col h-full">
      
      {/* Drag Handle (Top Left - 6 Dots) */}
      <div 
        {...attributes} 
        {...listeners} 
        className="absolute top-1.5 left-1.5 z-30 bg-[#33373E] p-1.5 rounded-sm cursor-grab active:cursor-grabbing shadow-md"
      >
        <div className="grid grid-cols-2 gap-0.5">
          {[...Array(6)].map((_, i) => <div key={i} className="w-0.5 h-0.5 bg-white rounded-full"></div>)}
        </div>
      </div>

      {/* Featured Badge */}
      {img.isFeatured && (
        <div className="absolute top-1.5 right-1.5 bg-[#FF9D42] text-white text-[8px] px-2 py-0.5 rounded-full font-bold z-20 shadow-md flex items-center gap-1">
          <Star size={8} fill="white" /> Featured
        </div>
      )}

      {/* Image Preview Container */}
      <div className="h-32 w-full bg-gray-50 relative overflow-hidden">
        <img src={img.preview} alt="preview" className="w-full h-full object-cover" />
        
        {/* Overlay Icons */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-1.5 transition-opacity z-10">
          <button onClick={() => onPreview(img.preview)} className="w-7 h-7 bg-[#0084FF] text-white rounded flex items-center justify-center"><Eye size={14} /></button>
          <button onClick={() => onToggleFeatured(img.id)} className={`w-7 h-7 rounded flex items-center justify-center ${img.isFeatured ? 'bg-[#FF9D42]' : 'bg-white'}`}><Star size={14} fill={img.isFeatured ? 'white' : 'none'} /></button>
          <button onClick={() => onRemove(img.id)} className="w-7 h-7 bg-[#FF4D4D] rounded flex items-center justify-center text-white"><Trash2 size={14} /></button>
          <button onClick={() => onCrop(img.preview)} className="w-7 h-7 bg-[#2ECC71] rounded flex items-center justify-center text-white"><CropIcon size={14} /></button>
        </div>
      </div>

      <div className="p-2 bg-white flex flex-col gap-0.5">
        <p className="text-[10px] font-bold text-gray-800 truncate">{img.name}</p>
        <p className="text-[9px] text-gray-400 font-medium">Image 1920×1080</p>
      </div>
    </div>
  );
}

// --- 2. MAIN PAGE COMPONENT ---
export default function WiseWheelsFinalCorrected() {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [previewModal, setPreviewModal] = useState<string | null>(null);
  const [cropModal, setCropModal] = useState<string | null>(null);
  const [crop, setCrop] = useState<Crop>({ unit: '%', width: 50, height: 50, x: 25, y: 25 });

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      preview: URL.createObjectURL(file),
      name: file.name,
      isFeatured: false,
    }));
    setImages(prev => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: {'image/*': []} });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setImages((items) => {
        const oldIndex = items.findIndex((i) => i.id === active.id);
        const newIndex = items.findIndex((i) => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F7FF] font-sans text-[#1C2B38] relative">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-4 md:px-16 py-4 bg-[#F0F7FF]">
        <img src="/logo.svg" alt="Wise Wheels" className="h-10 w-auto" />
        <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-black">
          <a href="#">New Cars</a> <a href="#">Used Cars</a> <a href="#">Buy</a> <a href="#">Sell</a>
          <button className="bg-[#0084FF] text-white px-6 py-2.5 rounded-md font-bold">Post Your Ad</button>
        </div>
      </nav>

      <main className="max-w-[1250px] mx-auto pt-6 px-4 pb-24">
        <h1 className="text-4xl font-black text-center mb-10 text-black uppercase tracking-tight">Sell My Car</h1>

        {/* STEPPER */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="flex items-center min-w-[750px] md:w-[85%] bg-[#DCECFF] rounded-lg h-12 shadow-sm overflow-hidden font-bold">
            <div className="flex-1 flex items-center justify-center gap-2 h-full text-[#4A90E2]" style={{ clipPath: 'polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)' }}>
              <CheckCircle2 size={16} /> <span className="text-[12px] uppercase">Car Details</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 h-full -ml-6 bg-[#0084FF] text-white z-10" style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' }}>
              <Camera size={16} /> <span className="text-[12px] uppercase">Upload Media</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 h-full -ml-6 text-[#4A90E2]" style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' }}>
              <Info size={16} /> <span className="text-[12px] uppercase">Additional Info</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-2 h-full -ml-6 text-[#4A90E2]" style={{ clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
              <MessageCircle size={16} /> <span className="text-[12px] uppercase">Contact Details</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-[32px] shadow-sm border border-gray-100">
            
            {/* UPLOAD BOX */}
            <div {...getRootProps()} className="border-2 border-dashed border-gray-200 rounded-3xl p-8 flex flex-col items-center justify-center cursor-pointer mb-8 hover:bg-gray-50 transition-colors">
              <input {...getInputProps()} />
              <img src="/gallery.jpg" alt="Upload" className="w-45 h-45 mb-6 object-contain" />
              <p className="text-gray-400 text-lg">
                Drop your file <span className="text-[#0084FF] underline font-bold">or Click to browse</span>
              </p>
            </div>

            {/* SORTABLE GRID */}
            {images.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-black mb-6 uppercase text-gray-800">Uploaded Images ({images.length})</h3>
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                  <SortableContext items={images.map(i => i.id)} strategy={horizontalListSortingStrategy}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {images.map((img) => (
                        <SortablePhotoCard 
                          key={img.id} 
                          img={img} 
                          onRemove={(id: string) => setImages(prev => prev.filter(i => i.id !== id))}
                          onToggleFeatured={(id: string) => setImages(prev => prev.map(i => i.id === id ? {...i, isFeatured: !i.isFeatured} : {...i, isFeatured: false}))}
                          onPreview={setPreviewModal}
                          onCrop={setCropModal}
                        />
                      ))}
                    </div>
                  </SortableContext>
                </DndContext>
              </div>
            )}
          </div>

          {/* SIDEBAR - Keep it up! Section */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 text-center sticky top-6">
             
              
              {/* --- IMAGE ADDED HERE FROM PUBLIC FOLDER --- */}
              <div className="flex justify-center mb-6">
                <img src="/keep.png" alt="Keep it up" className="w-full h-auto max-w-[200px] object-contain" />
              </div>

              {/* Sidebar Guide Box */}
              <div className="text-left bg-[#F0F7FF] p-6 rounded-2xl border border-blue-50">
                <h4 className="text-[12px] font-black text-[#002C52] uppercase mb-4 flex items-center gap-2">
                  👉 How to sale your car quickly
                </h4>
                <ul className="text-[11px] text-gray-500 space-y-3 font-bold leading-relaxed">
                  <li className="flex gap-2"><span>•</span> Upload Good Quality Photos</li>
                  <li className="flex gap-2"><span>•</span> Adding clear Front, Back and Interior pictures</li>
                  <li className="flex gap-2"><span>•</span> Photos format: 'jpeg, jpg, png, gif' only</li>
                  <li className="flex gap-2"><span>•</span> Max photo size: 5MB</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <button className="w-full md:w-auto px-20 py-4 border-2 border-black rounded-xl font-black uppercase text-[13px]">Back</button>
          <button className="w-full md:w-auto px-20 py-4 bg-[#0084FF] text-white rounded-xl font-black uppercase text-[13px] shadow-lg">Save & Next</button>
        </div>
      </main>

      {/* MODALS */}
      {previewModal && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-6" onClick={() => setPreviewModal(null)}>
          <img src={previewModal} className="max-w-full max-h-screen rounded-lg shadow-2xl" />
        </div>
      )}

      {cropModal && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-[32px] p-8 max-w-2xl w-full shadow-2xl">
            <h2 className="text-xl font-black mb-6 uppercase">Crop Image</h2>
            <div className="max-h-[50vh] overflow-auto flex justify-center bg-gray-50 rounded-xl border border-gray-100">
               <ReactCrop crop={crop} onChange={c => setCrop(c)}>
                 <img src={cropModal} alt="Crop" />
               </ReactCrop>
            </div>
            <div className="flex gap-4 mt-8">
              <button onClick={() => setCropModal(null)} className="flex-1 py-4 bg-gray-100 rounded-xl font-bold uppercase">Cancel</button>
              <button onClick={() => setCropModal(null)} className="flex-1 py-4 bg-[#0084FF] text-white rounded-xl font-bold uppercase shadow-md">Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}