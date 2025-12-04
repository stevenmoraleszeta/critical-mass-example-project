import { useState, useCallback, useEffect } from 'react';

export type ToastVariant = 'success' | 'error' | 'info' | 'warning';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type ToastSize = 'sm' | 'md' | 'lg';

export interface Toast {
  id: string;
  message: string;
  variant: ToastVariant;
  position: ToastPosition;
  size: ToastSize;
  autoDismiss: boolean;
  duration: number;
}

export interface UseToastOptions {
  defaultPosition?: ToastPosition;
  defaultSize?: ToastSize;
  defaultDuration?: number;
  defaultAutoDismiss?: boolean;
}

export interface UseToastReturn {
  toasts: Toast[];
  showToast: (
    message: string,
    variant?: ToastVariant,
    position?: ToastPosition,
    size?: ToastSize,
    autoDismiss?: boolean,
    duration?: number
  ) => void;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

export function useToast({
  defaultPosition = 'top-right',
  defaultSize = 'md',
  defaultDuration = 5000,
  defaultAutoDismiss = true,
}: UseToastOptions = {}): UseToastReturn {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (
      message: string,
      variant: ToastVariant = 'info',
      position: ToastPosition = defaultPosition,
      size: ToastSize = defaultSize,
      autoDismiss: boolean = defaultAutoDismiss,
      duration: number = defaultDuration
    ) => {
      const id = Math.random().toString(36).substring(7);
      const newToast: Toast = {
        id,
        message,
        variant,
        position,
        size,
        autoDismiss,
        duration,
      };

      setToasts((prev) => [...prev, newToast]);
    },
    [defaultPosition, defaultSize, defaultDuration, defaultAutoDismiss]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  useEffect(() => {
    const autoDismissToasts = toasts.filter((toast) => toast.autoDismiss);

    if (autoDismissToasts.length === 0) return;

    const timers = autoDismissToasts.map((toast) => {
      return setTimeout(() => {
        removeToast(toast.id);
      }, toast.duration);
    });

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [toasts, removeToast]);

  return {
    toasts,
    showToast,
    removeToast,
    clearAll,
  };
}

