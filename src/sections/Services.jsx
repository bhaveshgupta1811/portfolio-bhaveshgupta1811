import { Database, Layers, Server, Workflow } from 'lucide-react'
import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Chip from '@/components/ui/Chip'
import { services } from '@/data/services'

// Explicit map so the bundler can see every icon reference and tree-shake.
const ICONS = { Server, Layers, Database, Workflow }

export default function Services() {
  return (
    <Section id="services">
      <SectionHeading
        id="services"
        eyebrow="Services"
        title="What I do"
        description="The work I actually ship, and the stack I ship it with."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = ICONS[service.icon]
          return (
            <Reveal key={service.id} delay={index * 70}>
              <article className="group relative h-full overflow-hidden rounded-card border border-line bg-surface p-6 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-accent/40">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-16 -right-16 size-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <span className="relative grid size-12 place-items-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={22} aria-hidden="true" />
                </span>

                <h3 className="relative mt-5 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="relative mt-3 text-[0.9375rem] leading-relaxed text-muted">
                  {service.description}
                </p>

                <ul className="relative mt-5 flex flex-wrap gap-2">
                  {service.tech.map((tech) => (
                    <li key={tech}>
                      <Chip>{tech}</Chip>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
