"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="w-full animate-in fade-in duration-700 pb-10">
      <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 tracking-tight text-center lg:text-left">
        Register
      </h2>
      <p className="text-slate-500 mt-3 mb-8 font-medium max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
        Please signup for use Inspections, Ad Post and Auction sheets.
      </p>
      <div className="flex bg-slate-50 p-1 rounded-full border border-slate-200 mb-8 max-w-[320px] mx-auto lg:mx-0">
        <button
          type="button"
          onClick={() => setMethod("email")}
          className={`flex-1 py-3 rounded-full font-bold text-sm transition-all ${method === "email" ? "bg-blue-500 text-white shadow-lg" : "text-slate-400"}`}
        >Email</button>
        <button
          type="button"
          onClick={() => setMethod("phone")}
          className={`flex-1 py-3 rounded-full font-bold text-sm transition-all ${method === "phone" ? "bg-blue-500 text-white shadow-lg" : "text-slate-400"}`}
        >Phone</button>
      </div>
        <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-800 ml-1">Full Name <span className="text-red-500">*</span></label>
          <input 
            type="text" 
            required
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/[^a-zA-Z\s]/g, '');
            }}
            placeholder="Enter full name" 
            className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-all placeholder:text-slate-300"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-800 ml-1">Email <span className="text-red-500">*</span></label>
          <input 
            type="email" 
            required
            placeholder="example@example.com" 
            className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-all placeholder:text-slate-300"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-800 ml-1">Whatsapp Number</label>
          <div className="flex items-center bg-slate-50 rounded-xl border border-slate-200 overflow-hidden focus-within:border-blue-500 transition-all">
            <div className="flex items-center gap-2 px-4 py-4 bg-slate-100 border-r border-slate-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-5 h-5" />
              <span className="font-bold text-slate-600">+92</span>
            </div>
            <input 
              type="text"
              inputMode="numeric"
              onInput={(e) => {
                e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
              }}
              placeholder="300 123 4567" 
              className="flex-1 p-4 bg-transparent outline-none text-slate-700 placeholder:text-slate-300"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-800 ml-1">Password <span className="text-red-500">*</span></label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              required
              placeholder="********" 
              className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-all placeholder:text-slate-300"
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-800 ml-1">Confirm Password <span className="text-red-500">*</span></label>
          <div className="relative">
            <input 
              type={showConfirmPassword ? "text" : "password"} 
              required
              placeholder="********" 
              className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-all placeholder:text-slate-300"
            />
            <button 
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        <div className="space-y-3 pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500" />
            <span className="text-sm text-slate-600">
              I have read and agree to the <Link href="/terms" className="text-blue-500 hover:underline">Terms & Conditions</Link>
            </span>
          </label>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input type="checkbox" className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-500 focus:ring-blue-500" />
            <span className="text-sm text-slate-600">I accept to receive marketing emails</span>
          </label>
        </div>
        <button 
          type="submit"
          className="w-full lg:w-40 bg-blue-500 text-white py-4 rounded-xl font-bold text-base hover:bg-blue-600 transition-all shadow-md active:scale-95 mt-4"
        >
          Register
        </button>
      </form>
      <p className="mt-8 text-slate-600 font-medium text-sm text-center lg:text-left">
        Already Wisewheels member? <Link href="/login" className="text-blue-500 font-bold hover:underline">Log in now</Link>
      </p>
    </div>
  );
}