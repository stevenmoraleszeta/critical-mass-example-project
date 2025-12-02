'use client';

import React from 'react';
import UseCaseCard from '@/components/ui/UseCaseCard';

/**
 * Use Cases Section Component
 * 
 * Use cases section for the landing page. Displays real-world scenarios
 * and challenges I've successfully addressed in my projects.
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
 * - 3 use case cards based on real experience
 * - Question/answer format
 */
export default function UseCases() {
  return (
    <section className="use-cases" id="use-cases" aria-labelledby="use-cases-title">
      <div className="use-cases__container">
        <h2 id="use-cases-title" className="use-cases__title">
          Real-World Experience
        </h2>
        
        <div className="use-cases__grid">
          <UseCaseCard
            question="Need a pixel-perfect build from a Figma file?"
            answer="I've translated complex designs into production-ready code across multiple projects, including ERP systems and educational platforms. Built reusable component libraries that design teams love to work with."
          />
          
          <UseCaseCard
            question="Need scalable architecture for growing teams?"
            answer="Led development of modular SaaS ERP systems and EdTech platforms. Designed component systems that scale from prototypes to production applications serving 1,000+ users."
          />
          
          <UseCaseCard
            question="Need someone who understands both front-end and back-end?"
            answer="Full-stack experience building complete systems from database design to API development to responsive UIs. Comfortable with debugging, root cause analysis, and cross-browser compatibility."
          />
        </div>
      </div>
    </section>
  );
}




