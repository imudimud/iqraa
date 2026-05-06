import type { ReactNode } from "react";
import { Lightbulb, TriangleAlert } from "lucide-react";

interface CalloutProps {
  variant?: "tip" | "warning";
  label?: string;
  children: ReactNode;
}

export function Callout({ variant = "tip", label, children }: CalloutProps) {
  const Icon = variant === "warning" ? TriangleAlert : Lightbulb;
  const defaultLabel = variant === "warning" ? "Avertissement" : "À noter";
  return (
    <aside
      className={`callout ${variant === "warning" ? "callout--warning" : ""}`}
      role="note"
    >
      <span className="callout__icon" aria-hidden="true">
        <Icon size={20} />
      </span>
      <div className="callout__body">
        <span className="callout__label">{label ?? defaultLabel}</span>
        {children}
      </div>
    </aside>
  );
}
