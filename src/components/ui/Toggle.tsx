'use client';

import React from 'react';

/**
 * Toggle Component
 * 
 * A reusable toggle/switch component with full accessibility support.
 * Supports checked/unchecked states with proper label association.
 * 
 * @example
 * ```tsx
 * <Toggle
 *   id="dark-mode"
 *   label="Dark Mode"
 *   checked={isDarkMode}
 *   onChange={(e) => setIsDarkMode(e.target.checked)}
 * />
 * 
 * <Toggle
 *   id="notifications"
 *   label="Enable Notifications"
 *   checked={notificationsEnabled}
 *   onChange={(e) => setNotificationsEnabled(e.target.checked)}
 *   disabled
 * />
 * ```
 */

export interface ToggleProps {
  /** Toggle ID (must be unique) */
  id: string;
  /** Label text for the toggle */
  label: string;
  /** Checked state (controlled component) */
  checked: boolean;
  /** Change handler */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Whether the toggle is disabled */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Toggle Component Implementation
 * 
 * Handles toggle functionality with full accessibility support.
 * Follows Critical Mass accessibility requirements:
 * - Label association using htmlFor and id
 * - Keyboard navigation support (Space, Enter)
 * - Visible focus states
 * - ARIA attributes for screen readers
 */
export default function Toggle({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  className = '',
}: ToggleProps) {
  // Build BEM class names
  const baseClass = 'toggle';
  const checkedClass = checked ? 'toggle--checked' : '';
  const disabledClass = disabled ? 'toggle--disabled' : '';
  
  const toggleClassNames = [
    baseClass,
    checkedClass,
    disabledClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="toggle-wrapper">
      <label htmlFor={id} className="toggle__label">
        <span className="toggle__label-text">{label}</span>
        <input
          id={id}
          type="checkbox"
          className="toggle__input"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          role="switch"
          aria-checked={checked}
          aria-label={label}
        />
        <span className={toggleClassNames} aria-hidden="true">
          <span className="toggle__slider"></span>
        </span>
      </label>
    </div>
  );
}

