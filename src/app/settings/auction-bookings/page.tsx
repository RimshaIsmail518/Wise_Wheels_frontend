"use client";
import { useState, useMemo } from "react";
import Tabs from "@/components/Tabs";
import AuctionCard from "@/components/AuctionCard";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import Breadcrumb from "@/components/Breadcrumb";
import SearchBar from "@/components/SearchBar";
import PageContainer from "@/components/PageContainer";
import ContentCard from "@/components/ContentCard";
import EmptyState from "@/components/EmptyState";
import { sampleAuctions } from "@/data/auctions";

export default function AuctionBookingsPage() {
  const [tab, setTab] = useState("all");

  const tabs = [
    { key: "all", label: "All", count: 12 },
    { key: "paid", label: "Paid", count: 5 },
    { key: "pending", label: "Pending", count: 5 },
    { key: "cancel", label: "Cancel", count: 2 },
  ];

  // Filter by tab only
  const displayAuctions = useMemo(() => {
    if (tab === "all") {
      return sampleAuctions
    }
    return sampleAuctions.filter((auction) => auction.status === tab);
  }, [tab]);

  return (
    <PageContainer>
      <div className="mb-8">
        <PageHeader title="My Auctions" />
        <Breadcrumb
          items={[{ label: "Settings" }, { label: "My Auctions" }]}
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
          {displayAuctions.length > 0 ? (
            displayAuctions.map((auction) => (
              <AuctionCard
                key={auction.vehicleId}
                title={auction.title}
                price={auction.price}
                vehicleId={auction.vehicleId}
                features={auction.features}
                status={auction.status}
                image={auction.image}
                specifications={auction.specifications}
                onDownload={() => alert("Download " + auction.title)}
                onViewReport={() => alert("View Report " + auction.title)}
              />
            ))
          ) : (
            <EmptyState message="No auctions found" />
          )}
        </div>

        <Pagination
          currentPage={1}
          totalPages={2}
          onPageChange={() => {}}
        />
      </ContentCard>
    </PageContainer>
  );
}
