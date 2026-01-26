"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ROUTES } from "@/routes";
import Icon from "./Icon";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const socialMediaLinks = [
    { href: "#", label: "TikTok", icon: "/tiktok-icon.svg", alt: "TikTok" },
    {
      href: "#",
      label: "Facebook",
      icon: "/facebook-icon.svg",
      alt: "Facebook",
    },
    { href: "#", label: "YouTube", icon: "/youtube-icon.svg", alt: "YouTube" },
    {
      href: "#",
      label: "Instagram",
      icon: "/instagram-icon.svg",
      alt: "Instagram",
    },
    {
      href: "#",
      label: "Pinterest",
      icon: "/pinterest-icon.svg",
      alt: "Pinterest",
    },
  ];

  const actionButtons = [
    {
      type: "link" as const,
      href: "tel:+923001234567",
      label: "+923001234567",
      icon: "/phone-icon.svg",
      alt: "Phone",
      className:
        "flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90",
    },
    {
      type: "nextLink" as const,
      href: ROUTES.BECOME_DEALER,
      label: "Become Dealer",
      icon: "/briefcase-icon.svg",
      alt: "Become Dealer",
      className:
        "flex items-center gap-2 rounded-lg border border-white px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90",
    },
    {
      type: "nextLink" as const,
      href: ROUTES.FIND_CARS,
      label: "Find Cars",
      icon: "/search-icon.svg",
      alt: "Find Cars",
      className:
        "flex items-center gap-2 rounded-lg border border-white px-4 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90",
    },
  ];

  const toolsAndServices = [
    {
      title: "Tools & Services",
      links: [
        { href: ROUTES.TOOLS.CAR_LOAN_CALCULATOR, label: "Car Loan Calculators" },
        {
          href: ROUTES.TOOLS.CAR_AFFORDABILITY,
          label: "Car Affordability Calculator",
        },
        { href: ROUTES.TOOLS.SHIP_CAR, label: "Ship a Car" },
        { href: ROUTES.TOOLS.CAR_WARRANTY, label: "Car Warranty" },
        { href: ROUTES.TOOLS.CAR_INSURANCE, label: "Car Insurance" },
        { href: ROUTES.TOOLS.CAR_MAINTENANCE, label: "Car Maintenance" },
        { href: ROUTES.SITEMAP, label: "Site Map" },
      ],
    },
    {
      title: "Tools & Services",
      links: [
        { href: ROUTES.TOOLS.CAR_LOAN_CALCULATOR, label: "Car Loan Calculators" },
        {
          href: ROUTES.TOOLS.CAR_AFFORDABILITY,
          label: "Car Affordability Calculator",
        },
        { href: ROUTES.TOOLS.SHIP_CAR, label: "Ship a Car" },
        { href: ROUTES.TOOLS.CAR_WARRANTY, label: "Car Warranty" },
      ],
    },
    {
      title: "Tools & Services",
      links: [
        { href: ROUTES.TOOLS.CAR_LOAN_CALCULATOR, label: "Car Loan Calculators" },
        {
          href: ROUTES.TOOLS.CAR_AFFORDABILITY,
          label: "Car Affordability Calculator",
        },
        { href: ROUTES.TOOLS.SHIP_CAR, label: "Ship a Car" },
        { href: ROUTES.TOOLS.CAR_WARRANTY, label: "Car Warranty" },
      ],
    },
    {
      title: "Tools & Services",
      links: [
        { href: ROUTES.TOOLS.SHIP_CAR, label: "Ship a Car" },
        { href: ROUTES.TOOLS.CAR_WARRANTY, label: "Car Warranty" },
      ],
    },
  ];

  return (
    <footer className="bg-[var(--color-footer-dark)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-6">
          {/* Left Column - Company Information & Engagement */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="mb-6">
              <Link href={ROUTES.HOME} className="flex items-center">
                <Icon src="/Logo-new.svg" alt="Wise Wheels" size="h-8 w-auto" />
              </Link>
            </div>

            {/* Description */}
            <p className="mb-6 text-sm leading-relaxed text-white/90">
              We are here to provide our users Complete piece of mind with a
              pre-purchase independent vehicle inspection Wisewheels offers Buy
              a used car with confidence.
            </p>

            {/* App Download Buttons */}
            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="transition-opacity hover:opacity-90"
                aria-label="Download on the App Store and Google Play"
              >
                <Icon
                  src="/app-store-badges.svg"
                  alt="Download on the App Store and Google Play"
                  size="h-auto w-auto"
                  className="h-8 w-auto"
                />
              </a>
            </div>

            {/* Social Media Icons */}
            <div className="mb-6 flex items-center gap-4">
              {socialMediaLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white transition-opacity hover:opacity-70"
                  aria-label={social.label}
                >
                  <Icon src={social.icon} alt={social.alt} size="h-5 w-5" />
                </a>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mb-6 flex flex-wrap gap-3">
              {actionButtons.map((button) => {
                const icon = (
                  <Icon src={button.icon} alt={button.alt} size="h-5 w-5" />
                );
                const content = (
                  <>
                    {icon}
                    <span>{button.label}</span>
                  </>
                );

                if (button.type === "nextLink") {
                  return (
                    <Link
                      key={button.label}
                      href={button.href}
                      className={button.className}
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <a
                    key={button.label}
                    href={button.href}
                    className={button.className}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            {/* Newsletter Sign-Up */}
            <div>
              <h3 className="mb-3 text-base font-bold text-white">
                Sign Up for latest updates
              </h3>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email to sign up"
                  className="flex-1 rounded-lg bg-white px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-[#FF925C] px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Subscribe
                </button>
              </form>
              <p className="mt-4 text-sm text-white/90">
                © 2025 Wisheels.com. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Columns - Tools & Services - 2 Columns */}
          <div className="lg:col-span-4">
            <div className="grid grid-cols-2 gap-8">
              {toolsAndServices.map((column, index) => (
                <div key={index}>
                  <h3 className="mb-6 text-base font-bold text-white">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-white/90 transition-opacity hover:opacity-70"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
