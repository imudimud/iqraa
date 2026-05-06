import { ArticleFrontmatterSchema, type ArticleFrontmatter } from "@/lib/article";

export const meta: ArticleFrontmatter = ArticleFrontmatterSchema.parse({
  slug: "monde-pas-vide",
  title:
    "Le monde n'est pas vide — Une méditation sur la lumière, l'ombre, le cœur, la basîrah, le nafs et les signes d'Allah",
  titleAccent: { before: "Le monde", emphasis: "n'est pas vide" },
  subtitle:
    "Une méditation sur la lumière, l'ombre, l'univers en expansion, le cœur, la basîrah, le nafs et les signes d'Allah.",
  category: "Coran & Méditation",
  author: { name: "Imed", role: "Méditation", initial: "I" },
  publishedAt: "2026-05-06",
  updatedAt: "2026-05-06",
  language: "fr",
  edition: "Lecture III · Méditation",
  description:
    "Une méditation longue sur la perception, la lumière divine, le cœur, le nafs, le rûh, et la lecture des signes : pourquoi l'univers, l'ombre, l'expansion cosmique et le cœur humain ne sont jamais vides pour qui apprend à les lire.",
  tags: [
    "Coran",
    "Lumière",
    "Cœur",
    "Nafs",
    "Basîrah",
    "Rûh",
    "Cosmologie",
    "Spiritualité",
  ],
  takeaways: [
    "L'univers n'est pas vide : il est plein de signes pour qui sait les lire.",
    "La cécité véritable n'est pas celle des yeux, mais celle du cœur.",
    "L'ombre obéit à Allah avec une régularité que l'ego refuse.",
    "La basîrah n'est pas un sixième sens — c'est le cœur voyant par la lumière d'Allah.",
    "L'expansion extérieure du savoir produit la contraction intérieure quand elle est sans guidance.",
    "La connaissance sans nûr devient fitnah ; avec nûr, elle devient amânah.",
  ],
  centralCitation: {
    arabic: "فإنها لا تعمى الأبصار ولكن تعمى القلوب التي في الصدور",
    translation:
      "Ce ne sont pas les yeux qui deviennent aveugles, mais les cœurs qui sont dans les poitrines.",
    reference: "Sourate Al-Hajj, 22:46",
  },
});
