import type { ReactNode } from "react";

interface HadithBlockProps {
  source: string;
  children: ReactNode;
}

export function HadithBlock({ source, children }: HadithBlockProps) {
  return (
    <blockquote className="hadith-block">
      {children}
      <cite className="hadith-block__cite">{source}</cite>
    </blockquote>
  );
}
