'use client';

import React from 'react';
import Link from 'next/link';

/**
 * Header Component
 * 
 * A semantic header component with logo and navigation structure.
 * Follows Critical Mass accessibility requirements:
 * - Semantic HTML (<header>, <nav>)
 * - ARIA labels for navigation
 * - Keyboard navigation support
 * - Responsive design (mobile-first)
 * 
 * @example
 * ```tsx
 * <Header />
 * ```
 */

export interface HeaderProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Header Component Implementation
 * 
 * Includes:
 * - Logo (stylized "SM")
 * - Navigation structure
 * - Responsive behavior
 * - Full accessibility support
 */
export default function Header({ className = '' }: HeaderProps) {
  // Build BEM class names
  const baseClass = 'header';
  const classNames = [baseClass, className].filter(Boolean).join(' ');

  return (
    <header className={classNames} role="banner">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <Link 
            href="/" 
            className="header__logo-link"
            aria-label="Steven Morales - Home"
          >
            <span className="header__logo-text" aria-hidden="true">SM</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav 
          className="header__nav" 
          role="navigation"
          aria-label="Main navigation"
        >
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <Link 
                href="/" 
                className="header__nav-link"
                aria-label="Go to home page"
              >
                Home
              </Link>
            </li>
            <li className="header__nav-item">
              <Link 
                href="/components" 
                className="header__nav-link"
                aria-label="Go to components page"
              >
                Components
              </Link>
            </li>
            <li className="header__nav-item">
              <Link 
                href="/content" 
                className="header__nav-link"
                aria-label="Go to content page"
              >
                Content
              </Link>
            </li>
            <li className="header__nav-item">
              <Link 
                href="/about" 
                className="header__nav-link"
                aria-label="Go to about page"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

