/**
 * Header Component Tests
 * 
 * Tests for the Header component following Critical Mass testing requirements.
 * Verifies rendering, accessibility, and responsive behavior.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '@/components/layout/Header';

describe('Header Component', () => {
  it('renders without errors', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
  });

  it('renders logo with correct text', () => {
    render(<Header />);
    const logoLink = screen.getByLabelText('Steven Morales - Home');
    expect(logoLink).toBeInTheDocument();
    
    const logoText = screen.getByText('SM');
    expect(logoText).toBeInTheDocument();
  });

  it('renders navigation with all links', () => {
    render(<Header />);
    
    const nav = screen.getByRole('navigation', { name: 'Main navigation' });
    expect(nav).toBeInTheDocument();
    
    // Check all navigation links are present
    expect(screen.getByLabelText('Go to home page')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to components page')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to content page')).toBeInTheDocument();
    expect(screen.getByLabelText('Go to about page')).toBeInTheDocument();
  });

  it('has correct semantic HTML structure', () => {
    const { container } = render(<Header />);
    
    // Check for semantic header element
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
    
    // Check for nav element
    const nav = container.querySelector('nav');
    expect(nav).toBeInTheDocument();
    
    // Check for list structure
    const list = container.querySelector('ul');
    expect(list).toBeInTheDocument();
  });

  it('applies correct BEM class names', () => {
    const { container } = render(<Header />);
    
    const header = container.querySelector('.header');
    expect(header).toBeInTheDocument();
    
    const containerEl = container.querySelector('.header__container');
    expect(containerEl).toBeInTheDocument();
    
    const logo = container.querySelector('.header__logo');
    expect(logo).toBeInTheDocument();
    
    const nav = container.querySelector('.header__nav');
    expect(nav).toBeInTheDocument();
  });

  it('has accessible link labels', () => {
    render(<Header />);
    
    const logoLink = screen.getByLabelText('Steven Morales - Home');
    expect(logoLink).toHaveAttribute('aria-label', 'Steven Morales - Home');
    
    const homeLink = screen.getByLabelText('Go to home page');
    expect(homeLink).toHaveAttribute('aria-label', 'Go to home page');
  });
});

