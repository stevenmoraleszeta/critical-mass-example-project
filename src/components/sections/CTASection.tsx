'use client';

import React from 'react';
import Button from '@/components/ui/Button';

/**
 * CTA Section Component
 * 
 * Final call-to-action section for the landing page. Encourages exploration of
 * portfolio components and demonstrates technical capabilities.
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

/**
 * CTA Section Implementation
 * 
 * Features:
 * - Two primary action buttons for navigation
 * - Professional note about the portfolio prototype
 * - Centered layout with responsive design
 * - Accessible semantic structure
 */
export default function CTASection() {
  return (
    <section className="cta-section" id="cta" aria-labelledby="cta-title">
      <div className="cta-section__container">
        <h2 id="cta-title" className="cta-section__title">
          Explore My Work
        </h2>
        
        <div className="cta-section__actions">
          <Button
            variant="primary"
            size="lg"
            href="/projects"
            ariaLabel="View All Projects"
          >
            View All Projects
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            href="/components-library"
            ariaLabel="Explore UI Library"
          >
            Explore UI Library
          </Button>
        </div>
        
        <p className="cta-section__note">
          This portfolio prototype was crafted specifically to demonstrate my skills and approach for the Critical Mass Front-End Developer position in San Jose, Costa Rica. Explore the UI Library to see the component system architecture.
        </p>
      </div>
    </section>
  );
}

