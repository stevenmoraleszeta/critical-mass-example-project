'use client';

import React from 'react';
import Button from '@/components/ui/Button';

/**
 * ErrorMessage Component
 * 
 * A reusable error message component for displaying error states.
 * Supports error message display with optional retry button.
 * 
 * @example
 * ```tsx
 * <ErrorMessage message="Something went wrong" />
 * 
 * <ErrorMessage 
 *   message="Failed to load content" 
 *   onRetry={() => refetch()} 
 * />
 * 
 * <ErrorMessage 
 *   message="Network error" 
 *   onRetry={() => retry()} 
 *   retryLabel="Try Again"
 * />
 * ```
 */

export interface ErrorMessageProps {
  /** Error message to display */
  message: string;
  /** Optional retry button click handler */
  onRetry?: () => void;
  /** Optional custom label for retry button (default: "Retry") */
  retryLabel?: string;
  /** Error message size: sm, md, or lg */
  size?: 'sm' | 'md' | 'lg';
  /** Additional CSS classes */
  className?: string;
}

/**
 * ErrorMessage Component Implementation
 * 
 * Displays an error message with optional retry functionality.
 * Follows Critical Mass accessibility requirements:
 * - Semantic HTML with proper ARIA attributes
 * - Role="alert" for error announcements
 * - Proper heading hierarchy
 * - Keyboard accessible retry button
 */
export default function ErrorMessage({
  message,
  onRetry,
  retryLabel = 'Retry',
  size = 'md',
  className = '',
}: ErrorMessageProps) {
  // Build BEM class names
  const baseClass = 'error-message';
  const sizeClass = `error-message--${size}`;
  
  const classNames = [
    baseClass,
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={classNames}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="error-message__icon" aria-hidden="true">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <div className="error-message__content">
        <p className="error-message__text">{message}</p>
        {onRetry && (
          <div className="error-message__actions">
            <Button
              variant="highlight"
              size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}
              onClick={onRetry}
              aria-label={`${retryLabel}: ${message}`}
            >
              {retryLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

