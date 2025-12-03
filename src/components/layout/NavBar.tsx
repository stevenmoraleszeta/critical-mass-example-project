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
  { href: '/skills', label: 'Skills', ariaLabel: 'Go to skills page' },
  { href: '/projects', label: 'Projects', ariaLabel: 'Go to projects page' },
  { href: '/ui-library', label: 'UI Library', ariaLabel: 'Go to UI library page' },
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
  const previousPathnameRef = useRef<string>(pathname);

  // Build BEM class names
  const baseClass = 'navbar';
  const classNames = [baseClass, className].filter(Boolean).join(' ');

  // Close mobile menu when pathname changes (navigation occurred)
  // Using ref to track previous pathname to avoid unnecessary state updates
  useEffect(() => {
    if (previousPathnameRef.current !== pathname) {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      previousPathnameRef.current = pathname;
    }
    // This effect intentionally syncs state with external pathname changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Handle Escape key to close mobile menu and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        // Return focus to menu button after closing
        setTimeout(() => {
          menuButtonRef.current?.focus();
        }, 0);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open (mobile only)
      if (window.innerWidth < 768) {
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Focus first link when menu opens (mobile only)
  useEffect(() => {
    if (isMobileMenuOpen && menuListRef.current && window.innerWidth < 768) {
      // Small delay to ensure menu is rendered and visible
      const timeoutId = setTimeout(() => {
        const firstLink = menuListRef.current?.querySelector('a') as HTMLAnchorElement;
        if (firstLink) {
          firstLink.focus();
        }
      }, 150);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isMobileMenuOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Handle click outside to close menu (mobile only)
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleClickOutside = (e: Event) => {
      const target = e.target as Node;
      const isMobile = window.innerWidth < 768;
      
      if (
        isMobile &&
        menuListRef.current &&
        menuButtonRef.current &&
        !menuListRef.current.contains(target) &&
        !menuButtonRef.current.contains(target)
      ) {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const timeoutId = setTimeout(() => {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle keyboard navigation for menu button
  const handleMenuButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMobileMenu();
    }
  };

  // Handle link click to close menu on mobile
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false);
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

