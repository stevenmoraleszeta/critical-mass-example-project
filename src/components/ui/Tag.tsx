'use client';

import React from 'react';

/**
 * Tag Component
 * 
 * A reusable tag component for categorizing and labeling content.
 * Supports multiple variants and sizes with full accessibility.
 * 
 * @example
 * ```tsx
 * <Tag text="React" variant="primary" size="md" />
 * 
 * <Tag text="TypeScript" variant="secondary" size="sm" />
 * 
 * <Tag text="Next.js" variant="default" />
 * ```
 */

export interface TagProps {
  /** Tag text content */
  text: string;
  /** Tag variant: default, primary, or secondary */
  variant?: 'default' | 'primary' | 'secondary';
  /** Tag size: sm or md */
  size?: 'sm' | 'md';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Tag Component Implementation
 * 
 * Displays a tag with text content, supporting multiple variants and sizes.
 * Follows Critical Mass accessibility requirements:
 * - Semantic HTML (<span> for non-interactive tags)
 * - Proper color contrast
 * - Accessible to screen readers
 */
export default function Tag({
  text,
  variant = 'default',
  size = 'md',
  className = '',
}: TagProps) {
  // Build BEM class names
  const baseClass = 'tag';
  const variantClass = `tag--${variant}`;
  const sizeClass = `tag--${size}`;
  
  const classNames = [
    baseClass,
    variantClass,
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames}>
      {text}
    </span>
  );
}

