'use client';

import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

/**
 * MainLayout Component
 * 
 * Main layout wrapper that provides semantic HTML structure and includes
 * all layout components (Header with NavBar, Footer).
 * Follows Critical Mass accessibility requirements:
 * - Semantic HTML (<header>, <nav>, <main>, <footer>)
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
 * - Header (semantic wrapper for navigation)
 *   - NavBar component (logo and navigation with active state)
 * - Main content area
 * - Footer component (social links and contact information)
 */
export default function MainLayout({ children, className = '' }: MainLayoutProps) {
  return (
    <>
      {/* Header - Semantic wrapper for navigation */}
      <header role="banner">
        <NavBar />
      </header>

      {/* Main Content */}
      <main 
        id="main-content"
        className={className}
        role="main"
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

