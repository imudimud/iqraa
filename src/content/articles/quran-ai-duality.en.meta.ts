import { ArticleFrontmatterSchema, type ArticleFrontmatter } from "@/lib/article";

export const meta: ArticleFrontmatter = ArticleFrontmatterSchema.parse({
  slug: "quran-ai-duality",
  title:
    "The Universe Speaks — AI, Knowledge, and Human Duality in the Light of the Quran",
  titleAccent: { before: "The Universe", emphasis: "Speaks" },
  subtitle:
    "A meditation on knowledge, artificial intelligence, the signs of creation, and human responsibility in the light of the Quran.",
  category: "Quran & Artificial Intelligence",
  author: { name: "Imed", role: "Essay", initial: "I" },
  publishedAt: "2026-05-06",
  updatedAt: "2026-05-06",
  language: "en",
  description:
    "A long-form meditation on artificial intelligence, knowledge, the signs of creation, and human responsibility in the light of the Quran.",
  tags: [
    "Quran",
    "Artificial Intelligence",
    "Ethics",
    "Knowledge",
    "Nafs",
    "Science",
    "Spirituality",
  ],
  takeaways: [
    "The first Quranic commandment, “Iqra,” grounds an ethics of knowledge.",
    "AI does not create the signs: it augments our capacity to observe them.",
    "The verses on horizons, souls, and human diversity become especially urgent in the age of data.",
    "Technology lays bare the duality of the nafs — gratitude, responsibility, or pride.",
    "The modern crisis is not only technical; it is spiritual and moral.",
  ],
  centralCitation: {
    arabic: "اقرأ باسم ربك الذي خلق",
    translation: "Read in the name of your Lord who created.",
    reference: "Surah Al-'Alaq, 96:1",
  },
});
