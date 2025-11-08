import { useEffect, useMemo, useState } from 'react';
import '../styles/global.css';
import { profile, skills, projects, experience, achievements, certifications, interests } from '../data/data';
import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (localStorage.getItem('theme') as 'light' | 'dark') || 'dark');
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const navLinks = useMemo(() => [
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ], []);

  const heroHighlights = useMemo(() => [
    { label: 'Primary focus', value: 'Backend-first full stack delivery' },
    { label: 'Core stack', value: 'NestJS · Laravel · React' },
    { label: 'Location', value: profile.location }
  ], []);

  const backendStack = useMemo(() => skills.find(group => group.group === 'Backend & APIs')?.items.slice(0, 4) ?? [], []);

  return (
    <>
      <nav className="navbar" aria-label="Primary">
        <div className="container navbar-inner">
          <div className="brand-wrapper">
            <a className="brand" href="#home">Raji Olalekan</a>
            <div className="brand-tags">
              <span className="chip chip-ghost">Full Stack Developer</span>
              <span className="chip chip-muted">Backend · Payments</span>
            </div>
          </div>
          <div className="navbar-right">
            <div className="nav-links">
              {navLinks.map(link => (
                <a key={link.id} href={`#${link.id}`}>{link.label}</a>
              ))}
            </div>
            <a className="nav-cta" href={profile.linkedin} target="_blank" rel="noopener noreferrer">Connect</a>
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? 'Light mode' : 'Dark mode'}
            </button>
          </div>
        </div>
      </nav>

      <header id="home" className="hero container">
        <motion.div
          className="hero-content"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.span className="hero-eyebrow" variants={fadeUp}>{profile.role}</motion.span>
          <motion.h1 variants={fadeUp}>Delivering full stack products with backend craftsmanship.</motion.h1>
          <motion.p variants={fadeUp}>{profile.summary}</motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="btn btn-primary" href="#projects">View projects</a>
            <a className="btn btn-outline" href={profile.resumeUrl}>Download CV</a>
            <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </motion.div>
          <motion.ul className="hero-highlights" variants={fadeUp}>
            {heroHighlights.map(item => (
              <li key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="panel-heading">
            <span>Impact snapshot</span>
            <p>Trusted to launch payment-ready platforms with cohesive frontends and resilient APIs.</p>
          </div>
          <div className="panel-stats">
            {achievements.slice(0, 2).map(stat => (
              <div key={stat.label} className="panel-stat">
                <strong>{stat.value}{stat.suffix ?? ''}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="panel-stack">
            <span>Core stack</span>
            <div className="stack-chips">
              {backendStack.map(item => (
                <span key={item} className="chip">{item}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </header>

      <main>
        <section id="skills" className="section container">
          <div className="section-heading">
            <span>Capabilities</span>
            <h2>Coverage from architecture to delivery</h2>
            <p>Tooling and technologies used to ship dependable experiences across fintech and platform products.</p>
          </div>
          <div className="grid skill-grid">
            {skills.map(group => (
              <motion.article
                key={group.group}
                className="card skill-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
              >
                <header>
                  <h3>{group.group}</h3>
                </header>
                <div className="skill-tags">
                  {group.items.map(item => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

  <section id="impact" className="section container" aria-label="Impact metrics">
          <div className="grid stats-grid">
            {achievements.map(stat => (
              <motion.div
                key={stat.label}
                className="card stat-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.35 }}
              >
                <strong>{stat.value}{stat.suffix ?? ''}</strong>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className="section container">
          <div className="section-heading">
            <span>Experience</span>
            <h2>Leading backend initiatives end-to-end</h2>
            <p>Roles that highlight architecture ownership, payments expertise, and secure delivery across fast-moving teams.</p>
          </div>
          <div className="experience-grid">
            {experience.map(role => (
              <motion.article
                key={`${role.company}-${role.role}`}
                className="card experience-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.45 }}
              >
                <div className="experience-meta">
                  <span className="chip chip-muted">{role.period}</span>
                  <h3>{role.role}</h3>
                  <p>{role.company}</p>
                </div>
                <ul>
                  {role.bullets.map(point => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="experience-stack">
                  {role.stack.map(item => (
                    <span key={item} className="chip chip-ghost">{item}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

  <section id="projects" className="section container">
          <div className="section-heading">
            <span>Selected work</span>
            <h2>Secure, performant products launched</h2>
            <p>Backends that balance robustness, compliance, and developer ergonomics.</p>
          </div>
          <div className="grid project-grid">
            {projects.map(project => (
              <motion.article
                key={project.title}
                className="card project-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.4 }}
              >
                <header>
                  <h3>{project.title}</h3>
                  <span className="chip chip-muted project-year">{project.year}</span>
                </header>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="chip chip-ghost">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a className="btn btn-outline" href={project.links.live} target="_blank" rel="noopener noreferrer">Live</a>
                  <a className="btn btn-outline" href={project.links.repo} target="_blank" rel="noopener noreferrer">Repository</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="contact" className="section container">
          <div className="card contact-card">
            <span className="badge">Let us collaborate</span>
            <h2>Ready to build your next platform</h2>
            <p>Open to full stack roles with backend leadership, API architecture consulting, and collaborations that demand reliable infrastructure.</p>
            {interests.length > 0 && (
              <div className="interest-tags" aria-label="Personal interests">
                {interests.map(interest => (
                  <span key={interest} className="chip chip-gradient">{interest}</span>
                ))}
              </div>
            )}
            <div className="contact-links">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me</a>
              <a className="btn btn-outline" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>

        <section id="certifications" className="section container">
          <div className="section-heading">
            <span>Lifelong learning</span>
            <h2>Continuous upskilling & credentials</h2>
            <p>Relevant courses and certifications that inform architecture decisions and developer experience leadership.</p>
          </div>
          <div className="grid certification-grid">
            {certifications.map(cert => (
              <motion.article
                key={`${cert.title}-${cert.year}`}
                className="card certification-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.35 }}
              >
                <span className="chip chip-muted">{cert.year}</span>
                <h3>{cert.title}</h3>
                <p className="cert-provider">{cert.provider}</p>
                <p>{cert.description}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} {profile.name}. Crafted with React & Framer Motion.</footer>
    </>
  );
}
