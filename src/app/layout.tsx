import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  EB_Garamond,
  Marcellus,
  Amiri,
} from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/chrome/SkipLink";
import { SiteHeader } from "@/components/chrome/SiteHeader";
import { SiteFooter } from "@/components/chrome/SiteFooter";
import { HtmlLangSync } from "@/components/chrome/HtmlLangSync";
import { Atmosphere } from "@/components/article/Atmosphere";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-google",
  display: "swap",
});

const body = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body-google",
  display: "swap",
});

const roman = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-roman-google",
  display: "swap",
});

const arabic = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-arabic-google",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://iqraa-zeta.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Iqraa — Lectures à la lumière du Coran",
    template: "%s · Iqraa",
  },
  description:
    "Iqraa — essais éditoriaux à la lumière du Coran. Connaissance, intelligence artificielle, et responsabilité humaine.",
  applicationName: "Iqraa",
  authors: [{ name: "Imed" }],
  creator: "Imed",
  publisher: "Iqraa",
  formatDetection: { email: false, address: false, telephone: false },
};

// Inline pre-paint script: dark default, with manual override + system pref opt-in.
const themeBootstrap = `(function(){try{var s=localStorage.getItem('iqraa-theme');var t=s||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${body.variable} ${roman.variable} ${arabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri+Quran&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
      </head>
      <body>
        <HtmlLangSync />
        <Atmosphere />
        <SkipLink />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
