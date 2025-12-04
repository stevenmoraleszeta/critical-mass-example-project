# Steven Morales – Professional Portfolio for Critical Mass

> **Full Stack Software Engineer · Tech Leader · Product-Focused Developer**  
> San José, Costa Rica · Applying for **Developer, Front End – Critical Mass**

A professional portfolio prototype built to demonstrate front-end development skills and experience, specifically crafted for the **Critical Mass Front-End Developer** position in **San Jose, Costa Rica**. This project showcases real-world expertise in translating designs to code, building scalable component systems, and delivering production-ready applications.

**Version:** 0.1.0  
**Status:** ✅ Complete and Production Ready  
**Last Updated:** January 2025

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

For detailed setup instructions, see [Getting Started](#-getting-started).

---

## 📑 Table of Contents

- [Project Context](#-project-context)
- [What This Portfolio Demonstrates](#-what-this-portfolio-demonstrates)
- [Features](#-features)
- [Essential Reference Documents](#-essential-reference-documents)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Pages](#-pages)
- [Design System](#-design-system)
- [Architecture](#️-architecture)
- [Accessibility](#-accessibility-wcag-compliant)
- [Performance](#-performance)
- [Testing](#-testing)
- [Components](#-components)
- [Development Standards](#-development-standards)
- [Browser Support](#-browser-support)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [Troubleshooting](#-troubleshooting)
- [How This Maps to Critical Mass Job Requirements](#-how-this-maps-to-critical-mass-job-requirements)
- [Documentation](#-documentation)
- [Project Status](#-project-status)
- [Development Roadmap](#-development-roadmap)
- [Project Philosophy](#-project-philosophy)
- [License](#-license)
- [Contact](#-contact)

---

## 📋 Project Context

This portfolio demonstrates my experience as a **Full Stack Developer and Tech Leader** with more than **3 years** building robust, scalable solutions. Currently serving as:

- **CEO & Lead Software Developer** at [Novaera](https://linkedin.com/in/stevenmoralesfallas) – Leading a team of **6+ developers** building intelligent and scalable digital solutions
- **CEO & Lead Tech Educator** at [ZETA Academia](https://zetaacademia.com/) – Leading a team of **4+ educators** empowering **1,000+ students**

Based in **Costa Rica**, ready to work from office **3+ days a week** as required by Critical Mass.

> **ℹ️ Project Scope Note:** The project focuses on core pages that demonstrate essential skills and experience relevant to the Critical Mass Front-End Developer position. The portfolio includes: Home, This Project (with UI Library), Curriculum, Cover Letter, and Contact pages. This focused approach ensures quality and completeness while showcasing the most relevant capabilities.

---

## 🎯 What This Portfolio Demonstrates

This portfolio is designed as a **live case study** demonstrating:

- ✅ **Design-to-code translation** – Figma → HTML5/CSS3/React/Next.js with pixel-perfect implementation
- ✅ **Responsive & mobile-first development** – Applications serving 1,000+ users across all devices
- ✅ **Accessibility best practices** – WCAG-compliant implementations with semantic HTML and ARIA
- ✅ **Component system architecture** – BEM + SMACSS following industry best practices
- ✅ **API integration capabilities** – Full-stack experience with REST, GraphQL, and third-party services
- ✅ **Performance optimization** – Experience optimizing applications for scale and performance
- ✅ **Testing practices** – Jest + React Testing Library for quality assurance
- ✅ **Leadership and collaboration** – Leading teams, working with cross-functional teams
- ✅ **Full-stack expertise** – Front-end, back-end, databases, cloud deployment

---

## ✨ Features

### Core Features

- **🎨 Complete Design System** – Comprehensive color palette, typography, spacing, and breakpoint system
- **🧩 Reusable Component Library** – 20+ production-ready components with variants, sizes, and states
- **📱 Fully Responsive** – Mobile-first design tested across all breakpoints (320px to 1536px+)
- **♿ WCAG-Compliant** – Full accessibility support with semantic HTML, ARIA attributes, and keyboard navigation
- **⚡ Performance Optimized** – Font optimization, image optimization, code splitting, and lazy loading
- **🧪 Comprehensive Testing** – Jest + React Testing Library with component, accessibility, and integration tests
- **🎯 BEM Methodology** – Strict adherence to BEM naming conventions for maintainable CSS
- **📐 SMACSS Architecture** – Scalable and modular CSS architecture for large-scale projects
- **🪝 Custom React Hooks** – 8 reusable hooks for common functionality (drag & drop, focus trap, media queries, etc.)
- **📄 Complete Documentation** – Extensive documentation covering development guidelines, testing, and architecture

### Interactive Features

- **🃏 Draggable Card Boards** – Interactive card boards with local storage persistence
- **🎭 Animated Components** – Smooth animations and transitions with reduced motion support
- **🔍 Search & Filter** – Ready for search and filtering functionality
- **💾 Local Storage Integration** – Persistent user preferences and state management

---

## 📚 Essential Reference Documents

**Before working on this project, read these files:**

1. **[`docs/CONSIDERACIONES_DESARROLLO.md`](./docs/CONSIDERACIONES_DESARROLLO.md)** ⭐ **START HERE** – Complete development guidelines, standards, and Critical Mass requirements
2. **[`docs/TODO.md`](./docs/TODO.md)** – Complete project checklist with all phases and tasks
3. **[`docs/PROJECT-IDEA.md`](./docs/PROJECT-IDEA.md)** – Full project specifications, architecture, and requirements
4. **[`docs/PROJECT-CONTENT.md`](./docs/PROJECT-CONTENT.md)** – **Official copy and content specifications for all pages** (single source of truth)
5. **[`docs/BEM_METHODOLOGY_GUIDE.md`](./docs/BEM_METHODOLOGY_GUIDE.md)** – Complete BEM methodology guide and Critical Mass compliance review
6. **[`docs/JOB-INFO.md`](./docs/JOB-INFO.md)** – Complete job posting information for Developer, Front End position at Critical Mass (San Jose, Costa Rica) – Role description, responsibilities, requirements, and benefits
7. **[`docs/MY-PROFILE.md`](./docs/MY-PROFILE.md)** – Complete professional profile, tech stack, featured projects, professional experience, and CV summary

---

## 🛠️ Tech Stack

### Core Framework

- **Next.js** 16.0.5 (App Router)
  - Server components and optimized routing
  - Automatic code splitting and optimization
  - Image optimization with `next/image`
  - Font optimization with `next/font/google`
  - Built-in API routes support

### UI Library

- **React** 19.2.0
  - Modern React features with hooks
  - Server components support
  - Concurrent rendering capabilities

### Language & Type Safety

- **TypeScript** 5.x
  - Strict mode enabled
  - Path aliases (`@/*` → `./src/*`)
  - Full type coverage

### Styling

- **SASS/SCSS** 1.94.2
  - Variables and mixins
  - BEM methodology
  - SMACSS architecture
  - CSS custom properties

### Testing

- **Jest** 30.2.0
  - Unit and integration testing
  - Snapshot testing support
  - Coverage reporting

- **React Testing Library** 16.3.0
  - Component testing with accessibility focus
  - User-centric testing approach
  - DOM query utilities

- **@testing-library/jest-dom** 6.9.1
  - Custom Jest matchers for DOM
  - Enhanced assertions

### Code Quality

- **ESLint** 9.x
  - Next.js recommended configuration
  - TypeScript support
  - React hooks rules

### Development Tools

- **Node.js** 18+ (required)
- **npm** (package manager)
- **Git** (version control)

### Build & Deployment

- **Vercel** (recommended deployment platform)
- **Docker** (optional containerization)

---

## 📜 Available Scripts

### Development

```bash
npm run dev          # Start development server (http://localhost:3000)
```

### Production

```bash
npm run build        # Create production build
npm start            # Start production server (after build)
```

### Testing

```bash
npm test             # Run all tests once
npm run test:watch   # Run tests in watch mode
npm run test:coverage  # Run tests with coverage report
```

### Code Quality

```bash
npm run lint         # Run ESLint to check for code issues
```

### Build Verification

```bash
# Verify production build locally
npm run build
npm start
# Visit http://localhost:3000
```

---

## 📁 Project Structure

```
critical-mass-example-project/
├── public/                          # Static assets
│   ├── images/                     # Image assets
│   │   └── hero-background.webp    # Hero background image
│   └── Steven_Morales_Critical_Mass_CV.pdf  # CV PDF
├── src/
│   ├── app/                        # Next.js App Router (pages)
│   │   ├── layout.tsx              # Root layout with font optimization and metadata
│   │   ├── page.tsx                # Home page (/)
│   │   ├── favicon.ico             # Site favicon
│   │   ├── this-project/
│   │   │   ├── page.tsx           # This Project page
│   │   │   └── ui-library/
│   │   │       └── page.tsx       # UI Library showcase
│   │   ├── curriculum/
│   │   │   └── page.tsx           # Professional Curriculum page
│   │   ├── cover-letter/
│   │   │   └── page.tsx           # Cover Letter page
│   │   └── contact/
│   │       └── page.tsx           # Contact page
│   ├── components/                 # React components
│   │   ├── ui/                     # UI components
│   │   │   ├── Button.tsx         # Button component (variants, sizes, states)
│   │   │   ├── Card.tsx           # Card component (variants, images, footer)
│   │   │   ├── Tag.tsx            # Tag component (variants, sizes)
│   │   │   ├── Badge.tsx          # Badge component (status indicators)
│   │   │   ├── Input.tsx          # Input component (validation, error states)
│   │   │   ├── Select.tsx         # Select component (dropdown)
│   │   │   ├── Toggle.tsx         # Toggle switch component
│   │   │   ├── FeatureCard.tsx    # Feature showcase card
│   │   │   ├── AnimatedGradientBackground.tsx  # Animated gradient
│   │   │   ├── FloatingBinaryElements.tsx      # Floating binary animation
│   │   │   └── ScrollArrow.tsx    # Scroll indicator arrow
│   │   ├── layout/                 # Layout components
│   │   │   ├── MainLayout.tsx     # Main layout wrapper
│   │   │   ├── NavBar.tsx         # Responsive navigation bar
│   │   │   └── Footer.tsx         # Footer component
│   │   ├── sections/               # Page sections
│   │   │   ├── Hero.tsx           # Hero section
│   │   │   ├── CardBoard.tsx      # Draggable card board
│   │   │   ├── FeatureGridSection.tsx  # Feature grid section
│   │   │   └── CTASection.tsx     # Call-to-action section
│   │   └── feedback/               # Feedback components
│   │       ├── Loader.tsx         # Loading spinner
│   │       ├── ErrorMessage.tsx   # Error display
│   │       └── Toast.tsx          # Toast notifications
│   ├── lib/
│   │   └── hooks/                  # Custom React hooks
│   │       ├── index.ts           # Hooks barrel export
│   │       ├── useClickOutside.ts # Click outside detection
│   │       ├── useDebounce.ts     # Debounce utility
│   │       ├── useDragAndDrop.ts  # Drag and drop functionality
│   │       ├── useFocusTrap.ts    # Focus trap for modals
│   │       ├── useLocalStorage.ts # Local storage hook
│   │       ├── useMediaQuery.ts   # Media query hook
│   │       ├── useToggle.ts       # Toggle state hook
│   │       └── useWindowSize.ts   # Window size hook
│   ├── styles/                     # SCSS styles (SMACSS architecture)
│   │   ├── base/                   # Base styles
│   │   │   ├── _variables.scss    # CSS variables (colors, spacing, typography)
│   │   │   ├── _mixins.scss       # SCSS mixins (breakpoints, flexbox, grid)
│   │   │   ├── _reset.scss        # CSS reset
│   │   │   ├── _typography.scss   # Typography system
│   │   │   ├── _layout.scss       # Layout utilities (container, grid)
│   │   │   └── _animations.scss   # Animation utilities
│   │   ├── components/            # Component styles (BEM methodology)
│   │   │   ├── _buttons.scss      # Button styles
│   │   │   ├── _cards.scss        # Card styles
│   │   │   ├── _tags.scss         # Tag styles
│   │   │   ├── _badges.scss       # Badge styles
│   │   │   ├── _inputs.scss       # Input styles
│   │   │   ├── _select.scss       # Select styles
│   │   │   ├── _toggles.scss      # Toggle styles
│   │   │   ├── _feature-card.scss # FeatureCard styles
│   │   │   ├── _navbar.scss       # NavBar styles
│   │   │   ├── _footer.scss       # Footer styles
│   │   │   ├── _hero.scss         # Hero section styles
│   │   │   ├── _card-board.scss   # CardBoard styles
│   │   │   ├── _feature-grid-section.scss  # FeatureGridSection styles
│   │   │   ├── _cta-section.scss   # CTASection styles
│   │   │   ├── _loader.scss       # Loader styles
│   │   │   ├── _error-message.scss # ErrorMessage styles
│   │   │   ├── _toast.scss        # Toast styles
│   │   │   └── ...                # Additional component styles
│   │   ├── pages/                 # Page-specific styles
│   │   │   ├── _home.scss         # Home page styles
│   │   │   ├── _this-project.scss # This Project page styles
│   │   │   ├── _curriculum.scss   # Curriculum page styles
│   │   │   ├── _cover-letter.scss # Cover Letter page styles
│   │   │   ├── _contact.scss      # Contact page styles
│   │   │   └── _components.scss   # UI Library page styles
│   │   └── main.scss              # Main SCSS import file
│   └── tests/                      # Test files
│       ├── setup.test.tsx         # Test setup verification
│       ├── components/             # Component tests
│       │   ├── ui/                # UI component tests
│       │   ├── layout/            # Layout component tests
│       │   ├── sections/          # Section component tests
│       │   └── feedback/          # Feedback component tests
│       └── utils/                 # Utility tests
│           └── bem-naming.test.ts # BEM naming verification
├── docs/                           # Documentation
│   ├── CONSIDERACIONES_DESARROLLO.md  # Development guidelines (Spanish)
│   ├── BEM_METHODOLOGY_GUIDE.md   # BEM methodology guide
│   ├── TESTING.md                 # Testing documentation
│   ├── TODO.md                    # Complete project checklist
│   ├── PROJECT-IDEA.md            # Project specifications
│   ├── PROJECT-CONTENT.md         # Content specifications
│   ├── JOB-INFO.md                # Job posting information
│   └── MY-PROFILE.md              # Professional profile
├── __mocks__/                      # Jest mocks
│   ├── fileMock.js                # File import mock
│   └── styleMock.js               # Style import mock
├── .gitignore                      # Git ignore rules
├── jest.config.js                  # Jest configuration
├── jest.setup.js                   # Jest setup file
├── jest.d.ts                       # Jest type definitions
├── next.config.ts                  # Next.js configuration
├── tsconfig.json                   # TypeScript configuration
├── eslint.config.mjs               # ESLint configuration
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Dependency lock file
├── LICENSE                         # License file
└── README.md                       # This file
```

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.0.0 or higher ([Download](https://nodejs.org/))
- **npm** 9.0.0 or higher (comes with Node.js)
- **Git** (for version control)

**Recommended:**
- **VS Code** with extensions:
  - ESLint
  - Prettier
  - SCSS IntelliSense
  - TypeScript and JavaScript Language Features

### Installation

1. **Clone the repository** (or download the project):

```bash
git clone <repository-url>
cd critical-mass-example-project
```

2. **Install dependencies**:

```bash
npm install
```

This will install all required dependencies including:
- Next.js and React
- TypeScript and type definitions
- SASS for styling
- Jest and React Testing Library for testing
- ESLint for code quality

3. **Verify installation**:

```bash
npm run build
```

If the build completes successfully, you're ready to start development.

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

**Development Features:**
- Hot module replacement (HMR)
- Fast refresh for React components
- TypeScript type checking
- ESLint warnings in terminal
- Source maps for debugging

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This will:
- Compile TypeScript
- Optimize images
- Minify CSS and JavaScript
- Generate static pages where possible
- Remove console logs (except errors/warnings)
- Create optimized bundles

**Build Output:**
- `.next/` directory contains the production build
- Build statistics and optimization info displayed

### Start Production Server

After building, test the production build locally:

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to see the production build.

**Note:** The production server runs on port 3000 by default. Use `PORT=3001 npm start` to use a different port.

### Testing

#### Run All Tests

```bash
npm test
```

Runs all test files once and displays results.

#### Watch Mode

```bash
npm run test:watch
```

Runs tests in watch mode, re-running tests when files change.

#### Coverage Report

```bash
npm run test:coverage
```

Generates a coverage report showing:
- Statement coverage
- Branch coverage
- Function coverage
- Line coverage

Coverage report is saved to `coverage/` directory.

### Code Quality

#### Linting

```bash
npm run lint
```

Runs ESLint to check for:
- Code quality issues
- Best practices violations
- Potential bugs
- Style inconsistencies

**Fix auto-fixable issues:**

```bash
npm run lint -- --fix
```

### First-Time Setup Checklist

- [ ] Node.js 18+ installed
- [ ] Dependencies installed (`npm install`)
- [ ] Development server runs (`npm run dev`)
- [ ] Production build succeeds (`npm run build`)
- [ ] Tests pass (`npm test`)
- [ ] ESLint passes (`npm run lint`)

---

## 📄 Pages

The application includes the following pages:

### `/` – Home

Professional portfolio landing page showcasing:

- **Hero Section** – Professional introduction with key identity
- **Role Focus** – Developer, Front End @ Critical Mass (6 focus areas with draggable cards)
- **Key Highlights** – What I bring to Critical Mass (6 highlights)
- **Primary Call To Action** – Directing to This Project page

### `/this-project` – This Project

Focused breakdown of how this portfolio matches the Critical Mass role:

- **Project Overview** – 15 draggable cards covering all project aspects
- **Design-to-Code Workflow** – Complete workflow from Figma to production (12 steps)
- **What You Can Review** – Links to live demo, GitHub repository, and UI Library

### `/this-project/ui-library` – UI Library

Complete component showcase demonstrating technical skills:

- **Button Component** – All variants (primary, secondary, ghost, highlight, exit), sizes, states, link buttons, accessibility
- **Card Component** – All variants (default, feature, content), images, footer, custom children
- **Tag & Badge Components** – Variants, sizes, usage examples
- **Form Elements** – Input, Select, Toggle with all states and accessibility features
- **Feedback Components** – Loader, ErrorMessage, Toast with variants and usage examples

### `/curriculum` – Professional Curriculum

Comprehensive professional curriculum page with:

- **Professional Summary** – Full Stack Software Engineer profile
- **Core Skills** – Technical skills organized by category (Languages, Databases, DevOps, Architecture, Soft Skills)
- **Professional Experience** – Detailed work history including Novaera, ZETA Academia, INFOCOOP, and TI Recursos CR
- **Project Highlights** – Featured projects with descriptions and technologies
- **Education** – Academic background and achievements
- **Languages** – Language proficiency
- **CV Download** – PDF download option

### `/cover-letter` – Cover Letter

Professional cover letter for the Critical Mass position:

- **Professional Experience** – Leadership roles and team management
- **Technical Expertise** – Front-end development skills and experience
- **Alignment with Role** – How experience matches Critical Mass requirements
- **Closing Statement** – Professional closing with quote

### `/contact` – Let's Build Something Great

Contact page with:

- **Contact Information** – Name, location, phone/WhatsApp, email
- **Online Profiles** – GitHub, LinkedIn, Instagram links

---

## 🎨 Design System

### Color Palette

- **Primary:** `#4B3FFF` (vibrant blue/violet) – `var(--color-primary)`
- **Secondary:** `#00D4B5` (soft turquoise) – `var(--color-secondary)`
- **Accent:** `#FFB347` (soft orange) – `var(--color-accent)`
- All colors defined in `src/styles/base/_variables.scss`

### Typography

- **Font:** Inter (via `next/font/google` for optimization)
- **Font sizes:** `--fs-xs` through `--fs-3xl` (scale defined in variables)
- **Font weights:** `--fw-normal`, `--fw-medium`, `--fw-bold`
- Typography system in `src/styles/base/_typography.scss`

### Spacing System

- **Spacing scale:** `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`
- All spacing uses variables from `src/styles/base/_variables.scss`

### Breakpoints (Mobile-First)

- `xs`: 320px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Breakpoints defined in `src/styles/base/_variables.scss` and used via mixins in `src/styles/base/_mixins.scss`.

---

## 🏗️ Architecture

### BEM Methodology (Mandatory)

All component styles follow **BEM (Block Element Modifier)** naming conventions:

- **Block:** `.btn`, `.card`, `.hero`
- **Element:** `.btn__text`, `.card__title`, `.hero__title`
- **Modifier:** `.btn--primary`, `.card--feature`, `.hero--large`

**Rules:**
- Use single hyphen for multi-word blocks: `.feature-card` (not `.featureCard`)
- Use double underscore for elements: `.hero__title` (not `.hero-title`)
- Use double hyphen for modifiers: `.button--primary` (not `.button-primary`)
- Never nest blocks inside blocks (avoid `.card .button`, use `.card__button`)
- Modifiers are independent: `.btn.btn--primary` (not just `.btn--primary`)

See [`docs/BEM_METHODOLOGY_GUIDE.md`](./docs/BEM_METHODOLOGY_GUIDE.md) for complete documentation.

### SMACSS Architecture

Styles are organized following **SMACSS (Scalable and Modular Architecture for CSS)** principles:

- **Base:** Reset, typography, variables, mixins (`styles/base/`)
- **Layout:** Container, grid, spacing utilities (`styles/base/_layout.scss`)
- **Components:** Individual component styles with BEM (`styles/components/`)
- **Pages:** Page-specific styles (`styles/pages/`)

### Component Structure

All components are:

- ✅ Built with **TypeScript** for type safety
- ✅ Styled with **SCSS using BEM methodology**
- ✅ Fully **accessible** (ARIA labels, keyboard navigation, focus states)
- ✅ **Responsive and mobile-first**
- ✅ Tested with **Jest and React Testing Library**

---

## ♿ Accessibility (WCAG-Compliant)

The project follows **WCAG accessibility guidelines** and Critical Mass requirements:

- ✅ **Semantic HTML** – `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- ✅ **Proper heading hierarchy** – One `<h1>` per page, correct h2 → h3 progression
- ✅ **ARIA attributes** – `role`, `aria-label`, `aria-describedby`, `aria-invalid`, `aria-current`
- ✅ **Keyboard navigation** – Full Tab, Enter, Space, Escape support
- ✅ **Visible focus states** – Using `focus-visible` mixin for all interactive elements
- ✅ **Form accessibility** – Labels with `htmlFor`, error associations, validation states
- ✅ **Image accessibility** – Descriptive `alt` text for important images, `alt=""` for decorative
- ✅ **Screen reader support** – Tested with NVDA/VoiceOver
- ✅ **Reduced motion support** – Respects user preferences

---

## ⚡ Performance

Performance optimizations implemented:

- ✅ **Font optimization** – Via `next/font/google` (Inter, Roboto Mono)
- ✅ **Image optimization** – Using `next/image` for all images
- ✅ **Code splitting** – Automatic with Next.js App Router
- ✅ **Lazy loading** – Images with `loading="lazy"` for non-critical content
- ✅ **CSS variables** – Efficient styling with CSS custom properties
- ✅ **Mobile-first approach** – Reduces unnecessary CSS
- ✅ **Production build optimizations** – Next.js automatic optimizations

---

## 🧪 Testing

The project includes comprehensive tests:

- **Component rendering tests** – Button, Card, and other UI components
- **BEM naming verification** – Automated checks for BEM compliance
- **Responsive behavior tests** – Breakpoint verification
- **Accessibility tests** – Keyboard navigation, ARIA attributes
- **User interaction tests** – Click handlers, form submissions

Test files are located in `src/tests/` and `src/__tests__/`.

See [`docs/TESTING.md`](./docs/TESTING.md) for detailed testing documentation.

---

## 📦 Components

### UI Components

- **Button** – Multiple variants (primary, secondary, ghost, highlight, exit), sizes, states, link buttons
- **Card** – Flexible card component with variants (default, feature, content)
- **Tag** – Categorization tags with variants and sizes
- **Badge** – Status indicators (Live, Upcoming, Draft)
- **Input** – Form input with label, error states, validation
- **Select** – Dropdown select with accessibility support
- **Toggle** – Toggle switch component
- **FeatureCard** – Feature showcase card component
- **AnimatedGradientBackground** – Animated gradient background component
- **FloatingBinaryElements** – Floating binary elements animation component
- **ScrollArrow** – Scroll indicator arrow component

### Feedback Components

- **Loader** – Loading spinner with optional text
- **ErrorMessage** – Error display with optional retry button
- **Toast** – Toast notifications with variants and auto-dismiss

### Layout Components

- **MainLayout** – Main layout wrapper with semantic HTML structure (`<header>`, `<main>`, `<footer>`)
- **NavBar** – Responsive navigation bar with:
  - Mobile hamburger menu with smooth animations
  - Active state indication with visual indicators
  - Keyboard navigation support (Tab, Enter, Space, Escape)
  - Focus management for mobile menu
  - Fixed positioning with proper spacing compensation
- **Footer** – Footer component with social links and contact information

### Section Components

- **Hero** – Professional hero section with background image support
- **CardBoard** – Draggable card board component with local storage persistence
- **FeatureGridSection** – Feature grid section for displaying highlights and features
- **CTASection** – Call-to-action section with buttons

---

## ✅ Development Standards

### Code Quality Checklist

Before submitting code, verify:

- [ ] ✅ Follows **BEM methodology** correctly
- [ ] ✅ Uses **variables and mixins** from design system (no hardcoded values)
- [ ] ✅ **Mobile-first** and responsive across all breakpoints
- [ ] ✅ **HTML semantic** structure correct
- [ ] ✅ **Accessibility complete** (ARIA, labels, focus, keyboard nav)
- [ ] ✅ Uses **`next/image`** for images
- [ ] ✅ **TypeScript** without errors
- [ ] ✅ No **hardcoded values** (colors, spacing)
- [ ] ✅ No **`!important`** unless strictly necessary
- [ ] ✅ Component is **reusable and well-documented**
- [ ] ✅ Styles imported correctly in `main.scss`
- [ ] ✅ No **console.logs** or debug code
- [ ] ✅ No **unnecessary comments** (only when really needed)
- [ ] ✅ Code is **clean and well-organized**
- [ ] ✅ Follows exact specifications from `docs/PROJECT-IDEA.md` and `docs/PROJECT-CONTENT.md`
- [ ] ✅ Verified against `docs/TODO.md` for current status

### SCSS/Styles Standards

- **Always** use variables from `_variables.scss` for colors, spacing, typography
- **Always** use mixins from `_mixins.scss` for breakpoints, flexbox, grid, transitions
- **Always** follow mobile-first approach (base styles for mobile, then breakpoints)
- **Never** use hardcoded values (colors, spacing, etc.)
- **Never** use `!important` unless strictly necessary (prefer specificity and BEM)
- Import styles in `main.scss` following correct order

### TypeScript Standards

- **Always** define interfaces for component props
- Use strict types, avoid `any`
- Document complex props with JSDoc when necessary

### Comment Policy

- **Never** add unnecessary or redundant comments
- **Only** use comments when really necessary (complex logic, non-obvious design decisions)
- Code should be **self-explanatory** through descriptive names

See [`docs/CONSIDERACIONES_DESARROLLO.md`](./docs/CONSIDERACIONES_DESARROLLO.md) for complete development guidelines.

---

## 🌐 Browser Support

This project is tested and supported in the following browsers:

- **Chrome** (latest 2 versions)
- **Firefox** (latest 2 versions)
- **Safari** (latest 2 versions)
- **Edge** (latest 2 versions)

### Mobile Browsers

- **iOS Safari** (latest 2 versions)
- **Chrome Mobile** (latest 2 versions)
- **Samsung Internet** (latest 2 versions)

### Features

- ✅ Modern CSS features (Grid, Flexbox, Custom Properties)
- ✅ ES6+ JavaScript features
- ✅ CSS animations and transitions
- ✅ Responsive images with `next/image`
- ✅ Font optimization with `next/font`

### Progressive Enhancement

The application uses progressive enhancement principles:
- Core functionality works without JavaScript
- Enhanced features require modern browser support
- Graceful degradation for older browsers

---

## ⚙️ Configuration

### Environment Variables

Currently, no environment variables are required for local development. If you need to add environment variables:

1. Create a `.env.local` file in the root directory
2. Add your variables following the format: `NEXT_PUBLIC_VARIABLE_NAME=value`
3. Access them in your code using `process.env.NEXT_PUBLIC_VARIABLE_NAME`

**Note:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser. Use regular variables for server-side only secrets.

### Next.js Configuration

The project uses `next.config.ts` with the following optimizations:

- **React Strict Mode** – Enabled for better development experience
- **Image Optimization** – AVIF and WebP formats with quality settings
- **Console Removal** – Automatic removal of console logs in production (except errors and warnings)
- **Performance Headers** – `poweredByHeader: false` and compression enabled
- **Package Optimization** – Optimized imports for testing libraries

### TypeScript Configuration

TypeScript is configured with strict mode enabled:
- **Strict Type Checking** – All strict flags enabled
- **Path Aliases** – `@/*` maps to `./src/*`
- **Module Resolution** – Bundler mode for Next.js compatibility

### Jest Configuration

Jest is configured for Next.js with:
- **JSDOM Environment** – For React component testing
- **Module Mapping** – CSS and image mocks
- **Path Aliases** – Matches TypeScript configuration
- **Coverage Collection** – Configured for all source files

---

## 🚀 Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. **Connect Repository**
   - Push your code to GitHub
   - Import project in Vercel dashboard
   - Vercel will auto-detect Next.js

2. **Build Settings**
   - Framework: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install`

3. **Environment Variables**
   - Add any required environment variables in Vercel dashboard
   - Variables are automatically available in production

4. **Deploy**
   - Vercel will automatically deploy on every push to main branch
   - Preview deployments for pull requests

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify** – Use Next.js build plugin
- **AWS Amplify** – Configure for Next.js
- **Railway** – Automatic Next.js detection
- **Render** – Use Node.js environment with Next.js build
- **Docker** – Build custom Docker image (see Dockerfile example below)

### Docker Deployment (Optional)

```dockerfile
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Build Verification

Before deploying, verify the production build:

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to test the production build locally.

---

## 🔧 Troubleshooting

### Common Issues

#### Port Already in Use

If port 3000 is already in use:

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:3000 | xargs kill -9
```

Or use a different port:

```bash
PORT=3001 npm run dev
```

#### Module Not Found Errors

Clear cache and reinstall:

```bash
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript Errors

Ensure TypeScript is properly configured:

```bash
npm run build
```

Check `tsconfig.json` for correct paths and includes.

#### SCSS Compilation Errors

Verify SASS is installed:

```bash
npm list sass
```

If missing, reinstall:

```bash
npm install --save-dev sass
```

#### Test Failures

Clear Jest cache:

```bash
npm test -- --clearCache
```

Verify test setup:

```bash
npm run test:watch
```

#### Build Errors

Check for:
- TypeScript errors: `npm run build`
- ESLint errors: `npm run lint`
- Missing dependencies: `npm install`
- Import path issues: Verify `tsconfig.json` paths

### Performance Issues

#### Slow Development Server

- Clear `.next` folder: `rm -rf .next`
- Restart development server
- Check for large dependencies

#### Large Bundle Size

- Run bundle analyzer: `npm install @next/bundle-analyzer`
- Check for unnecessary imports
- Use dynamic imports for large components

### Getting Help

1. Check the [Documentation](#-documentation) section
2. Review error messages carefully
3. Check browser console for runtime errors
4. Verify all dependencies are installed
5. Ensure Node.js version is 18 or higher

---

## 🎯 How This Maps to Critical Mass Job Requirements

| Requirement | Implementation |
|------------|----------------|
| **Translate designs to code** | Component system with BEM methodology, pixel-perfect implementation following Figma workflows |
| **Responsive & Mobile-first** | Mobile-first breakpoints, responsive grid utilities, tested across all devices |
| **Accessibility** | WCAG-compliant components, ARIA attributes, keyboard navigation, semantic HTML |
| **SASS/SCSS with BEM/SMACSS** | Complete SCSS architecture following BEM and SMACSS principles |
| **Design systems & reusable components** | Full component library with variants, sizes, and states (`/this-project/ui-library`) |
| **API integration** | API route structure ready, custom hooks, full-stack experience demonstrated |
| **Testing** | Jest + React Testing Library with comprehensive test coverage |
| **Performance** | Font optimization, image optimization, code splitting, lazy loading |
| **Version control** | Git workflow with descriptive commits |

---

## 📚 Documentation

### Essential Reading (Start Here)

1. **[`docs/CONSIDERACIONES_DESARROLLO.md`](./docs/CONSIDERACIONES_DESARROLLO.md)** ⭐ **START HERE**
   - Complete development guidelines and standards
   - Critical Mass requirements and compliance
   - Code quality checklist
   - SCSS/Styles standards
   - TypeScript standards
   - Comment policy
   - Language: Spanish

2. **[`docs/PROJECT-CONTENT.md`](./docs/PROJECT-CONTENT.md)** ⭐ **CONTENT SOURCE OF TRUTH**
   - Official copy and content specifications for all pages
   - Single source of truth for all text content
   - Page-by-page content breakdown
   - UI Library component documentation

### Architecture & Methodology

3. **[`docs/BEM_METHODOLOGY_GUIDE.md`](./docs/BEM_METHODOLOGY_GUIDE.md)**
   - Complete BEM methodology guide
   - Critical Mass compliance review
   - Naming conventions and rules
   - Examples and best practices

4. **[`docs/PROJECT-IDEA.md`](./docs/PROJECT-IDEA.md)**
   - Full project specifications
   - Architecture decisions
   - Requirements and constraints
   - Technical decisions

### Development & Testing

5. **[`docs/TESTING.md`](./docs/TESTING.md)**
   - Testing guide and best practices
   - Test structure and organization
   - Writing effective tests
   - Testing accessibility

6. **[`docs/TODO.md`](./docs/TODO.md)**
   - Complete project checklist with all phases
   - Development history
   - Task tracking
   - Completion status

### Professional Information

7. **[`docs/JOB-INFO.md`](./docs/JOB-INFO.md)**
   - Complete job posting information
   - Developer, Front End position at Critical Mass
   - Role description, responsibilities, requirements, and benefits
   - San Jose, Costa Rica location details

8. **[`docs/MY-PROFILE.md`](./docs/MY-PROFILE.md)**
   - Complete professional profile
   - Tech stack and expertise
   - Featured projects
   - Professional experience
   - CV summary

### Quick Reference

- **Development Guidelines:** [`docs/CONSIDERACIONES_DESARROLLO.md`](./docs/CONSIDERACIONES_DESARROLLO.md)
- **Content Specifications:** [`docs/PROJECT-CONTENT.md`](./docs/PROJECT-CONTENT.md)
- **BEM Guide:** [`docs/BEM_METHODOLOGY_GUIDE.md`](./docs/BEM_METHODOLOGY_GUIDE.md)
- **Testing Guide:** [`docs/TESTING.md`](./docs/TESTING.md)
- **Project Checklist:** [`docs/TODO.md`](./docs/TODO.md)

---

## 📈 Project Status

✅ **Complete and Production Ready**

### ✅ Completed Features

#### Foundation & Setup
- ✅ Project setup and configuration (Next.js 16, TypeScript, SASS)
- ✅ Testing infrastructure (Jest + React Testing Library)
- ✅ ESLint configuration and code quality standards
- ✅ Git repository setup and version control

#### Design System
- ✅ Complete design system foundation (SCSS variables, typography, mixins, layout utilities, animations)
- ✅ Color palette with CSS custom properties
- ✅ Typography system with Inter font optimization
- ✅ Spacing system and breakpoint definitions
- ✅ Animation system with reduced motion support

#### Components
- ✅ **UI Components** – Button, Card, Tag, Badge, Input, Select, Toggle, FeatureCard, AnimatedGradientBackground, FloatingBinaryElements, ScrollArrow
- ✅ **Feedback Components** – Loader, ErrorMessage, Toast
- ✅ **Layout Components** – MainLayout, NavBar (responsive with mobile menu), Footer
- ✅ **Section Components** – Hero, CardBoard (draggable with persistence), FeatureGridSection, CTASection

#### Architecture & Standards
- ✅ BEM methodology implementation (strict compliance)
- ✅ SMACSS architecture (Base, Layout, Components, Pages)
- ✅ TypeScript strict mode with proper type definitions
- ✅ Semantic HTML structure with proper ARIA landmarks
- ✅ Mobile-first responsive design across all breakpoints

#### Pages
- ✅ **Home page** (`/`) – Hero, Role Focus (draggable cards), Key Highlights, CTA sections
- ✅ **This Project page** (`/this-project`) – Project Overview (15 draggable cards), Design-to-Code Workflow (12 steps)
- ✅ **UI Library page** (`/this-project/ui-library`) – Complete component showcase with all variants and states
- ✅ **Curriculum page** (`/curriculum`) – Professional summary, skills, experience, projects, education, CV download
- ✅ **Cover Letter page** (`/cover-letter`) – Professional cover letter for Critical Mass position
- ✅ **Contact page** (`/contact`) – Contact information and online profiles

#### Functionality
- ✅ Custom React hooks (useClickOutside, useDebounce, useDragAndDrop, useFocusTrap, useLocalStorage, useMediaQuery, useToggle, useWindowSize)
- ✅ Responsive navigation with mobile hamburger menu
- ✅ Fixed navbar with proper spacing compensation
- ✅ Keyboard navigation and focus management
- ✅ Local storage persistence for user preferences

#### Quality Assurance
- ✅ Comprehensive test coverage (component, accessibility, integration tests)
- ✅ BEM naming verification tests
- ✅ Responsive behavior tests
- ✅ Accessibility audit and WCAG compliance
- ✅ Performance optimization (fonts, images, code splitting)
- ✅ Cross-browser testing (Chrome, Firefox, Safari, Edge)
- ✅ Production build verification

#### Documentation
- ✅ Complete README with all sections
- ✅ Development guidelines and standards
- ✅ BEM methodology guide
- ✅ Testing documentation
- ✅ Project content specifications
- ✅ Architecture documentation

#### Deployment
- ✅ Production build configuration
- ✅ Vercel deployment ready
- ✅ Environment configuration
- ✅ Build optimization

### 📊 Project Statistics

- **Total Components:** 20+
- **Total Pages:** 6
- **Custom Hooks:** 8
- **Test Files:** 15+
- **Lines of Code:** 10,000+
- **Documentation Files:** 7

### 🎯 Quality Metrics

- ✅ **Accessibility:** WCAG 2.1 AA compliant
- ✅ **Performance:** Optimized for Core Web Vitals
- ✅ **Test Coverage:** Comprehensive component and integration tests
- ✅ **Code Quality:** ESLint passing, TypeScript strict mode
- ✅ **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ **Responsive Design:** Mobile-first, tested across all breakpoints

See [`docs/TODO.md`](./docs/TODO.md) for complete development checklist and history.

---

## 🚀 Development Roadmap

**Note:** This project is complete. The roadmap below shows the phases that were completed during development.

See [`docs/TODO.md`](./docs/TODO.md) for the complete development checklist organized by phases:

1. **Foundation (Phases 1-4):** ✅ Project setup, design system, UI components, layout structure
2. **Content Pages (Phases 5-12):** ✅ Home, This Project, UI Library, Contact, Curriculum, Cover Letter
3. **Integration & Quality (Phases 13-16):** ✅ Navigation updates, style organization, content verification
4. **Optimization (Phases 17-19):** ✅ Accessibility, performance, testing implementation
5. **Finalization (Phases 20-24):** ✅ Git workflow, documentation, polish, deployment

All phases have been completed. The project is production-ready and deployed.

---

## 💡 Project Philosophy

This portfolio is a **professional demonstration** designed specifically for the **Developer, Front End position at Critical Mass (San Jose, Costa Rica)**. Every line of code reflects:

- **Technical Excellence** – Demonstrating real-world experience leading teams and building scalable applications
- **Attention to Detail** – Reflecting experience with production projects (ERP systems, EdTech platforms, SaaS applications)
- **Industry Standards Compliance** – Aligned with Critical Mass requirements and values
- **Accessibility and Performance Understanding** – Based on experience with applications serving 1,000+ users
- **Scalable and Maintainable Architecture** – Reflecting full-stack and technical leadership experience

**No shortcuts. No hardcoded values. No accessibility ignored. Mobile-first always. Clean, professional code.**

---

## 📝 License

Copyright (c) 2025 Steven Morales. All rights reserved.

This project is provided for evaluation purposes only. Permission is granted to view, use, and share this project with team members and technical staff solely for recruitment evaluation and technical assessment purposes.

See [`LICENSE`](./LICENSE) file for full terms and conditions.

---

## 🤝 Contact

**Steven Morales Fallas**

- **Location:** San José, Costa Rica
- **Phone / WhatsApp:** +506 6130 4830
- **Email:** fallasmoraless@gmail.com
- **GitHub:** [github.com/stevenmoraleszeta](https://github.com/stevenmoraleszeta)
- **LinkedIn:** [linkedin.com/in/stevenmoralesfallas](https://linkedin.com/in/stevenmoralesfallas)

---

**Built with attention to detail, following industry best practices, and crafted specifically to demonstrate my skills and approach for the Critical Mass Front-End Developer position. 🚀**
