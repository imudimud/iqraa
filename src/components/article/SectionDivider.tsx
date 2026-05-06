/**
 * Ornamental section divider — flanked gold rules with the
 * « ✦ ✧ ✦ » triad in the middle. Manuscript-style scene break.
 */
export function SectionDivider() {
  return (
    <div className="section-divider" aria-hidden="true">
      <span className="line" />
      <span className="ornament">✦ ✧ ✦</span>
      <span className="line" />
    </div>
  );
}
