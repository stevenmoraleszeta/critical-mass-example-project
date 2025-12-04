'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useToggle, useClickOutside, useMediaQuery } from '@/lib/hooks';

export interface NavBarProps {
  className?: string;
}

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

export default function NavBar({ className = '' }: NavBarProps) {
  const pathname = usePathname();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const mobileMenu = useToggle(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuListRef = useRef<HTMLUListElement>(null);
  const previousPathnameRef = useRef<string>(pathname);

  const baseClass = 'navbar';
  const classNames = [baseClass, className].filter(Boolean).join(' ');

  useEffect(() => {
    if (previousPathnameRef.current !== pathname) {
      if (mobileMenu.value) {
        mobileMenu.setFalse();
      }
      previousPathnameRef.current = pathname;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenu.value) {
        mobileMenu.setFalse();
        setTimeout(() => {
          menuButtonRef.current?.focus();
        }, 0);
      }
    };

    if (mobileMenu.value) {
      document.addEventListener('keydown', handleEscape);
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

  useEffect(() => {
    if (mobileMenu.value && menuListRef.current && isMobile) {
      const timeoutId = setTimeout(() => {
        const firstLink = menuListRef.current?.querySelector('a') as HTMLAnchorElement;
        if (firstLink) {
          firstLink.focus();
        }
      }, 150);
      
      return () => clearTimeout(timeoutId);
    }
  }, [mobileMenu.value, isMobile]);

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

  const handleMenuButtonKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      mobileMenu.toggle();
    }
  };

  const handleLinkClick = () => {
    if (isMobile) {
      mobileMenu.setFalse();
      setTimeout(() => {
        menuButtonRef.current?.focus();
      }, 100);
    }
  };

  const isActiveLink = (href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav 
      className={classNames} 
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link 
            href="/" 
            className="navbar__logo-link"
            aria-label="Steven Morales - Home"
          >
            <span className="navbar__logo-initials" aria-hidden="true">SM</span>
          </Link>
        </div>

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

