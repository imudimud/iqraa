import { ArticleFrontmatterSchema, type ArticleFrontmatter } from "@/lib/article";

export const meta: ArticleFrontmatter = ArticleFrontmatterSchema.parse({
  slug: "quran-ai-duality",
  title:
    "L'Univers Parle — IA, Connaissance et Dualité Humaine à la Lumière du Coran",
  titleAccent: { before: "L'Univers", emphasis: "Parle" },
  subtitle:
    "Une méditation sur la connaissance, l'intelligence artificielle, les signes de la création et la responsabilité humaine à la lumière du Coran.",
  category: "Coran & Intelligence Artificielle",
  author: { name: "Imed", role: "Essai", initial: "I" },
  publishedAt: "2026-05-06",
  updatedAt: "2026-05-06",
  language: "fr",
  edition: "Lecture I",
  description:
    "Une méditation longue-forme sur l'intelligence artificielle, la connaissance, les signes de la création et la responsabilité humaine à la lumière du Coran.",
  tags: [
    "Coran",
    "Intelligence Artificielle",
    "Éthique",
    "Connaissance",
    "Nafs",
    "Science",
    "Spiritualité",
  ],
  takeaways: [
    "Le premier commandement coranique, « Iqra », fonde une éthique de la connaissance.",
    "L'IA ne crée pas les signes : elle augmente notre capacité à les observer.",
    "Les versets sur les horizons, les âmes et la diversité humaine deviennent particulièrement pertinents à l'époque des données.",
    "La technologie révèle la dualité du nafs : gratitude, responsabilité ou orgueil.",
    "La crise moderne n'est pas seulement technique, elle est spirituelle et morale.",
  ],
  centralCitation: {
    arabic: "اقرأ باسم ربك الذي خلق",
    translation: "Lis au nom de ton Seigneur qui a créé.",
    reference: "Sourate Al-'Alaq, 96:1",
  },
});
