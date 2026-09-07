import { cn } from '@/lib/cn'

export default function IconLink({ href, label, icon: Icon, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${label} (opens in a new tab)`}
      className={cn(
        'grid size-10 place-items-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent',
        className,
      )}
    >
      <Icon size={18} aria-hidden="true" />
    </a>
  )
}
