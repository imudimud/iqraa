import { type Lang, getStrings } from "@/lib/i18n";

interface ColophonProps {
  lang: Lang;
  edition?: string;
}

/**
 * Article-end colophon: the « والله أعلم » Arabic mark, the localized
 * counterpart in italic, a hairline rule, and a small caps tag.
 */
export function Colophon({ lang, edition }: ColophonProps) {
  const t = getStrings(lang);
  const ed = edition ?? t.coverEdition;
  return (
    <aside className="colophon" role="note" aria-label="Colophon">
      <span className="colophon__arabic" lang="ar" dir="rtl" aria-hidden="true">
        والله أعلم
      </span>
      <p>{t.colophonAfter}</p>
      <span className="colophon__line" aria-hidden="true" />
      <span className="colophon__meta">
        {t.colophonMeta} &nbsp;·&nbsp; {ed}
      </span>
    </aside>
  );
}
