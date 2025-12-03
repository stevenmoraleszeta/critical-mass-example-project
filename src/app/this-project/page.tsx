'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Button from '@/components/ui/Button';
import ProjectOverviewSection from '@/components/sections/ProjectOverviewSection';

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

          <ProjectOverviewSection />

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
