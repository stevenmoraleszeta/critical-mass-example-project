# Steven Morales FE-01 – Front-End Experience Engine

A Next.js prototype project built to demonstrate front-end development skills, specifically crafted with the Critical Mass Front-End Developer role in mind.

## Project Status

🚧 **In Development** - Initial project setup complete. Active development in progress.

## Current Setup

This project has been initialized with the following foundation:

### Tech Stack

- **Next.js** 16.0.5 (App Router)
- **React** 19.2.0
- **TypeScript** 5.x
- **ESLint** 9.x (configured with Next.js config)

### Project Structure

```
steven-morales-portfolio/
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── globals.css
│       └── page.module.css
├── public/
├── next.config.ts
├── tsconfig.json
└── package.json
```

### Configuration

- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./src/*`)
- **ESLint**: Configured with Next.js recommended rules
- **Next.js Config**: Default configuration (ready for customization)

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm (or yarn/pnpm)

### Installation

```bash
cd steven-morales-portfolio
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

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## Project Goals

This prototype is being developed to demonstrate:

- Design-to-code translation
- Responsive, mobile-first development
- Accessibility best practices
- API integration capabilities
- Component system architecture
- Performance optimization
- Testing practices

## Development Roadmap

See `TODO.md` for the complete development checklist and project phases.

## License

Private project - All rights reserved.
