import { useId } from "react";

interface QuranBlockProps {
  arabic: string;
  translation: string;
  reference: string;
}

export function QuranBlock({ arabic, translation, reference }: QuranBlockProps) {
  const id = useId().replace(/[:]/g, "-");
  return (
    <figure
      className="quran-block"
      aria-labelledby={`quran-${id}-cite`}
      role="figure"
    >
      <span className="quran-corners" aria-hidden="true" />
      <span className="quran-block__label" lang="ar" dir="rtl">
        آية قرآنية
      </span>
      <blockquote>
        <p className="quran-arabic" lang="ar" dir="rtl">
          {arabic}
        </p>
        <p className="quran-translation" lang="fr">
          {translation}
        </p>
      </blockquote>
      <figcaption id={`quran-${id}-cite`} className="quran-cite">
        {reference}
      </figcaption>
    </figure>
  );
}
