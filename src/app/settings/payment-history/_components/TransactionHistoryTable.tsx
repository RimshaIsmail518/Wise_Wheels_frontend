import React from "react";
import StatusBadge from "@/components/StatusBadge";

type Transaction = {
  date: string;
  description: string;
  reference: string;
  method: string;
  amount: string;
  status: "paid" | "pending" | "failed";
};

type Props = {
  transactions: Transaction[];
};

export default function TransactionHistoryTable({ transactions }: Props) {
  const tableHeaders = ["Date", "Description", "Method", "Amount", "Status"];

  return (
    <div className="w-full">
      {/* Table Header - Desktop Only */}
      <div className="hidden md:block w-full rounded-t-lg bg-table-header px-5 py-3">
        <div className="grid grid-cols-5 gap-4">
          {tableHeaders.map((header) => (
            <div
              key={header}
              className="font-semibold text-[14px] leading-[20px] text-black"
            >
              {header}
            </div>
          ))}
        </div>
      </div>

      {/* Table Body */}
      <div className="rounded-b-lg">
        {transactions.map((transaction, index) => (
          <React.Fragment key={index}>
            {/* Desktop Table Layout */}
            <div className="hidden md:grid grid-cols-5 gap-4 px-5 py-4">
              <div className="text-[11.9px] leading-[20px] text-text-primary font-medium">
                {transaction.date}
              </div>
              <div>
                <div className="font-medium text-[11.9px] leading-[14px] text-black">
                  {transaction.description}
                </div>
                <div className="text-[11.9px] leading-[14px] text-text-muted mt-1">
                  {transaction.reference}
                </div>
              </div>
              <div className="text-[11.9px] leading-[20px] text-black font-medium">
                {transaction.method}
              </div>
              <div className="text-[11.9px] leading-[20px] text-black font-medium">
                {transaction.amount}
              </div>
              <div className="flex">
                <StatusBadge
                  status={
                    transaction.status === "paid"
                      ? "paid"
                      : transaction.status === "pending"
                        ? "pending"
                        : "failed"
                  }
                  size="lg"
                  className="w-fit"
                />
              </div>
            </div>

            {/* Mobile Card Layout */}
            <div className="md:hidden bg-white rounded-lg p-4 mb-3">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="font-medium text-sm leading-[14px] text-black mb-1">
                    {transaction.description}
                  </div>
                  <div className="text-xs leading-[14px] text-text-muted">
                    {transaction.reference}
                  </div>
                </div>
                <StatusBadge
                  status={
                    transaction.status === "paid"
                      ? "paid"
                      : transaction.status === "pending"
                        ? "pending"
                        : "failed"
                  }
                  size="lg"
                  className="w-fit"
                />
              </div>
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200">
                <div>
                  <div className="text-xs text-text-muted mb-1">Date</div>
                  <div className="text-sm font-medium text-text-primary">
                    {transaction.date}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-text-muted mb-1">Method</div>
                  <div className="text-sm font-medium text-black">
                    {transaction.method}
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-xs text-text-muted mb-1">Amount</div>
                  <div className="text-sm font-medium text-black">
                    {transaction.amount}
                  </div>
                </div>
              </div>
            </div>

            {/* Separator - Desktop Only */}
            <div className="hidden md:block border-t border-dashed border-black/50" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
