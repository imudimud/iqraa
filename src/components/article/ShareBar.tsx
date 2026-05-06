"use client";

import { useEffect, useState } from "react";
import { Share2, Link as LinkIcon } from "lucide-react";
import {
  XIcon,
  FacebookIcon,
  WhatsAppIcon,
  OpenAIIcon,
  PerplexityIcon,
} from "./BrandIcons";
import { buildShareUrls, copyToClipboard, webShare } from "@/lib/share";
import { type Lang, getStrings } from "@/lib/i18n";

interface ShareBarProps {
  url: string;
  title: string;
  description: string;
  lang: Lang;
}

export function ShareBar({ url, title, description, lang }: ShareBarProps) {
  const [toast, setToast] = useState<string | null>(null);
  const [hasNativeShare, setHasNativeShare] = useState(false);
  const t = getStrings(lang);
  const urls = buildShareUrls({
    url,
    title,
    description,
    gptPrompt: t.shareGptPrompt,
    ppxPrompt: t.sharePpxPrompt,
  });

  useEffect(() => {
    setHasNativeShare(typeof navigator !== "undefined" && "share" in navigator);
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    window.setTimeout(() => setToast(null), 2400);
  }

  async function handleCopy() {
    const ok = await copyToClipboard(url);
    showToast(ok ? t.shareCopySuccess : t.shareCopyFail);
  }

  async function handleNativeShare() {
    const ok = await webShare({ title, text: description, url });
    if (!ok) handleCopy();
  }

  return (
    <>
      <section className="share-bar" aria-labelledby="share-label">
        <span className="share-bar__label" id="share-label">
          {t.shareLabel}
        </span>
        <div className="share-bar__row">
          {hasNativeShare ? (
            <button
              type="button"
              className="share-btn"
              onClick={handleNativeShare}
              aria-label={t.shareNativeAria}
            >
              <Share2 size={16} aria-hidden /> {t.shareNative}
            </button>
          ) : null}
          <button
            type="button"
            className="share-btn share-btn--copy"
            onClick={handleCopy}
            aria-label={t.shareCopyAria}
          >
            <LinkIcon size={16} aria-hidden /> {t.shareCopy}
          </button>
          <a
            href={urls.x}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn share-btn--x"
            aria-label={t.shareXAria}
          >
            <XIcon size={15} /> X
          </a>
          <a
            href={urls.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn share-btn--fb"
            aria-label={t.shareFbAria}
          >
            <FacebookIcon size={16} /> Facebook
          </a>
          <a
            href={urls.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn share-btn--wa"
            aria-label={t.shareWaAria}
          >
            <WhatsAppIcon size={16} /> WhatsApp
          </a>
          <a
            href={urls.chatgpt}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn share-btn--gpt"
            aria-label={t.shareGptAria}
          >
            <OpenAIIcon size={16} /> ChatGPT
          </a>
          <a
            href={urls.perplexity}
            target="_blank"
            rel="noopener noreferrer"
            className="share-btn share-btn--ppx"
            aria-label={t.sharePpxAria}
          >
            <PerplexityIcon size={16} /> Perplexity
          </a>
        </div>
      </section>

      <div
        className="share-toast"
        role="status"
        aria-live="polite"
        data-show={toast !== null}
      >
        {toast ?? ""}
      </div>
    </>
  );
}
