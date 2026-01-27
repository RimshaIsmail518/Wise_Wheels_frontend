'use client';

import React, { useState } from 'react';
import { Camera, Info, Home, MessageCircle, CheckCircle2, ChevronDown } from 'lucide-react';

export default function WiseWheelsContactDetails() {
  const [mobile, setMobile] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('testing@ymail.com.pk');
  const [showNumber, setShowNumber] = useState(false);

  // Simple Email Validation
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="min-h-screen bg-[#F0F7FF] font-sans text-[#1C2B38] relative">
      
      {/* --- NAVBAR --- */}
      <nav className="flex items-center justify-between px-4 md:px-16 py-4 bg-[#F0F7FF]">
        <img src="/logo.svg" alt="Wise Wheels" className="h-10 w-auto" />
        <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-black">
          <a href="#">New Cars</a> <a href="#">Used Cars</a> <a href="#">Buy</a> <a href="#">Sell</a> <a href="#">News</a>
          <button className="bg-[#0084FF] text-white px-6 py-2.5 rounded-md font-bold">Post Your Ad</button>
        </div>
      </nav>

      <main className="max-w-[1250px] mx-auto pt-6 px-4 pb-24">
        <h1 className="text-4xl font-black text-center mb-10 text-black uppercase tracking-tight">Sell My Car</h1>

        {/* --- STEPPER (CONTACT DETAILS ACTIVE) --- */}
<div className="flex justify-center mb-10 overflow-x-auto">
  <div className="flex items-center min-w-[750px] md:w-[85%] bg-[#DCECFF] rounded-lg h-12 shadow-sm overflow-hidden">
    
    {/* Step 1: Car Details (Inactive) */}
    <div className="flex-1 flex items-center justify-center gap-2 h-full text-[#4A90E2]" style={{ clipPath: 'polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)' }}>
      <CheckCircle2 size={16} /> <span className="text-[12px] font-bold uppercase">Car Details</span>
    </div>

    {/* Step 2: Upload Media (Inactive) */}
    <div className="flex-1 flex items-center justify-center gap-2 h-full -ml-6 text-[#4A90E2]" style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' }}>
      <Camera size={16} /> <span className="text-[12px] font-bold uppercase">Upload Media</span>
    </div>

    {/* Step 3: Additional Info (Inactive) */}
    <div className="flex-1 flex items-center justify-center gap-2 h-full -ml-6 text-[#4A90E2]" style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' }}>
      <Info size={16} /> <span className="text-[12px] font-bold uppercase">Additional Info</span>
    </div>

    {/* Step 4: Contact Details (ACTIVE - Blue Fill) */}
    <div className="flex-1 flex items-center justify-center gap-2 h-full -ml-6 bg-black text-white z-10" style={{ clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
      <MessageCircle size={16} /> <span className="text-[12px] font-bold uppercase">Contact Details</span>
    </div>
    
  </div>
</div>
        {/* --- MAIN FORM CONTENT --- */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Form Fields */}
            <div className="space-y-6">
              {/* Mobile Input */}
              <div className="relative">
                <label className="block text-[13px] font-bold mb-2 text-gray-700">Mobile <span className="text-red-500">*</span></label>
                <div className="flex items-center bg-[#F3F6F9] rounded-xl overflow-hidden border border-transparent focus-within:border-blue-400">
                  <div className="flex items-center gap-2 px-4 py-4 border-r border-gray-200 bg-transparent">
                    <img src="https://flagcdn.com/w20/pk.png" alt="PK" className="w-5" />
                    <span className="font-bold text-[15px]">+92</span>
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                  <input 
                    type="number" 
                    required 
                    placeholder="3001234567"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="w-full bg-transparent px-4 py-4 outline-none font-medium text-gray-600" 
                  />
                </div>
                <div className="mt-3 flex items-center gap-2 px-1">
                  <input type="checkbox" id="same" className="w-4 h-4 rounded border-gray-300 accent-[#0084FF]" />
                  <label htmlFor="same" className="text-[13px] text-gray-400 font-medium">Same as above</label>
                </div>
              </div>

              {/* WhatsApp Input */}
              <div>
                <label className="block text-[13px] font-bold mb-2 text-gray-700">WhatsApp</label>
                <div className="flex items-center bg-[#F3F6F9] rounded-xl overflow-hidden border border-transparent focus-within:border-blue-400 relative">
                  <div className="flex items-center gap-2 px-4 py-4 border-r border-gray-200">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-5 h-5" />
                    <span className="font-bold text-[15px]">+92</span>
                    <ChevronDown size={14} className="text-gray-400" />
                  </div>
                  <input 
                    type="number" 
                    placeholder="3001234567"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full bg-transparent px-4 py-4 outline-none font-medium text-gray-600" 
                  />
                  {whatsapp.length > 9 && (
                    <div className="absolute right-4 text-green-500">
                      <CheckCircle2 size={18} fill="currentColor" className="text-white bg-green-500 rounded-full" />
                    </div>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="block text-[13px] font-bold mb-2 text-gray-700">Email <span className="text-red-500">*</span></label>
                <div className="flex items-center relative">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-4 rounded-xl font-medium outline-none border transition-all ${
                      !isEmailValid ? 'bg-[#FFF5F5] border-red-200 text-red-500' : 'bg-[#F3F6F9] border-transparent text-gray-600'
                    }`}
                  />
                  {!isEmailValid && (
                    <div className="absolute left-[calc(100%+12px)] top-1/2 -translate-y-1/2 flex items-center gap-1 whitespace-nowrap">
                      <span className="text-xl">😐</span>
                      <span className="text-[12px] font-bold text-red-500">Wrong format</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Toggle Switch */}
              <div className="flex items-center gap-3 pt-2">
                <button 
                  onClick={() => setShowNumber(!showNumber)}
                  className={`w-11 h-6 rounded-full transition-all relative ${showNumber ? 'bg-[#0084FF]' : 'bg-gray-300'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm ${showNumber ? 'left-6' : 'left-1'}`} />
                </button>
                <span className="text-[13px] font-bold text-gray-700">Show my number on ad?</span>
              </div>
            </div>

            {/* Right Column: 3D Image Placement */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-8">
                {/* Yahan par wahi image use karein jo generate hui hai */}
                <img 
                  src="/nailed it.png" 
                  alt="Nailed It Progress" 
                  className="w-[280px] h-auto "
                />
              </div>

              {/* Tips Box */}
              <div className="w-full bg-[#F0F7FF] p-6 rounded-2xl border border-blue-100 relative max-w-[400px]">
                <h4 className="text-[12px] font-black text-[#002C52] uppercase mb-4 flex items-center gap-2">
                  <span className="text-lg">👉</span> How to sale your car quickly
                </h4>
                <ul className="text-[11px] text-gray-500 space-y-3 font-bold">
                  <li className="flex gap-2"><span>•</span> Upload Good Quality Photos</li>
                  <li className="flex gap-2"><span>•</span> Adding clear Front, Back and Interior pictures</li>
                  <li className="flex gap-2"><span>•</span> Photos should be in 'jpeg, jpg, png, gif' format only</li>
                  <li className="flex gap-2"><span>•</span> Pictures should be 800×600 centre frame image</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Buttons */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <button className="w-full md:w-[320px] py-4 bg-white border-2 border-black rounded-xl font-black uppercase text-[15px] hover:bg-black hover:text-white transition-all">
            Back
          </button>
          <button className="w-full md:w-[320px] py-4 bg-[#0084FF] text-white rounded-xl font-black uppercase text-[15px] shadow-lg hover:shadow-blue-200 transition-all">
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}