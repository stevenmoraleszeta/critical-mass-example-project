'use client';

import React from 'react';

/**
 * FeatureCard Component
 * 
 * A reusable card component specifically designed for displaying features.
 * Each card includes an icon, title, and description.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<article>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={<DesignIcon />}
 *   title="Design-to-Code Translation"
 *   description="Converts Figma and wireframes into clean, semantic HTML/CSS and reusable React components."
 * />
 * ```
 */

export interface FeatureCardProps {
  /** Optional icon element (SVG or React component) */
  icon?: React.ReactNode;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * FeatureCard Component Implementation
 * 
 * Features:
 * - Icon support (optional)
 * - Semantic HTML structure
 * - Accessible markup
 * - BEM class naming
 */
export default function FeatureCard({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) {
  // Build BEM class names
  const baseClass = 'feature-card';
  
  const classNames = [
    baseClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classNames}>
      {/* Icon Section */}
      {icon && (
        <div className="feature-card__icon" aria-hidden="true">
          {icon}
        </div>
      )}

      {/* Content Section */}
      <div className="feature-card__content">
        {/* Title */}
        <h3 className="feature-card__title">
          {title}
        </h3>

        {/* Description */}
        <p className="feature-card__description">
          {description}
        </p>
      </div>
    </article>
  );
}

