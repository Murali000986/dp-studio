// Reusable hook to set page-level SEO meta tags
import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function useSEO({ title, description, keywords, ogImage, canonical }: SEOProps) {
  useEffect(() => {
    // Title
    document.title = `${title} | DP Studios`;

    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('robots', 'index, follow');

    // Open Graph
    setMeta('og:title', `${title} | DP Studios`, true);
    setMeta('og:description', description, true);
    setMeta('og:type', 'website', true);
    if (ogImage) setMeta('og:image', ogImage, true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', `${title} | DP Studios`);
    setMeta('twitter:description', description);

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical || window.location.href;

    return () => {
      document.title = 'DP Studios';
    };
  }, [title, description, keywords, ogImage, canonical]);
}
