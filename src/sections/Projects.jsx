import Section from '@/components/ui/Section'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import ProjectCard from '@/components/cards/ProjectCard'
import { visibleProjects } from '@/data/projects'

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        eyebrow="Projects"
        title="Things I have built"
        description="Professional work first. Each one opens a short write-up of the problem, the approach and the engineering decisions behind it."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <Reveal key={project.id} delay={index * 70}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
