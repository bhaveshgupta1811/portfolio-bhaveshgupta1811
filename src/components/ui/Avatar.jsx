import profilePhoto from '@/assets/profile.jpg'
import { site } from '@/data/site'

/**
 * Portrait frame rather than a circular crop. The source is a full-body shot,
 * so a circle would crop to roughly 260x260 of usable face and look soft; at
 * its native 3:4 it stays sharp at every display size.
 */
export default function Avatar() {
  return (
    <div className="relative mx-auto w-full max-w-[20rem] lg:mx-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-accent/15 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-line-strong bg-elevated">
        <img
          src={profilePhoto}
          alt={`${site.name}, ${site.title}`}
          width={800}
          height={1067}
          loading="eager"
          decoding="async"
          className="aspect-3/4 w-full object-cover"
        />
        {/* Grounds the photo in the page palette so it does not read as a
            pasted-in snapshot against the violet theme. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
        />
      </div>
    </div>
  )
}
