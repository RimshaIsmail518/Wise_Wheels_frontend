import React from "react";
import StatusBadge from "@/components/StatusBadge";
import Button from "@/components/Button";
import Heading from "@/components/Heading";

type Status = "completed" | "upcoming" | "pending" | "cancelled";

type Props = {
  carModel: string;
  image?: string;
  status: Status;
  location: string;
  referenceNumber: string;
  completedDate?: string;
  scheduledDate?: string;
  reportScore?: string;
  inspector?: string;
  onViewReport?: () => void;
  onDownloadPDF?: () => void;
};

export default function InspectionBookingCard({
  carModel,
  image,
  status,
  location,
  referenceNumber,
  completedDate,
  scheduledDate,
  reportScore,
  inspector,
  onViewReport,
  onDownloadPDF,
}: Props) {
  const displayDate = completedDate || scheduledDate;

  return (
    <div className="relative flex h-[118px] w-full overflow-hidden rounded border border-border-light bg-white md:flex-row">
      {/* Image Section */}
      <div className="relative h-full w-[178px] shrink-0">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={carModel}
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
        {/* Top Section: Car Model, Status, Location, Reference */}
        <div className="flex flex-col pt-0.5 pr-4">
          {/* Car Model with Status Badge */}
          <div className="mb-1 flex items-center gap-2">
            <div className="inline-block">
              <Heading>{carModel}</Heading>
            </div>
            <StatusBadge status={status} size="sm" />
          </div>

          {/* Location and Reference Number on same line */}
          <div className="mt-0.5 flex items-center gap-4">
            <span className="text-text-muted text-[11px] leading-[13px]">
              Location: {location}
            </span>
            <span className="font-semibold text-[#007AFF] text-[12px] leading-[15px]">
              Ref # {referenceNumber}
            </span>
          </div>
        </div>

        {/* Bottom Section: Date, Score, Inspector */}
        <div className="mt-2 flex items-center gap-6 pr-4">
          {/* Dashed separator line */}
          <div className="absolute left-0 right-0 top-[65px] border-t border-dashed border-black/25"></div>

          {/* Completed On / Scheduled Date */}
          {displayDate && (
            <div className="flex flex-col">
              <span className="text-text-muted text-[11px] leading-[13px]">
                {status === "completed" ? "Completed On" : "Scheduled On"}
              </span>
              <span className="font-semibold text-[#007AFF] text-[10px] leading-[12px]">
                {displayDate}
              </span>
            </div>
          )}

          {/* Report Score (only for completed) */}
          {status === "completed" && reportScore && (
            <div className="flex flex-col">
              <span className="text-text-muted text-[11px] leading-[13px]">
                Report Score
              </span>
              <span className="font-semibold text-[#007AFF] text-[10px] leading-[12px]">
                {reportScore}
              </span>
            </div>
          )}

          {/* Inspector */}
          {inspector && (
            <div className="flex flex-col">
              <span className="text-text-muted text-[11px] leading-[13px]">
                Inspector
              </span>
              <span className="font-semibold text-[#007AFF] text-[10px] leading-[12px]">
                {inspector}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Vertical Separator Line */}
      <div className="h-[84px] w-px border-l border-black/50 my-auto"></div>

      {/* Action Buttons Section */}
      <div className="flex flex-col items-center justify-center gap-2 px-4">
        <Button
          onClick={onViewReport}
          variant="primary"
          size="md"
          className="w-[119px] text-[11.9px] leading-[20px]"
        >
          View Report
        </Button>
        <Button
          onClick={onDownloadPDF}
          variant="outline"
          size="md"
          className="w-[119px] text-[11.9px] leading-[20px]"
        >
          Download PDF
        </Button>
      </div>
    </div>
  );
}
