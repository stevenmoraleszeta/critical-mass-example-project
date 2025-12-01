# Steven Morales FE-01 – Front-End Experience Engine

A Next.js prototype project built to demonstrate front-end development skills, specifically crafted with the Critical Mass Front-End Developer role in mind.

## Project Status

🚧 **In Active Development** - Core foundation, UI components, and layout system complete. Landing page sections and content integration in progress.

### Current Progress

✅ **Completed:**

- Project setup and configuration
- Design system foundation (SCSS variables, typography, mixins, layout utilities)
- Core UI components (Button, Card, Tag, Badge, Input, Select, Toggle)
- Feedback components (Loader, ErrorMessage, Toast)
- Layout components (MainLayout, NavBar, Footer)
- Testing infrastructure (Jest + React Testing Library)
- BEM methodology implementation
- SMACSS architecture
- Component showcase page (`/components`)
- Semantic HTML structure with proper ARIA landmarks
- Responsive navigation with mobile menu
- Fixed navbar with proper spacing

⏳ **In Progress:**

- Landing page sections (Hero, Features, Specs, Use Cases, etc.)
- Content page with API integration
- About page content

## Tech Stack

- **Next.js** 16.0.5 (App Router)
- **React** 19.2.0
- **TypeScript** 5.x
- **SASS/SCSS** 1.94.2
- **Jest** 30.2.0
- **React Testing Library** 16.3.0
- **ESLint** 9.x (configured with Next.js config)

## Project Structure

```plaintext
.
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with font optimization
│   │   ├── page.tsx            # Landing page (/)
│   │   ├── components/
│   │   │   └── page.tsx        # Component showcase page (/components)
│   │   ├── content/
│   │   │   └── page.tsx        # Content page (/content)
│   │   ├── about/
│   │   │   └── page.tsx        # About page (/about)
│   │   └── globals.scss        # Main SCSS entry point
│   ├── components/
│   │   ├── ui/                 # UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Tag.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Select.tsx
│   │   │   └── Toggle.tsx
│   │   ├── feedback/          # Feedback components
│   │   │   ├── Loader.tsx
│   │   │   ├── ErrorMessage.tsx
│   │   │   └── Toast.tsx
│   │   ├── layout/             # Layout components
│   │   │   ├── MainLayout.tsx
│   │   │   ├── NavBar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/           # Page sections (in progress)
│   │   └── content/            # Content components (to be created)
│   ├── lib/
│   │   ├── api/               # API clients (to be created)
│   │   └── hooks/             # Custom hooks (to be created)
│   ├── styles/
│   │   ├── base/              # Base styles (SMACSS)
│   │   │   ├── _variables.scss
│   │   │   ├── _mixins.scss
│   │   │   ├── _reset.scss
│   │   │   ├── _typography.scss
│   │   │   └── _layout.scss
│   │   ├── components/        # Component styles (BEM)
│   │   │   ├── _buttons.scss
│   │   │   ├── _cards.scss
│   │   │   ├── _tags.scss
│   │   │   ├── _badges.scss
│   │   │   ├── _inputs.scss
│   │   │   ├── _selects.scss
│   │   │   ├── _toggles.scss
│   │   │   ├── _loader.scss
│   │   │   ├── _error-message.scss
│   │   │   ├── _toast.scss
│   │   │   ├── _navbar.scss
│   │   │   └── _footer.scss
│   │   ├── pages/             # Page-specific styles
│   │   │   └── _components.scss
│   │   └── main.scss          # Main SCSS import file
│   ├── tests/                 # Test files
│   │   ├── Button.test.tsx
│   │   ├── Card.test.tsx
│   │   ├── components.test.tsx
│   │   └── responsive.test.tsx
│   └── types/                # TypeScript types
├── public/
│   └── images/               # Static assets
├── BEM_METHODOLOGY_GUIDE.md  # BEM methodology documentation
├── TESTING.md                # Testing guide
├── TODO.md                   # Complete project checklist
├── project-idea.md           # Full project specifications
└── CONSIDERACIONES_DESARROLLO.md  # Development guidelines (Spanish)
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (or yarn/pnpm)

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

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

## Design System

### Color Palette

- **Primary:** `#4B3FFF` (vibrant blue/violet)
- **Secondary:** `#00D4B5` (soft turquoise)
- **Accent:** `#FFB347` (soft orange)
- Defined in `src/styles/base/_variables.scss`

### Typography

- Font: Inter (via `next/font/google` for optimization)
- Font size scale: `--fs-xs` through `--fs-3xl`
- Defined in `src/styles/base/_typography.scss`

### Spacing System

- Spacing scale: `--space-xs`, `--space-sm`, `--space-md`, `--space-lg`, `--space-xl`
- Defined in `src/styles/base/_variables.scss`

### Breakpoints (Mobile-First)

- `xs`: 320px
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Architecture

### BEM Methodology

All component styles follow BEM (Block Element Modifier) naming conventions:

- **Block:** `.btn`, `.card`, `.tag`
- **Element:** `.btn__text`, `.card__title`, `.tag__label`
- **Modifier:** `.btn--primary`, `.card--feature`, `.tag--sm`

See `BEM_METHODOLOGY_GUIDE.md` for detailed documentation.

### SMACSS Architecture

Styles are organized following SMACSS principles:

- **Base:** Reset, typography, variables, mixins
- **Layout:** Container, grid, spacing utilities
- **Components:** Individual component styles
- **Pages:** Page-specific styles

### Component Structure

All components are:

- Built with TypeScript for type safety
- Styled with SCSS using BEM methodology
- Fully accessible (ARIA labels, keyboard navigation, focus states)
- Responsive and mobile-first
- Tested with Jest and React Testing Library

## Components

### UI Components

- **Button** - Multiple variants (primary, secondary, ghost), sizes, and states
- **Card** - Flexible card component with variants (default, feature, content)
- **Tag** - Categorization tags with variants and sizes
- **Badge** - Status indicators (Live, Upcoming, Draft)
- **Input** - Form input with label, error states, and validation
- **Select** - Dropdown select with accessibility support
- **Toggle** - Toggle switch component

### Feedback Components

- **Loader** - Loading spinner with optional text
- **ErrorMessage** - Error display with optional retry button
- **Toast** - Toast notifications with variants and auto-dismiss

### Layout Components

- **MainLayout** - Main layout wrapper with semantic HTML structure (`<header>`, `<main>`, `<footer>`)
- **NavBar** - Responsive navigation bar with:
  - Mobile hamburger menu with smooth animations
  - Active state indication with visual indicators
  - Keyboard navigation support (Tab, Enter, Space, Escape)
  - Focus management for mobile menu
  - Fixed positioning with proper spacing compensation
  - Logo with hover effects
- **Footer** - Footer component with social links and contact information

## Pages

The application includes the following pages:

- **`/`** - Landing page (in progress - will include Hero, Features, Specs, Use Cases, etc.)
- **`/components`** - Component showcase page displaying all UI components with variants and states
- **`/content`** - Content page (in progress - will integrate with JSON API)
- **`/about`** - About page (in progress - project purpose and information)

All pages use the `MainLayout` component for consistent structure and navigation.

## Testing

The project includes comprehensive tests for:

- Component rendering
- BEM naming conventions
- Responsive behavior
- Accessibility features
- User interactions

Test files are located in `src/tests/` and `src/__tests__/`.

See `TESTING.md` for detailed testing documentation.

## Accessibility

The project follows WCAG accessibility guidelines and Critical Mass requirements:

- ✅ Semantic HTML (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- ✅ Proper heading hierarchy (one `<h1>` per page)
- ✅ ARIA labels and attributes (`role="banner"`, `role="main"`, `role="navigation"`, `role="contentinfo"`)
- ✅ Keyboard navigation support (Tab, Enter, Space, Escape)
- ✅ Visible focus states using `focus-visible` mixin
- ✅ Form labels and error associations (`htmlFor`, `aria-describedby`, `aria-invalid`)
- ✅ Alt text for images (descriptive for important images, empty for decorative)
- ✅ Active state indication in navigation (`aria-current="page"`)
- ✅ Mobile menu with proper focus management and keyboard shortcuts
- ✅ Reduced motion support for animations

## Performance

Performance optimizations implemented:

- ✅ Font optimization via `next/font/google`
- ✅ Image optimization ready (using `next/image`)
- ✅ Code splitting (automatic with Next.js)
- ✅ CSS variables for efficient styling
- ✅ Mobile-first approach reduces unnecessary CSS
- ✅ Production build optimizations

## Project Goals

This prototype demonstrates:

- ✅ Design-to-code translation
- ✅ Responsive, mobile-first development
- ✅ Accessibility best practices (WCAG compliance)
- ✅ Component system architecture (BEM + SMACSS)
- ✅ API integration capabilities (planned)
- ✅ Performance optimization
- ✅ Testing practices (Jest + RTL)

## Development Roadmap

See `TODO.md` for the complete development checklist and project phases.

### Current Phase

#### Phase 3: Core UI Components - ✅ Complete

- All core UI components implemented
- All feedback components implemented
- Component styles with BEM methodology
- Comprehensive testing

#### Phase 4: Layout Components - ✅ Complete

- MainLayout component with semantic HTML structure
- NavBar component with responsive mobile menu
- Footer component with social links and contact info
- All layout components styled with BEM methodology
- Proper ARIA landmarks and accessibility features
- Fixed navbar with responsive spacing

#### Next Phase: Phase 5: Landing Page Sections - ⏳ In Progress

- Hero section
- Features section
- Specs section
- Use Cases section
- Performance section
- Pricing section
- Testimonials section
- CTA section

## How This Maps to Critical Mass Job Requirements

| Requirement | Implementation |
|------------|----------------|
| **Translate designs to code** | Component system with BEM methodology, pixel-perfect implementation |
| **Responsive & Mobile-first** | Mobile-first breakpoints, responsive grid utilities, tested across devices |
| **Accessibility** | WCAG-compliant components, ARIA attributes, keyboard navigation, semantic HTML |
| **SASS/SCSS with BEM/SMACSS** | Complete SCSS architecture following BEM and SMACSS principles |
| **Design systems & reusable components** | Full component library with variants, sizes, and states |
| **API integration** | API route structure ready, custom hooks planned |
| **Testing** | Jest + React Testing Library with comprehensive test coverage |
| **Performance** | Font optimization, image optimization ready, code splitting |
| **Version control** | Git workflow with descriptive commits |

## Documentation

- **`BEM_METHODOLOGY_GUIDE.md`** - Complete BEM methodology guide and Critical Mass compliance review
- **`TESTING.md`** - Testing guide and best practices
- **`TODO.md`** - Complete project checklist with all phases
- **`project-idea.md`** - Full project specifications and requirements
- **`CONSIDERACIONES_DESARROLLO.md`** - Development guidelines and standards (Spanish)

## License

Copyright (c) 2025 Steven Morales. All rights reserved.

This project is provided for evaluation purposes only. Permission is granted to view, use, and share this project with team members and technical staff solely for recruitment evaluation and technical assessment purposes.

See `LICENSE` file for full terms and conditions.

---

**Built with attention to detail, following industry best practices, and crafted specifically for the Critical Mass Front-End Developer role.**
