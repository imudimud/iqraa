import type { Lang } from "@/lib/i18n";

interface NafsState {
  arabic: string;
  name: string;
  desc: string;
}

const FR: NafsState[] = [
  {
    arabic: "النفس الأمارة",
    name: "Al-Nafs al-Ammara",
    desc: "La nafs qui commande le mal — le désir, l'ego et l'avidité dominent sans résistance. L'homme qui lui est soumis ne demande pas si une action est juste, mais si elle lui profite.",
  },
  {
    arabic: "النفس اللوامة",
    name: "Al-Nafs al-Lawwama",
    desc: "La nafs qui se reproche elle-même — conscience morale active, remords constructif, retour sur soi. Le Coran jure par elle, signe de son importance.",
  },
  {
    arabic: "النفس المطمئنة",
    name: "Al-Nafs al-Mutmainna",
    desc: "La nafs apaisée, en paix avec Dieu — l'état vers lequel toute élévation spirituelle tend. « Retourne vers ton Seigneur, satisfaite et agréée. »",
  },
];

const EN: NafsState[] = [
  {
    arabic: "النفس الأمارة",
    name: "Al-Nafs al-Ammara",
    desc: "The nafs that commands evil — desire, ego, and greed reign unopposed. Whoever is ruled by it does not ask whether an act is just, only whether it profits him.",
  },
  {
    arabic: "النفس اللوامة",
    name: "Al-Nafs al-Lawwama",
    desc: "The self-reproaching nafs — active moral conscience, constructive remorse, an honest return to oneself. The Quran swears by it, a sign of its weight.",
  },
  {
    arabic: "النفس المطمئنة",
    name: "Al-Nafs al-Mutmainna",
    desc: "The tranquil nafs, at peace with God — the state toward which every spiritual ascent tends. « Return to your Lord, well-pleased and well-pleasing. »",
  },
];

const ARIA: Record<Lang, string> = {
  fr: "Les trois états de la nafs",
  en: "The three states of the nafs",
};

export function NafsTriad({ lang = "fr" }: { lang?: Lang }) {
  const states = lang === "en" ? EN : FR;
  return (
    <div className="nafs-triad" role="list" aria-label={ARIA[lang]}>
      {states.map((s) => (
        <div key={s.name} className="nafs-card" role="listitem">
          <div className="nafs-card__arabic" lang="ar" dir="rtl">
            {s.arabic}
          </div>
          <div className="nafs-card__name">{s.name}</div>
          <p className="nafs-card__desc">{s.desc}</p>
        </div>
      ))}
    </div>
  );
}
