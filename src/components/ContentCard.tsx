import React from "react";

interface ContentCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentCard({
  children,
  className = "",
}: ContentCardProps) {
  return (
    <div
      className={`flex w-full min-h-[654px] flex-col rounded-[12px] border border-[#F3F4F6] bg-white p-6 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] ${className}`}
    >
      {children}
    </div>
  );
}
