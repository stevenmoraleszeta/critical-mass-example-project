'use client';

import React from 'react';
import NavBar from './NavBar';

/**
 * MainLayout Component
 * 
 * Main layout wrapper that provides semantic HTML structure and includes
 * all layout components (NavBar with logo, Footer).
 * Follows Critical Mass accessibility requirements:
 * - Semantic HTML (<header>, <main>, <footer>)
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
 * - NavBar component (logo and navigation with active state)
 * - Main content area
 * - Footer component (to be added)
 */
export default function MainLayout({ children, className = '' }: MainLayoutProps) {
  return (
    <>
      {/* Header (contains logo and navigation) */}
      <header>
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

      {/* Footer - To be implemented */}
      {/* <Footer /> */}
    </>
  );
}

