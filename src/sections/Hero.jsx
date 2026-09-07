import { Code2, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import Avatar from '@/components/ui/Avatar'
import Button from '@/components/ui/Button'
import IconLink from '@/components/ui/IconLink'
import StatTile from '@/components/ui/StatTile'
import { site } from '@/data/site'
import { experience } from '@/data/experience'
import { visibleProjects } from '@/data/projects'

const ICONS = { Github: GithubIcon, Linkedin: LinkedinIcon, Code2 }

// Only literal, resume-backed numbers. No computed "N years of experience" —
// that is a claim the resume does not make.
const STATS = [
  { value: `${visibleProjects.length}`, label: 'Featured projects' },
  { value: `${experience.length}`, label: 'Professional roles' },
  { value: '600+', label: 'LeetCode problems solved' },
  { value: '8.6', label: 'B.Tech CGPA' },
]

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-accent/8 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="mb-4 flex items-center gap-2.5 text-sm font-medium tracking-wide text-accent uppercase">
            <span aria-hidden="true" className="h-px w-6 bg-accent" />
            {site.title}
          </p>

          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight sm:text-5xl xl:text-6xl"
          >
            Hi, I&apos;m Bhavesh{' '}
            <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Gupta
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{site.summary}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button as="a" href="#projects" size="lg" className="w-full sm:w-auto">
              View my projects
            </Button>
            <Button
              as="a"
              href={site.resumePath}
              target="_blank"
              rel="noreferrer noopener"
              variant="ghost"
              size="lg"
              className="w-full sm:w-auto"
            >
              Download resume
            </Button>
          </div>

          <div className="mt-8 flex gap-2">
            {site.socials.map((social) => (
              <IconLink
                key={social.id}
                href={social.url}
                label={social.label}
                icon={ICONS[social.icon]}
              />
            ))}
            <IconLink href={`mailto:${site.email}`} label="Email" icon={Mail} />
          </div>
        </div>

        <Avatar />
      </div>

      <div className="container-page relative mt-16">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {STATS.map((stat) => (
            <li key={stat.label}>
              <StatTile value={stat.value} label={stat.label} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
