import type { Lang } from "./i18n";

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
  children?: Heading[];
}

/** French heading map. Slugs are stable; titles match the FR MDX. */
export const articleHeadingsFr: Heading[] = [
  { id: "avant-propos", text: "Avant-propos · Une convergence inattendue", level: 2 },
  { id: "iqra", text: "I. Iqra : le premier mot", level: 2 },
  { id: "vitesse", text: "II. La vitesse de la connaissance", level: 2 },
  { id: "univers-parlait", text: "III. L'univers parlait depuis toujours", level: 2 },
  { id: "horizons", text: "IV. Les signes dans les horizons et dans les âmes", level: 2 },
  { id: "litaarafu", text: "V. Lita'arafu : la diversité comme commandement divin", level: 2 },
  { id: "nafs", text: "VI. La dualité du Nafs", level: 2 },
  {
    id: "miroir-prophetes",
    text: "VII. Le miroir des prophètes",
    level: 2,
    children: [
      { id: "sulayman", text: "Sulaymân : la maîtrise par la gratitude", level: 3 },
      { id: "qarun", text: "Qârûn : l'invention du mérite", level: 3 },
      { id: "harut-marut", text: "Hârût et Mârût : l'avertissement ignoré", level: 3 },
    ],
  },
  { id: "gouvernance", text: "VIII. L'accélération sans sagesse", level: 2 },
  { id: "desinformation", text: "IX. La désinformation", level: 2 },
  { id: "khabir-shahid", text: "X. Al-Khabîr, Al-Shâhid", level: 2 },
  { id: "aveuglement", text: "XI. L'aveuglement des yeux et des cœurs", level: 2 },
  { id: "conclusion", text: "XII. Conclusion : l'épreuve de notre époque", level: 2 },
  { id: "references", text: "Références", level: 2 },
];

/** English heading map. Same slugs (anchors interchange across languages). */
export const articleHeadingsEn: Heading[] = [
  { id: "avant-propos", text: "Foreword · An unexpected convergence", level: 2 },
  { id: "iqra", text: "I. Iqra: the first word", level: 2 },
  { id: "vitesse", text: "II. The speed of knowledge", level: 2 },
  { id: "univers-parlait", text: "III. The universe has always spoken", level: 2 },
  { id: "horizons", text: "IV. Signs in the horizons and in the souls", level: 2 },
  { id: "litaarafu", text: "V. Lita'arafu: diversity as a divine command", level: 2 },
  { id: "nafs", text: "VI. The duality of the Nafs", level: 2 },
  {
    id: "miroir-prophetes",
    text: "VII. The mirror of the prophets",
    level: 2,
    children: [
      { id: "sulayman", text: "Sulaymân: mastery through gratitude", level: 3 },
      { id: "qarun", text: "Qârûn: the invention of merit", level: 3 },
      { id: "harut-marut", text: "Hârût & Mârût: the warning ignored", level: 3 },
    ],
  },
  { id: "gouvernance", text: "VIII. Acceleration without wisdom", level: 2 },
  { id: "desinformation", text: "IX. Disinformation", level: 2 },
  { id: "khabir-shahid", text: "X. Al-Khabîr, Al-Shâhid", level: 2 },
  { id: "aveuglement", text: "XI. The blindness of eyes and of hearts", level: 2 },
  { id: "conclusion", text: "XII. Conclusion: the test of our age", level: 2 },
  { id: "references", text: "References", level: 2 },
];

export function articleHeadings(lang: Lang): Heading[] {
  return lang === "en" ? articleHeadingsEn : articleHeadingsFr;
}

/**
 * Heading map for « Le monde n'est pas vide » — meditation on light, shadow,
 * heart, basîrah, nafs, rûh, expanding cosmos. Eighteen chapters + conclusion.
 */
export const articleHeadingsMondePasVide: Heading[] = [
  { id: "monde-parle", text: "I. Le monde parle, mais nous ne comprenons pas sa parole", level: 2 },
  { id: "lumiere", text: "II. La lumière : la racine de toute vision", level: 2 },
  { id: "ombre", text: "III. L'ombre : la dépendance rendue visible", level: 2 },
  { id: "basirah", text: "IV. La basîrah : la vision intérieure", level: 2 },
  { id: "coeur", text: "V. Le cœur : le véritable centre de perception", level: 2 },
  { id: "interpose", text: "VI. Allah s'interpose entre l'homme et son cœur", level: 2 },
  { id: "ruh", text: "VII. Le rûh : le mystère qui humilie la connaissance humaine", level: 2 },
  { id: "nafs-meditation", text: "VIII. Le nafs : la force intérieure qui déforme le réel", level: 2 },
  { id: "esprit", text: "IX. L'esprit est une machine, mais il n'est pas le maître", level: 2 },
  { id: "fath", text: "X. Fath : l'ouverture du réel", level: 2 },
  { id: "univers-expansion", text: "XI. L'univers en expansion : le ciel n'est pas immobile", level: 2 },
  { id: "expansion-contraction", text: "XII. Expansion extérieure, contraction intérieure", level: 2 },
  { id: "science-coran", text: "XIII. Science et Coran : mécanisme et signification", level: 2 },
  { id: "connaissance-fitnah", text: "XIV. La connaissance sans lumière devient fitnah", level: 2 },
  { id: "nur-sur-nur", text: "XV. Nûr sur nûr : fitrah et révélation", level: 2 },
  { id: "deux-fermetures", text: "XVI. L'être humain entre deux fermetures", level: 2 },
  { id: "monde-plein", text: "XVII. Le monde est plein, mais l'être humain le vide", level: 2 },
  { id: "lecture-finale", text: "XVIII. La lecture finale", level: 2 },
  { id: "conclusion", text: "Conclusion · Seul un cœur ouvert peut voir", level: 2 },
];

/**
 * Extended French edition (v2). Adds four new chapters to the original twelve:
 *  IX. Responsabilité à l'ère algorithmique
 *  XI. Justice et biais algorithmiques
 *  XII. L'illusion de la connaissance
 *  XV. L'IA comme épreuve · fitna
 */
export const articleHeadingsV2Fr: Heading[] = [
  { id: "avant-propos", text: "Avant-propos · Une convergence inattendue", level: 2 },
  { id: "iqra", text: "I. Iqra : le premier mot", level: 2 },
  { id: "vitesse", text: "II. La vitesse de la connaissance", level: 2 },
  { id: "univers-parlait", text: "III. L'univers parlait depuis toujours", level: 2 },
  { id: "horizons", text: "IV. Les signes dans les horizons et dans les âmes", level: 2 },
  { id: "litaarafu", text: "V. Lita'arafu : la diversité comme commandement divin", level: 2 },
  { id: "nafs", text: "VI. La dualité du Nafs", level: 2 },
  {
    id: "miroir-prophetes",
    text: "VII. Le miroir des prophètes",
    level: 2,
    children: [
      { id: "sulayman", text: "Sulaymân : la maîtrise par la gratitude", level: 3 },
      { id: "qarun", text: "Qârûn : l'invention du mérite", level: 3 },
      { id: "harut-marut", text: "Hârût et Mârût : l'avertissement ignoré", level: 3 },
    ],
  },
  { id: "gouvernance", text: "VIII. L'accélération sans sagesse", level: 2 },
  { id: "responsabilite", text: "IX. La responsabilité à l'ère algorithmique", level: 2 },
  { id: "desinformation", text: "X. La désinformation", level: 2 },
  { id: "justice-biais", text: "XI. La justice et les biais algorithmiques", level: 2 },
  { id: "illusion-connaissance", text: "XII. L'illusion de la connaissance", level: 2 },
  { id: "khabir-shahid", text: "XIII. Al-Khabîr, Al-Shâhid", level: 2 },
  { id: "aveuglement", text: "XIV. L'aveuglement des yeux et des cœurs", level: 2 },
  { id: "fitna", text: "XV. L'IA comme épreuve · fitna", level: 2 },
  { id: "conclusion", text: "XVI. Conclusion : l'épreuve de notre époque", level: 2 },
  { id: "references", text: "Références", level: 2 },
];
