'use client';

import React from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';

/**
 * Testimonials Section Component
 * 
 * Main testimonials section for the landing page. Displays social proof
 * from teams in a grid layout.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <Testimonials />
 * ```
 */

/**
 * Testimonials Section Implementation
 * 
 * Features:
 * - Grid layout (responsive)
 * - 3 testimonial cards
 * - Smooth scroll anchor support
 */
export default function Testimonials() {
  // Testimonials data (from project-idea.md section 3.6)
  const testimonials: Array<{
    quote: string;
    author?: string;
    role?: string;
    company?: string;
  }> = [
    {
      quote: "Working with Steven FE-01 felt like plugging a specialized module into our team – fast to understand the brief, calm under pressure, and always pushing for cleaner code.",
      // Optional: author, role, company can be added if needed
      // Keeping generic as per project-idea.md (fictional but credible)
    },
    {
      quote: "Delivers on time, communicates clearly, and writes code that's easy to maintain. Exactly what you want in a front-end developer.",
    },
    {
      quote: "Brought fresh ideas to our component architecture while respecting existing patterns. Great balance of innovation and pragmatism.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__container">
        <h2 id="testimonials-title" className="testimonials__title">
          What Teams Say
        </h2>
        
        <div className="testimonials__grid">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

