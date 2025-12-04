import { useState, useCallback } from 'react';

export type ValidationRule<T = string> = (value: T) => string | undefined;

export interface UseFormValidationOptions<T extends Record<string, any>> {
  initialValues: T;
  validationRules?: Partial<Record<keyof T, ValidationRule>>;
  onSubmit?: (values: T) => void | Promise<void>;
}

export interface UseFormValidationReturn<T extends Record<string, any>> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isValid: boolean;
  setValue: <K extends keyof T>(field: K, value: T[K]) => void;
  setError: <K extends keyof T>(field: K, error: string | undefined) => void;
  setTouchedField: <K extends keyof T>(field: K, touched: boolean) => void;
  validateField: <K extends keyof T>(field: K) => void;
  validateAll: () => boolean;
  handleChange: <K extends keyof T>(field: K) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleBlur: <K extends keyof T>(field: K) => () => void;
  handleSubmit: (e?: React.FormEvent) => void | Promise<void>;
  reset: () => void;
  resetErrors: () => void;
}

export function useFormValidation<T extends Record<string, any>>({
  initialValues,
  validationRules = {},
  onSubmit,
}: UseFormValidationOptions<T>): UseFormValidationReturn<T> {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});

  const validateField = useCallback(
    <K extends keyof T>(field: K): void => {
      const rule = validationRules[field];
      if (!rule) return;

      const error = rule(values[field]);
      setErrors((prev) => ({
        ...prev,
        [field]: error,
      }));
    },
    [values, validationRules]
  );

  const validateAll = useCallback((): boolean => {
    const newErrors: Partial<Record<keyof T, string>> = {};

    Object.keys(validationRules).forEach((field) => {
      const key = field as keyof T;
      const rule = validationRules[key];
      if (rule) {
        const error = rule(values[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [values, validationRules]);

  const setValue = useCallback(<K extends keyof T>(field: K, value: T[K]): void => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (touched[field]) {
      validateField(field);
    }
  }, [touched, validateField]);

  const setError = useCallback(<K extends keyof T>(field: K, error: string | undefined): void => {
    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));
  }, []);

  const setTouchedField = useCallback(<K extends keyof T>(field: K, touchedValue: boolean): void => {
    setTouched((prev) => ({
      ...prev,
      [field]: touchedValue,
    }));
  }, []);

  const handleChange = useCallback(
    <K extends keyof T>(field: K) => {
      return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const value = e.target.value as T[K];
        setValue(field, value);
      };
    },
    [setValue]
  );

  const handleBlur = useCallback(
    <K extends keyof T>(field: K) => {
      return () => {
        setTouchedField(field, true);
        validateField(field);
      };
    },
    [setTouchedField, validateField]
  );

  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      if (e) {
        e.preventDefault();
      }

      const allTouched = Object.keys(initialValues).reduce((acc, key) => {
        acc[key as keyof T] = true;
        return acc;
      }, {} as Partial<Record<keyof T, boolean>>);

      Object.keys(allTouched).forEach((key) => {
        setTouchedField(key as keyof T, true);
      });

      if (validateAll() && onSubmit) {
        await onSubmit(values);
      }
    },
    [initialValues, validateAll, onSubmit, values, setTouchedField]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  }, [initialValues]);

  const resetErrors = useCallback(() => {
    setErrors({});
  }, []);

  const isValid = Object.keys(errors).length === 0;

  return {
    values,
    errors,
    touched,
    isValid,
    setValue,
    setError,
    setTouchedField,
    validateField,
    validateAll,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    resetErrors,
  };
}

