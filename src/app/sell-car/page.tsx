'use client';

import React, { useState } from 'react';
import { Camera, Info, Home, MessageCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function SellCarFinal() {
  const [description, setDescription] = useState('Inside out fully original, Like New, Minor Accidental Cars, Complete Service ,History, Duplicate File, New Ti');
  const [price, setPrice] = useState('23070777');

  const suggestions = [
    "Inside out fully original", "Like New", "Minor Accidental Cars",
    "Duplicate Book", "Complete Original File", "Duplicate File"
  ];
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="min-h-screen bg-[#F0F7FF] font-sans text-[#1C2B38]">

      <main className="max-w-[1200px] mx-auto pt-6 px-4 md:px-10 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight text-black">SELL MY CAR</h1>

       {/* --- Stepper (Responsive) --- */}
<div className="flex justify-center mb-10 overflow-x-auto px-4">
  <div className="flex items-center min-w-[700px] md:w-[80%] bg-[#DCECFF] rounded-lg overflow-hidden h-12 shadow-sm relative">
    
    {/* Step 1: Car Details */}
    <div 
      onClick={() => setActiveStep(1)}
      className={`flex-[1.2] flex items-center justify-center gap-2 h-full z-40 transition-all duration-300 cursor-pointer
        ${activeStep === 1 ? 'bg-black text-white' : 'text-[#4A90E2]'} 
      `}
      style={{ clipPath: 'polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)' }}
    >
      <CheckCircle2 size={16} /> 
      <span className="text-[12px] font-bold">Car Details</span>
    </div>

    {/* Step 2: Upload Media */}
    <div 
      onClick={() => setActiveStep(2)}
      className={`flex-1 flex items-center justify-center gap-2 h-full -ml-6 z-30 transition-all duration-300 cursor-pointer
        ${activeStep === 2 ? 'bg-black text-white' : 'text-[#4A90E2]'} 
      `}
      style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' }}
    >
      <Camera size={16} /> 
      <span className="text-[12px] font-bold">Upload Media</span>
    </div>

    {/* Step 3: Additional Info */}
    <div 
      onClick={() => setActiveStep(3)}
      className={`flex-1 flex items-center justify-center gap-2 h-full -ml-6 z-20 transition-all duration-300 cursor-pointer
        ${activeStep === 3 ? 'bg-black text-white' : 'text-[#4A90E2]'} 
      `}
      style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' }}
    >
      <Info size={16} /> 
      <span className="text-[12px] font-bold">Additional Info</span>
    </div>

    {/* Step 4: Contact Details */}
    <div 
      onClick={() => setActiveStep(4)}
      className={`flex-1 flex items-center justify-center gap-2 h-full -ml-6 z-10 transition-all duration-300 cursor-pointer
        ${activeStep === 4 ? 'bg-black text-white' : 'text-[#4A90E2]'} 
      `}
      style={{ clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      <MessageCircle size={16} /> 
      <span className="text-[12px] font-bold">Contact Details</span>
    </div>
  </div>
</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- Form Section --- */}
          <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <div className="space-y-5 max-w-2xl">
              
              {/* City Dropdown */}
              <div>
                <label className="block text-[13px] font-bold mb-1.5 text-gray-600">City <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-200 rounded-lg bg-[#F3F6F9] text-gray-500 text-[14px] outline-none appearance-none">
                    <option>Select city</option>
                    <option>Lahore</option>
                    <option>Karachi</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 text-gray-400" size={18} />
                </div>
              </div>

              {/* Area Dropdown */}
              <div>
                <label className="block text-[13px] font-bold mb-1.5 text-gray-600">Area <span className="text-red-500">*</span></label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-200 rounded-lg bg-white text-gray-800 text-[14px] outline-none appearance-none">
                    <option>Bahria Orchard phase 4</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-3.5 text-gray-400" size={18} />
                </div>
              </div>

              {/* Car Info */}
              <div>
                <label className="block text-[13px] font-bold mb-1.5 text-gray-600">Car Info <span className="text-red-500">*</span></label>
                <div className="flex items-center gap-3">
                  <input type="text" readOnly value="2024 Toyota Corolla Hybrid WxB" className="flex-1 p-3 border border-blue-100 rounded-lg bg-[#DCECFF] text-[#0084FF] text-[14px] font-semibold outline-none" />
                  <span className="text-[13px] font-bold text-[#0084FF] whitespace-nowrap">👍 Great!</span>
                </div>
              </div>

              {/* Registered In */}
              <div>
                <label className="block text-[13px] font-bold mb-1.5 text-gray-600">Registered In <span className="text-red-500">*</span></label>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <select className="w-full p-3 border border-[#FFDADA] rounded-lg bg-[#FFF0F0] text-gray-400 text-[14px] outline-none appearance-none">
                      <option>Unregistered</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3.5 text-gray-400" size={18} />
                  </div>
                  <span className="text-[13px] font-bold text-[#FF8A00] whitespace-nowrap">😋 Missing something</span>
                </div>
              </div>

             {/* Exterior Color Section - SVG Version (100% Fixed) */}
<div>
  <label className="block text-[13px] font-bold mb-1.5 text-gray-600">
    Exterior Color <span className="text-red-500">*</span>
  </label>
  <div className="relative">
    <select 
      className="w-full p-3 pr-24 border border-gray-200 rounded-lg bg-[#F3F6F9] text-gray-700 text-[14px] outline-none appearance-none focus:bg-white focus:border-blue-400 transition-all"
      defaultValue=""
    >
      <option value="" disabled>Select color</option>
      <option value="white">White</option>
      <option value="black">Black</option>
      <option value="silver">Silver</option>
      <option value="grey">Grey</option>
      <option value="blue">Blue</option>
      <option value="red">Red</option>
      <option value="gold">Gold</option>
    </select>
    
    {/* EXACT SVG ICON DRAWN FROM YOUR IMAGE */}
    <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Turquoise Blocks (Vertical) */}
        <rect x="2" y="2" width="6" height="4" fill="#00CED1" />
        <rect x="2" y="7" width="6" height="4" fill="#20B2AA" />
        <rect x="2" y="12" width="6" height="4" fill="#008B8B" />
        
        {/* Light Turquoise (Diagonal) */}
        <rect x="10" y="4" width="6" height="4" transform="rotate(30 10 4)" fill="#AFEEEE" opacity="0.8" />
        <rect x="14" y="8" width="6" height="4" transform="rotate(30 14 8)" fill="#7FFFD4" />
        
        {/* Orange Blocks (Horizontal) */}
        <rect x="10" y="18" width="4" height="4" fill="#FFA500" />
        <rect x="15" y="18" width="4" height="4" fill="#FF8C00" />
        <rect x="20" y="18" width="4" height="4" fill="#E67E22" />
        
        {/* Center Pivot Circle */}
        <circle cx="6" cy="18" r="3" fill="#E0E0E0" />
        <circle cx="6" cy="18" r="1.5" fill="#BDBDBD" />
        
        {/* Arc Line */}
        <path d="M18 6C20 8 22 12 22 18" stroke="#D1D1D1" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    </div>
    
    <ChevronDown className="absolute right-3 top-3.5 text-gray-400 pointer-events-none" size={18} />
  </div>
</div>
              {/* Mileage (Number) */}
              <div>
                <label className="block text-[13px] font-bold mb-1.5 text-gray-600">Mileage <span className="text-red-500">*</span></label>
                <div className="flex">
                  <span className="flex items-center px-4 rounded-l-lg border border-r-0 border-gray-200 bg-[#F3F6F9] text-gray-500 text-[12px] font-black">KM</span>
                  <input type="number" defaultValue="300000" className="w-full p-3 border border-gray-200 rounded-r-lg bg-[#F3F6F9] text-gray-600 text-[14px] outline-none" />
                </div>
              </div>
        {/* --- Price Section (Figma Exact Match) --- */}
<div className="mt-6">
  <label className="block text-[13px] font-bold mb-1.5 text-gray-600">
    Price* (Rs.) <span className="text-red-500">*</span>
  </label>
  <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
    
    {/* Combined Input Box */}
    <div className="flex items-stretch overflow-hidden rounded-md border border-[#E5E7EB] w-full max-w-[420px] h-[54px] shadow-sm">
      {/* PKR Label Side */}
      <div className="flex items-center justify-center px-5 bg-[#EDF2F7] text-[#4A5568] text-[15px] font-bold border-r border-[#E5E7EB]">
        PKR
      </div>
      
      {/* Input Side (Light Cream Color) */}
      <input 
        type="number" 
        value={price} 
        onChange={(e)=>setPrice(e.target.value)} 
        className="flex-1 px-4 bg-[#FFF9E7] text-black font-bold text-[18px] outline-none border-none focus:ring-0" 
        placeholder="23070777"
      />
    </div>

    {/* Right Side: Real Looking Note Icon & Text */}
    <div className="flex items-center gap-2.5 self-center md:self-auto">
      {/* Detailed Green Note SVG (Figma Style) */}
      <div className="flex-shrink-0">
        <svg width="25" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="34" height="22" rx="3" fill="#78B661"/>
          <rect x="2" y="2" width="30" height="18" rx="2" stroke="#4F8A3A" strokeWidth="1"/>
          <circle cx="17" cy="11" r="5" fill="#4F8A3A" fillOpacity="0.2"/>
          <circle cx="17" cy="11" r="3.5" stroke="#4F8A3A" strokeWidth="1.2"/>
          <rect x="4" y="4" width="3" height="3" rx="0.5" fill="#4F8A3A" fillOpacity="0.3"/>
          <rect x="27" y="4" width="3" height="3" rx="0.5" fill="#4F8A3A" fillOpacity="0.3"/>
          <rect x="4" y="15" width="3" height="3" rx="0.5" fill="#4F8A3A" fillOpacity="0.3"/>
          <rect x="27" y="15" width="3" height="3" rx="0.5" fill="#4F8A3A" fillOpacity="0.3"/>
        </svg>
      </div>

      {/* Price in Words */}
      <p className="text-[10px] font-bold text-[#FF8A00] leading-tight">
        2 Crore 30 Lacs 70 thousands 7<br className="hidden md:block" /> hundreds and 77
      </p>
    </div>

  </div>
</div>
              {/* Ad Description */}
              <div>
                <label className="block text-[13px] font-bold mb-1.5 text-gray-600">Ad Description <span className="text-red-500">*</span></label>
                <div className="border border-dashed border-gray-300 rounded-lg p-4 bg-white mb-4">
                  <textarea value={description} onChange={(e)=>setDescription(e.target.value)} className="w-full h-24 outline-none resize-none text-[#0084FF] text-[13px] font-medium leading-relaxed"></textarea>
                </div>
                <p className="text-[12px] font-bold mb-3 text-gray-400">You can also use these suggestions</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((tag, i) => (
                    <button key={i} className={`text-[11px] px-4 py-1.5 rounded-full font-bold transition-all ${i < 3 ? 'bg-[#0084FF] text-white' : 'bg-white text-[#0084FF] border border-[#0084FF]'}`}>
                      {tag}
                    </button>
                  ))}
                </div>
                <button className="w-full mt-4 flex items-center justify-center gap-1 text-[#0084FF] text-[12px] font-bold">
                  Show More Suggestions <ChevronDown size={14} className="bg-[#0084FF] text-white rounded-full" />
                </button>
              </div>
            </div>
          </div>

          {/* --- Sidebar Section --- */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm text-center">
              <h3 className="text-[14px] font-black text-gray-800 mb-6 uppercase">Let's Get Started!</h3>
              
              <div className="relative w-28 h-28 mx-auto mb-4">
                <svg className="w-full h-full transform -rotate-90">
                  <circle cx="56" cy="56" r="48" stroke="#F1F5F9" strokeWidth="8" fill="transparent" />
                  <circle cx="56" cy="56" r="48" stroke="#FBBF24" strokeWidth="8" fill="transparent" strokeDasharray="301" strokeDashoffset="226" strokeLinecap="round" />
                </svg>
                {/* Is portion ko replace karein apne code mein */}
<div className="absolute inset-0 flex flex-col items-center justify-center">
  {/* Aapka 3D Emoji jo public folder mein hai */}
  <img 
    src="/3d.png" 
    alt="Sleepy Emoji" 
    className="w-14 h-14 object-contain" 
  />
  <p className="text-[12px] font-black mt-1">1/4 Step</p>
</div>
              </div>
              <p className="text-[11px] font-bold text-gray-400 mb-6 uppercase tracking-wider">Takes less then a minute</p>
              
              <div className="text-left space-y-3">
                <div className="bg-[#F8FAFC] p-3 rounded-md border-l-4 border-[#0084FF] flex items-start gap-3 shadow-sm">
                  <div className="bg-blue-100 p-1 rounded text-blue-500">📝</div>
                  <div>
                    <h4 className="text-[11px] font-black">Don't allow duplicates</h4>
                    <p className="text-[10px] text-gray-500 leading-tight">With our smart control, We don't allow duplicates of same ad.</p>
                  </div>
                </div>

                <div className="bg-[#F0F7FF] p-3 rounded-md border border-blue-100 flex items-start gap-3">
                  <span className="text-[#FF8A00] text-lg leading-none">👉</span>
                  <div>
                    <h4 className="text-[11px] font-black text-[#002C52] uppercase">Realistic price</h4>
                    <p className="text-[10px] text-gray-500 leading-tight">Please enter a realistic price to get more genuine responses.</p>
                  </div>
                </div>

                <div className="bg-[#F0F7FF] p-3 rounded-md border border-blue-100 flex items-start gap-3">
                  <span className="text-[#FF8A00] text-lg leading-none">👉</span>
                  <div>
                    <h4 className="text-[11px] font-black text-[#002C52] uppercase">How to sale your car quickly</h4>
                    <ul className="text-[10px] text-gray-500 list-disc ml-4 space-y-1 mt-1 font-medium">
                      <li>Upload Good Quality Photos</li>
                      <li>Adding clear Front, Back and Interior pictures</li>
                      <li>Photos in 'jpeg, jpg, png, gif' format only</li>
                      <li>Pictures should be 800x600 centre frame image</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- Footer Buttons --- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10 md:w-[65%]">
          <button className="w-full md:w-auto px-20 py-3 border border-gray-300 rounded-md text-gray-400 font-bold bg-white text-[14px]">
            Back
          </button>
          <button className="w-full md:w-auto px-20 py-3 bg-[#0084FF] text-white rounded-md font-bold text-[14px] hover:bg-blue-600 shadow-md">
            Save & Next
          </button>
        </div>
      </main>

      {/* --- Floating Actions (Desktop Only) --- */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4">
        {[MessageCircle, Info, Home].map((Icon, i) => (
          <button key={i} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md text-gray-400 hover:text-[#0084FF] transition-all">
            <Icon size={18} />
          </button>
        ))}
      </div>
    </div>
  );
}