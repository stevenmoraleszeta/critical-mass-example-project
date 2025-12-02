# Project TODO Checklist

Complete step-by-step checklist for building the Steven Morales Professional Portfolio prototype, specifically designed for the Critical Mass Front-End Developer position in San Jose, Costa Rica.

> **Note:** All official copy and content for pages is defined in `PROJECT-CONTENT.md`. Always refer to that file for exact copy, content structure, and page specifications.

---

## Phase 1: Project Setup & Initialization

### Environment Setup

- [x] Install Node.js (v18 or higher)
- [x] Install npm or yarn package manager
- [x] Verify Git is installed and configured
- [x] Set up code editor (VS Code recommended)
- [x] Install recommended VS Code extensions (ESLint, Prettier, SCSS IntelliSense)

### Next.js Project Creation

- [x] Create Next.js 14 project with TypeScript: `npx create-next-app@latest --typescript --app`
- [x] Choose project name and initialize
- [x] Verify project structure is created correctly
- [x] Test that `npm run dev` works and shows default Next.js page

### Configuration Files

- [x] Review and configure `tsconfig.json`
- [x] Review and configure `next.config.js`
- [x] Create `.gitignore` file (if not auto-generated)
- [x] Create `.eslintrc.json` or configure ESLint
- [x] Create `.prettierrc` or configure Prettier
- [x] Set up environment variables file `.env.local` (if needed)

### Testing Setup

- [x] Install Jest: `npm install --save-dev jest @types/jest`
- [x] Install React Testing Library: `npm install --save-dev @testing-library/react @testing-library/jest-dom`
- [x] Install Jest environment for Next.js: `npm install --save-dev jest-environment-jsdom`
- [x] Create `jest.config.js` or configure Jest in `package.json`
- [x] Create `jest.setup.js` for test setup
- [x] Verify test setup works with a simple test

### SASS/SCSS Setup

- [x] Install SASS: `npm install --save-dev sass`
- [x] Verify SCSS files can be imported
- [x] Test basic SCSS compilation

### Git Repository

- [x] Initialize Git repository: `git init`
- [x] Create initial commit with project setup
- [x] Create GitHub repository (or other Git hosting)
- [x] Add remote origin
- [x] Push initial commit to remote

### Folder Structure Creation

- [x] Create `src/app/` directory structure
- [x] Create `src/components/` directory structure
  - [x] `components/layout/`
  - [x] `components/sections/`
  - [x] `components/ui/`
  - [x] `components/content/`
  - [x] `components/feedback/`
- [x] Create `src/lib/` directory structure
  - [x] `lib/api/`
  - [x] `lib/hooks/`
- [x] Create `src/styles/` directory structure
  - [x] `styles/base/`
  - [x] `styles/components/`
  - [x] `styles/pages/`
- [x] Create `src/tests/` directory
- [x] Create `public/images/` directory
- [x] Verify all folders are created correctly

---

## Phase 2: Design System & Base Styles

### SCSS Variables

- [x] Create `styles/base/_variables.scss`
- [x] Define color palette variables:
  - [x] Primary color: `#4B3FFF`
  - [x] Secondary color: `#00D4B5`
  - [x] Accent color: `#FFB347`
  - [x] Background colors (light/dark)
  - [x] Text colors (primary/secondary)
  - [x] Gray scale colors
- [x] Define spacing variables: `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`
- [x] Define breakpoint variables for responsive design
- [x] Export variables for use in components

### Typography

- [x] Create `styles/base/_typography.scss`
- [x] Choose and import font (Inter or Poppins from Google Fonts) - Using Inter with next/font/google for optimization
- [x] Define font-size scale variables: `--fs-xs`, `--fs-sm`, `--fs-md`, `--fs-lg`, `--fs-xl`, `--fs-2xl`, `--fs-3xl` (already in _variables.scss)
- [x] Define line-height variables
- [x] Define font-weight variables
- [x] Create typography utility classes (following BEM/SMACSS and mobile-first approach)
- [ ] Test typography renders correctly

### Reset & Base Styles

- [x] Create `styles/base/_reset.scss`
- [x] Add CSS reset or normalize styles (modern CSS reset following Critical Mass requirements)
- [x] Set base body styles (using variables from _variables.scss)
- [x] Set base link styles (with focus states for accessibility)
- [x] Set base button styles (reset with accessibility focus states)
- [x] Include reduced-motion support (accessibility best practice)
- [ ] Test reset styles work correctly

### Mixins

- [x] Create `styles/base/_mixins.scss`
- [x] Create responsive breakpoint mixins (mobile-first, using breakpoints from _variables.scss)
- [x] Create flexbox utility mixins (complete set: direction, justify, align, gap, etc.)
- [x] Create grid utility mixins (responsive grid, auto-fit/fill, gap utilities)
- [x] Create transition mixins (using transition variables from _variables.scss)
- [x] Create focus-visible mixin for accessibility (following Critical Mass requirements)

### Layout Utilities

- [x] Create `styles/base/_layout.scss`
- [x] Create `.container` utility class (with responsive padding and size variants)
- [x] Create grid utilities: `.grid`, `.grid--2`, `.grid--3` (following BEM methodology)
- [x] Add responsive behavior to grid utilities (mobile-first: 1 col mobile, responsive on tablet/desktop)
- [x] Create spacing utility classes (margin and padding utilities using spacing variables)
- [x] Create flexbox utility classes (following SMACSS utilities pattern)
- [x] Create additional layout utilities (display, width, height, position, overflow)
- [x] Test layout utilities work correctly

### Main SCSS File

- [x] Create `styles/main.scss`
- [x] Import `_reset.scss` (in correct order: after variables and mixins)
- [x] Import `_variables.scss` (first - used by all other files)
- [x] Import `_mixins.scss` (second - uses variables, used by other files)
- [x] Import `_typography.scss` (after reset)
- [x] Import `_layout.scss` (after typography)
- [x] Import component styles (commented out, will add later)
- [x] Import page styles (commented out, will add later)
- [x] Create `app/globals.scss` that imports `main.scss` (following PROJECT-IDEA.md)
- [x] Update `app/layout.tsx` to import `globals.scss` instead of `globals.css`
- [x] Verify all styles compile without errors (test with `npm run build`)

### BEM Methodology

- [x] Document BEM naming convention for team reference (see BEM_METHODOLOGY_GUIDE.md)
- [x] Verify BEM structure is consistent

---

## Phase 3: Core UI Components

### Button Component

- [x] Create `components/ui/Button.tsx`
- [x] Define `ButtonProps` interface (from specifications)
- [x] Implement primary variant
- [x] Implement secondary variant
- [x] Implement ghost variant
- [x] Implement size variants (sm, md, lg)
- [x] Add disabled state
- [x] Add loading state (optional)
- [x] Handle `href` prop for link buttons
- [x] Handle `onClick` prop
- [x] Add `aria-label` support
- [x] Create `styles/components/_buttons.scss`
- [x] Style all button variants with BEM
- [x] Add hover states
- [x] Add focus states (accessibility)
- [x] Add active states
- [x] Test button renders correctly
- [x] Test button is keyboard accessible
- [x] Test button works with screen reader

### Card Component

- [x] Create `components/ui/Card.tsx`
- [x] Define `CardProps` interface
- [x] Implement default variant
- [x] Implement feature variant
- [x] Implement content variant
- [x] Add image support
- [x] Add footer support
- [x] Add children support
- [x] Create `styles/components/_cards.scss`
- [x] Style all card variants
- [x] Add responsive behavior
- [x] Test card renders correctly

### Tag Component

- [x] Create `components/ui/Tag.tsx`
- [x] Define `TagProps` interface
- [x] Implement default variant
- [x] Implement primary variant
- [x] Implement secondary variant
- [x] Implement size variants
- [x] Create `styles/components/_tags.scss`
- [x] Style all tag variants
- [x] Test tag renders correctly

### Badge Component

- [x] Create `components/ui/Badge.tsx`
- [x] Define `BadgeProps` interface
- [x] Implement live status
- [x] Implement upcoming status
- [x] Implement draft status
- [x] Add color coding for each status
- [x] Style badge component
- [x] Test badge renders correctly

### Input Component

- [x] Create `components/ui/Input.tsx`
- [x] Define `InputProps` interface
- [x] Implement text input
- [x] Implement email input
- [x] Implement search input
- [x] Implement password input
- [x] Add label association (`<label for="id">`)
- [x] Add error state handling
- [x] Add `aria-describedby` for errors
- [x] Add `aria-invalid` for validation
- [x] Add required indicator
- [x] Create `styles/components/_forms.scss`
- [x] Style input component
- [x] Add focus states
- [x] Add error states
- [x] Test input is accessible
- [x] Test input works with screen reader

### Select Component

- [x] Create `components/ui/Select.tsx`
- [x] Define `SelectProps` interface
- [x] Implement dropdown functionality
- [x] Add label association
- [x] Add options rendering
- [x] Style select component
- [x] Add focus states
- [x] Test select is accessible

### Toggle Component

- [x] Create `components/ui/Toggle.tsx`
- [x] Define `ToggleProps` interface
- [x] Implement toggle functionality
- [x] Add label association
- [x] Add checked/unchecked states
- [x] Style toggle component
- [x] Add focus states
- [x] Test toggle is accessible

### Loader Component

- [x] Create `components/feedback/Loader.tsx`
- [x] Implement spinner loader
- [x] Implement skeleton loader (optional)
- [x] Add loading text support
- [x] Style loader component
- [x] Test loader renders correctly

### ErrorMessage Component

- [x] Create `components/feedback/ErrorMessage.tsx`
- [x] Define error message props
- [x] Implement error display
- [x] Add retry button support
- [x] Style error component
- [x] Test error component renders correctly

### Toast Component (Optional)

- [x] Create `components/feedback/Toast.tsx`
- [x] Implement toast notification
- [x] Add auto-dismiss functionality
- [x] Add manual dismiss
- [x] Style toast component
- [x] Test toast works correctly

### Component Testing

- [x] Test all components render without errors
- [x] Test all components are responsive
- [x] Verify all components follow BEM naming
- [x] Verify all interactive components are keyboard accessible

---

## Phase 4: Layout Components

### Header Component

- [x] Create `components/layout/Header.tsx`
- [x] Add logo (stylized "SM" or placeholder)
- [x] Add navigation structure
- [x] Style header component
- [x] Make header responsive
- [x] Test header renders correctly

### NavBar Component

- [X] Create `components/layout/NavBar.tsx`
- [X] Add navigation links (/, /components, /content, /about)
- [X] Add active state indication
- [X] Make navigation keyboard accessible
- [X] Style navbar component
- [X] Make navbar responsive (mobile menu if needed)
- [X] Test navigation works correctly

### Footer Component

- [X] Create `components/layout/Footer.tsx`
- [X] Add footer content
- [X] Add links (if any)
- [X] Style footer component
- [X] Make footer responsive
- [X] Test footer renders correctly

### MainLayout Component

- [x] Create `components/layout/MainLayout.tsx`
- [x] Wrap content with semantic HTML (`<header>`, `<main>`, `<footer>`)
- [x] Include Header component
- [x] Include NavBar component
- [x] Include Footer component
- [x] Create `styles/components/_navbar.scss`
- [x] Test layout structure is semantic
- [x] Test layout is responsive

---

## Phase 5: Landing Page Sections

### Hero Section

- [x] Create `components/sections/Hero.tsx`
- [x] Define `HeroProps` interface (from specifications)
- [x] Add title (H1): "Meet Steven Morales: Your Next Front-End Experience Engine."
- [x] Add subtitle
- [x] Add primary CTA button: "View Features"
- [x] Add secondary CTA button: "See Live Content"
- [x] Add note: "No monthly subscription. Just coffee and interesting problems."
- [x] Add image/visual element (placeholder or actual)
- [x] Create `styles/components/_hero.scss`
- [x] Style hero section with BEM
- [x] Add background gradient
- [x] Make hero responsive
- [x] Center hero content on all breakpoints (mobile-first, centered layout)
- [x] Implement smooth scroll to Features section (for primary CTA)
- [x] Test hero section renders correctly
- [x] Test CTAs work correctly

### Features Section

- [x] Create `components/sections/Features.tsx`
- [x] Create `components/ui/FeatureCard.tsx`
- [x] Define `FeatureCardProps` interface
- [x] Add section title: "Core Features"
- [x] Add Feature 1: "Design-to-Code Translation"
- [x] Add Feature 2: "Responsive & Mobile-First Layout Engine"
- [x] Add Feature 3: "API Integration Module"
- [x] Add Feature 4: "Accessibility & Performance Optimizer"
- [x] Add icons to each feature card (SVG or icon component)
- [x] Style features section
- [x] Style feature cards with BEM
- [x] Make features section responsive (grid layout)
- [x] Test features section renders correctly

### Specs Section

- [x] Create `components/sections/Specs.tsx`
- [x] Define `SpecsSectionProps` interface
- [x] Add section title: "Tech Specs"
- [x] Create column layout
- [x] Add Column 1: Supported Technologies (React, Next.js, TypeScript, etc.)
- [x] Add Column 2: Protocols & Data (HTTP, JSON, XML, REST APIs)
- [x] Add Column 3: Integrations (CMS-like data, 3rd-party APIs, Webhooks)
- [x] Add footer note: "Backwards-compatible with legacy codebases (with patience)."
- [x] Style specs section
- [x] Make specs section responsive
- [x] Test specs section renders correctly

### Use Cases Section

- [x] Create `components/sections/UseCases.tsx`
- [x] Create `components/ui/UseCaseCard.tsx`
- [x] Define `UseCaseCardProps` interface
- [x] Add section title: "Use Cases"
- [x] Add Use Case 1: "Need a pixel-perfect build from a Figma file?"
- [x] Add Use Case 2: "Need a component library your design team actually likes?"
- [x] Add Use Case 3: "Need someone to debug that weird layout in Safari?"
- [x] Style use cases section
- [x] Style use case cards
- [x] Make use cases section responsive
- [x] Test use cases section renders correctly

### Performance Section

- [x] Create `components/sections/PerformanceSection.tsx`
- [x] Create `components/ui/StatCard.tsx`
- [x] Define `StatCardProps` interface
- [x] Add section title: "Performance & Reliability"
- [x] Add Stat Card 1: "Lighthouse Focus"
- [x] Add Stat Card 2: "Optimization Built-In"
- [x] Add Stat Card 3: "Data-Driven Approach"
- [x] Add performance paragraph (from copy section)
- [x] Style performance section
- [x] Style stat cards
- [x] Make performance section responsive
- [x] Test performance section renders correctly

### Testimonials Section

- [x] Create `components/sections/Testimonials.tsx`
- [x] Create `components/ui/TestimonialCard.tsx`
- [x] Define `TestimonialCardProps` interface
- [x] Add section title: "What Teams Say"
- [x] Add Testimonial 1 (from copy section)
- [x] Add Testimonial 2 (optional)
- [x] Add Testimonial 3 (optional)
- [x] Style testimonials section
- [x] Style testimonial cards
- [x] Make testimonials section responsive
- [x] Test testimonials section renders correctly

### Pricing Section

- [x] Create `components/sections/PricingSection.tsx`
- [x] Add section title: "Availability & Pricing"
- [x] Add pricing copy (from copy section)
- [x] Style pricing section
- [x] Make pricing section responsive
- [x] Test pricing section renders correctly

### Final CTA Section

- [x] Create `components/sections/CTASection.tsx`
- [x] Add section title: "Ready to Explore?"
- [x] Add Button 1: "Explore Components" → `/components`
- [x] Add Button 2: "View Content in Action" → `/content`
- [x] Add note: "This prototype was crafted specifically with the Critical Mass Front-End Developer role in mind."
- [x] Style CTA section
- [x] Make CTA section responsive
- [x] Test CTA section renders correctly
- [x] Test buttons navigate correctly

### Landing Page Assembly

- [x] Create `app/page.tsx` (or update existing)
- [x] Import all section components
- [x] Assemble landing page with all sections in order
- [x] Wrap with MainLayout
- [x] Create `styles/pages/_home.scss`
- [x] Add page-specific styles
- [x] Test full landing page renders correctly
- [x] Test all sections are visible
- [x] Test all links and buttons work
- [x] Test page is responsive on mobile/tablet/desktop

---

## Phase 6: Content & Structure Reorganization

> **Objective:** Reorganize all existing pages, sections, and content to align with the new planning and content defined in `PROJECT-CONTENT.md`. This phase involves updating existing content, creating missing pages, removing obsolete sections, and ensuring all content matches the official copy.

> **Reference:** Always use `PROJECT-CONTENT.md` as the single source of truth for all page content, copy, and structure.

### Phase 6.1: Home Page (`/`) Reorganization

#### Current State Analysis
- [x] Review current Home page structure (`src/app/page.tsx`)
- [x] Identify existing sections: Hero, Features, UseCases, FeaturedProjects, LeadershipSection, PerformanceSection, PricingSection, CTASection
- [x] Document current content and structure
- [x] Compare with target structure from `PROJECT-CONTENT.md`

#### Target Structure (from PROJECT-CONTENT.md)
- [x] Hero section (with new copy)
- [ ] Role Focus: Developer, Front End @ Critical Mass section
- [ ] Key Highlights – What I Bring to Critical Mass section
- [ ] Primary Call To Action section

#### Hero Section Update
- [x] Update Hero component (`src/components/sections/Hero.tsx`) with new copy from `PROJECT-CONTENT.md`:
  - [x] Update headline: "Front-End Experience Engine for Critical Mass."
  - [x] Update subheadline with new copy
  - [x] Add Key Identity Line: "Full Stack Software Engineer | Tech Leader | Product-Driven Developer | Creative Technologist"
  - [x] Add Short Value Intro paragraph
  - [x] Update CTAs to match PROJECT-CONTENT.md (Primary: "Want to see how I would work at Critical Mass?" → `/critical-mass-case-study`, Secondary: View Projects → `/projects`)
- [x] Update Hero props interface if needed
- [x] Update `src/app/page.tsx` to pass new Hero props
- [ ] Test Hero renders correctly with new content

#### Role Focus Section Creation
- [x] Create new section component `src/components/sections/RoleFocusSection.tsx`
- [x] Implement section with 6 items from `PROJECT-CONTENT.md`:
  - [x] Design Translation
  - [x] Responsive & Accessible
  - [x] API Integration
  - [x] Tooling
  - [x] Collaboration
  - [x] Ownership
- [x] Add icons for each item (decorative, accessible)
- [x] Style with BEM methodology
- [x] Make responsive (mobile-first)
- [x] Add to `src/app/page.tsx`
- [x] Create `styles/components/_role-focus-section.scss`
- [ ] Test section renders correctly

#### Key Highlights Section Creation
- [x] Create new section component `src/components/sections/KeyHighlightsSection.tsx`
- [x] Implement section with 6 highlights from `PROJECT-CONTENT.md`:
  - [x] Front-End Expertise
  - [x] Product Mindset
  - [x] Performance & Quality
  - [x] Leadership & Mentorship
  - [x] Education & Impact
  - [x] Problem Solver
- [x] Style with BEM methodology
- [x] Make responsive (mobile-first)
- [x] Add to `src/app/page.tsx`
- [x] Create `styles/components/_key-highlights-section.scss`
- [ ] Test section renders correctly

#### Primary CTA Section Update
- [x] Update CTASection component (`src/components/sections/CTASection.tsx`) with new copy from `PROJECT-CONTENT.md`:
  - [x] Update title/heading: "Want to see how I would work at Critical Mass?"
  - [x] Update description: "Start with the 'Critical Mass Case Study' page – it's a focused breakdown of how I match this role, backed by real code and projects."
  - [x] Update buttons: Primary → `/critical-mass-case-study`, Secondary → `/projects`
- [x] Update styles if needed
- [ ] Test CTA section renders correctly

#### Remove/Archive Obsolete Sections
- [x] Remove or archive `UseCases` section (not in new structure)
- [x] Remove or archive `FeaturedProjects` section (moved to `/projects` page)
- [x] Remove or archive `LeadershipSection` (content reorganized)
- [x] Remove or archive `PerformanceSection` (content reorganized)
- [x] Remove or archive `PricingSection` (not in new structure)
- [x] Remove or archive `Features` section (not in new structure, replaced by Key Highlights)
- [x] Update `src/app/page.tsx` to remove obsolete section imports
- [ ] Clean up unused section files or archive them
- [ ] Update imports in `main.scss` if needed

#### Home Page Final Assembly
- [ ] Update `src/app/page.tsx` with new section order:
  - [ ] Hero
  - [ ] Role Focus Section
  - [ ] Key Highlights Section
  - [ ] Primary CTA Section
- [ ] Remove all obsolete section imports
- [ ] Update `styles/pages/_home.scss` for new structure
- [ ] Test full Home page renders correctly
- [ ] Test all sections are visible and in correct order
- [ ] Test all links and buttons work
- [ ] Test page is responsive on mobile/tablet/desktop
- [ ] Verify content matches `PROJECT-CONTENT.md` exactly

### Phase 6.2: Critical Mass Case Study Page (`/critical-mass-case-study`) Creation

#### Page Setup
- [ ] Create `app/critical-mass-case-study/page.tsx`
- [ ] Add page title: "CM Front-End Experience Engine"
- [ ] Wrap with MainLayout
- [ ] Add semantic HTML structure (`<main>`, `<section>`)

#### Content Sections (from PROJECT-CONTENT.md)
- [ ] Create Section 1 – Project Overview
  - [ ] Add project description from `PROJECT-CONTENT.md`
  - [ ] Add goals list (4 goals)
- [ ] Create Section 2 – How This Portfolio Is Built for Critical Mass
  - [ ] Add Figma to Front-End content
  - [ ] Add Design Systems content
  - [ ] Add Mobile First content
  - [ ] Add Cross-Browser content
- [ ] Create Section 3 – Design-to-Code Workflow
  - [ ] Add workflow steps (8 steps from `PROJECT-CONTENT.md`)
- [ ] Create Section 4 – Accessibility, Performance & Responsiveness
  - [ ] Add Accessibility subsection (3 bullet points)
  - [ ] Add Performance subsection (3 bullet points)
  - [ ] Add Responsiveness subsection (3 bullet points)
- [ ] Create Section 5 – Tooling, Testing & Automation
  - [ ] Add Preprocessors content
  - [ ] Add Tooling content
  - [ ] Add Testing content
  - [ ] Add CI/CD content
- [ ] Create Section 6 – What You Can Review
  - [ ] Add Live demo link
  - [ ] Add GitHub repository links
  - [ ] Add Other case studies link to `/projects`

#### Styling
- [ ] Create `styles/pages/_critical-mass-case-study.scss`
- [ ] Style case study page with BEM methodology
- [ ] Make page responsive (mobile-first)
- [ ] Add proper spacing and typography
- [ ] Test page renders correctly
- [ ] Verify all content matches `PROJECT-CONTENT.md`

### Phase 6.3: Projects Page (`/projects`) Content Update

#### Current State Analysis
- [ ] Review current Projects page (`src/app/projects/page.tsx`)
- [ ] Compare current project data with `PROJECT-CONTENT.md`
- [ ] Identify missing projects
- [ ] Identify projects that need content updates

#### Content Updates (from PROJECT-CONTENT.md)
- [ ] Update/Create Project: Steven Morales FE-01 – Front-End Experience Engine
  - [ ] Add project type, status, live URL, repo URL
  - [ ] Add "What it is" description from `PROJECT-CONTENT.md`
  - [ ] Add highlights list (4 items)
- [ ] Update/Create Project: Novaera SaaS ERP (Web, API, DB)
  - [ ] Add project details (type, status, URLs)
  - [ ] Add "What it is" description
  - [ ] Add "My role" description
- [ ] Update/Create Project: Precision Seas ERP System
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add "My role" description
- [ ] Update/Create Project: ZETA Academia EdTech Platform (V1 & V2)
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add "My role" description
- [ ] Update/Create Project: TimerChill – Modern Pomodoro Timer
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add tech stack
- [ ] Update/Create Project: Matemática Integral ERP & Automation System
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add "My role" description
- [ ] Update/Create Project: Demeter IoT Agriculture System
  - [ ] Add project details
  - [ ] Add "What it is" description
- [ ] Update/Create Project: INFOCOOP Education Platform Enhancement
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add "My role" description
- [ ] Update/Create Project: Assistive Robotics for Elderly Care
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add "My role" description

#### Page Structure Update
- [ ] Update page title: "Selected Projects & Case Studies"
- [ ] Add page description/intro if needed
- [ ] Ensure all 9 projects are displayed
- [ ] Verify project order matches `PROJECT-CONTENT.md`
- [ ] Test all project links work correctly

#### Styling Updates
- [ ] Update `styles/pages/_projects.scss` if needed
- [ ] Ensure page is responsive
- [ ] Test projects page renders correctly
- [ ] Verify all content matches `PROJECT-CONTENT.md`

### Phase 6.4: Skills Page (`/skills`) Content Update

#### Current State Analysis
- [ ] Review current Skills page (`src/app/skills/page.tsx`)
- [ ] Compare current skills structure with `PROJECT-CONTENT.md`
- [ ] Identify missing skill categories
- [ ] Identify skills that need updates

#### Content Updates (from PROJECT-CONTENT.md)
- [ ] Update Core Front-End section
  - [ ] Add Languages subsection (HTML5, CSS3, JavaScript, TypeScript)
  - [ ] Add Frameworks & Libraries subsection (React, React Native, Next.js)
  - [ ] Add Styling & Design Systems subsection (Tailwind CSS, Styled Components, SASS/SCSS, LESS)
  - [ ] Add Core Practices subsection (Mobile-First Development, Responsive Design, Design Systems, Accessibility)
- [ ] Update Front-End Tooling & Automation section
  - [ ] Add all tools from `PROJECT-CONTENT.md`
- [ ] Update Back-End & APIs section
  - [ ] Add Languages & Runtimes subsection (Node.js, Python, Java, C#, PHP)
  - [ ] Add Architectural Practices subsection (RESTful APIs, Microservices, Performance optimization, Scalability)
- [ ] Update Databases & Data section
  - [ ] Add all databases from `PROJECT-CONTENT.md`
- [ ] Update Cloud & DevOps section
  - [ ] Add all tools from `PROJECT-CONTENT.md`
- [ ] Update AI, Data & Automation section
  - [ ] Add all tools from `PROJECT-CONTENT.md`
- [ ] Update Testing & API Tools section
  - [ ] Add all tools from `PROJECT-CONTENT.md`
- [ ] Update Productivity & Collaboration Tools section
  - [ ] Add all tools from `PROJECT-CONTENT.md`
- [ ] Update Languages section
  - [ ] Add Spanish (Native)
  - [ ] Add English (Professional Working Proficiency)
- [ ] Update Soft Skills & Ways of Working section
  - [ ] Add all soft skills from `PROJECT-CONTENT.md`

#### Page Structure Update
- [ ] Update page title: "Skills & Tech Stack"
- [ ] Ensure all sections are properly organized
- [ ] Verify content matches `PROJECT-CONTENT.md` exactly

#### Styling Updates
- [ ] Update `styles/pages/_skills.scss` if needed
- [ ] Ensure page is responsive
- [ ] Test skills page renders correctly

### Phase 6.5: Experience Page (`/experience`) Creation

#### Page Setup
- [ ] Create `app/experience/page.tsx`
- [ ] Add page title: "Professional Experience"
- [ ] Wrap with MainLayout
- [ ] Add semantic HTML structure

#### Experience Sections (from PROJECT-CONTENT.md)
- [ ] Create CEO & Lead Software Developer — Novaera section
  - [ ] Add date range: May 2024 – Present
  - [ ] Add responsibilities list (5 items from `PROJECT-CONTENT.md`)
- [ ] Create CEO & Lead Tech Educator — ZETA Academia section
  - [ ] Add responsibilities list (from `PROJECT-CONTENT.md`)
- [ ] Create Freelance Software Developer section
  - [ ] Add date range: Aug 2022 – Present
  - [ ] Add responsibilities list (3 items)
- [ ] Create Software Developer (Intern) — INFOCOOP section
  - [ ] Add date range: Aug 2023 – Nov 2023
  - [ ] Add responsibilities list (3 items)
- [ ] Create Software Developer — TI Recursos CR section
  - [ ] Add date range: Dec 2022 – Feb 2023
  - [ ] Add responsibilities list (2 items)
- [ ] Create Education section
  - [ ] Add Technical Degree information
  - [ ] Add graduation details
- [ ] Create Impact Summary section
  - [ ] Add Leadership subsection
  - [ ] Add Ownership subsection
  - [ ] Add Collaboration subsection

#### Styling
- [ ] Create `styles/pages/_experience.scss`
- [ ] Style experience page with BEM methodology
- [ ] Make page responsive (mobile-first)
- [ ] Test page renders correctly
- [ ] Verify all content matches `PROJECT-CONTENT.md`

### Phase 6.6: Contact Page (`/contact`) Creation

#### Page Setup
- [ ] Create `app/contact/page.tsx`
- [ ] Add page title: "Let's Build Something Great"
- [ ] Wrap with MainLayout
- [ ] Add semantic HTML structure

#### Contact Sections (from PROJECT-CONTENT.md)
- [ ] Create Contact Information section
  - [ ] Add Name: Steven Morales Fallas
  - [ ] Add Location: San José, Costa Rica
  - [ ] Add Phone / WhatsApp: +506 6130 4830 (with link)
  - [ ] Add Email: fallasmoraless@gmail.com (with mailto link)
- [ ] Create Online Profiles section
  - [ ] Add GitHub link (github.com/stevenmoraleszeta)
  - [ ] Add LinkedIn link (linkedin.com/in/stevenmoralesfallas)
  - [ ] Add Instagram link (@stevenmorales.novaera)
- [ ] Create Short Closing Message section
  - [ ] Add closing message content from `PROJECT-CONTENT.md`
  - [ ] Add quote: "We don't need to wait a single moment to start changing the world." – Anne Frank

#### Styling
- [ ] Create `styles/pages/_contact.scss`
- [ ] Style contact page with BEM methodology
- [ ] Make page responsive (mobile-first)
- [ ] Test page renders correctly
- [ ] Verify all content matches `PROJECT-CONTENT.md`

### Phase 6.7: UI Library Page (`/ui-library`) Content Verification

#### Content Verification
- [ ] Review current UI Library page (`src/app/ui-library/page.tsx`)
- [ ] Compare with `PROJECT-CONTENT.md` under `/ui-library`
- [ ] Verify all component showcases are present:
  - [ ] Button Component Showcase (all variants, sizes, states, link buttons, accessibility)
  - [ ] Card Component Showcase (all variants, images, footer, custom children, complete cards)
  - [ ] Tag Component Showcase (variants, sizes, usage examples)
  - [ ] Badge Component Showcase (status variants, usage examples)
  - [ ] Input Component Showcase (types, required, error states, all states combined)
  - [ ] Select Component Showcase (basic, required, error states, usage examples)
  - [ ] Toggle Component Showcase (basic, states, usage examples)
  - [ ] Loader Component Showcase (basic, sizes, without text, usage examples)
  - [ ] ErrorMessage Component Showcase (basic, with retry, sizes, without retry, usage examples)
  - [ ] Toast Component Showcase (variants, sizes, positions, auto-dismiss, usage examples)
- [ ] Verify intro text matches `PROJECT-CONTENT.md`
- [ ] Update any missing component examples
- [ ] Ensure all content matches `PROJECT-CONTENT.md` exactly

### Phase 6.8: Navigation & Routing Updates

#### Navigation Bar Update
- [ ] Review current NavBar (`src/components/layout/NavBar.tsx`)
- [ ] Update navigation links to match new structure:
  - [ ] `/` → Home
  - [ ] `/critical-mass-case-study` → Critical Mass Case Study
  - [ ] `/projects` → Projects
  - [ ] `/skills` → Skills
  - [ ] `/experience` → Experience
  - [ ] `/contact` → Contact
  - [ ] `/ui-library` → UI Library
- [ ] Remove any obsolete navigation links
- [ ] Update aria-labels if needed
- [ ] Test navigation works correctly
- [ ] Test active state indication works

#### Footer Update (if needed)
- [ ] Review Footer component
- [ ] Update links if needed
- [ ] Ensure consistency with new page structure

### Phase 6.9: About Page Removal or Archive

#### Decision & Action
- [ ] Review current About page (`src/app/about/page.tsx`)
- [ ] Determine if About page should be:
  - [ ] Removed (content moved to Critical Mass Case Study page)
  - [ ] Archived for reference
  - [ ] Kept but updated
- [ ] If removing: Delete `src/app/about/page.tsx` and related styles
- [ ] If archiving: Move to archive folder
- [ ] Update navigation to remove About link if removed
- [ ] Update any internal links that point to `/about`

### Phase 6.10: Style Files Reorganization

#### Page Style Files
- [ ] Create/Update `styles/pages/_home.scss` for new Home structure
- [ ] Create `styles/pages/_critical-mass-case-study.scss`
- [ ] Update `styles/pages/_projects.scss` if needed
- [ ] Update `styles/pages/_skills.scss` if needed
- [ ] Create `styles/pages/_experience.scss`
- [ ] Create `styles/pages/_contact.scss`
- [ ] Update `styles/pages/_ui-library.scss` if needed (rename from `_components.scss` if applicable)
- [ ] Remove/archive obsolete page style files
- [ ] Update `styles/main.scss` to import all new/updated page styles

#### Component Style Files
- [ ] Create `styles/components/_role-focus-section.scss`
- [ ] Create `styles/components/_key-highlights-section.scss`
- [ ] Update `styles/components/_hero.scss` if needed
- [ ] Update `styles/components/_cta-section.scss` if needed
- [ ] Archive/remove obsolete component style files
- [ ] Update `styles/main.scss` to import all new/updated component styles

### Phase 6.11: Content Verification & Quality Check

#### Content Accuracy Check
- [ ] Verify Home page content matches `PROJECT-CONTENT.md` exactly
- [ ] Verify Critical Mass Case Study page content matches `PROJECT-CONTENT.md` exactly
- [ ] Verify Projects page content matches `PROJECT-CONTENT.md` exactly
- [ ] Verify Skills page content matches `PROJECT-CONTENT.md` exactly
- [ ] Verify Experience page content matches `PROJECT-CONTENT.md` exactly
- [ ] Verify Contact page content matches `PROJECT-CONTENT.md` exactly
- [ ] Verify UI Library page content matches `PROJECT-CONTENT.md` exactly

#### Copy Consistency Check
- [ ] Check all copy uses exact text from `PROJECT-CONTENT.md`
- [ ] Verify no placeholder text remains
- [ ] Check for typos and grammar errors
- [ ] Ensure tone is consistent across all pages
- [ ] Verify all links and URLs are correct

#### Structure Verification
- [ ] Verify all pages follow semantic HTML structure
- [ ] Verify all pages use MainLayout
- [ ] Verify heading hierarchy is correct (one `<h1>` per page)
- [ ] Verify all sections are properly structured
- [ ] Check for broken links or missing pages

### Phase 6.12: Testing After Reorganization

#### Functional Testing
- [ ] Test all pages render without errors
- [ ] Test all navigation links work correctly
- [ ] Test all internal links work correctly
- [ ] Test all external links work correctly
- [ ] Test all buttons have proper actions
- [ ] Test responsive design on all pages
- [ ] Test mobile menu works correctly

#### Content Testing
- [ ] Verify all content is visible and readable
- [ ] Verify all images load correctly
- [ ] Verify all sections display correctly
- [ ] Test on different screen sizes
- [ ] Test on different browsers

#### Accessibility Testing
- [ ] Verify semantic HTML is correct
- [ ] Verify ARIA attributes are correct
- [ ] Test keyboard navigation
- [ ] Test screen reader compatibility
- [ ] Verify focus states are visible

---

## Phase 7: Critical Mass Case Study Page (`/critical-mass-case-study`)

> **Note:** This page creation is covered in **Phase 6.2: Critical Mass Case Study Page Creation**. The tasks below are for reference and verification. If the page was already created in Phase 6, use this phase for final refinement and polish.

### Page Verification

- [ ] Verify `app/critical-mass-case-study/page.tsx` exists
- [ ] Verify page title: "CM Front-End Experience Engine"
- [ ] Verify MainLayout wrapper is present
- [ ] Verify semantic HTML structure

### Content Verification

- [ ] Verify Section 1 – Project Overview is complete
- [ ] Verify Section 2 – How This Portfolio Is Built for Critical Mass is complete
- [ ] Verify Section 3 – Design-to-Code Workflow is complete
- [ ] Verify Section 4 – Accessibility, Performance & Responsiveness is complete
- [ ] Verify Section 5 – Tooling, Testing & Automation is complete
- [ ] Verify Section 6 – What You Can Review is complete
- [ ] Verify all content matches `PROJECT-CONTENT.md` exactly

### Styling Verification

- [ ] Verify `styles/pages/_critical-mass-case-study.scss` exists
- [ ] Verify page is styled correctly
- [ ] Verify page is responsive
- [ ] Test page renders correctly
- [ ] Polish and refine styling if needed

---

## Phase 8: Projects Page (`/projects`)

> **Note:** Content updates for this page are covered in **Phase 6.3: Projects Page Content Update**. The tasks below are for reference and verification. If the page was already updated in Phase 6, use this phase for final refinement and polish.

### Page Verification

- [ ] Verify `app/projects/page.tsx` exists
- [ ] Verify page title: "Selected Projects & Case Studies"
- [ ] Verify MainLayout wrapper is present

### Project Sections

- [ ] Create Project: Steven Morales FE-01 – Front-End Experience Engine
  - [ ] Add project type, status, live URL, repo URL
  - [ ] Add "What it is" description
  - [ ] Add highlights list
- [ ] Create Project: Novaera SaaS ERP (Web, API, DB)
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add "My role" description
- [ ] Create Project: Precision Seas ERP System
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add "My role" description
- [ ] Create Project: ZETA Academia EdTech Platform (V1 & V2)
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add "My role" description
- [ ] Create Project: TimerChill – Modern Pomodoro Timer
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add tech stack
- [ ] Create Project: Matemática Integral ERP & Automation System
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add "My role" description
- [ ] Create Project: Demeter IoT Agriculture System
  - [ ] Add project details
  - [ ] Add "What it is" description
- [ ] Create Project: INFOCOOP Education Platform Enhancement
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add "My role" description
- [ ] Create Project: Assistive Robotics for Elderly Care
  - [ ] Add project details
  - [ ] Add "What it is" description
  - [ ] Add "My role" description

### Styling

- [ ] Create `styles/pages/_projects.scss`
- [ ] Style projects page
- [ ] Make page responsive
- [ ] Test projects page renders correctly

---

## Phase 9: Skills Page (`/skills`)

> **Note:** Content updates for this page are covered in **Phase 6.4: Skills Page Content Update**. The tasks below are for reference and verification. If the page was already updated in Phase 6, use this phase for final refinement and polish.

### Page Verification

- [ ] Verify `app/skills/page.tsx` exists
- [ ] Verify page title: "Skills & Tech Stack"
- [ ] Verify MainLayout wrapper is present

### Skills Sections

- [ ] Create Core Front-End section
  - [ ] Add Languages subsection
  - [ ] Add Frameworks & Libraries subsection
  - [ ] Add Styling & Design Systems subsection
  - [ ] Add Core Practices subsection
- [ ] Create Front-End Tooling & Automation section
- [ ] Create Back-End & APIs section
  - [ ] Add Languages & Runtimes subsection
  - [ ] Add Architectural Practices subsection
- [ ] Create Databases & Data section
- [ ] Create Cloud & DevOps section
- [ ] Create AI, Data & Automation section
- [ ] Create Testing & API Tools section
- [ ] Create Productivity & Collaboration Tools section
- [ ] Create Languages section
- [ ] Create Soft Skills & Ways of Working section

### Styling

- [ ] Create `styles/pages/_skills.scss`
- [ ] Style skills page
- [ ] Make page responsive
- [ ] Test skills page renders correctly

---

## Phase 10: Experience Page (`/experience`)

> **Note:** This page creation is covered in **Phase 6.5: Experience Page Creation**. The tasks below are for reference and verification. If the page was already created in Phase 6, use this phase for final refinement and polish.

### Page Verification

- [ ] Verify `app/experience/page.tsx` exists
- [ ] Verify page title: "Professional Experience"
- [ ] Verify MainLayout wrapper is present

### Experience Sections

- [ ] Create CEO & Lead Software Developer — Novaera section
  - [ ] Add date range: May 2024 – Present
  - [ ] Add responsibilities list
- [ ] Create CEO & Lead Tech Educator — ZETA Academia section
  - [ ] Add responsibilities list
- [ ] Create Freelance Software Developer section
  - [ ] Add date range: Aug 2022 – Present
  - [ ] Add responsibilities list
- [ ] Create Software Developer (Intern) — INFOCOOP section
  - [ ] Add date range: Aug 2023 – Nov 2023
  - [ ] Add responsibilities list
- [ ] Create Software Developer — TI Recursos CR section
  - [ ] Add date range: Dec 2022 – Feb 2023
  - [ ] Add responsibilities list
- [ ] Create Education section
  - [ ] Add Technical Degree information
  - [ ] Add graduation details
- [ ] Create Impact Summary section
  - [ ] Add Leadership subsection
  - [ ] Add Ownership subsection
  - [ ] Add Collaboration subsection

### Styling

- [ ] Create `styles/pages/_experience.scss`
- [ ] Style experience page
- [ ] Make page responsive
- [ ] Test experience page renders correctly

---

## Phase 11: Contact Page (`/contact`)

> **Note:** This page creation is covered in **Phase 6.6: Contact Page Creation**. The tasks below are for reference and verification. If the page was already created in Phase 6, use this phase for final refinement and polish.

### Page Verification

- [ ] Verify `app/contact/page.tsx` exists
- [ ] Verify page title: "Let's Build Something Great"
- [ ] Verify MainLayout wrapper is present

### Contact Sections

- [ ] Create Contact Information section
  - [ ] Add Name
  - [ ] Add Location
  - [ ] Add Phone / WhatsApp
  - [ ] Add Email
- [ ] Create Online Profiles section
  - [ ] Add GitHub link
  - [ ] Add LinkedIn link
  - [ ] Add Instagram link
- [ ] Create Short Closing Message section
  - [ ] Add closing message content
  - [ ] Add quote (optional)

### Styling

- [ ] Create `styles/pages/_contact.scss`
- [ ] Style contact page
- [ ] Make page responsive
- [ ] Test contact page renders correctly

---

## Phase 12: UI Library Page (`/ui-library`)

> **Note:** Content verification for this page is covered in **Phase 6.7: UI Library Page Content Verification**. The tasks below are for reference and verification. If the page was already verified in Phase 6, use this phase for final refinement and polish.

### Page Verification

- [ ] Verify `app/ui-library/page.tsx` exists
- [ ] Verify page title: "UI Library"
- [ ] Verify intro text matches `PROJECT-CONTENT.md`
- [ ] Verify MainLayout wrapper is present

### Component Documentation Sections

- [ ] Create Buttons section
  - [ ] Show primary variant
  - [ ] Show secondary variant
  - [ ] Show ghost variant
  - [ ] Show all states (normal, hover, focus, disabled)
  - [ ] Add usage notes
  - [ ] Add accessibility notes
- [ ] Create Cards section
  - [ ] Show default card
  - [ ] Show feature card
  - [ ] Show content card
  - [ ] Show with/without image
  - [ ] Add usage notes
- [ ] Create Tags & Badges section
  - [ ] Show tag variants
  - [ ] Show badge statuses (Live, Upcoming, Draft)
  - [ ] Add usage notes
- [ ] Create Form Elements section
  - [ ] Show Input component
  - [ ] Show Select component
  - [ ] Show Toggle component
  - [ ] Show accessibility features (labels, ARIA)
  - [ ] Add usage notes
- [ ] Create Feedback States section
  - [ ] Show Loader component
  - [ ] Show ErrorMessage component
  - [ ] Show Toast component (if implemented)
  - [ ] Add usage notes

### Styling

- [ ] Create `styles/pages/_ui-library.scss`
- [ ] Style components library page
- [ ] Make page responsive
- [ ] Add code examples (optional)
- [ ] Test components library page renders correctly
- [ ] Test all component examples are visible

---

## Phase 13: Accessibility Implementation

### Semantic HTML

- [ ] Verify all pages use `<header>`, `<main>`, `<section>`, `<footer>`
- [ ] Verify one `<h1>` per page
- [ ] Verify heading hierarchy (h2, h3) is correct
- [ ] Check all pages for semantic structure

### Keyboard Navigation

- [ ] Test all buttons are keyboard accessible
- [ ] Test all links are keyboard accessible
- [ ] Test form inputs are keyboard accessible
- [ ] Test navigation menu is keyboard accessible
- [ ] Verify Tab order is logical

### Focus Management

- [ ] Add visible focus styles to all buttons
- [ ] Add visible focus styles to all links
- [ ] Add visible focus styles to all form inputs
- [ ] Test focus indicators are visible
- [ ] Test focus indicators meet contrast requirements

### ARIA Attributes

- [ ] Add `aria-label` to icon-only buttons
- [ ] Add `aria-describedby` for error messages
- [ ] Add `aria-invalid` for form validation
- [ ] Add `aria-hidden="true"` to decorative images
- [ ] Verify all ARIA attributes are correct

### Form Accessibility

- [ ] Verify all inputs have associated `<label>`
- [ ] Verify all labels use `for` attribute correctly
- [ ] Test form error messages are announced by screen reader
- [ ] Test form validation is accessible

### Image Accessibility

- [ ] Add meaningful `alt` text to all key images
- [ ] Add `alt=""` to decorative images
- [ ] Verify all images have appropriate alt text

### Screen Reader Testing

- [ ] Test with NVDA (Windows) or VoiceOver (Mac)
- [ ] Verify all content is announced correctly
- [ ] Verify navigation is clear
- [ ] Verify form interactions work
- [ ] Fix any issues found

### Color Contrast

- [ ] Check text contrast meets WCAG AA (4.5:1 for normal text)
- [ ] Check text contrast meets WCAG AA (3:1 for large text)
- [ ] Use contrast checker tool
- [ ] Fix any contrast issues

### Final Accessibility Check

- [ ] Run Lighthouse accessibility audit
- [ ] Aim for 100% accessibility score
- [ ] Fix any issues found
- [ ] Re-test after fixes

---

## Phase 14: Performance Optimization

### Image Optimization

- [ ] Replace all `<img>` tags with `next/image`
- [ ] Add `loading="lazy"` to non-critical images
- [ ] Optimize image sizes
- [ ] Use appropriate image formats (WebP, AVIF)
- [ ] Add proper `width` and `height` attributes
- [ ] Test images load correctly

### Code Splitting

- [ ] Verify Next.js automatic code splitting works
- [ ] Check bundle sizes with `npm run build`
- [ ] Identify large dependencies
- [ ] Optimize or remove unnecessary dependencies

### Lazy Loading

- [ ] Implement `React.Suspense` for deferred sections (optional)
- [ ] Verify lazy loading works correctly
- [ ] Test page performance

### Bundle Optimization

- [ ] Run `npm run build` and check bundle sizes
- [ ] Remove unused dependencies
- [ ] Remove unused CSS
- [ ] Optimize imports
- [ ] Verify bundle size is reasonable

### Performance Testing

- [ ] Run Lighthouse performance audit
- [ ] Aim for 90+ performance score
- [ ] Check Core Web Vitals:
  - [ ] LCP (Largest Contentful Paint)
  - [ ] FID (First Input Delay)
  - [ ] CLS (Cumulative Layout Shift)
- [ ] Test on slow 3G connection
- [ ] Fix performance issues
- [ ] Re-test after optimizations

### Font Optimization

- [ ] Optimize font loading (use `next/font`)
- [ ] Add font-display strategy
- [ ] Test fonts load correctly
- [ ] Verify no layout shift from fonts

---

## Phase 15: Testing

### Test Setup Verification

- [ ] Verify Jest is configured correctly
- [ ] Verify React Testing Library is set up
- [ ] Run a simple test to verify setup works
- [ ] Fix any test setup issues

### Hero Component Tests

- [ ] Create `tests/Hero.test.tsx`
- [ ] Test title "Meet Steven Morales…" renders
- [ ] Test "View Features" button exists
- [ ] Test "See Live Content" button exists
- [ ] Run tests and verify they pass

### Button Component Tests

- [ ] Create `tests/Button.test.tsx`
- [ ] Test button renders with given text
- [ ] Test button calls onClick handler when clicked
- [ ] Test button handles disabled state
- [ ] Run tests and verify they pass

### Content Component Tests

- [ ] Create `tests/Content.test.tsx`
- [ ] Mock `fetchContent` function
- [ ] Test loading state renders
- [ ] Test content cards render after data loads
- [ ] Test error state renders
- [ ] Run tests and verify they pass

### Test Coverage

- [ ] Run test coverage report
- [ ] Aim for reasonable coverage (60%+)
- [ ] Add tests for critical paths
- [ ] Verify all tests pass: `npm test`

---

## Phase 16: Git Workflow & Version Control

### Branch Strategy

- [ ] Create and switch to `main` branch
- [ ] Create `feature/landing-page` branch
- [ ] Create `feature/components-page` branch
- [ ] Create `feature/content-api` branch
- [ ] Create `feature/accessibility` branch
- [ ] Create `chore/tests` branch

### Commit Strategy

- [ ] Make commits with descriptive messages
- [ ] Use conventional commit format:
  - [ ] `feat:` for new features
  - [ ] `fix:` for bug fixes
  - [ ] `style:` for styling changes
  - [ ] `test:` for test additions
  - [ ] `docs:` for documentation
  - [ ] `refactor:` for code refactoring
- [ ] Keep commits atomic (one logical change per commit)
- [ ] Write clear commit messages

### Branch Workflow

- [ ] Work on feature branches
- [ ] Commit frequently
- [ ] Merge feature branches to main when complete
- [ ] Keep main branch stable
- [ ] Resolve merge conflicts if any

### Final Git Cleanup

- [ ] Ensure all work is committed
- [ ] Push all branches to remote
- [ ] Verify commit history is clean
- [ ] Tag release if desired

---

## Phase 17: Documentation

### README.md

- [ ] Create `README.md`
- [ ] Add project title: "Steven Morales FE-01 – Front-End Experience Engine (Critical Mass Prototype)"
- [ ] Add project description (2-3 paragraphs)
- [ ] Add Objectives section (connected to job posting)
- [ ] Add Tech Stack section:
  - [ ] Next.js 14
  - [ ] TypeScript
  - [ ] SASS/SCSS
  - [ ] Jest
  - [ ] React Testing Library
- [ ] Add Pages section:
  - [ ] `/` – Product landing
  - [ ] `/components` – UI Component Library
  - [ ] `/content` – CMS-like API-driven view
  - [ ] `/about` – Project context
- [ ] Add "How to Run" section:
  - [ ] Prerequisites
  - [ ] Installation: `npm install`
  - [ ] Development: `npm run dev`
  - [ ] Testing: `npm run test`
  - [ ] Build: `npm run build`
- [ ] Add Accessibility section (list implemented measures)
- [ ] Add Performance section (measures and scores)
- [ ] Add "How this maps to job description" section:
  - [ ] Map each job requirement to implementation
- [ ] Add screenshots or demo links (optional)
- [ ] Review and polish README

### Code Comments

- [ ] Add JSDoc comments to complex functions
- [ ] Add inline comments where needed
- [ ] Ensure code is self-documenting

---

## Phase 18: Final Polish & Review

### Content Review

- [ ] Review all copy matches `PROJECT-CONTENT.md` (official copy source)
- [ ] Check for typos and grammar errors
- [ ] Verify all text is in English
- [ ] Ensure tone is consistent

### Functionality Review

- [ ] Test all links work correctly
- [ ] Test all buttons have proper actions
- [ ] Test navigation works
- [ ] Test forms work (if any)
- [ ] Test API integration works
- [ ] Test filtering works on content page

### Design Review

- [ ] Verify responsive design on mobile (320px+)
- [ ] Verify responsive design on tablet (768px+)
- [ ] Verify responsive design on desktop (1024px+)
- [ ] Check layout doesn't break at any breakpoint
- [ ] Verify images load correctly
- [ ] Check for layout shifts

### Cross-Browser Testing

- [ ] Test in Chrome
- [ ] Test in Firefox
- [ ] Test in Safari
- [ ] Test in Edge
- [ ] Fix any browser-specific issues

### Code Quality

- [ ] Run ESLint and fix errors
- [ ] Run Prettier for code formatting
- [ ] Check for console errors
- [ ] Check for console warnings
- [ ] Remove any `console.log` statements
- [ ] Remove any debug code
- [ ] Verify no broken imports
- [ ] Review component props match specifications

### Accessibility Final Check

- [ ] Run final accessibility audit
- [ ] Test keyboard navigation one more time
- [ ] Test with screen reader one more time
- [ ] Verify all ARIA attributes are correct
- [ ] Fix any remaining issues

### Performance Final Check

- [ ] Run final Lighthouse audit
- [ ] Check all Core Web Vitals
- [ ] Verify performance scores are good
- [ ] Fix any remaining issues

---

## Phase 19: Deployment

### Vercel Setup

- [ ] Create Vercel account (if needed)
- [ ] Install Vercel CLI (optional): `npm i -g vercel`
- [ ] Connect GitHub repository to Vercel
- [ ] Configure build settings:
  - [ ] Framework: Next.js
  - [ ] Build command: `npm run build`
  - [ ] Output directory: `.next`
- [ ] Add environment variables (if any)

### Deployment

- [ ] Deploy to Vercel
- [ ] Wait for build to complete
- [ ] Verify deployment succeeded
- [ ] Get production URL

### Production Testing

- [ ] Test all routes work on production
- [ ] Test API endpoint works on production
- [ ] Test all functionality works
- [ ] Verify images load correctly
- [ ] Test performance on production
- [ ] Fix any production issues

### Domain & URLs

- [ ] Note production URL
- [ ] Test production URL is accessible
- [ ] Verify HTTPS is enabled
- [ ] Share live demo URL

---

## Phase 20: Presentation Preparation

### Elevator Pitch

- [ ] Prepare 30-second explanation of project
- [ ] Prepare 2-minute detailed explanation
- [ ] Practice explaining the project approach

### Key Points to Highlight

- [ ] Design-to-code translation
- [ ] Component system architecture
- [ ] API integration approach
- [ ] Accessibility implementation
- [ ] Performance optimizations
- [ ] Testing strategy

### Documentation Ready

- [ ] Have GitHub repo URL ready
- [ ] Have live demo URL ready
- [ ] Have README polished and ready
- [ ] Review job posting requirements one more time
- [ ] Ensure project addresses all job posting points

### Final Review

- [ ] Review entire project one more time
- [ ] Make sure everything works
- [ ] Be ready to discuss decisions and trade-offs
- [ ] Be ready to answer questions about the code
- [ ] Be ready to explain accessibility choices
- [ ] Be ready to explain performance optimizations

---

## Completion Checklist

- [ ] All phases completed
- [ ] All tests passing
- [ ] All accessibility requirements met
- [ ] Performance scores are good
- [ ] Project deployed and live
- [ ] README is complete
- [ ] Code is clean and well-organized
- [ ] Ready to present to Critical Mass
