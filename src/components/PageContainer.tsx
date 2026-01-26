import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageContainer({
  children,
  className = "",
}: PageContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-4 pt-6 pb-4 ${className}`}>
      <div className="mx-auto w-full">{children}</div>
    </div>
  );
}
