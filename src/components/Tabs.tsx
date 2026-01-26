import React from "react";

type Tab = {
  key: string;
  label: string;
  count?: number;
};

export default function Tabs({
  tabs,
  active,
  onChange,
}: {
  tabs: Tab[];
  active: string;
  onChange: (key: string) => void;
}) {
  return (
    <div className="flex items-center space-x-3 rounded-lg bg-[#D3E2FF] p-2">
      {tabs.map((t) => {
        const isActive = t.key === active;
        return (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`rounded-md px-2 py-2 text-sm font-medium transition-colors focus:outline-none ${
              isActive
                ? "bg-white text-black shadow"
                : "text-gray-600 hover:bg-white/50"
            }`}
          >
            <span>{t.label}</span>
            {typeof t.count === "number" && (
              <span className="ml-2 text-xs text-gray-400">({t.count})</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
