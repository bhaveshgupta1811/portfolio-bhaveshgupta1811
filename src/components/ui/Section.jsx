import { cn } from '@/lib/cn'

export default function Section({ id, className, children, width = 'default' }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={cn('py-20 md:py-28', className)}>
      <div className={cn('container-page', width === 'narrow' && 'max-w-3xl')}>{children}</div>
    </section>
  )
}
