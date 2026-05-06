interface ShareInput {
  url: string;
  title: string;
  description: string;
  gptPrompt: string;
  ppxPrompt: string;
}

export function buildShareUrls({
  url,
  title,
  description: _desc,
  gptPrompt,
  ppxPrompt,
}: ShareInput) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const gpt = encodeURIComponent(`${gptPrompt} ${url}`);
  const ppx = encodeURIComponent(`${ppxPrompt} ${url}`);
  return {
    x: `https://twitter.com/intent/tweet?url=${u}&text=${t}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    whatsapp: `https://wa.me/?text=${t}%20${u}`,
    chatgpt: `https://chatgpt.com/?q=${gpt}`,
    perplexity: `https://www.perplexity.ai/?q=${ppx}`,
  };
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

export async function webShare(data: ShareData): Promise<boolean> {
  try {
    if (typeof navigator !== "undefined" && "share" in navigator) {
      await navigator.share(data);
      return true;
    }
  } catch {
    /* user cancelled or unsupported */
  }
  return false;
}
