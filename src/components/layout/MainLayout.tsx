'use client';

import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

export interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function MainLayout({ children, className = '' }: MainLayoutProps) {
  return (
    <>
      <header role="banner">
        <NavBar />
      </header>

      <main 
        id="main-content"
        className={className}
        role="main"
      >
        {children}
      </main>

      <Footer />
    </>
  );
}

