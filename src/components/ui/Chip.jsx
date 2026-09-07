import { cn } from '@/lib/cn'

const TIER_STYLES = {
  core: 'border-accent/40 bg-accent-soft font-medium text-ink',
  working: 'border-line bg-elevated text-ink',
  familiar: 'border-line/60 bg-transparent text-muted',
  flat: 'border-line bg-elevated text-muted',
}

const DOT_STYLES = {
  core: 'bg-accent',
  working: 'border border-current bg-transparent opacity-60',
  familiar: null,
  flat: null,
}

export default function Chip({ tier = 'flat', children, srSuffix, title, className }) {
  const dot = DOT_STYLES[tier]

  return (
    <span
      title={title}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.8125rem] leading-5',
        TIER_STYLES[tier],
        className,
      )}
    >
      {dot ? <span aria-hidden="true" className={cn('size-1.5 shrink-0 rounded-full', dot)} /> : null}
      {children}
      {srSuffix ? <span className="sr-only">, {srSuffix}</span> : null}
    </span>
  )
}
