'use client';

import { useState, useEffect } from 'react';

export interface UseDebounceOptions {
  delay?: number;
}

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

