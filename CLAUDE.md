@AGENTS.md

# Next.js Portfolio Website: Development Prompt

Use this as a build spec, either for yourself, for an AI coding tool, or for Claude Code. It includes the tech stack, structure, and the actual content to use in each section. Bracketed text marks spots where you should add a real detail or metric from your own experience.

---

## 1. Project Brief

Build a personal portfolio website for a Java backend developer specializing in Spring Boot, who also works with Next.js on the frontend side. The site should read as production grade work, not a template demo. Priorities: fast load time, clean typography, mobile first responsiveness, and copy that reads like an engineer wrote it, not a marketing page.

## 2. Tech Stack

- Next.js 14+ (App Router), TypeScript
- Tailwind CSS for styling
- shadcn/ui for base components (buttons, cards, badges)
- Framer Motion for light, purposeful animations only (fade/slide on scroll, no excessive motion)
- next-themes for dark/light mode toggle
- Lucide React for icons
- Deploy target: Vercel
- Optional: a contact form that posts to a small Spring Boot API endpoint, instead of a third party form service, since it doubles as a working example of the stack

## 3. Design Direction

Dark themed by default with a light mode toggle. Use a single accent color (suggest a deep blue or teal, something that reads as technical rather than playful) against a neutral dark background. Monospace accents (like a code font for tags or section labels) are a nice touch for a backend developer's site, used sparingly. Generous whitespace, no clutter, no stock illustrations. Section transitions should be subtle scroll-triggered fades, not flashy.

## 4. Site Structure

Single page scroll site with: Navbar, Hero, About, Skills, Projects, Experience, Contact, Footer. Smooth scroll navigation with active section highlighting in the navbar.

---

## 5. Section Content

### Hero

**Headline:** Java Backend Developer building scalable APIs with Spring Boot

**Subtext:** I design and ship backend systems that handle real traffic, from REST APIs to database architecture. I also build frontends with Next.js when a project needs full ownership end to end.

**CTA buttons:** "View Projects" (scrolls to projects), "Contact Me" (scrolls to contact)

### About

I'm a backend developer focused on Java and Spring Boot, with experience building RESTful APIs, integrating databases, and deploying services to the cloud. I care about writing code that's maintainable six months later, not just code that works today. Outside of backend work, I also build frontends with Next.js when a project needs full ownership end to end. Currently working as a Spring Boot Backend Developer at a fintech company, while also running my own software studio on the side.

### Skills

Group into four cards or columns:

- **Backend:** Java, Spring Boot, Spring Security, Hibernate/JPA, MyBatis, Microservices
- **Databases:** PostgreSQL, MySQL
- **Frontend:** Next.js, React, Tailwind CSS
- **Tools & DevOps:** Docker, Git, CI/CD, Cloud Deployment

### Projects

Use a card grid, two columns on desktop, one on mobile. Each card: title, one line description, tech badges, and a "View Code" or "Live Demo" link if available.

**1. Contract Management System**
A Spring Boot system for managing contract lifecycles, covering creation, multi stage approval, renewal tracking, and document storage. [Describe the specific challenge you solved, for example: built a state based approval workflow so contracts move through review stages with role based permissions at each step]. Built with Java, Spring Boot, Spring Security, [MyBatis or JPA], and [MySQL/PostgreSQL].

**2. HR Management System**
A Spring Boot backend handling employee records, leave management, and role based access for HR staff versus regular employees. [Describe the specific challenge, for example: designed a leave approval flow that handles overlapping requests and automatically updates balances]. Built with Java, Spring Boot, [MyBatis or JPA], and [MySQL/PostgreSQL].

**3. Fixed Asset Management System**
A system for tracking company assets across their lifecycle, including depreciation, assignment, and audit history. [Describe the specific challenge, for example: implemented automatic depreciation calculations and an audit trail so every change to an asset record is logged]. Built with Java, Spring Boot, [MyBatis or JPA], and [MySQL/PostgreSQL].

**4. Smart GPS**
A real time location tracking system that ingests GPS data and displays live positions on a map. [Describe the specific challenge, for example: handled continuous incoming location updates from multiple devices without overloading the database, and pushed updates to the frontend in real time]. Built with Java, Spring Boot, [WebSocket or REST polling], [MySQL/PostgreSQL], and a map based frontend.

Replace each bracketed section with what you actually built. A reviewer can tell the difference between a real technical detail and a generic placeholder, so this part is worth getting specific.

### Experience

Use a vertical timeline, most recent first.

**Java Spring Boot Backend Developer, ChokChey Finance Plc** (Jan 2026, Present, On-site)
Develop and maintain backend services for [describe the product, for example: a lending or loan management platform], building REST APIs with Spring Boot and handling secure data flows with Spring Security. [Add one concrete contribution or improvement you made].

**Founder, GenZ Digital** (Jan 2026, Present, Self-employed)
Run a small software studio delivering web and backend projects for clients, covering system design, development, and deployment with Docker and cloud hosting. [Add a specific client project or outcome].

**Web Design Specialist, Brandbodia** (Jun 2025, Dec 2025, On-site)
Designed and built websites using PHP, with version control through GitHub. [Add a specific project, page count, or feature you delivered].

**Frontend Web Developer Intern, TURBO TECH** (Mar 2025, May 2025, On-site)
Built frontend interfaces and assisted with MySQL backed PHP features during a three month internship. [Add a specific feature or task you owned].

### Contact

Open to backend or full stack roles. Let's talk.
[Your email] · [GitHub link] · [LinkedIn link]

---

## 6. Component Requirements

- Navbar: sticky, transparent on top of hero, solid background on scroll, mobile hamburger menu
- Hero: full viewport height, animated entrance for headline and subtext
- Skills: four cards in a responsive grid, icons next to each category title
- Projects: cards with hover lift effect, tech stack shown as small badges
- Experience: vertical timeline with a dot and connecting line, date ranges aligned
- Contact: simple form (name, email, message) that either emails you via a serverless function or posts to your Spring Boot API; include a success/error state
- Footer: small, just your name, copyright year, and social links repeated

## 7. SEO & Performance

Add proper meta tags (title, description, Open Graph image), use next/image for any images, lazy load below the fold sections, and keep the Lighthouse performance score above 90 by avoiding heavy animation libraries beyond Framer Motion and keeping bundle size lean.

## 8. Deployment

Push to GitHub, connect the repo to Vercel for automatic deployment on push to main. Add a custom domain if you have one, otherwise the default Vercel subdomain is fine to start.
