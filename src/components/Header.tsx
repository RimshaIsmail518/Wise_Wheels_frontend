"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ROUTES } from "@/routes";
import Icon from "./Icon";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { href: ROUTES.CARS.BASE, label: "Cars for Sale", showChevron: true },
    { href: ROUTES.CARS.NEW, label: "New Cars", showChevron: true },
    { href: ROUTES.CARS.USED, label: "Used Cars", showChevron: true },
  ];

  return (
    <header className="sticky top-0 z-sticky bg-primary shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Icon src="/Logo-new.svg" alt="Wise Wheels" size="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center space-x-1 text-sm font-medium text-white transition-all hover:scale-95 hover:opacity-70"
              >
                <span>{link.label}</span>
                {link.showChevron && (
                  <Icon
                    src="/chevron-down.svg"
                    alt="Chevron Down"
                    size="h-4 w-4"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Log In */}
            <Link
              href={ROUTES.AUTH.LOGIN}
              className="hidden items-center space-x-2 text-sm font-medium text-white sm:flex"
            >
              {/* <Icon src="/user.svg" alt="User" size="h-5 w-5" /> */}
              <span className="transition-all hover:scale-95 hover:opacity-70">
                Log In
              </span>
            </Link>

            {/* User Profile */}
            <Link
              href={ROUTES.SETTINGS.PROFILE}
              className="hidden items-center space-x-2 text-sm font-medium text-white sm:flex"
            >
              <Icon src="/user.svg" alt="User" size="h-5 w-5" />
              <span className="transition-all hover:scale-95 hover:opacity-70">
                User profile
              </span>
            </Link>

            {/* Country Selector */}
            <div className="hidden items-center space-x-2 text-sm font-medium text-white sm:flex">
              <Icon src="/globe.svg" alt="Globe" size="h-6 w-6" />
              <Icon src="/pakflag.svg" alt="Pakistan Flag" width="w-4" height="h-5" />
              <span>Pakistan</span>
            </div>

            {/* Post Your Ad Button */}
            <Link
              href={ROUTES.POST_AD}
              className="flex h-[42px] items-center justify-center rounded bg-post-ad px-6 py-1 text-sm font-semibold text-white shadow-md transition-all hover:bg-post-ad-hover hover:shadow-lg"
            >
              Post Your Ad
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="rounded-lg p-2 text-white hover:bg-primary-hover md:hidden"
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Icon lucideIcon={isMenuOpen ? X : Menu} size="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t border-primary-hover py-4 md:hidden">
            <nav className="flex flex-col space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Log In */}
              <Link
                href={ROUTES.AUTH.LOGIN}
                className="flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover"
                onClick={() => setIsMenuOpen(false)}
              >
                {/* <Icon src="/user.svg" alt="User" size="h-5 w-5" /> */}
                <span>Log In</span>
              </Link>
{/* Mobile User Profile */}
<Link
  href={ROUTES.SETTINGS.PROFILE}  // or ROUTES.SETTINGS.PROFILE
  className="flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium text-white hover:bg-primary-hover"
  onClick={() => setIsMenuOpen(false)}
>
  <Icon src="/user.svg" alt="User" size="h-5 w-5" />
  <span>User profile</span>
</Link>




              <div className="flex items-center space-x-2 rounded-lg px-4 py-2 text-sm font-medium text-white">
                <Icon src="/pakflag.svg" alt="Pakistan Flag" width="w-4" height="h-5" />
                <span>Pakistan</span>
              </div>

              <Link
                href={ROUTES.POST_AD}
                className="flex h-[42px] items-center justify-center rounded bg-post-ad px-6 py-1 text-sm font-semibold text-white hover:bg-post-ad-hover"
                onClick={() => setIsMenuOpen(false)}
              >
                Post Your Ad
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
