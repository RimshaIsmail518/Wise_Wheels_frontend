import React from "react";

interface SubheadingProps {
  children: React.ReactNode;
  className?: string;
  size?: string | number;
}

export default function Subheading({
  children,
  className = "",
  size,
}: SubheadingProps) {
  const fontSize = size
    ? typeof size === "number"
      ? `${size}px`
      : size
    : "11px";
  const lineHeight = size
    ? typeof size === "number"
      ? `${Math.round(Number(size) * 1.18)}px`
      : undefined
    : "13px";

  return (
    <p
      className={`font-normal text-text-muted wrap-break-word max-w-[315px] ${className}`}
      style={{
        fontSize,
        lineHeight: lineHeight || "1.18",
      }}
    >
      {children}
    </p>
  );
}
