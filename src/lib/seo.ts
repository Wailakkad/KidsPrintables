import { useEffect } from 'react';
import { BlogPost } from './posts';

export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_NAME = 'Kids Printables | Coloring & Activities';
const BASE_URL = 'https://kidsprintables.example.com';

export function buildBlogPostingJsonLd(post: BlogPost): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `${BASE_URL}/images/og-fall-pack.svg`,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/og-fall-pack.svg`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };
}

export function buildWebsiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: BASE_URL,
    description:
      'Low-prep preschool printables, coloring pages, and hands-on seasonal learning packs for children ages 3–5.',
    offers: {
      '@type': 'Offer',
      name: 'Fall Preschool Activity Pack (58 Pages)',
      url: 'https://payhip.com/b/iL3sU',
      price: '7.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };
}

export function usePageSEO(meta: PageMetadata) {
  useEffect(() => {
    document.title = meta.title;

    const setMetaTag = (selector: string, attrName: 'name' | 'property', attrValue: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const origin = typeof window !== 'undefined' ? window.location.origin : BASE_URL;
    const canonicalUrl = `${origin}${meta.canonicalPath}`;

    setMetaTag('meta[name="description"]', 'name', 'description', meta.description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', meta.ogType || 'website');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);

    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);
  }, [meta.title, meta.description, meta.canonicalPath, meta.ogType]);
}
