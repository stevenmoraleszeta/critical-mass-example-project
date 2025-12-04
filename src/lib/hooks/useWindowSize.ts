import { useState, useEffect } from 'react';

export interface WindowSize {
  width: number;
  height: number;
}

export interface UseWindowSizeOptions {
  debounceDelay?: number;
}

export function useWindowSize({ debounceDelay = 0 }: UseWindowSizeOptions = {}): WindowSize {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      if (debounceDelay > 0) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(updateSize, debounceDelay);
      } else {
        updateSize();
      }
    };

    window.addEventListener('resize', handleResize);
    updateSize();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [debounceDelay]);

  return windowSize;
}

