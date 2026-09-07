/**
 * Content rules enforced by the components that read this file:
 *  - links.repo / links.demo === null renders NO button. Never a placeholder URL.
 *  - kind: 'professional' suppresses repo, demo and screenshots regardless of
 *    what is set below. Employer work never gets a source link.
 *
 * The workflow-engine entry is written at design-decision level only. It must
 * not carry schema, endpoint paths, enum values, permission strings, the
 * product roadmap, product or module names, or the worked domain example from
 * the internal design document.
 */
export const projects = [
  {
    id: 'workflow-engine',
    slug: 'workflow-automation-engine',
    title: 'Workflow Automation Engine',
    subtitle: 'Configuration-driven business automation',
    kind: 'professional',
    employer: 'Verzat Technology Private Limited',
    published: true,
    featured: true,
    order: 1,

    summary:
      'An automation layer that turns business rules into configuration, so a new rule no longer needs a backend change and a release.',

    problem:
      'Business rules lived in application code. Every new rule meant an engineering cycle and a deploy, and the people who actually understood the process had no way to express it themselves.',

    approach:
      'Modelled the engine around five primitives — definition, trigger, condition, action and execution — and kept every one of them data rather than code. A rule becomes a stored definition the engine interprets at runtime, which is what makes the engine generic instead of a pile of special cases.',

    highlights: [
      'Conditions are stored as data and evaluated at runtime, so adding a business rule is a configuration change rather than a backend deploy.',
      'Actions sit behind a single interface with JSON configuration. New action types need no schema migration, and each one stays independently testable.',
      'Module integration goes through an event publisher kept deliberately at a seam, so the same contract survives a later move from in-process events to a message broker.',
      'Document storage for the builder definition, normalised tables for the parts that need querying — a trade-off decided explicitly rather than defaulted in either direction.',
      'Editing a live rule forks a new version instead of mutating in place, so an execution already in flight never has its definition changed underneath it.',
      'Step-level execution logging, so a failure surfaces with the step that failed and its error instead of disappearing silently.',
      'Activation is permission-controlled through the platform’s existing authorization model rather than a second, parallel one.',
    ],

    tech: [
      'Java',
      'Spring Boot',
      'Spring Data JPA/Hibernate',
      'PostgreSQL',
      'React.js',
      'REST APIs',
      'Spring Security',
    ],

    links: { repo: null, demo: null, caseStudy: null },
    media: { cover: null, screenshots: [] },
    period: null,
    role: null,

    gaps: [
      'Workflow case study: review the rendered detail page against your employer’s disclosure boundary before the first deploy.',
    ],
  },

  {
    id: 'airgo',
    slug: 'airgo',
    title: 'Airgo',
    subtitle: 'Full-Stack Airline Management System',
    kind: 'personal',
    employer: null,
    published: true,
    featured: true,
    order: 2,

    summary:
      'Airline management platform covering flight scheduling, seat booking and admin operations.',

    problem:
      'Booking-data retrieval issued a separate query per related entity, so listing bookings got slower as the table grew — the classic N+1 read pattern.',

    approach:
      'A React.js single-page app with React Router on the front end, against a Spring Boot REST API secured with Spring Security role-based access.',

    highlights: [
      'Flight scheduling, seat booking and admin operations in a single React.js SPA using React Router.',
      'Role-based access enforced with Spring Security and JWT.',
      'Identified and resolved an N+1 query problem in booking data retrieval by implementing JOIN FETCH in Hibernate (JPA), significantly reducing redundant database calls and improving API response performance.',
    ],

    tech: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'JWT',
      'React.js',
      'MySQL',
      'Tailwind CSS',
      'React Router',
      'Hibernate (JPA)',
    ],

    links: { repo: 'https://github.com/Sunbeam-Bhavesh/Airgo', demo: null, caseStudy: null },
    media: { cover: null, screenshots: [] },
    period: null,
    role: null,

    gaps: [
      'Airgo: no live demo URL. Deploy it, or the demo button stays hidden.',
      'Airgo: no screenshots. Capture 2-3 (booking flow, admin, seat map) at 1600x1000.',
    ],
  },

  {
    id: 'foodnotify',
    slug: 'foodnotify',
    title: 'FoodNotify',
    subtitle: 'Food Ordering Web Application',
    kind: 'personal',
    employer: null,
    published: true,
    featured: false,
    order: 3,

    summary:
      'Food ordering application with menu browsing, order placement and real-time delivery tracking.',

    problem:
      'Concurrent updates to the same order could overwrite each other, and an expired token left the front end stuck in a broken authenticated state with no feedback.',

    approach:
      'Optimistic locking on order state in Spring Boot, plus explicit token-expiry handling on the client rather than letting requests fail silently.',

    highlights: [
      'Menu browsing, order placement and real-time delivery tracking.',
      'Resolved concurrent order conflicts using optimistic locking in Spring Boot to prevent duplicate entries.',
      'Handled JWT expiry on the frontend with auto-redirect and session-expired feedback for a seamless user experience.',
    ],

    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'React.js', 'MySQL', 'REST API'],

    links: { repo: null, demo: null, caseStudy: null },
    media: { cover: null, screenshots: [] },
    period: null,
    role: null,

    gaps: [
      'FoodNotify: no GitHub URL, so the card ships with no code button. Supply one or set published: false.',
      'FoodNotify: appeared on an earlier resume version. Confirm you still want it listed.',
    ],
  },

  {
    id: 'portfolio',
    slug: 'portfolio',
    title: 'This Portfolio',
    subtitle: 'Data-driven personal site',
    kind: 'personal',
    employer: null,
    published: true,
    featured: false,
    order: 4,

    summary:
      'The site you are reading. Built without a UI kit or animation library, with every piece of content held in plain data modules.',

    problem:
      'Most portfolio sites bury their content inside components, so updating one date means editing JSX and re-testing a layout.',

    approach:
      'Content lives in six data modules that components read from and never duplicate. Adding a project or a certification is a data edit, not a UI change.',

    highlights: [
      'All copy lives in data modules; components hold none of it, so updating the site never means touching a layout.',
      'Dark and light themes as CSS custom properties, with an inline script that resolves the theme before first paint so there is no flash on load.',
      'Reveal-on-scroll and scroll-spy navigation written as small IntersectionObserver hooks instead of pulling in an animation library.',
      'Honours prefers-reduced-motion in both CSS and JavaScript, so content is never left invisible waiting for an animation that will not run.',
    ],

    tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'JavaScript'],

    links: { repo: 'https://github.com/bhaveshgupta1811/Portfolio', demo: null, caseStudy: null },
    media: { cover: null, screenshots: [] },
    period: null,
    role: null,

    gaps: ['Portfolio: set links.demo to the live URL once deployed.'],
  },
]

export const visibleProjects = projects
  .filter((p) => p.published)
  .sort((a, b) => a.order - b.order)

export const getProject = (slug) => projects.find((p) => p.slug === slug && p.published)
