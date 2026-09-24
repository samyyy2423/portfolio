# Portfolio

My personal site: **[samyaksportfolio.vercel.app](https://samyaksportfolio.vercel.app/)**

A single-page, scroll-driven portfolio with a 3D planet in the hero, animated section headers, a
marquee, and project and services sections.

## Stack

- React 19 + Vite
- Tailwind CSS v4
- GSAP (ScrollTrigger) for scroll and text animations, Lenis for smooth scrolling
- three.js via React Three Fiber and drei for the `Planet.glb` model

## Structure

```
src/
├── sections/      Navbar, Hero, ServiceSummary, Services, About, Works, ContactSummary, Contact
├── components/    Planet (3D model), AnimatedHeaderSection, AnimatedTextLines, Marquee
└── constants/     Services and projects content
```

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
```
