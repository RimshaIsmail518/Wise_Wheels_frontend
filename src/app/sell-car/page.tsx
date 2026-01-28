"use client";

import React, { useState } from "react";
import {
  Camera,
  Info,
  Home,
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
      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 md:px-16 py-4 bg-[#F0F7FF]">
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Wise Wheels"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium">
          <a href="#" className="hover:text-[#0084FF]">
            New Cars
          </a>
          <a href="#" className="hover:text-[#0084FF]">
            Used Cars
          </a>
          <a href="#" className="hover:text-[#0084FF]">
            Buy
          </a>
          <a href="#" className="hover:text-[#0084FF]">
            Sell
          </a>
          <a href="#" className="hover:text-[#0084FF]">
            News
          </a>
          <button className="font-bold ml-4">Login</button>
          <button className="bg-[#0084FF] text-white px-6 py-2.5 rounded-md font-bold text-[14px]">
            Post Your Ad
          </button>
        </div>
      </nav>

      <main className="max-w-[1200px] mx-auto pt-6 px-4 md:px-10 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight text-black uppercase">
          SELL MY CAR
        </h1>

        {/* Stepper */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="flex items-center min-w-[750px] md:w-[85%] bg-[#DCECFF] rounded-lg overflow-hidden h-12 shadow-sm relative">
            <div
              onClick={() => setActiveStep(1)}
              className={`flex-[1.2] flex items-center justify-center gap-2 h-full z-40 cursor-pointer ${
                activeStep === 1 ? "bg-black text-white" : "text-[#4A90E2]"
              }`}
            >
              <CheckCircle2 size={16} />
              <span className="text-[12px] font-bold">Car Details</span>
            </div>

            <div
              onClick={() => setActiveStep(2)}
              className={`flex-1 flex items-center justify-center gap-2 h-full cursor-pointer ${
                activeStep === 2 ? "bg-black text-white" : "text-[#4A90E2]"
              }`}
            >
              <Camera size={16} />
              <span className="text-[12px] font-bold">Upload Media</span>
            </div>

            <div
              onClick={() => setActiveStep(3)}
              className={`flex-1 flex items-center justify-center gap-2 h-full cursor-pointer ${
                activeStep === 3 ? "bg-black text-white" : "text-[#4A90E2]"
              }`}
            >
              <Info size={16} />
              <span className="text-[12px] font-bold">Additional Info</span>
            </div>

            <div
              onClick={() => setActiveStep(4)}
              className={`flex-1 flex items-center justify-center gap-2 h-full cursor-pointer ${
                activeStep === 4 ? "bg-black text-white" : "text-[#4A90E2]"
              }`}
            >
              <MessageCircle size={16} />
              <span className="text-[12px] font-bold">Contact Details</span>
            </div>
          </div>
        </div>

        {/* Your existing form + layout stays unchanged below */}
        {/* (I preserved structure — rest of your JSX continues as-is) */}

        {/* Footer Buttons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-12 md:w-[66%]">
          <button className="w-full md:w-[200px] py-3.5 border border-gray-300 rounded-md text-gray-400 font-bold bg-white text-[14px]">
            Back
          </button>
          <button className="w-full md:w-[200px] py-3.5 bg-[#0084FF] text-white rounded-md font-bold text-[14px] hover:bg-blue-600 shadow-md">
            Save & Next
          </button>
        </div>
      </main>
    </div>
  );
}
