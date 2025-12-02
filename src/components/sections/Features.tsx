'use client';

import React from 'react';
import FeatureCard from '@/components/ui/FeatureCard';

/**
 * Features Section Component
 * 
 * Main features section for the landing page. Displays core features
 * as product capabilities in a grid layout.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <Features />
 * ```
 */

/**
 * Features Section Implementation
 * 
 * Features:
 * - Grid layout (responsive)
 * - 4 feature cards
 * - Smooth scroll anchor support
 */
export default function Features() {
  // Icon components (inline SVG for simplicity)
  const DesignIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="16" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="2" />
    </svg>
  );

  const ResponsiveIcon = () => (
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
    </svg>
  );

  const APIIcon = () => (
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
    </svg>
  );

  const AccessibilityIcon = () => (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
      <path
        d="M12 40 Q12 28 24 28 Q36 28 36 40"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <circle cx="24" cy="20" r="2" fill="currentColor" />
    </svg>
  );

  return (
    <section className="features" id="features" aria-labelledby="features-title">
      <div className="features__container">
        <h2 id="features-title" className="features__title">
          Core Features
        </h2>
        
        <div className="features__grid">
          <FeatureCard
            icon={<DesignIcon />}
            title="Design-to-Code Translation"
            description="Converts Figma and wireframes into clean, semantic HTML/CSS and reusable React components."
          />
          
          <FeatureCard
            icon={<ResponsiveIcon />}
            title="Responsive & Mobile-First Layout Engine"
            description="Optimized for all breakpoints. Designed to behave nicely on phones your stakeholders actually use."
          />
          
          <FeatureCard
            icon={<APIIcon />}
            title="API Integration Module"
            description="Speaks fluent REST, JSON and HTTP. Comfortable integrating with CMSs and external web services."
          />
          
          <FeatureCard
            icon={<AccessibilityIcon />}
            title="Accessibility & Performance Optimizer"
            description="Focuses on semantic structure, keyboard navigation and fast load times. Because pretty is not enough."
          />
        </div>
      </div>
    </section>
  );
}

