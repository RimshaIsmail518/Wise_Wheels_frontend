import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  size?: string | number;
}

export default function Heading({
  children,
  className = "",
  size,
}: HeadingProps) {
  const fontSize = size
    ? typeof size === "number"
      ? `${size}px`
      : size
    : "14px";
  const lineHeight = size
    ? typeof size === "number"
      ? `${size}px`
      : size
    : "14px";

  return (
    <h3
      className={`font-bold text-[#007AFF] tracking-normal font-['Inter'] ${className}`}
      style={{
        fontSize,
        lineHeight: "100%",
        height: lineHeight,
      }}
    >
      {children}
    </h3>
  );
}
