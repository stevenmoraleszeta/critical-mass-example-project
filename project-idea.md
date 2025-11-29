# Steven Morales FE-01 – Human Front-End Experience Engine

## Table of Contents

- [0. General Project Concept](#0-general-project-concept)
- [1. Project Objective (Linked to the Position)](#1-project-objective-linked-to-the-position)
- [2. General Application Architecture](#2-general-application-architecture)
  - [2.1. Pages (Next.js App Router)](#21-pages-nextjs-app-router)
  - [2.2. Folder Structure](#22-folder-structure)
- [3. Narrative Concept and Content for Each Page](#3-narrative-concept-and-content-for-each-page)
  - [3.1. Landing / – "Steven Morales: Front-End Experience Engine"](#31-landing--steven-morales-front-end-experience-engine)
  - [3.2. /components Page – Component Library](#32-components-page--component-library)
  - [3.3. /content Page – CMS-like View](#33-content-page--cms-like-view)
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

### Tentative Name:
**"Steven Morales FE-01 – Human Front-End Experience Engine"**

### Core Idea:
A single-brand experience where I am the "product", presented as if I were a SaaS tool / digital product designed for agencies like Critical Mass.

### What I Want to Demonstrate:

**My Capabilities:**
- Translate a design (that I define myself) into responsive and accessible code.
- Create a mini design system / component library.
- Integrate data from a JSON API.
- Think about performance, testing, CSS architecture, etc.

**And at the same time:**
- Have a fun, subtly ironic but professional tone.
- Show that I understand branding, UX, narrative and microcopy.

## 1. Project Objective (Linked to the Position)

This project needs to clearly respond to the job posting:

- **Translate designs / Figma → My own design converted to HTML/CSS/React/Next.**
- **Responsive / Mobile-first / Cross-browser → Flawless layout on mobile/tablet/desktop.**
- **Accessibility → Semantic HTML, ARIA, focus states, etc.**
- **APIs / JSON / HTTP → Consuming an (internal) endpoint as if it were a CMS.**
- **SASS / preprocessors → Real use of SCSS with BEM/SMACSS.**
- **Testing → At least 2–3 unit tests (Jest + RTL).**
- **Performance → Lazy loading, good image practices, efficient components.**
- **Design system / reusable components → /components page.**
- **Optimized prototype / POC → Small but very polished project.**

## 2. General Application Architecture

### 2.1. Pages (Next.js App Router)

- **/** → Product Landing
  - Main page where I present myself as a product.

- **/components** → Component Library / Design System
  - Showcase of reusable UI components.

- **/content** → Content / CMS View
  - Screen that simulates integration with dynamic content via JSON.

- **/about** (optional but recommended) → About the Prototype
  - Page to explain, in a professional tone, the purpose of the project for Critical Mass.

- **/api/content** → Internal API that returns JSON with "use cases / projects / campaigns".

### 2.2. Folder Structure

```
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

### 3.1. Landing / – "Steven Morales: Front-End Experience Engine"

#### 3.1.1. Hero Section

**Objective:** Present myself as a product and establish the tone.

**Elements:**
- Logo (could be stylized "SM").
- **Title (H1):**
  - "Meet Steven Morales: Your Next Front-End Experience Engine."
- **Subtitle:**
  - "A human-first, code-driven product designed to translate beautiful designs into responsive, accessible, high-quality web experiences."
- **CTAs:**
  - View Features → scroll to Features section.
  - See Live Content → navigate to /content.
- **Small ironic copy:**
  - "No monthly subscription. Just coffee and interesting problems."
- **Visual:**
  - Image of me in illustration/blurred style or a mock interface with code + UI overlay.
  - Background with subtle gradient.

#### 3.1.2. "Core Features" Section

**Title:** "Core Features"

Present my skills as product features. 3–4 cards:

1. **Design-to-Code Translation**
   - **Subtext:** "Converts Figma and wireframes into clean, semantic HTML/CSS and reusable React components."

2. **Responsive & Mobile-First Layout Engine**
   - "Optimized for all breakpoints. Designed to behave nicely on phones your stakeholders actually use."

3. **API Integration Module**
   - "Speaks fluent REST, JSON and HTTP. Comfortable integrating with CMSs and external web services."

4. **Accessibility & Performance Optimizer**
   - "Focuses on semantic structure, keyboard navigation and fast load times. Because pretty is not enough."

**Each card will include:**
- Decorative icon.
- Title.
- Brief description.
- BEM class: .feature-card, .feature-card__icon, etc.

#### 3.1.3. "Specs & Tech Stack" Section

**Title:** "Tech Specs"

Divided into columns:

- **Supported Technologies**
  - React, Next.js, TypeScript, HTML5, CSS3, SASS, Git, Jest, RTL.

- **Protocols & Data**
  - HTTP, JSON, basic XML, REST APIs.

- **Integrations**
  - CMS-like data, 3rd-party APIs, webhooks (mentioned at conceptual level).

**Copy with a wink:**
- "Backwards-compatible with legacy codebases (with patience)."

#### 3.1.4. "Use Cases" Section

**Title:** "Use Cases"

List of typical situations in an agency:

- "Need a pixel-perfect build from a Figma file?"
  - "Steven FE-01 converts design tokens, grids and components into maintainable front-end architecture."

- "Need a component library your design team actually likes?"
  - "Can build accessible, reusable components and document them clearly."

- "Need someone to debug that weird layout in Safari?"
  - "Comfortable with cross-browser issues and digging into root causes instead of patching symptoms."

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

#### 3.1.6. "Testimonials / Social Proof" Section (fictional but credible)

I can use fictional testimonials or refer to "teams" generically (without lying, but without real names). Something very neutral, like:

- "Working with Steven FE-01 felt like plugging a specialized module into our team – fast to understand the brief, calm under pressure, and always pushing for cleaner code."

#### 3.1.7. "Pricing" Section (soft wink)

**Title:** "Availability & Pricing"

**Copy:**
- "Available for full-time integration into your team. Salary expectations available upon request. Refunds not available, but continuous improvement is included by default."

#### 3.1.8. "Final CTA" Section

**Buttons:**
- Explore Components → /components
- View Content in Action → /content

**Small note:**
- "This prototype was crafted specifically with the Critical Mass Front-End Developer role in mind."

### 3.2. /components Page – Component Library

**Objective:** Make it look like a mini Storybook / design system docs.

**Sections:**

#### Intro
- **Title:** "UI Component Library"
- **Text:** "A small set of reusable components used across this prototype, documented with their intended usage and accessibility notes."

#### Buttons
I'll show variants:
- .btn--primary
- .btn--secondary
- .btn--ghost

States: normal, hover, focus, disabled. All important states for accessibility.

**For each variant I'll include:**
- Preview.
- **Notes:**
  - Recommended usage.
  - Accessibility (use of <button>, aria-label when there's only an icon).

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
- Associated <label>.
- aria-invalid and aria-describedby as examples.

#### Feedback States
- Loader (spinner or skeleton).
- ErrorMessage.
- Toast (notification message).

### 3.3. /content Page – CMS-like View

**Objective:** Simulate CMS / API integration to show I know how to work with dynamic data.

#### 3.3.1. Layout

**Top bar:**
- Title: "Content Feed".
- Description: "Data fetched from a JSON endpoint, filtered on the client."

**Filter row:**
- Category dropdown (Campaign, Case Study, Experiment, Learning).
- Search input (by title / keywords).
- "Show only live" toggle.

**Content area:**
- If loading === true → skeletons / loader.
- If error → message with "Retry" button.
- If data.length === 0 → empty state: "No content matches your filters yet."

**Card list (ContentCard):**
Each item shows:
- Title.
- Category (Tag).
- Status (Live/Upcoming/Draft) as color-coded Badge.
- Date.
- Small summary.
- Tags (chips) with keywords.

#### 3.3.2. API / Data

**In app/api/content/route.ts:**
GET endpoint that returns an array of objects.

**Something like:**

```typescript
// app/api/content/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const content = [
    {
      id: 1,
      title: "Critical Portfolio Microsite",
      category: "Case Study",
      status: "Live",
      publishedAt: "2025-11-20",
      summary: "A microsite designed and built to showcase front-end skills for an agency environment.",
      tags: ["React", "Next.js", "SASS", "Accessibility"]
    },
    {
      id: 2,
      title: "Design-to-Code Experiment",
      category: "Experiment",
      status: "Draft",
      publishedAt: "2025-10-05",
      summary: "Exploring translation of complex Figma components into reusable code patterns.",
      tags: ["Figma", "Components", "Design System"]
    },
    // ...
  ];

  return NextResponse.json(content);
}
```

**In lib/api/contentApi.ts:**

```typescript
export async function fetchContent() {
  const res = await fetch("/api/content");
  if (!res.ok) throw new Error("Failed to fetch content");
  return res.json();
}
```

**In hooks/useFetchContent.ts:**
I'll handle:
- data
- loading
- error
- refetch() optional (if I have time).

### 3.4. /about Page – Project Purpose

**Content I'll include:**

Explain in 2–3 sections:

#### Context
- I'm applying for the Front-End Developer position at Critical Mass.

#### Prototype Objective
- Demonstrate skills aligned with the job posting:
  - Design-to-code, responsive, accessibility, performance, APIs, SASS, testing.

#### How It's Built
- Next.js + TypeScript + SASS.
- Mention of tests.
- Mention of accessibility and performance.

This is a great place to be direct with the recruiter.

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
```
Meet Steven Morales: Your Next Front-End Experience Engine.
```

**Subtitle:**
```
A human-first, code-driven product designed to translate beautiful designs into responsive, accessible, high-quality web experiences.
```

**Primary CTA:**
```
View Features
```

**Secondary CTA:**
```
See Live Content
```

**Note (small text):**
```
No monthly subscription. Just coffee and interesting problems.
```

### Core Features Section Copy

**Section Title:**
```
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
```
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
```
Backwards-compatible with legacy codebases (with patience).
```

### Use Cases Section Copy

**Section Title:**
```
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
```
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
```
I approach debugging with a systematic mindset: identify the root cause, not just the symptom. When working with teams, I provide clear progress updates and realistic estimates, ensuring transparency throughout the development process. I believe in measuring performance before optimizing, using tools like Lighthouse and browser DevTools to make informed decisions.
```

### Testimonials Section Copy

**Section Title:**
```
What Teams Say
```

**Testimonial 1:**
```
"Working with Steven FE-01 felt like plugging a specialized module into our team – fast to understand the brief, calm under pressure, and always pushing for cleaner code."
```

**Testimonial 2 (optional):**
```
"Delivers on time, communicates clearly, and writes code that's easy to maintain. Exactly what you want in a front-end developer."
```

**Testimonial 3 (optional):**
```
"Brought fresh ideas to our component architecture while respecting existing patterns. Great balance of innovation and pragmatism."
```

### Pricing Section Copy

**Section Title:**
```
Availability & Pricing
```

**Main Copy:**
```
Available for full-time integration into your team. Salary expectations available upon request. Refunds not available, but continuous improvement is included by default.
```

### Final CTA Section Copy

**Section Title:**
```
Ready to Explore?
```

**Button 1:**
```
Explore Components
```

**Button 2:**
```
View Content in Action
```

**Note:**
```
This prototype was crafted specifically with the Critical Mass Front-End Developer role in mind.
```

### Components Page Copy

**Page Title:**
```
UI Component Library
```

**Intro Text:**
```
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
```
Content Feed
```

**Description:**
```
Data fetched from a JSON endpoint, filtered on the client.
```

**Filter Labels:**
- Category: `Category`
- Search: `Search content`
- Toggle: `Show only live`

**Empty State:**
```
No content matches your filters yet.
```

**Error State:**
```
Failed to load content. Please try again.
```

**Retry Button:**
```
Retry
```

### About Page Copy

**Page Title:**
```
About This Prototype
```

**Context Section:**
- **Title:** `Context`
- **Content:** 
```
I'm applying for the Front-End Developer position at Critical Mass. This prototype serves as a practical demonstration of my skills and approach to front-end development in an agency environment.
```

**Objective Section:**
- **Title:** `Objective`
- **Content:**
```
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
```
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

Define all this in _variables.scss.

### 4.2. Typography

- **Headings:** sans-serif bold font (e.g. Inter / Poppins / system font).
- **Body:** sans-serif regular.

**In _typography.scss:**
- Font-size scales (--fs-xs, --fs-sm, --fs-md, etc.).
- Consistent line-height.

Note: I'll use Inter or Poppins, haven't decided yet.

### 4.3. Layout and Spacing

**In _layout.scss:**
- Utility classes:
  - .container
  - .grid, .grid--2, .grid--3, with media queries.

**Spacing variables:**
- --space-xs, --space-sm, --space-md, --space-lg, etc.

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

### Checklist I Need to Incorporate:

#### Semantic Structure
- <header>, <main>, <section>, <footer>.
- One <h1> per page, clear hierarchy of h2, h3.

#### Keyboard Navigation
- **Skip link at the start:**
  ```html
  <a href="#main-content" class="skip-link">Skip to main content</a>
  ```
- .skip-link classes with styles to be visible when :focus.

#### Correct Links and Buttons
- Don't use <div onClick>.
- For actions → <button>.
- For navigation → <a>.

#### Visible Focus
- Specific styles for :focus on buttons, links, inputs.

#### Alternative Text
- All key images with meaningful alt.
- Decorative images with alt="" and aria-hidden="true" if applicable.

#### Accessible Forms
- <label for="search">Search content</label>
- Corresponding id in the input.
- For errors: aria-describedby, aria-invalid.

#### Contrast
- Make sure text vs background meets contrast (minimum 4.5:1 for normal text).

## 6. Performance (Plan)

### Concrete Measures:

- Use next/image for images.
- Add loading="lazy" where I don't use next/image.
- Avoid unnecessary heavy libraries.
- Divide the page into small components.
- If I want, use React.Suspense for some deferred loaded sections (not mandatory).

**In the README, I'll add a section:**

### Performance Notes
- Lazy loading on non-critical images.
- Optimized layout and minimal re-renders via simple composition.
- Focus on small bundle by avoiding unnecessary libraries.

## 7. Testing (Minimum Viable)

- Set up Jest + React Testing Library.

### Suggested Tests:

#### Hero.test.tsx
- Verify that the title "Meet Steven Morales…" renders.
- Verify that buttons with text View Features and See Live Content exist.

#### Button.test.tsx
- Render a button with given text.
- Simulate click and verify it calls the handler.

#### Content.test.tsx
- Mock fetchContent to return data.
- Render /content (or the main component of the view).
- Verify:
  - That it shows loading.
  - Then shows content cards.

## 8. Git & Workflow

### Flow I'll Follow:

- Create repo on GitHub.

### Branches:
- main → stable.
- feature/landing-page
- feature/components-page
- feature/content-api
- feature/accessibility
- chore/tests

### Descriptive Commits:
- feat: add hero section layout
- feat: implement content API integration
- style: refine responsive grid on home
- test: add button component tests

This reflects good version control practices as requested in the job posting.

## 9. README – Structure I'll Use

### Content I'll Include:

#### Title
"Steven Morales FE-01 – Front-End Experience Engine (Critical Mass Prototype)"

(I'll probably shorten it a bit, but that's the idea)

#### Description
2–3 paragraphs explaining:
- It's a personal product-type microsite.
- Built specifically thinking about the Developer, Front End role at Critical Mass.

#### Objectives
List of objectives connected to the job posting. This is key so they see I read the posting well.

#### Tech Stack
Next.js, TypeScript, SASS, Jest, etc.

#### Pages
- / – Product landing
- /components – UI Component Library
- /content – CMS-like API-driven view
- /about – Project context

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
- "APIs, JSON, HTTP…" → /api/content, /content.
- "SASS, pre-processing tools…" → styles/ with SCSS.
- "Design systems & reusable components" → /components.
- "Testing" → tests/ folder.

## 10. How I'll Present It to Critical Mass

When I have it deployed on Vercel:

**In the interview or by email, I can say:**

"I built a small front-end prototype to show how I think about design translation, component systems and API integration in an agency context. It's a playful 'me-as-a-product' microsite, but the underlying code, accessibility and performance work are very serious."

**Send:**
- Live demo URL.
- GitHub repo.

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

