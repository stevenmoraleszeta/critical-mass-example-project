'use client';

import React from 'react';

/**
 * Loader Component
 * 
 * A reusable loader component for displaying loading states.
 * Supports spinner loader with optional loading text.
 * 
 * @example
 * ```tsx
 * <Loader />
 * 
 * <Loader text="Loading content..." />
 * 
 * <Loader text="Please wait" size="lg" />
 * ```
 */

export interface LoaderProps {
  /** Loading text to display below spinner */
  text?: string;
  /** Loader size: sm, md, or lg */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Loader Component Implementation
 * 
 * Displays a spinner loader with optional text.
 * Follows Critical Mass accessibility requirements:
 * - ARIA live region for loading state
 * - Proper role and aria-label for screen readers
 * - Semantic HTML
 */
export default function Loader({
  text,
  size = 'md',
  className = '',
}: LoaderProps) {
  // Build BEM class names
  const baseClass = 'loader';
  const sizeClass = `loader--${size}`;
  
  const loaderClassNames = [
    baseClass,
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={loaderClassNames} role="status" aria-live="polite" aria-label={text || 'Loading'}>
      <div className="loader__spinner" aria-hidden="true">
        <span className="loader__spinner-circle"></span>
      </div>
      {text && (
        <p className="loader__text" aria-live="polite">
          {text}
        </p>
      )}
    </div>
  );
}

