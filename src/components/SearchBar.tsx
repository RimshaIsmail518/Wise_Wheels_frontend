import React from "react";
import Input from "./Input";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search listings...",
  className = "",
}: SearchBarProps) {
  return (
    <div className={`w-full shrink-0 sm:w-72 ${className}`}>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
