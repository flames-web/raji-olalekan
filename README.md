# Raji Olalekan Portfolio

Modern React (Vite + TypeScript) portfolio for full stack developer (backend-first) Raji Olalekan.

## Highlights
- React 18 + TypeScript with Vite tooling
- Theme toggle (light / dark) with persistence
- Refined glassmorphic design and subtle depth cues
- Framer Motion powered reveal + scroll interactions
- Sections: Hero, Skills, Impact stats, Experience timeline, Architecture highlights, Projects, Achievements, Education, Certifications, Contact
- All copy and link metadata managed from `app/src/data/data.ts`

## Quick Start
```bash
cd app
npm install
npm run dev
```
Visit http://localhost:5173 to preview.

## Production Build
```bash
npm run build
```
Deploy the generated `app/dist` folder on any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).

## Customization
- Update personal details, skills, experience, and project links in `app/src/data/data.ts`.
- Adjust styling tokens or layout in `app/src/styles/global.css`.
- Replace `profile.resumeUrl` with a hosted resume link when available.

The repository now only contains the React implementation to keep the project focused and easy to maintain.
