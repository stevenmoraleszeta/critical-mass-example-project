'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Button Component
 * 
 * A reusable button component with multiple variants, sizes, and states.
 * Supports both button and link functionality with full accessibility.
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click Me
 * </Button>
 * 
 * <Button variant="secondary" href="/about" size="lg">
 *   Go to About
 * </Button>
 * ```
 */

export interface ButtonProps {
  /** Button variant: primary, secondary, ghost, save, or exit */
  variant?: 'primary' | 'secondary' | 'ghost' | 'save' | 'exit';
  /** Button size: sm, md, or lg */
  size?: 'sm' | 'md' | 'lg';
  /** Button content */
  children: React.ReactNode;
  /** Optional href for link buttons (renders as Next.js Link) */
  href?: string;
  /** Click handler for button actions */
  onClick?: () => void;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state (optional) */
  loading?: boolean;
  /** Button type (for form buttons) */
  type?: 'button' | 'submit' | 'reset';
  /** ARIA label for accessibility (required for icon-only buttons) */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Button Component Implementation
 * 
 * Handles both button and link rendering based on href prop.
 * Follows Critical Mass accessibility requirements:
 * - Semantic HTML (<button> or <a>)
 * - ARIA labels support
 * - Keyboard navigation
 * - Focus states
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  ariaLabel,
  className = '',
}: ButtonProps) {
  // Build BEM class names
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const disabledClass = disabled ? 'btn--disabled' : '';
  const loadingClass = loading ? 'btn--loading' : '';
  
  const classNames = [
    baseClass,
    variantClass,
    sizeClass,
    disabledClass,
    loadingClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    // Allow Enter and Space to trigger click
    if ((e.key === 'Enter' || e.key === ' ') && !disabled && !loading && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  // If href is provided, render as Next.js Link
  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={classNames}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        onClick={onClick}
      >
        {loading && <span className="btn__spinner" aria-hidden="true" />}
        <span className="btn__text">{children}</span>
      </Link>
    );
  }

  // Otherwise, render as button
  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      <span className="btn__text">{children}</span>
    </button>
  );
}

