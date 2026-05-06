"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/toc";
import { type Lang, getStrings } from "@/lib/i18n";

export function ArticleTOC({
  headings,
  lang,
}: {
  headings: Heading[];
  lang: Lang;
}) {
  const [active, setActive] = useState<string>("");
  const t = getStrings(lang);

  useEffect(() => {
    if (!headings.length) return;
    const elements = headings
      .flatMap((h) => [h, ...(h.children ?? [])])
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => !!el);
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-15% 0px -75% 0px", threshold: 0 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav className="toc" aria-label={t.tocAriaLabel}>
      <p className="toc__heading">{t.tocTitle}</p>
      <ul className="toc__list">
        {headings.map((h) => (
          <li key={h.id} className="toc__item">
            <a
              href={`#${h.id}`}
              className={`toc__link ${active === h.id ? "is-active" : ""}`}
            >
              {h.text}
            </a>
            {h.children && h.children.length > 0 ? (
              <ul className="toc__list">
                {h.children.map((c) => (
                  <li key={c.id} className="toc__item">
                    <a
                      href={`#${c.id}`}
                      className={`toc__link toc__link--h3 ${active === c.id ? "is-active" : ""}`}
                    >
                      {c.text}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
