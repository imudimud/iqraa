import { ArticleFrontmatterSchema, type ArticleFrontmatter } from "@/lib/article";

export const meta: ArticleFrontmatter = ArticleFrontmatterSchema.parse({
  slug: "monde-pas-vide",
  title:
    "The World Is Not Empty — A meditation on light, shadow, the expanding universe, the heart, basīrah, the nafs, and the signs of Allah",
  titleAccent: { before: "The World", emphasis: "Is Not Empty" },
  subtitle:
    "A meditation on light, shadow, the expanding universe, the heart, basīrah, the nafs, and the signs of Allah.",
  category: "Quran & Meditation",
  author: { name: "Imed", role: "Meditation", initial: "I" },
  publishedAt: "2026-05-06",
  updatedAt: "2026-05-06",
  language: "en",
  edition: "Reading III · Meditation",
  description:
    "A long meditation on perception, divine light, the heart, the nafs, the rūḥ, and the reading of signs: why the universe, the shadow, cosmic expansion, and the human heart are never empty for one who learns to read them.",
  tags: [
    "Quran",
    "Light",
    "Heart",
    "Nafs",
    "Basīrah",
    "Rūḥ",
    "Cosmology",
    "Spirituality",
  ],
  takeaways: [
    "The universe is not empty — it is full of signs for those who know how to read them.",
    "True blindness is not of the eyes but of the hearts within the chests.",
    "The shadow obeys Allah with a regularity the ego refuses.",
    "Basīrah is not a sixth sense — it is the heart seeing by the light Allah grants.",
    "Outer expansion of knowledge produces inner contraction when ungrounded by guidance.",
    "Knowledge without nūr becomes fitnah; with nūr, it becomes amanah.",
  ],
  centralCitation: {
    arabic: "فإنها لا تعمى الأبصار ولكن تعمى القلوب التي في الصدور",
    translation:
      "It is not the eyes that become blind, but the hearts within the chests that become blind.",
    reference: "Surah Al-Hajj, 22:46",
  },
});
