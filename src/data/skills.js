/**
 * Tiers are evidence-derived, not self-assessed:
 *   core     - appears in 2+ roles or projects
 *   working  - appears in exactly 1
 *   familiar - listed on the resume with no supporting role or project
 * No percentage bars. `usedIn` is what makes a tier defensible in an interview.
 */
export const TIERS = {
  core: { label: 'Daily driver', srLabel: 'daily driver' },
  working: { label: 'Shipped with it', srLabel: 'shipped with it' },
  familiar: { label: 'Familiar', srLabel: 'familiar' },
}

export const EVIDENCE = {
  verzat: 'Verzat',
  ndsofttech: 'NdSoftTech',
  bnconsultant: 'B.N. Consultant',
  airgo: 'Airgo',
  foodnotify: 'FoodNotify',
  portfolio: 'Portfolio',
}

export const skillGroups = [
  {
    id: 'backend',
    label: 'Backend',
    tiered: true,
    skills: [
      { name: 'Java (8, 11, 17, 21)', tier: 'core', usedIn: ['verzat', 'ndsofttech', 'airgo', 'foodnotify'] },
      { name: 'Spring Boot', tier: 'core', usedIn: ['verzat', 'airgo', 'foodnotify'] },
      { name: 'Spring Security', tier: 'core', usedIn: ['verzat', 'airgo', 'foodnotify'] },
      { name: 'Spring Data JPA/Hibernate', tier: 'core', usedIn: ['verzat', 'airgo'] },
      { name: 'REST APIs', tier: 'core', usedIn: ['verzat', 'ndsofttech', 'bnconsultant', 'foodnotify'] },
      { name: 'JWT', tier: 'core', usedIn: ['verzat', 'airgo', 'foodnotify'] },
      { name: 'Microservices', tier: 'working', usedIn: ['verzat'] },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    tiered: true,
    skills: [
      {
        name: 'React.js',
        tier: 'core',
        usedIn: ['verzat', 'bnconsultant', 'airgo', 'foodnotify', 'portfolio'],
      },
      {
        name: 'JavaScript (ES6+)',
        tier: 'core',
        usedIn: ['ndsofttech', 'bnconsultant', 'portfolio'],
      },
      { name: 'TypeScript', tier: 'working', usedIn: ['verzat', 'ndsofttech'] },
      { name: 'Tailwind CSS', tier: 'working', usedIn: ['airgo', 'portfolio'] },
      { name: 'Material-UI', tier: 'working', usedIn: ['bnconsultant'] },
      { name: 'React Router', tier: 'working', usedIn: ['airgo', 'portfolio'] },
      { name: 'Redux', tier: 'familiar', usedIn: [] },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    tiered: true,
    skills: [
      { name: 'PostgreSQL', tier: 'working', usedIn: ['verzat'] },
      { name: 'MySQL', tier: 'working', usedIn: ['airgo', 'foodnotify'] },
      { name: 'MongoDB', tier: 'familiar', usedIn: [] },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    tiered: true,
    skills: [
      { name: 'Git', tier: 'core', usedIn: ['verzat', 'bnconsultant', 'portfolio'] },
      { name: 'AWS S3', tier: 'working', usedIn: ['verzat', 'ndsofttech'] },
      { name: 'Linux (Ubuntu)', tier: 'working', usedIn: ['ndsofttech'] },
      { name: 'AWS EC2', tier: 'familiar', usedIn: [] },
      { name: 'Docker', tier: 'familiar', usedIn: [] },
      { name: 'GitHub Actions', tier: 'familiar', usedIn: [] },
      { name: 'Render', tier: 'familiar', usedIn: [] },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    tiered: true,
    skills: [
      { name: 'n8n', tier: 'working', usedIn: ['ndsofttech'] },
      { name: 'vLLM', tier: 'working', usedIn: ['ndsofttech'] },
      { name: 'CUDA', tier: 'familiar', usedIn: ['ndsofttech'] },
      { name: 'OpenAI API', tier: 'working', usedIn: ['ndsofttech'] },
      { name: 'Groq API', tier: 'working', usedIn: ['ndsofttech'] },
      { name: 'Stable Diffusion API', tier: 'working', usedIn: ['ndsofttech'] },
    ],
  },
  {
    id: 'testing',
    label: 'Testing',
    tiered: true,
    skills: [
      { name: 'JUnit', tier: 'familiar', usedIn: [] },
      { name: 'Mockito', tier: 'familiar', usedIn: [] },
    ],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    // Assigning a proficiency tier to "SOLID" is meaningless; these render flat.
    tiered: false,
    skills: [
      { name: 'OOP' },
      { name: 'SOLID Principles' },
      { name: 'Design Patterns' },
      { name: 'Data Structures & Algorithms' },
      { name: 'System Design' },
      { name: 'SDLC' },
      { name: 'Operating Systems' },
    ],
  },
]

export const skillGaps = [
  'Skill tiers are derived from resume evidence, not stated by you. Review them once — Redux, Docker, GitHub Actions, Render, JUnit and Mockito are on your skills list with no supporting role or project, so they sit in "Familiar".',
]
