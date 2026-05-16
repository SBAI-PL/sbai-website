import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sbai.pl"),
  title: {
    default: "SBAI | Strategic Business AI",
    template: "%s | SBAI",
  },
  description:
    "SBAI doradza i wdraża production AI dla firm, które chcą działającego wyniku, a nie kolejnego demo.",
  alternates: {
    canonical: "/",
    languages: {
      pl: "/",
      en: "/en/",
    },
  },
  openGraph: {
    title: "SBAI | Strategic Business AI",
    description:
      "Production AI dla firm 30-300 osób: audyt, wdrożenia agentów, RAG, OCR, search i AI-coding adoption.",
    url: "https://www.sbai.pl",
    siteName: "SBAI",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className={`${geist.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
