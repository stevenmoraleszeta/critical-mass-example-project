'use client';

import React from 'react';
import StatCard from '@/components/ui/StatCard';

/**
 * Leadership & Collaboration Section Component
 * 
 * Highlights leadership experience, team collaboration, and cross-functional
 * work - key requirements for Critical Mass agency environment.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 */

export default function LeadershipSection() {
  return (
    <section className="leadership" id="leadership" aria-labelledby="leadership-title">
      <div className="leadership__container">
        <h2 id="leadership-title" className="leadership__title">
          Leadership & Collaboration
        </h2>
        
        <p className="leadership__subtitle">
          Experience leading teams and collaborating with cross-functional partners to deliver high-quality solutions.
        </p>
        
        <div className="leadership__grid">
          <StatCard
            title="Team Leadership"
            description="Leading 6+ developers at Novaera and 4+ educators at ZETA Academia. Establishing workflows, code reviews, CI/CD integration, and process improvement."
          />
          
          <StatCard
            title="Cross-Functional Collaboration"
            description="Working with Creative, Business, Technology, and QA teams to ensure delivery of high-quality, punctual web development. Experience translating business needs into technical solutions."
          />
          
          <StatCard
            title="Communication & Transparency"
            description="Providing clear progress updates and realistic estimates to stakeholders. Ensuring transparency throughout development process while maintaining code quality and best practices."
          />
        </div>
        
        <div className="leadership__paragraph">
          <p>
            At Novaera and ZETA Academia, I've learned that successful projects require more than just technical expertise. 
            They demand clear communication, realistic planning, and collaborative problem-solving. I work closely with 
            designers to translate Figma designs into maintainable code, with business stakeholders to understand requirements, 
            and with QA teams to ensure quality. This collaborative approach has been essential in delivering applications 
            that serve 1,000+ users while maintaining scalability and performance.
          </p>
        </div>
      </div>
    </section>
  );
}

