'use client';

import React, { useEffect, useState } from 'react';

/**
 * Toast Component
 * 
 * A reusable toast notification component for displaying temporary messages.
 * Supports auto-dismiss, manual dismiss, and multiple variants.
 * 
 * @example
 * ```tsx
 * <Toast message="Operation successful" variant="success" />
 * 
 * <Toast 
 *   message="Error occurred" 
 *   variant="error"
 *   autoDismiss={false}
 *   onDismiss={() => console.log('dismissed')}
 * />
 * 
 * <Toast 
 *   message="Info message" 
 *   variant="info"
 *   duration={5000}
 *   position="top-right"
 * />
 * ```
 */

export interface ToastProps {
  /** Toast message to display */
  message: string;
  /** Toast variant: success, error, info, or warning */
  variant?: 'success' | 'error' | 'info' | 'warning';
  /** Toast size: sm, md, or lg */
  size?: 'sm' | 'md' | 'lg';
  /** Position of toast: top-right, top-left, bottom-right, bottom-left */
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  /** Auto-dismiss duration in milliseconds (default: 5000ms, 0 to disable) */
  duration?: number;
  /** Whether to show auto-dismiss (default: true) */
  autoDismiss?: boolean;
  /** Callback when toast is dismissed */
  onDismiss?: () => void;
  /** Custom action button (replaces close button if provided) */
  actionButton?: {
    label: string;
    onClick: () => void;
  };
  /** Additional CSS classes */
  className?: string;
}

/**
 * Toast Component Implementation
 * 
 * Displays a toast notification with optional auto-dismiss and manual dismiss.
 * Follows Critical Mass accessibility requirements:
 * - Semantic HTML with proper ARIA attributes
 * - Role="status" for non-critical notifications
 * - Role="alert" for critical notifications (error)
 * - Keyboard accessible dismiss button
 * - Focus management
 */
export default function Toast({
  message,
  variant = 'info',
  size = 'md',
  position = 'top-right',
  duration = 5000,
  autoDismiss = true,
  onDismiss,
  actionButton,
  className = '',
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Auto-dismiss functionality
  useEffect(() => {
    if (autoDismiss && duration > 0 && isVisible) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [autoDismiss, duration, isVisible]);

  // Handle dismiss with animation
  const handleDismiss = () => {
    setIsExiting(true);
    // Wait for exit animation before calling onDismiss
    setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 300); // Match animation duration
  };

  // Build BEM class names
  const baseClass = 'toast';
  const variantClass = `toast--${variant}`;
  const sizeClass = `toast--${size}`;
  const positionClass = `toast--${position}`;
  const exitingClass = isExiting ? 'toast--exiting' : '';
  
  const classNames = [
    baseClass,
    variantClass,
    sizeClass,
    positionClass,
    exitingClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  // Determine ARIA role based on variant
  const role = variant === 'error' ? 'alert' : 'status';
  const ariaLive = variant === 'error' ? 'assertive' : 'polite';

  // Get icon based on variant
  const getIcon = () => {
    switch (variant) {
      case 'success':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'error':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'warning':
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12" y1="10" x2="12" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="18" x2="12.01" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case 'info':
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={classNames}
      role={role}
      aria-live={ariaLive}
      aria-atomic="true"
      aria-label={`${variant} notification: ${message}`}
    >
      <div className="toast__header">
        <div className="toast__content">
          <div className="toast__icon" aria-hidden="true">
            {getIcon()}
          </div>
          <p className="toast__message">{message}</p>
        </div>
        <button
          className="toast__close"
          onClick={handleDismiss}
          aria-label="Close notification"
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {actionButton && (
        <div className="toast__footer">
          <button
            className="toast__action"
            onClick={actionButton.onClick}
            aria-label={actionButton.label}
            type="button"
          >
            {actionButton.label}
          </button>
        </div>
      )}
    </div>
  );
}

