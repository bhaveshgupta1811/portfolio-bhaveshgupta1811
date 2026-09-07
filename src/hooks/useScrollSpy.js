import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in the reading band.
 *
 * Two details that a naive implementation gets wrong:
 *  - the last section is short and never wins the band, so scrolling to the
 *    very bottom must force it active;
 *  - the hero sits above every tracked section, so nothing should be active
 *    until the first one is reached.
 */
export function useScrollSpy(ids, offset = 96) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    if (!ids.length) return

    let frame = 0

    const compute = () => {
      frame = 0
      const line = window.scrollY + offset + 24

      // Bottom of the document: the last section wins regardless of height.
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActiveId(ids[ids.length - 1])
        return
      }

      let current = null
      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.offsetTop <= line) current = id
        else break
      }
      setActiveId(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ids, offset])

  return activeId
}
