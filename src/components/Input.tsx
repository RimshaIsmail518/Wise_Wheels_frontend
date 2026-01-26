import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  const inputElement = (
    <input
      className={`w-full rounded-lg border-[1px] border-gray-200 px-4 py-2.5 text-sm focus:border-transparent focus:outline-none focus:ring-0 focus:shadow-none focus-visible:ring-0 focus-visible:outline-none ${className}`}
      {...props}
    />
  );

  if (!label && !error) {
    return inputElement;
  }

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
        </label>
      )}
      {inputElement}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}
