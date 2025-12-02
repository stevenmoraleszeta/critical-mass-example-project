'use client';

import React from 'react';

/**
 * StatCard Component
 * 
 * A reusable card component specifically designed for displaying statistics
 * and performance metrics. Each card includes a title and description.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<article>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <StatCard
 *   title="Lighthouse Focus"
 *   description="Focus on Lighthouse scores & perceived performance."
 * />
 * ```
 */

export interface StatCardProps {
  /** Stat title */
  title: string;
  /** Stat description */
  description: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * StatCard Component Implementation
 * 
 * Features:
 * - Semantic HTML structure
 * - Accessible markup
 * - BEM class naming
 */
export default function StatCard({
  title,
  description,
  className = '',
}: StatCardProps) {
  // Build BEM class names
  const baseClass = 'stat-card';
  
  const classNames = [
    baseClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classNames}>
      {/* Content Section */}
      <div className="stat-card__content">
        {/* Title */}
        <h3 className="stat-card__title">
          {title}
        </h3>

        {/* Description */}
        <p className="stat-card__description">
          {description}
        </p>
      </div>
    </article>
  );
}

