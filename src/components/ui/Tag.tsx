'use client';

import React from 'react';

export interface TagProps {
  text: string;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'md';
  className?: string;
}

export default function Tag({
  text,
  variant = 'default',
  size = 'md',
  className = '',
}: TagProps) {
  const baseClass = 'tag';
  const variantClass = `tag--${variant}`;
  const sizeClass = `tag--${size}`;
  
  const classNames = [
    baseClass,
    variantClass,
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classNames}>
      {text}
    </span>
  );
}

