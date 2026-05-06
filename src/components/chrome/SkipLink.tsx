"use client";

import { usePathname } from "next/navigation";
import { getStrings, langFromPath } from "@/lib/i18n";

export function SkipLink() {
  const pathname = usePathname() || "/";
  const t = getStrings(langFromPath(pathname));
  return (
    <a className="skip-link" href="#article-main">
      {t.skipToContent}
    </a>
  );
}
