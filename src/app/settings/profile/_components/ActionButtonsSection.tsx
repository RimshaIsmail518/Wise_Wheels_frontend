import React from "react";
import Card from "@/components/Card";

export default function ActionButtonsSection() {
  return (
    <Card>
      <div className="flex justify-end space-x-3">
        <button className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
          Cancel
        </button>
        <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
          Save Changes
        </button>
      </div>
    </Card>
  );
}
