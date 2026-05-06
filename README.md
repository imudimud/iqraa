# Iqraa — Lectures

> Premium long-form editorial blog template, built around the article *« L'Univers Parle — IA, Connaissance et Dualité Humaine à la Lumière du Coran »*.

A reusable Next.js template for slow, considered reading. Designed to feel like a Stripe Press essay with the typographic dignity an Arabic Qur'anic citation deserves.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript** (strict)
- **Tailwind CSS v4** (`@theme` tokens, no config bloat)
- **MDX** via `@next/mdx` for article content
- **`motion`** + **`lucide-react`** for the few client islands
- **`reading-time`**, **`zod`**, **`gray-matter`** for the article system
- **Instrument Serif** + **Work Sans** + **Amiri Quran** typography
- **`next/og`** for dynamic OpenGraph image generation

No third-party trackers. No heavy UI library. No CMS dependency.

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # serve the build
```

The home page (`/`) redirects to the canonical article at `/blog/quran-ai-duality`.

## Project anatomy

```
src/
├── app/
│   ├── layout.tsx              # html lang="fr", fonts, theme bootstrap
│   ├── globals.css             # tokens (light + dark), base, prose, layout
│   ├── page.tsx                # → redirects to /blog/quran-ai-duality
│   └── blog/[slug]/
│       ├── page.tsx            # article renderer (Server Component)
│       └── opengraph-image.tsx # 1200×630 OG generator (next/og)
├── components/
│   ├── article/                # 13 article components
│   ├── chrome/                 # SiteHeader, SiteFooter, SkipLink
│   └── theme/ThemeToggle.tsx
├── content/
│   ├── articles/
│   │   ├── quran-ai-duality.mdx     # the article body
│   │   └── quran-ai-duality.meta.ts # zod-validated frontmatter
│   └── references/
│       └── quran-ai-duality.ts      # 51-entry reference list
├── lib/
│   ├── article.ts              # zod schema + ArticleFrontmatter type
│   ├── toc.ts                  # hand-authored heading map
│   ├── seo.ts                  # buildArticleMetadata + JSON-LD
│   └── share.ts                # share URL builders + clipboard helper
├── styles/
│   ├── prose.css               # body prose, drop cap, h2/h3 inside articles
│   └── quran.css               # the centerpiece QuranBlock styling
└── mdx-components.tsx          # MDX → React component map
```

## How to add a new article

1. **Create the frontmatter** at `src/content/articles/<slug>.meta.ts`:

   ```ts
   import { ArticleFrontmatterSchema, type ArticleFrontmatter } from "@/lib/article";
   export const meta: ArticleFrontmatter = ArticleFrontmatterSchema.parse({
     slug: "<slug>",
     title: "...",
     subtitle: "...",
     category: "...",
     author: { name: "Imed", role: "Essai", initial: "I" },
     publishedAt: "2026-06-01",
     language: "fr",
     description: "...",
     tags: ["..."],
     takeaways: ["...", "...", "...", "...", "..."],
     centralCitation: { arabic: "...", translation: "...", reference: "..." },
   });
   ```

2. **Write the body** at `src/content/articles/<slug>.mdx`. Use:
   - `<h2 id="<anchor>" className="article-h2">…</h2>` for headings (so they match `lib/toc.ts`)
   - `<QuranBlock arabic="…" translation="…" reference="…" />` for verses
   - `<HadithBlock source="…">…</HadithBlock>` for hadith
   - `<PullQuote>…</PullQuote>` sparingly
   - `<Callout variant="tip|warning">…</Callout>` for asides
   - `<SectionDivider />` between major sections
   - `<FootnoteRef n={1} />` or `<FootnoteRef n={[1,2,3]} />` for citations

3. **Add the references** at `src/content/references/<slug>.ts` — exports `Reference[]`.

4. **Author the TOC** at `src/lib/toc.ts` — H2 list with optional H3 children whose `id` values match those in the MDX.

5. **Register the article** in `src/app/blog/[slug]/page.tsx`'s `articles` map and in `src/app/blog/[slug]/opengraph-image.tsx`'s `articles` map.

6. **`pnpm dev`** — Next.js picks it up automatically, including OG image, JSON-LD, sitemap entry, and TOC.

## QuranBlock — the centerpiece component

```tsx
<QuranBlock
  arabic="اقرأ باسم ربك الذي خلق"
  translation="Lis au nom de ton Seigneur qui a créé."
  reference="Sourate Al-'Alaq · 96:1"
/>
```

- Renders RTL Arabic in **Amiri Quran** at `clamp(1.5rem, 2.4rem)`, `line-height: 2.05`.
- French translation in italic display font, muted.
- Four CSS-only gold corner brackets, parchment radial gradient.
- Reference citation in small caps, flanked by gold rules.
- `lang="ar" dir="rtl"` on the Arabic node, `lang="fr"` on the translation. WCAG AA contrast in both light and dark modes.
- **No animation, no hover transform on the Arabic text** — it is sacred and never decorated as a graphic gimmick.

## Customizing theme tokens

All design tokens live in `src/app/globals.css`:

- `:root { --color-bg, --color-text, --color-primary, --color-gold, ... }` — light mode
- `[data-theme="dark"] { ... }` — dark mode override
- `@theme { --text-*, --space-*, --radius-*, --font-* }` — Tailwind v4's CSS-first config

Two accent colors only: **teal** for interaction (TOC, links, primary buttons), **gold** for sacred elements (Qur'anic blocks, citation card, brand mark). No third accent.

## Performance & a11y

- All fonts loaded via `next/font` (Latin) or `<link>` (Amiri Quran), `display=swap`, preconnects.
- Article body is server-rendered MDX. Only six client islands: `ReadingProgress`, `ArticleTOC`, `MobileTOCDrawer`, `ShareBar`, `ThemeToggle`, `OverviewCard`.
- Hero is **CSS-only** (no LCP image cost).
- WCAG 2.1 AA targeted: skip link, focus rings, `aria-*`, `prefers-reduced-motion`, `lang="ar" dir="rtl"` on every Arabic node.
- No localStorage required for the theme — it falls back to system preference and stores in-memory if blocked.

## Notes

- The legacy `index.html` at `../` (sibling of this folder, inside `Iqraa/`) is a **single-file HTML mockup** preserved as a visual reference. It is not part of this build.
- The default reading-time estimate is computed from the source MDX text and inflated 15 % to account for mixed French + Arabic content.
- Dev environment uses Turbopack; therefore MDX plugins are passed as **string names** in `next.config.ts`.

## License

The article's text remains the property of its author. The template scaffold is yours to adapt.
