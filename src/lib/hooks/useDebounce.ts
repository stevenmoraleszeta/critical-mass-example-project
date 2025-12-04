import { useState, useEffect } from 'react';

export interface UseDebounceOptions {
  delay?: number;
}

export function useDebounce<T>(value: T, { delay = 300 }: UseDebounceOptions = {}): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

