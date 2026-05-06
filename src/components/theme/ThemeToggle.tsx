"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "iqraa-theme";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | null>(null);

  useEffect(() => {
    const current =
      (document.documentElement.getAttribute("data-theme") as
        | "light"
        | "dark"
        | null) || "dark";
    setTheme(current);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore (sandboxed iframes block storage) */
    }
  }

  // Inert placeholder on first paint to avoid hydration mismatch.
  if (theme === null) {
    return (
      <button
        type="button"
        className="icon-btn"
        aria-label="Bascule du thème"
        aria-pressed="false"
        suppressHydrationWarning
      >
        <Sun size={17} aria-hidden />
      </button>
    );
  }

  const isDark = theme === "dark";
  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      aria-label={
        isDark ? "Passer en thème parchemin (jour)" : "Passer en thème nuit"
      }
      aria-pressed={isDark}
      title={isDark ? "Mode parchemin" : "Mode nuit"}
    >
      {isDark ? <Sun size={17} aria-hidden /> : <Moon size={17} aria-hidden />}
    </button>
  );
}
