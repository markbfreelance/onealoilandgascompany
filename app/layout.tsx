import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "O'Neal Oil & Gas Company | Fort Worth, TX",
  description:
    "O'Neal Oil & Gas Company is a family-owned independent oil and natural gas company involved in the acquisition, exploration, development, and production of oil and natural gas properties. Founded in 1948.",
  keywords: [
    "oil and gas",
    "Fort Worth",
    "Texas",
    "oil production",
    "natural gas",
    "O'Neal Oil",
    "energy company",
    "oil acquisition",
    "gas exploration",
  ],
  openGraph: {
    title: "O'Neal Oil & Gas Company | Fort Worth, TX",
    description:
      "Family-owned independent oil and natural gas company. Oil and gas producers since 1948.",
    type: "website",
    locale: "en_US",
    siteName: "O'Neal Oil & Gas Company",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
