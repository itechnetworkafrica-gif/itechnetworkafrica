import { useEffect } from "react";

interface SEOOptions {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

const SITE_NAME = "Gotecx";
const BASE_URL = "https://gotecx.com";
const DEFAULT_DESCRIPTION =
  "Gotecx is a global technology platform empowering businesses to automate, innovate, transform, and scale with intelligent technology solutions. Powered by iTech Network Africa.";
const DEFAULT_OG_IMAGE = `${BASE_URL}/opengraph.jpg`;

/**
 * useSEO — call inside any page component to set per-page title + meta tags.
 * All updates happen via useEffect (no extra DOM nodes).
 */
export function useSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
}: SEOOptions = {}) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Global Technology Platform — Empowering Businesses Through Technology`;

  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  useEffect(() => {
    document.title = fullTitle;

    function setMeta(selector: string, attr: string, value: string, content: string) {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, value);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    }

    function setLink(rel: string, href: string) {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = href;
    }

    setMeta('meta[name="description"]', "name", "description", description);
    setLink("canonical", canonicalUrl);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[property="og:image"]', "property", "og:image", ogImage);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);
  }, [fullTitle, description, canonicalUrl, ogImage]);
}

/** @deprecated — use `useSEO()` hook directly in your component body instead. */
export function SEOHead(props: SEOOptions) {
  useSEO(props);
  return null;
}

export default SEOHead;
