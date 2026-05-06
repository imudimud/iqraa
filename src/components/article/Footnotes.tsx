import { type Lang, getStrings } from "@/lib/i18n";

export interface Reference {
  url: string;
  title: string;
  source?: string;
  desc?: string;
}

export function Footnotes({ refs, lang }: { refs: Reference[]; lang: Lang }) {
  const t = getStrings(lang);
  return (
    <section className="references" id="references" aria-labelledby="references-title">
      <header className="references__head">
        <span className="references__label">{t.referencesEyebrow}</span>
        <h2 className="references__title" id="references-title">
          {t.referencesTitle}
        </h2>
      </header>
      <ol className="references__list">
        {refs.map((r, i) => {
          const n = i + 1;
          return (
            <li key={n} id={`ref-${n}`} className="references__item">
              <a href={r.url} target="_blank" rel="noopener noreferrer">
                {r.title}
              </a>
              {r.source ? <> &mdash; {r.source}</> : null}
              {r.desc ? <span className="desc">{r.desc}</span> : null}
              <a
                href={`#cite-${n}-0`}
                className="references__backlink"
                aria-label={`${t.referencesBacklinkAria} ${n}`}
              >
                ↩
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
