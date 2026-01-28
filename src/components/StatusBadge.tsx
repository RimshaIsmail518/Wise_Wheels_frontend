import React from "react";

type Status =
  | "active"
  | "pending"
  | "sold"
  | "expired"
  | "drafts"
  | "paid"
  | "cancel"
  | "completed"
  | "upcoming"
  | "cancelled"
  | "failed"; // ✅ added

interface StatusBadgeProps {
  status: Status;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const statusStyles: Record<
  Status,
  { bg: string; text: string; label: string }
> = {
  active: { bg: "bg-success", text: "text-white", label: "Active" },
  pending: { bg: "bg-orange-500", text: "text-white", label: "Pending" },
  sold: { bg: "bg-gray-400", text: "text-white", label: "Sold" },
  expired: { bg: "bg-red-500", text: "text-white", label: "Expired" },
  drafts: { bg: "bg-yellow-500", text: "text-white", label: "Drafts" },
  paid: { bg: "bg-success", text: "text-white", label: "Paid" },
  cancel: { bg: "bg-red-500", text: "text-white", label: "Cancel" },
  completed: { bg: "bg-success", text: "text-white", label: "Completed" },
  upcoming: { bg: "bg-blue-500", text: "text-white", label: "Upcoming" },
  cancelled: { bg: "bg-red-500", text: "text-white", label: "Cancelled" },
  failed: { bg: "bg-red-500", text: "text-white", label: "Failed" }, // ✅ now valid
};

const sizeClasses: Record<NonNullable<StatusBadgeProps["size"]>, string> = {
  sm: "h-[15px] px-2 text-[6.42857px] rounded-[3.21429px]",
  md: "h-9 px-4 text-xs rounded-md",
  lg: "h-[21.89px] px-2 text-[9.38253px] leading-[11px] rounded-[4.69px] w-fit",
};

export default function StatusBadge({
  status,
  size = "md",
  className = "",
}: StatusBadgeProps) {
  const statusStyle = statusStyles[status];
  const sizeClass = sizeClasses[size];

  return (
    <span
      className={`${statusStyle.bg} ${statusStyle.text} flex items-center justify-center font-medium shadow-sm whitespace-nowrap ${sizeClass} ${className}`}
    >
      {statusStyle.label}
    </span>
  );
}
