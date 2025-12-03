'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/Button';
import CardBoard, { CardData } from '@/components/sections/CardBoard';

const projectOverviewCards: CardData[] = [
  {
    id: '1',
    title: 'Design-to-Code Translation',
    description: 'In this portfolio, I translated design concepts into standard-compliant HTML5, semantic CSS3, and responsive React/Next.js components. Every component was built from scratch following design specifications with pixel-perfect attention to detail.',
  },
  {
    id: '2',
    title: 'Cross-Browser & Mobile-First',
    description: 'This portfolio implements mobile-first CSS strategies using SCSS variables and mixins for responsive breakpoints. All components are tested and verified to work seamlessly across modern browsers (Chrome, Firefox, Safari, Edge) and devices.',
  },
  {
    id: '3',
    title: 'API Integration & Web Services',
    description: 'The projects page demonstrates API integration patterns with client-side data filtering and state management using React hooks. This showcases readiness to integrate with REST APIs, CMS systems, and handle JSON data structures as required.',
  },
  {
    id: '4',
    title: 'Modern Front-End Technologies',
    description: 'This portfolio is built with Next.js 14 App Router, React 19, TypeScript, and SASS/SCSS. The architecture uses modern patterns including server components, client components, and optimized image loading with next/image.',
  },
  {
    id: '5',
    title: 'Design Systems & Reusable Components',
    description: 'I built a complete reusable component library (Button, Card, Tag, Badge, Input, Select, etc.) following BEM methodology. All components are documented and showcased in the /this-project/ui-library page, demonstrating design system thinking and component reusability.',
  },
  {
    id: '6',
    title: 'Best Practices & Documentation',
    description: 'Throughout this project, I implemented industry best practices including BEM methodology, SMACSS architecture, and TypeScript for type safety. Code is well-documented with JSDoc comments and follows Next.js and React best practices.',
  },
  {
    id: '7',
    title: 'Testing & Quality Assurance',
    description: 'This portfolio includes unit tests using Jest and React Testing Library (visible in src/tests/). Tests validate component rendering, user interactions, and BEM naming conventions, demonstrating commitment to quality and maintainable code.',
  },
  {
    id: '8',
    title: 'Preprocessors & Automation',
    description: 'This project uses SASS/SCSS preprocessing with a comprehensive variable system, mixins for responsive breakpoints, and organized architecture (base, components, pages). Next.js handles bundling and optimization automatically, demonstrating understanding of build processes.',
  },
  {
    id: '9',
    title: 'Troubleshooting & Debugging',
    description: 'During development, I systematically resolved TypeScript type issues, SCSS compilation challenges, and React component lifecycle problems. This project demonstrates systematic debugging approaches using browser DevTools, ESLint, and TypeScript compiler feedback.',
  },
  {
    id: '10',
    title: 'Code Analysis & Optimization',
    description: 'I continuously optimized this portfolio by implementing code splitting with React.lazy, using next/image for optimized images, and following Next.js performance best practices. Code quality is maintained through ESLint, TypeScript strict mode, and consistent code organization.',
  },
  {
    id: '11',
    title: 'Performance & Scalability',
    description: 'This portfolio is optimized as a proof-of-concept prototype using Next.js automatic code splitting, lazy loading for non-critical components, optimized fonts with next/font, and efficient component architecture that scales as features are added.',
  },
  {
    id: '12',
    title: 'Modern Development Practices',
    description: 'This portfolio demonstrates Mobile First approach (all styles start mobile, then scale up), component-based architecture (React), and Object-Oriented principles in TypeScript interfaces and component composition patterns.',
  },
  {
    id: '13',
    title: 'Task Ownership & Communication',
    description: 'I owned this entire portfolio project from initial concept through deployment, making architectural decisions, implementing features, and ensuring quality. The organized project structure and clear component architecture demonstrate strong task ownership and planning.',
  },
  {
    id: '14',
    title: 'Version Control & Workflows',
    description: 'This project uses Git/GitHub with organized commit history and branch management. The repository structure follows best practices, and I\'m prepared to set up CI/CD pipelines with GitHub Actions for automated testing and deployment as needed.',
  },
  {
    id: '15',
    title: 'Autonomous & Team Leadership',
    description: 'This portfolio was developed independently through the complete design-to-deployment cycle, demonstrating self-sufficiency. Additionally, my experience leading teams of 6+ developers at Novaera and 4+ educators at ZETA Academia shows capability to work in collaborative environments.',
  },
];

export default function ThisProject() {
  return (
    <MainLayout>
      <main className="case-study-page">
        <div className="case-study-page__container">
          <section className="case-study-page__hero">
            <h1 className="case-study-page__title">This Project</h1>
            <p className="case-study-page__intro">
              This site is built as a <strong>portfolio prototype specifically for the Critical Mass Developer, Front End role</strong>, demonstrating front-end expertise, design-to-code translation, and modern web development practices.
            </p>
          </section>

          <CardBoard
            id="project-overview"
            title="Project Overview"
            cards={projectOverviewCards}
            draggable={false}
            className="project-overview"
          />

          <section className="case-study-page__section" id="workflow" aria-labelledby="workflow-title">
            <h2 id="workflow-title" className="case-study-page__section-title">Design-to-Code Workflow</h2>
            <p className="case-study-page__section-description">Typical workflow:</p>
            
            <ol className="case-study-page__workflow-list">
              <li className="case-study-page__workflow-item">
                <span className="case-study-page__workflow-number" aria-hidden="true">1</span>
                <div className="case-study-page__workflow-content">
                  <h3 className="case-study-page__workflow-step-title">Receive designs & specs</h3>
                  <p className="case-study-page__workflow-step-description">Figma, wireframes, UX notes.</p>
                </div>
              </li>
              <li className="case-study-page__workflow-item">
                <span className="case-study-page__workflow-number" aria-hidden="true">2</span>
                <div className="case-study-page__workflow-content">
                  <h3 className="case-study-page__workflow-step-title">Break into components</h3>
                  <p className="case-study-page__workflow-step-description">Pages, sections, UI blocks (cards, navbars, buttons, grids).</p>
                </div>
              </li>
              <li className="case-study-page__workflow-item">
                <span className="case-study-page__workflow-number" aria-hidden="true">3</span>
                <div className="case-study-page__workflow-content">
                  <h3 className="case-study-page__workflow-step-title">Define responsive behavior</h3>
                  <p className="case-study-page__workflow-step-description">For each breakpoint.</p>
                </div>
              </li>
              <li className="case-study-page__workflow-item">
                <span className="case-study-page__workflow-number" aria-hidden="true">4</span>
                <div className="case-study-page__workflow-content">
                  <h3 className="case-study-page__workflow-step-title">Implement semantic HTML</h3>
                  <p className="case-study-page__workflow-step-description">Accessible React/Next.js components.</p>
                </div>
              </li>
              <li className="case-study-page__workflow-item">
                <span className="case-study-page__workflow-number" aria-hidden="true">5</span>
                <div className="case-study-page__workflow-content">
                  <h3 className="case-study-page__workflow-step-title">Style with CSS/SCSS/SASS</h3>
                  <p className="case-study-page__workflow-step-description">Using variables, mixins, and BEM-like structure.</p>
                </div>
              </li>
              <li className="case-study-page__workflow-item">
                <span className="case-study-page__workflow-number" aria-hidden="true">6</span>
                <div className="case-study-page__workflow-content">
                  <h3 className="case-study-page__workflow-step-title">Integrate APIs</h3>
                  <p className="case-study-page__workflow-step-description">REST/JSON, occasionally SOAP, and manage local and global state.</p>
                </div>
              </li>
              <li className="case-study-page__workflow-item">
                <span className="case-study-page__workflow-number" aria-hidden="true">7</span>
                <div className="case-study-page__workflow-content">
                  <h3 className="case-study-page__workflow-step-title">Test accessibility & responsiveness</h3>
                  <p className="case-study-page__workflow-step-description">Keyboard navigation, contrast, screen sizes.</p>
                </div>
              </li>
              <li className="case-study-page__workflow-item">
                <span className="case-study-page__workflow-number" aria-hidden="true">8</span>
                <div className="case-study-page__workflow-content">
                  <h3 className="case-study-page__workflow-step-title">Review, test & iterate</h3>
                  <p className="case-study-page__workflow-step-description">Quality assurance, performance optimization, and iterative refinement to meet production standards.</p>
                </div>
              </li>
            </ol>
          </section>

          <section className="case-study-page__section case-study-page__section--cta" id="review" aria-labelledby="review-title">
            <h2 id="review-title" className="case-study-page__section-title">What You Can Review</h2>
            <p className="case-study-page__section-description">
              From this page, link to:
            </p>
            
            <div className="case-study-page__review-actions">
              <a
                href="https://stevenmorales.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-page__review-link"
                aria-label="View live demo of portfolio site"
              >
                <Button variant="highlight" size="lg">
                  View Live Demo
                </Button>
              </a>
              
              <a
                href="https://github.com/stevenmoraleszeta/critical-mass-example-project"
                target="_blank"
                rel="noopener noreferrer"
                className="case-study-page__review-link"
                aria-label="View GitHub repository with front-end structure, styles, tests and CI config"
              >
                <Button variant="primary" size="lg">
                  View GitHub Repository
                </Button>
              </a>
              
              <Button
                variant="secondary"
                size="lg"
                href="/this-project/ui-library"
                ariaLabel="View UI library page with component showcase"
              >
                UI Library
              </Button>
            </div>
          </section>
        </div>
      </main>
    </MainLayout>
  );
}
