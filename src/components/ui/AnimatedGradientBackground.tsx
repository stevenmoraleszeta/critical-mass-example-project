'use client';

import React from 'react';

/**
 * AnimatedGradientBackground Component
 * 
 * Reusable animated gradient background component that can be used across
 * the entire project. Provides a smooth, animated gradient effect using
 * the project's color palette (accent, primary, secondary).
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (div with aria-hidden for decorative content)
 * - Full accessibility (respects prefers-reduced-motion)
 * - BEM methodology
 * - Mobile-first responsive design
 * 
 * @example
 * ```tsx
 * <section className="my-section">
 *   <AnimatedGradientBackground />
 *   <div className="my-section__content">
 *     Content here
 *   </div>
 * </section>
 * ```
 */
export interface AnimatedGradientBackgroundProps {
  /** Additional CSS classes */
  className?: string;
  /** Custom z-index value (default: 0) */
  zIndex?: number;
}

export default function AnimatedGradientBackground({
  className = '',
  zIndex = 0,
}: AnimatedGradientBackgroundProps) {
  return (
    <div
      className={`animated-gradient-background ${className}`}
      aria-hidden="true"
      style={{ zIndex }}
    />
  );
}

