import type { ArticleFrontmatter } from "@/lib/article";
import { Clock } from "lucide-react";
import { type Lang, getStrings } from "@/lib/i18n";

interface ArticleHeaderProps {
  fm: ArticleFrontmatter;
  readingMinutes: number;
  lang: Lang;
}

export function ArticleHeader({ fm, readingMinutes, lang }: ArticleHeaderProps) {
  const t = getStrings(lang);
  const formatter = new Intl.DateTimeFormat(t.dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="article-meta" role="contentinfo" aria-label={t.articleMetaAria}>
      <div className="article-meta__top">
        <span className="article-meta__category">{fm.category}</span>
        <span
          className="article-meta__reading"
          aria-label={`${readingMinutes} ${t.minRead}`}
        >
          <Clock size={12} aria-hidden /> {readingMinutes} min
        </span>
      </div>
      <div className="article-meta__byline">
        <span className="article-meta__author">
          <span className="article-meta__avatar" aria-hidden="true">
            {fm.author.initial}
          </span>
          <span className="article-meta__author-name">{fm.author.name}</span>
        </span>
        <span className="article-meta__sep" aria-hidden="true">·</span>
        <time dateTime={fm.publishedAt}>
          {formatter.format(new Date(fm.publishedAt))}
        </time>
        <span className="article-meta__sep" aria-hidden="true">·</span>
        <span className="article-meta__lang" aria-label={t.langDescription}>
          {t.langPairOwn}&nbsp;/&nbsp;
          <span className="article-meta__lang-ar" lang="ar" dir="rtl">
            {t.langPairAr}
          </span>
        </span>
      </div>
    </div>
  );
}
