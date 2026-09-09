import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { experience } from '@/data/experience'

const initials = (company) =>
  company
    .replace(/[^A-Za-z. ]/g, '')
    .split(/[\s.]+/)
    .filter(Boolean)
    .map((word) => word[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

/**
 * The reference template shows client logos. These are employers, not clients,
 * and the heading says so — reusing experience.js rather than inventing a
 * separate client list.
 */
export default function Clients() {
  return (
    <Section id="clients">
      <SectionHeading
        id="clients"
        eyebrow="Companies"
        title="Where I have worked"
        description="Teams I have shipped production software with."
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {experience.map((item, index) => (
          <Reveal key={item.id} delay={index * 70}>
            <li className="flex h-full items-center gap-4 rounded-card border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent/40">
              <span
                aria-hidden="true"
                className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent-soft text-sm font-bold text-accent"
              >
                {initials(item.company)}
              </span>
              <span className="min-w-0">
                <span className="block truncate font-medium text-ink">{item.company}</span>
                <span className="block truncate text-sm text-subtle">
                  {item.startLabel} – {item.endLabel}
                </span>
              </span>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
