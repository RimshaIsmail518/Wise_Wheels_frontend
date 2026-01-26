import React from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <div
      className={`mt-1 flex items-center gap-2 font-['Inter'] text-[11.9px] leading-[20px] ${className}`}
    >
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="font-normal text-[#6B7280]">/</span>
          )}
          {item.href ? (
            <a
              href={item.href}
              className={
                index === items.length - 1
                  ? "font-medium text-[#111827]"
                  : "font-normal text-[#6B7280] hover:text-[#111827]"
              }
            >
              {item.label}
            </a>
          ) : (
            <span
              className={
                index === items.length - 1
                  ? "font-medium text-[#111827]"
                  : "font-normal text-[#6B7280]"
              }
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
