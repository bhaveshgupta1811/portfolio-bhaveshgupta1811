export const site = {
  name: 'Bhavesh Gupta',
  shortName: 'Bhavesh',
  initials: 'BG',
  title: 'Software Development Engineer',
  summary:
    'Full Stack Java Developer with hands-on experience in Spring Boot microservices, React.js and REST API development. Experienced in agentic AI workflows, local AI model deployment and multi-platform automation using n8n.',

  email: 'bhaveshgupta13524@gmail.com',
  phone: '7067653925',
  // A raw number in public HTML gets scraped within days. It is already in the
  // resume PDF, which is where recruiters look.
  showPhone: false,

  location: 'Pune, India',
  resumePath: '/Bhavesh_Gupta_Resume.pdf',

  socials: [
    { id: 'github', label: 'GitHub', icon: 'Github', url: 'https://github.com/bhaveshgupta1811' },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      icon: 'Linkedin',
      url: 'https://www.linkedin.com/in/bhaveshgupta1811',
    },
    { id: 'leetcode', label: 'LeetCode', icon: 'Code2', url: 'https://leetcode.com/u/bhaveshgupta1811' },
  ],

  nav: [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],

  seo: {
    url: 'https://portfolio-bhaveshgupta1811.onrender.com',
    ogImage: '/og-image.png',
  },

  gaps: [
    'public/og-image.png does not exist. Social shares render without a preview card.',
    'Render: Redirects/Rewrites rule /* -> /index.html (Rewrite) is not configured, so every /projects/* URL 404s on a cold load.',
    'public/Bhavesh_Gupta_CDAC.pdf was lost when dist/ was rebuilt. Re-supply it if you want it linked.',
  ],
}

export const quickFacts = [
  { label: 'Location', value: 'Pune, India' },
  { label: 'Role', value: 'Software Development Engineer' },
  { label: 'Primary stack', value: 'Java · Spring Boot · React.js · PostgreSQL' },
  { label: 'Current focus', value: 'Backend and full-stack product engineering' },
  { label: 'Education', value: 'B.Tech Computer Science, LNCT Bhopal' },
]
