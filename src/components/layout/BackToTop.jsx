import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, left: 0 })}
      aria-label="Back to top"
      className="fixed right-5 bottom-5 z-50 grid size-11 place-items-center rounded-full border border-line bg-surface text-muted shadow-[var(--shadow-card)] transition-colors hover:border-accent/50 hover:text-accent"
    >
      <ArrowUp size={18} aria-hidden="true" />
    </button>
  )
}
