import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = (): (number | "ellipsis")[] => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "ellipsis", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        "ellipsis",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "ellipsis",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "ellipsis",
      totalPages,
    ];
  };

  return (
    <div className="mt-6 shrink-0">
      <div className="flex items-center justify-center">
        <nav className="inline-flex items-center space-x-2">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-8 w-8 rounded border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            aria-label="Previous page"
          >
            &lt;
          </button>
          {getPageNumbers().map((page, index) => {
            if (page === "ellipsis") {
              return (
                <span key={`ellipsis-${index}`} className="px-2">
                  ...
                </span>
              );
            }
            return (
              <button
                key={page}
                onClick={() => onPageChange(page)}
                className={`h-8 w-8 rounded border text-[12px] leading-[15px] transition-colors ${
                  currentPage === page
                    ? "bg-[var(--color-action)] text-white border-[var(--color-action)]"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>
            );
          })}
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="h-8 w-8 rounded border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
            aria-label="Next page"
          >
            &gt;
          </button>
        </nav>
      </div>
    </div>
  );
}
