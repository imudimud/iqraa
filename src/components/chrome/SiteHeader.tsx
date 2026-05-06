"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { LanguageToggle } from "@/components/theme/LanguageToggle";
import { getStrings, langFromPath } from "@/lib/i18n";

export function SiteHeader() {
  const pathname = usePathname() || "/";
  const lang = langFromPath(pathname);
  const t = getStrings(lang);
  // Brand link goes to the home of the active language.
  const home = lang === "en" ? "/en" : "/";
  return (
    <header className="site-header" role="banner">
      <Link href={home} className="site-header__brand" aria-label={t.siteHomeAria}>
        <span className="site-header__brand-mark" lang="ar" dir="rtl">
          اقرأ
        </span>
        <span className="site-header__brand-text">Iqraa</span>
      </Link>
      <nav className="site-header__nav" aria-label={t.navAria}>
        <LanguageToggle />
        <ThemeToggle />
      </nav>
    </header>
  );
}
