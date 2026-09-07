import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { site } from '@/data/site'
import { cn } from '@/lib/cn'

/**
 * A div with role="dialog" and a hand-rolled focus trap, not a native
 * <dialog showModal()>. Native dialog would give the trap for free, but it also
 * promotes the element to the top layer, which fights the fixed navbar and the
 * theme-toggle stacking order. The trap below is the part usually skipped:
 * Tab cycles inside the panel, Escape closes, and focus returns to the
 * hamburger rather than being dumped at the top of the document.
 */
export default function MobileMenu({ open, onClose, activeId, onNavigate }) {
  const panelRef = useRef(null)
  const closeRef = useRef(null)

  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return

    closeRef.current?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }
      if (event.key !== 'Tab') return

      const focusables = panelRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables?.length) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      id="mobile-menu"
      className="fixed inset-0 z-[65] flex flex-col bg-bg lg:hidden"
    >
      <div className="flex h-16 items-center justify-between border-b border-line px-5 sm:px-6">
        <span className="font-semibold tracking-tight">{site.name}</span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="grid size-11 place-items-center rounded-lg border border-line text-muted hover:text-ink"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-6 sm:px-6">
        <ul className="space-y-1">
          {site.nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => onNavigate(event, item.id)}
                aria-current={activeId === item.id ? 'true' : undefined}
                className={cn(
                  'flex min-h-12 items-center rounded-lg px-3 text-lg transition-colors',
                  activeId === item.id ? 'font-medium text-accent' : 'text-muted hover:text-ink',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.resumePath}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-6 flex min-h-12 items-center justify-center rounded-lg bg-accent px-4 font-medium text-on-accent"
        >
          Resume
        </a>
      </nav>
    </div>
  )
}
