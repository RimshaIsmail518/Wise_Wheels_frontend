"use client";

import React, { useState, useEffect, Suspense } from "react";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/routes";
import Sidebar from "./_components/Sidebar";
import MobileSidebarToggle from "./_components/MobileSidebarToggle";

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Open sidebar by default on desktop, closed on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    // Set initial state
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isCustomPage =
    pathname?.includes(ROUTES.SETTINGS.ADS) ||
    pathname?.includes(ROUTES.SETTINGS.AUCTION_BOOKINGS) ||
    pathname?.includes(ROUTES.SETTINGS.INSPECTION_BOOKINGS) ||
    pathname?.includes(ROUTES.SETTINGS.PROFILE) ||
    pathname?.includes(ROUTES.SETTINGS.PAYMENT_HISTORY);

  const contentClasses = `min-h-[200px] rounded-lg ${
    isCustomPage
      ? "bg-transparent shadow-none"
      : "bg-white shadow-sm p-6 lg:p-8"
  }`;

  return (
    <div className="flex min-h-full px-4 sm:px-6 lg:px-8 pt-6 pb-6 overflow-x-hidden bg-linear-to-b from-[#D1E7FF] from-0% via-[#FAFAFA] via-[19.71%] to-[#FAFAFA]">
      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col overflow-x-hidden">
        {/* Mobile Sidebar Toggle */}
        {!isSidebarOpen && (
          <MobileSidebarToggle onToggle={() => setIsSidebarOpen(true)} />
        )}

        {/* Page Content */}
        <div className="flex-1 overflow-x-hidden pt-2">
          <div className={contentClasses}>
            <Suspense
              fallback={
                <div className="flex items-center justify-center p-8">
                  Loading...
                </div>
              }
            >
          
              {children}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
