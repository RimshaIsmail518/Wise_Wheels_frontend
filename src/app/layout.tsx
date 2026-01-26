import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Wise Wheels - Car Marketplace",
  description: "Buy and sell cars with confidence. Find your perfect vehicle today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${inter.variable} antialiased overflow-x-hidden`}>
        <NuqsAdapter>
          <Layout>{children}</Layout>
        </NuqsAdapter>
      </body>
    </html>
  );
}
