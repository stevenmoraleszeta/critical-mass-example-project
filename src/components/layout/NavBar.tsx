'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * NavBar Component
 * 
 * A semantic navigation component with active state indication and mobile menu.
 * Follows Critical Mass accessibility requirements:
 * - Semantic HTML (<nav>)
 * - ARIA labels for navigation
 * - Keyboard navigation support (Tab, Enter, Space, Escape)
 * - Active state indication using usePathname
 * - Responsive design with mobile hamburger menu
 * - Focus management for mobile menu
 * 
 * @example
 * ```tsx
 * <NavBar />
 * ```
 */

export interface NavBarProps {
  /** Additional CSS classes */
  className?: string;
}

/**
 * Navigation link configuration
 */
interface NavLink {
  href: string;
  label: string;
  ariaLabel: string;
}

const navigationLinks: NavLink[] = [
  { href: '/', label: 'Home', ariaLabel: 'Go to home page' },
  { href: '/components', label: 'Components', ariaLabel: 'Go to components page' },
  { href: '/content', label: 'Content', ariaLabel: 'Go to content page' },
  { href: '/about', label: 'About', ariaLabel: 'Go to about page' },
];

/**
 * NavBar Component Implementation
 * 
 * Features:
 * - Active state detection using usePathname
 * - Mobile hamburger menu with keyboard support
 * - Focus trap for mobile menu
 * - ARIA attributes for screen readers
 * - Keyboard shortcuts (Escape to close menu)
 */
export default function NavBar({ className = '' }: NavBarProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuListRef = useRef<HTMLUListElement>(null);

  // Build BEM class names
  const baseClass = 'navbar';
  const classNames = [baseClass, className].filter(Boolean).join(' ');

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Focus first link when menu opens
  useEffect(() => {
    if (isMobileMenuOpen && menuListRef.current) {
      // Small delay to ensure menu is rendered
      setTimeout(() => {
        const firstLink = menuListRef.current?.querySelector('a') as HTMLAnchorElement;
        firstLink?.focus();
      }, 100);
    }
  }, [isMobileMenuOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Handle keyboard navigation for menu button
  const handleMenuButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMobileMenu();
    }
  };

  // Check if link is active
  const isActiveLink = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className={classNames} 
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__container">
        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="navbar__menu-button"
          aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="navbar-menu"
          onClick={toggleMobileMenu}
          onKeyDown={handleMenuButtonKeyDown}
          type="button"
        >
          <span className="navbar__menu-icon" aria-hidden="true">
            <span className={`navbar__menu-line ${isMobileMenuOpen ? 'navbar__menu-line--open' : ''}`} />
            <span className={`navbar__menu-line ${isMobileMenuOpen ? 'navbar__menu-line--open' : ''}`} />
            <span className={`navbar__menu-line ${isMobileMenuOpen ? 'navbar__menu-line--open' : ''}`} />
          </span>
          <span className="navbar__menu-text">
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </span>
        </button>

        {/* Navigation Links */}
        <ul 
          ref={menuListRef}
          id="navbar-menu"
          className={`navbar__list ${isMobileMenuOpen ? 'navbar__list--open' : ''}`}
        >
          {navigationLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            
            return (
              <li key={link.href} className="navbar__item">
                <Link
                  href={link.href}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                  aria-label={link.ariaLabel}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

