import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import SkillGroup from '@/components/cards/SkillGroup'
import { skillGroups } from '@/data/skills'

const LEGEND = [
  { tier: 'core', label: 'Daily driver', dot: 'bg-accent' },
  { tier: 'working', label: 'Shipped with it', dot: 'border border-muted' },
  { tier: 'familiar', label: 'Familiar', dot: null },
]

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        id="skills"
        eyebrow="Skills"
        title="Technologies I work with"
        description="Grouped by category and marked by how much I have actually used each one. Hover a technology to see where."
      />

      {/* Visual key only — each chip already carries its tier in screen-reader text. */}
      <ul aria-hidden="true" className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-subtle">
        {LEGEND.map((item) => (
          <li key={item.tier} className="flex items-center gap-2">
            <span
              className={`size-1.5 rounded-full ${item.dot ?? 'border border-line'}`}
            />
            {item.label}
          </li>
        ))}
      </ul>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.id} delay={index * 60}>
            <SkillGroup group={group} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
