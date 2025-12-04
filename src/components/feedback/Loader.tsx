'use client';

import React from 'react';

export interface LoaderProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Loader({
  text,
  size = 'md',
  className = '',
}: LoaderProps) {
  const baseClass = 'loader';
  const sizeClass = `loader--${size}`;
  
  const loaderClassNames = [
    baseClass,
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={loaderClassNames} role="status" aria-live="polite" aria-label={text || 'Loading'}>
      <div className="loader__spinner" aria-hidden="true">
        <span className="loader__spinner-circle"></span>
      </div>
      {text && (
        <p className="loader__text" aria-live="polite">
          {text}
        </p>
      )}
    </div>
  );
}

