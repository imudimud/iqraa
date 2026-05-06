"use client";

import { useEffect, useRef } from "react";

const STAR_COUNT = 90;

/**
 * Atmospheric layers that sit behind every page:
 *  - radial gradient washes
 *  - grain/noise overlay
 *  - twinkling starfield (dark mode only)
 *
 * Stars are generated client-side once on mount to avoid hydration cost.
 */
export function Atmosphere() {
  const starsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const host = starsRef.current;
    if (!host || host.childElementCount > 0) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < STAR_COUNT; i++) {
      const s = document.createElement("i");
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.animationDelay = Math.random() * 8 + "s";
      s.style.animationDuration = 5 + Math.random() * 8 + "s";
      const size = 0.5 + Math.random() * 2;
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.opacity = String(0.15 + Math.random() * 0.45);
      frag.appendChild(s);
    }
    host.appendChild(frag);
  }, []);

  return (
    <>
      <div className="atmosphere-wash" aria-hidden="true" />
      <div ref={starsRef} className="atmosphere-stars" aria-hidden="true" />
      <div className="atmosphere-grain" aria-hidden="true" />
    </>
  );
}
