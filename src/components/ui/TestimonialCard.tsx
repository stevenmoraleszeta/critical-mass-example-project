'use client';

import React from 'react';

/**
 * TestimonialCard Component
 * 
 * A reusable card component specifically designed for displaying testimonials.
 * Each card includes a quote, optional author information (name, role, company).
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<article>, <blockquote>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <TestimonialCard
 *   quote="Strong technical leadership with the ability to translate complex requirements into clean, maintainable code..."
 *   author="Team Lead"
 *   role="Front-End Manager"
 *   company="Agency Name"
 * />
 * ```
 */

export interface TestimonialCardProps {
  /** Testimonial quote text */
  quote: string;
  /** Optional author name */
  author?: string;
  /** Optional author role */
  role?: string;
  /** Optional company name */
  company?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * TestimonialCard Component Implementation
 * 
 * Features:
 * - Semantic blockquote structure
 * - Optional author attribution
 * - Accessible markup
 * - BEM class naming
 */
export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  className = '',
}: TestimonialCardProps) {
  // Build BEM class names
  const baseClass = 'testimonial-card';
  
  const classNames = [
    baseClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classNames}>
      {/* Quote Section */}
      <blockquote className="testimonial-card__quote">
        <p className="testimonial-card__text">
          {quote}
        </p>
      </blockquote>

      {/* Author Attribution Section */}
      {(author || role || company) && (
        <footer className="testimonial-card__footer">
          {author && (
            <cite className="testimonial-card__author">
              {author}
            </cite>
          )}
          {(role || company) && (
            <div className="testimonial-card__meta">
              {role && (
                <span className="testimonial-card__role">
                  {role}
                </span>
              )}
              {role && company && (
                <span className="testimonial-card__separator" aria-hidden="true">
                  {' · '}
                </span>
              )}
              {company && (
                <span className="testimonial-card__company">
                  {company}
                </span>
              )}
            </div>
          )}
        </footer>
      )}
    </article>
  );
}

