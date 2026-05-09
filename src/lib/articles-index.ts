import type { Lang } from "./i18n";
import type { ArticleFrontmatter } from "./article";

import { meta as quranAiDualityMeta } from "@/content/articles/quran-ai-duality.meta";
import { meta as quranAiDualityMetaEn } from "@/content/articles/quran-ai-duality.en.meta";
import { meta as quranAiDualityV2Meta } from "@/content/articles/quran-ai-duality-v2.meta";
import { meta as mondePasVideMeta } from "@/content/articles/monde-pas-vide.meta";
import { meta as mondePasVideMetaEn } from "@/content/articles/monde-pas-vide.en.meta";
import { meta as universParleLumiereMeta } from "@/content/articles/univers-parle-lumiere.meta";

export interface IndexedArticle {
  meta: ArticleFrontmatter;
  /** Approximate reading time in minutes (computed once at build via the content file). */
  estimatedMinutes: number;
  /** Display order on the home page (lower number = shown first). */
  order: number;
  /** Slug of the parallel-language version, if one exists. */
  hasTranslationOf?: string;
}

const FR_ARTICLES: IndexedArticle[] = [
  { meta: quranAiDualityMeta, estimatedMinutes: 26, order: 1 },
  { meta: quranAiDualityV2Meta, estimatedMinutes: 33, order: 2 },
  { meta: mondePasVideMeta, estimatedMinutes: 30, order: 3 },
  { meta: universParleLumiereMeta, estimatedMinutes: 28, order: 4 },
];

const EN_ARTICLES: IndexedArticle[] = [
  { meta: quranAiDualityMetaEn, estimatedMinutes: 24, order: 1 },
  { meta: mondePasVideMetaEn, estimatedMinutes: 28, order: 3 },
];

/**
 * Stable URL builder. French → /blog/<slug>; English → /blog/<slug>/en.
 * (English pieces share the FR slug — they are translations, not separate works.)
 */
export function articleHref(meta: ArticleFrontmatter): string {
  return meta.language === "en"
    ? `/blog/${meta.slug}/en`
    : `/blog/${meta.slug}`;
}

export function listArticles(lang: Lang): IndexedArticle[] {
  const list = lang === "en" ? EN_ARTICLES : FR_ARTICLES;
  return [...list].sort((a, b) => a.order - b.order);
}

/** Set of FR slugs that DO have an English translation, for cross-listing UI. */
export const SLUGS_WITH_ENGLISH = new Set(
  EN_ARTICLES.map((a) => a.meta.slug)
);
