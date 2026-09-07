import { useEffect } from 'react'
import { site } from '@/data/site'

const setAttr = (selector, attr, value) => {
  const el = document.head.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/**
 * Patches the tab title and the canonical/OG URL per route.
 *
 * Honest limit: social unfurlers do not execute JavaScript, so a shared
 * /projects/* link still shows the site-level card from index.html. This fixes
 * the browser tab, bookmarks and Googlebot, which is the trade worth making
 * before reaching for prerendering.
 */
export function useDocumentMeta({ title, description, path = '' } = {}) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.title}`
    document.title = fullTitle
    setAttr('meta[property="og:title"]', 'content', fullTitle)

    if (description) {
      setAttr('meta[name="description"]', 'content', description)
      setAttr('meta[property="og:description"]', 'content', description)
    }

    const url = site.seo.url + path
    setAttr('link[rel="canonical"]', 'href', url)
    setAttr('meta[property="og:url"]', 'content', url)

    return () => {
      document.title = `${site.name} — ${site.title}`
    }
  }, [title, description, path])
}
