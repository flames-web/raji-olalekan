export const profile = {
  name: 'Raji Olalekan',
  role: 'Senior Backend Engineer | Fintech & Distributed Systems Architect',
  location: 'Ibadan, Nigeria',
  phone: '+234 704 523 6428',
  email: 'rajiolalekanh247@gmail.com',
  github: 'https://github.com/flames-web',
  linkedin: 'https://www.linkedin.com/in/olalekan-raji-8583452a3/',
  portfolio: 'Portfolio URL',
  summary: `Strategic Senior Backend Engineer with 4+ years of experience architecting high-scale fintech and multi-service booking ecosystems. Expert in designing PCI-aware payment cores, complex multi-role administrative consoles, and event-driven microservices using NestJS, Node.js, and AWS. Proven track record in orchestrating multi-tenant architectures serving 100+ businesses and 5,000+ active users. Specialized in high-availability transaction processing, secure webhook orchestration, and third-party integrations (PMS/eZee/Opera).`,
  resumeUrl: 'https://docs.google.com/document/d/1OyWDTvl8L78o9DdczjZAggorXopiSNOGWP9h-M-qZhI/edit?tab=t.0'
};

export const skills = [
  {
    group: 'Architectural Patterns',
    items: [
      'Modular NestJS',
      'Clean Architecture',
      'Repository Pattern',
      'Microservices',
      'Multi-tenant Orchestration',
      'Event-Driven Architecture'
    ]
  },
  {
    group: 'Backend & APIs',
    items: ['Node.js', 'NestJS', 'Express.js', 'PHP (Laravel)', 'FastAPI', 'RESTful APIs', 'Swagger/OpenAPI']
  },
  {
    group: 'Fintech & Payments',
    items: ['Paystack/Stripe Integration', 'Webhook Lifecycle Management', 'Double-Entry Bookkeeping', 'PCI-DSS Compliance', 'Fraud Mitigation']
  },
  {
    group: 'Infrastructure & DevOps',
    items: ['AWS (S3, Lambda, EC2)', 'Docker', 'Redis (Caching/Pub-Sub)', 'GitHub Actions (CI/CD)', 'Prometheus', 'CloudWatch']
  },
  {
    group: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'TypeORM', 'Prisma', 'Redis', 'Query Optimization']
  },
  {
    group: 'Security',
    items: ['OAuth2', 'JWT (Multi-role)', 'MFA', 'RBAC', 'API Rate Limiting']
  }
];

export const projects = [
  {
    title: 'MyPal Business Platform',
    year: '2024',
    description: 'Multi-service booking ecosystem for fine dining, buffets, accommodation, and attractions with multi-tenant administration.',
    tech: ['NestJS', 'PostgreSQL', 'MySQL', 'TypeORM', 'Redis', 'AWS S3'],
    links: { live: '#', repo: '#' }
  },
  {
    title: 'QruzPay Fintech Core',
    year: '2023',
    description: 'PCI-aware payment core powering wallets, gift cards, and merchant payouts with 99.9% success rate.',
    tech: ['NestJS', 'MongoDB', 'Stripe', 'Paystack', 'Redis', 'Docker'],
    links: { live: '#', repo: '#' }
  },
  {
    title: 'Measurement CV Platform',
    year: '2023',
    description: 'AI-assisted measurement APIs orchestrating FastAPI microservices with secure RBAC access.',
    tech: ['NestJS', 'FastAPI', 'Prisma', 'MongoDB', 'JWT'],
    links: { live: '#', repo: '#' }
  },
  {
    title: 'KampusPlaza E-commerce',
    year: '2022',
    description: 'Laravel marketplace with inventory automation and Paystack-driven order lifecycle management.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Paystack', 'Cloudinary'],
    links: { live: '#', repo: '#' }
  }
];

export const architecturalProjects = [
  {
    title: 'Multi-Tenant Booking Engine',
    description: 'Built core MyPal reservation logic supporting time-slot and quantity-based bookings with real-time availability guards.'
  },
  {
    title: 'Payment Orchestration Layer',
    description: 'Developed webhook handlers with idempotency keys to prevent duplicate transactions and ensure strong data consistency.'
  },
  {
    title: 'PMS Sync Service',
    description: 'Designed a rate-limited API client to sync room inventory across eZee and Opera with bi-directional updates.'
  }
];

export const experience = [
  {
    role: 'Lead Backend Engineer',
    company: 'MyPal Business Platform',
    period: 'Dec 2024 - Present',
    bullets: [
      'Architected a multi-service booking ecosystem spanning fine dining, buffets, accommodation, and attractions for 5,000+ active users and 100+ businesses.',
      'Engineered a triple-console administrative suite for business admins, internal platform admins, and mobile API consumers with JWT role guards and RBAC.',
      'Designed a three-level service category system with self-referencing TypeORM repositories to enable dynamic business-specific customization.',
      'Integrated PMS providers (eZee, Opera) with bi-directional sync for room rates, inventory, and booking availability.',
      'Optimized AWS media pipelines with server-side compression and S3 tiering, cutting storage costs by 60%.',
      'Orchestrated an event-driven notification engine using Redis Pub/Sub and Firebase for sub-100ms delivery.'
    ],
    stack: ['NestJS', 'Node.js', 'PostgreSQL', 'MySQL', 'Redis', 'AWS S3', 'Firebase']
  },
  {
    role: 'Senior Backend Engineer',
    company: 'QruzPay (Fintech Startup)',
    period: 'Nov 2022 - Jan 2024',
    bullets: [
      'Developed a PCI-aware payment core supporting wallets, gift cards, and automated merchant payouts with 99.9% success rate.',
      'Automated financial reconciliation by integrating Stripe and Paystack webhooks, reducing manual discrepancies by 90%.',
      'Improved throughput by 40% through MongoDB aggregation indexing and Redis caching of high-read endpoints.',
      'Strengthened system security with MFA, API rate limiting, and observability endpoints to reduce fraud vectors.',
      'Delivered monitoring services tracking memory, disk, database connections, and third-party API availability.'
    ],
    stack: ['NestJS', 'MongoDB', 'Stripe', 'Paystack', 'Redis', 'Docker', 'AWS']
  },
  {
    role: 'Backend Developer (Contract)',
    company: 'Measurement CV Project',
    period: 'Aug 2023 - Dec 2023',
    bullets: [
      'Architected secure APIs to orchestrate FastAPI-based computer vision microservices for landmark detection and 3D measurements.',
      'Implemented JWT-based RBAC to segregate stylist vs. client data access for privacy and compliance.'
    ],
    stack: ['NestJS', 'FastAPI', 'Prisma', 'MongoDB', 'JWT']
  },
  {
    role: 'Full Stack Developer',
    company: 'KampusPlaza E-commerce',
    period: 'Aug 2022 - Dec 2022',
    bullets: [
      'Shipped a high-performance Laravel marketplace with complex inventory logic and automated order lifecycle management.',
      'Implemented Paystack webhooks to power secure checkout flows and order reconciliation.'
    ],
    stack: ['Laravel', 'PHP', 'MySQL', 'Paystack']
  }
];

export const achievements = [
  { label: 'Businesses Enabled', value: 100, suffix: '+' },
  { label: 'Active Users', value: 5000, suffix: '+' },
  { label: 'Payment Success Rate', value: 99.9, suffix: '%' },
  { label: 'Core API Latency', value: 120, suffix: 'ms' }
];

export const keyAchievements = [
  'Architecture Transformation: migrated a monolith into a modular NestJS ecosystem, improving deployment velocity by 50%.',
  'Performance Engineering: reduced core API latency from 450ms to 120ms through profiling and query optimization.',
  'Business Impact: enabled 500+ businesses to digitize operations and process thousands of reservations with zero financial data loss.'
];

export const education = [
  {
    title: 'Bachelor of Engineering (B.Eng.) – Industrial & Production Engineering',
    institution: 'University of Ibadan',
    details: 'Professional Development: Advanced Node.js & Backend Architecture (Udemy), TypeScript Mastery (Udemy).'
  }
];

export const certifications = [
  {
    title: 'Node.js Developer (Advanced)',
    provider: 'API Engineering & Backend Best Practices',
    year: '2024',
    description: 'Focused on scalable API architecture, observability, and production-grade backend practices.'
  },
  {
    title: 'TypeScript Software Architecture',
    provider: 'Large-scale System Design',
    year: '2024',
    description: 'Advanced TypeScript patterns for distributed systems and resilient backend services.'
  }
];

export const interests = ['Event-driven systems', 'Fintech infrastructure', 'Distributed architecture', 'Developer tooling', 'Community mentorship'];
