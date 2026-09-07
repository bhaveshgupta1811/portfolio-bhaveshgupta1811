import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Lock } from 'lucide-react'
import { GithubIcon } from '@/components/ui/BrandIcons'
import Card from '@/components/ui/Card'
import Chip from '@/components/ui/Chip'
import MediaPlaceholder from '@/components/ui/MediaPlaceholder'

const MAX_CHIPS = 5

export default function ProjectCard({ project }) {
  const isProfessional = project.kind === 'professional'
  // Employer work never gets a source link, whatever the data file says.
  const repo = isProfessional ? null : project.links.repo
  const demo = isProfessional ? null : project.links.demo
  const shown = project.tech.slice(0, MAX_CHIPS)
  const overflow = project.tech.length - shown.length

  return (
    <Card as="article" interactive className="group relative flex flex-col overflow-hidden">
      <MediaPlaceholder label={project.title} className="aspect-[16/9] border-b border-line" />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        {isProfessional ? (
          <p className="mb-2 flex items-center gap-1.5 text-[0.8125rem] text-subtle">
            <Lock size={12} aria-hidden="true" />
            Professional work · {project.employer}
          </p>
        ) : null}

        <h3 className="text-xl font-semibold tracking-tight">
          {/* Stretched link: the whole card is clickable, but there is exactly
              one tab stop for it and its accessible name is the project title. */}
          <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0">
            {project.title}
          </Link>
        </h3>
        <p className="mt-0.5 text-sm text-accent">{project.subtitle}</p>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {shown.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
          {overflow > 0 ? (
            <li>
              <Chip>+{overflow} more</Chip>
            </li>
          ) : null}
        </ul>

        <div className="mt-6 flex items-center justify-between gap-4 pt-5 border-t border-line">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            View details
            <ArrowRight
              size={15}
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>

          <span className="flex items-center gap-4">
            {demo ? (
              <a
                href={demo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} live demo (opens in a new tab)`}
                className="relative z-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
              >
                <ExternalLink size={15} aria-hidden="true" />
                Live
              </a>
            ) : null}

            {repo ? (
              <a
                href={repo}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${project.title} source on GitHub (opens in a new tab)`}
                // relative + z-10 to sit above the stretched link.
                className="relative z-10 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
              >
                <GithubIcon size={15} aria-hidden="true" />
                Code
              </a>
            ) : (
              <span className="text-sm text-subtle">
                {isProfessional ? 'Source not public' : 'Repo not linked'}
              </span>
            )}
          </span>
        </div>
      </div>
    </Card>
  )
}
