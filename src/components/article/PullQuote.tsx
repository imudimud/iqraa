import type { ReactNode } from "react";

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <aside className="pull-quote" role="note">
      <p>{children}</p>
    </aside>
  );
}
