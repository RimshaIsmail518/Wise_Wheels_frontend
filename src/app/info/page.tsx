'use client';

import React, { useState } from 'react';
import { 
  Camera, 
  Info, 
  Home, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  Search, 
  ArrowDownCircle 
} from 'lucide-react';

export default function SellCarDetails() {
  // 1. STATES
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedList, setSelectedList] = useState(["Apple CarPlay", "ABS", "Airbags"]);

  // 2. DATA
  const allFeatures = [
    "Apple CarPlay", "Navigation System", "Bluetooth", "Airbags", 
    "ABS", "Alloy Wheels", "Sunroof", "Leather Seats", 
    "Power Windows", "Backup Camera", "Cruise Control", "Keyless Entry"
  ];

  // 3. FILTER LOGIC
  const filtered = allFeatures.filter(item => 
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F0F7FF] font-sans text-[#1C2B38] pb-20">

      <main className="max-w-[1250px] mx-auto pt-8 px-4">
        <h1 className="text-4xl font-black text-center mb-10 text-black uppercase tracking-tight">Sell My Car</h1>

        {/* STEPPER (Figma Exact Design) */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="flex items-center min-w-[800px] bg-[#DCECFF] rounded-xl h-14 shadow-sm overflow-hidden font-bold">
            <div className="flex-1 flex items-center justify-center gap-3 h-full bg-[#0084FF] text-white" style={{ clipPath: 'polygon(0% 0%, 92% 0%, 100% 100%, 0% 100%)' }}>
              <CheckCircle2 size={18} /> <span className="text-[12px] uppercase">Car Details</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-3 h-full -ml-6 text-[#4A90E2]" style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' }}>
              <Camera size={18} /> <span className="text-[12px] uppercase">Upload Media</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-3 h-full -ml-6 bg-black text-white z-10" style={{ clipPath: 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)' }}>
              <Info size={18} /> <span className="text-[12px] uppercase">Additional Info</span>
            </div>
            <div className="flex-1 flex items-center justify-center gap-3 h-full -ml-6 text-[#4A90E2]" style={{ clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>
              <MessageCircle size={18} /> <span className="text-[12px] uppercase">Contact Details</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT FORM SECTION */}
          <div className="lg:col-span-8 bg-white p-6 md:p-10 rounded-[30px] shadow-sm border border-gray-100">
            <div className="space-y-6">
              
              {/* Dropdowns */}
              {["Engine Type", "Engine Capacity (cc)", "Transmission", "Assembly"].map((label) => (
                <div key={label}>
                  <label className="block text-sm font-bold text-gray-600 mb-2">{label} <span className="text-red-500">*</span></label>
                  <div className="relative">
                    {label.includes("Capacity") ? (
                      <input 
                        type="text" 
                        defaultValue="1300" 
                        className="w-full bg-[#F5F5F5] border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-blue-100 outline-none font-medium" 
                      />
                    ) : (
                      <select className="w-full bg-[#F5F5F5] border-none rounded-xl py-4 px-5 appearance-none focus:ring-2 focus:ring-blue-100 outline-none font-medium cursor-pointer">
                        <option>Select {label.split(' ')[0]}</option>
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>Hybrid</option>
                      </select>
                    )}
                    {!label.includes("Capacity") && <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />}
                  </div>
                </div>
              ))}

              {/* FEATURES GRID SECTION */}
              <div className="mt-8">
                <label className="block text-sm font-bold text-gray-600 mb-4">Features <span className="text-red-500">*</span></label>
                <div className="border border-gray-100 rounded-[25px] bg-[#F9FAFB] overflow-hidden">
                  
                  {/* Search bar */}
                  <div className="p-5 pb-0">
                    <div className="relative mb-6">
                      <input 
                        type="text" 
                        placeholder="Search" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white border border-gray-200 rounded-lg py-3 px-10 outline-none text-sm font-medium shadow-sm" 
                      />
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" size={18} />
                    </div>
                  </div>

                  {/* Feature Items */}
                  <div className="px-5 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {filtered.map((feature) => {
                      const isSelected = selectedList.includes(feature);
                      return (
                        <div 
                          key={feature}
                          onClick={() => {
                            if (isSelected) {
                              setSelectedList(selectedList.filter(f => f !== feature));
                            } else {
                              setSelectedList([...selectedList, feature]);
                            }
                          }}
                          className={`flex items-center justify-between py-3 px-4 rounded-xl cursor-pointer border transition-all ${
                            isSelected ? 'bg-[#EBF5FF] border-[#0084FF]' : 'bg-white border-gray-100 hover:border-blue-200'
                          }`}
                        >
                          <span className={`text-[13px] font-bold ${isSelected ? 'text-[#002C52]' : 'text-gray-600'}`}>{feature}</span>
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            isSelected ? 'bg-[#0084FF] border-[#0084FF]' : 'border-gray-200 bg-white'
                          }`}>
                            {isSelected && (
                              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Show More Footer */}
                  <button className="w-full mt-6 py-4 bg-[#F3F4F6] text-gray-500 font-black text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors">
                    Show More Features <ArrowDownCircle size={18} className="text-[#0084FF]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDEBAR (GAUGE SECTION) */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 rounded-[35px] shadow-sm border border-gray-100 text-center sticky top-6">
              <h3 className="font-black text-gray-800 text-lg mb-4 uppercase tracking-tight">You Got This</h3>
              
              {/* Gauge Graph */}
              <div className="relative flex flex-col items-center justify-center py-4 mb-6">
                 <svg className="w-48 h-24" viewBox="0 0 100 50">
                    <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#F1F1F1" strokeWidth="8" strokeLinecap="round"/>
                    <path d="M 10 50 A 40 40 0 0 1 65 15" fill="none" stroke="#FF9D42" strokeWidth="8" strokeLinecap="round"/>
                    <circle cx="65" cy="15" r="3.5" fill="white" stroke="#FF9D42" strokeWidth="2.5" />
                 </svg>
                 <div className="text-4xl absolute bottom-6">💪</div>
                 <p className="mt-4 font-black text-gray-400 text-[10px] tracking-widest uppercase">3/4 step</p>
              </div>

              {/* Instructions Box */}
              <div className="text-left bg-[#F0F7FF] p-6 rounded-[25px] border border-blue-50">
                <h4 className="text-[12px] font-black text-[#002C52] uppercase mb-4 flex items-center gap-2">
                  👉 <span>How to sale your car quickly</span>
                </h4>
                <ul className="text-[11px] text-gray-500 space-y-4 font-bold leading-relaxed">
                  <li className="flex gap-2"><span>•</span> Upload Good Quality Photos</li>
                  <li className="flex gap-2"><span>•</span> Adding clear Front, Back and Interior pictures</li>
                  <li className="flex gap-2"><span>•</span> Photos should be in 'jpeg, jpg, png, gif' format only</li>
                  <li className="flex gap-2"><span>•</span> Pictures should be 800×600 centre frame image</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div className="mt-14 flex flex-col md:flex-row justify-between items-center gap-4">
          <button className="w-full md:w-64 py-4 border-2 border-black rounded-xl font-black text-[12px] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
            Back
          </button>
          <button className="w-full md:w-64 py-4 bg-[#0084FF] text-white rounded-xl font-black text-[12px] uppercase tracking-widest shadow-xl shadow-blue-100 hover:bg-blue-600 transition-all">
            Save & Next
          </button>
        </div>
      </main>

      {/* FLOATING SIDE BUTTONS */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
          <div className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50">
            <MessageCircle size={20}/>
          </div>
          <div className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50">
            <Info size={20}/>
          </div>
          <div className="w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50">
            <Home size={20}/>
          </div>
      </div>
    </div>
  );
}