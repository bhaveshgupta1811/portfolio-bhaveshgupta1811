import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Counts from 0 to `target` once `active` becomes true.
 *
 * Under reduced motion it returns the final value immediately — an animated
 * number is decoration, and the number itself is the information.
 *
 * Driven by rAF rather than setInterval so it stays in step with the display
 * refresh and pauses in background tabs.
 */
export function useCountUp(target, active, { duration = 1400, decimals = 0 } = {}) {
  const reducedMotion = usePrefersReducedMotion()
  const [value, setValue] = useState(0)
  const frameRef = useRef(0)

  useEffect(() => {
    // Reduced motion needs no effect at all — the value is derived at render
    // below, so there is nothing to synchronise.
    if (!active || reducedMotion) return

    let start = null
    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min(1, (timestamp - start) / duration)
      // easeOutExpo — fast off the line, settles gently on the final value.
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setValue(target * eased)
      if (progress < 1) frameRef.current = requestAnimationFrame(step)
    }

    frameRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameRef.current)
  }, [target, active, reducedMotion, duration])

  // Derived, not stored: under reduced motion the final value is shown
  // immediately rather than animated into place.
  return (reducedMotion ? target : value).toFixed(decimals)
}
