export const profile = {
  name: 'Raji Olalekan',
  role: 'Backend Engineer',
  location: 'Ibadan, Nigeria',
  email: 'rajiolalekanh247@gmail.com',
  github: 'https://github.com/rajiolalekan',
  linkedin: 'https://linkedin.com/in/rajiolalekan',
  summary: `Backend Engineer with 4+ years building secure, scalable financial and business platforms. Specialized in Node.js, NestJS, TypeScript, and payment integrations with Stripe & Paystack. Passionate about clean architecture, performance optimization, and developer experience.`,
  resumeUrl: '#'
};

export const skills = [
  { group: 'Backend', items: ['Node.js', 'NestJS', 'Express.js', 'TypeScript', 'REST APIs', 'Microservices'] },
  { group: 'Databases', items: ['MongoDB', 'MySQL', 'Redis', 'TypeORM', 'Mongoose', 'Prisma'] },
  { group: 'Cloud & DevOps', items: ['AWS S3', 'Docker', 'Heroku', 'CI/CD', 'GitHub Actions'] },
  { group: 'Security', items: ['JWT', 'OAuth', 'MFA', 'Helmet', 'Rate Limiting'] },
  { group: 'Payments', items: ['Stripe', 'Paystack', 'Webhook Handling'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Postman', 'Swagger', 'MapBox', 'Firebase'] }
];

export const projects = [
  {
    title: 'MyPal Business Platform',
    description: 'Multi-service business discovery & booking API covering restaurants, accommodation, beauty, entertainment.',
    tech: ['NestJS', 'TypeORM', 'MySQL', 'Redis', 'AWS S3', 'Paystack', 'Firebase'],
    links: { live: '#', repo: '#' }
  },
  {
    title: 'QruzPay Fintech Backend',
    description: 'Payment system backend: wallets, transactions, gift cards, bill payments, security & monitoring.',
    tech: ['NestJS', 'MongoDB', 'Stripe', 'JWT', 'Helmet', 'Swagger'],
    links: { live: '#', repo: '#' }
  },
  {
    title: 'Measurement CV API',
    description: 'Computer-vision assisted API for tailoring measurements via image landmarking.',
    tech: ['NestJS', 'Prisma', 'MongoDB', 'FastAPI', 'JWT'],
    links: { live: '#', repo: '#' }
  },
  {
    title: 'KampusPlaza E-commerce',
    description: 'Full-featured marketplace platform with products, categories, payments and admin dashboards.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Paystack', 'Cloudinary'],
    links: { live: '#', repo: '#' }
  }
];

export const experience = [
  {
    role: 'Lead Backend Engineer',
    company: 'MyPal Business Platform',
    period: 'Oct 2021 - Present',
    bullets: [
      'Architected multi-category booking & discovery API (restaurants, accommodation, beauty, entertainment).',
      'Implemented Paystack payment + webhooks; Firebase push notifications for 5K+ users.',
      'Built media storage & optimization pipeline on AWS S3 reducing cost 60%.',
      'Designed multi-role auth (users, businesses, admins) + analytics & review aggregation.'
    ],
    stack: ['NestJS', 'TypeORM', 'MySQL', 'Redis', 'AWS S3', 'Paystack', 'Firebase']
  },
  {
    role: 'Backend Engineer',
    company: 'QruzPay Fintech Startup',
    period: 'Nov 2022 - Jan 2024',
    bullets: [
      'Delivered secure payment modules: wallet ops, gift cards, bill payments & KYC.',
      'Integrated Stripe, implemented MFA, rate limiting, and monitoring endpoints.',
      'Reduced API latency 40% via caching & query optimization.'
    ],
    stack: ['NestJS', 'MongoDB', 'Stripe', 'JWT', 'Helmet', 'Swagger']
  },
  {
    role: 'Backend Developer (Freelance)',
    company: 'Measurement CV Project',
    period: 'Aug 2023 - Dec 2023',
    bullets: [
      'Built API for CV landmark extraction and measurement computation.',
      'Integrated FastAPI microservice & secure image upload workflow.',
      'Implemented measurement history with calibration support.'
    ],
    stack: ['NestJS', 'Prisma', 'MongoDB', 'FastAPI']
  },
  {
    role: 'Full Stack Developer',
    company: 'KampusPlaza E-commerce',
    period: 'Aug 2022 - Dec 2022',
    bullets: [
      'Developed product/catalog modules & order checkout with Paystack.',
      'Created admin dashboards and asset optimization workflows.'
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Paystack', 'Cloudinary']
  }
];

export const achievements = [
  { label: 'Projects Delivered', value: 15 },
  { label: 'Payment Integrations', value: 6 },
  { label: 'Avg. Latency Reduction', value: 40, suffix: '%' },
  { label: 'Users Impacted', value: 5000, suffix: '+' }
];
