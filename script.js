document.addEventListener('DOMContentLoaded', () => {
    const themeSwitcher = document.querySelector('.theme-switcher i');
    const body = document.body;
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Theme switcher
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeSwitcher.classList.replace('fa-sun', 'fa-moon');
        }
    } else {
        body.classList.add('dark-mode');
        themeSwitcher.classList.replace('fa-sun', 'fa-moon');
    }

    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        
        let theme = 'light-mode';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark-mode';
            themeSwitcher.classList.replace('fa-sun', 'fa-moon');
        } else {
            themeSwitcher.classList.replace('fa-moon', 'fa-sun');
        }
        localStorage.setItem('theme', theme);
    });

    // Hamburger menu
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.querySelector('i').classList.add('fa-bars');
                hamburger.querySelector('i').classList.remove('fa-times');
            }
        });
    });

    // Project data
    const projects = [
        {
            title: 'MyPal Business Platform',
            description: 'A sophisticated multi-service platform API connecting users with restaurants, accommodations, beauty services, and entertainment venues.',
            technologies: 'NestJS, TypeORM, MySQL, Redis, AWS S3, Firebase',
            liveLink: '#',
            repoLink: '#'
        },
        {
            title: 'QruzPay (Fintech Startup)',
            description: 'A comprehensive payment system backend serving 1000+ users, handling financial transactions, wallet operations, and bill payments.',
            technologies: 'NestJS, MongoDB, TypeScript, Stripe',
            liveLink: '#',
            repoLink: '#'
        },
        {
            title: 'Measurement Application',
            description: 'RESTful API backend for an AI-powered tailoring measurement application using Computer Vision.',
            technologies: 'NestJS, Prisma, MongoDB, FastAPI',
            liveLink: '#',
            repoLink: '#'
        },
        {
            title: 'KampusPlaza E-commerce',
            description: 'A full-featured e-commerce platform backend with product management, order processing, and payment integration.',
            technologies: 'Laravel, PHP, MySQL, Paystack',
            liveLink: '#',
            repoLink: '#'
        }
    ];

    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p><strong>Tech:</strong> ${project.technologies}</p>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank">Live Demo</a>
                    <a href="${project.repoLink}" target="_blank">GitHub</a>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Framer Motion Animations
    const { motion } = Motion;

    motion.scroll(
        motion.tween({
            from: { y: 0 },
            to: { y: "100vh" },
            ease: "linear",
            duration: 5,
            repeat: Infinity,
            repeatType: "loop"
        })
    );

    document.querySelectorAll('section').forEach((section) => {
        motion(section, {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5 }
        });
    });
    
    document.querySelectorAll('.skill-card, .project-card').forEach((card) => {
        motion(card, {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.4 }
        });
    });
});
