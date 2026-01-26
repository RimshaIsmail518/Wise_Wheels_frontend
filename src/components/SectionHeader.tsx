import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  titleClassName = "",
  subtitleClassName = "",
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`mb-6 ${className}`}>
      <h2
        className={`font-bold text-foreground text-[15.3px] leading-[28px] ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-secondary text-[11.9px] leading-[20px] mt-1 ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
