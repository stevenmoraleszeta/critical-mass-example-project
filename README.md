# Steven Morales – Professional Portfolio for Critical Mass

> **Full Stack Software Engineer · Tech Leader · Product-Focused Developer**  
> Costa Rica · Applying for **Developer, Front End – Critical Mass**

A professional portfolio prototype built to demonstrate front-end development skills and experience, specifically crafted for the **Critical Mass Front-End Developer** position in **Costa Rica**. This project showcases real-world expertise in translating designs to code, building scalable component systems, and delivering production-ready applications.

**Project developed in December 2025.**

---

## 📋 Project Context

This portfolio demonstrates my experience as a **Full Stack Developer and Tech Leader** with more than **3 years** building robust, scalable solutions. Currently serving as:

- **CEO & Lead Software Developer** at [Novaera](https://linkedin.com/in/stevenmoralesfallas) – Leading a team of **6+ developers** building intelligent and scalable digital solutions
- **CEO & Lead Tech Educator** at [ZETA Academia](https://zetaacademia.com/) – Leading a team of **4+ educators** empowering **1,000+ students**

Based in **Costa Rica**, ready to work from office **3+ days a week** as required by Critical Mass.

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

## 📚 Essential Reference Documents

**Before working on this project, read these files:**

1. **[`docs/TODO.md`](./docs/TODO.md)** – Complete project checklist with all phases and tasks
2. **[`docs/PROJECT-IDEA.md`](./docs/PROJECT-IDEA.md)** – Full project specifications, architecture, and requirements
3. **[`docs/PROJECT-CONTENT.md`](./docs/PROJECT-CONTENT.md)** – **Official copy and content specifications for all pages** (single source of truth)
4. **[`docs/BEM_METHODOLOGY_GUIDE.md`](./docs/BEM_METHODOLOGY_GUIDE.md)** – Complete BEM methodology guide and Critical Mass compliance review
5. **[`docs/JOB-INFO.md`](./docs/JOB-INFO.md)** – Complete job posting information for Developer, Front End position at Critical Mass (Costa Rica) – Role description, responsibilities, requirements, and benefits
6. **[`docs/MY-PROFILE.md`](./docs/MY-PROFILE.md)** – Complete professional profile, tech stack, featured projects, professional experience, and CV summary

---

## 🛠️ Tech Stack

- **Next.js** 16.0.7 (App Router) – Server components, optimized routing, automatic code splitting
- **React** 19.2.0 – Modern React features with hooks and server components
- **TypeScript** 5.x – Type safety and enhanced developer experience
- **SASS/SCSS** 1.94.2 – Advanced styling with variables, mixins, and BEM methodology
- **Jest** 30.2.0 – Unit and integration testing
- **React Testing Library** 16.3.0 – Component testing with accessibility focus
- **ESLint** 9.x – Code quality and consistency (configured with Next.js config)

---

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router (pages)
│   ├── layout.tsx           # Root layout with font optimization
│   ├── page.tsx             # Home page (/)
│   ├── this-project/
│   │   ├── page.tsx         # This Project page
│   │   └── ui-library/
│   │       └── page.tsx     # UI Library showcase
│   ├── contact/
│   │   └── page.tsx         # Contact page
│   ├── curriculum/
│   │   └── page.tsx         # Professional Curriculum page
│   └── cover-letter/
│       └── page.tsx         # Cover Letter page
├── components/              # React components
│   ├── ui/                  # UI components (Button, Card, Tag, Badge, Input, Select, Toggle)
│   ├── layout/              # Layout components (MainLayout, NavBar, Footer)
│   ├── sections/            # Page sections (Hero, CardBoard, KeyHighlightsSection, CTASection)
│   └── feedback/            # Feedback components (Loader, ErrorMessage, Toast)
├── lib/
│   ├── api/                 # API clients
│   └── hooks/               # Custom React hooks
├── styles/                  # SCSS styles (SMACSS architecture)
│   ├── base/                # Variables, mixins, reset, typography, layout
│   ├── components/          # Component styles (BEM methodology)
│   ├── pages/               # Page-specific styles
│   └── main.scss            # Main SCSS import file
├── tests/                   # Test files
│   ├── Button.test.tsx
│   ├── Card.test.tsx
│   └── ...
└── types/                   # TypeScript type definitions
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18 or higher
- **npm** (or yarn/pnpm)

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

### Run Tests

Run all tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Run tests with coverage:

```bash
npm run test:coverage
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

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
- **How This Portfolio Is Built for Critical Mass** – Technical implementation details
- **Design-to-Code Workflow** – Complete workflow from Figma to production
- **Accessibility, Performance & Responsiveness** – Implementation details
- **Tooling, Testing & Automation** – Development practices
- **What You Can Review** – Links to live demo, GitHub repository, and UI Library

### `/this-project/ui-library` – UI Library

Complete component showcase demonstrating technical skills:

- **Button Component** – All variants (primary, secondary, ghost), sizes, states, link buttons, accessibility
- **Card Component** – All variants (default, feature, content), images, footer, custom children
- **Tag & Badge Components** – Variants, sizes, usage examples
- **Form Elements** – Input, Select, Toggle with all states and accessibility features
- **Feedback Components** – Loader, ErrorMessage, Toast with variants and usage examples

### `/contact` – Let's Build Something Great

Contact page with:

- **Contact Information** – Name, location, phone/WhatsApp, email
- **Online Profiles** – GitHub, LinkedIn, Instagram links
- **Closing Message** – Professional closing with quote

### `/curriculum` – Professional Curriculum

Professional curriculum page showcasing:

- **CV Download** – PDF download of professional curriculum
- **Professional Experience** – Detailed work history and achievements
- **Education & Certifications** – Academic background and professional certifications

### `/cover-letter` – Cover Letter

Cover letter page with:

- **Personalized Cover Letter** – Tailored message for the Critical Mass position
- **Key Qualifications** – Highlighted skills and experience relevant to the role

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

- **Button** – Multiple variants (primary, secondary, ghost), sizes, states, link buttons
- **Card** – Flexible card component with variants (default, feature, content)
- **Tag** – Categorization tags with variants and sizes
- **Badge** – Status indicators (Live, Upcoming, Draft)
- **Input** – Form input with label, error states, validation
- **Select** – Dropdown select with accessibility support
- **Toggle** – Toggle switch component

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
- **KeyHighlightsSection** – Highlights showcase section
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

See [`docs/BEM_METHODOLOGY_GUIDE.md`](./docs/BEM_METHODOLOGY_GUIDE.md) for complete development guidelines.

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

- **[`docs/BEM_METHODOLOGY_GUIDE.md`](./docs/BEM_METHODOLOGY_GUIDE.md)** – Complete BEM methodology guide and Critical Mass compliance review
- **[`docs/TESTING.md`](./docs/TESTING.md)** – Testing guide and best practices
- **[`docs/TODO.md`](./docs/TODO.md)** – Complete project checklist with all phases
- **[`docs/PROJECT-IDEA.md`](./docs/PROJECT-IDEA.md)** – Full project specifications and requirements
- **[`docs/PROJECT-CONTENT.md`](./docs/PROJECT-CONTENT.md)** – **Official copy and content specifications for all pages** (single source of truth

---

## 📈 Project Status

🚧 **In Active Development**

### ✅ Completed

- Project setup and configuration
- Design system foundation (SCSS variables, typography, mixins, layout utilities)
- Core UI components (Button, Card, Tag, Badge, Input, Select, Toggle)
- Feedback components (Loader, ErrorMessage, Toast)
- Layout components (MainLayout, NavBar, Footer)
- Testing infrastructure (Jest + React Testing Library)
- BEM methodology implementation
- SMACSS architecture
- UI Library page (`/this-project/ui-library`)
- Semantic HTML structure with proper ARIA landmarks
- Responsive navigation with mobile menu
- Fixed navbar with proper spacing
- **Home page** – Complete with Hero, Role Focus, Key Highlights, and CTA sections
- **This Project page** – Complete with Project Overview and Design-to-Code Workflow sections

### ⏳ In Progress

- Contact page (`/contact`)
- Additional sections for This Project page (How This Portfolio Is Built, Accessibility/Performance, Tooling/Testing)
- Additional testing coverage

See [`docs/TODO.md`](./docs/TODO.md) for complete development checklist.

---

## 🚀 Development Roadmap

See [`TODO.md`](./TODO.md) for the complete development checklist organized by phases:

1. **Foundation (Phases 1-4):** Project setup, design system, UI components, layout structure
2. **Content Pages (Phases 5-12):** Home, This Project, UI Library, Contact
3. **Integration & Quality (Phases 13-16):** Navigation updates, style organization, content verification
4. **Optimization (Phases 17-19):** Accessibility, performance, testing implementation
5. **Finalization (Phases 20-24):** Git workflow, documentation, polish, deployment

---

## 💡 Project Philosophy

This portfolio is a **professional demonstration** designed specifically for the **Developer, Front End position at Critical Mass (Costa Rica)**. Every line of code reflects:

- **Technical Excellence** – Demonstrating real-world experience leading teams and building scalable applications
- **Attention to Detail** – Reflecting experience with production projects (ERP systems, EdTech platforms, SaaS applications)
- **Industry Standards Compliance** – Aligned with Critical Mass requirements and values
- **Accessibility and Performance Understanding** – Based on experience with applications serving 1,000+ users
- **Scalable and Maintainable Architecture** – Reflecting full-stack and technical leadership experience

**No shortcuts. No hardcoded values. No accessibility ignored. Mobile-first always. Clean, professional code.**

---

## 📝 License

Copyright (c) 2025 Steven Morales. All rights reserved.

**Project developed in December 2025.**

This project is provided for evaluation purposes only. Permission is granted to view, use, and share this project with team members and technical staff solely for recruitment evaluation and technical assessment purposes.

See [`LICENSE`](./LICENSE) file for full terms and conditions.

---

## 🤝 Contact

**Steven Morales Fallas**

- **Location:** Costa Rica
- **Phone / WhatsApp:** +506 6130 4830
- **Email:** fallasmoraless@gmail.com
- **GitHub:** [github.com/stevenmoraleszeta](https://github.com/stevenmoraleszeta)
- **LinkedIn:** [linkedin.com/in/stevenmoralesfallas](https://linkedin.com/in/stevenmoralesfallas)
- **Instagram:** [@stevenmorales.novaera](https://instagram.com/stevenmorales.novaera)

---

**Built with attention to detail, following industry best practices, and crafted specifically to demonstrate my skills and approach for the Critical Mass Front-End Developer position. 🚀**
