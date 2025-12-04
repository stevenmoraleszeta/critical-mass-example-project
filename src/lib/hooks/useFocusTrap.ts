import { useEffect, RefObject } from 'react';

export interface UseFocusTrapOptions {
  containerRef: RefObject<HTMLElement>;
  enabled?: boolean;
  initialFocusRef?: RefObject<HTMLElement>;
  returnFocusRef?: RefObject<HTMLElement>;
}

export function useFocusTrap({
  containerRef,
  enabled = true,
  initialFocusRef,
  returnFocusRef,
}: UseFocusTrapOptions): void {
  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    const container = containerRef.current;
    const previousActiveElement = document.activeElement as HTMLElement;

    const getFocusableElements = (): HTMLElement[] => {
      const selector = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ].join(', ');

      return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter(
        (el) => !el.hasAttribute('disabled') && el.offsetParent !== null
      );
    };

    const handleTab = (e: KeyboardEvent) => {
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
        const focusableElements = getFocusableElements();
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
      }
    };

    window.addEventListener('keydown', handleTab);
    document.addEventListener('focusin', handleFocusIn);

    if (initialFocusRef?.current) {
      setTimeout(() => {
        initialFocusRef.current?.focus();
      }, 100);
    } else {
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        setTimeout(() => {
          focusableElements[0].focus();
        }, 100);
      }
    }

    return () => {
      window.removeEventListener('keydown', handleTab);
      document.removeEventListener('focusin', handleFocusIn);

      if (returnFocusRef?.current && previousActiveElement) {
        returnFocusRef.current.focus();
      }
    };
  }, [enabled, containerRef, initialFocusRef, returnFocusRef]);
}

