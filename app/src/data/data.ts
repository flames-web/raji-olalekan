export const profile = {
  name: 'Raji Olalekan',
  role: 'Full Stack Developer (Backend-first)',
  location: 'Ibadan, Nigeria',
  email: 'rajiolalekanh247@gmail.com',
  github: 'http://github.com/flames-web',
  linkedin: 'https://www.linkedin.com/in/olalekan-raji-8583452a3/',
  summary: `Full stack engineer with 4+ years designing resilient fintech and platform products. I lead with backend architecture—Node.js, NestJS, Laravel, TypeScript, and PHP—while building cohesive experiences in React. Focused on secure payment flows, clean API design, and shipping production-grade features end to end.`,
  resumeUrl: '#'
};

export const skills = [
  { group: 'Languages', items: ['TypeScript', 'JavaScript', 'PHP', 'SQL'] },
  { group: 'Backend & APIs', items: ['Node.js', 'NestJS', 'Express.js', 'Laravel', 'REST APIs', 'Microservices'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'Context API'] },
  { group: 'Databases & Caching', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Prisma', 'TypeORM', 'Redis'] },
  { group: 'Cloud & DevOps', items: ['AWS (S3, Lambda)', 'Docker', 'GitHub Actions', 'CI/CD', 'Heroku'] },
  { group: 'Payments & Security', items: ['Stripe', 'Paystack', 'Webhook Handling', 'JWT', 'OAuth', 'MFA', 'Helmet'] },
  { group: 'Tooling & DX', items: ['Git', 'Postman', 'Swagger / OpenAPI', 'Firebase', 'Storybook'] }
];

export const projects = [
  {
    title: 'MyPal Business Platform',
    year: '2024',
    description: 'Discovery + booking experience spanning hospitality, beauty, and entertainment with full-stack dashboards.',
    tech: ['NestJS', 'TypeORM', 'MySQL', 'React', 'AWS S3', 'Paystack'],
    links: { live: '#', repo: '#' }
  },
  {
    title: 'QruzPay Fintech Suite',
    year: '2023',
    description: 'Wallets, bill payments, gift cards, and KYC flows with PCI-aligned security and React ops consoles.',
    tech: ['NestJS', 'MongoDB', 'Stripe', 'React', 'Redis', 'Docker'],
    links: { live: '#', repo: '#' }
  },
  {
    title: 'Measurement CV Platform',
    year: '2023',
    description: 'AI-assisted measurement capture with NestJS APIs, Prisma data layer, and React admin tooling.',
    tech: ['NestJS', 'Prisma', 'MongoDB', 'FastAPI', 'React', 'JWT'],
    links: { live: '#', repo: '#' }
  },
  {
    title: 'KampusPlaza Commerce',
    year: '2022',
    description: 'Laravel-powered marketplace with responsive storefront, analytics dashboards, and Paystack checkout.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Vue', 'Paystack', 'Cloudinary'],
    links: { live: '#', repo: '#' }
  }
];

export const experience = [
  {
    role: 'Lead Full Stack Engineer',
    company: 'MyPal Business Platform',
    period: 'Oct 2021 - Present',
    bullets: [
      'Architected multi-category booking platform covering restaurants, accommodation, and entertainment with NestJS APIs and React dashboards.',
      'Integrated Paystack payments and full webhook lifecycle, enabling seamless reservation payments and service bookings.',
      'Implemented Firebase messaging for real-time notifications to 5K+ active users and analytics-driven admin insights.',
      'Optimized AWS S3 media pipeline with automated compression and tiering, cutting storage costs by 60%.',
      'Led frontend modernization efforts introducing component libraries, shared design tokens, and structured API contracts.'
    ],
    stack: ['NestJS', 'React', 'TypeORM', 'MySQL', 'Redis', 'AWS S3', 'Paystack', 'Firebase']
  },
  {
    role: 'Backend Engineer',
    company: 'QruzPay Fintech Startup',
    period: 'Nov 2022 - Jan 2024',
    bullets: [
      'Delivered a PCI-aware payment core covering wallets, gift cards, bill payments, and merchant payouts.',
      'Integrated Stripe with robust webhook processing and reconciliation dashboards for operations teams.',
      'Added MFA, rate limiting, and observability endpoints, reducing fraud vectors and stabilizing uptime.',
      'Collaborated with frontend squad on React-based admin tools, aligning data contracts and state models.',
      'Improved API performance by 40% via query optimization, Redis caching, and workload profiling.'
    ],
    stack: ['NestJS', 'Node.js', 'React', 'MongoDB', 'Stripe', 'Redis', 'GitHub Actions']
  },
  {
    role: 'Backend Developer (Freelance)',
    company: 'Measurement CV Project',
    period: 'Aug 2023 - Dec 2023',
    bullets: [
      'Built secure APIs orchestrating FastAPI computer-vision microservices for landmark detection and measurements.',
      'Implemented JWT auth with calibrated measurement history and role-based access for stylists vs. clients.',
      'Shipped React admin tools enabling measurement reviews, manual overrides, and export workflows.'
    ],
    stack: ['NestJS', 'React', 'Prisma', 'MongoDB', 'FastAPI', 'JWT']
  },
  {
    role: 'Full Stack Developer',
    company: 'KampusPlaza E-commerce',
    period: 'Aug 2022 - Dec 2022',
    bullets: [
      'Developed Laravel + Vue marketplace with inventory, catalog management, and responsive storefront UX.',
      'Implemented Paystack payments with order lifecycle automation and transactional emails.',
      'Delivered admin analytics dashboards covering conversion, inventory health, and vendor performance.'
    ],
    stack: ['Laravel', 'PHP', 'Vue', 'MySQL', 'Paystack', 'Cloudinary']
  }
];

export const achievements = [
  { label: 'Products Launched', value: 12 },
  { label: 'Payment Success Rate', value: 99.9, suffix: '%' },
  { label: 'Latency Improvement', value: 40, suffix: '%' },
  { label: 'Active Users Served', value: 5000, suffix: '+' }
];

export const certifications = [
  {
    title: 'The Complete Node.js Developer Course',
    provider: 'Udemy',
    year: '2022',
    description: 'Advanced Node.js, Express.js, MongoDB, and API engineering best practices.'
  },
  {
    title: 'The Web Developer Bootcamp',
    provider: 'Udemy (Colt Steele)',
    year: '2022',
    description: 'Full-stack development with Node.js, Express.js, MongoDB, and modern frontend tooling.'
  },
  {
    title: 'TypeScript Complete Course',
    provider: 'Udemy',
    year: '2023',
    description: 'Type-safe backend architecture patterns and large codebase workflows.'
  }
];

export const interests = ['Music production', 'Story-driven gaming', 'Cinema', 'Open source', 'Developer advocacy'];
