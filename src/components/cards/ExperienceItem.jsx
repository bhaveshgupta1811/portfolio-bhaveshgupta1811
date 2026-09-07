import Chip from '@/components/ui/Chip'
import Reveal from '@/components/ui/Reveal'

export default function ExperienceItem({ item }) {
  return (
    <li className="relative pb-10 pl-8 last:pb-0 sm:pl-10">
      {/* Rail and node are decoration; the <ol> already conveys the sequence. */}
      <span
        aria-hidden="true"
        className="absolute top-2 left-0 h-full w-px bg-line last:hidden"
      />
      <span
        aria-hidden="true"
        className={`absolute top-1.5 left-0 size-3 -translate-x-1/2 rounded-full border-2 ${
          item.current ? 'border-accent bg-accent' : 'border-line bg-bg'
        }`}
      />

      <Reveal>
        <p className="text-sm text-subtle">
          <time dateTime={item.start}>{item.startLabel}</time>
          {' – '}
          {item.end ? <time dateTime={item.end}>{item.endLabel}</time> : item.endLabel}
          <span className="mx-2 text-line">·</span>
          {item.location}
        </p>

        <h3 className="mt-1.5 text-xl font-semibold tracking-tight">{item.role}</h3>
        <p className="mt-0.5 text-accent">{item.company}</p>

        <ul className="mt-4 space-y-2.5">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="relative pl-5 text-[0.9375rem] leading-relaxed text-muted">
              <span aria-hidden="true" className="absolute top-2.5 left-0 size-1 rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>

        <ul className="mt-5 flex flex-wrap gap-2">
          {item.tech.map((tech) => (
            <li key={tech}>
              <Chip>{tech}</Chip>
            </li>
          ))}
        </ul>
      </Reveal>
    </li>
  )
}
