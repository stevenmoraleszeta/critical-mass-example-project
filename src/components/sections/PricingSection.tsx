'use client';

import React from 'react';

/**
 * Availability Section Component
 * 
 * Main availability section for the landing page. Displays professional availability
 * and contact information for the Critical Mass position.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <PricingSection />
 * ```
 */

/**
 * Availability Section Implementation
 * 
 * Features:
 * - Centered layout with max-width container
 * - Responsive typography
 * - Accessible semantic structure
 * - Professional availability messaging
 */
export default function PricingSection() {
  const sectionTitle = "Availability & Next Steps";
  const mainCopy = "I'm actively seeking a full-time Front-End Developer position at Critical Mass in San Jose, Costa Rica. I'm ready to bring my experience in leading teams, building scalable applications, and delivering high-quality code to your projects. Let's discuss how I can contribute to your team.";

  return (
    <section className="pricing" id="availability" aria-labelledby="pricing-title">
      <div className="pricing__container">
        <h2 id="pricing-title" className="pricing__title">
          {sectionTitle}
        </h2>
        
        <div className="pricing__content">
          <p className="pricing__copy">
            {mainCopy}
          </p>
        </div>
      </div>
    </section>
  );
}

