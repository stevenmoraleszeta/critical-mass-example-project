import { useState, useEffect } from 'react';

export interface UseMediaQueryOptions {
  query: string;
  defaultValue?: boolean;
}

export function useMediaQuery({ query, defaultValue = false }: UseMediaQueryOptions): boolean {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, [query]);

  return matches;
}

