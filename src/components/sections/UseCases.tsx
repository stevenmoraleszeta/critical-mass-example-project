'use client';

import React from 'react';
import UseCaseCard from '@/components/ui/UseCaseCard';

/**
 * Use Cases Section Component
 * 
 * Use cases section for the landing page. Displays typical situations
 * where Steven FE-01 can help, in a card layout.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <UseCases />
 * ```
 */

/**
 * Use Cases Section Implementation
 * 
 * Features:
 * - Grid layout (responsive)
 * - 3 use case cards
 * - Question/answer format
 */
export default function UseCases() {
  return (
    <section className="use-cases" id="use-cases" aria-labelledby="use-cases-title">
      <div className="use-cases__container">
        <h2 id="use-cases-title" className="use-cases__title">
          Use Cases
        </h2>
        
        <div className="use-cases__grid">
          <UseCaseCard
            question="Need a pixel-perfect build from a Figma file?"
            answer="Steven FE-01 converts design tokens, grids and components into maintainable front-end architecture."
          />
          
          <UseCaseCard
            question="Need a component library your design team actually likes?"
            answer="Can build accessible, reusable components and document them clearly."
          />
          
          <UseCaseCard
            question="Need someone to debug that weird layout in Safari?"
            answer="Comfortable with cross-browser issues and digging into root causes instead of patching symptoms."
          />
        </div>
      </div>
    </section>
  );
}


