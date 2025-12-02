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
  const DesignTranslationIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M16 16 L24 24 L32 16" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="16" y1="28" x2="32" y2="28" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="32" x2="28" y2="32" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const ResponsiveAccessibleIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="12" y="8" width="24" height="32" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <rect x="16" y="12" width="16" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="36" r="1.5" fill="currentColor" />
      <circle cx="18" cy="8" r="2" fill="currentColor" />
      <circle cx="30" cy="8" r="2" fill="currentColor" />
    </svg>
  );

  const APIIntegrationIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M24 8 L32 16 L24 24 L16 16 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M24 24 L32 32 L24 40 L16 32 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="24" cy="24" r="3" fill="currentColor" />
      <line x1="8" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="36" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const ToolingIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="12" y="12" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="16" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="30" x2="32" y2="30" stroke="currentColor" strokeWidth="2" />
      <circle cx="34" cy="14" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );

  const CollaborationIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="16" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="32" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M8 36 Q8 26 16 26 Q24 26 24 36"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M24 36 Q24 26 32 26 Q40 26 40 36"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <line x1="22" y1="22" x2="26" y2="22" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const OwnershipIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="12" y="10" width="24" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="16" y1="18" x2="32" y2="18" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="24" x2="32" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="30" x2="24" y2="30" stroke="currentColor" strokeWidth="2" />
      <circle cx="30" cy="30" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="28" y1="30" x2="32" y2="30" stroke="currentColor" strokeWidth="2" />
      <line x1="30" y1="28" x2="30" y2="32" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

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
            icon={<DesignTranslationIcon />}
            title="Design Translation"
            description="I translate Figma/wireframes into semantic HTML5, modern CSS3, and React/Next.js components."
          />
          
          <FeatureCard
            icon={<ResponsiveAccessibleIcon />}
            title="Responsive & Accessible"
            description="I build mobile-first layouts with accessibility best practices (WCAG mindset) and cross-browser support."
          />
          
          <FeatureCard
            icon={<APIIntegrationIcon />}
            title="API Integration"
            description="I work daily with REST APIs, JSON, HTTP, and have familiarity with SOAP and external services."
          />
          
          <FeatureCard
            icon={<ToolingIcon />}
            title="Tooling"
            description="I use SASS/LESS, Gulp, Vite, GitHub Actions and modern bundlers to maintain efficient front-end pipelines."
          />
          
          <FeatureCard
            icon={<CollaborationIcon />}
            title="Collaboration"
            description="I coordinate with design, business, QA, and tech leads to deliver on time with quality."
          />
          
          <FeatureCard
            icon={<OwnershipIcon />}
            title="Ownership"
            description="I'm used to owning features end-to-end, providing time estimates, and communicating progress clearly."
          />
        </div>
      </div>
    </section>
  );
}

