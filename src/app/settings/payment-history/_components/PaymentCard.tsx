import React from "react";

type Props = {
  label: string;
  value: string;
  subtitle?: string;
  subtitleColor?: string;
};

export default function PaymentCard({
  label,
  value,
  subtitle,
  subtitleColor = "#27AA76",
}: Props) {
  return (
    <div className="flex flex-col justify-center items-center p-4 sm:p-2 gap-3 sm:gap-5 bg-white rounded-[13.8393px] flex-1 w-full sm:w-auto">
      <span className="text-center font-normal text-[12.1094px] leading-[18px] text-[#131313] opacity-70">
        {label}
      </span>
      <span className="flex items-center text-center font-medium text-[24px] sm:text-[34.5983px] leading-[24px] tracking-[-0.389231px] text-[#131313]">
        {value}
      </span>
      {subtitle && (
        <div className="flex flex-row justify-center items-center gap-1">
          <span
            className="text-center font-medium text-[10.3795px] leading-[16px]"
            style={{ color: subtitleColor }}
          >
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
}
