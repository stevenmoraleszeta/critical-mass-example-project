'use client';

import React from 'react';
import CardBoard, { CardData } from '@/components/sections/CardBoard';

/**
 * Project Overview Section Component
 * 
 * Displays the project overview goals using the same CardBoard component
 * as RoleFocusSection for consistent design and functionality.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 */

const projectOverviewCards: CardData[] = [
  {
    id: '1',
    title: 'Design-to-Code Translation',
    description: 'In this portfolio, I translated design concepts into standard-compliant HTML5, semantic CSS3, and responsive React/Next.js components. Every component was built from scratch following design specifications with pixel-perfect attention to detail.',
  },
  {
    id: '2',
    title: 'Autonomous & Team Leadership',
    description: 'This portfolio was developed independently through the complete design-to-deployment cycle, demonstrating self-sufficiency. Additionally, my experience leading teams of 6+ developers at Novaera and 4+ educators at ZETA Academia shows capability to work in collaborative environments.',
  },
  {
    id: '3',
    title: 'Cross-Browser & Mobile-First',
    description: 'This portfolio implements mobile-first CSS strategies using SCSS variables and mixins for responsive breakpoints. All components are tested and verified to work seamlessly across modern browsers (Chrome, Firefox, Safari, Edge) and devices.',
  },
  {
    id: '4',
    title: 'Best Practices & Documentation',
    description: 'Throughout this project, I implemented industry best practices including BEM methodology, SMACSS architecture, and TypeScript for type safety. Code is well-documented with JSDoc comments and follows Next.js and React best practices.',
  },
  {
    id: '5',
    title: 'Modern Front-End Technologies',
    description: 'This portfolio is built with Next.js 14 App Router, React 19, TypeScript, and SASS/SCSS. The architecture uses modern patterns including server components, client components, and optimized image loading with next/image.',
  },
  {
    id: '6',
    title: 'API Integration & Web Services',
    description: 'The projects page demonstrates API integration patterns with client-side data filtering and state management using React hooks. This showcases readiness to integrate with REST APIs, CMS systems, and handle JSON data structures as required.',
  },
  {
    id: '7',
    title: 'Preprocessors & Automation',
    description: 'This project uses SASS/SCSS preprocessing with a comprehensive variable system, mixins for responsive breakpoints, and organized architecture (base, components, pages). Next.js handles bundling and optimization automatically, demonstrating understanding of build processes.',
  },
  {
    id: '8',
    title: 'Troubleshooting & Debugging',
    description: 'During development, I systematically resolved TypeScript type issues, SCSS compilation challenges, and React component lifecycle problems. This project demonstrates systematic debugging approaches using browser DevTools, ESLint, and TypeScript compiler feedback.',
  },
  {
    id: '9',
    title: 'Code Analysis & Optimization',
    description: 'I continuously optimized this portfolio by implementing code splitting with React.lazy, using next/image for optimized images, and following Next.js performance best practices. Code quality is maintained through ESLint, TypeScript strict mode, and consistent code organization.',
  },
  {
    id: '10',
    title: 'Task Ownership & Communication',
    description: 'I owned this entire portfolio project from initial concept through deployment, making architectural decisions, implementing features, and ensuring quality. The organized project structure and clear component architecture demonstrate strong task ownership and planning.',
  },
  {
    id: '11',
    title: 'Testing & Quality Assurance',
    description: 'This portfolio includes unit tests using Jest and React Testing Library (visible in src/tests/). Tests validate component rendering, user interactions, and BEM naming conventions, demonstrating commitment to quality and maintainable code.',
  },
  {
    id: '12',
    title: 'Design Systems & Reusable Components',
    description: 'I built a complete reusable component library (Button, Card, Tag, Badge, Input, Select, etc.) following BEM methodology. All components are documented and showcased in the /this-project/ui-library page, demonstrating design system thinking and component reusability.',
  },
  {
    id: '13',
    title: 'Version Control & Workflows',
    description: 'This project uses Git/GitHub with organized commit history and branch management. The repository structure follows best practices, and I\'m prepared to set up CI/CD pipelines with GitHub Actions for automated testing and deployment as needed.',
  },
  {
    id: '14',
    title: 'Modern Development Practices',
    description: 'This portfolio demonstrates Mobile First approach (all styles start mobile, then scale up), component-based architecture (React), and Object-Oriented principles in TypeScript interfaces and component composition patterns.',
  },
  {
    id: '15',
    title: 'Performance & Scalability',
    description: 'This portfolio is optimized as a proof-of-concept prototype using Next.js automatic code splitting, lazy loading for non-critical components, optimized fonts with next/font, and efficient component architecture that scales as features are added.',
  },
  {
    id: '16',
    title: 'Full-Stack Exposure',
    description: 'While this portfolio focuses on front-end, my background includes full-stack experience (visible in /projects page) with databases, API design, and backend development. This demonstrates understanding of full application architecture and how front-end integrates with backend systems.',
  },
];

export default function ProjectOverviewSection() {
  return (
    <CardBoard
      id="project-overview"
      title="Project Overview"
      subtitle={
        <>
          This site is built as a <strong>portfolio prototype specifically for the Critical Mass Developer, Front End role</strong>, demonstrating front-end expertise, design-to-code translation, and modern web development practices.
        </>
      }
      cards={projectOverviewCards}
      draggable={false}
      className="project-overview"
    />
  );
}

