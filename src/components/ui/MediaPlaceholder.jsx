import { cn } from '@/lib/cn'

/**
 * Used wherever a project has no screenshot. A clean technical panel, never a
 * broken <img> and never an unrelated stock photo.
 */
export default function MediaPlaceholder({ label, className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative grid place-items-center overflow-hidden bg-elevated',
        'bg-[radial-gradient(120%_120%_at_20%_0%,var(--accent-soft),transparent_60%)]',
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <span className="relative font-mono text-sm tracking-wide text-subtle">{label}</span>
    </div>
  )
}
