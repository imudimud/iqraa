"use client";

import { useEffect, useRef } from "react";
import { type Lang, getStrings } from "@/lib/i18n";

interface ReadingProgressProps {
  targetSelector?: string;
  lang: Lang;
}

export function ReadingProgress({
  targetSelector = "#article-main article",
  lang,
}: ReadingProgressProps) {
  const barRef = useRef<HTMLDivElement | null>(null);
  const tickingRef = useRef(false);
  const t = getStrings(lang);

  useEffect(() => {
    const target = document.querySelector(targetSelector) as HTMLElement | null;
    if (!target || !barRef.current) return;

    const update = () => {
      tickingRef.current = false;
      const rect = target.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.max(0, -rect.top);
      const pct = total > 0 ? Math.min(100, (scrolled / total) * 100) : 0;
      if (barRef.current) {
        barRef.current.style.width = `${pct}%`;
        barRef.current.setAttribute("aria-valuenow", String(Math.round(pct)));
      }
    };
    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [targetSelector]);

  return (
    <div
      ref={barRef}
      className="reading-progress"
      role="progressbar"
      aria-label={t.readingProgressAria}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={0}
    />
  );
}
