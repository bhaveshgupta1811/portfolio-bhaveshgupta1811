import { site } from '@/data/site'

/**
 * No photo in the repo, so this renders a deliberate monogram rather than a
 * broken image or a stock headshot.
 */
export default function Avatar() {
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-[19rem] place-items-center lg:mx-0">
      <div
        aria-hidden="true"
        className="absolute inset-6 rounded-full bg-accent/12 blur-3xl"
      />
      <div className="relative grid size-full place-items-center rounded-full border-2 border-accent/30 bg-elevated">
        <span className="text-6xl font-semibold tracking-tight text-ink sm:text-7xl">
          {site.initials}
        </span>
      </div>
    </div>
  )
}
