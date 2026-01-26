"use client";

import { useState, useMemo } from "react";
import Tabs from "@/components/Tabs";
import PageHeader from "@/components/PageHeader";
import InspectionBookingCard from "./_components/InspectionBookingCard";
import Pagination from "@/components/Pagination";
import Breadcrumb from "@/components/Breadcrumb";
import SearchBar from "@/components/SearchBar";
import PageContainer from "@/components/PageContainer";
import ContentCard from "@/components/ContentCard";
import EmptyState from "@/components/EmptyState";
import { sampleBookings } from "@/data/inspections";

export default function InspectionBookingsPage() {
  const [tab, setTab] = useState("upcoming");

  const tabs = [
    { key: "upcoming", label: "Upcoming", count: 3 },
    { key: "completed", label: "Completed", count: 5 },
    { key: "pending", label: "Pending", count: 2 },
    { key: "cancelled", label: "Cancelled", count: 2 },
  ];

  // Filter by tab only
  const displayBookings = useMemo(() => {
    return sampleBookings.filter((booking) => booking.status === tab);
  }, [tab]);

  return (
    <PageContainer>
      <div className="mb-8">
        <PageHeader title="Inspection Bookings" />
        <Breadcrumb
          items={[{ label: "Settings" }, { label: "Inspection Booking" }]}
        />
      </div>

      <div className="mb-4 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
        <div className="min-w-0 flex-1">
          <Tabs tabs={tabs} active={tab} onChange={setTab} />
        </div>

        <SearchBar value="" onChange={() => {}} />
      </div>

      <ContentCard>
        <div className="flex-1 space-y-4">
          {displayBookings.length > 0 ? (
            displayBookings.map((booking, i) => (
              <InspectionBookingCard
                key={`${booking.referenceNumber}-${i}`}
                carModel={booking.carModel}
                image={booking.image}
                status={booking.status}
                location={booking.location}
                referenceNumber={booking.referenceNumber}
                completedDate={booking.completedDate}
                scheduledDate={booking.scheduledDate}
                reportScore={booking.reportScore}
                inspector={booking.inspector}
                onViewReport={() =>
                  alert(`View Report for ${booking.referenceNumber}`)
                }
                onDownloadPDF={() =>
                  alert(`Download PDF for ${booking.referenceNumber}`)
                }
              />
            ))
          ) : (
            <EmptyState message="No inspection bookings found" />
          )}
        </div>

        <Pagination
          currentPage={1}
          totalPages={1}
          onPageChange={() => {}}
        />
      </ContentCard>
    </PageContainer>
  );
}
