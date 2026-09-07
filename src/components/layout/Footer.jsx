import { Link } from 'react-router-dom'
import { Code2, Mail } from 'lucide-react'
import IconLink from '@/components/ui/IconLink'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { site } from '@/data/site'

// Explicit map, not a dynamic lookup by string: lucide-react only tree-shakes
// when the bundler can see every icon reference.
const ICONS = { Github: GithubIcon, Linkedin: LinkedinIcon, Code2 }

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-page grid gap-8 py-12 md:grid-cols-3">
        <div>
          <Link to="/" className="font-semibold tracking-tight">
            {site.name}
          </Link>
          <p className="mt-1.5 text-sm text-muted">{site.title}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {site.nav.map((item) => (
              <li key={item.id}>
                <a href={`/#${item.id}`} className="text-muted transition-colors hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:justify-self-end">
          <div className="flex gap-2">
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
      </div>

      <div className="container-page flex flex-col gap-2 border-t border-line py-6 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>Built with React, Vite and Tailwind CSS.</p>
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  )
}
