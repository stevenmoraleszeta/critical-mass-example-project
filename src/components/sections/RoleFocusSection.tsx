'use client';

import React from 'react';
import FeatureCard from '@/components/ui/FeatureCard';

/**
 * Role Focus Section Component
 * 
 * Highlights the specific skills and approach aligned with the Critical Mass
 * Developer, Front End position requirements.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 */

export default function RoleFocusSection() {
  return (
    <section className="role-focus" id="role-focus" aria-labelledby="role-focus-title">
      <div className="role-focus__container">
        <h2 id="role-focus-title" className="role-focus__title">
          Role Focus: Developer, Front End @ Critical Mass
        </h2>
        
        <p className="role-focus__subtitle">
          This portfolio is intentionally designed as a <strong>live case study</strong> for the <strong>Developer, Front End</strong> position at Critical Mass:
        </p>
        
        <div className="role-focus__grid">
          <FeatureCard
            title="Design Translation"
            description="I translate Figma/wireframes into semantic HTML5, modern CSS3, and React/Next.js components."
          />
          
          <FeatureCard
            title="Responsive & Accessible"
            description="I build mobile-first layouts with accessibility best practices (WCAG mindset) and cross-browser support."
          />
          
          <FeatureCard
            title="API Integration"
            description="I work daily with REST APIs, JSON, HTTP, and have familiarity with SOAP and external services."
          />
          
          <FeatureCard
            title="Tooling"
            description="I use SASS/LESS, Gulp, Vite, GitHub Actions and modern bundlers to maintain efficient front-end pipelines."
          />
          
          <FeatureCard
            title="Collaboration"
            description="I coordinate with design, business, QA, and tech leads to deliver on time with quality."
          />
          
          <FeatureCard
            title="Ownership"
            description="I'm used to owning features end-to-end, providing time estimates, and communicating progress clearly."
          />
        </div>
      </div>
    </section>
  );
}
