"use client";

import { useId, useState } from "react";
import { FileText } from "lucide-react";
import { type Lang, getStrings } from "@/lib/i18n";

interface OverviewCardProps {
  summary: string;
  takeaways: string[];
  lang: Lang;
}

export function OverviewCard({ summary, takeaways, lang }: OverviewCardProps) {
  const [collapsed, setCollapsed] = useState(false);
  const bodyId = useId();
  const t = getStrings(lang);
  return (
    <aside
      className="overview"
      data-collapsed={collapsed}
      aria-labelledby={`${bodyId}-label`}
    >
      <div className="overview__head">
        <span className="overview__label" id={`${bodyId}-label`}>
          <FileText size={14} aria-hidden /> {t.overviewTitle}
        </span>
        <button
          type="button"
          className="overview__toggle"
          onClick={() => setCollapsed((v) => !v)}
          aria-expanded={!collapsed}
          aria-controls={bodyId}
        >
          {collapsed ? t.overviewExpand : t.overviewCollapse}
        </button>
      </div>
      <div id={bodyId} className="overview__body">
        <p className="overview__summary">{summary}</p>
        <ul className="overview__takeaways">
          {takeaways.map((tk, i) => (
            <li key={i}>{tk}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
