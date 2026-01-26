import React from "react";

type Props = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: Props) {
  return (
    <div>
      <h1 
        className="font-bold text-gray-900"
        style={{ fontSize: "32px" }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
