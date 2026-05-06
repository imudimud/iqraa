export type Lang = "fr" | "en";

export const LANGS: readonly Lang[] = ["fr", "en"] as const;

export const DEFAULT_LANG: Lang = "fr";

interface StringSet {
  // Site chrome
  skipToContent: string;
  siteHomeAria: string;
  navAria: string;

  // Theme toggle
  themeAria: string;
  themeToLight: string;
  themeToDark: string;
  themeTitleLight: string;
  themeTitleDark: string;

  // Language toggle
  languageAria: string;
  languageButtonLabel: string;

  // Article meta strip
  articleMetaAria: string;
  minRead: string;
  langPairOwn: string;
  langPairAr: string;
  langDescription: string;

  // Cover
  coverEdition: string;
  coverYearRoman: string;
  coverIqraCaption: string;
  coverScrollCue: string;
  coverChaptersDuration: string;
  coverAuthor: string;

  // Overview
  overviewTitle: string;
  overviewExpand: string;
  overviewCollapse: string;

  // TOC
  tocTitle: string;
  tocAriaLabel: string;
  tocSidebarAriaLabel: string;
  tocChaptersAriaLabel: string;

  // Mobile drawer
  drawerOpen: string;
  drawerClose: string;
  drawerTitle: string;
  drawerDialogAria: string;

  // Sidebar
  sidebarMetaLabel: string;
  sidebarMetaPublished: string;
  sidebarMetaReading: string;
  sidebarMetaWords: string;
  sidebarMetaLanguages: string;
  sidebarTagsLabel: string;
  sidebarTakeawaysLabel: string;
  sidebarCitationLabel: string;
  sidebarMetaAria: string;

  // Share bar
  shareLabel: string;
  shareNative: string;
  shareNativeAria: string;
  shareCopy: string;
  shareCopyAria: string;
  shareCopySuccess: string;
  shareCopyFail: string;
  shareXAria: string;
  shareFbAria: string;
  shareWaAria: string;
  shareGptAria: string;
  sharePpxAria: string;
  shareGptPrompt: string;
  sharePpxPrompt: string;

  // References
  referencesEyebrow: string;
  referencesTitle: string;
  referencesBacklinkAria: string;

  // Colophon
  colophonAfter: string;
  colophonMeta: string;

  // Footer
  footerTagline: string;
  footerLanguagesShort: string;

  // Reading progress
  readingProgressAria: string;

  // Quran block
  quranMarkerLabel: string;

  // Date locale code
  dateLocale: string;
}

const fr: StringSet = {
  skipToContent: "Aller au contenu",
  siteHomeAria: "Iqraa accueil",
  navAria: "Navigation principale",

  themeAria: "Bascule du thème",
  themeToLight: "Passer en thème parchemin (jour)",
  themeToDark: "Passer en thème nuit",
  themeTitleLight: "Mode parchemin",
  themeTitleDark: "Mode nuit",

  languageAria: "Read in English",
  languageButtonLabel: "EN",

  articleMetaAria: "Métadonnées de l'article",
  minRead: "min de lecture",
  langPairOwn: "FR",
  langPairAr: "عربي",
  langDescription: "Article en français avec citations en arabe",

  coverEdition: "Lecture I",
  coverYearRoman: "MMXXVI",
  coverIqraCaption: "Lis",
  coverScrollCue: "Descendre",
  coverChaptersDuration: "Douze chapitres  ·  Trente minutes",
  coverAuthor: "Auteur",

  overviewTitle: "Aperçu",
  overviewExpand: "Déplier",
  overviewCollapse: "Replier",

  tocTitle: "Sommaire",
  tocAriaLabel: "Sommaire",
  tocSidebarAriaLabel: "Sommaire latéral",
  tocChaptersAriaLabel: "Chapitres",

  drawerOpen: "Afficher le sommaire",
  drawerClose: "Fermer le sommaire",
  drawerTitle: "Dans cet article",
  drawerDialogAria: "Sommaire de l'article",

  sidebarMetaLabel: "Édition",
  sidebarMetaPublished: "Publié",
  sidebarMetaReading: "Lecture",
  sidebarMetaWords: "Mots",
  sidebarMetaLanguages: "Langues",
  sidebarTagsLabel: "Mots-clés",
  sidebarTakeawaysLabel: "À retenir",
  sidebarCitationLabel: "Citation centrale",
  sidebarMetaAria: "Métadonnées de l'article",

  shareLabel: "Partager cet essai",
  shareNative: "Partager",
  shareNativeAria: "Partager via votre appareil",
  shareCopy: "Copier le lien",
  shareCopyAria: "Copier le lien",
  shareCopySuccess: "Lien copié dans le presse-papiers",
  shareCopyFail: "Échec de la copie",
  shareXAria: "Partager sur X",
  shareFbAria: "Partager sur Facebook",
  shareWaAria: "Partager via WhatsApp",
  shareGptAria: "Résumer avec ChatGPT",
  sharePpxAria: "Résumer avec Perplexity",
  shareGptPrompt:
    "Résume cet article en français et extrais ses arguments coraniques, éthiques et liés à l'IA :",
  sharePpxPrompt:
    "Résume cet article en français et ses thèses principales :",

  referencesEyebrow: "Références",
  referencesTitle: "Les sources qui ont éclairé cette lecture",
  referencesBacklinkAria: "Retour à la citation",

  colophonAfter: "Et Allah sait mieux.",
  colophonMeta: "Fin de l'essai",

  footerTagline: "Iqraa · Lectures éditoriales à la lumière du Coran",
  footerLanguagesShort: "FR",

  readingProgressAria: "Progression de lecture",

  quranMarkerLabel: "آية قرآنية",

  dateLocale: "fr-FR",
};

const en: StringSet = {
  skipToContent: "Skip to content",
  siteHomeAria: "Iqraa home",
  navAria: "Primary navigation",

  themeAria: "Theme toggle",
  themeToLight: "Switch to parchment theme (day)",
  themeToDark: "Switch to night theme",
  themeTitleLight: "Parchment mode",
  themeTitleDark: "Night mode",

  languageAria: "Lire en français",
  languageButtonLabel: "FR",

  articleMetaAria: "Article metadata",
  minRead: "min read",
  langPairOwn: "EN",
  langPairAr: "عربي",
  langDescription: "Article in English with Arabic citations",

  coverEdition: "Reading I",
  coverYearRoman: "MMXXVI",
  coverIqraCaption: "Read",
  coverScrollCue: "Scroll",
  coverChaptersDuration: "Twelve chapters  ·  Thirty minutes",
  coverAuthor: "Author",

  overviewTitle: "Overview",
  overviewExpand: "Expand",
  overviewCollapse: "Collapse",

  tocTitle: "Contents",
  tocAriaLabel: "Contents",
  tocSidebarAriaLabel: "Sidebar contents",
  tocChaptersAriaLabel: "Chapters",

  drawerOpen: "Show contents",
  drawerClose: "Close contents",
  drawerTitle: "In this article",
  drawerDialogAria: "Article contents",

  sidebarMetaLabel: "Edition",
  sidebarMetaPublished: "Published",
  sidebarMetaReading: "Reading",
  sidebarMetaWords: "Words",
  sidebarMetaLanguages: "Languages",
  sidebarTagsLabel: "Topics",
  sidebarTakeawaysLabel: "Key takeaways",
  sidebarCitationLabel: "Central citation",
  sidebarMetaAria: "Article metadata",

  shareLabel: "Share this essay",
  shareNative: "Share",
  shareNativeAria: "Share via your device",
  shareCopy: "Copy link",
  shareCopyAria: "Copy link",
  shareCopySuccess: "Link copied to clipboard",
  shareCopyFail: "Copy failed",
  shareXAria: "Share on X",
  shareFbAria: "Share on Facebook",
  shareWaAria: "Share via WhatsApp",
  shareGptAria: "Summarize with ChatGPT",
  sharePpxAria: "Summarize with Perplexity",
  shareGptPrompt:
    "Summarize this article in English and extract its Quranic, ethical, and AI-related arguments:",
  sharePpxPrompt:
    "Summarize this article in English and its main theses:",

  referencesEyebrow: "References",
  referencesTitle: "The sources that illuminated this reading",
  referencesBacklinkAria: "Back to citation",

  colophonAfter: "And Allah knows best.",
  colophonMeta: "End of essay",

  footerTagline: "Iqraa · Editorial readings in the light of the Quran",
  footerLanguagesShort: "EN",

  readingProgressAria: "Reading progress",

  quranMarkerLabel: "آية قرآنية",

  dateLocale: "en-US",
};

const STRINGS: Record<Lang, StringSet> = { fr, en };

export function getStrings(lang: Lang): StringSet {
  return STRINGS[lang];
}

/** Pick the active language from a Next.js pathname. */
export function langFromPath(pathname: string): Lang {
  // Treat any path segment ending in `/en` as English.
  if (/(^|\/)en(\/|$)/.test(pathname)) return "en";
  return "fr";
}

/** Toggle to the alternate language URL for a given pathname. */
export function altLangPath(pathname: string, current: Lang): string {
  if (current === "en") {
    // Strip trailing /en or middle /en/
    return pathname.replace(/\/en(\/|$)/, "$1").replace(/\/$/, "") || "/";
  }
  // Append /en to FR path. Special case: home `/`
  if (pathname === "/" || pathname === "") return "/en";
  return pathname.replace(/\/$/, "") + "/en";
}
