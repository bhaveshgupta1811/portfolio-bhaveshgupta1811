import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Fires once when the element enters the viewport, then stops observing.
 * Under reduced motion it reports visible immediately, so content is never
 * left at opacity 0 waiting for an animation that will not run.
 */
export function useInView({ rootMargin = '0px 0px -12% 0px', threshold = 0 } = {}) {
  const ref = useRef(null)
  const reducedMotion = usePrefersReducedMotion()
  // No IntersectionObserver means no trigger will ever fire, so start visible
  // rather than leaving content at opacity 0 forever.
  const [inView, setInView] = useState(() => typeof IntersectionObserver === 'undefined')

  useEffect(() => {
    if (reducedMotion || typeof IntersectionObserver === 'undefined') return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin, threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reducedMotion, rootMargin, threshold])

  return [ref, inView || reducedMotion]
}
