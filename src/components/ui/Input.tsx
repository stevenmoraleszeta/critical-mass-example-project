'use client';

import React from 'react';

/**
 * Input Component
 * 
 * A reusable input component with full accessibility support.
 * Supports multiple input types, error states, and validation.
 * 
 * @example
 * ```tsx
 * <Input
 *   id="email"
 *   label="Email Address"
 *   type="email"
 *   value={email}
 *   onChange={(e) => setEmail(e.target.value)}
 *   required
 * />
 * 
 * <Input
 *   id="search"
 *   label="Search"
 *   type="search"
 *   placeholder="Search content..."
 *   value={search}
 *   onChange={(e) => setSearch(e.target.value)}
 *   error="Please enter a search term"
 * />
 * ```
 */

export interface InputProps {
  /** Input ID (must be unique) */
  id: string;
  /** Label text for the input */
  label: string;
  /** Input type: text, email, search, or password */
  type?: 'text' | 'email' | 'search' | 'password';
  /** Placeholder text */
  placeholder?: string;
  /** Input value (controlled component) */
  value: string;
  /** Change handler */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Error message to display */
  error?: string;
  /** Whether the input is required */
  required?: boolean;
  /** Custom aria-describedby ID (auto-generated if error exists) */
  ariaDescribedBy?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Input Component Implementation
 * 
 * Handles all input types with full accessibility support.
 * Follows Critical Mass accessibility requirements:
 * - Label association using htmlFor and id
 * - aria-describedby for error messages
 * - aria-invalid for validation states
 * - Required indicator
 * - Visible focus states
 */
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
  // Generate error message ID for aria-describedby
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = ariaDescribedBy || errorId;

  // Build BEM class names
  const baseClass = 'input';
  const errorClass = error ? 'input--error' : '';
  const requiredClass = required ? 'input--required' : '';
  
  const inputClassNames = [
    baseClass,
    errorClass,
    requiredClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="input-wrapper">
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
        className={inputClassNames}
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

