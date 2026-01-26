import React from "react";

interface EmptyStateProps {
  message?: string;
  className?: string;
}

export default function EmptyState({
  message = "No items found",
  className = "",
}: EmptyStateProps) {
  return (
    <div
      className={`flex items-center justify-center py-12 text-gray-500 ${className}`}
    >
      {message}
    </div>
  );
}
