interface FootnoteRefProps {
  /** Reference number (1-indexed). */
  n: number | number[];
}

/**
 * Inline citation marker. Renders e.g. <sup>[1,2,3]</sup> with each digit
 * linked to its target in the references list.
 */
export function FootnoteRef({ n }: FootnoteRefProps) {
  const nums = Array.isArray(n) ? n : [n];
  return (
    <sup className="fn">
      [
      {nums.map((num, i) => (
        <span key={num}>
          <a href={`#ref-${num}`} id={`cite-${num}-${i}`} aria-label={`Référence ${num}`}>
            {num}
          </a>
          {i < nums.length - 1 ? "," : null}
        </span>
      ))}
      ]
    </sup>
  );
}
