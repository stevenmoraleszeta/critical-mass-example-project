'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useToggle, useClickOutside, useFocusTrap, useDebounce } from '@/lib/hooks';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  id: string;
  label: string;
  options: {
    value: string;
    label: string;
  }[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  error?: string;
  searchPlaceholder?: string;
  placeholder?: string;
  className?: string;
}

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

  const selectedOption = options.find(option => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

  const filteredOptions = options.filter(option =>
    option.label.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
  );

  useFocusTrap<HTMLDivElement>({
    ref: modalRef,
    enabled: isOpen.value,
  });

  const errorId = error ? `${id}-error` : undefined;
  const modalId = `${id}-modal`;
  const searchInputId = `${id}-search`;
  const optionsListId = `${id}-options`;

  const openModal = useCallback(() => {
    isOpen.setTrue();
    setSearchQuery('');
    setFocusedIndex(-1);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen.value && searchInputRef.current) {
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

  const handleSelect = useCallback((optionValue: string) => {
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

  useClickOutside<HTMLDivElement>({
    ref: modalRef,
    handler: closeModal,
    enabled: isOpen.value,
  });

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


  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setFocusedIndex(-1);
  }, []);

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
