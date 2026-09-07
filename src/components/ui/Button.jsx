import { cn } from '@/lib/cn'

const VARIANTS = {
  primary:
    'bg-accent text-on-accent border border-accent hover:bg-accent-hover hover:border-accent-hover',
  ghost: 'border border-line bg-transparent text-ink hover:border-accent/50 hover:text-accent',
  subtle: 'border border-transparent bg-elevated text-ink hover:border-line',
}

const SIZES = {
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-[0.95rem]',
}

export default function Button({
  as: Tag = 'button',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}) {
  return (
    <Tag
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-200',
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  )
}
