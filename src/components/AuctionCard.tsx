import React from "react";
import Heading from "./Heading";
import Subheading from "./Subheading";
import StatusBadge from "./StatusBadge";
import SpecificationRow from "./SpecificationRow";
import Button from "./Button";

type Props = {
  title: string;
  price: string;
  vehicleId?: string;
  image?: string;
  features?: string[];
  status?: "paid" | "pending" | "cancel";
  specifications?: {
    mileage?: string;
    fuelType?: string;
    engineSize?: string;
    transmission?: string;
  };
  onDownload?: () => void;
  onViewReport?: () => void;
};

export default function AuctionCard({
  title,
  vehicleId,
  image,
  features = [],
  status = "pending",
  specifications,
  onDownload,
  onViewReport,
}: Props) {
  return (
    <div className="relative flex h-[118px] w-full overflow-hidden rounded border border-border-light bg-white md:flex-row">
      {/* Image Section */}
      <div className="relative h-full w-[178px] shrink-0">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={title}
            className="absolute top-[6px] left-[6px] h-[105px] w-[166px] rounded object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
            No image
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative flex flex-1 flex-col justify-between pt-2 pr-0 pb-2 pl-3">
        {/* Top Section: Title, Features, Vehicle ID, and Status */}
        <div className="flex flex-col pt-0.5 pr-4">
          {/* Title with Status Button */}
          <div className="mb-1 flex items-center gap-2">
            <div className="inline-block">
              <Heading>{title}</Heading>
            </div>
            <StatusBadge status={status} size="sm" />
          </div>

          {/* Features */}
          {features.length > 0 && (
            <div className="mt-0.5">
              <Subheading>{features.join(", ")}</Subheading>
            </div>
          )}

          {/* Vehicle ID */}
          {vehicleId && (
            <div className="mt-1">
              <span className="font-semibold text-[#007AFF] text-[12px] leading-[15px]">
                {vehicleId}
              </span>
            </div>
          )}
        </div>

        {/* Bottom Section: Specifications */}
        <div className="flex items-center pr-4">
          {specifications && <SpecificationRow specifications={specifications} />}
        </div>
      </div>

      {/* Vertical Separator Line */}
      <div className="h-[84px] w-px border-l border-black/50 my-auto"></div>

      {/* Action Buttons Section */}
      <div className="flex flex-col items-center justify-center gap-2 px-4">
        <Button
          onClick={onDownload}
          variant="primary"
          size="md"
          className="w-[119px] text-[11.9px] leading-[20px]"
        >
          Download
        </Button>
        <Button
          onClick={onViewReport}
          variant="outline"
          size="md"
          className="w-[119px] text-[11.9px] leading-[20px]"
        >
          View Report
        </Button>
      </div>
    </div>
  );
}
