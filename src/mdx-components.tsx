import type { MDXComponents } from "mdx/types";
import { QuranBlock } from "@/components/article/QuranBlock";
import { HadithBlock } from "@/components/article/HadithBlock";
import { PullQuote } from "@/components/article/PullQuote";
import { Callout } from "@/components/article/Callout";
import { SectionDivider } from "@/components/article/SectionDivider";
import { NafsTriad } from "@/components/article/NafsTriad";
import { FootnoteRef } from "@/components/article/FootnoteRef";

const components: MDXComponents = {
  h2: ({ children, id, ...rest }) => (
    <h2 id={id} className="article-h2" {...rest}>
      {children}
    </h2>
  ),
  h3: ({ children, id, ...rest }) => (
    <h3 id={id} className="article-h3" {...rest}>
      {children}
    </h3>
  ),
  a: ({ href, children, ...rest }) => {
    const isExternal = typeof href === "string" && /^https?:/.test(href);
    return (
      <a
        href={href}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...rest}
      >
        {children}
      </a>
    );
  },
  QuranBlock,
  HadithBlock,
  PullQuote,
  Callout,
  SectionDivider,
  NafsTriad,
  FootnoteRef,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
