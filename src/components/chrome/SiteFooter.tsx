"use client";

import { usePathname } from "next/navigation";
import { getStrings, langFromPath } from "@/lib/i18n";

export function SiteFooter() {
  const pathname = usePathname() || "/";
  const t = getStrings(langFromPath(pathname));
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer" role="contentinfo">
      <span className="site-footer__mark" lang="ar" dir="rtl" aria-hidden="true">
        ﷽
      </span>
      <p>{t.footerTagline}</p>
      <p className="site-footer__roman">
        &copy; {year} &middot; {t.footerLanguagesShort} ·{" "}
        <span lang="ar" dir="rtl">عربي</span>
      </p>
    </footer>
  );
}
