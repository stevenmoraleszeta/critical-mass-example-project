'use client';

import { useEffect, useRef, RefObject } from 'react';

/**
 * useFocusTrap Hook
 * 
 * Traps focus within a container element for accessibility.
 * Essential for modals, dialogs, and dropdowns to prevent focus from escaping.
 * 
 * Follows Critical Mass accessibility requirements:
 * - WCAG 2.1 Keyboard Navigation (2.1.2)
 * - Focus Management for Modal Dialogs
 * 
 * @example
 * ```tsx
 * const modalRef = useRef<HTMLDivElement>(null);
 * useFocusTrap({ ref: modalRef, enabled: isOpen });
 * ```
 */

export interface UseFocusTrapOptions {
  /** Ref to the container element that should trap focus */
  ref: RefObject<HTMLElement>;
  /** Whether the focus trap is enabled */
  enabled?: boolean;
  /** Optional callback when focus is trapped */
  onTrap?: () => void;
  /** Optional callback when focus trap is released */
  onRelease?: () => void;
}

/**
 * useFocusTrap Implementation
 * 
 * Traps keyboard focus within a container element.
 * When enabled, Tab and Shift+Tab will cycle through focusable elements
 * within the container, preventing focus from escaping.
 */
export function useFocusTrap({
  ref,
  enabled = true,
  onTrap,
  onRelease,
}: UseFocusTrapOptions): void {
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!enabled || !ref.current) {
      if (enabled === false && previousActiveElementRef.current) {
        previousActiveElementRef.current.focus();
        previousActiveElementRef.current = null;
        onRelease?.();
      }
      return;
    }

    const container = ref.current;
    previousActiveElementRef.current = document.activeElement as HTMLElement;

    // Get all focusable elements within the container
    const getFocusableElements = (): HTMLElement[] => {
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(', ');

      return Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors))
        .filter((el) => {
          // Filter out elements that are not visible
          const style = window.getComputedStyle(el);
          return style.display !== 'none' && style.visibility !== 'hidden';
        });
    };

    // Focus the first focusable element
    const focusFirstElement = () => {
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
        onTrap?.();
      }
    };

    // Handle Tab key to trap focus
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) {
        e.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement);

      if (e.shiftKey) {
        // Shift+Tab: navigate backwards
        if (currentIndex <= 0 || document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab: navigate forwards
        if (currentIndex >= focusableElements.length - 1 || document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    // Handle focus events to keep focus within container
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (!container.contains(target)) {
        e.preventDefault();
        focusFirstElement();
      }
    };

    // Focus first element when trap is activated
    focusFirstElement();

    // Add event listeners
    container.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [ref, enabled, onTrap, onRelease]);
}

