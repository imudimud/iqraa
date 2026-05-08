import { ArticleFrontmatterSchema, type ArticleFrontmatter } from "@/lib/article";

export const meta: ArticleFrontmatter = ArticleFrontmatterSchema.parse({
  slug: "univers-parle-lumiere",
  title:
    "L'Univers Parle — Connaissance, Intelligence Artificielle, Dualité Humaine et Lumière du Coran",
  titleAccent: { before: "L'Univers", emphasis: "Parle" },
  subtitle:
    "Connaissance, intelligence artificielle, dualité humaine, et lumière du Coran : une lecture qui croise Iqra, Lita'arafu, Mûsâ et Al-Khidr, le nafs, Nûr 'alâ Nûr, la solitude au cœur de l'hyperconnexion, et l'amânah.",
  category: "Coran & Intelligence Artificielle",
  author: { name: "Imed", role: "Essai · Édition Lumière", initial: "I" },
  publishedAt: "2026-05-07",
  updatedAt: "2026-05-07",
  language: "fr",
  edition: "Lecture IV · Édition Lumière",
  description:
    "Quatrième lecture : la pauvreté du regard moderne, Iqra et l'orientation du savoir, Mûsâ et Al-Khidr, le miroir des prophètes, la solitude au cœur de l'IA, et la convergence des signes — quinze chapitres et une table qui relie versets et découvertes contemporaines.",
  tags: [
    "Coran",
    "Intelligence Artificielle",
    "Lumière",
    "Humilité",
    "Nafs",
    "Lita'arafu",
    "Solitude",
    "Amânah",
    "Spiritualité",
  ],
  takeaways: [
    "Notre crise n'est pas l'ignorance — c'est que nous ne savons plus lire le réel.",
    "Iqra n'est pas « lis » tout court : c'est « lis au nom de ton Seigneur ».",
    "Mûsâ a fait le voyage de l'humilité — et la connaissance avant le pouvoir reste cette même condition.",
    "L'IA confirme empiriquement ce que le Coran disait depuis quatorze siècles : la création n'est pas muette.",
    "L'hyperconnexion technologique produit la solitude la plus profonde depuis longtemps.",
    "Lumière sur lumière : la fitrah reconnaît la révélation comme un rappel, non comme une nouveauté.",
    "L'amânah, refusée par les cieux et les montagnes, a été portée par l'homme — c'est l'épreuve de notre époque.",
  ],
  centralCitation: {
    arabic: "اقرأ باسم ربك الذي خلق",
    translation: "Lis au nom de ton Seigneur qui a créé.",
    reference: "Sourate Al-'Alaq, 96:1",
  },
});
