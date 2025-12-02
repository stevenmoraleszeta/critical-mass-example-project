'use client';

import React from 'react';
import StatCard from '@/components/ui/StatCard';

/**
 * Performance Section Component
 * 
 * Performance & Reliability section for the landing page. Displays
 * performance-focused stat cards and a detailed paragraph about
 * the approach to debugging and performance optimization.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <PerformanceSection />
 * ```
 */

/**
 * Performance Section Implementation
 * 
 * Features:
 * - Grid layout (responsive)
 * - 3 stat cards
 * - Performance paragraph
 */
export default function PerformanceSection() {
  return (
    <section className="performance" id="performance" aria-labelledby="performance-title">
      <div className="performance__container">
        <h2 id="performance-title" className="performance__title">
          Performance & Reliability
        </h2>
        
        <div className="performance__grid">
          <StatCard
            title="Lighthouse Focus"
            description="Focus on Lighthouse scores & perceived performance."
          />
          
          <StatCard
            title="Optimization Built-In"
            description="Works with lazy loading, image optimization and bundle awareness."
          />
          
          <StatCard
            title="Data-Driven Approach"
            description="Approach: profile, measure, then optimize – not guess."
          />
        </div>
        
        <div className="performance__paragraph">
          <p>
            I approach debugging with a systematic mindset: identify the root cause, not just the symptom. When working with teams, I provide clear progress updates and realistic estimates, ensuring transparency throughout the development process. I believe in measuring performance before optimizing, using tools like Lighthouse and browser DevTools to make informed decisions.
          </p>
        </div>
      </div>
    </section>
  );
}

