'use client';

import React from 'react';

export interface ScrollArrowProps {
  /** Target element ID to scroll to */
  targetId: string;
  /** Arrow color variant: 'white', 'red', 'primary', etc. */
  color?: 'white' | 'red' | 'primary' | 'secondary';
  /** Custom aria-label (default: "Scroll to next section") */
  ariaLabel?: string;
  /** Additional CSS classes */
  className?: string;
}

export default function ScrollArrow({
  targetId,
  color = 'red',
  ariaLabel = 'Scroll to next section',
  className = '',
}: ScrollArrowProps) {
  const handleScrollDown = () => {
    if (typeof window === 'undefined') return;
    
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      targetElement.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleScrollDown();
    }
  };

  return (
    <button
      className={`scroll-arrow scroll-arrow--${color} ${className}`.trim()}
      onClick={handleScrollDown}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      type="button"
    >
      <svg
        className="scroll-arrow__icon"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M7 10L12 15L17 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

