import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Lock } from 'lucide-react'
import { GithubIcon } from '@/components/ui/BrandIcons'
import Chip from '@/components/ui/Chip'
import MediaPlaceholder from '@/components/ui/MediaPlaceholder'
import NotFound from './NotFound'
import { getProject } from '@/data/projects'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = getProject(slug)

  // Render 404 inline rather than redirecting, so the URL is preserved and the
  // visitor can see what they actually typed.
  if (!project) return <NotFound />

  return <ProjectDetailView project={project} />
}

function ProjectDetailView({ project }) {
  useDocumentMeta({
    title: project.title,
    description: project.summary,
    path: `/projects/${project.slug}`,
  })

  const isProfessional = project.kind === 'professional'
  const repo = isProfessional ? null : project.links.repo
  const demo = isProfessional ? null : project.links.demo
  const screenshots = isProfessional ? [] : project.media.screenshots

  return (
    <article className="container-page max-w-3xl pt-28 pb-24 md:pt-36">
      <Link
        to="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        Back to projects
      </Link>

      <header className="mt-8">
        {isProfessional ? (
          <p className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-line bg-elevated px-3 py-1 text-[0.8125rem] text-subtle">
            <Lock size={12} aria-hidden="true" />
            Professional work · {project.employer}
          </p>
        ) : null}

        <h1 className="text-4xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-2 text-lg text-accent">{project.subtitle}</p>
        <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted">{project.summary}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-accent px-4 text-sm font-medium text-on-accent"
            >
              <ExternalLink size={15} aria-hidden="true" />
              View live
            </a>
          ) : null}
          {repo ? (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-line px-4 text-sm font-medium transition-colors hover:border-accent/50 hover:text-accent"
            >
              <GithubIcon size={15} aria-hidden="true" />
              View source
            </a>
          ) : null}
          {!demo && !repo ? (
            <p className="text-sm text-subtle">
              {isProfessional
                ? 'Source and deployment are internal to the employer.'
                : 'Not deployed, and the repository is not linked yet.'}
            </p>
          ) : null}
        </div>
      </header>

      <div className="mt-12 space-y-10">
        <Prose title="The problem">{project.problem}</Prose>
        <Prose title="Approach">{project.approach}</Prose>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">
            {isProfessional ? 'Engineering decisions' : 'Key features'}
          </h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="relative pl-5 text-[0.9375rem] leading-relaxed text-muted"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-2.5 left-0 size-1 rounded-full bg-accent"
                />
                {highlight}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight">Stack</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li key={tech}>
                <Chip>{tech}</Chip>
              </li>
            ))}
          </ul>
        </section>

        {screenshots.length > 0 ? (
          <section>
            <h2 className="text-xl font-semibold tracking-tight">Screenshots</h2>
            <div className="mt-4 grid gap-4">
              {screenshots.map((shot) => (
                <img
                  key={shot.src}
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-card border border-line"
                />
              ))}
            </div>
          </section>
        ) : (
          <MediaPlaceholder
            label="Screenshots to come"
            className="aspect-[16/9] rounded-card border border-line"
          />
        )}
      </div>
    </article>
  )
}

function Prose({ title, children }) {
  if (!children) return null
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{children}</p>
    </section>
  )
}
