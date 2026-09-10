import type { Metadata } from "next";

export function siteMetadata(locale: "pl" | "en"): Metadata {
  const en = locale === "en";
  const title = en
    ? "SBAI — AI Consulting & Architecture | Jakub Parol"
    : "SBAI — Doradztwo i architektura AI | Jakub Parol";
  const description = en
    ? "AI system reviews, practical Codex team workshops and finance use-case assessment. Jakub Parol connects business, finance and AI engineering."
    : "Przeglądy systemów AI, praktyczne warsztaty Codex i ocena zastosowań AI w finansach. Jakub Parol łączy doświadczenie biznesowe, finansowe i inżynierskie.";
  const url = en ? "/en/" : "/";
  return {
    metadataBase: new URL("https://www.sbai.pl"),
    title,
    description,
    alternates: {
      canonical: url,
      languages: { pl: "/", en: "/en/", "x-default": "/" },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "SBAI — SmartBusiness AI",
      locale: en ? "en_GB" : "pl_PL",
      alternateLocale: en ? "pl_PL" : "en_GB",
      type: "website",
      images: [
        {
          url: "/assets/sbai-architecture.webp",
          width: 1672,
          height: 941,
          alt: "SBAI — SmartBusiness AI",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/sbai-architecture.webp"],
    },
  };
}
