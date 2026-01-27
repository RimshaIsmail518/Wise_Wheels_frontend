"use client";
import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [authMethod, setAuthMethod] = useState<"email" | "phone">("email");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="w-full animate-in fade-in duration-700">
      <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 tracking-tight text-center lg:text-left">
        Welcome Back!
      </h2>
      <p className="text-slate-500 mt-2 mb-8 font-medium text-center lg:text-left">
        Please login to your account.
      </p>
      <div className="flex bg-slate-100 p-1 rounded-full mb-8 border border-slate-200 shadow-sm max-w-[320px] mx-auto lg:mx-0">
        <button
          onClick={() => { setAuthMethod("email"); setError(false); }}
          className={`flex-1 py-3 rounded-full font-bold text-sm transition-all ${
            authMethod === "email" ? "bg-blue-500 text-white shadow-md" : "text-slate-400 hover:text-slate-600"
          }`}
        >Email</button>
        <button
          onClick={() => { setAuthMethod("phone"); setError(false); }}
          className={`flex-1 py-3 rounded-full font-bold text-sm transition-all ${
            authMethod === "phone" ? "bg-blue-500 text-white shadow-md" : "text-slate-400 hover:text-slate-600"
          }`}
        >Phone</button>
      </div>

      <form onSubmit={(e) => { e.preventDefault(); setError(true); }} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1 block text-center lg:text-left">
            {authMethod === "email" ? "Email *" : "Whatsapp Number *"}
          </label>
          
          {authMethod === "email" ? (
            <input 
              type="email" 
              placeholder="Enter email address" 
              className={`w-full p-4 bg-slate-50 rounded-lg border-2 outline-none transition-all text-center lg:text-left ${
                error ? "border-red-400" : "border-transparent focus:border-blue-500"
              }`}
            />
          ) : (
            <div className={`flex items-center bg-slate-50 rounded-lg border-2 overflow-hidden transition-all ${
              error ? "border-red-400" : "border-transparent focus-within:border-blue-500"
            }`}>
              <div className="flex items-center gap-2 px-4 py-4 bg-slate-200/50 border-r border-slate-200">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-5 h-5" />
                <span className="font-bold text-slate-600 text-sm">+92</span>
              </div>
              <input 
                type="text" 
                inputMode="numeric"
                onInput={(e) => {
                  e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                }}
                placeholder="300 123 4567" 
                className="flex-1 p-4 bg-transparent outline-none text-slate-700 placeholder:text-slate-400 text-sm"
              />
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 ml-1 block text-center lg:text-left">Password *</label>
          <div className="relative">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="********" 
              className={`w-full p-4 bg-slate-100 rounded-lg border-2 outline-none transition-all pr-12 text-center lg:text-left ${
                error ? "border-red-400" : "border-transparent focus:border-blue-500"
              }`}
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

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm font-bold text-slate-600 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 accent-blue-500" />
            Remember me
          </label>
          <Link href="/forgot-password" className="text-sm text-orange-500 font-bold hover:underline">
            Forget Password
          </Link>
        </div>

        <div className="pt-2 flex justify-center lg:justify-start">
  <button 
    type="submit"
    style={{ cursor: 'pointer' }} 
    className="w-full lg:w-fit lg:px-10 bg-[#007bff] text-white py-3 rounded-sm font-bold text-sl hover:bg-blue-600 shadow-lg active:scale-95 transition-all outline-none border-none"
  >
    Log In
  </button>
</div>
      </form>

      <p className="mt-8 text-center lg:text-left text-slate-500 text-sm">
        Don&apos;t have an account with Wisewheels? <br className="lg:hidden" />
        <Link href="/Registernow" className="text-blue-500 font-bold hover:underline">
          Register Now!
        </Link>
      </p>
    </div>
  );
}