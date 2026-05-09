import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { listArticles, articleHref } from "@/lib/articles-index";

const LANG = "en" as const;
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://iqraa-zeta.vercel.app";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  year: "numeric",
});

interface Term {
  arabic: string;
  name: string;
  gloss: string;
}

const TERMS: Term[] = [
  { arabic: "اقرأ", name: "Iqra", gloss: "“Read.” — The first word of revelation." },
  { arabic: "بصيرة", name: "Basīrah", gloss: "Inner sight — the reading of signs." },
  { arabic: "النفس", name: "Al-Nafs", gloss: "The struggling self — desire, blame, peace." },
  { arabic: "أمانة", name: "Amānah", gloss: "The divine trust placed upon man alone." },
  { arabic: "نور على نور", name: "Nūr ʿalā Nūr", gloss: "Light upon light — fitrah meeting revelation." },
  { arabic: "لتعارفوا", name: "Lita'arafu", gloss: "“That you may know one another.” — Diversity as command." },
];

export const metadata: Metadata = {
  title: "Iqraa — Readings in the light of the Quran",
  description:
    "Iqraa gathers editorial readings — essays and meditations that bring the Quran into conversation with contemporary knowledge, light, and human duality.",
  alternates: {
    canonical: `${SITE_URL}/en`,
    languages: {
      "fr-FR": `${SITE_URL}/`,
      "en-US": `${SITE_URL}/en`,
    },
  },
  openGraph: {
    title: "Iqraa — Readings in the light of the Quran",
    description:
      "Editorial readings: Iqra, basīrah, the nafs, the amānah, and the light of the Quran.",
    url: `${SITE_URL}/en`,
    siteName: "Iqraa",
    locale: "en_US",
    type: "website",
  },
};

export default function HomeEn() {
  const articles = listArticles(LANG);

  return (
    <main id="article-main" className="home">
      <section className="home__hero" aria-label="Introduction">
        <span
          className="home__hero-bismillah"
          lang="ar"
          dir="rtl"
          aria-label="In the name of God, the Most Gracious, the Most Merciful"
        >
          ﷽
        </span>
        <p className="home__hero-eyebrow">Readings · Iqraa</p>
        <h1 className="home__hero-brand">
          <span className="home__hero-mark" lang="ar" dir="rtl" aria-hidden="true">
            اقرأ
          </span>
          <span className="home__hero-name">Iqraa</span>
        </h1>
        <p className="home__hero-tagline">
          Editorial readings in the light of the Quran.
        </p>
        <span className="home__hero-line" aria-hidden="true" />
      </section>

      <section className="home__intro" aria-label="Intent">
        <p>
          Iqraa gathers essays and meditations that take the first word of
          revelation — <em>Read</em> — seriously, and carry it into the
          present. Each reading turns the lens of the Quran on creation, on
          science, on the heart and the <em>nafs</em>, without confusing one
          register for another.
        </p>
        <p>
          The pieces are neither manuals nor sermons. They are an honest, slow
          attempt to understand what it means to be a human being in 2026 —
          bearer of an <em>amānah</em>, witness to signs, held to{" "}
          <em>basīrah</em>.
        </p>
      </section>

      <section className="home__section" aria-label="Vocabulary">
        <header className="home__section-head">
          <span className="home__section-eyebrow">Vocabulary</span>
          <h2 className="home__section-title">Key terms across the readings</h2>
        </header>
        <div className="home__terms" role="list">
          {TERMS.map((term) => (
            <article key={term.name} className="home__term-card" role="listitem">
              <div className="home__term-arabic" lang="ar" dir="rtl">
                {term.arabic}
              </div>
              <div className="home__term-name">{term.name}</div>
              <p className="home__term-gloss">{term.gloss}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home__section" aria-label="Available readings">
        <header className="home__section-head">
          <span className="home__section-eyebrow">Index</span>
          <h2 className="home__section-title">Available readings</h2>
        </header>
        <ul className="home__articles">
          {articles.map(({ meta, estimatedMinutes }) => (
            <li key={meta.slug}>
              <Link href={articleHref(meta)} className="home__article">
                <span className="home__article-edition">
                  {meta.edition ?? "Reading"}
                </span>
                <h3 className="home__article-title">
                  {meta.titleAccent.before}{" "}
                  <em>{meta.titleAccent.emphasis}</em>
                </h3>
                <p className="home__article-subtitle">{meta.subtitle}</p>
                <div className="home__article-meta">
                  <span>{meta.category}</span>
                  <span className="home__article-meta-dot" aria-hidden="true" />
                  <span>{estimatedMinutes} min</span>
                  <span className="home__article-meta-dot" aria-hidden="true" />
                  <time dateTime={meta.publishedAt}>
                    {dateFormatter.format(new Date(meta.publishedAt))}
                  </time>
                  <span className="home__article-meta-cta">
                    Read <ArrowRight size={12} aria-hidden />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <p
          style={{
            marginTop: "var(--space-8)",
            textAlign: "center",
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            color: "var(--color-text-faint)",
            fontSize: "0.95rem",
          }}
        >
          More readings are available in{" "}
          <Link href="/" style={{ color: "var(--color-gold-light)", textDecoration: "underline", textDecorationColor: "var(--color-gold-soft)", textUnderlineOffset: "0.2em" }}>
            French
          </Link>{" "}
          and have not yet been translated.
        </p>
      </section>

      <aside className="home__closing" aria-label="Colophon">
        <span className="home__closing-mark" lang="ar" dir="rtl" aria-hidden="true">
          والله أعلم
        </span>
        <p>And Allah knows best.</p>
      </aside>
    </main>
  );
}
