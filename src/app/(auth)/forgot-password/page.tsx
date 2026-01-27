"use client";
import { useState } from "react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [method, setMethod] = useState<"email" | "phone">("email");
  const [resetError, setResetError] = useState("");

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    setResetError("Email not registered!");
  };

  return (
    <div className="w-full animate-in fade-in duration-700">
      <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 tracking-tight text-center lg:text-left">
        Forget Password?
      </h2>
      <p className="text-slate-500 mt-3 mb-10 font-medium text-center lg:text-left mx-auto lg:mx-0 max-w-sm">
        Enter your email address and we will send you a password reset link.
      </p>
      {resetError && (
        <div className="bg-red-50 text-red-500 p-4 rounded-xl border border-red-100 mb-6 font-bold text-sm">
          ⚠️ {resetError}
        </div>
      )}
      <div className="flex bg-slate-50 p-1 rounded-full border border-slate-200 mb-8 max-w-[320px] mx-auto lg:mx-0">
        <button
          onClick={() => { setMethod("email"); setResetError(""); }}
          className={`flex-1 py-3 rounded-full font-bold text-sm transition-all ${method === "email" ? "bg-blue-500 text-white shadow-lg" : "text-slate-400"}`}
        >Email</button>
        <button
          onClick={() => { setMethod("phone"); setResetError(""); }}
          className={`flex-1 py-3 rounded-full font-bold text-sm transition-all ${method === "phone" ? "bg-blue-500 text-white shadow-lg" : "text-slate-400"}`}
        >Phone</button>
      </div>

      <form onSubmit={handleSendLink} className="space-y-8">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-800 ml-1 block text-center lg:text-left">
            {method === "email" ? "Email *" : "Whatsapp Number *"}
          </label>

          {method === "email" ? (
            <input 
              type="email" 
              placeholder="Enter email address" 
              className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-blue-500 transition-all placeholder:text-slate-300 text-center lg:text-left"
            />
          ) : (
            <div className="flex items-center bg-slate-50 rounded-xl border border-slate-200 overflow-hidden focus-within:border-blue-500 transition-all">
              <div className="flex items-center gap-2 px-4 py-4 bg-slate-100 border-r border-slate-200">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" className="w-5 h-5" />
                <span className="font-bold text-slate-600">+92</span>
              </div>
              <input 
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onInput={(e) => {
                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                  }}
                  placeholder="300 123 4567" 
                  className="flex-1 p-4 bg-transparent outline-none text-slate-700 placeholder:text-slate-300"
                />
            </div>
          )}
        </div>
        <button 
          type="submit"
          className="w-full lg:w-fit lg:px-10 bg-slate-200 text-slate-400 py-4 rounded-xl font-bold text-base hover:bg-blue-500 hover:text-white transition-all shadow-sm active:scale-95"
        >
          Send Reset Link
        </button>
      </form>
      <p className="mt-10 text-center text-slate-600 font-medium text-sm">
        Remember your password? <br />
        <Link href="/login" className="text-blue-400 font-black hover:underline text-lg">
          Sign In
        </Link>
      </p>
    </div>
  );
}