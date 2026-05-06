import type { MetadataRoute } from "next";
import { meta as quranAiDualityMeta } from "@/content/articles/quran-ai-duality.meta";
import { meta as quranAiDualityMetaEn } from "@/content/articles/quran-ai-duality.en.meta";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://iqraa.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = [quranAiDualityMeta, quranAiDualityMetaEn];
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...articles.map((m) => ({
      url:
        m.language === "en"
          ? `${SITE_URL}/blog/${m.slug}/en`
          : `${SITE_URL}/blog/${m.slug}`,
      lastModified: new Date(m.updatedAt ?? m.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.9,
    })),
  ];
}
