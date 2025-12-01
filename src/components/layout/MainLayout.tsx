'use client';

import React from 'react';
import Link from 'next/link';
import Header from './Header';
import NavBar from './NavBar';

/**
 * MainLayout Component
 * 
 * Main layout wrapper that provides semantic HTML structure and includes
 * all layout components (Header, NavBar, Footer).
 * Follows Critical Mass accessibility requirements:
 * - Semantic HTML (<header>, <main>, <footer>)
 * - Skip link for keyboard navigation
 * - Proper ARIA landmarks
 * - Responsive design
 * 
 * @example
 * ```tsx
 * <MainLayout>
 *   <YourPageContent />
 * </MainLayout>
 * ```
 */

export interface MainLayoutProps {
  /** Page content to be wrapped */
  children: React.ReactNode;
  /** Additional CSS classes for main element */
  className?: string;
}

/**
 * MainLayout Component Implementation
 * 
 * Structure:
 * - Skip link (accessibility)
 * - Header component
 * - NavBar component
 * - Main content area
 * - Footer component (to be added)
 */
export default function MainLayout({ children, className = '' }: MainLayoutProps) {
  return (
    <>
      {/* Skip Link for Accessibility */}
      <Link 
        href="#main-content" 
        className="skip-link"
        aria-label="Skip to main content"
      >
        Skip to main content
      </Link>

      {/* Header */}
      <Header />

      {/* Navigation Bar */}
      <NavBar />

      {/* Main Content */}
      <main 
        id="main-content" 
        className={className}
        role="main"
      >
        {children}
      </main>

      {/* Footer - To be implemented */}
      {/* <Footer /> */}
    </>
  );
}

