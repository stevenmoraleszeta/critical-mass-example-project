'use client';

import { useEffect, useRef, RefObject } from 'react';

export interface UseFocusTrapOptions<T extends HTMLElement = HTMLElement> {
  ref: RefObject<T | null>;
  enabled?: boolean;
  onTrap?: () => void;
  onRelease?: () => void;
}

export function useFocusTrap<T extends HTMLElement = HTMLElement>({
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
          const style = window.getComputedStyle(el);
          return style.display !== 'none' && style.visibility !== 'hidden';
        });
    };

    const focusFirstElement = () => {
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
        onTrap?.();
      }
    };

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
        if (currentIndex <= 0 || document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (currentIndex >= focusableElements.length - 1 || document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (!container.contains(target)) {
        e.preventDefault();
        focusFirstElement();
      }
    };

    focusFirstElement();

    container.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);

    return () => {
      container.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
    };
  }, [ref, enabled, onTrap, onRelease]);
}

