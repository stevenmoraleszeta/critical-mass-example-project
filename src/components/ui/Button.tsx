'use client';

import React from 'react';
import Link from 'next/link';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'highlight' | 'exit';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  className?: string;
  prefetch?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  target,
  rel,
  download,
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  ariaLabel,
  className = '',
  prefetch = true,
}: ButtonProps) {
  const baseClass = 'btn';
  const variantClass = `btn--${variant}`;
  const sizeClass = `btn--${size}`;
  const disabledClass = disabled ? 'btn--disabled' : '';
  const loadingClass = loading ? 'btn--loading' : '';
  
  const classNames = [
    baseClass,
    variantClass,
    sizeClass,
    disabledClass,
    loadingClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled && !loading && onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const isExternalLink = href && (href.startsWith('http://') || href.startsWith('https://'));
  const shouldUseNativeLink = download !== undefined || isExternalLink;

  if (href && !disabled) {
    if (shouldUseNativeLink) {
      return (
        <a
          href={href}
          target={target || (isExternalLink ? '_blank' : undefined)}
          rel={rel || (isExternalLink ? 'noopener noreferrer' : undefined)}
          download={download}
          className={classNames}
          aria-label={ariaLabel}
          tabIndex={disabled ? -1 : 0}
          onKeyDown={handleKeyDown}
          onClick={onClick}
        >
          {loading && <span className="btn__spinner" aria-hidden="true" />}
          <span className="btn__text">{children}</span>
        </a>
      );
    }
    
    return (
      <Link
        href={href}
        className={classNames}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        onClick={onClick}
        prefetch={prefetch}
      >
        {loading && <span className="btn__spinner" aria-hidden="true" />}
        <span className="btn__text">{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      <span className="btn__text">{children}</span>
    </button>
  );
}

