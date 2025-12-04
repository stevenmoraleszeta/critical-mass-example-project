import { useEffect, RefObject } from 'react';

export interface UseClickOutsideOptions<T extends HTMLElement = HTMLElement> {
  ref: RefObject<T | null>;
  handler: (event: MouseEvent | TouchEvent) => void;
  enabled?: boolean;
  delay?: number;
}

export function useClickOutside<T extends HTMLElement = HTMLElement>({
  ref,
  handler,
  enabled = true,
  delay = 0,
}: UseClickOutsideOptions<T>): void {
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

