"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { langFromPath } from "@/lib/i18n";

/**
 * Keep `<html lang="…">` aligned with the active route's language. The root
 * layout renders `lang="fr"` initially; this updates it on every navigation
 * so screen readers and SEO tools see the right BCP-47 tag.
 */
export function HtmlLangSync() {
  const pathname = usePathname() || "/";
  useEffect(() => {
    document.documentElement.lang = langFromPath(pathname);
  }, [pathname]);
  return null;
}
