import type { ArticleFrontmatter } from "@/lib/article";
import { type Lang, getStrings } from "@/lib/i18n";

interface ArticleSidebarProps {
  fm: ArticleFrontmatter;
  readingMinutes: number;
  wordCount: number;
  lang: Lang;
}

export function ArticleSidebar({
  fm,
  readingMinutes,
  wordCount,
  lang,
}: ArticleSidebarProps) {
  const t = getStrings(lang);
  const formatter = new Intl.DateTimeFormat(t.dateLocale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="sidebar">
      <section className="sidebar-card sidebar-meta" aria-labelledby="sidebar-meta-label">
        <p className="sidebar-card__label" id="sidebar-meta-label">
          {t.sidebarMetaLabel}
        </p>
        <dl>
          <dt>{t.sidebarMetaPublished}</dt>
          <dd>
            <time dateTime={fm.publishedAt}>
              {formatter.format(new Date(fm.publishedAt))}
            </time>
          </dd>
          <dt>{t.sidebarMetaReading}</dt>
          <dd>{readingMinutes} min</dd>
          <dt>{t.sidebarMetaWords}</dt>
          <dd>{wordCount.toLocaleString(t.dateLocale)}</dd>
          <dt>{t.sidebarMetaLanguages}</dt>
          <dd>
            {t.langPairOwn} &middot;{" "}
            <span lang="ar" dir="rtl">{t.langPairAr}</span>
          </dd>
        </dl>
      </section>

      {fm.centralCitation ? (
        <section
          className="citation-card"
          aria-labelledby="citation-label"
        >
          <p
            className="sidebar-card__label"
            id="citation-label"
            style={{ marginBottom: "var(--space-3)" }}
          >
            {t.sidebarCitationLabel}
          </p>
          <p className="citation-card__arabic" lang="ar" dir="rtl">
            {fm.centralCitation.arabic}
          </p>
          <p className="citation-card__translation">
            « {fm.centralCitation.translation} »
          </p>
          <p className="citation-card__cite">{fm.centralCitation.reference}</p>
        </section>
      ) : null}

      <section className="sidebar-card" aria-labelledby="sidebar-tags-label">
        <p className="sidebar-card__label" id="sidebar-tags-label">
          {t.sidebarTagsLabel}
        </p>
        <div className="sidebar-tags">
          {fm.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="sidebar-card" aria-labelledby="sidebar-takeaways-label">
        <p className="sidebar-card__label" id="sidebar-takeaways-label">
          {t.sidebarTakeawaysLabel}
        </p>
        <ul className="overview__takeaways">
          {fm.takeaways.map((tk, i) => (
            <li key={i}>{tk}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
