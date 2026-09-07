import { useCallback, useEffect, useState } from 'react'
import { THEME_KEY, applyTheme, readStoredTheme, storeTheme, systemTheme } from '@/lib/theme'

/**
 * Theme state with two rules:
 *  - Follow the OS until the user toggles explicitly, then stop following.
 *  - Stay in sync across tabs.
 * The initial class is set by the inline script in index.html; this hook only
 * reads it back so the first render matches the DOM.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light',
  )

  // Follow the OS only while no explicit choice is stored.
  useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = () => {
      if (readStoredTheme()) return
      const next = systemTheme()
      applyTheme(next)
      setTheme(next)
    }
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  // Mirror a choice made in another tab.
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== THEME_KEY) return
      const next = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : systemTheme()
      applyTheme(next)
      setTheme(next)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark'
      applyTheme(next)
      storeTheme(next)
      return next
    })
  }, [])

  return { theme, toggle }
}
