import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export default function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const navType = useNavigationType()

  useEffect(() => {
    if (hash) {
      // Navigating /projects/x -> /#projects mounts Home on this same tick, so
      // the target does not exist on frame 1. Retry for ~20 frames.
      const id = decodeURIComponent(hash.slice(1))
      let tries = 0
      let frame = requestAnimationFrame(function tick() {
        const el = document.getElementById(id)
        if (el) {
          // 'instant', not 'auto' — 'auto' inherits html{scroll-behavior:smooth}
          // and you watch a slow flight down the whole page.
          el.scrollIntoView({ behavior: 'instant', block: 'start' })
          el.setAttribute('tabindex', '-1')
          el.focus({ preventScroll: true })
          return
        }
        if (tries++ < 20) frame = requestAnimationFrame(tick)
      })
      return () => cancelAnimationFrame(frame)
    }

    if (navType === 'POP') {
      const saved = sessionStorage.getItem(`scroll:${key}`)
      if (saved) {
        const frame = requestAnimationFrame(() =>
          window.scrollTo({ top: Number(saved), left: 0, behavior: 'instant' }),
        )
        return () => cancelAnimationFrame(frame)
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash, key, navType])

  // Record the position for the current history entry.
  useEffect(() => {
    let frame = 0
    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        sessionStorage.setItem(`scroll:${key}`, String(window.scrollY))
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [key])

  return null
}
