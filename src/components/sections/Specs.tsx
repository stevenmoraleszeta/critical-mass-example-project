'use client';

import React from 'react';

/**
 * Specs Section Component
 * 
 * Tech Specs section for the landing page. Displays supported technologies,
 * protocols, and integrations in a column layout.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <Specs
 *   title="Tech Specs"
 *   columns={[
 *     {
 *       title: "Supported Technologies",
 *       items: ["React", "Next.js", "TypeScript", "HTML5", "CSS3", "SASS", "Git", "Jest", "RTL"]
 *     },
 *     {
 *       title: "Protocols & Data",
 *       items: ["HTTP", "JSON", "Basic XML", "REST APIs"]
 *     },
 *     {
 *       title: "Integrations",
 *       items: ["CMS-like data", "3rd-party APIs", "Webhooks"]
 *     }
 *   ]}
 *   footerNote="Backwards-compatible with legacy codebases (with patience)."
 * />
 * ```
 */

export interface SpecsSectionProps {
  /** Section title (H2) */
  title: string;
  /** Array of column configurations */
  columns: {
    /** Column title */
    title: string;
    /** Array of items in the column */
    items: string[];
  }[];
  /** Optional footer note */
  footerNote?: string;
}

/**
 * Specs Section Implementation
 * 
 * Features:
 * - Responsive column layout (1 column mobile, 3 columns desktop)
 * - Semantic structure with proper heading hierarchy
 * - Accessible list markup
 */
export default function Specs({
  title,
  columns,
  footerNote,
}: SpecsSectionProps) {
  return (
    <section className="specs" id="specs" aria-labelledby="specs-title">
      <div className="specs__container">
        <h2 id="specs-title" className="specs__title">
          {title}
        </h2>
        
        <div className="specs__columns">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="specs__column">
              <h3 className="specs__column-title">
                {column.title}
              </h3>
              <ul className="specs__list">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="specs__item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {footerNote && (
          <p className="specs__footer-note">
            {footerNote}
          </p>
        )}
      </div>
    </section>
  );
}

