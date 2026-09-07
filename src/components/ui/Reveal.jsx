import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/cn'

export default function Reveal({ as: Tag = 'div', delay = 0, className, children, ...rest }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      style={delay ? { '--reveal-delay': `${delay}ms` } : undefined}
      className={cn('reveal', inView && 'is-visible', className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}
