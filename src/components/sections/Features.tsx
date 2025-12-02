'use client';

import React from 'react';
import FeatureCard from '@/components/ui/FeatureCard';

/**
 * Features Section Component
 * 
 * Main features section for the landing page. Displays core skills and expertise
 * demonstrated through real projects and experience.
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
 * - 4 skill/experience cards
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
          Core Expertise
        </h2>
        
        <div className="features__grid">
          <FeatureCard
            icon={<DesignIcon />}
            title="Design-to-Code Translation"
            description="Expert at translating Figma designs and wireframes into clean, semantic HTML/CSS and reusable React components. Proven track record across multiple production projects."
          />
          
          <FeatureCard
            icon={<ResponsiveIcon />}
            title="Responsive & Mobile-First Development"
            description="Built responsive, mobile-first applications that work flawlessly across all devices. Experience leading teams to deliver pixel-perfect implementations."
          />
          
          <FeatureCard
            icon={<APIIcon />}
            title="Full-Stack Integration"
            description="Experienced with REST APIs, JSON, HTTP, and integrating with CMSs and third-party services. Built complete ERP systems with API-first architecture."
          />
          
          <FeatureCard
            icon={<AccessibilityIcon />}
            title="Accessibility & Performance"
            description="WCAG-compliant implementations with semantic HTML, keyboard navigation, and optimized performance. Built accessible platforms serving 1,000+ users."
          />
        </div>
      </div>
    </section>
  );
}

