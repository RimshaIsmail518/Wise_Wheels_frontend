import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { ROUTES } from "@/routes";
import Icon from "@/components/Icon";

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
}

const menuItems = [
  {
    name: "My Profile",
    href: ROUTES.SETTINGS.PROFILE,
    iconSrc: "/profile-icon.svg",
  },
  {
    name: "My Ads",
    href: ROUTES.SETTINGS.ADS,
    iconSrc: "/list-icon.svg",
  },
  {
    name: "Auction Bookings",
    href: ROUTES.SETTINGS.AUCTION_BOOKINGS,
    iconSrc: "/auction-icon.svg",
  },
  {
    name: "Inspection Bookings",
    href: ROUTES.SETTINGS.INSPECTION_BOOKINGS,
    iconSrc: "/inspection-icon.svg",
  },
  {
    name: "Payment History",
    href: ROUTES.SETTINGS.PAYMENT_HISTORY,
    iconSrc: "/payment-icon.svg",
  },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside
        className={`${
          isOpen ? "w-[280px]" : "w-0"
        } fixed lg:sticky top-20 left-0 z-50 h-auto min-h-[calc(100vh-80px)] border-r border-gray-200 bg-white transition-all duration-300 ${
          !isOpen ? "hidden lg:block" : "block"
        }`}
      >
      <div className="flex h-full flex-col">
        <div className="flex flex-1 flex-col overflow-y-auto border-b border-gray-200 px-4 py-4">
          {/* Mobile Close Button */}
          {onClose && (
            <button
              onClick={onClose}
              className="mb-4 ml-auto flex lg:hidden"
              aria-label="Close sidebar"
            >
              <Icon lucideIcon={X} size="h-6 w-6" />
            </button>
          )}
          
          {/* User Profile Section */}
          <div className="mb-4">
            <div className="flex items-center space-x-4">
              {/* Avatar */}
              <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200 shrink-0">
                <Icon
                  src="/alex-morgan.png"
                  alt="Alex Morgan"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Name and Status */}
              <div>
                <h3 className="font-bold text-gray-900" style={{ fontSize: "18px", lineHeight: "22px" }}>
                  Alex Morgan
                </h3>
                <p className="text-gray-500" style={{ fontSize: "12px", lineHeight: "14px" }}>
                  Premium Member
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <nav className="flex flex-col space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    // Close sidebar on mobile when link is clicked
                    if (onClose && window.innerWidth < 1024) {
                      onClose();
                    }
                  }}
                  className={`flex items-center space-x-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.iconSrc ? (
                    <Icon
                      src={item.iconSrc}
                      alt={item.name}
                      size="h-5 w-5"
                      className={isActive ? "brightness-0 invert" : "opacity-60"}
                    />
                  ) : null}
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </aside>
    </>
  );
}
