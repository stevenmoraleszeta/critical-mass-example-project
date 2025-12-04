'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useToggle, useClickOutside, useMediaQuery } from '@/lib/hooks';

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
  { href: '/this-project', label: 'This Project', ariaLabel: 'Go to this project page' },
  { href: '/curriculum', label: 'Curriculum', ariaLabel: 'Go to curriculum page' },
  { href: '/cover-letter', label: 'Cover Letter', ariaLabel: 'Go to cover letter page' },
  { href: '/contact', label: 'Contact', ariaLabel: 'Go to contact page' },
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
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const mobileMenu = useToggle(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuListRef = useRef<HTMLUListElement>(null);
  const previousPathnameRef = useRef<string>(pathname);

  // Build BEM class names
  const baseClass = 'navbar';
  const classNames = [baseClass, className].filter(Boolean).join(' ');

  // Close mobile menu when pathname changes (navigation occurred)
  // Using ref to track previous pathname to avoid unnecessary state updates
  useEffect(() => {
    if (previousPathnameRef.current !== pathname) {
      if (mobileMenu.value) {
        mobileMenu.setFalse();
      }
      previousPathnameRef.current = pathname;
    }
    // This effect intentionally syncs state with external pathname changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Handle Escape key to close mobile menu and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenu.value) {
        mobileMenu.setFalse();
        // Return focus to menu button after closing
        setTimeout(() => {
          menuButtonRef.current?.focus();
        }, 0);
      }
    };

    if (mobileMenu.value) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open (mobile only)
      if (isMobile) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [mobileMenu.value, isMobile]);

  // Focus first link when menu opens (mobile only)
  useEffect(() => {
    if (mobileMenu.value && menuListRef.current && isMobile) {
      // Small delay to ensure menu is rendered and visible
      const timeoutId = setTimeout(() => {
        const firstLink = menuListRef.current?.querySelector('a') as HTMLAnchorElement;
        if (firstLink) {
          firstLink.focus();
        }
      }, 150);
      
      return () => clearTimeout(timeoutId);
    }
  }, [mobileMenu.value, isMobile]);

  // Handle click outside to close menu (mobile only)
  useClickOutside({
    ref: menuListRef,
    handler: () => {
      if (isMobile && mobileMenu.value) {
        mobileMenu.setFalse();
        menuButtonRef.current?.focus();
      }
    },
    enabled: isMobile && mobileMenu.value,
    delay: 100,
  });

  // Handle keyboard navigation for menu button
  const handleMenuButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      mobileMenu.toggle();
    }
  };

  // Handle link click to close menu on mobile
  const handleLinkClick = () => {
    if (isMobile) {
      mobileMenu.setFalse();
      // Return focus to menu button after navigation
      setTimeout(() => {
        menuButtonRef.current?.focus();
      }, 100);
    }
  };

  // Check if link is active
  const isActiveLink = (href: string): boolean => {
    // Exact match for home page
    if (href === '/') {
      return pathname === '/';
    }
    // For other pages, check if pathname starts with href
    // This handles nested routes like /components/something
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav 
      className={classNames} 
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <Link 
            href="/" 
            className="navbar__logo-link"
            aria-label="Steven Morales - Home"
          >
            <span className="navbar__logo-initials" aria-hidden="true">SM</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          className="navbar__menu-button"
          aria-label={mobileMenu.value ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenu.value}
          aria-controls="navbar-menu"
          onClick={mobileMenu.toggle}
          onKeyDown={handleMenuButtonKeyDown}
          type="button"
        >
          <span className="navbar__menu-icon" aria-hidden="true">
            <span className={`navbar__menu-line ${mobileMenu.value ? 'navbar__menu-line--open' : ''}`} />
            <span className={`navbar__menu-line ${mobileMenu.value ? 'navbar__menu-line--open' : ''}`} />
            <span className={`navbar__menu-line ${mobileMenu.value ? 'navbar__menu-line--open' : ''}`} />
          </span>
        </button>

        {/* Navigation Links */}
        <ul 
          ref={menuListRef}
          id="navbar-menu"
          className={`navbar__list ${mobileMenu.value ? 'navbar__list--open' : ''}`}
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
                  onClick={handleLinkClick}
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

