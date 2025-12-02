'use client';

import React from 'react';

/**
 * UseCaseCard Component
 * 
 * A reusable card component specifically designed for displaying use cases.
 * Each card includes a question and an answer/solution.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<article>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <UseCaseCard
 *   question="Need a pixel-perfect build from a Figma file?"
 *   answer="Steven FE-01 converts design tokens, grids and components into maintainable front-end architecture."
 * />
 * ```
 */

export interface UseCaseCardProps {
  /** Use case question */
  question: string;
  /** Use case answer/solution */
  answer: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * UseCaseCard Component Implementation
 * 
 * Features:
 * - Question/answer structure
 * - Semantic HTML structure
 * - Accessible markup
 * - BEM class naming
 */
export default function UseCaseCard({
  question,
  answer,
  className = '',
}: UseCaseCardProps) {
  // Build BEM class names
  const baseClass = 'use-case-card';
  
  const classNames = [
    baseClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classNames}>
      {/* Content Section */}
      <div className="use-case-card__content">
        {/* Question */}
        <h3 className="use-case-card__question">
          {question}
        </h3>

        {/* Answer */}
        <p className="use-case-card__answer">
          {answer}
        </p>
      </div>
    </article>
  );
}

