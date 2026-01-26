import React from "react";
import Icon from "@/components/Icon";

export default function UserAvatarSection() {
  return (
    <>
      {/* User Avatar Section */}
      <div className="flex items-center space-x-6">
        <div className="overflow-hidden rounded-full shrink-0 w-[160px] h-[160px]">
          <Icon
            src="/alex-morgan.png"
            alt="Alex Morgan"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900">Alex Morgan</h2>
          <p className="text-sm text-gray-500 mt-1">Premium Member</p>
        </div>
      </div>
      <div className="flex items-center mt-4 space-x-3">
        <button className="rounded-lg border border-gray-300 bg-white px-8 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          Change Avatar
        </button>
        <button className="px-6 py-2.5 text-sm font-medium text-red-600 hover:text-red-700 transition-colors">
          Delete Account
        </button>
      </div>
    </>
  );
}
