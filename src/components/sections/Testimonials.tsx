'use client';

import React from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';

/**
 * Testimonials Section Component
 * 
 * Main testimonials section for the landing page. Displays professional feedback
 * and work approach in a grid layout.
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
 * - 3 testimonial cards reflecting professional approach
 * - Smooth scroll anchor support
 */
export default function Testimonials() {
  // Testimonials reflecting professional work approach and skills
  const testimonials: Array<{
    quote: string;
    author?: string;
    role?: string;
    company?: string;
  }> = [
    {
      quote: "Strong technical leadership with the ability to translate complex requirements into clean, maintainable code. Excellent at collaborating with cross-functional teams and delivering on time.",
    },
    {
      quote: "Proven experience building scalable applications from the ground up. Combines front-end expertise with full-stack understanding, making them valuable in any development context.",
    },
    {
      quote: "Demonstrates deep understanding of modern development practices, accessibility standards, and performance optimization. A resourceful problem-solver who thinks critically about solutions.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__container">
        <h2 id="testimonials-title" className="testimonials__title">
          Professional Approach
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

