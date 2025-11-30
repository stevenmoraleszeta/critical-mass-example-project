'use client';

import React from 'react';

/**
 * Select Component
 * 
 * A reusable select dropdown component with full accessibility support.
 * Supports options rendering and proper label association.
 * 
 * @example
 * ```tsx
 * <Select
 *   id="category"
 *   label="Category"
 *   options={[
 *     { value: 'all', label: 'All Categories' },
 *     { value: 'campaign', label: 'Campaign' },
 *     { value: 'case-study', label: 'Case Study' }
 *   ]}
 *   value={category}
 *   onChange={(e) => setCategory(e.target.value)}
 * />
 * ```
 */

export interface SelectProps {
  /** Select ID (must be unique) */
  id: string;
  /** Label text for the select */
  label: string;
  /** Array of options with value and label */
  options: {
    value: string;
    label: string;
  }[];
  /** Selected value (controlled component) */
  value: string;
  /** Change handler */
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Whether the select is required */
  required?: boolean;
  /** Error message to display */
  error?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Select Component Implementation
 * 
 * Handles dropdown functionality with full accessibility support.
 * Follows Critical Mass accessibility requirements:
 * - Label association using htmlFor and id
 * - aria-describedby for error messages
 * - aria-invalid for validation states
 * - Required indicator
 * - Visible focus states
 * - Keyboard navigation support
 */
export default function Select({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
  error,
  className = '',
}: SelectProps) {
  // Generate error message ID for aria-describedby
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = errorId;

  // Build BEM class names
  const baseClass = 'select';
  const errorClass = error ? 'select--error' : '';
  const requiredClass = required ? 'select--required' : '';
  
  const selectClassNames = [
    baseClass,
    errorClass,
    requiredClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="select-wrapper">
      <label htmlFor={id} className="select__label">
        {label}
        {required && (
          <span className="select__required" aria-label="required">
            *
          </span>
        )}
      </label>
      <select
        id={id}
        className={selectClassNames}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={describedBy}
        aria-required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <span id={errorId} className="select__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

