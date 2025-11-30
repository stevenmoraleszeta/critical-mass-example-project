'use client';

import React from 'react';

/**
 * Badge Component
 * 
 * A reusable badge component for displaying status information.
 * Supports three status types: live, upcoming, and draft with color coding.
 * 
 * @example
 * ```tsx
 * <Badge text="Live" status="live" />
 * 
 * <Badge text="Upcoming" status="upcoming" />
 * 
 * <Badge text="Draft" status="draft" />
 * ```
 */

export interface BadgeProps {
  /** Badge text content */
  text: string;
  /** Badge status: live, upcoming, or draft */
  status: 'live' | 'upcoming' | 'draft';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Badge Component Implementation
 * 
 * Displays a badge with text content and status-based color coding.
 * Follows Critical Mass accessibility requirements:
 * - Semantic HTML (<span> for non-interactive badges)
 * - Proper color contrast for each status
 * - Accessible to screen readers with status information
 */
export default function Badge({
  text,
  status,
  className = '',
}: BadgeProps) {
  // Build BEM class names
  const baseClass = 'badge';
  const statusClass = `badge--${status}`;
  
  const classNames = [
    baseClass,
    statusClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span 
      className={classNames}
      role="status"
      aria-label={`Status: ${status} - ${text}`}
    >
      {text}
    </span>
  );
}

