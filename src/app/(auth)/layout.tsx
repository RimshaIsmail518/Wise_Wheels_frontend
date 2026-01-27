"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const sliderImages = ["/sliderimage1.webp", "/sliderimage2.webp", "/sliderimage3.webp"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const getBackLink = () => {
    if (pathname.includes("forgot-password")) return { label: "Sign In", href: "/login" };
    if (pathname.includes("login") || pathname.includes("register")) return { label: "Home", href: "/" };
    return null;
  };

  const backLink = getBackLink();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-white overflow-x-hidden">
      {/* Left Side: Auth Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 lg:p-12 overflow-y-auto min-h-[600px]">
        <div className="max-w-md w-full">
          <div className="h-8 mb-2">
            {backLink && (
              <Link href={backLink.href} className="flex items-center gap-1 text-blue-500 font-semibold text-sm w-fit">
                <span className="text-xl">‹</span> {backLink.label}
              </Link>
            )}
          </div>
          <div className="mb-8 flex justify-center lg:justify-start">
            <img src="/logo.svg" alt="Logo" className="h-12 w-auto object-contain" />
          </div>
          <div className="w-full">{children}</div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 bg-blue-600 relative flex flex-col items-center justify-center p-8 lg:p-12 min-h-[400px]">
        <div className="relative w-full max-w-[300px] lg:max-w-lg aspect-square bg-white/10 rounded-[30px] lg:rounded-[40px] border border-white/20 backdrop-blur-sm overflow-hidden shadow-2xl">
          <div 
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sliderImages.map((img, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Indicators */}
        <div className="flex gap-2 mt-6 lg:mt-8">
          {sliderImages.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}