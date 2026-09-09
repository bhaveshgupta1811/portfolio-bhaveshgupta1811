import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu } from 'lucide-react'
import MobileMenu from './MobileMenu'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { site } from '@/data/site'
import { cn } from '@/lib/cn'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const hamburgerRef = useRef(null)
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const isHome = pathname === '/'
  const navIds = useMemo(() => site.nav.map((item) => item.id), [])
  const spyId = useScrollSpy(isHome ? navIds : [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = useCallback(() => {
    setMenuOpen(false)
    hamburgerRef.current?.focus()
  }, [])

  const handleNavigate = useCallback(
    (event, id) => {
      event.preventDefault()
      setMenuOpen(false)

      if (!isHome) {
        navigate(`/#${id}`)
        return
      }

      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ block: 'start' })
      el.setAttribute('tabindex', '-1')
      el.focus({ preventScroll: true })
      history.replaceState(null, '', `#${id}`)
    },
    [isHome, navigate],
  )

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 h-16 transition-colors duration-300',
          scrolled ? 'border-b border-line bg-surface/80 backdrop-blur-md' : 'bg-transparent',
        )}
      >
        <nav aria-label="Primary" className="container-page flex h-full items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-semibold tracking-tight whitespace-nowrap"
          >
            <span className="grid size-8 place-items-center rounded-md bg-accent text-[0.8125rem] font-bold text-on-accent">
              {site.initials}
            </span>
            <span className="hidden sm:inline">{site.name}</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {site.nav.map((item) => {
              const active = isHome && spyId === item.id
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(event) => handleNavigate(event, item.id)}
                    aria-current={active ? 'true' : undefined}
                    className={cn(
                      'rounded-md px-3 py-2 text-sm transition-colors',
                      // Weight change as well as colour: colour-only state
                      // indicators fail WCAG 1.4.1.
                      active ? 'font-semibold text-accent' : 'text-muted hover:text-ink',
                    )}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={site.resumePath}
              target="_blank"
              rel="noreferrer noopener"
              className="hidden h-10 items-center rounded-lg border border-line px-4 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent lg:inline-flex"
            >
              Resume
            </a>
            <button
              ref={hamburgerRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="grid size-10 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:text-ink lg:hidden"
            >
              <Menu size={18} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={closeMenu}
        activeId={isHome ? spyId : null}
        onNavigate={handleNavigate}
      />
    </>
  )
}
