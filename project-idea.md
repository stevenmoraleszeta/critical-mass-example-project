# Steven Morales – Professional Portfolio for Critical Mass

## Table of Contents

- [0. General Project Concept](#0-general-project-concept)
- [1. Project Objective (Linked to the Position)](#1-project-objective-linked-to-the-position)
- [2. General Application Architecture](#2-general-application-architecture)
  - [2.1. Pages (Next.js App Router)](#21-pages-nextjs-app-router)
  - [2.2. Folder Structure](#22-folder-structure)
- [3. Narrative Concept and Content for Each Page](#3-narrative-concept-and-content-for-each-page)
  - [3.1. Landing - "Steven Morales: Front-End Experience Engine"](#31-landing---steven-morales-front-end-experience-engine)
  - [3.2. `/critical-mass-case-study` Page – Critical Mass Portfolio Prototype](#32-critical-mass-case-study-page--critical-mass-portfolio-prototype)
  - [3.3. `/projects` Page – Selected Projects & Case Studies](#33-projects-page--selected-projects--case-studies)
  - [3.4. `/skills` Page – Skills & Tech Stack](#34-skills-page--skills--tech-stack)
  - [3.5. `/experience` Page – Professional Experience](#35-experience-page--professional-experience)
  - [3.6. `/contact` Page – Let's Build Something Great](#36-contact-page--lets-build-something-great)
  - [3.7. `/ui-library` Page – UI Library](#37-ui-library-page--ui-library)
  - [3.5. Component Specifications (Props & Types)](#35-component-specifications-props--types)
  - [3.6. Complete Copy (Ready to Use)](#36-complete-copy-ready-to-use)
- [4. Visual Design and Style System](#4-visual-design-and-style-system)
  - [4.1. Color Palette](#41-color-palette)
  - [4.2. Typography](#42-typography)
  - [4.3. Layout and Spacing](#43-layout-and-spacing)
  - [4.4. BEM + SMACSS](#44-bem--smacss)
- [5. Accessibility (Clear Plan)](#5-accessibility-clear-plan)
- [6. Performance (Plan)](#6-performance-plan)
- [7. Testing (Minimum Viable)](#7-testing-minimum-viable)
- [8. Git & Workflow](#8-git--workflow)
- [9. README – Structure I'll Use](#9-readme--structure-ill-use)
- [10. How I'll Present It to Critical Mass](#10-how-ill-present-it-to-critical-mass)
- [11. Job Posting - Critical Mass](#11-job-posting---critical-mass)

---

## 0. General Project Concept

### Project Name

"Steven Morales – Professional Portfolio"

### Core Idea

A professional portfolio showcasing my experience as a Full Stack Software Engineer and Tech Leader, specifically designed for the **Developer, Front End** position at **Critical Mass** in **San Jose, Costa Rica**.

**About Me:**
- **CEO & Lead Software Developer** at Novaera - Leading a team of 6+ developers building intelligent and scalable digital solutions
- **CEO & Lead Tech Educator** at ZETA Academia - Leading a team of 4+ educators empowering 1,000+ students
- **3+ years** of experience building robust, scalable applications
- **Full Stack** expertise: Front-end, Back-end, Databases, APIs, Cloud deployment
- Based in **Costa Rica**, ready to work from office 3+ days a week

### What I Want to Demonstrate

**My Real-World Experience:**

- Translate Figma designs into responsive, accessible code (proven across multiple production projects)
- Create scalable component libraries and design systems (built ERP systems, EdTech platforms)
- Integrate with APIs and external services (REST, GraphQL, SOAP - full-stack experience)
- Performance optimization and scalability (applications serving 1,000+ users)
- Leadership and collaboration (leading teams, working with cross-functional teams)
- Testing and quality assurance (Jest, RTL, code reviews)

**Professional Approach:**

- Demonstrate real-world experience and proven track record
- Show understanding of agency environment and client needs
- Highlight technical leadership and problem-solving skills
- Align with Critical Mass requirements and values

## 1. Project Objective (Linked to the Position)

This project needs to clearly respond to the job posting:

- **Translate designs / Figma → My own design converted to HTML/CSS/React/Next.**
- **Responsive / Mobile-first / Cross-browser → Flawless layout on mobile/tablet/desktop.**
- **Accessibility → Semantic HTML, ARIA, focus states, etc.**
- **APIs / JSON / HTTP → Consuming an (internal) endpoint as if it were a CMS.**
- **SASS / preprocessors → Real use of SCSS with BEM/SMACSS.**
- **Testing → At least 2–3 unit tests (Jest + RTL).**
- **Performance → Lazy loading, good image practices, efficient components.**
- **Design system / reusable components → `/components` page.**
- **Optimized prototype / POC → Small but very polished project.**

## 2. General Application Architecture

### 2.1. Pages (Next.js App Router)

- **`/`** → Home
  - Hero section with professional introduction
  - Role Focus: Developer, Front End @ Critical Mass
  - Key Highlights (What I bring to the team)
  - Primary Call To Action

- **`/critical-mass-case-study`** → Critical Mass Portfolio Prototype
  - Project Overview
  - How This Portfolio Is Built for Critical Mass
  - Design-to-Code Workflow (Figma → HTML/CSS/JS/React)
  - Accessibility, Performance & Responsiveness
  - Tooling, Testing & Automation
  - What You Can Review Here (Code, Live Demo, Repo Links)

- **`/projects`** → Selected Projects & Case Studies
  - Critical Mass Portfolio Prototype
  - Novaera SaaS ERP (Web, API, DB)
  - Precision Seas ERP System
  - ZETA Academia EdTech Platform (V1 & V2)
  - TimerChill – Modern Pomodoro Timer
  - Matemática Integral ERP & Automation System
  - Demeter IoT Agriculture System
  - INFOCOOP Education Platform Enhancements
  - Assistive Robotics Project for Elderly Care

- **`/skills`** → Skills & Tech Stack
  - Core Front-End Skills
  - Front-End Tooling & Automation
  - Back-End & APIs
  - Databases & Data
  - Cloud & DevOps
  - AI & Data Tools
  - Testing & QA
  - Productivity & Collaboration Tools
  - Languages
  - Engineering Practices & Soft Skills

- **`/experience`** → Professional Experience
  - CEO & Lead Software Developer – Novaera
  - CEO & Lead Tech Educator – ZETA Academia
  - Freelance Software Developer
  - Software Developer (Intern) – INFOCOOP
  - Software Developer – TI Recursos CR
  - Impact Summary (Leadership, Ownership, Collaboration)

- **`/contact`** → Let's Build Something Great
  - Contact Details
  - Social Links
  - Availability & Ways to Collaborate

- **`/ui-library`** → UI Library
  - Showcase of reusable UI components demonstrating technical skills
  - Documentation of component architecture and accessibility features
  - Positioned as technical reference

### 2.2. Folder Structure

```plaintext
src/
  app/
    layout.tsx
    globals.scss              # imports main.scss if you prefer it that way
    page.tsx                  # Landing /
    components/
      page.tsx                # /components
    content/
      page.tsx                # /content
    about/
      page.tsx                # /about
    api/
      content/
        route.ts              # GET /api/content

  components/
    layout/
      MainLayout.tsx
      Header.tsx
      Footer.tsx
      NavBar.tsx
    sections/
      Hero.tsx
      Features.tsx
      Specs.tsx
      UseCases.tsx
      PerformanceSection.tsx
      PricingSection.tsx
      Testimonials.tsx
      CTASection.tsx
    ui/
      Button.tsx
      IconButton.tsx
      Tag.tsx
      Badge.tsx
      Card.tsx
      StatCard.tsx
      Pill.tsx
      Input.tsx
      Select.tsx
      Toggle.tsx
      Skeleton.tsx
      SwitchTheme.tsx
    content/
      ContentFilters.tsx
      ContentList.tsx
      ContentCard.tsx
    feedback/
      Loader.tsx
      ErrorMessage.tsx
      Toast.tsx

  lib/
    api/
      contentApi.ts           # fetchContent() function
    hooks/
      useFetchContent.ts      # custom hook

  styles/
    base/
      _reset.scss
      _variables.scss
      _mixins.scss
      _typography.scss
      _layout.scss
    components/
      _buttons.scss
      _cards.scss
      _tags.scss
      _navbar.scss
      _hero.scss
      _forms.scss
      _content.scss
    pages/
      _home.scss
      _components-page.scss
      _content-page.scss
      _about-page.scss
    main.scss                  # imports base, components, pages

  tests/
    Hero.test.tsx
    Button.test.tsx
    Content.test.tsx

public/
  images/
    logo-steven.svg
    avatar-steven.png
    hero-bg.jpg
    icon-feature-1.svg
    icon-feature-2.svg
    icon-feature-3.svg
    ...
```

## 3. Narrative Concept and Content for Each Page

> **Note:** The complete and official copy for all pages is defined in `PROJECT-CONTENT.md`. This section provides a high-level overview. Always refer to `PROJECT-CONTENT.md` for the exact copy, content structure, and detailed specifications for each page.

### 3.1. Landing - "Front-End Experience Engine for Critical Mass"

#### 3.1.1. Hero Section

**Objective:** Present my professional background and establish connection with Critical Mass.

**Elements (from PROJECT-CONTENT.md):**

- **Headline:**
  - _"Front-End Experience Engine for Critical Mass."_
- **Subheadline:**
  - I'm **Steven Morales**, a **Full Stack Software Engineer & Tech Leader** focused on building **high-quality, responsive, accessible front-end experiences** that connect technology, creativity, and real human needs.
- **Key Identity Line:**
  - **Full Stack Software Engineer | Tech Leader | Product-Driven Developer | Creative Technologist**
  - Based in **San José, Costa Rica**, applying for **Developer, Front End at Critical Mass**.
- **Short Value Intro:**
  - I have **3+ years of experience** building robust, scalable, high-performance software across **web, desktop, mobile, and hybrid platforms**, working through the full development cycle: from **design and architecture** to **deployment and optimization**. I enjoy creating **clean, efficient solutions** that connect technology with real user needs, combining strong technical skills with **leadership, teamwork, and problem-solving**.
- **CTAs:**
  - Primary: "Want to see how I would work at Critical Mass?" → Navigate to `/critical-mass-case-study`
  - Secondary: View Projects → Navigate to `/projects`
- **Visual:**
  - Professional background image or code/UI overlay representing technical expertise.
  - Background with subtle gradient.

#### 3.1.2. "Role Focus: Developer, Front End @ Critical Mass" Section

**Title:** "Role Focus: Developer, Front End @ Critical Mass"

This portfolio is intentionally designed as a **live case study** for the **Developer, Front End** position at Critical Mass:

- **Design Translation:** I translate Figma/wireframes into **semantic HTML5, modern CSS3, and React/Next.js components**.
- **Responsive & Accessible:** I build **mobile-first layouts** with **accessibility best practices (WCAG mindset)** and **cross-browser support**.
- **API Integration:** I work daily with **REST APIs, JSON, HTTP**, and have familiarity with **SOAP** and external services.
- **Tooling:** I use **SASS/LESS, Gulp, Vite, GitHub Actions** and modern bundlers to maintain efficient front-end pipelines.
- **Collaboration:** I coordinate with **design, business, QA, and tech leads** to deliver on time with quality.
- **Ownership:** I'm used to **owning features end-to-end**, providing time estimates, and communicating progress clearly.

**Each item will include:**

- Decorative icon.
- Title.
- Brief description.
- BEM class: `.role-focus-item`, `.role-focus-item__icon`, etc.

#### 3.1.3. "Key Highlights – What I Bring to Critical Mass" Section

**Title:** "Key Highlights – What I Bring to Critical Mass"

- **Front-End Expertise:** Strong in **HTML, CSS, JavaScript, TypeScript, React, Next.js**, design systems and reusable components.
- **Product Mindset:** I think in **flows, user journeys, and product impact**, not just isolated tasks.
- **Performance & Quality:** Experience with **performance optimization, scalability, and maintainable architectures**.
- **Leadership & Mentorship:** CEO & Lead Developer at **Novaera**, leading a **multi-developer engineering team**.  
- **Education & Impact:** CEO & Lead Tech Educator at **ZETA Academia**, offering **30+ courses** to **1,000+ students** in Python, AI, Java, Excel, and more.  
- **Problem Solver:** Comfortable with **debugging, root cause analysis, and reducing technical debt**.

#### 3.1.4. "Real-World Experience" Section

**Title:** "Real-World Experience"

List of real scenarios I've successfully addressed:

- "Need a pixel-perfect build from a Figma file?"
  - "I've translated complex designs into production-ready code across multiple projects, including ERP systems and educational platforms. Built reusable component libraries that design teams love to work with."

- "Need scalable architecture for growing teams?"
  - "Led development of modular SaaS ERP systems and EdTech platforms. Designed component systems that scale from prototypes to production applications serving 1,000+ users."

- "Need someone who understands both front-end and back-end?"
  - "Full-stack experience building complete systems from database design to API development to responsive UIs. Comfortable with debugging, root cause analysis, and cross-browser compatibility."

I'll render it as cards or timeline, haven't decided yet.

#### 3.1.5. "Performance & Reliability" Section

**Title:** "Performance & Reliability"

**Suggested Content:**

- "Stats cards" type blocks:
  - "Focus on Lighthouse scores & perceived performance."
  - "Works with lazy loading, image optimization and bundle awareness."
  - "Approach: profile, measure, then optimize – not guess."

- Small more serious paragraph explaining:
  - How I approach debugging and root cause analysis.
  - How I communicate with the team (estimates, updates, etc.).

#### 3.1.6. "Featured Projects" Section

**Title:** "Featured Projects"

**Objective:** Showcase real-world projects demonstrating full-stack expertise, leadership, and scalable architecture.

**Projects to showcase:**

1. **Novaera SaaS ERP**
   - Modular SaaS ERP for business management
   - Leading team of 6+ developers
   - Technologies: React, Next.js, TypeScript, PostgreSQL, REST API, AWS
   - Highlights: Scalable microservices, multi-tenant platform, real-time analytics
   - Status: Live
   - URL: https://novaera-saas-erp.vercel.app

2. **ZETA Academia EdTech Platform**
   - EdTech startup with 30+ courses, 1,000+ students
   - Leading team of 4+ educators
   - Technologies: React, Next.js, TypeScript, MongoDB, Firebase, SASS
   - Highlights: Scalable learning platform, analytics, responsive design
   - Status: Live
   - URL: https://zetaacademia.com

3. **Precision Seas ERP System**
   - Integrated ERP for industrial manufacturing
   - Modules: inventory, billing, production, analytics
   - Technologies: React, Next.js, PostgreSQL, REST API, Docker
   - Highlights: Industrial focus, complete inventory management
   - Status: Upcoming (final testing)

4. **Matemática Integral ERP**
   - Custom ERP for educational institution
   - Automation and reporting tools
   - Technologies: React, TypeScript, Node.js, PostgreSQL, SASS
   - Highlights: Resource management, academic modules, automation
   - Status: Live
   - URL: https://matematica-integral.vercel.app

**Each project card includes:**
- Title and status badge (Live/Upcoming/Draft)
- Description
- Key highlights (bullet points)
- Technologies used (tags)
- Links to live site and GitHub (when available)

#### 3.1.7. "Leadership & Collaboration" Section

**Title:** "Leadership & Collaboration"

**Objective:** Highlight leadership experience, team collaboration, and cross-functional work - key requirements for Critical Mass agency environment.

**Stat Cards:**

1. **Team Leadership**
   - "Leading 6+ developers at Novaera and 4+ educators at ZETA Academia. Establishing workflows, code reviews, CI/CD integration, and process improvement."

2. **Cross-Functional Collaboration**
   - "Working with Creative, Business, Technology, and QA teams to ensure delivery of high-quality, punctual web development. Experience translating business needs into technical solutions."

3. **Communication & Transparency**
   - "Providing clear progress updates and realistic estimates to stakeholders. Ensuring transparency throughout development process while maintaining code quality and best practices."

**Paragraph:**
- Explain how collaborative approach has been essential in delivering applications serving 1,000+ users while maintaining scalability and performance.

#### 3.1.8. "Availability" Section

**Title:** "Availability & Next Steps"

**Copy:**

- "I'm actively seeking a full-time Front-End Developer position at Critical Mass in San Jose, Costa Rica. I'm ready to bring my experience in leading teams, building scalable applications, and delivering high-quality code to your projects. Let's discuss how I can contribute to your team."

#### 3.1.4. "Primary Call To Action" Section

**Title:** "Primary Call To Action"

**Copy:**

> **Want to see how I would work at Critical Mass?**  
> Start with the **"Critical Mass Case Study"** page – it's a focused breakdown of how I match this role, backed by real code and projects.

**Buttons:**

- View Critical Mass Case Study → `/critical-mass-case-study`
- Explore My Projects → `/projects`

### 3.2. `/critical-mass-case-study` Page – Critical Mass Portfolio Prototype

**Objective:** Detailed breakdown of how this portfolio demonstrates alignment with Critical Mass requirements.

> **Note:** Complete content and copy for this page is defined in `PROJECT-CONTENT.md` under `/critical-mass-case-study`. Always refer to that file for exact copy and content structure.

**Sections (from PROJECT-CONTENT.md):**

#### Section 1 – Project Overview

- This site is built as a **portfolio prototype specifically for the Critical Mass Developer, Front End role**, demonstrating front-end expertise, design-to-code translation, and modern web development practices.

**Goals:**
- Demonstrate **design-to-code translation** using **Figma → Next.js + SASS/SCSS**.
- Show **responsive architecture**, **component-driven design**, and **accessibility best practices**.
- Highlight **API integration**, **state management**, and **front-end tooling** (SASS, BEM, Vite/Gulp-style patterns).
- Reflect how I **collaborate with cross-functional teams** and maintain **clean, documented code**.

#### Section 2 – How This Portfolio Is Built for Critical Mass

- **Figma to Front-End:** Layouts and components designed to be **pixel-conscious, flexible, and accessible**.
- **Design Systems:** Components treated as **reusable building blocks** with well-structured **SCSS and BEM-like class naming**.
- **Mobile First:** Layouts are **designed mobile-first**, then scale up to tablet and desktop.
- **Cross-Browser:** Styles and layout decisions respect **modern browser compatibility**.

#### Section 3 – Design-to-Code Workflow

**Typical workflow:**

1. **Receive designs & specs** (Figma, wireframes, UX notes).
2. **Break into components**: pages, sections, UI blocks (cards, navbars, buttons, grids).
3. **Define responsive behavior** for each breakpoint.
4. **Implement semantic HTML** and **accessible React/Next.js components**.
5. **Style with CSS/SCSS/SASS** using **variables, mixins, and BEM-like structure**.
6. **Integrate APIs** (REST/JSON, occasionally SOAP) and manage **local and global state**.
7. **Test accessibility & responsiveness**: keyboard navigation, contrast, screen sizes.
8. **Review & iterate** with designers, PMs, QA, and tech leads.

#### Section 4 – Accessibility, Performance & Responsiveness

- **Accessibility:**
  - Semantic HTML and ARIA attributes where needed.
  - Focus management and keyboard navigation.
  - Attention to **color contrast**, font sizes, and readable layouts.

- **Performance:**
  - Lean, reusable component architecture.
  - Avoid unnecessary re-renders, heavy images, or blocking scripts.
  - Efficient API usage and caching strategies where appropriate.

- **Responsiveness:**
  - Mobile-first CSS strategies.
  - Layouts built with **flexbox** and **CSS grid**.
  - Tested across multiple viewports and browsers.

#### Section 5 – Tooling, Testing & Automation

- **Preprocessors:** SASS/SCSS & LESS.
- **Tooling:** Gulp/Vite-style bundling and asset pipelines.
- **Testing:** React Testing Library & Jest for UI behavior and component tests.
- **CI/CD:** GitHub Actions for linting, tests, and basic deployment workflows.

#### Section 6 – What You Can Review

- **Live demo** (portfolio site).
- **GitHub repository** for:
  - Front-end structure (pages, components, hooks).
  - Styles (SASS/SCSS, BEM structure).
  - Tests and basic CI config.
- **Other case studies** on `/projects`.

### 3.3. `/projects` Page – Selected Projects & Case Studies

**Objective:** Showcase all portfolio projects with detailed case studies, demonstrating real-world experience and impact.

> **Note:** Complete content, project details, and copy for this page is defined in `PROJECT-CONTENT.md` under `/projects`. Always refer to that file for exact project descriptions, URLs, highlights, and content structure.

Each project section includes: **context, responsibilities, tech stack, and impact**.

**Projects to showcase (from PROJECT-CONTENT.md):**

1. **Critical Mass Portfolio Prototype**
2. **Novaera SaaS ERP (Web, API, DB)**
3. **Precision Seas ERP System**
4. **ZETA Academia EdTech Platform (V1 & V2)**
5. **TimerChill – Modern Pomodoro Timer**
6. **Matemática Integral ERP & Automation System**
7. **Demeter IoT Agriculture System**
8. **INFOCOOP Education Platform Enhancement**
9. **Assistive Robotics for Elderly Care**

See `PROJECT-CONTENT.md` for complete project details, descriptions, URLs, and highlights.

### 3.4. `/skills` Page – Skills & Tech Stack

**Objective:** Comprehensive showcase of technical and soft skills, grouped by relevance to the Critical Mass Front-End Developer role.

> **Note:** Complete skills list, organization, and content for this page is defined in `PROJECT-CONTENT.md` under `/skills`. Always refer to that file for exact skills, categories, and content structure.

**Sections (from PROJECT-CONTENT.md):**

- **Core Front-End**
- **Front-End Tooling & Automation**
- **Back-End & APIs**
- **Databases & Data**
- **Cloud & DevOps**
- **AI, Data & Automation**
- **Testing & API Tools**
- **Productivity & Collaboration Tools**
- **Languages**
- **Soft Skills & Ways of Working**

See `PROJECT-CONTENT.md` for complete skills list and detailed breakdown.

### 3.5. `/experience` Page – Professional Experience

**Objective:** Detailed professional experience showcasing leadership, technical expertise, and impact.

> **Note:** Complete experience details, responsibilities, and content for this page is defined in `PROJECT-CONTENT.md` under `/experience`. Always refer to that file for exact job descriptions, dates, responsibilities, and content structure.

**Sections (from PROJECT-CONTENT.md):**

- **CEO & Lead Software Developer — Novaera**
- **CEO & Lead Tech Educator — ZETA Academia**
- **Freelance Software Developer**
- **Software Developer (Intern) — INFOCOOP**
- **Software Developer — TI Recursos CR**
- **Education**
- **Impact Summary**

See `PROJECT-CONTENT.md` for complete experience descriptions and details.

### 3.6. `/contact` Page – Let's Build Something Great

**Objective:** Contact information and closing message.

> **Note:** Complete contact information, social links, and closing message for this page is defined in `PROJECT-CONTENT.md` under `/contact`. Always refer to that file for exact contact details and copy.

**Sections (from PROJECT-CONTENT.md):**

- **Contact Information**
- **Online Profiles**
- **Short Closing Message**

See `PROJECT-CONTENT.md` for complete contact details and closing message.

### 3.7. `/ui-library` Page – UI Library

**Page Title:** "UI Library"

**Objective:** Make it look like a mini Storybook / design system docs.

> **Note:** Complete component showcase structure, variants, states, and documentation for this page is defined in `PROJECT-CONTENT.md` under `/ui-library`. Always refer to that file for exact component examples, variants, sizes, states, and usage notes.

**Sections (from PROJECT-CONTENT.md):**

#### Intro
- **Title:** "UI Library"
- **Text:** "A small set of reusable components used across this portfolio, documented with their intended usage and accessibility notes."

#### Component Showcases
- **Button Component Showcase** (Variants, Sizes, States, Link Buttons, Accessibility)
- **Card Component Showcase** (Variants, Images, Footer, Custom Children, Complete Cards)
- **Tag Component Showcase** (Variants, Sizes, Usage Examples)
- **Badge Component Showcase** (Status Variants, Usage Examples)
- **Input Component Showcase** (Types, Required, Error States, All States Combined)
- **Select Component Showcase** (Basic, Required, Error States, Usage Examples)
- **Toggle Component Showcase** (Basic, States, Usage Examples)
- **Loader Component Showcase** (Basic, Sizes, Without Text, Usage Examples)
- **ErrorMessage Component Showcase** (Basic, With Retry, Sizes, Without Retry, Usage Examples)
- **Toast Component Showcase** (Variants, Sizes, Positions, Auto-Dismiss, Usage Examples)

See `PROJECT-CONTENT.md` for complete component documentation and examples.


## 3.5. Component Specifications (Props & Types)

### Hero Component

```typescript
interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  ctaSecondary: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  note?: string;
  image?: {
    src: string;
    alt: string;
  };
}
```

### FeatureCard Component

```typescript
interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}
```

### SpecsSection Component

```typescript
interface SpecsSectionProps {
  title: string;
  columns: {
    title: string;
    items: string[];
  }[];
  footerNote?: string;
}
```

### UseCaseCard Component

```typescript
interface UseCaseCardProps {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}
```

### StatCard Component

```typescript
interface StatCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}
```

### TestimonialCard Component

```typescript
interface TestimonialCardProps {
  quote: string;
  author?: string;
  role?: string;
  company?: string;
}
```

### Button Component

```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  className?: string;
}
```

### Card Component

```typescript
interface CardProps {
  title?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
  };
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'feature' | 'content';
}
```

### Tag Component

```typescript
interface TagProps {
  text: string;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md';
  className?: string;
}
```

### Badge Component

```typescript
interface BadgeProps {
  text: string;
  status: 'live' | 'upcoming' | 'draft';
  className?: string;
}
```

### Input Component

```typescript
interface InputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'search' | 'password';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  ariaDescribedBy?: string;
  className?: string;
}
```

### Select Component

```typescript
interface SelectProps {
  id: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}
```

### ContentCard Component

```typescript
interface ContentCardProps {
  id: number;
  title: string;
  category: string;
  status: 'live' | 'upcoming' | 'draft';
  publishedAt: string;
  summary: string;
  tags: string[];
}
```

### ContentFilters Component

```typescript
interface ContentFiltersProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  showOnlyLive: boolean;
  onToggleLive: (show: boolean) => void;
}
```

## 3.6. Complete Copy (Ready to Use)

> **IMPORTANT:** All complete copy for the project is now defined in `PROJECT-CONTENT.md`. This section below contains legacy copy examples. **Always refer to `PROJECT-CONTENT.md` as the single source of truth for all page content, copy, and content structure.**

The following sections are kept for reference but should be considered deprecated in favor of `PROJECT-CONTENT.md`:

### Hero Section Copy

**Title (H1):**

```text
Meet Steven Morales: Your Next Front-End Experience Engine.
```

**Subtitle:**

```text
A human-first, code-driven product designed to translate beautiful designs into responsive, accessible, high-quality web experiences.
```

**Primary CTA:**

```text
View Features
```

**Secondary CTA:**

```text
See Live Content
```

**Note (small text):**

```text
No monthly subscription. Just coffee and interesting problems.
```

### Core Features Section Copy

**Section Title:**

```text
Core Features
```

**Feature 1:**

- **Title:** `Design-to-Code Translation`
- **Description:** `Converts Figma and wireframes into clean, semantic HTML/CSS and reusable React components.`

**Feature 2:**

- **Title:** `Responsive & Mobile-First Layout Engine`
- **Description:** `Optimized for all breakpoints. Designed to behave nicely on phones your stakeholders actually use.`

**Feature 3:**

- **Title:** `API Integration Module`
- **Description:** `Speaks fluent REST, JSON and HTTP. Comfortable integrating with CMSs and external web services.`

**Feature 4:**

- **Title:** `Accessibility & Performance Optimizer`
- **Description:** `Focuses on semantic structure, keyboard navigation and fast load times. Because pretty is not enough.`

---

## 3.6. Complete Copy (Ready to Use)

> **IMPORTANT:** All complete copy for the project is now defined in `PROJECT-CONTENT.md`. This section below contains legacy copy examples. **Always refer to `PROJECT-CONTENT.md` as the single source of truth for all page content, copy, and content structure.**

The following sections are kept for reference but should be considered deprecated in favor of `PROJECT-CONTENT.md`:

### Tech Specs Section Copy

**Section Title:**

```text
Tech Specs
```

**Column 1 - Supported Technologies:**

- React
- Next.js
- TypeScript
- HTML5
- CSS3
- SASS
- Git
- Jest
- RTL

**Column 2 - Protocols & Data:**

- HTTP
- JSON
- Basic XML
- REST APIs

**Column 3 - Integrations:**

- CMS-like data
- 3rd-party APIs
- Webhooks

**Footer Note:**

```text
Backwards-compatible with legacy codebases (with patience).
```

### Use Cases Section Copy

**Section Title:**

```text
Use Cases
```

**Use Case 1:**

- **Question:** `Need a pixel-perfect build from a Figma file?`
- **Answer:** `Steven FE-01 converts design tokens, grids and components into maintainable front-end architecture.`

**Use Case 2:**

- **Question:** `Need a component library your design team actually likes?`
- **Answer:** `Can build accessible, reusable components and document them clearly.`

**Use Case 3:**

- **Question:** `Need someone to debug that weird layout in Safari?`
- **Answer:** `Comfortable with cross-browser issues and digging into root causes instead of patching symptoms.`

### Performance & Reliability Section Copy

**Section Title:**

```text
Performance & Reliability
```

**Stat Card 1:**

- **Title:** `Lighthouse Focus`
- **Description:** `Focus on Lighthouse scores & perceived performance.`

**Stat Card 2:**

- **Title:** `Optimization Built-In`
- **Description:** `Works with lazy loading, image optimization and bundle awareness.`

**Stat Card 3:**

- **Title:** `Data-Driven Approach`
- **Description:** `Approach: profile, measure, then optimize – not guess.`

**Paragraph:**

```text
I approach debugging with a systematic mindset: identify the root cause, not just the symptom. When working with teams, I provide clear progress updates and realistic estimates, ensuring transparency throughout the development process. I believe in measuring performance before optimizing, using tools like Lighthouse and browser DevTools to make informed decisions.
```

### Testimonials Section Copy

**Section Title:**

```text
What Teams Say
```

**Testimonial 1:**

```text
"Working with Steven FE-01 felt like plugging a specialized module into our team – fast to understand the brief, calm under pressure, and always pushing for cleaner code."
```

**Testimonial 2 (optional):**

```text
"Delivers on time, communicates clearly, and writes code that's easy to maintain. Exactly what you want in a front-end developer."
```

**Testimonial 3 (optional):**

```text
"Brought fresh ideas to our component architecture while respecting existing patterns. Great balance of innovation and pragmatism."
```

### Pricing Section Copy

**Section Title:**

```text
Availability & Pricing
```

**Main Copy:**

```text
Available for full-time integration into your team. Salary expectations available upon request. Refunds not available, but continuous improvement is included by default.
```

### Final CTA Section Copy

**Section Title:**

```text
Ready to Explore?
```

**Button 1:**

```text
Explore Components
```

**Button 2:**

```text
View Content in Action
```

**Note:**

```text
This prototype was crafted specifically with the Critical Mass Front-End Developer role in mind.
```

### Components Page Copy

**Page Title:**

```text
UI Component Library
```

**Intro Text:**

```text
A small set of reusable components used across this prototype, documented with their intended usage and accessibility notes.
```

**Buttons Section:**

- **Title:** `Buttons`
- **Description:** `Primary, secondary, and ghost variants with full accessibility support.`

**Cards Section:**

- **Title:** `Cards`
- **Description:** `Flexible card components for features, content, and general use cases.`

**Tags & Badges Section:**

- **Title:** `Tags & Badges`
- **Description:** `Categorization and status indicators with semantic color coding.`

**Form Elements Section:**

- **Title:** `Form Elements`
- **Description:** `Accessible form controls with proper labeling and error handling.`

**Feedback States Section:**

- **Title:** `Feedback States`
- **Description:** `Loading, error, and success states for better user experience.`

### Content Page Copy

**Page Title:**

```text
Content Feed
```

**Description:**

```text
Data fetched from a JSON endpoint, filtered on the client.
```

**Filter Labels:**

- **Category:** `Category`
- **Search:** `Search content`
- **Toggle:** `Show only live`

**Empty State:**

```text
No content matches your filters yet.
```

**Error State:**

```text
Failed to load content. Please try again.
```

**Retry Button:**

```text
Retry
```

### About Page Copy

**Page Title:**

```text
About This Prototype
```

**Context Section:**

- **Title:** `Context`
- **Content:**

```text
I'm applying for the Front-End Developer position at Critical Mass. This prototype serves as a practical demonstration of my skills and approach to front-end development in an agency environment.
```

**Objective Section:**

- **Title:** `Objective`
- **Content:**

```text
This prototype demonstrates skills aligned with the Critical Mass job posting:
- Design-to-code translation with attention to detail
- Responsive, mobile-first development
- Accessibility best practices (WCAG compliance)
- Performance optimization
- API integration and data handling
- SASS preprocessing with organized architecture
- Unit testing with Jest and React Testing Library
```

**How It's Built Section:**

- **Title:** `How It's Built`
- **Content:**

```text
Built with Next.js 14 (App Router) and TypeScript for type safety. Styled with SASS using BEM methodology and SMACSS architecture principles. Includes unit tests for critical components and follows accessibility guidelines throughout. Optimized for performance with lazy loading, image optimization, and efficient component composition.
```

## 4. Visual Design and Style System

### 4.1. Color Palette

- **Primary:** #4B3FFF (vibrant blue/violet).
- **Secondary:** #00D4B5 (soft turquoise).
- **Accent:** #FFB347 (soft orange) for badges or highlights.
- **Main background:** #050818 (dark tone) or light background like #F5F7FB, choose one and stay consistent.

**Texts:**

- **Primary:** #111827 (if light background) or #F9FAFB (if dark background).
- **Secondary:** gray #6B7280.

Define all this in `_variables.scss`.

### 4.2. Typography

- **Headings:** sans-serif bold font (e.g. Inter / Poppins / system font).
- **Body:** sans-serif regular.

**In `_typography.scss`:**

- Font-size scales (`--fs-xs`, `--fs-sm`, `--fs-md`, etc.).
- Consistent line-height.

**Note:** I'll use Inter or Poppins, haven't decided yet.

### 4.3. Layout and Spacing

**In `_layout.scss`:**

- Utility classes:
  - `.container`
  - `.grid`, `.grid--2`, `.grid--3`, with media queries.

**Spacing variables:**

- `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, etc.

### 4.4. BEM + SMACSS

**Example for Hero in _hero.scss:**

```scss
.hero {
  padding: var(--space-xl) 0;
  display: grid;
  gap: var(--space-lg);

  &__content {
    max-width: 560px;
  }

  &__title {
    font-size: var(--fs-3xl);
    margin-bottom: var(--space-md);
  }

  &__subtitle {
    font-size: var(--fs-lg);
    color: var(--color-text-muted);
    margin-bottom: var(--space-lg);
  }

  &__actions {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
  }

  &__note {
    margin-top: var(--space-md);
    font-size: var(--fs-sm);
    color: var(--color-text-muted);
  }
}
```

## 5. Accessibility (Clear Plan)

### Checklist I Need to Incorporate

#### Semantic Structure

- `<header>`, `<main>`, `<section>`, `<footer>`.
- One `<h1>` per page, clear hierarchy of h2, h3.

#### Keyboard Navigation

- Proper focus states and keyboard navigation support.

#### Correct Links and Buttons

- Don't use `<div onClick>`.
- For actions → `<button>`.
- For navigation → `<a>`.

#### Visible Focus

- Specific styles for `:focus` on buttons, links, inputs.

#### Alternative Text

- All key images with meaningful alt.
- Decorative images with `alt=""` and `aria-hidden="true"` if applicable.

#### Accessible Forms

- `<label for="search">Search content</label>`
- Corresponding `id` in the input.
- For errors: `aria-describedby`, `aria-invalid`.

#### Contrast

- Make sure text vs background meets contrast (minimum 4.5:1 for normal text).

## 6. Performance (Plan)

### Concrete Measures

- Use `next/image` for images.
- Add `loading="lazy"` where I don't use `next/image`.
- Avoid unnecessary heavy libraries.
- Divide the page into small components.
- If I want, use `React.Suspense` for some deferred loaded sections (not mandatory).

**In the README, I'll add a section:**

### Performance Notes

- Lazy loading on non-critical images.
- Optimized layout and minimal re-renders via simple composition.
- Focus on small bundle by avoiding unnecessary libraries.

## 7. Testing (Minimum Viable)

- Set up Jest + React Testing Library.

### Suggested Tests

#### Hero.test.tsx

- Verify that the title "Meet Steven Morales…" renders.
- Verify that buttons with text View Features and See Live Content exist.

#### Button.test.tsx

- Render a button with given text.
- Simulate click and verify it calls the handler.

#### Content.test.tsx

- Mock fetchContent to return data.
- Render `/content` (or the main component of the view).
- Verify:
  - That it shows loading.
  - Then shows content cards.

## 8. Git & Workflow

### Flow I'll Follow

- Create repo on GitHub.

### Branches

- main → stable.
- feature/landing-page
- feature/components-page
- feature/content-api
- feature/accessibility
- chore/tests

### Descriptive Commits

- feat: add hero section layout
- feat: implement content API integration
- style: refine responsive grid on home
- test: add button component tests

This reflects good version control practices as requested in the job posting.

## 9. README – Structure I'll Use

### Content I'll Include

#### Title

"Steven Morales – Professional Portfolio Prototype"

#### Description

2–3 paragraphs explaining:

- Professional portfolio showcasing my experience as Full Stack Developer and Tech Leader
- Built specifically for the Developer, Front End position at Critical Mass in San Jose, Costa Rica
- Demonstrates real-world experience: Leading teams at Novaera and ZETA Academia, building scalable applications, empowering 1,000+ students

#### Objectives

List of objectives connected to the job posting. This is key so they see I read the posting well.

#### Tech Stack

Next.js, TypeScript, SASS, Jest, etc.

#### Pages

- `/` – Professional portfolio landing
- `/components` – UI Component Library
- `/content` – Portfolio projects and case studies
- `/about` – Portfolio context and professional background

#### How to Run

Requirements, npm install, npm run dev, npm run test.

Basic but clear.

#### Accessibility

Short list of implemented measures. I don't want it to be too long.

#### Performance

Implemented measures. Lighthouse scores if I can.

#### How this maps to the job description

Small table or bullet list connecting each job posting requirement with what I implemented:

- "Translate graphic designs…" → sections X, use of CSS Grid, etc.
- "Mobile-first, responsive…" → layout, breakpoints.
- "APIs, JSON, HTTP…" → `/api/content`, `/content`.
- "SASS, pre-processing tools…" → `styles/` with SCSS.
- "Design systems & reusable components" → `/components`.
- "Testing" → `tests/` folder.

## 10. How I'll Present It to Critical Mass

When I have it deployed on Vercel:

**In the interview or by email, I can say:**

"I've built a professional portfolio prototype to demonstrate my skills and approach for the Front-End Developer position at Critical Mass. This portfolio showcases my real-world experience leading teams at Novaera and ZETA Academia, building scalable applications that serve 1,000+ users. The code demonstrates design-to-code translation, component architecture, API integration, accessibility best practices, and performance optimization - all aligned with Critical Mass requirements. I'm excited about the opportunity to bring my full-stack expertise and leadership experience to your team in San Jose, Costa Rica."

**Send:**

- Live demo URL (stevenmorales.vercel.app)
- GitHub repo
- Link to this portfolio in application materials

---

## 11. Job Posting - Critical Mass

**Position:** Developer, Front End  
**Location:** San Jose, Costa Rica

### Role Description

We are seeking an experienced and motivated Developer, Front End to join our team. The Developer, Front End will be responsible for delivering front-end tasks, supporting web applications, and translating graphic designs into efficient, high-quality, responsive, and accessible code. This role requires both independent ownership of basic tasks and the ability to collaborate on more complex projects, seeking guidance from senior team members as needed.

### Responsibilities (You Will)

- Translate graphic designs and wireframes from tools like Figma (or similar) into standard-compliant HTML, CSS, and responsive components.
- Collaborate with Creative, Business, Technology, and QA teams to ensure the delivery of high-quality, punctual web development.
- Implement technical solutions following best practices and maintain clear documentation according to project guidelines.
- Work with a variety of front-end technologies including HTML5, CSS, JavaScript, and popular frameworks.
- Integrate web solutions with external web services (SOAP/REST), content management systems, and third-party applications (API/webhook integration).
- Implement and maintain automation and pre-processing tools (e.g., Gulp, SASS, LESS).
- Ensure cross-browser compatibility and mobile-first, performant code.
- Debug and troubleshoot issues, providing root cause analysis for both simple and complex problems.
- Analyze and optimize code for quality, efficiency, and performance; provide feedback to peers during code reviews.
- Identify and resolve performance and scalability issues, and drive efforts to reduce technical debt.
- Provide progress updates and task estimates to senior or technology leads as required.

### Requirements (You Have)

- Minimum 2+ years of experience working with front-end technologies (HTML/CSS/JavaScript).
- Excellent knowledge of modern development practices (Mobile First, MVC, Object-Oriented Development).
- Experience with cross-browser and responsive development, and general software/unit testing.
- Familiarity with design systems, reusable components, and design translation using Figma or similar tools.
- Experience with version control systems (e.g., Git/GitHub).
- Work experience integrating with APIs, external web services, and content management systems.
- Fluency with data transfer formats and protocols (JSON, XML, HTTP).
- Experience with automation and pre-processing tools (Gulp, SASS, LESS).
- Ability to build proof-of-concept prototypes and optimize code for performance.
- Exposure to full-stack development, including working with databases (SQL), designing/consuming APIs, and monitoring application performance.
- Expertise in troubleshooting, debugging, and root cause analysis.
- Resourceful, critical thinker with a curiosity mindset and strong problem-solving skills.

### Benefits (What We Offer)

- Global maternity and parental leave
- Competitive benefits packages
- Vacation, compassionate leave, wellness days, and flex days
- Access to online services for families and new parents
- 13 affinity groups
- Internal learning and development programs
- Enterprise-wide employee discounts

The Talent Team at Critical Mass is focused on ensuring we provide the best training, onboarding, and employee experience possible! Our new hires & employees are the future of our organization, and we want to set you up for long-term success. In an effort to do so, we expect our team to work from an office a minimum of 3 days a week.
