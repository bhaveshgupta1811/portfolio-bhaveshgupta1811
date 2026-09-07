import { useEffect, useState } from 'react'
import { Check, Code2, Copy, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import IconLink from '@/components/ui/IconLink'
import Reveal from '@/components/ui/Reveal'
import { site } from '@/data/site'

const ICONS = { Github: GithubIcon, Linkedin: LinkedinIcon, Code2 }

export default function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
    } catch {
      // Clipboard blocked. The address is selectable text right above.
    }
  }

  return (
    <Section id="contact" width="narrow" className="pb-24 text-center md:pb-32">
      <h2 id="contact-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Let&apos;s build something
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-muted">
        I&apos;m open to software development opportunities, interesting projects, and conversations
        about backend and full-stack engineering.
      </p>

      <Reveal className="mt-10">
        <p className="font-mono text-lg break-all text-ink select-all">{site.email}</p>

        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Button as="a" href={`mailto:${site.email}`} size="lg">
            <Mail size={17} aria-hidden="true" />
            Email me
          </Button>
          <Button type="button" onClick={copyEmail} variant="ghost" size="lg">
            {copied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
            {copied ? 'Copied' : 'Copy address'}
          </Button>
        </div>

        {/* <output> carries an implicit role="status". */}
        <output aria-live="polite" className="sr-only">
          {copied ? 'Email address copied to clipboard' : ''}
        </output>

        <div className="mt-8 flex justify-center gap-2">
          {site.socials.map((social) => (
            <IconLink
              key={social.id}
              href={social.url}
              label={social.label}
              icon={ICONS[social.icon]}
            />
          ))}
        </div>

        {site.showPhone ? <p className="mt-6 text-muted">{site.phone}</p> : null}
      </Reveal>
    </Section>
  )
}
