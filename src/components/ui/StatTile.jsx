import { useCountUp } from '@/hooks/useCountUp'
import { useInView } from '@/hooks/useInView'

/**
 * `value` is the literal resume-backed number. `prefix`/`suffix` carry any
 * non-numeric decoration ("600+", "8.6") so the counter only ever animates a
 * real figure.
 */
export default function StatTile({ value, label, decimals = 0, suffix = '' }) {
  const [ref, inView] = useInView({ rootMargin: '0px 0px -10% 0px' })
  const shown = useCountUp(value, inView, { decimals })

  return (
    <div
      ref={ref}
      className="rounded-card border border-line bg-surface px-4 py-4 transition-colors duration-300 hover:border-accent/40"
    >
      <div className="text-3xl font-semibold tracking-tight text-gradient">
        {shown}
        {suffix}
      </div>
      <div className="mt-1 text-[0.8125rem] leading-snug text-muted">{label}</div>
    </div>
  )
}
