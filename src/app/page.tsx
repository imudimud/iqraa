import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { listArticles, articleHref } from "@/lib/articles-index";

const LANG = "fr" as const;
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://iqraa-zeta.vercel.app";

const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  month: "long",
  year: "numeric",
});

interface Term {
  arabic: string;
  name: string;
  gloss: string;
}

const TERMS: Term[] = [
  { arabic: "اقرأ", name: "Iqra", gloss: "« Lis. » — Le premier mot de la révélation." },
  { arabic: "بصيرة", name: "Basîrah", gloss: "Vision intérieure ; lecture des signes." },
  { arabic: "النفس", name: "Al-Nafs", gloss: "L'âme en lutte — désir, blâme, apaisement." },
  { arabic: "أمانة", name: "Amânah", gloss: "Confiance divine confiée à l'homme seul." },
  { arabic: "نور على نور", name: "Nûr 'alâ Nûr", gloss: "Lumière sur lumière — fitrah et révélation." },
  { arabic: "لتعارفوا", name: "Lita'arafu", gloss: "« Que vous vous connaissiez. » — La diversité comme commandement." },
];

export const metadata: Metadata = {
  title: "Iqraa — Lectures à la lumière du Coran",
  description:
    "Iqraa rassemble des lectures éditoriales — des essais et méditations qui croisent le Coran avec la connaissance contemporaine, la lumière et la dualité humaine.",
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "fr-FR": `${SITE_URL}/`,
      "en-US": `${SITE_URL}/en`,
    },
  },
  openGraph: {
    title: "Iqraa — Lectures à la lumière du Coran",
    description:
      "Lectures éditoriales : Iqra, basîrah, le nafs, l'amânah, et la lumière du Coran.",
    url: SITE_URL,
    siteName: "Iqraa",
    locale: "fr_FR",
    type: "website",
  },
};

export default function HomeFr() {
  const articles = listArticles(LANG);

  return (
    <main id="article-main" className="home">
      <section className="home__hero" aria-label="Présentation">
        <span className="home__hero-bismillah" lang="ar" dir="rtl" aria-label="Au nom de Dieu, le Tout-Miséricordieux, le Très-Miséricordieux">
          ﷽
        </span>
        <p className="home__hero-eyebrow">Lectures · Iqraa</p>
        <h1 className="home__hero-brand">
          <span className="home__hero-mark" lang="ar" dir="rtl" aria-hidden="true">
            اقرأ
          </span>
          <span className="home__hero-name">Iqraa</span>
        </h1>
        <p className="home__hero-tagline">
          Des lectures éditoriales à la lumière du Coran.
        </p>
        <span className="home__hero-line" aria-hidden="true" />
      </section>

      <section className="home__intro" aria-label="Intention">
        <p>
          Iqraa rassemble des essais et des méditations qui prennent au sérieux
          la première parole de la révélation — <em>Lis</em> — et la prolongent
          dans le présent. Chaque lecture relit la création, la science, le
          cœur et le <em>nafs</em> à la lumière du Coran, sans confondre l'une
          avec l'autre.
        </p>
        <p>
          Les pièces ne sont ni des manuels ni des sermons. Elles sont une
          tentative honnête, longue, lente, de comprendre ce que signifie être
          un être humain en 2026 — porteur d'<em>amânah</em>, témoin de signes,
          tenu à la <em>basîrah</em>.
        </p>
      </section>

      <section className="home__section" aria-label="Vocabulaire">
        <header className="home__section-head">
          <span className="home__section-eyebrow">Vocabulaire</span>
          <h2 className="home__section-title">Mots-clés des lectures</h2>
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

      <section className="home__section" aria-label="Sommaire des lectures">
        <header className="home__section-head">
          <span className="home__section-eyebrow">Sommaire</span>
          <h2 className="home__section-title">Quatre lectures</h2>
        </header>
        <ul className="home__articles">
          {articles.map(({ meta, estimatedMinutes }) => (
            <li key={meta.slug}>
              <Link href={articleHref(meta)} className="home__article">
                <span className="home__article-edition">
                  {meta.edition ?? "Lecture"}
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
                    Lire <ArrowRight size={12} aria-hidden />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <aside className="home__closing" aria-label="Colophon">
        <span className="home__closing-mark" lang="ar" dir="rtl" aria-hidden="true">
          والله أعلم
        </span>
        <p>Et Allah sait mieux.</p>
      </aside>
    </main>
  );
}
