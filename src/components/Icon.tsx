"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

export interface IconProps {
  /**
   * Lucide React icon component (e.g., ChevronDown from lucide-react)
   */
  lucideIcon?: LucideIcon;
  /**
   * Path to custom SVG file (e.g., "/pakflag.svg")
   */
  src?: string;
  /**
   * Alt text for custom SVG icons
   */
  alt?: string;
  /**
   * Size of the icon (applies to both width and height)
   * Can use Tailwind classes or arbitrary values
   */
  size?: string;
  /**
   * Width of the icon (overrides size for width)
   */
  width?: string;
  /**
   * Height of the icon (overrides size for height)
   */
  height?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Color for Lucide icons (defaults to currentColor)
   */
  color?: string;
}

/**
 * Reusable Icon component that supports both Lucide React icons and custom SVGs
 * 
 * @example
 * // Using Lucide icon
 * <Icon lucideIcon={ChevronDown} size="h-4 w-4" />
 * 
 * @example
 * // Using custom SVG
 * <Icon src="/pakflag.svg" alt="Pakistan Flag" size="h-5 w-4" />
 */
export default function Icon({
  lucideIcon: LucideIcon,
  src,
  alt = "",
  size,
  width,
  height,
  className = "",
  color,
}: IconProps) {
  // Validate that either lucideIcon or src is provided
  if (!LucideIcon && !src) {
    console.warn("Icon component requires either 'lucideIcon' or 'src' prop");
    return null;
  }

  // Build className for size
  const getSizeClasses = () => {
    if (width && height) {
      return `${height} ${width}`;
    }
    if (size) {
      return size;
    }
    if (width) {
      return `h-4 ${width}`;
    }
    if (height) {
      return `${height} w-4`;
    }
    return "h-4 w-4";
  };

  const sizeClasses = getSizeClasses();
  const finalClassName = `${sizeClasses} ${className}`.trim();

  // If both are provided, prioritize lucideIcon
  if (LucideIcon) {
    return (
      <LucideIcon
        className={finalClassName}
        color={color}
      />
    );
  }

  // Custom SVG icon
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={finalClassName}
      />
    );
  }

  return null;
}
