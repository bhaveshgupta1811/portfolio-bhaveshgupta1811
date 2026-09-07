import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import CertCard from '@/components/cards/CertCard'
import { achievements, certifications } from '@/data/certifications'

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        id="certifications"
        eyebrow="Certifications"
        title="Training and achievements"
      />

      <div className="space-y-10">
        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-subtle uppercase">
            Certifications
          </h3>
          <div className="grid gap-4 lg:grid-cols-2">
            {certifications.map((item, index) => (
              <Reveal key={item.id} delay={index * 60}>
                <CertCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-subtle uppercase">
            Achievements
          </h3>
          <div className="grid gap-4 lg:grid-cols-2">
            {achievements.map((item) => (
              <Reveal key={item.id}>
                <CertCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
