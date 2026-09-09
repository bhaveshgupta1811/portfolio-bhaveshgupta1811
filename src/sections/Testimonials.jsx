import { Quote } from 'lucide-react'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { testimonials } from '@/data/testimonials'

export default function Testimonials() {
  // No quotes yet -> render nothing at all, rather than an empty shell or a
  // fabricated placeholder. The section appears the moment real ones are added.
  if (testimonials.length === 0) return null

  return (
    <Section id="testimonials">
      <SectionHeading id="testimonials" eyebrow="Testimonials" title="What people say" />

      {/* Scroll-snap rail on mobile, grid from md up. No carousel library. */}
      <div className="snap-row md:grid md:grid-cols-2 md:gap-5 md:overflow-visible lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <Reveal key={item.id} delay={index * 70} className="md:contents">
            <figure className="flex h-full flex-col rounded-card border border-line bg-surface p-6">
              <Quote size={22} aria-hidden="true" className="text-accent" />
              <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-muted">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                  {item.name
                    .split(' ')
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-medium text-ink">{item.name}</span>
                  <span className="block truncate text-sm text-subtle">
                    {item.role}
                    {item.company ? ` · ${item.company}` : ''}
                  </span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
