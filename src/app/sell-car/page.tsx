"use client";

import React, { useState } from "react";
import {
  Camera,
  Info,
  MessageCircle,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export default function SellCarFinal() {
  const [description, setDescription] = useState(
    "Inside out fully original, Like New, Minor Accidental Cars, Complete Service ,History, Duplicate File, New Ti"
  );
  const [price, setPrice] = useState("23070777");
  const [activeStep, setActiveStep] = useState(1);

  const suggestions = [
    "Inside out fully original",
    "Like New",
    "Minor Accidental Cars",
    "Duplicate Book",
    "Complete Original File",
    "Duplicate File",
  ];

  return (
    <div className="min-h-screen bg-[#F0F7FF] font-sans text-[#1C2B38] overflow-x-hidden">
      {/* Container ko responsive padding di hai */}
      <main className="max-w-[1250px] mx-auto pt-6 px-4 sm:px-6 lg:px-10 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight text-black uppercase">
          SELL MY CAR
        </h1>

        {/* Stepper */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center w-full max-w-[900px] bg-[#DCECFF] rounded-lg overflow-hidden h-12 shadow-sm relative">
            <div
              onClick={() => setActiveStep(1)}
              className={`flex-1 flex items-center justify-center gap-2 h-full z-40 cursor-pointer transition-all ${
                activeStep === 1 ? "bg-black text-white" : "text-[#4A90E2]"
              }`}
              style={{
                clipPath: "polygon(0% 0%, 95% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <CheckCircle2 size={14} className="hidden sm:block" />
              <span className="text-[10px] sm:text-[12px] font-bold whitespace-nowrap px-2">
                Car Details
              </span>
            </div>

            <div
              onClick={() => setActiveStep(2)}
              className={`flex-1 flex items-center justify-center gap-2 h-full -ml-4 z-30 cursor-pointer transition-all ${
                activeStep === 2 ? "bg-black text-white" : "text-[#4A90E2]"
              }`}
              style={{
                clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <Camera size={14} className="hidden sm:block" />
              <span className="text-[10px] sm:text-[12px] font-bold whitespace-nowrap px-2">
                Media
              </span>
            </div>

            <div
              onClick={() => setActiveStep(3)}
              className={`flex-1 flex items-center justify-center gap-2 h-full -ml-4 z-20 cursor-pointer transition-all ${
                activeStep === 3 ? "bg-black text-white" : "text-[#4A90E2]"
              }`}
              style={{
                clipPath: "polygon(5% 0%, 95% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <Info size={14} className="hidden sm:block" />
              <span className="text-[10px] sm:text-[12px] font-bold whitespace-nowrap px-2">
                Info
              </span>
            </div>

            <div
              onClick={() => setActiveStep(4)}
              className={`flex-1 flex items-center justify-center gap-2 h-full -ml-4 z-10 cursor-pointer transition-all ${
                activeStep === 4 ? "bg-black text-white" : "text-[#4A90E2]"
              }`}
              style={{
                clipPath: "polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <MessageCircle size={14} className="hidden sm:block" />
              <span className="text-[10px] sm:text-[12px] font-bold whitespace-nowrap px-2">
                Contact
              </span>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
          {/* Left Side: Form */}
          <div className="xl:col-span-8 bg-white p-5 sm:p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
            <div className="space-y-8 w-full">
              {/* City & Area */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full">
                  <label className="block text-[13px] font-bold mb-2 text-gray-700 uppercase tracking-wide">
                    City <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full p-3.5 border border-gray-200 rounded-lg bg-[#F3F6F9] text-gray-500 text-[14px] outline-none appearance-none cursor-pointer">
                      <option>Select city</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label className="block text-[13px] font-bold mb-2 text-gray-700 uppercase tracking-wide">
                    Area <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full p-3.5 border border-gray-200 rounded-lg bg-white text-gray-800 text-[14px] outline-none appearance-none shadow-sm font-medium">
                      <option>Bahria Orchard phase 4</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>
              </div>

              {/* Car Info */}
              <div className="w-full">
                <label className="block text-[13px] font-bold mb-2 text-gray-700 uppercase tracking-wide">
                  Car Info <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <input
                    type="text"
                    readOnly
                    value="2024 Toyota Corolla Hybrid WxB"
                    className="flex-1 min-w-[250px] p-3.5 border border-blue-100 rounded-lg bg-[#DCECFF] text-[#0084FF] text-[14px] font-bold outline-none"
                  />
                  <span className="text-[13px] font-bold text-[#0084FF] flex items-center gap-1">
                    👍 <span className="hidden sm:inline">Great!</span>
                  </span>
                </div>
              </div>

              {/* Registered In */}
              <div className="w-full">
                <label className="block text-[13px] font-bold mb-2 text-gray-700 uppercase tracking-wide">
                  Registered In <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative flex-1 min-w-[200px]">
                    <select className="w-full p-3.5 border border-[#FFDADA] rounded-lg bg-[#FFF0F0] text-gray-400 text-[14px] appearance-none outline-none">
                      <option>Unregistered</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                    />
                  </div>
                  <span className="text-[12px] font-bold text-[#FF8A00] flex items-center gap-1">
                    😋 <span className="hidden sm:inline">Missing something</span>
                  </span>
                </div>
              </div>

              {/* Exterior Color */}
              <div className="w-full">
                <label className="block text-[13px] font-bold mb-2 text-gray-700 uppercase tracking-wide">
                  Exterior Color <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <select className="w-full p-3.5 pr-24 border border-gray-200 rounded-lg bg-[#F3F6F9] text-gray-700 text-[14px] outline-none appearance-none">
                    <option value="" disabled>
                      Select color
                    </option>
                    <option value="white">White</option>
                  </select>

                  <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none">
                    <img
                      src="/color-icon.png"
                      alt=""
                      className="w-7 h-7"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                  </div>

                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={18}
                  />
                </div>
              </div>

              {/* Mileage */}
              <div className="w-full">
                <label className="block text-[13px] font-bold mb-2 text-gray-700 uppercase tracking-wide">
                  Mileage <span className="text-red-500">*</span>
                </label>
                <div className="flex border border-gray-200 rounded-lg overflow-hidden w-full md:w-[60%] shadow-sm">
                  <span className="flex items-center px-5 bg-[#F3F6F9] text-gray-500 text-[12px] font-black border-r uppercase tracking-tighter">
                    KM
                  </span>
                  <input
                    type="number"
                    defaultValue="300000"
                    className="w-full p-3.5 bg-white text-gray-700 font-bold outline-none"
                  />
                </div>
              </div>

              {/* Price */}
              <div className="w-full">
                <label className="block text-[13px] font-bold mb-2 text-gray-700 uppercase tracking-wide">
                  Price (Rs.) <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex overflow-hidden rounded-lg border border-[#E5E7EB] w-full max-w-[420px] h-[58px] shadow-sm">
                    <div className="flex items-center px-6 bg-[#EDF2F7] text-[#4A5568] font-black border-r text-[14px]">
                      PKR
                    </div>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="flex-1 px-4 bg-[#FFF9E7] text-black font-black text-[20px] outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 bg-orange-50 p-2 rounded-lg">
                    <span className="text-xl">💵</span>
                    <p className="text-[10px] font-bold text-[#FF8A00] leading-tight uppercase">
                      2 Crore 30 Lacs 70 thousands
                      <br />
                      7 hundreds and 77
                    </p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="w-full">
                <label className="block text-[13px] font-bold mb-3 text-gray-700 uppercase tracking-wide">
                  Ad Description <span className="text-red-500">*</span>
                </label>

                <div className="border border-dashed border-gray-300 rounded-xl p-5 bg-white mb-5 transition-all focus-within:border-blue-400">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full h-32 outline-none resize-none text-[#0084FF] text-[15px] font-medium leading-relaxed"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {suggestions.map((tag, i) => (
                    <button
                      key={i}
                      type="button"
                      className={`text-[11px] px-5 py-2 rounded-full font-bold shadow-sm transition-all hover:scale-105 ${
                        i < 3
                          ? "bg-[#0084FF] text-white"
                          : "bg-white text-[#0084FF] border border-[#0084FF]"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="xl:col-span-4 space-y-5">
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center sticky top-5">
              <h3 className="text-[15px] font-black text-gray-800 mb-6 uppercase tracking-[0.1em]">
                Let's Get Started!
              </h3>

              <div className="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    stroke="#F1F5F9"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <circle
                    cx="72"
                    cy="72"
                    r="60"
                    stroke="#FBBF24"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray="377"
                    strokeDashoffset="282"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="z-10 text-center">
                  <img src="/3d.png" className="w-14 h-14 mx-auto" alt="Emoji" />
                  <p className="text-[12px] font-black uppercase mt-1 text-gray-700">
                    1/4 Step
                  </p>
                </div>
              </div>

              <div className="text-left space-y-4">
                <div className="bg-[#F8FAFC] p-4 rounded-xl border-l-4 border-[#0084FF] flex items-start gap-3 shadow-sm transition-all hover:shadow-md">
                  <span className="text-xl">📝</span>
                  <div>
                    <h4 className="text-[11px] font-black uppercase text-gray-800">
                      Don't allow duplicates
                    </h4>
                    <p className="text-[10px] text-gray-500 leading-tight mt-1">
                      Our smart control prevents duplicate car listings.
                    </p>
                  </div>
                </div>

                <div className="bg-[#F0F7FF] p-4 rounded-xl border border-blue-100 flex items-start gap-3">
                  <span className="text-[#FF8A00] text-lg">👉</span>
                  <div>
                    <h4 className="text-[11px] font-black text-[#002C52] uppercase">
                      Realistic price
                    </h4>
                    <p className="text-[10px] text-gray-500 leading-tight mt-1">
                      Enter a fair price to attract serious buyers quickly.
                    </p>
                  </div>
                </div>

                <div className="bg-[#F0F7FF] p-4 rounded-xl border border-blue-100 flex items-start gap-3">
                  <span className="text-[#FF8A00] text-lg">👉</span>
                  <div>
                    <h4 className="text-[11px] font-black text-[#002C52] uppercase">
                      Quick Sale Tips
                    </h4>
                    <ul className="text-[10px] text-gray-500 list-disc ml-4 font-medium mt-2 space-y-1">
                      <li>Use high-quality daytime photos</li>
                      <li>Clear Front, Back and Interior shots</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 xl:w-[65.5%]">
          <button className="w-full sm:w-[180px] py-4 border border-gray-300 rounded-xl text-gray-400 font-black bg-white text-[13px] uppercase tracking-widest hover:bg-gray-50 transition-all">
            Back
          </button>
          <button className="w-full sm:w-[180px] py-4 bg-[#0084FF] text-white rounded-xl font-black text-[13px] uppercase tracking-widest hover:bg-blue-600 shadow-lg shadow-blue-200 transition-all">
            Save & Next
          </button>
        </div>
      </main>
    </div>
  );
}
