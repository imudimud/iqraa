"use client";

import { useEffect, useRef, useState } from "react";
import { List, X } from "lucide-react";
import type { Heading } from "@/lib/toc";
import { type Lang, getStrings } from "@/lib/i18n";

export function MobileTOCDrawer({
  headings,
  lang,
}: {
  headings: Heading[];
  lang: Lang;
}) {
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const t = getStrings(lang);

  useEffect(() => {
    if (!open) return;
    previousFocusRef.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const first = drawerRef.current?.querySelector<HTMLAnchorElement>(
      ".toc__link"
    );
    first?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      previousFocusRef.current?.focus();
    };
  }, [open]);

  function go(id: string) {
    setOpen(false);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="fab"
        onClick={() => setOpen(true)}
        aria-label={t.drawerOpen}
        aria-expanded={open}
        aria-controls="mobile-toc-drawer"
      >
        <List size={20} aria-hidden />
      </button>

      <div
        className="drawer-backdrop"
        data-open={open}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      <div
        id="mobile-toc-drawer"
        ref={drawerRef}
        className="drawer"
        data-open={open}
        role="dialog"
        aria-modal={open}
        aria-label={t.drawerDialogAria}
      >
        <div className="drawer__handle" aria-hidden="true" />
        <div className="drawer__head">
          <p className="drawer__title">{t.drawerTitle}</p>
          <button
            type="button"
            className="icon-btn"
            onClick={() => setOpen(false)}
            aria-label={t.drawerClose}
          >
            <X size={18} aria-hidden />
          </button>
        </div>
        <div className="drawer__body">
          <ul className="toc__list">
            {headings.map((h) => (
              <li key={h.id} className="toc__item">
                <a
                  href={`#${h.id}`}
                  className="toc__link"
                  onClick={(e) => {
                    e.preventDefault();
                    go(h.id);
                  }}
                >
                  {h.text}
                </a>
                {h.children && h.children.length > 0 ? (
                  <ul className="toc__list">
                    {h.children.map((c) => (
                      <li key={c.id} className="toc__item">
                        <a
                          href={`#${c.id}`}
                          className="toc__link toc__link--h3"
                          onClick={(e) => {
                            e.preventDefault();
                            go(c.id);
                          }}
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
        </div>
      </div>
    </>
  );
}
