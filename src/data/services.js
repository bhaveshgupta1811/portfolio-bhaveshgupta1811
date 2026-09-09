/**
 * What Bhavesh actually does, derived strictly from resume evidence. Each entry
 * traces to real work — no invented capability, and deliberately no design or
 * marketing services he has never shipped.
 */
export const services = [
  {
    id: 'backend',
    icon: 'Server',
    title: 'Backend Development',
    description:
      'Spring Boot services and REST APIs with Spring Security, JWT authentication and role-based access control.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs'],
  },
  {
    id: 'fullstack',
    icon: 'Layers',
    title: 'Full-Stack Web Applications',
    description:
      'React front-ends built against Spring Boot services, from the data model through to the interface.',
    tech: ['React.js', 'TypeScript', 'Spring Boot', 'REST APIs'],
  },
  {
    id: 'database',
    icon: 'Database',
    title: 'Database Design',
    description:
      'Relational schema design with JPA and Hibernate, including query tuning — resolving N+1 reads with JOIN FETCH and handling concurrent writes with optimistic locking.',
    tech: ['PostgreSQL', 'MySQL', 'JPA/Hibernate'],
  },
  {
    id: 'automation',
    icon: 'Workflow',
    title: 'AI Workflow Automation',
    description:
      'Agentic pipelines in n8n with local model serving on vLLM and CUDA, integrated with OpenAI, Groq and Stable Diffusion APIs.',
    tech: ['n8n', 'vLLM', 'OpenAI API', 'Groq API'],
  },
]
