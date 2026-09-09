import { useState } from 'react'
import { AlertTriangle, X } from 'lucide-react'
import { certificationGaps } from '@/data/certifications'
import { projects } from '@/data/projects'
import { site } from '@/data/site'
import { skillGaps } from '@/data/skills'
import { testimonialGaps } from '@/data/testimonials'

/**
 * Dev-only checklist of everything still missing real data. Rendered behind
 * import.meta.env.DEV at the call site, so it is dead-code-eliminated from the
 * production bundle — visitors never receive a byte of it.
 */
export default function GapPanel() {
  const [open, setOpen] = useState(false)

  const gaps = [
    ...site.gaps,
    ...projects.flatMap((p) => p.gaps ?? []),
    ...skillGaps,
    ...certificationGaps,
    ...testimonialGaps,
  ]

  if (gaps.length === 0) return null

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-[70] inline-flex items-center gap-2 rounded-lg border border-amber-500/40 bg-amber-500/10 px-3 py-2 text-sm font-medium text-amber-400 backdrop-blur"
      >
        <AlertTriangle size={15} aria-hidden="true" />
        {gaps.length} content gaps
      </button>
    )
  }

  return (
    <aside className="fixed bottom-4 left-4 z-[70] max-h-[70vh] w-[min(28rem,calc(100vw-2rem))] overflow-y-auto rounded-card border border-amber-500/40 bg-surface p-4 shadow-[var(--shadow-card)]">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2 className="text-sm font-semibold text-amber-400">
          Content gaps ({gaps.length}) — dev only
        </h2>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close content gap panel"
          className="text-muted hover:text-ink"
        >
          <X size={16} aria-hidden="true" />
        </button>
      </div>
      <ul className="space-y-2 text-[0.8125rem] leading-relaxed text-muted">
        {gaps.map((gap) => (
          <li key={gap} className="border-l-2 border-amber-500/40 pl-3">
            {gap}
          </li>
        ))}
      </ul>
    </aside>
  )
}
