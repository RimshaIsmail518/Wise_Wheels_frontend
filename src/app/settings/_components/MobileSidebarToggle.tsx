import React from "react";
import { Menu } from "lucide-react";
import Icon from "@/components/Icon";

interface MobileSidebarToggleProps {
  onToggle: () => void;
}

export default function MobileSidebarToggle({
  onToggle,
}: MobileSidebarToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="sticky top-4 z-40 mb-4 rounded-lg bg-white p-2 shadow-lg lg:hidden self-start"
      aria-label="Open sidebar"
    >
      <Icon lucideIcon={Menu} size="h-6 w-6" />
    </button>
  );
}
