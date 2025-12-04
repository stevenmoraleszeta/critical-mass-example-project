'use client';

import { useState, useEffect } from 'react';

/**
 * useDebounce Hook
 * 
 * Debounces a value, delaying updates until after a specified delay.
 * Useful for optimizing search inputs, API calls, and expensive computations.
 * 
 * @example
 * ```tsx
 * const [searchQuery, setSearchQuery] = useState('');
 * const debouncedQuery = useDebounce(searchQuery, { delay: 300 });
 * 
 * useEffect(() => {
 *   if (debouncedQuery) {
 *     // Perform search API call
 *   }
 * }, [debouncedQuery]);
 * ```
 */

export interface UseDebounceOptions {
  /** Delay in milliseconds (default: 300) */
  delay?: number;
}

/**
 * useDebounce Implementation
 * 
 * Returns a debounced version of the input value.
 * The debounced value will only update after the specified delay
 * has passed since the last change to the input value.
 */
export function useDebounce<T>(value: T, { delay = 300 }: UseDebounceOptions = {}): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

