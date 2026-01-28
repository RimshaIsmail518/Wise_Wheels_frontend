'use client';

import React, { useState } from 'react';
import { Camera, Info, Home, MessageCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function SellCarFinal() {
  const [description, setDescription] = useState('Inside out fully original, Like New, Minor Accidental Cars, Complete Service ,History, Duplicate File, New Ti');
  const [price, setPrice] = useState('23070777');
  const [activeStep, setActiveStep] = useState(1);
  const suggestions = ["Inside out fully original", "Like New", "Minor Accidental Cars", "Duplicate Book", "Complete Original File", "Duplicate File"];

  return (
    <div className="min-h-screen bg-[#F0F7FF] font-sans text-[#1C2B38] overflow-x-hidden">

      <main className="max-w-[1200px] mx-auto pt-6 px-4 md:px-10 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight text-black uppercase">SELL MY CAR</h1>

        {/* --- Stepper (Figma Match) --- */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="flex items-center min-w-[750px] md:w-[85%] bg-[#DCECFF] rounded-lg overflow-hidden h-12 shadow-sm relative">
            <div onClick={() => setActiveStep(1)} className={`flex-[1.2] flex items-center justify-center gap-2 h-full z-40 cursor-pointer ${activeStep === 1 ? 'bg-black text-white' : 'text-[#4A90E2]'}`} style={{ clipPath: 'polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)' }}>
              <CheckCircle2 size={16} /> <span className="text-[12px] font-bold">Car Details</span>
            </div>
            <div onClick={() => setActiveStep(2)} className={`flex-1 flex items-center justify-center gap-2 h-full -ml-6 z-30 cursor-pointer ${activeStep === 2 ? 'bg-black text-white' : 'text-[#4A90E2]'}`} style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' }}>
              <Camera size={16} /> <span className="text-[12px] font-bold">Upload Media</span>
            </div>
            <div onClick={() => setActiveStep(3)} className={`flex-1 flex items-center justify-center gap-2 h-full -ml-6 z-20 cursor-pointer ${activeStep === 3 ? 'bg-black text-white' : 'text-[#4A90E2]'}`} style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' }}>
              <Info size={16} /> <span className="text-[12px] font-bold">Additional Info</span>
            </div>
            <div onClick={() => setActiveStep(4)} className={`flex-1 flex items-center justify-center gap-2 h-full -ml-6 z-10 cursor-pointer ${activeStep === 4 ? 'bg-black text-white' : 'text-[#4A90E2]'}`} style={{ clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
              <MessageCircle size={16} /> <span className="text-[12px] font-bold">Contact Details</span>
            </div>
          </div>
        </div>

        {/* --- MAIN GRID SYSTEM (Fixes the Squeeze issue) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Form (Figma Style) */}
          <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <div className="space-y-6 w-full">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="w-full">
                  <label className="block text-[13px] font-bold mb-1.5 text-gray-600">City <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select className="w-full p-3 border border-gray-200 rounded-lg bg-[#F3F6F9] text-gray-500 text-[14px] outline-none appearance-none">
                      <option>Select city</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 text-gray-400" size={18} />
                  </div>
                </div>
                <div className="w-full">
                  <label className="block text-[13px] font-bold mb-1.5 text-gray-600">Area <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-800 text-[14px] outline-none appearance-none border border-gray-100 shadow-sm">
                      <option>Bahria Orchard phase 4</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 text-gray-400" size={18} />
                  </div>
                </div>
              </div>

              <div className="w-full">
                <label className="block text-[13px] font-bold mb-1.5 text-gray-600">Car Info <span className="text-red-500">*</span></label>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                  <input type="text" readOnly value="2024 Toyota Corolla Hybrid WxB" className="w-full md:flex-1 p-3 border border-blue-100 rounded-lg bg-[#DCECFF] text-[#0084FF] text-[14px] font-semibold" />
                  <span className="text-[13px] font-bold text-[#0084FF] whitespace-nowrap">👍 Great!</span>
                </div>
              </div>

              <div className="w-full">
                <label className="block text-[13px] font-bold mb-1.5 text-gray-600">Registered In <span className="text-red-500">*</span></label>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
                  <div className="relative w-full md:flex-1">
                    <select className="w-full p-3 border border-[#FFDADA] rounded-lg bg-[#FFF0F0] text-gray-400 text-[14px] appearance-none"><option>Unregistered</option></select>
                    <ChevronDown className="absolute right-3 top-3.5 text-gray-400" size={18} />
                  </div>
                  <span className="text-[13px] font-bold text-[#FF8A00] whitespace-nowrap">😋 Missing something</span>
                </div>
              </div>

              {/* YOUR EXTERIOR COLOR (UNCHANGED) */}
              <div className="w-full">
                <label className="block text-[13px] font-bold mb-1.5 text-gray-600">Exterior Color <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full p-3 pr-24 border border-gray-200 rounded-lg bg-[#F3F6F9] text-gray-700 text-[14px] outline-none appearance-none">
                    <option value="" disabled selected>Select color</option>
                    <option value="white">White</option>
                  </select>
                  <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="6" height="4" fill="#00CED1" /><rect x="2" y="7" width="6" height="4" fill="#20B2AA" /><rect x="2" y="12" width="6" height="4" fill="#008B8B" />
                      <rect x="10" y="4" width="6" height="4" transform="rotate(30 10 4)" fill="#AFEEEE" opacity="0.8" /><rect x="14" y="8" width="6" height="4" transform="rotate(30 14 8)" fill="#7FFFD4" />
                      <rect x="10" y="18" width="4" height="4" fill="#FFA500" /><rect x="15" y="18" width="4" height="4" fill="#FF8C00" /><rect x="20" y="18" width="4" height="4" fill="#E67E22" />
                      <circle cx="6" cy="18" r="3" fill="#E0E0E0" /><circle cx="6" cy="18" r="1.5" fill="#BDBDBD" />
                      <path d="M18 6C20 8 22 12 22 18" stroke="#D1D1D1" strokeWidth="1" strokeDasharray="2 2" />
                    </svg>
                  </div>
                  <ChevronDown className="absolute right-3 top-3.5 text-gray-400" size={18} />
                </div>
              </div>

              {/* Mileage */}
              <div className="w-full">
                <label className="block text-[13px] font-bold mb-1.5 text-gray-600">Mileage <span className="text-red-500">*</span></label>
                <div className="flex border border-gray-200 rounded-lg overflow-hidden w-full md:w-[60%]">
                  <span className="flex items-center px-4 bg-[#F3F6F9] text-gray-500 text-[12px] font-black border-r">KM</span>
                  <input type="number" defaultValue="300000" className="w-full p-3 bg-[#F3F6F9] text-gray-600 outline-none" />
                </div>
              </div>

              {/* Price */}
              <div className="w-full">
                <label className="block text-[13px] font-bold mb-1.5 text-gray-600">Price* (Rs.) <span className="text-red-500">*</span></label>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className="flex overflow-hidden rounded-md border border-[#E5E7EB] w-full max-w-[420px] h-[54px]">
                    <div className="flex items-center px-5 bg-[#EDF2F7] text-[#4A5568] font-bold border-r">PKR</div>
                    <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)} className="flex-1 px-4 bg-[#FFF9E7] text-black font-bold text-[18px] outline-none" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">💵</span>
                    <p className="text-[10px] font-bold text-[#FF8A00] leading-tight">2 Crore 30 Lacs 70 thousands<br/>7 hundreds and 77</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="w-full">
                <label className="block text-[13px] font-bold mb-1.5 text-gray-600">Ad Description <span className="text-red-500">*</span></label>
                <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-white mb-4">
                  <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="w-full h-24 outline-none resize-none text-[#0084FF] text-[13px] font-medium leading-relaxed"></textarea>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((tag, i) => (
                    <button key={i} className={`text-[11px] px-4 py-1.5 rounded-full font-bold transition-all ${i < 3 ? 'bg-[#0084FF] text-white' : 'bg-white text-[#0084FF] border border-[#0084FF]'}`}>{tag}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Cards (Figma Matching) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-[15px] font-black text-gray-800 mb-6 uppercase tracking-wider">Let's Get Started!</h3>
              
              <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle cx="64" cy="64" r="50" stroke="#F1F5F9" strokeWidth="8" fill="transparent" />
                  <circle cx="64" cy="64" r="50" stroke="#FBBF24" strokeWidth="8" fill="transparent" strokeDasharray="314" strokeDashoffset="235" strokeLinecap="round" />
                </svg>
                <div className="z-10 text-center flex flex-col items-center">
                  <img src="/3d.png" className="w-12 h-12" alt="Emoji" />
                  <p className="text-[12px] font-black uppercase mt-1">1/4 Step</p>
                </div>
              </div>

              <div className="text-left space-y-4">
                <div className="bg-[#F8FAFC] p-4 rounded-lg border-l-4 border-[#0084FF] flex items-start gap-3 shadow-sm">
                  <span className="text-lg">📝</span>
                  <div>
                    <h4 className="text-[11px] font-black uppercase">Don't allow duplicates</h4>
                    <p className="text-[10px] text-gray-500">With our smart control, We don't allow duplicates of same ad.</p>
                  </div>
                </div>

                <div className="bg-[#F0F7FF] p-4 rounded-lg border border-blue-50 flex items-start gap-3">
                  <span className="text-[#FF8A00] text-lg">👉</span>
                  <div>
                    <h4 className="text-[11px] font-black text-[#002C52] uppercase">Realistic price</h4>
                    <p className="text-[10px] text-gray-400">Please enter a realistic price to get more genuine responses.</p>
                  </div>
                </div>

                <div className="bg-[#F0F7FF] p-4 rounded-lg border border-blue-50 flex items-start gap-3">
                  <span className="text-[#FF8A00] text-lg">👉</span>
                  <div>
                    <h4 className="text-[11px] font-black text-[#002C52] uppercase">How to sale your car quickly</h4>
                    <ul className="text-[10px] text-gray-500 list-disc ml-4 font-medium mt-1">
                      <li>Upload Good Quality Photos</li>
                      <li>Front, Back and Interior pictures</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 md:w-[66%]">
          <button className="w-full md:w-[200px] py-3.5 border border-gray-300 rounded-md text-gray-400 font-bold bg-white text-[14px]">Back</button>
          <button className="w-full md:w-[200px] py-3.5 bg-[#0084FF] text-white rounded-md font-bold text-[14px] hover:bg-blue-600 shadow-md">Save & Next</button>
        </div>
      </main>
    </div>
  );
}