'use client';

import React from 'react';

export interface InputProps {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'search' | 'password';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  ariaDescribedBy?: string;
  className?: string;
}

export default function Input({
  id,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  ariaDescribedBy,
  className = '',
}: InputProps) {
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = ariaDescribedBy || errorId;

  const wrapperClassNames = [
    'input',
    error ? 'input--error' : '',
    required ? 'input--required' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClassNames}>
      <label htmlFor={id} className="input__label">
        {label}
        {required && (
          <span className="input__required" aria-label="required">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        className="input__field"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedBy}
        aria-required={required}
      />
      {error && (
        <span id={errorId} className="input__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

