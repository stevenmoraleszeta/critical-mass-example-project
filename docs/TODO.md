# Project TODO Checklist

Complete step-by-step checklist for building the Steven Morales Professional Portfolio prototype, specifically designed for the Critical Mass Front-End Developer position in San Jose, Costa Rica.

> **Note:** All official copy and content for pages is defined in `PROJECT-CONTENT.md`. Always refer to that file for exact copy, content structure, and page specifications.

> **Important:** Follow the phases in order. Each phase builds upon the previous ones. Refer to `CONSIDERACIONES_DESARROLLO.md` for development standards, BEM methodology, accessibility requirements, and code quality guidelines.

> **⚠️ Project Simplification Note:** Due to time constraints, the project was simplified to ensure timely completion. The "Me & Skills" (`/me-and-skills`) and "Projects & Experience" (`/projects-and-experience`) pages were removed from the final implementation. The portfolio focuses on the core pages: Home, This Project, and Contact, which demonstrate the essential skills and experience relevant to the Critical Mass Front-End Developer position.

## Phase Overview

**Foundation (Phases 1-4):** Project setup, design system, UI components, and layout structure  
**Content Pages (Phases 5-12):** All content pages organized by navbar order:
  - Phase 6: Home (`/`)
  - Phase 7: This Project (`/this-project`)
  - Phase 12: UI Library (`/this-project/ui-library`) - submenu of This Project
  - Phase 11: Contact (`/contact`)
  
> **Note:** The "Me & Skills" and "Projects & Experience" pages were removed due to time constraints to ensure timely project completion.
**Integration & Quality (Phases 13-16):** Navigation updates, style organization, content verification  
**Optimization (Phases 17-19):** Accessibility, performance, and testing implementation  
**Finalization (Phases 20-24):** Git workflow, documentation, polish, deployment, and presentation preparation

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
- [x] Test typography renders correctly

### Reset & Base Styles

- [x] Create `styles/base/_reset.scss`
- [x] Add CSS reset or normalize styles (modern CSS reset following Critical Mass requirements)
- [x] Set base body styles (using variables from _variables.scss)
- [x] Set base link styles (with focus states for accessibility)
- [x] Set base button styles (reset with accessibility focus states)
- [x] Include reduced-motion support (accessibility best practice)
- [x] Test reset styles work correctly

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

## Phase 5: Landing Page Sections (Initial Version - Superseded by Phase 6)

> **Note:** This phase represents the initial landing page implementation with older sections. The landing page has been reorganized in **Phase 6** to match the new structure from `PROJECT-CONTENT.md`. The sections below (Features, Specs, Use Cases, Performance, Testimonials, Pricing) have been removed/replaced as part of the reorganization. Only Hero and CTA sections were updated and retained in Phase 6.

### Hero Section (Updated in Phase 6)

- [x] Create `components/sections/Hero.tsx`
- [x] Define `HeroProps` interface (from specifications)
- [x] Update with new copy from `PROJECT-CONTENT.md` (see Phase 6)
- [x] Create `styles/components/_hero.scss`
- [x] Style hero section with BEM
- [x] Make hero responsive

### CTA Section (Updated in Phase 6)

- [x] Create `components/sections/CTASection.tsx`
- [x] Update with new copy from `PROJECT-CONTENT.md` (see Phase 6)
- [x] Style CTA section
- [x] Make CTA section responsive

### Legacy Sections (Removed/Reorganized in Phase 6)

- [x] Features Section (replaced by Key Highlights in Phase 6)
- [x] Specs Section (removed)
- [x] Use Cases Section (removed)
- [x] Performance Section (removed)
- [x] Testimonials Section (removed)
- [x] Pricing Section (removed)

> **See Phase 6 for the current Home page structure and implementation.**

---

## Phase 6: Home Page (`/`) Content & Structure Reorganization

> **Reference:** Always use `PROJECT-CONTENT.md` as the single source of truth for all page content, copy, and structure.

### Current State Analysis
- [x] Review current Home page structure (`src/app/page.tsx`)
- [x] Identify existing sections: Hero, Features, UseCases, FeaturedProjects, LeadershipSection, PerformanceSection, PricingSection, CTASection
- [x] Document current content and structure
- [x] Compare with target structure from `PROJECT-CONTENT.md`

### Target Structure (from PROJECT-CONTENT.md)
- [x] Hero section (with new copy)
- [x] Role Focus: Developer, Front End @ Critical Mass section
- [x] Key Highlights – What I Bring to Critical Mass section
- [x] Primary Call To Action section

### Hero Section Update
- [x] Update Hero component (`src/components/sections/Hero.tsx`) with new copy from `PROJECT-CONTENT.md`:
  - [x] Update headline: "Front-End Experience Engine for Critical Mass."
  - [x] Update subheadline with new copy
  - [x] Add Key Identity Line: "Full Stack Software Engineer | Tech Leader | Product-Driven Developer | Creative Technologist"
  - [x] Add Short Value Intro paragraph
  - [x] Update CTAs to match PROJECT-CONTENT.md (Primary: "Want to see how I would work at Critical Mass?" → `/this-project`, Secondary: Get in Touch → `/contact`)
- [x] Update Hero props interface if needed
- [x] Update `src/app/page.tsx` to pass new Hero props
- [x] Test Hero renders correctly with new content

### Role Focus Section Creation
- [x] Implement Role Focus section using CardBoard component with 6 items from `PROJECT-CONTENT.md`:
  - [x] Design Translation
  - [x] Responsive & Accessible
  - [x] API Integration
  - [x] Tooling
  - [x] Collaboration
  - [x] Ownership
- [x] Cards are draggable with local storage
- [x] Style with BEM methodology
- [x] Make responsive (mobile-first)
- [x] Add to `src/app/page.tsx` as CardBoard with roleFocusCards
- [x] Create/update `styles/components/_card-board.scss` for styling
- [x] Test section renders correctly

### Key Highlights Section Creation
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
- [x] Test section renders correctly

### Primary CTA Section Update
- [x] Update CTASection component (`src/components/sections/CTASection.tsx`) with new copy from `PROJECT-CONTENT.md`:
  - [x] Update title/heading: "Want to see how I would work at Critical Mass?"
  - [x] Update description: "Start with the 'This Project' page – it's a focused breakdown of how I match this role, backed by real code and projects."
  - [x] Update buttons: Primary → `/this-project`, Secondary → `/contact`
- [x] Update styles if needed
- [x] Test CTA section renders correctly

### Remove/Archive Obsolete Sections
- [x] Remove `UseCases` section (not in new structure)
- [x] Remove `FeaturedProjects` section (removed due to project simplification)
- [x] Remove `LeadershipSection` (content reorganized)
- [x] Remove `PerformanceSection` (content reorganized)
- [x] Remove `PricingSection` (not in new structure)
- [x] Remove `Features` section (not in new structure, replaced by Key Highlights)
- [x] Update `src/app/page.tsx` to remove obsolete section imports
- [x] Clean up unused section files
- [x] Update imports in `main.scss` if needed

### Home Page Final Assembly
- [x] Update `src/app/page.tsx` with new section order:
  - [x] Hero
  - [x] Role Focus Section
  - [x] Key Highlights Section
  - [x] Primary CTA Section
- [x] Remove all obsolete section imports
- [x] Update `styles/pages/_home.scss` for new structure
- [x] Test full Home page renders correctly
- [x] Test all sections are visible and in correct order
- [x] Test all links and buttons work
- [x] Test page is responsive on mobile/tablet/desktop
- [x] Verify content matches `PROJECT-CONTENT.md` exactly

---

## Phase 7: This Project Page (`/this-project`)

> **Reference:** Always use `PROJECT-CONTENT.md` as the single source of truth for all page content, copy, and structure.

### Page Setup
- [x] Create `app/this-project/page.tsx`
- [x] Add page title: "This Project"
- [x] Wrap with MainLayout
- [x] Add semantic HTML structure (`<main>`, `<section>`)

### Content Sections (from PROJECT-CONTENT.md)
- [x] Create Section 1 – Project Overview
  - [x] Add project description from `PROJECT-CONTENT.md`
  - [x] Add 15 cards with full content covering all project aspects
  - [x] Cards are draggable and organized
  - [x] Add workflow steps (12 steps implemented, extends beyond the 8 from `PROJECT-CONTENT.md`)
  - [x] Displayed as numbered timeline-style list
- [x] Create Section 6 – What You Can Review
  - [x] Add Live demo link
  - [x] Add GitHub repository links
  - [x] Add UI Library link to `/this-project/ui-library`

### Design Ideas
- [x] **Layout Structure:**
  - [x] Centered container with max-width (`var(--container-xl)`) consistent with Home page
  - [x] Each section as separate semantic `<section>` with consistent spacing
  - [x] Hero-style introduction section at top with page title (H1) and brief intro
  - [x] Clear visual hierarchy with section titles (H2) and subsections (H3)
- [x] **Visual Design:**
  - [x] Use Card components for "Project Overview" goals list (similar to Key Highlights pattern)
  - [x] Use FeatureCard or custom cards for "How This Portfolio Is Built" subsections (4 items in grid)
  - [x] Workflow steps displayed as numbered list or timeline-style layout (vertical or horizontal on desktop)
  - [x] Three-column grid for "Accessibility, Performance & Responsiveness" subsections (mobile: stacked)
  - [x] Cards or sections for "Tooling, Testing & Automation" content (grouped by category)
  - [x] Prominent CTA section at bottom with links (similar to CTASection component)
- [x] **Color & Typography:**
  - [x] Use primary color (#0000FF) for headings and accent elements
  - [x] Consistent typography scale from `_variables.scss`
  - [x] Clear distinction between sections with spacing (`var(--space-2xl)` between sections)
- [x] **Interactive Elements:**
  - [x] Links styled consistently with Button component (primary/secondary variants)
  - [x] Smooth scroll to sections if using anchor navigation
  - [x] Hover states on interactive elements following project patterns
- [x] **Mobile-First Responsive:**
  - [x] Single column layout on mobile, expanding to 2-3 columns on tablet/desktop
  - [x] Workflow steps stack vertically on mobile, horizontal on desktop
  - [x] Grid layouts adapt from 1 column (mobile) to 2-3 columns (desktop)

### Styling
- [x] Create `styles/pages/_this-project.scss`
- [x] Style this-project page with BEM methodology
- [x] Make page responsive (mobile-first)
- [x] Add proper spacing and typography
- [x] Test page renders correctly
- [x] Verify all content matches `PROJECT-CONTENT.md` (sections 2, 4, 5 missing)

---

## Phase 12: UI Library Page (`/this-project/ui-library`) Content Verification

> **Reference:** Always use `PROJECT-CONTENT.md` as the single source of truth for all page content, copy, and structure.
> **Note:** UI Library is accessible at `/this-project/ui-library` (submenu of This Project page).

### Content Verification
- [x] Review current UI Library page (`src/app/this-project/ui-library/page.tsx`)
- [x] Compare with `PROJECT-CONTENT.md` under `/this-project/ui-library`
- [x] Verify all component showcases are present:
  - [x] Button Component Showcase (all variants, sizes, states, link buttons, accessibility)
  - [x] Card Component Showcase (all variants, images, footer, custom children, complete cards)
  - [x] Tag Component Showcase (variants, sizes, usage examples)
  - [x] Badge Component Showcase (status variants, usage examples)
  - [x] Input Component Showcase (types, required, error states, all states combined)
  - [x] Select Component Showcase (basic, required, error states, usage examples)
  - [x] Toggle Component Showcase (basic, states, usage examples)
  - [x] Loader Component Showcase (basic, sizes, without text, usage examples)
  - [x] ErrorMessage Component Showcase (basic, with retry, sizes, without retry, usage examples)
  - [x] Toast Component Showcase (variants, sizes, positions, auto-dismiss, usage examples)
- [x] Verify intro text matches `PROJECT-CONTENT.md`
- [x] Update any missing component examples
- [x] Ensure all content matches `PROJECT-CONTENT.md` exactly

### Styling
- [x] Styles exist in `styles/pages/_components.scss`
- [x] Verify all component showcases match `PROJECT-CONTENT.md` exactly
- [x] Ensure page is responsive
- [x] Test components library page renders correctly
- [x] Test all component examples are visible

---

> **Note:** Phase 8 (Projects & Experience) and Phase 9 (Me & Skills) were removed due to time constraints. The project was simplified to focus on core pages: Home, This Project, and Contact. All related tasks below have been removed as they are no longer part of the project scope.


---

## Phase 11: Contact Page (`/contact`) Creation

> **Reference:** Always use `PROJECT-CONTENT.md` as the single source of truth for all page content, copy, and structure.
> **Note:** NavBar already references `/contact` but the page doesn't exist yet.

### Page Setup
- [x] Create `app/contact/page.tsx`
- [x] Add page title: "Let's Build Something Great"
- [x] Wrap with MainLayout
- [x] Add semantic HTML structure

### Contact Sections (from PROJECT-CONTENT.md)
- [x] Create Contact Information section
  - [x] Add Name: Steven Morales Fallas
  - [x] Add Location: San José, Costa Rica
  - [x] Add Phone / WhatsApp: +506 6130 4830 (with link)
  - [x] Add Email: fallasmoraless@gmail.com (with mailto link)
- [x] Create Online Profiles section
  - [x] Add GitHub link (github.com/stevenmoraleszeta)
  - [x] Add LinkedIn link (linkedin.com/in/stevenmoralesfallas)
  - [x] Add Instagram link (@stevenmorales.novaera)
- [x] Create Short Closing Message section
  - [x] Add closing message content from `PROJECT-CONTENT.md`
  - [x] Add quote: "We don't need to wait a single moment to start changing the world." – Anne Frank

### Design Ideas
- [x] **Layout Structure:**
  - [x] Centered, focused layout with clear sections
  - [x] Hero-style introduction with page title "Let's Build Something Great"
  - [x] Three distinct sections: Contact Info, Online Profiles, Closing Message
  - [x] Clean, minimal design emphasizing clarity and accessibility
- [x] **Contact Information Section:**
  - [x] Display contact details in Card component or structured list
  - [x] Each contact method as clickable link with icon (phone, email, location pin)
  - [x] WhatsApp link prominently displayed with visual indicator
  - [x] Email with mailto link styled as primary button or link
  - [x] Location displayed with visual styling (subtle, informative)
- [x] **Online Profiles Section:**
  - [x] Social links as Button components or styled links
  - [x] Grid layout: 1 column (mobile), 3 columns (desktop) for GitHub, LinkedIn, Instagram
  - [x] External link indicators (icon or text)
  - [x] Hover states showing interactivity
  - [x] Consider using icons for each platform (decorative, with aria-hidden)
- [x] **Closing Message Section:**
  - [x] Centered, prominent display of closing message
  - [x] Quote displayed with special typography treatment (italic, larger size, or in Card)
  - [x] Visual emphasis on call-to-action feel
  - [x] Professional but warm tone reflected in design
- [x] **Visual Design:**
  - [x] Use Card components for structured sections (Contact Info card, Profiles card)
  - [x] Consistent spacing between sections
  - [x] Clean, uncluttered layout focusing on key information
  - [x] Consider subtle background pattern or minimal visual elements (optional)
- [x] **Interactive Elements:**
  - [x] All links clearly styled and accessible
  - [x] Hover effects on clickable elements
  - [x] Proper focus states for keyboard navigation
  - [x] External links open in new tab with proper attributes

### Styling
- [x] Create `styles/pages/_contact.scss`
- [x] Style contact page with BEM methodology
- [x] Make page responsive (mobile-first)
- [x] Test page renders correctly
- [x] Verify all content matches `PROJECT-CONTENT.md`

---

> **Reference:** Always use `PROJECT-CONTENT.md` as the single source of truth for all page content, copy, and structure.
> **Note:** NavBar already references `/contact` but the page doesn't exist yet.

### Page Setup
- [x] Create `app/contact/page.tsx`
- [x] Add page title: "Let's Build Something Great"
- [x] Wrap with MainLayout
- [x] Add semantic HTML structure

### Contact Sections (from PROJECT-CONTENT.md)
- [x] Create Contact Information section
  - [x] Add Name: Steven Morales Fallas
  - [x] Add Location: San José, Costa Rica
  - [x] Add Phone / WhatsApp: +506 6130 4830 (with link)
  - [x] Add Email: fallasmoraless@gmail.com (with mailto link)
- [x] Create Online Profiles section
  - [x] Add GitHub link (github.com/stevenmoraleszeta)
  - [x] Add LinkedIn link (linkedin.com/in/stevenmoralesfallas)
  - [x] Add Instagram link (@stevenmorales.novaera)
- [x] Create Short Closing Message section
  - [x] Add closing message content from `PROJECT-CONTENT.md`
  - [x] Add quote: "We don't need to wait a single moment to start changing the world." – Anne Frank

### Design Ideas
- [x] **Layout Structure:**
  - [x] Centered, focused layout with clear sections
  - [x] Hero-style introduction with page title "Let's Build Something Great"
  - [x] Three distinct sections: Contact Info, Online Profiles, Closing Message
  - [x] Clean, minimal design emphasizing clarity and accessibility
- [x] **Contact Information Section:**
  - [x] Display contact details in Card component or structured list
  - [x] Each contact method as clickable link with icon (phone, email, location pin)
  - [x] WhatsApp link prominently displayed with visual indicator
  - [x] Email with mailto link styled as primary button or link
  - [x] Location displayed with visual styling (subtle, informative)
- [x] **Online Profiles Section:**
  - [x] Social links as Button components or styled links
  - [x] Grid layout: 1 column (mobile), 3 columns (desktop) for GitHub, LinkedIn, Instagram
  - [x] External link indicators (icon or text)
  - [x] Hover states showing interactivity
  - [x] Consider using icons for each platform (decorative, with aria-hidden)
- [x] **Closing Message Section:**
  - [x] Centered, prominent display of closing message
  - [x] Quote displayed with special typography treatment (italic, larger size, or in Card)
  - [x] Visual emphasis on call-to-action feel
  - [x] Professional but warm tone reflected in design
- [x] **Visual Design:**
  - [x] Use Card components for structured sections (Contact Info card, Profiles card)
  - [x] Consistent spacing between sections
  - [x] Clean, uncluttered layout focusing on key information
  - [x] Consider subtle background pattern or minimal visual elements (optional)
- [x] **Interactive Elements:**
  - [x] All links clearly styled and accessible
  - [x] Hover effects on clickable elements
  - [x] Proper focus states for keyboard navigation
  - [x] External links open in new tab with proper attributes

### Styling
- [x] Create `styles/pages/_contact.scss`
- [x] Style contact page with BEM methodology
- [x] Make page responsive (mobile-first)
- [x] Test page renders correctly
- [x] Verify all content matches `PROJECT-CONTENT.md`

---

## Phase 13: Navigation & Routing Updates

### Navigation Bar Update
- [x] Review current NavBar (`src/components/layout/NavBar.tsx`)
- [x] Update navigation links to match new structure (in order):
  - [x] `/` → Home
  - [x] `/this-project` → This Project
  - [x] `/contact` → Contact
- [x] Note: `/ui-library` is accessible via `/this-project/ui-library` (not in main nav)
- [x] Remove any obsolete navigation links (e.g., `/about`, `/components`, `/content`, `/critical-mass-case-study`)
- [x] Update aria-labels if needed
- [x] Ensure navigation order matches logical page flow
- [x] Test navigation works correctly (some pages referenced don't exist yet: `/contact`)
- [x] Test active state indication works
- [x] Test mobile menu includes all new links
- [x] Create missing pages that NavBar references: `/contact`

### Footer Update (if needed)
- [x] Review Footer component
- [x] Update links if needed
- [x] Ensure consistency with new page structure

---

## Phase 14: Style Files Reorganization

### Page Style Files
- [x] Create/Update `styles/pages/_home.scss` for new Home structure
- [x] Create `styles/pages/_this-project.scss` (exists, may need updates for missing sections)
- [x] Create `styles/pages/_contact.scss`
- [x] Update `styles/pages/_components.scss` (used for ui-library)
- [x] Remove/archive obsolete page style files
- [x] Update `styles/main.scss` to import all new/updated page styles

### Component Style Files
- [x] Create `styles/components/_role-focus-section.scss`
- [x] Create `styles/components/_key-highlights-section.scss`
- [x] Update `styles/components/_hero.scss` if needed
- [x] Update `styles/components/_cta-section.scss` if needed
- [x] Archive/remove obsolete component style files
- [x] Update `styles/main.scss` to import all new/updated component styles

---

## Phase 15: About Page Removal or Archive

### Decision & Action
- [x] Review current About page (`src/app/about/page.tsx`)
- [x] Determine if About page should be:
- [x] If removing: Delete `src/app/about/page.tsx` and related styles
- [x] If archiving: Move to archive folder
- [x] Update navigation to remove About link if removed
- [x] Update any internal links that point to `/about`

---

## Phase 16: Content Verification & Quality Check

### Content Accuracy Check
- [x] Verify Home page content matches `PROJECT-CONTENT.md` exactly
- [x] Verify This Project page (`/this-project`) content matches `PROJECT-CONTENT.md` exactly (sections 2, 4, 5 missing)
- [x] Verify Contact page content matches `PROJECT-CONTENT.md` exactly (page doesn't exist yet)
- [x] Verify UI Library page content matches `PROJECT-CONTENT.md` exactly

### Copy Consistency Check
- [x] Check all copy uses exact text from `PROJECT-CONTENT.md`
- [ ] Verify no placeholder text remains
- [ ] Check for typos and grammar errors
- [ ] Ensure tone is consistent across all pages
- [ ] Verify all links and URLs are correct

### Structure Verification
- [ ] Verify all pages follow semantic HTML structure
- [ ] Verify all pages use MainLayout
- [ ] Verify heading hierarchy is correct (one `<h1>` per page)
- [ ] Verify all sections are properly structured
- [ ] Check for broken links or missing pages:
  - [ ] `/contact` - referenced in NavBar but doesn't exist
  - [ ] All internal links work correctly

### Functional Testing
- [ ] Test all pages render without errors
- [ ] Test all navigation links work correctly 
- [ ] Test all internal links work correctly
- [ ] Test all external links work correctly
- [ ] Test all buttons have proper actions
- [ ] Test responsive design on all pages
- [ ] Test mobile menu works correctly
- [ ] Test filter/search functionality on Projects & Experience page
- [ ] Test draggable cards on Home and This Project pages

### Content Testing
- [ ] Verify all content is visible and readable
- [ ] Verify all images load correctly
- [ ] Verify all sections display correctly
- [ ] Test on different screen sizes
- [ ] Test on different browsers

---

## Phase 17: Accessibility Implementation

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

## Phase 18: Performance Optimization

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

## Phase 19: Testing

### Test Setup Verification

- [ ] Verify Jest is configured correctly
- [ ] Verify React Testing Library is set up
- [ ] Run a simple test to verify setup works
- [ ] Fix any test setup issues

### Hero Component Tests

- [ ] Create `tests/components/sections/Hero.test.tsx`
- [ ] Test Hero component renders correctly with new content from `PROJECT-CONTENT.md`
- [ ] Test title and subtitle render correctly
- [ ] Test primary CTA button exists and navigates to `/this-project`
- [ ] Test secondary CTA button exists and navigates to `/contact`
- [ ] Test background image renders correctly if provided
- [ ] Run tests and verify they pass

### Button Component Tests

- [ ] Create `tests/components/ui/Button.test.tsx`
- [ ] Test button renders with given text
- [ ] Test button calls onClick handler when clicked
- [ ] Test button handles disabled state
- [ ] Test button variants (primary, secondary, ghost)
- [ ] Test button sizes (sm, md, lg)
- [ ] Test link button functionality (href prop)
- [ ] Test accessibility attributes (aria-label)
- [ ] Run tests and verify they pass

### Role Focus Section Tests

- [ ] Create `tests/components/sections/RoleFocusSection.test.tsx`
- [ ] Test section renders with all 6 items from `PROJECT-CONTENT.md`
- [ ] Test drag-and-drop functionality (if implemented)
- [ ] Test section is responsive
- [ ] Run tests and verify they pass

### Key Highlights Section Tests

- [ ] Create `tests/components/sections/KeyHighlightsSection.test.tsx`
- [ ] Test section renders with all 6 highlights from `PROJECT-CONTENT.md`
- [ ] Test section is responsive
- [ ] Run tests and verify they pass

### Test Coverage

- [ ] Run test coverage report
- [ ] Aim for reasonable coverage (60%+)
- [ ] Add tests for critical paths
- [ ] Verify all tests pass: `npm test`

---

## Phase 20: Git Workflow & Version Control

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

## Phase 21: Documentation

### README.md

- [ ] Create `README.md`
- [ ] Add project title: "Critical Mass Portfolio Prototype"
- [ ] Add project description (2-3 paragraphs)
- [ ] Add Objectives section (connected to job posting)
- [ ] Add Tech Stack section:
  - [ ] Next.js 14
  - [ ] TypeScript
  - [ ] SASS/SCSS
  - [ ] Jest
  - [ ] React Testing Library
- [ ] Add Pages section:
  - [ ] `/` – Home (Professional Portfolio Landing)
  - [ ] `/this-project` – This Project (Critical Mass Portfolio Prototype)
  - [ ] `/this-project/ui-library` – UI Library (Component Showcase)
  - [ ] `/contact` – Let's Build Something Great
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

## Phase 22: Final Polish & Review

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

- [x] Run ESLint and fix errors
- [x] Run Prettier for code formatting
- [x] Check for console errors
- [x] Check for console warnings
- [x] Remove any `console.log` statements (only in comments/docs, not in production code)
- [x] Remove any debug code
- [x] Verify no broken imports
- [x] Review component props match specifications
- [x] Fix TypeScript build errors (NavBar.tsx event handler type)
- [x] Fix Next.js 16 metadata warnings (viewport and themeColor moved to separate export)
- [x] Verify production build completes successfully without errors

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

## Phase 23: Deployment

### Vercel Setup

- [ ] Create Vercel account (if needed)
- [ ] Install Vercel CLI (optional): `npm i -g vercel`
- [ ] Connect GitHub repository to Vercel
- [x] Configure build settings:
  - [x] Framework: Next.js
  - [x] Build command: `npm run build`
  - [x] Output directory: `.next`
- [ ] Add environment variables (if any)

### Build Fixes & Deployment Readiness

- [x] Fix TypeScript compilation errors (NavBar.tsx event handler type mismatch)
- [x] Fix Next.js 16 metadata warnings (viewport and themeColor export)
- [x] Verify build completes successfully locally
- [x] Verify no TypeScript errors in production build
- [x] Verify all imports resolve correctly
- [x] Verify all components export correctly
- [x] Test production build matches development behavior

### Deployment

- [x] Deploy to Vercel
- [x] Wait for build to complete
- [x] Verify deployment succeeded
- [x] Get production URL

### Production Testing

- [ ] Test all routes work on production:
  - [ ] `/` (Home)
  - [ ] `/contact`
  - [ ] `/ui-library`
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

## Phase 24: Presentation Preparation

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
