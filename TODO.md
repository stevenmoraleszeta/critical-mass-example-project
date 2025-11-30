# Project TODO Checklist

Complete step-by-step checklist for building the Steven Morales FE-01 Front-End Experience Engine prototype.

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
- [x] Include skip-link styles (project-idea.md accessibility requirement)
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
- [ ] Create `styles/base/_layout.scss`
- [ ] Create `.container` utility class
- [ ] Create grid utilities: `.grid`, `.grid--2`, `.grid--3`
- [ ] Add responsive behavior to grid utilities
- [ ] Create spacing utility classes
- [ ] Test layout utilities work correctly

### Main SCSS File
- [ ] Create `styles/main.scss`
- [ ] Import `_reset.scss`
- [ ] Import `_variables.scss`
- [ ] Import `_mixins.scss`
- [ ] Import `_typography.scss`
- [ ] Import `_layout.scss`
- [ ] Import component styles (will add later)
- [ ] Import page styles (will add later)
- [ ] Import `main.scss` in `app/globals.scss` or `app/layout.tsx`
- [ ] Verify all styles compile without errors

### BEM Methodology
- [ ] Document BEM naming convention for team reference
- [ ] Create example component with BEM classes
- [ ] Verify BEM structure is consistent

---

## Phase 3: Core UI Components

### Button Component
- [ ] Create `components/ui/Button.tsx`
- [ ] Define `ButtonProps` interface (from specifications)
- [ ] Implement primary variant
- [ ] Implement secondary variant
- [ ] Implement ghost variant
- [ ] Implement size variants (sm, md, lg)
- [ ] Add disabled state
- [ ] Add loading state (optional)
- [ ] Handle `href` prop for link buttons
- [ ] Handle `onClick` prop
- [ ] Add `aria-label` support
- [ ] Create `styles/components/_buttons.scss`
- [ ] Style all button variants with BEM
- [ ] Add hover states
- [ ] Add focus states (accessibility)
- [ ] Add active states
- [ ] Test button renders correctly
- [ ] Test button is keyboard accessible
- [ ] Test button works with screen reader

### Card Component
- [ ] Create `components/ui/Card.tsx`
- [ ] Define `CardProps` interface
- [ ] Implement default variant
- [ ] Implement feature variant
- [ ] Implement content variant
- [ ] Add image support
- [ ] Add footer support
- [ ] Add children support
- [ ] Create `styles/components/_cards.scss`
- [ ] Style all card variants
- [ ] Add responsive behavior
- [ ] Test card renders correctly

### Tag Component
- [ ] Create `components/ui/Tag.tsx`
- [ ] Define `TagProps` interface
- [ ] Implement default variant
- [ ] Implement primary variant
- [ ] Implement secondary variant
- [ ] Implement size variants
- [ ] Create `styles/components/_tags.scss`
- [ ] Style all tag variants
- [ ] Test tag renders correctly

### Badge Component
- [ ] Create `components/ui/Badge.tsx`
- [ ] Define `BadgeProps` interface
- [ ] Implement live status
- [ ] Implement upcoming status
- [ ] Implement draft status
- [ ] Add color coding for each status
- [ ] Style badge component
- [ ] Test badge renders correctly

### Input Component
- [ ] Create `components/ui/Input.tsx`
- [ ] Define `InputProps` interface
- [ ] Implement text input
- [ ] Implement email input
- [ ] Implement search input
- [ ] Implement password input
- [ ] Add label association (`<label for="id">`)
- [ ] Add error state handling
- [ ] Add `aria-describedby` for errors
- [ ] Add `aria-invalid` for validation
- [ ] Add required indicator
- [ ] Create `styles/components/_forms.scss`
- [ ] Style input component
- [ ] Add focus states
- [ ] Add error states
- [ ] Test input is accessible
- [ ] Test input works with screen reader

### Select Component
- [ ] Create `components/ui/Select.tsx`
- [ ] Define `SelectProps` interface
- [ ] Implement dropdown functionality
- [ ] Add label association
- [ ] Add options rendering
- [ ] Style select component
- [ ] Add focus states
- [ ] Test select is accessible

### Toggle Component
- [ ] Create `components/ui/Toggle.tsx`
- [ ] Define `ToggleProps` interface
- [ ] Implement toggle functionality
- [ ] Add label association
- [ ] Add checked/unchecked states
- [ ] Style toggle component
- [ ] Add focus states
- [ ] Test toggle is accessible

### Loader Component
- [ ] Create `components/feedback/Loader.tsx`
- [ ] Implement spinner loader
- [ ] Implement skeleton loader (optional)
- [ ] Add loading text support
- [ ] Style loader component
- [ ] Test loader renders correctly

### ErrorMessage Component
- [ ] Create `components/feedback/ErrorMessage.tsx`
- [ ] Define error message props
- [ ] Implement error display
- [ ] Add retry button support
- [ ] Style error component
- [ ] Test error component renders correctly

### Toast Component (Optional)
- [ ] Create `components/feedback/Toast.tsx`
- [ ] Implement toast notification
- [ ] Add auto-dismiss functionality
- [ ] Add manual dismiss
- [ ] Style toast component
- [ ] Test toast works correctly

### Component Testing
- [ ] Test all components render without errors
- [ ] Test all components are responsive
- [ ] Verify all components follow BEM naming
- [ ] Verify all interactive components are keyboard accessible

---

## Phase 4: Layout Components

### Header Component
- [ ] Create `components/layout/Header.tsx`
- [ ] Add logo (stylized "SM" or placeholder)
- [ ] Add navigation structure
- [ ] Style header component
- [ ] Make header responsive
- [ ] Test header renders correctly

### NavBar Component
- [ ] Create `components/layout/NavBar.tsx`
- [ ] Add navigation links (/, /components, /content, /about)
- [ ] Add active state indication
- [ ] Make navigation keyboard accessible
- [ ] Style navbar component
- [ ] Make navbar responsive (mobile menu if needed)
- [ ] Test navigation works correctly

### Footer Component
- [ ] Create `components/layout/Footer.tsx`
- [ ] Add footer content
- [ ] Add links (if any)
- [ ] Style footer component
- [ ] Make footer responsive
- [ ] Test footer renders correctly

### MainLayout Component
- [ ] Create `components/layout/MainLayout.tsx`
- [ ] Wrap content with semantic HTML (`<header>`, `<main>`, `<footer>`)
- [ ] Include Header component
- [ ] Include NavBar component
- [ ] Include Footer component
- [ ] Add skip link for accessibility: `<a href="#main-content" class="skip-link">Skip to main content</a>`
- [ ] Style skip link (visible on focus)
- [ ] Create `styles/components/_navbar.scss`
- [ ] Test layout structure is semantic
- [ ] Test skip link works
- [ ] Test layout is responsive

---

## Phase 5: Landing Page Sections

### Hero Section
- [ ] Create `components/sections/Hero.tsx`
- [ ] Define `HeroProps` interface (from specifications)
- [ ] Add title (H1): "Meet Steven Morales: Your Next Front-End Experience Engine."
- [ ] Add subtitle
- [ ] Add primary CTA button: "View Features"
- [ ] Add secondary CTA button: "See Live Content"
- [ ] Add note: "No monthly subscription. Just coffee and interesting problems."
- [ ] Add image/visual element (placeholder or actual)
- [ ] Create `styles/components/_hero.scss`
- [ ] Style hero section with BEM
- [ ] Add background gradient
- [ ] Make hero responsive
- [ ] Implement smooth scroll to Features section (for primary CTA)
- [ ] Test hero section renders correctly
- [ ] Test CTAs work correctly

### Features Section
- [ ] Create `components/sections/Features.tsx`
- [ ] Create `components/ui/FeatureCard.tsx`
- [ ] Define `FeatureCardProps` interface
- [ ] Add section title: "Core Features"
- [ ] Add Feature 1: "Design-to-Code Translation"
- [ ] Add Feature 2: "Responsive & Mobile-First Layout Engine"
- [ ] Add Feature 3: "API Integration Module"
- [ ] Add Feature 4: "Accessibility & Performance Optimizer"
- [ ] Add icons to each feature card (SVG or icon component)
- [ ] Style features section
- [ ] Style feature cards with BEM
- [ ] Make features section responsive (grid layout)
- [ ] Test features section renders correctly

### Specs Section
- [ ] Create `components/sections/Specs.tsx`
- [ ] Define `SpecsSectionProps` interface
- [ ] Add section title: "Tech Specs"
- [ ] Create column layout
- [ ] Add Column 1: Supported Technologies (React, Next.js, TypeScript, etc.)
- [ ] Add Column 2: Protocols & Data (HTTP, JSON, XML, REST APIs)
- [ ] Add Column 3: Integrations (CMS-like data, 3rd-party APIs, Webhooks)
- [ ] Add footer note: "Backwards-compatible with legacy codebases (with patience)."
- [ ] Style specs section
- [ ] Make specs section responsive
- [ ] Test specs section renders correctly

### Use Cases Section
- [ ] Create `components/sections/UseCases.tsx`
- [ ] Create `components/ui/UseCaseCard.tsx`
- [ ] Define `UseCaseCardProps` interface
- [ ] Add section title: "Use Cases"
- [ ] Add Use Case 1: "Need a pixel-perfect build from a Figma file?"
- [ ] Add Use Case 2: "Need a component library your design team actually likes?"
- [ ] Add Use Case 3: "Need someone to debug that weird layout in Safari?"
- [ ] Style use cases section
- [ ] Style use case cards
- [ ] Make use cases section responsive
- [ ] Test use cases section renders correctly

### Performance Section
- [ ] Create `components/sections/PerformanceSection.tsx`
- [ ] Create `components/ui/StatCard.tsx`
- [ ] Define `StatCardProps` interface
- [ ] Add section title: "Performance & Reliability"
- [ ] Add Stat Card 1: "Lighthouse Focus"
- [ ] Add Stat Card 2: "Optimization Built-In"
- [ ] Add Stat Card 3: "Data-Driven Approach"
- [ ] Add performance paragraph (from copy section)
- [ ] Style performance section
- [ ] Style stat cards
- [ ] Make performance section responsive
- [ ] Test performance section renders correctly

### Testimonials Section
- [ ] Create `components/sections/Testimonials.tsx`
- [ ] Create `components/ui/TestimonialCard.tsx`
- [ ] Define `TestimonialCardProps` interface
- [ ] Add section title: "What Teams Say"
- [ ] Add Testimonial 1 (from copy section)
- [ ] Add Testimonial 2 (optional)
- [ ] Add Testimonial 3 (optional)
- [ ] Style testimonials section
- [ ] Style testimonial cards
- [ ] Make testimonials section responsive
- [ ] Test testimonials section renders correctly

### Pricing Section
- [ ] Create `components/sections/PricingSection.tsx`
- [ ] Add section title: "Availability & Pricing"
- [ ] Add pricing copy (from copy section)
- [ ] Style pricing section
- [ ] Make pricing section responsive
- [ ] Test pricing section renders correctly

### Final CTA Section
- [ ] Create `components/sections/CTASection.tsx`
- [ ] Add section title: "Ready to Explore?"
- [ ] Add Button 1: "Explore Components" → `/components`
- [ ] Add Button 2: "View Content in Action" → `/content`
- [ ] Add note: "This prototype was crafted specifically with the Critical Mass Front-End Developer role in mind."
- [ ] Style CTA section
- [ ] Make CTA section responsive
- [ ] Test CTA section renders correctly
- [ ] Test buttons navigate correctly

### Landing Page Assembly
- [ ] Create `app/page.tsx` (or update existing)
- [ ] Import all section components
- [ ] Assemble landing page with all sections in order
- [ ] Wrap with MainLayout
- [ ] Create `styles/pages/_home.scss`
- [ ] Add page-specific styles
- [ ] Test full landing page renders correctly
- [ ] Test all sections are visible
- [ ] Test all links and buttons work
- [ ] Test page is responsive on mobile/tablet/desktop

---

## Phase 6: Components Page (`/components`)

### Page Setup
- [ ] Create `app/components/page.tsx`
- [ ] Add page title: "UI Component Library"
- [ ] Add intro text: "A small set of reusable components used across this prototype, documented with their intended usage and accessibility notes."
- [ ] Wrap with MainLayout

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
- [ ] Create `styles/pages/_components-page.scss`
- [ ] Style components page
- [ ] Make page responsive
- [ ] Add code examples (optional)
- [ ] Test components page renders correctly
- [ ] Test all component examples are visible

---

## Phase 7: Content Page (`/content`)

### Content Filters Component
- [ ] Create `components/content/ContentFilters.tsx`
- [ ] Define `ContentFiltersProps` interface
- [ ] Add category dropdown (Campaign, Case Study, Experiment, Learning)
- [ ] Add search input
- [ ] Add "Show only live" toggle
- [ ] Implement filter state management
- [ ] Style filters component
- [ ] Make filters responsive
- [ ] Test filters component works

### Content List Component
- [ ] Create `components/content/ContentList.tsx`
- [ ] Add loading state (skeletons/loader)
- [ ] Add error state with retry button
- [ ] Add empty state: "No content matches your filters yet."
- [ ] Add content cards list
- [ ] Implement filtering logic
- [ ] Style content list
- [ ] Test content list works

### Content Card Component
- [ ] Create `components/content/ContentCard.tsx`
- [ ] Define `ContentCardProps` interface
- [ ] Display title
- [ ] Display category (as Tag)
- [ ] Display status (as Badge: Live/Upcoming/Draft)
- [ ] Display date
- [ ] Display summary
- [ ] Display tags (chips)
- [ ] Style content card
- [ ] Make content card responsive
- [ ] Test content card renders correctly

### Page Setup
- [ ] Create `app/content/page.tsx`
- [ ] Add page title: "Content Feed"
- [ ] Add description: "Data fetched from a JSON endpoint, filtered on the client."
- [ ] Import ContentFilters component
- [ ] Import ContentList component
- [ ] Implement filter state
- [ ] Wrap with MainLayout
- [ ] Create `styles/pages/_content-page.scss`
- [ ] Style content page
- [ ] Make page responsive
- [ ] Test content page renders correctly

---

## Phase 8: API Integration

### API Route
- [ ] Create `app/api/content/route.ts`
- [ ] Implement GET handler
- [ ] Define content data structure/type
- [ ] Add sample content data (5-7 items):
  - [ ] Item 1: "Critical Portfolio Microsite" (Case Study, Live)
  - [ ] Item 2: "Design-to-Code Experiment" (Experiment, Draft)
  - [ ] Add more items with different categories and statuses
- [ ] Return JSON response
- [ ] Test API endpoint: `curl http://localhost:3000/api/content` or use browser
- [ ] Verify JSON structure is correct

### API Client
- [ ] Create `lib/api/contentApi.ts`
- [ ] Implement `fetchContent()` function
- [ ] Handle fetch errors
- [ ] Return typed data
- [ ] Test API client function

### Custom Hook
- [ ] Create `lib/hooks/useFetchContent.ts`
- [ ] Implement data state
- [ ] Implement loading state
- [ ] Implement error state
- [ ] Implement refetch function (optional)
- [ ] Use React hooks (useState, useEffect)
- [ ] Test custom hook

### Connect to Content Page
- [ ] Import `useFetchContent` hook in content page
- [ ] Call hook to fetch data
- [ ] Pass data to ContentList component
- [ ] Pass loading state to ContentList
- [ ] Pass error state to ContentList
- [ ] Test data loads correctly
- [ ] Test loading state shows
- [ ] Test error state shows
- [ ] Test filtering works with fetched data

---

## Phase 9: About Page (`/about`)

### Page Setup
- [ ] Create `app/about/page.tsx`
- [ ] Add page title: "About This Prototype"
- [ ] Wrap with MainLayout

### Content Sections
- [ ] Add Context section
  - [ ] Title: "Context"
  - [ ] Content: "I'm applying for the Front-End Developer position at Critical Mass..."
- [ ] Add Objective section
  - [ ] Title: "Objective"
  - [ ] Content: List of skills demonstrated (from copy section)
- [ ] Add "How It's Built" section
  - [ ] Title: "How It's Built"
  - [ ] Content: Tech stack and approach (from copy section)

### Styling
- [ ] Create `styles/pages/_about-page.scss`
- [ ] Style about page
- [ ] Make page responsive
- [ ] Ensure professional tone in styling
- [ ] Test about page renders correctly

---

## Phase 10: Accessibility Implementation

### Semantic HTML
- [ ] Verify all pages use `<header>`, `<main>`, `<section>`, `<footer>`
- [ ] Verify one `<h1>` per page
- [ ] Verify heading hierarchy (h2, h3) is correct
- [ ] Check all pages for semantic structure

### Keyboard Navigation
- [ ] Test skip link works (Tab key)
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

## Phase 11: Performance Optimization

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

## Phase 12: Testing

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

## Phase 13: Git Workflow & Version Control

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

## Phase 14: Documentation

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

## Phase 15: Final Polish & Review

### Content Review
- [ ] Review all copy matches "Complete Copy" section
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

## Phase 16: Deployment

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

## Phase 17: Presentation Preparation

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