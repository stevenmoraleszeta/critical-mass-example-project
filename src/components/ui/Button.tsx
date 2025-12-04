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
 * 
 * <Button variant="highlight" href="/file.pdf" download="file.pdf">
 *   Download File
 * </Button>
 * ```
 */

export interface ButtonProps {
  /** Button variant: primary, secondary, ghost, highlight, or exit */
  variant?: 'primary' | 'secondary' | 'ghost' | 'highlight' | 'exit';
  /** Button size: sm, md, or lg */
  size?: 'sm' | 'md' | 'lg';
  /** Button content */
  children: React.ReactNode;
  /** Optional href for link buttons (renders as Next.js Link for internal links, <a> for external) */
  href?: string;
  /** Target for external links (e.g., '_blank') */
  target?: string;
  /** Rel attribute for external links (e.g., 'noopener noreferrer') */
  rel?: string;
  /** Download attribute for links (forces download of the linked file) */
  download?: string | boolean;
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
  /** Enable prefetch for Next.js Link (default: true, only for internal links) */
  prefetch?: boolean;
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
  target,
  rel,
  download,
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  ariaLabel,
  className = '',
  prefetch = true,
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

  // Check if href is external (starts with http:// or https://)
  const isExternalLink = href && (href.startsWith('http://') || href.startsWith('https://'));
  
  // If download is specified, always render as <a> (not Next.js Link)
  const shouldUseNativeLink = download !== undefined || isExternalLink;

  // If href is provided, render as link (Next.js Link for internal, <a> for external or download)
  if (href && !disabled) {
    // External links or download links: render as <a>
    if (shouldUseNativeLink) {
      return (
        <a
          href={href}
          target={target || (isExternalLink ? '_blank' : undefined)}
          rel={rel || (isExternalLink ? 'noopener noreferrer' : undefined)}
          download={download}
          className={classNames}
          aria-label={ariaLabel}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          onClick={onClick}
        >
          {loading && <span className="btn__spinner" aria-hidden="true" />}
          <span className="btn__text">{children}</span>
        </a>
      );
    }
    
    // Internal links: render as Next.js Link
    return (
      <Link
        href={href}
        className={classNames}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        onClick={onClick}
        prefetch={prefetch}
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

