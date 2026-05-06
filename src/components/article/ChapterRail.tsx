"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/toc";
import { type Lang, getStrings } from "@/lib/i18n";

interface ChapterRailProps {
  headings: Heading[];
  lang: Lang;
}

/**
 * Floating right-edge nav. Abbreviated labels with scrollspy active state.
 * Visible only on very wide viewports (≥ 1320px).
 */
export function ChapterRail({ headings, lang }: ChapterRailProps) {
  const [active, setActive] = useState<string>("");
  const t = getStrings(lang);

  useEffect(() => {
    const ids = headings.map((h) => h.id);
    const elements = ids
      .map((id) => document.getElementById(id))
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

  return (
    <nav className="chapter-rail" aria-label={t.tocChaptersAriaLabel}>
      {headings.map((h) => (
        <a
          key={h.id}
          href={`#${h.id}`}
          className={active === h.id ? "is-active" : ""}
          aria-current={active === h.id ? "true" : undefined}
        >
          {abbreviate(h.text, lang)}
        </a>
      ))}
    </nav>
  );
}

function abbreviate(text: string, lang: Lang): string {
  if (text.startsWith("Avant-propos") || text.startsWith("Foreword")) return "Av";
  if (text.startsWith("Références") || text.startsWith("References")) return "⁂";
  const m = text.match(/^([IVX]+)\./);
  if (m) return m[1];
  // Fallback: first two letters per language
  return lang === "en" ? text.slice(0, 2) : text.slice(0, 2);
}
