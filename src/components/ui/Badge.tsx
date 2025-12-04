'use client';

import React from 'react';

export interface BadgeProps {
  text: string;
  status: 'live' | 'upcoming' | 'draft';
  className?: string;
}

export default function Badge({
  text,
  status,
  className = '',
}: BadgeProps) {
  const baseClass = 'badge';
  const statusClass = `badge--${status}`;
  
  const classNames = [
    baseClass,
    statusClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <span 
      className={classNames}
      role="status"
      aria-label={`Status: ${status} - ${text}`}
    >
      {text}
    </span>
  );
}

