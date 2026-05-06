import { notFound } from "next/navigation";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import readingTime from "reading-time";
import type { Metadata } from "next";
import { Cover } from "@/components/article/Cover";
import { ArticleHeader } from "@/components/article/ArticleHeader";
import { OverviewCard } from "@/components/article/OverviewCard";
import { ArticleTOC } from "@/components/article/ArticleTOC";
import { ChapterRail } from "@/components/article/ChapterRail";
import { MobileTOCDrawer } from "@/components/article/MobileTOCDrawer";
import { ReadingProgress } from "@/components/article/ReadingProgress";
import { ShareBar } from "@/components/article/ShareBar";
import { ArticleSidebar } from "@/components/article/ArticleSidebar";
import { Footnotes } from "@/components/article/Footnotes";
import { Colophon } from "@/components/article/Colophon";
import { articleHeadings } from "@/lib/toc";
import { buildArticleMetadata, buildArticleJsonLd } from "@/lib/seo";
import { getStrings } from "@/lib/i18n";
import type { ArticleFrontmatter } from "@/lib/article";
import { meta as quranAiDualityMetaEn } from "@/content/articles/quran-ai-duality.en.meta";
import { references as quranAiDualityRefs } from "@/content/references/quran-ai-duality";
import QuranAiDualityContentEn from "@/content/articles/quran-ai-duality.en.mdx";

const LANG = "en" as const;
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://iqraa.example.com";

interface ArticleEntry {
  meta: ArticleFrontmatter;
  Component: React.ComponentType;
  references: typeof quranAiDualityRefs;
  filePath: string;
}

const articles: Record<string, ArticleEntry> = {
  "quran-ai-duality": {
    meta: quranAiDualityMetaEn,
    Component: QuranAiDualityContentEn,
    references: quranAiDualityRefs,
    filePath: "src/content/articles/quran-ai-duality.en.mdx",
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export const dynamicParams = false;

async function getReadingStats(filePath: string) {
  try {
    const raw = await readFile(join(process.cwd(), filePath), "utf8");
    const stats = readingTime(raw);
    const minutes = Math.max(1, Math.round(stats.minutes * 1.05));
    return { minutes, words: stats.words };
  } catch {
    return { minutes: 28, words: 7000 };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = articles[slug];
  if (!entry) return {};
  return buildArticleMetadata(entry.meta, LANG);
}

export default async function ArticlePageEn({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = articles[slug];
  if (!entry) notFound();

  const { Component, meta, references } = entry;
  const stats = await getReadingStats(entry.filePath);
  const jsonLd = buildArticleJsonLd(meta, stats.minutes, LANG);
  const articleUrl = `${SITE_URL}/blog/${slug}/en`;
  const headings = articleHeadings(LANG);
  const t = getStrings(LANG);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ReadingProgress targetSelector="#article-main article" lang={LANG} />
      <ChapterRail headings={headings} lang={LANG} />

      <main id="article-main">
        <article itemScope itemType="https://schema.org/BlogPosting">
          <Cover fm={meta} lang={LANG} />

          <div className="page-layout">
            <aside className="toc-col" aria-label={t.tocSidebarAriaLabel}>
              <ArticleTOC headings={headings} lang={LANG} />
            </aside>

            <div className="article-prose">
              <ArticleHeader fm={meta} readingMinutes={stats.minutes} lang={LANG} />
              <OverviewCard
                summary={meta.description}
                takeaways={meta.takeaways}
                lang={LANG}
              />
              <Component />
              <Colophon lang={LANG} />
              <ShareBar
                url={articleUrl}
                title={meta.title}
                description={meta.description}
                lang={LANG}
              />
              <Footnotes refs={references} lang={LANG} />
            </div>

            <aside className="sidebar-col" aria-label={t.sidebarMetaAria}>
              <ArticleSidebar
                fm={meta}
                readingMinutes={stats.minutes}
                wordCount={stats.words}
                lang={LANG}
              />
            </aside>
          </div>
        </article>
      </main>

      <MobileTOCDrawer headings={headings} lang={LANG} />
    </>
  );
}
