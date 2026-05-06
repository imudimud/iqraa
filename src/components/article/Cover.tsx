import type { ArticleFrontmatter } from "@/lib/article";
import { type Lang, getStrings } from "@/lib/i18n";

interface CoverProps {
  fm: ArticleFrontmatter;
  lang: Lang;
}

/**
 * The dramatic full-bleed opening: kicker + diamond imprint at top, the
 * massive "اقرأ" centered, the title in display italic, byline + scroll
 * cue at the bottom. Animated entrance via CSS.
 */
export function Cover({ fm, lang }: CoverProps) {
  const t = getStrings(lang);
  const edition = fm.edition ?? t.coverEdition;
  return (
    <header className="cover" aria-label="Cover">
      <div className="cover__top">
        <div className="cover__imprint">
          <span className="cover__imprint-mark" aria-hidden="true" />
          <span>
            Iqraa &nbsp;·&nbsp; {edition}
          </span>
        </div>
        <span className="cover__date" aria-hidden="true">
          {t.coverYearRoman}
        </span>
      </div>

      <div className="cover__center">
        <div>
          <div className="cover__iqra" lang="ar" dir="rtl" aria-hidden="true">
            اقرأ
          </div>
          <p className="cover__iqra-caption">{t.coverIqraCaption}</p>
          <h1 className="cover__title">
            {fm.titleAccent.before} <em>{fm.titleAccent.emphasis}</em>
          </h1>
          <p className="cover__subtitle">{fm.subtitle}</p>
        </div>
      </div>

      <div className="cover__bottom">
        <div className="cover__bottom-col">
          <span className="cover__bottom-label">{fm.category.split("&")[0].trim()}</span>
          <span>{t.coverChaptersDuration}</span>
        </div>
        <span className="cover__scroll-cue" aria-hidden="true">
          {t.coverScrollCue}
        </span>
        <div className="cover__bottom-col cover__bottom-col--end">
          <span className="cover__bottom-label">{t.coverAuthor}</span>
          <span>{fm.author.name}</span>
        </div>
      </div>
    </header>
  );
}
