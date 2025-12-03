'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Card from '@/components/ui/Card';
import FeatureCard from '@/components/ui/FeatureCard';
import Button from '@/components/ui/Button';

export default function CriticalMassCaseStudy() {
  return (
    <MainLayout>
      <main className="case-study-page">
        <div className="case-study-page__container">
          <section className="case-study-page__hero">
            <h1 className="case-study-page__title">Critical Mass Portfolio Prototype</h1>
            <p className="case-study-page__intro">
              This site is built as a <strong>portfolio prototype specifically for the Critical Mass Developer, Front End role</strong>, demonstrating front-end expertise, design-to-code translation, and modern web development practices.
            </p>
          </section>

          <section className="case-study-page__section" id="project-overview" aria-labelledby="overview-title">
            <h2 id="overview-title" className="case-study-page__section-title">Project Overview</h2>
            <p className="case-study-page__section-description">
              This site is built as a <strong>portfolio prototype specifically for the Critical Mass Developer, Front End role</strong>, demonstrating front-end expertise, design-to-code translation, and modern web development practices. Built with <strong>Next.js 14, TypeScript, React, and SASS/SCSS</strong> following <strong>BEM methodology</strong> and <strong>mobile-first</strong> principles.
            </p>
            
            <div className="case-study-page__goals-grid">
              <Card 
                variant="default"
                title="Design-to-Code Translation"
                description="Demonstrate design-to-code translation using Figma → Next.js + SASS/SCSS."
              />
              <Card 
                variant="default"
                title="Responsive Architecture"
                description="Show responsive architecture, component-driven design, and accessibility best practices."
              />
              <Card 
                variant="default"
                title="API Integration & Tooling"
                description="Highlight API integration, state management, and front-end tooling (SASS, BEM, Vite/Gulp-style patterns)."
              />
              <Card 
                variant="default"
                title="End-to-End Development & Quality"
                description="Demonstrate ability to work through the complete development cycle—from design to deployment—with attention to code quality, maintainability, and documentation standards."
              />
            </div>
          </section>

          <section className="case-study-page__section" id="built-for-cm" aria-labelledby="built-title">
            <h2 id="built-title" className="case-study-page__section-title">How This Portfolio Is Built for Critical Mass</h2>
            <p className="case-study-page__section-description">
              This portfolio focuses on what Critical Mass values:
            </p>
            
            <div className="case-study-page__features-grid">
              <FeatureCard
                title="Figma to Front-End"
                description="Layouts and components designed to be pixel-conscious, flexible, and accessible."
              />
              <FeatureCard
                title="Design Systems"
                description="Components treated as reusable building blocks with well-structured SCSS and BEM-like class naming."
              />
              <FeatureCard
                title="Mobile First"
                description="Layouts are designed mobile-first, then scale up to tablet and desktop."
              />
              <FeatureCard
                title="Cross-Browser"
                description="Styles and layout decisions respect modern browser compatibility."
              />
            </div>
          </section>

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

          <section className="case-study-page__section" id="a11y-performance" aria-labelledby="a11y-title">
            <h2 id="a11y-title" className="case-study-page__section-title">Accessibility, Performance & Responsiveness</h2>
            
            <div className="case-study-page__pillars-grid">
              <div className="case-study-page__pillar">
                <h3 className="case-study-page__pillar-title">Accessibility</h3>
                <ul className="case-study-page__pillar-list">
                  <li className="case-study-page__pillar-item">Semantic HTML and ARIA attributes where needed.</li>
                  <li className="case-study-page__pillar-item">Focus management and keyboard navigation.</li>
                  <li className="case-study-page__pillar-item">Attention to color contrast, font sizes, and readable layouts.</li>
                </ul>
              </div>
              
              <div className="case-study-page__pillar">
                <h3 className="case-study-page__pillar-title">Performance</h3>
                <ul className="case-study-page__pillar-list">
                  <li className="case-study-page__pillar-item">Lean, reusable component architecture.</li>
                  <li className="case-study-page__pillar-item">Avoid unnecessary re-renders, heavy images, or blocking scripts.</li>
                  <li className="case-study-page__pillar-item">Efficient API usage and caching strategies where appropriate.</li>
                </ul>
              </div>
              
              <div className="case-study-page__pillar">
                <h3 className="case-study-page__pillar-title">Responsiveness</h3>
                <ul className="case-study-page__pillar-list">
                  <li className="case-study-page__pillar-item">Mobile-first CSS strategies.</li>
                  <li className="case-study-page__pillar-item">Layouts built with flexbox and CSS grid.</li>
                  <li className="case-study-page__pillar-item">Tested across multiple viewports and browsers.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="case-study-page__section" id="tooling" aria-labelledby="tooling-title">
            <h2 id="tooling-title" className="case-study-page__section-title">Tooling, Testing & Automation</h2>
            <p className="case-study-page__section-description">
              The portfolio and related projects showcase:
            </p>
            
            <div className="case-study-page__tooling-grid">
              <Card 
                variant="default"
                title="Preprocessors"
                description="SASS/SCSS & LESS for efficient and maintainable styling."
              />
              <Card 
                variant="default"
                title="Tooling"
                description="Gulp/Vite-style bundling and asset pipelines for optimized builds."
              />
              <Card 
                variant="default"
                title="Testing"
                description="React Testing Library & Jest for UI behavior and component tests."
              />
              <Card 
                variant="default"
                title="CI/CD"
                description="GitHub Actions for linting, tests, and basic deployment workflows."
              />
            </div>
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
                href="/projects"
                ariaLabel="View other case studies and projects"
              >
                Other Case Studies
              </Button>
            </div>
            
            <div className="case-study-page__review-details">
              <p className="case-study-page__review-text">
                The GitHub repository includes:
              </p>
              <ul className="case-study-page__review-list">
                <li className="case-study-page__review-item">Front-end structure (pages, components, hooks)</li>
                <li className="case-study-page__review-item">Styles (SASS/SCSS, BEM structure)</li>
                <li className="case-study-page__review-item">Tests and basic CI config</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </MainLayout>
  );
}

