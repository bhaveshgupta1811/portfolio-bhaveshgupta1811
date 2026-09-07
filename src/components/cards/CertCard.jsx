import { Award, ExternalLink } from 'lucide-react'
import Card from '@/components/ui/Card'

/**
 * No verifyUrl means a non-interactive card: no hover lift, no pointer, nothing
 * that implies a click. A dead "Verify" button is worse than no button.
 */
export default function CertCard({ item }) {
  const verifiable = Boolean(item.verifyUrl)

  return (
    <Card as="article" interactive={verifiable} className="relative flex gap-4 p-5">
      <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
        <Award size={17} aria-hidden="true" />
      </span>

      <div className="min-w-0">
        <h3 className="font-semibold tracking-tight">
          {verifiable ? (
            <a
              href={item.verifyUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="after:absolute after:inset-0"
            >
              {item.name}
            </a>
          ) : (
            item.name
          )}
        </h3>
        <p className="mt-1 text-sm text-muted">
          {item.issuer}
          <span className="mx-2 text-line">·</span>
          {item.year}
        </p>
        {item.note ? <p className="mt-2 text-sm text-subtle">{item.note}</p> : null}
        {item.credentialId ? (
          <p className="mt-2 font-mono text-xs text-subtle">ID: {item.credentialId}</p>
        ) : null}

        {verifiable ? (
          <p className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            Verify
            <ExternalLink size={13} aria-hidden="true" />
          </p>
        ) : null}
      </div>
    </Card>
  )
}
