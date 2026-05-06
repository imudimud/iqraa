"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { altLangPath, getStrings, langFromPath } from "@/lib/i18n";

/**
 * Pill button that switches between FR and EN by linking to the alternate
 * URL (current path with `/en` appended or stripped). Renders the *target*
 * language code, which is the convention readers expect ("EN" while on FR,
 * "FR" while on EN).
 */
export function LanguageToggle() {
  const pathname = usePathname() || "/";
  const lang = langFromPath(pathname);
  const t = getStrings(lang);
  const alt = altLangPath(pathname, lang);
  return (
    <Link
      href={alt}
      className="lang-toggle"
      aria-label={t.languageAria}
      hrefLang={lang === "fr" ? "en" : "fr"}
      prefetch={false}
    >
      {t.languageButtonLabel}
    </Link>
  );
}
