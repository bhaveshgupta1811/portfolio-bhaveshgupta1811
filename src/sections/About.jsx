import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { quickFacts } from '@/data/site'

export default function About() {
  return (
    <Section id="about">
      <SectionHeading id="about" eyebrow="About" title="What I work on" />

      <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-14">
        <Reveal className="max-w-[68ch] space-y-5 text-[1.0625rem] leading-relaxed text-muted">
          <p>
            I&apos;m a full stack Java developer working mainly on the backend — Spring Boot
            services, REST APIs, and the authorization and data-modelling decisions that sit
            underneath them. Most of my work has been on enterprise products where correctness and
            access control matter more than surface area.
          </p>
          <p>
            At Verzat I build an enterprise file management and collaboration platform, where I
            engineered role-based access control and granular permissions, and found and fixed
            privilege-escalation and cross-tenant vulnerabilities across the sharing, approval and
            ownership APIs. I also built a configuration-driven workflow automation engine that
            turns business rules into data rather than code.
          </p>
          <p>
            Before that I worked on agentic AI workflows with n8n, local model serving with vLLM on
            CUDA, and a multi-platform asset migration tool spanning 15+ platform connections. I
            like problems where the interesting part is the design, not the framework.
          </p>
          <p>
            I&apos;m looking for backend or full-stack work where I can keep growing into
            distributed systems, cloud infrastructure and AI-integrated applications.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <dl className="divide-y divide-line rounded-card border border-line bg-surface">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="px-5 py-4">
                <dt className="text-[0.8125rem] tracking-wide text-subtle uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-[0.9375rem] leading-snug text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
