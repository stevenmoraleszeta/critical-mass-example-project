'use client';

import { useState, useEffect, useCallback } from 'react';

/**
 * useLocalStorage Hook
 * 
 * Synchronizes state with localStorage, providing persistence across page reloads.
 * Handles SSR safely and provides error handling for localStorage unavailability.
 * 
 * @example
 * ```tsx
 * const [theme, setTheme] = useLocalStorage('theme', { defaultValue: 'light' });
 * 
 * // Update theme
 * setTheme('dark');
 * 
 * // Remove from localStorage
 * setTheme(null);
 * ```
 */

export interface UseLocalStorageOptions<T> {
  /** Default value if key doesn't exist in localStorage */
  defaultValue?: T;
  /** Whether to sync with localStorage (default: true) */
  sync?: boolean;
}

export interface UseLocalStorageReturn<T> {
  /** Current value from localStorage */
  value: T | null;
  /** Function to update the value in localStorage */
  setValue: (value: T | null) => void;
  /** Function to remove the value from localStorage */
  removeValue: () => void;
}

/**
 * useLocalStorage Implementation
 * 
 * Provides a React hook for managing localStorage with type safety.
 * Automatically handles JSON serialization/deserialization.
 * Safely handles SSR and localStorage unavailability.
 */
export function useLocalStorage<T>(
  key: string,
  options: UseLocalStorageOptions<T> = {}
): UseLocalStorageReturn<T> {
  const { defaultValue = null, sync = true } = options;

  // Initialize state with value from localStorage or default
  const [storedValue, setStoredValue] = useState<T | null>(() => {
    if (typeof window === 'undefined' || !sync) {
      return defaultValue ?? null;
    }

    try {
      const item = window.localStorage.getItem(key);
      if (item === null) {
        return defaultValue ?? null;
      }
      return JSON.parse(item) as T;
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error);
      return defaultValue ?? null;
    }
  });

  // Update localStorage when value changes
  const setValue = useCallback(
    (value: T | null) => {
      try {
        if (typeof window === 'undefined' || !sync) {
          setStoredValue(value);
          return;
        }

        if (value === null) {
          window.localStorage.removeItem(key);
          setStoredValue(null);
        } else {
          window.localStorage.setItem(key, JSON.stringify(value));
          setStoredValue(value);
        }
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
        setStoredValue(value);
      }
    },
    [key, sync]
  );

  // Remove value from localStorage
  const removeValue = useCallback(() => {
    setValue(null);
  }, [setValue]);

  // Sync with localStorage changes from other tabs/windows
  useEffect(() => {
    if (typeof window === 'undefined' || !sync) {
      return;
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue) as T);
        } catch (error) {
          console.warn(`Error parsing localStorage value for key "${key}":`, error);
        }
      } else if (e.key === key && e.newValue === null) {
        setStoredValue(defaultValue ?? null);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key, defaultValue, sync]);

  return {
    value: storedValue,
    setValue,
    removeValue,
  };
}

