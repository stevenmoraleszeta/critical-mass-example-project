# Steven Morales – Professional Portfolio for Critical Mass

## Table of Contents

- [0. General Project Concept](#0-general-project-concept)
- [1. Project Objective (Linked to the Position)](#1-project-objective-linked-to-the-position)
- [2. General Application Architecture](#2-general-application-architecture)
  - [2.1. Pages (Next.js App Router)](#21-pages-nextjs-app-router)
  - [2.2. Folder Structure](#22-folder-structure)
- [3. Narrative Concept and Content for Each Page](#3-narrative-concept-and-content-for-each-page)
  - [3.1. Landing - "Steven Morales: Front-End Experience Engine"](#31-landing---steven-morales-front-end-experience-engine)
  - [3.2. `/components` Page – Component Library](#32-components-page--component-library)
  - [3.3. `/content` Page – CMS-like View](#33-content-page--cms-like-view)
  - [3.4. /about Page – Project Purpose](#34-about-page--project-purpose)
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

- **`/`** → Professional Portfolio Landing
  - Main page presenting my experience, skills, and professional background
  - Focus on real-world projects and achievements (Novaera, ZETA Academia, ERP systems)
  - Highlight alignment with Critical Mass requirements

- **`/projects`** → Portfolio Projects Showcase
  - Showcase of all real projects and case studies
  - Demonstrates filtering capabilities and dynamic content handling
  - All projects with categories, technologies, and highlights

- **`/components-library`** → UI Library / Design System
  - Showcase of reusable UI components demonstrating technical skills
  - Documentation of component architecture and accessibility features
  - Positioned last in navigation as technical reference

- **`/about`** → About This Portfolio
  - Professional explanation of the portfolio's purpose for Critical Mass
  - Context about my application, experience, and why I'm interested in the position

- **`/api/content`** → Internal API that returns JSON with "use cases / projects / campaigns".

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

### 3.1. Landing - "Steven Morales: Full Stack Developer & Tech Leader"

#### 3.1.1. Hero Section

**Objective:** Present my professional background and establish connection with Critical Mass.

**Elements:**

- Logo (could be stylized "SM").
- **Title (H1):**
  - "Steven Morales: Full Stack Developer & Tech Leader"
- **Subtitle:**
  - "Passionate about building robust, scalable, and meaningful innovations. Leading teams at Novaera and ZETA Academia, empowering 1,000+ students while delivering high-quality web experiences."
- **CTAs:**
- View My Work → scroll to Features/Projects section.
- Explore Components → navigate to `/components`.
- **Professional note:**
  - "Available for full-time opportunities at Critical Mass. Based in Costa Rica."
- **Visual:**
  - Professional background image or code/UI overlay representing technical expertise.
  - Background with subtle gradient.

#### 3.1.2. "Core Expertise" Section

**Title:** "Core Expertise"

Present my skills and experience based on real-world projects. 3–4 cards:

1. **Design-to-Code Translation**
   - **Subtext:** "Expert at translating Figma designs and wireframes into clean, semantic HTML/CSS and reusable React components. Proven track record across multiple production projects including ERP systems and educational platforms."

2. **Responsive & Mobile-First Development**
   - "Built responsive, mobile-first applications that work flawlessly across all devices. Experience leading teams to deliver pixel-perfect implementations serving 1,000+ users."

3. **Full-Stack Integration**
   - "Experienced with REST APIs, JSON, HTTP, and integrating with CMSs and third-party services. Built complete ERP systems with API-first architecture, PostgreSQL, MongoDB, and cloud deployment."

4. **Accessibility & Performance**
   - "WCAG-compliant implementations with semantic HTML, keyboard navigation, and optimized performance. Built accessible platforms serving 1,000+ users with excellent performance metrics."

**Each card will include:**

- Decorative icon.
- Title.
- Brief description.
- BEM class: `.feature-card`, `.feature-card__icon`, etc.

#### 3.1.3. "Tech Stack & Expertise" Section

**Title:** "Tech Stack & Expertise"

Divided into columns:

- **Front-End Technologies**
  - React, Next.js, TypeScript, HTML5, CSS3, SASS/SCSS, LESS, TailwindCSS, React Native, JavaScript (ES6+)

- **Back-End & Data**
  - Node.js, Python, PostgreSQL, MongoDB, REST & GraphQL APIs, JSON, XML, HTTP, Firebase

- **Tools & Practices**
  - Git & GitHub, Gulp & Vite, Jest & RTL, Figma Design Translation, Docker & AWS

**Professional note:**

- "Experience with full-stack development, API design, and scalable architecture."

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

#### 3.1.9. "Final CTA" Section

**Buttons:**

- Explore Component Library → `/components`
- View Portfolio Projects → `/content`

**Professional note:**

- "This portfolio prototype was crafted specifically to demonstrate my skills and approach for the Critical Mass Front-End Developer position in San Jose, Costa Rica."

### 3.2. `/components-library` Page – UI Library

**Objective:** Make it look like a mini Storybook / design system docs.

**Sections:**

#### Intro

- **Title:** "UI Library"
- **Text:** "A small set of reusable components used across this portfolio, documented with their intended usage and accessibility notes."

#### Buttons

I'll show variants:

- `.btn--primary`
- `.btn--secondary`
- `.btn--ghost`

States: normal, hover, focus, disabled. All important states for accessibility.

**For each variant I'll include:**

- Preview.
- **Notes:**
  - Recommended usage.
  - Accessibility (use of `<button>`, `aria-label` when there's only an icon).

#### Cards

- Basic Card.
- FeatureCard.
- ContentCard.

**I'll show:**

- Different layouts (with image, without image).
- Responsiveness (how it behaves on small screens).

#### Tags / Badges / Pills

- Tags for categories.
- Status badges (Live, Upcoming, Draft).

#### Form Elements

- Input (search).
- Select (filter).
- Toggle (dark mode / preference).

**I'll include:**

- Associated `<label>`.
- `aria-invalid` and `aria-describedby` as examples.

#### Feedback States

- Loader (spinner or skeleton).
- ErrorMessage.
- Toast (notification message).

### 3.3. `/projects` Page – Portfolio Projects Showcase

**Objective:** Showcase all portfolio projects with filtering capabilities, demonstrating ability to work with dynamic data and client-side filtering.

#### 3.3.1. Layout

**Top bar:**

- Title: "Portfolio Projects".
- Description: "Showcase of real-world projects demonstrating full-stack expertise. Data fetched from a JSON endpoint, filtered on the client."

**Filter row:**

- Category dropdown (ERP Systems, EdTech, SaaS, IoT, Other).
- Search input (by title / keywords / technologies).
- "Show only live" toggle.

**Content area:**

- If `loading === true` → skeletons / loader.
- If `error` → message with "Retry" button.
- If `data.length === 0` → empty state: "No content matches your filters yet."

**Card list (ContentCard):**

Each item shows:

- Title.
- Category (Tag): ERP Systems, EdTech, SaaS, IoT, Other.
- Status (Live/Upcoming/Draft) as color-coded Badge.
- Date (project completion or last update).
- Description/summary.
- Technologies used (tags/chips).
- Key highlights or achievements.
- Links to live site and GitHub (when available).

#### 3.3.2. API / Data

**In `app/api/content/route.ts`:**
GET endpoint that returns an array of objects.

**Something like:**

```typescript
// app/api/content/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const projects = [
    {
      id: 1,
      title: "Novaera SaaS ERP",
      category: "SaaS",
      status: "Live",
      publishedAt: "2024-05-01",
      summary: "Modular SaaS ERP for business management with automation, analytics, and scalable architecture. Leading a team of 6+ developers.",
      tags: ["React", "Next.js", "TypeScript", "PostgreSQL", "REST API", "AWS"],
      highlights: ["Led team of 6+ developers", "Scalable microservices", "Multi-tenant platform"],
      url: "https://novaera-saas-erp.vercel.app",
      githubUrl: "https://github.com/stevenmoraleszeta/novaera-saas-erp-web"
    },
    {
      id: 2,
      title: "ZETA Academia EdTech Platform",
      category: "EdTech",
      status: "Live",
      publishedAt: "2024-01-01",
      summary: "Founded an EdTech startup offering 30+ courses to 1,000+ students. Designed scalable and accessible learning platform.",
      tags: ["React", "Next.js", "TypeScript", "MongoDB", "Firebase", "SASS"],
      highlights: ["1,000+ active students", "30+ courses", "Led team of 4+ educators"],
      url: "https://zetaacademia.com",
      githubUrl: "https://github.com/stevenmoraleszeta/novaera-academy-web"
    },
    {
      id: 3,
      title: "Precision Seas ERP System",
      category: "ERP Systems",
      status: "Upcoming",
      publishedAt: "2025-01-01",
      summary: "Integrated ERP for industrial manufacturing company. Modules for inventory, billing, production, and analytics.",
      tags: ["React", "Next.js", "PostgreSQL", "REST API", "Docker"],
      highlights: ["Industrial manufacturing focus", "Complete inventory management"],
      url: "https://precision-seas-erp.vercel.app"
    },
    {
      id: 4,
      title: "Matemática Integral ERP",
      category: "ERP Systems",
      status: "Live",
      publishedAt: "2024-06-01",
      summary: "Custom ERP and automation platform for educational institution. Integrated resources management and academic modules.",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "SASS"],
      highlights: ["Educational institution focus", "Automation and reporting"],
      url: "https://matematica-integral.vercel.app",
      githubUrl: "https://github.com/stevenmoraleszeta/matematica-integral-web"
    },
    {
      id: 5,
      title: "Demeter IoT Agriculture System",
      category: "IoT",
      status: "Live",
      publishedAt: "2024-03-01",
      summary: "IoT solution for smart agriculture, presented in a Nestlé innovation contest. Real-time monitoring and automated actions.",
      tags: ["React", "IoT", "Microcontrollers", "Sensors"],
      highlights: ["Nestlé innovation contest", "Real-time monitoring", "Automated irrigation"],
      url: "https://demeter-prototype.vercel.app",
      githubUrl: "https://github.com/stevenmoraleszeta/demeter-prototype"
    },
    {
      id: 6,
      title: "TimerChill - Modern Pomodoro Timer",
      category: "Other",
      status: "Live",
      publishedAt: "2024-02-01",
      summary: "Modern React timer app with Pomodoro focus cycles, ambient sounds, statistics tracking, and dark/light themes.",
      tags: ["React", "TypeScript", "Vite"],
      highlights: ["Pomodoro focus cycles", "Statistics tracking", "Dark/light themes"],
      url: "https://timerchill.vercel.app",
      githubUrl: "https://github.com/stevenmoraleszeta/timer-chill-web"
    },
    {
      id: 7,
      title: "Steven Morales Portfolio Prototype",
      category: "Other",
      status: "Live",
      publishedAt: "2025-01-15",
      summary: "Professional portfolio prototype built specifically for Critical Mass Front-End Developer position. Demonstrates design-to-code translation, accessibility, and performance optimization.",
      tags: ["React", "Next.js", "TypeScript", "SASS", "BEM", "Accessibility"],
      highlights: ["Critical Mass portfolio", "WCAG compliant", "Performance optimized"],
      url: "https://stevenmorales.vercel.app",
      githubUrl: "https://github.com/stevenmoraleszeta/critical-mass-example-project"
    }
  ];

  return NextResponse.json(projects);
}
```

**In `lib/api/contentApi.ts`:**

```typescript
export async function fetchContent() {
  const res = await fetch("/api/content");
  if (!res.ok) throw new Error("Failed to fetch content");
  return res.json();
}
```

**In `hooks/useFetchContent.ts`:**

I'll handle:

- `data`
- `loading`
- `error`
- `refetch()` optional (if I have time).

### 3.4. `/about` Page – Project Purpose

**Content I'll include:**

Explain in multiple sections:

#### Context

- I'm applying for the **Developer, Front End** position at **Critical Mass** in **San Jose, Costa Rica**.
- Currently: CEO & Lead Software Developer at Novaera (6+ developers), CEO & Lead Tech Educator at ZETA Academia (1,000+ students)
- 3+ years of full-stack development experience
- Based in Costa Rica, ready to work from office 3+ days a week

#### Portfolio Objective

- Demonstrate skills aligned with the Critical Mass job posting:
  - Design-to-code translation with attention to detail
  - Responsive, mobile-first development
  - Accessibility best practices (WCAG compliance)
  - Performance optimization
  - API integration and data handling
  - SASS preprocessing with organized architecture
  - Component system development
  - Testing practices
  - Version control and collaboration

#### How It's Built

- Next.js 14 (App Router) + TypeScript + SASS/SCSS
- BEM methodology and SMACSS architecture
- Jest and React Testing Library for testing
- Accessibility and performance optimizations
- Component-based architecture

#### Real-World Experience

- Leading development teams at Novaera and ZETA Academia
- Full-stack development: Built complete ERP systems, EdTech platforms, SaaS applications
- API design and integration: REST, GraphQL, third-party services
- Database design: PostgreSQL, MongoDB, SQL
- Cloud deployment: Vercel, AWS, and other platforms
- Cross-functional collaboration: Worked with design, business, and QA teams

#### Why Critical Mass?

- Excited about the opportunity to work on meaningful projects with a forward-thinking team
- My experience aligns perfectly with Critical Mass values
- Ready to bring passion, attention to detail, and collaborative approach

This is a great place to be direct and professional with the recruiter.

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
