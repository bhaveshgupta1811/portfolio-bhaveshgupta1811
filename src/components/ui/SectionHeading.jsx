export default function SectionHeading({ id, eyebrow, title, description }) {
  return (
    <header className="mb-12">
      {eyebrow ? (
        <p className="mb-3 flex items-center gap-2.5 text-sm font-medium tracking-wide text-accent uppercase">
          <span aria-hidden="true" className="h-px w-6 bg-accent" />
          {eyebrow}
        </p>
      ) : null}
      <h2 id={`${id}-heading`} className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? <p className="mt-4 max-w-2xl text-muted">{description}</p> : null}
    </header>
  )
}
