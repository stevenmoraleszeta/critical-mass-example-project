'use client';

import React from 'react';
import Card from '@/components/ui/Card';

/**
 * Role Focus Section Component
 * 
 * Highlights the specific skills and approach aligned with the Critical Mass
 * Developer, Front End position requirements.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 */

export default function RoleFocusSection() {

  return (
    <section className="role-focus" id="role-focus" aria-labelledby="role-focus-title">
      <div className="role-focus__container">
        <h2 id="role-focus-title" className="role-focus__title">
          Role Focus: Developer, Front End @ Critical Mass
        </h2>
        
        <p className="role-focus__subtitle">
          This portfolio is intentionally designed as a <strong>live case study</strong> for the <strong>Developer, Front End</strong> position at Critical Mass:
        </p>
        
        <div className="role-focus__grid">
          <Card
            variant="feature"
            title="Design Translation"
            description="I translate Figma/wireframes into semantic HTML5, modern CSS3, and React/Next.js components."
            image={{
              src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
              alt: "Design tools and wireframes representing design translation",
              width: 400,
              height: 300
            }}
          />
          
          <Card
            variant="feature"
            title="Responsive & Accessible"
            description="I build mobile-first layouts with accessibility best practices (WCAG mindset) and cross-browser support."
            image={{
              src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
              alt: "Multiple devices showing responsive design",
              width: 400,
              height: 300
            }}
          />
          
          <Card
            variant="feature"
            title="API Integration"
            description="I work daily with REST APIs, JSON, HTTP, and have familiarity with SOAP and external services."
            image={{
              src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
              alt: "API connections and network integration",
              width: 400,
              height: 300
            }}
          />
          
          <Card
            variant="feature"
            title="Tooling"
            description="I use SASS/LESS, Gulp, Vite, GitHub Actions and modern bundlers to maintain efficient front-end pipelines."
            image={{
              src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
              alt: "Development tools and automation",
              width: 400,
              height: 300
            }}
          />
          
          <Card
            variant="feature"
            title="Collaboration"
            description="I coordinate with design, business, QA, and tech leads to deliver on time with quality."
            image={{
              src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
              alt: "Team collaboration and communication",
              width: 400,
              height: 300
            }}
          />
          
          <Card
            variant="feature"
            title="Ownership"
            description="I'm used to owning features end-to-end, providing time estimates, and communicating progress clearly."
            image={{
              src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
              alt: "Project ownership and responsibility",
              width: 400,
              height: 300
            }}
          />
        </div>
      </div>
    </section>
  );
}

