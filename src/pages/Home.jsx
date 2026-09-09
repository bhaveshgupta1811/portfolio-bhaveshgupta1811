import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Services from '@/sections/Services'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'
import Education from '@/sections/Education'
import Skills from '@/sections/Skills'
import Certifications from '@/sections/Certifications'
import Testimonials from '@/sections/Testimonials'
import Clients from '@/sections/Clients'
import Contact from '@/sections/Contact'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export default function Home() {
  useDocumentMeta()

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      {/* Renders null until src/data/testimonials.js has real entries. */}
      <Testimonials />
      <Clients />
      <Contact />
    </>
  )
}
