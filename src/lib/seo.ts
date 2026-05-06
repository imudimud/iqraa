import type { Metadata } from "next";
import type { ArticleFrontmatter } from "./article";
import type { Lang } from "./i18n";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://iqraa.example.com";
const SITE_NAME = "Iqraa";

/**
 * Build Next metadata for an article.
 * `lang` decides the canonical URL: French = `/blog/<slug>`, English = `/blog/<slug>/en`.
 */
export function buildArticleMetadata(
  fm: ArticleFrontmatter,
  lang: Lang
): Metadata {
  const frUrl = `${SITE_URL}/blog/${fm.slug}`;
  const enUrl = `${SITE_URL}/blog/${fm.slug}/en`;
  const url = lang === "en" ? enUrl : frUrl;
  const ogPath =
    lang === "en"
      ? `/blog/${fm.slug}/en/opengraph-image`
      : `/blog/${fm.slug}/opengraph-image`;
  return {
    title: fm.title,
    description: fm.description,
    keywords: fm.tags,
    authors: [{ name: fm.author.name }],
    creator: fm.author.name,
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": frUrl,
        "en-US": enUrl,
      },
    },
    openGraph: {
      type: "article",
      title: fm.title,
      description: fm.description,
      url,
      siteName: SITE_NAME,
      locale: lang === "en" ? "en_US" : "fr_FR",
      publishedTime: fm.publishedAt,
      modifiedTime: fm.updatedAt ?? fm.publishedAt,
      authors: [fm.author.name],
      tags: fm.tags,
      images: [
        {
          url: ogPath,
          width: 1200,
          height: 630,
          alt: fm.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fm.title,
      description: fm.description,
      images: [ogPath],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function buildArticleJsonLd(
  fm: ArticleFrontmatter,
  readingMinutes: number,
  lang: Lang
) {
  const url =
    lang === "en"
      ? `${SITE_URL}/blog/${fm.slug}/en`
      : `${SITE_URL}/blog/${fm.slug}`;
  const ogPath =
    lang === "en"
      ? `${SITE_URL}/blog/${fm.slug}/en/opengraph-image`
      : `${SITE_URL}/blog/${fm.slug}/opengraph-image`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    headline: fm.title,
    name: fm.title,
    description: fm.description,
    image: ogPath,
    datePublished: fm.publishedAt,
    dateModified: fm.updatedAt ?? fm.publishedAt,
    inLanguage: lang === "en" ? "en-US" : "fr-FR",
    keywords: fm.tags.join(", "),
    timeRequired: `PT${readingMinutes}M`,
    author: {
      "@type": "Person",
      name: fm.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
