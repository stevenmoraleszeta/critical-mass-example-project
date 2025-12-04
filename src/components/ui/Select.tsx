'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useToggle, useClickOutside, useFocusTrap, useDebounce } from '@/lib/hooks';

/**
 * Select Component
 * 
 * A custom modal-based select component with search functionality.
 * Replaces the default HTML select element with a fully accessible, searchable modal.
 * 
 * Follows Critical Mass requirements:
 * - Full accessibility (ARIA, keyboard navigation, focus management)
 * - Mobile-first responsive design
 * - BEM methodology
 * - Semantic HTML
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

export interface SelectOption {
  value: string;
  label: string;
}

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
  /** Change handler (compatible with native select onChange) */
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  /** Whether the select is required */
  required?: boolean;
  /** Error message to display */
  error?: string;
  /** Placeholder text for search input */
  searchPlaceholder?: string;
  /** Placeholder text for trigger button when no value is selected */
  placeholder?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Select Component Implementation
 * 
 * Features:
 * - Search/filter functionality
 * - Keyboard navigation (Arrow keys, Enter, Escape, Tab)
 * - Focus trap when modal is open
 * - ARIA attributes for screen readers
 * - Click outside to close
 * - Mobile-first responsive design
 */
export default function Select({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
  error,
  searchPlaceholder = 'Search options...',
  placeholder = 'Select an option',
  className = '',
}: SelectProps) {
  const isOpen = useToggle(false);
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, { delay: 200 });
  const [focusedIndex, setFocusedIndex] = useState(-1);
  
  const triggerRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const optionsListRef = useRef<HTMLUListElement>(null);

  // Find the selected option's label
  const selectedOption = options.find(option => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

  // Filter options based on debounced search query
  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  // Use focus trap for accessibility
  useFocusTrap({
    ref: modalRef,
    enabled: isOpen.value,
  });

  // Generate error message ID for aria-describedby
  const errorId = error ? `${id}-error` : undefined;
  const modalId = `${id}-modal`;
  const searchInputId = `${id}-search`;
  const optionsListId = `${id}-options`;

  // Handle opening/closing modal
  const openModal = useCallback(() => {
    isOpen.setTrue();
    setSearchQuery('');
    setFocusedIndex(-1);
  }, [isOpen]);

  // Focus search input when modal opens
  useEffect(() => {
    if (isOpen.value && searchInputRef.current) {
      // Small delay to ensure modal is rendered
      setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [isOpen.value]);

  const closeModal = useCallback(() => {
    isOpen.setFalse();
    setSearchQuery('');
    setFocusedIndex(-1);
    triggerRef.current?.focus();
  }, [isOpen]);

  // Handle option selection
  const handleSelect = useCallback((optionValue: string) => {
    // Create a synthetic event that matches the native select onChange signature
    const syntheticEvent = {
      target: {
        value: optionValue,
        id: id,
      },
      currentTarget: {
        value: optionValue,
        id: id,
      },
    } as React.ChangeEvent<HTMLSelectElement>;

    onChange(syntheticEvent);
    closeModal();
  }, [onChange, closeModal, id]);

  // Handle click outside to close
  useClickOutside({
    ref: modalRef,
    handler: closeModal,
    enabled: isOpen.value,
  });

  // Handle keyboard navigation (focus trap is handled by useFocusTrap hook)
  useEffect(() => {
    if (!isOpen.value) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          closeModal();
          break;
        
        case 'ArrowDown':
          e.preventDefault();
          if (filteredOptions.length > 0) {
            setFocusedIndex(prev => 
              prev < filteredOptions.length - 1 ? prev + 1 : prev
            );
          }
          break;
        
        case 'ArrowUp':
          e.preventDefault();
          if (filteredOptions.length > 0) {
            setFocusedIndex(prev => prev > 0 ? prev - 1 : -1);
          }
          break;
        
        case 'Enter':
          e.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
            handleSelect(filteredOptions[focusedIndex].value);
          }
          break;
        
        case 'Home':
          e.preventDefault();
          if (filteredOptions.length > 0) {
            setFocusedIndex(0);
          }
          break;
        
        case 'End':
          e.preventDefault();
          if (filteredOptions.length > 0) {
            setFocusedIndex(filteredOptions.length - 1);
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen.value, filteredOptions, focusedIndex, handleSelect, closeModal]);

  // Scroll focused option into view
  useEffect(() => {
    if (focusedIndex >= 0 && optionsListRef.current) {
      const optionElements = optionsListRef.current.querySelectorAll('[role="option"]');
      if (optionElements[focusedIndex]) {
        optionElements[focusedIndex].scrollIntoView({
          block: 'nearest',
          behavior: 'smooth',
        });
      }
    }
  }, [focusedIndex]);


  // Handle search input change and reset focused index
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setFocusedIndex(-1);
  }, []);

  // Build BEM class names for trigger button
  const baseClass = 'select';
  const errorClass = error ? 'select--error' : '';
  const openClass = isOpen.value ? 'select--open' : '';
  
  const triggerClassNames = [
    `${baseClass}__trigger`,
    errorClass,
    openClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const wrapperClassNames = [
    baseClass,
    errorClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <div className={wrapperClassNames}>
        <label htmlFor={id} className={`${baseClass}__label`} id={`${id}-label`}>
          {label}
          {required && (
            <span className={`${baseClass}__required`} aria-label="required">
              *
            </span>
          )}
        </label>
        <button
          ref={triggerRef}
          id={id}
          type="button"
          className={triggerClassNames}
          onClick={openModal}
          aria-haspopup="listbox"
          aria-expanded={isOpen.value}
          aria-controls={isOpen.value ? modalId : undefined}
          aria-describedby={errorId}
          data-invalid={error ? 'true' : 'false'}
          data-required={required}
        >
          <span className={`${baseClass}__trigger-text`}>
            {displayValue}
          </span>
          <span 
            className={`${baseClass}__trigger-icon`}
            aria-hidden="true"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="7" fill="#FFFF00" stroke="#0000FF" strokeWidth="1"/>
              <path fill="#0000FF" d="M8 11L4.5 7.5h7z"/>
            </svg>
          </span>
        </button>
        {error && (
          <span id={errorId} className={`${baseClass}__error`} role="alert">
            {error}
          </span>
        )}
      </div>

      {/* Modal Overlay */}
      {isOpen.value && (
        <>
          <div 
            className={`${baseClass}__overlay`}
            onClick={closeModal}
            aria-hidden="true"
          />
          <div
            ref={modalRef}
            id={modalId}
            className={`${baseClass}__modal`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${id}-label`}
            aria-label={label}
          >
            {/* Search Input */}
            <div className={`${baseClass}__search-wrapper`}>
              <label htmlFor={searchInputId} className="visually-hidden">
                Search options
              </label>
              <input
                ref={searchInputRef}
                id={searchInputId}
                type="search"
                className={`${baseClass}__search-input`}
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={handleSearchChange}
                aria-controls={optionsListId}
                aria-autocomplete="list"
              />
            </div>

            {/* Options List */}
            {filteredOptions.length > 0 ? (
              <ul
                ref={optionsListRef}
                id={optionsListId}
                className={`${baseClass}__options`}
                role="listbox"
                aria-label={label}
              >
                {filteredOptions.map((option, index) => {
                  const isSelected = option.value === value;
                  const isFocused = index === focusedIndex;
                  
                  return (
                    <li
                      key={option.value}
                      className={`${baseClass}__option`}
                      role="option"
                      aria-selected={isSelected}
                      tabIndex={0}
                      onClick={() => handleSelect(option.value)}
                      onMouseEnter={() => setFocusedIndex(index)}
                      onFocus={() => setFocusedIndex(index)}
                      data-focused={isFocused}
                    >
                      {option.label}
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className={`${baseClass}__empty`} role="status">
                No options found
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
