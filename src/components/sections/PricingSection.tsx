'use client';

import React from 'react';

/**
 * Pricing Section Component
 * 
 * Main pricing section for the landing page. Displays availability and pricing
 * information with a playful but professional tone.
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
 * Pricing Section Implementation
 * 
 * Features:
 * - Centered layout with max-width container
 * - Responsive typography
 * - Accessible semantic structure
 * - Copy from project-idea.md section 3.6
 */
export default function PricingSection() {
  // Pricing copy from project-idea.md section 3.1.7 and 3.6
  const sectionTitle = "Availability & Pricing";
  const mainCopy = "Available for full-time integration into your team. Salary expectations available upon request. Refunds not available, but continuous improvement is included by default.";

  return (
    <section className="pricing" id="pricing" aria-labelledby="pricing-title">
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

