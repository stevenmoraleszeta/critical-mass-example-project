import { useEffect, RefObject } from 'react';

export interface UseClickOutsideOptions {
  ref: RefObject<HTMLElement>;
  handler: (event: MouseEvent | TouchEvent) => void;
  enabled?: boolean;
  delay?: number;
}

export function useClickOutside({
  ref,
  handler,
  enabled = true,
  delay = 0,
}: UseClickOutsideOptions): void {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler(event);
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref, handler, enabled, delay]);
}

