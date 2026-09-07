import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import ExperienceItem from '@/components/cards/ExperienceItem'
import { experience } from '@/data/experience'

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeading id="experience" eyebrow="Experience" title="Where I have worked" />

      {/* <ol>, not <ul>: chronology is meaningful order. */}
      <ol className="max-w-3xl">
        {experience.map((item) => (
          <ExperienceItem key={item.id} item={item} />
        ))}
      </ol>
    </Section>
  )
}
