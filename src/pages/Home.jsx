import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Experience from '@/sections/Experience'
import Projects from '@/sections/Projects'
import Education from '@/sections/Education'
import Certifications from '@/sections/Certifications'
import Contact from '@/sections/Contact'
import { useDocumentMeta } from '@/hooks/useDocumentMeta'

export default function Home() {
  useDocumentMeta()

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </>
  )
}
