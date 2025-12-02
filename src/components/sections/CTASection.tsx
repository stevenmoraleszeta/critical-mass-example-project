'use client';

import React from 'react';
import Button from '@/components/ui/Button';

/**
 * CTA Section Component
 * 
 * Final call-to-action section for the landing page. Encourages users to explore
 * components and view content in action with clear navigation buttons.
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
 * - Professional note about the prototype
 * - Centered layout with responsive design
 * - Accessible semantic structure
 */
export default function CTASection() {
  return (
    <section className="cta-section" id="cta" aria-labelledby="cta-title">
      <div className="cta-section__container">
        <h2 id="cta-title" className="cta-section__title">
          Ready to Explore?
        </h2>
        
        <div className="cta-section__actions">
          <Button
            variant="primary"
            size="lg"
            href="/components"
            ariaLabel="Explore Components"
          >
            Explore Components
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            href="/content"
            ariaLabel="View Content in Action"
          >
            View Content in Action
          </Button>
        </div>
        
        <p className="cta-section__note">
          This prototype was crafted specifically with the Critical Mass Front-End Developer role in mind.
        </p>
      </div>
    </section>
  );
}

