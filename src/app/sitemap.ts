import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["https://www.sbai.pl/", "https://www.sbai.pl/en/"].map((url) => ({
    url,
    alternates: {
      languages: { pl: "https://www.sbai.pl/", en: "https://www.sbai.pl/en/" },
    },
  }));
}
