import { cn } from '@/lib/cn'

export default function Card({ as: Tag = 'div', className, interactive = false, children, ...rest }) {
  return (
    <Tag
      className={cn(
        'rounded-card border border-line bg-surface',
        interactive &&
          'transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[var(--shadow-card)] focus-within:border-accent/40',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
