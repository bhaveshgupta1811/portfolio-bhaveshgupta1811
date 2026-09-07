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
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ],

  seo: {
    url: 'https://bhavesh-gupta.vercel.app',
    ogImage: '/og-image.png',
  },

  gaps: [
    'site.seo.url is a guess — set the real Vercel host before deploying, and update sitemap.xml + the absolute og:image in index.html to match.',
    'public/og-image.png is a placeholder. Replace with a real 1200x630 card.',
    'Location "Pune, India" is confirmed by you, not stated on the resume.',
  ],
}

export const quickFacts = [
  { label: 'Location', value: 'Pune, India' },
  { label: 'Role', value: 'Software Development Engineer' },
  { label: 'Primary stack', value: 'Java · Spring Boot · React.js · PostgreSQL' },
  { label: 'Current focus', value: 'Backend and full-stack product engineering' },
  { label: 'Education', value: 'B.Tech Computer Science, LNCT Bhopal' },
]
