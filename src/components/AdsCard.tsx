import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import Icon from "./Icon";
import StatusBadge from "./StatusBadge";
import SpecificationRow from "./SpecificationRow";

type Props = {
  title: string;
  price: string;
  image?: string;
  features?: string[];
  status?: "active" | "pending" | "sold" | "expired" | "drafts";
  specifications?: {
    mileage?: string;
    fuelType?: string;
    engineSize?: string;
    transmission?: string;
  };
  onEdit?: () => void;
  showEditButton?: boolean;
};

export default function AdsCard({
  title,
  price,
  image,
  features = [],
  status = "active",
  specifications,
  onEdit,
  showEditButton = true,
}: Props) {

  return (
    <div className="relative flex min-h-[118px] w-full flex-row overflow-hidden rounded border border-border-light bg-white md:h-[118px]">
      {/* Image Section */}
      <div className="relative h-[118px] w-[120px] shrink-0 overflow-hidden md:h-full md:w-[178px]">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="h-full w-full rounded object-cover md:absolute md:top-[6px] md:left-[6px] md:h-[105px] md:w-[166px]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
            No image
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-1 flex-col justify-between min-w-0 bg-white p-3 md:pt-2 md:pr-4 md:pb-2 md:pl-3">
        {/* Top Section: Title and Features */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-3">
          <div className="flex-1 min-w-0 pt-0.5">
            {/* Title */}
            <div className="mb-1">
              <Heading>{title}</Heading>
            </div>

            {/* Features */}
            {features.length > 0 && (
              <div className="mt-0.5">
                <Subheading>{features.join(", ")}</Subheading>
              </div>
            )}
          </div>

          {/* Action Buttons - Desktop Only (Top Right) */}
          <div className="hidden md:flex items-center gap-2 shrink-0">
            <StatusBadge status={status} size="md" />
            {showEditButton && (
              <button
                onClick={onEdit}
                className="flex h-9 w-9 items-center justify-center rounded-md bg-action p-[3px] text-white shadow-sm transition-colors hover:bg-action-hover"
                aria-label="Edit"
              >
                <Icon src="/edit-icon.svg" alt="Edit" size="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Bottom Section: Specifications and Price */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          {/* Specifications Row */}
          {specifications && <SpecificationRow specifications={specifications} />}

          {/* Price */}
          <div className="text-[14px] leading-[17px] font-extrabold text-black sm:ml-auto">
            {price}
          </div>
        </div>

        {/* Action Buttons - Mobile Only (At the End) */}
        <div className="flex md:hidden items-center gap-2 mt-2 relative z-10">
          <StatusBadge status={status} size="md" />
          {showEditButton && (
            <button
              onClick={onEdit}
              className="flex h-9 w-9 items-center justify-center rounded-md bg-action p-[3px] text-white shadow-sm transition-colors hover:bg-action-hover"
              aria-label="Edit"
            >
              <Icon src="/edit-icon.svg" alt="Edit" size="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
