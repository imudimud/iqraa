import type { MetadataRoute } from "next";
import { meta as quranAiDualityMeta } from "@/content/articles/quran-ai-duality.meta";
import { meta as quranAiDualityMetaEn } from "@/content/articles/quran-ai-duality.en.meta";
import { meta as quranAiDualityV2Meta } from "@/content/articles/quran-ai-duality-v2.meta";
import { meta as mondePasVideMeta } from "@/content/articles/monde-pas-vide.meta";
import { meta as mondePasVideMetaEn } from "@/content/articles/monde-pas-vide.en.meta";
import { meta as universParleLumiereMeta } from "@/content/articles/univers-parle-lumiere.meta";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://iqraa-zeta.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = [
    quranAiDualityMeta,
    quranAiDualityMetaEn,
    quranAiDualityV2Meta,
    mondePasVideMeta,
    mondePasVideMetaEn,
    universParleLumiereMeta,
  ];
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
