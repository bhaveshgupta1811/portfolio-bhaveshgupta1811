import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Reveal from '@/components/ui/Reveal'
import { education } from '@/data/education'

export default function Education() {
  return (
    <Section id="education">
      <SectionHeading id="education" eyebrow="Education" title="Where I studied" />

      <div className="max-w-3xl space-y-4">
        {education.map((item) => (
          <Reveal key={item.id}>
            <Card className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold tracking-tight">{item.degree}</h3>
                <p className="mt-1 text-accent">{item.institution}</p>
                <p className="mt-1 text-sm text-subtle">
                  <time dateTime={item.start}>{item.start}</time>
                  {' – '}
                  <time dateTime={item.end}>{item.end}</time>
                  <span className="mx-2 text-line">·</span>
                  {item.location}
                </p>
              </div>

              {item.grade ? (
                <div className="shrink-0 rounded-lg border border-line bg-elevated px-4 py-2.5 text-center">
                  <div className="text-[0.6875rem] tracking-wide text-subtle uppercase">
                    {item.grade.label}
                  </div>
                  <div className="text-xl font-semibold text-accent">{item.grade.value}</div>
                </div>
              ) : null}
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
