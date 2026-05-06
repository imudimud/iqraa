import { ArticleFrontmatterSchema, type ArticleFrontmatter } from "@/lib/article";

export const meta: ArticleFrontmatter = ArticleFrontmatterSchema.parse({
  slug: "quran-ai-duality-v2",
  title:
    "L'Univers Parle (II) — IA, Connaissance, Justice et Dualité Humaine à la Lumière du Coran",
  titleAccent: { before: "L'Univers", emphasis: "Parle" },
  subtitle:
    "Une méditation étendue sur la connaissance, l'intelligence artificielle, la justice algorithmique, l'illusion du savoir et la responsabilité humaine à la lumière du Coran.",
  category: "Coran & Intelligence Artificielle",
  author: { name: "Imed", role: "Essai · Édition étendue", initial: "I" },
  publishedAt: "2026-05-06",
  updatedAt: "2026-05-06",
  language: "fr",
  edition: "Lecture II · Édition étendue",
  description:
    "Édition étendue : seize chapitres qui prolongent la première lecture en interrogeant la responsabilité, la justice algorithmique, l'illusion de la connaissance et l'IA comme épreuve.",
  tags: [
    "Coran",
    "Intelligence Artificielle",
    "Éthique",
    "Justice",
    "Connaissance",
    "Nafs",
    "Fitna",
    "Spiritualité",
  ],
  takeaways: [
    "Le premier commandement coranique, « Iqra », fonde une éthique de la connaissance.",
    "L'IA ne crée pas les signes : elle augmente notre capacité à les observer.",
    "La technologie révèle la dualité du nafs : gratitude, responsabilité ou orgueil.",
    "L'IA ne se trompe pas comme un humain — elle se trompe avec confiance.",
    "Une décision automatisée n'est pas une décision neutre.",
    "Accumuler de l'information n'est pas accumuler du sens.",
    "Une facilité peut être une épreuve déguisée.",
  ],
  centralCitation: {
    arabic: "اقرأ باسم ربك الذي خلق",
    translation: "Lis au nom de ton Seigneur qui a créé.",
    reference: "Sourate Al-'Alaq, 96:1",
  },
});
