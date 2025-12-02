'use client';

import React from 'react';
import Button from '@/components/ui/Button';

/**
 * CTA Section Component
 * 
 * Primary call-to-action section for the landing page. Encourages visitors to
 * explore the Critical Mass Case Study page to see how the portfolio matches
 * the role requirements.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <CTASection />
 * ```
 */
export default function CTASection() {
  return (
    <section className="cta-section" id="cta" aria-labelledby="cta-title">
      <div className="cta-section__container">
        <h2 id="cta-title" className="cta-section__title">
          Want to see how I would work at Critical Mass?
        </h2>
        
        <p className="cta-section__description">
          Start with the <strong>"Critical Mass Case Study"</strong> page – it's a focused breakdown of how I match this role, backed by real code and projects.
        </p>
        
        <div className="cta-section__actions">
          <Button
            variant="highlight"
            size="lg"
            href="/critical-mass-case-study"
            ariaLabel="View Critical Mass Case Study"
          >
            Case Study
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            href="/projects"
            ariaLabel="View All Projects"
          >
            View Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

