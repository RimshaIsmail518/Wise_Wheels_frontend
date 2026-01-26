"use client";
import Breadcrumb from "@/components/Breadcrumb";
import PaymentCard from "./_components/PaymentCard";
import TransactionHistoryTable from "./_components/TransactionHistoryTable";
import PageHeader from "@/components/PageHeader";
import PageContainer from "@/components/PageContainer";
import Heading from "@/components/Heading";

export default function PaymentHistoryPage() {
  const transactions = [
    {
      date: "Oct 24, 2025",
      description: "Inspection Fee",
      reference: "Ref # INS-9002 - Toyota",
      method: "Visa...4242",
      amount: "PKR 2500",
      status: "paid" as const,
    },
    {
      date: "Oct 24, 2025",
      description: "Inspection Fee",
      reference: "Ref # INS-9002 - Toyota",
      method: "Visa...4242",
      amount: "PKR 2500",
      status: "paid" as const,
    },
    {
      date: "Oct 24, 2025",
      description: "Inspection Fee",
      reference: "Ref # INS-9002 - Toyota",
      method: "Visa...4242",
      amount: "PKR 2500",
      status: "paid" as const,
    },
    {
      date: "Oct 24, 2025",
      description: "Inspection Fee",
      reference: "Ref # INS-9002 - Toyota",
      method: "Visa...4242",
      amount: "PKR 2500",
      status: "paid" as const,
    },
    {
      date: "Oct 24, 2025",
      description: "Inspection Fee",
      reference: "Ref # INS-9002 - Toyota",
      method: "Visa...4242",
      amount: "PKR 2500",
      status: "paid" as const,
    },
    {
      date: "Oct 24, 2025",
      description: "Inspection Fee",
      reference: "Ref # INS-9002 - Toyota",
      method: "Visa...4242",
      amount: "PKR 2500",
      status: "paid" as const,
    },
  ];

  return (
    <PageContainer>
      {/* Header */}
      <div className="mb-8">
        <PageHeader title="Payment & Billing" />
        <Breadcrumb
          items={[{ label: "Settings" }, { label: "Payment History" }]}
        />
      </div>

      {/* Summary Cards */}
      <div className="mb-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
        <PaymentCard
          label="Total spent"
          value="PKR 20,000"
          subtitle="Year to Date"
        />
        <PaymentCard
          label="Upcoming Billing"
          value="PKR 25,000"
          subtitle="Due on Feb 15, 2026"
        />
        <PaymentCard
          label="Active Method"
          value="Visa...4242"
          subtitle="Expire 12/28"
        />
      </div>

      {/* Transaction History */}
      <div className="mb-6">
        <Heading size={20} className="mb-4 !text-black font-bold">
          Transaction History
        </Heading>
        <TransactionHistoryTable transactions={transactions} />
      </div>
    </PageContainer>
  );
}
