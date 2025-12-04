'use client';

import React from 'react';

export interface ToggleProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
}

export default function Toggle({
  id,
  label,
  checked,
  onChange,
  disabled = false,
  className = '',
}: ToggleProps) {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const syntheticEvent = {
        target: { checked: !checked },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

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
          onKeyDown={handleKeyDown}
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

