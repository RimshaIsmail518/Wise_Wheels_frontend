"use client";
import { useState, useMemo } from "react";
import Tabs from "@/components/Tabs";
import AdsCard from "@/components/AdsCard";
import PageHeader from "@/components/PageHeader";
import Pagination from "@/components/Pagination";
import Breadcrumb from "@/components/Breadcrumb";
import SearchBar from "@/components/SearchBar";
import PageContainer from "@/components/PageContainer";
import ContentCard from "@/components/ContentCard";
import EmptyState from "@/components/EmptyState";
import { sampleAds } from "@/data/ads";

export default function MyAdsPage() {
  const [tab, setTab] = useState("all");

  const tabs = [
    { key: "all", label: "All Ads", count: 9 },
    { key: "pending", label: "Pending", count: 1 },
    { key: "drafts", label: "Drafts", count: 2 },
    { key: "sold", label: "Sold", count: 3 },
  ];

  // Filter by tab only
  const displayAds = useMemo(() => {
    if (tab === "all") {
      return sampleAds;
    }
    return sampleAds.filter((ad) => ad.status === tab);
  }, [tab]);

  return (
    <PageContainer>
      <div className="mb-8">
        <PageHeader title="My Ads" />
        <Breadcrumb
          items={[
            { label: "Settings" },
            { label: "My Ads" },
          ]}
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
          {displayAds.length > 0 ? (
            displayAds.map((ad) => (
              <AdsCard
                key={`${ad.title}-${ad.status}`}
                title={ad.title}
                price={ad.price}
                features={ad.features}
                status={ad.status}
                image={ad.image}
                specifications={ad.specifications}
                onEdit={() => alert("Edit " + ad.title)}
                showEditButton={ad.status !== "expired"}
              />
            ))
          ) : (
            <EmptyState message="No ads found" />
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
