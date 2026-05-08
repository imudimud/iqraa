import { ImageResponse } from "next/og";
import { meta as quranAiDualityMetaEn } from "@/content/articles/quran-ai-duality.en.meta";
import { meta as mondePasVideMetaEn } from "@/content/articles/monde-pas-vide.en.meta";
import type { ArticleFrontmatter } from "@/lib/article";

export const alt = "Iqraa";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const articles: Record<string, ArticleFrontmatter> = {
  "quran-ai-duality": quranAiDualityMetaEn,
  "monde-pas-vide": mondePasVideMetaEn,
};

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = articles[slug];
  if (!meta) {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            background: "#0a0d18",
          }}
        />
      ),
      { ...size }
    );
  }

  const edition = meta.edition ?? "Reading I";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px 80px",
          backgroundColor: "#0a0d18",
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(58, 77, 138, 0.25), transparent 60%), radial-gradient(ellipse 70% 50% at 90% 100%, rgba(201, 162, 93, 0.10), transparent 60%), radial-gradient(ellipse 50% 40% at 0% 60%, rgba(31, 42, 82, 0.20), transparent 70%)",
          color: "#ece1c9",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "20px",
            letterSpacing: "8px",
            textTransform: "uppercase",
            color: "#b3a98f",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                width: "22px",
                height: "22px",
                border: "1px solid #c9a25d",
                transform: "rotate(45deg)",
                position: "relative",
              }}
            />
            <div style={{ display: "flex" }}>Iqraa &middot; {edition}</div>
          </div>
          <div style={{ display: "flex", color: "#c9a25d", letterSpacing: "10px" }}>
            MMXXVI
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "260px",
              lineHeight: 0.95,
              color: "#c9a25d",
              fontFamily: "Georgia, serif",
              direction: "rtl",
              marginBottom: "10px",
              textShadow: "0 0 40px rgba(201, 162, 93, 0.45)",
            }}
          >
            اقرأ
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "16px",
              letterSpacing: "12px",
              textTransform: "uppercase",
              color: "#c9a25d",
              marginBottom: "24px",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <div style={{ display: "flex", color: "#8a6d35" }}>—</div>
            <div style={{ display: "flex" }}>Read</div>
            <div style={{ display: "flex", color: "#8a6d35" }}>—</div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "72px",
              lineHeight: 1.05,
              color: "#f3eada",
              fontStyle: "italic",
              fontWeight: 500,
              marginBottom: "12px",
              textAlign: "center",
              maxWidth: "1000px",
            }}
          >
            <span>{meta.titleAccent.before}&nbsp;</span>
            <span style={{ color: "#e6c889" }}>{meta.titleAccent.emphasis}</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "22px",
              fontStyle: "italic",
              color: "#b3a98f",
              maxWidth: "780px",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            {meta.subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
            fontSize: "16px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            color: "#b3a98f",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", color: "#8a6d35", letterSpacing: "10px" }}>
              Author
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "8px",
                fontSize: "26px",
                color: "#ece1c9",
                fontStyle: "italic",
                letterSpacing: "1px",
                textTransform: "none",
              }}
            >
              {meta.author.name}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "4px",
                fontSize: "14px",
                color: "#6e7088",
                letterSpacing: "4px",
              }}
            >
              {new Date(meta.publishedAt)
                .toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
                .toUpperCase()}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              color: "#c9a25d",
              opacity: 0.7,
              fontSize: "120px",
              lineHeight: 1,
            }}
          >
            ﴾ ﴿
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            display: "flex",
            backgroundImage:
              "linear-gradient(90deg, transparent 0%, #c9a25d 30%, #e6c889 60%, #c9a25d 100%)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
