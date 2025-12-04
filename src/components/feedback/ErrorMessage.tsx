'use client';

import React from 'react';
import Button from '@/components/ui/Button';

export interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
  retryLabel?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function ErrorMessage({
  message,
  onRetry,
  retryLabel = 'Retry',
  size = 'md',
  className = '',
}: ErrorMessageProps) {
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
              variant="primary"
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

