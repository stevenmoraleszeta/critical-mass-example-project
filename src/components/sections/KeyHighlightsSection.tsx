'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import ScrollArrow from '@/components/ui/ScrollArrow';

/**
 * Key Highlights Section Component
 * 
 * Showcases what I bring to Critical Mass: key strengths, experience,
 * and value propositions aligned with the role requirements.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 */

export default function KeyHighlightsSection() {

  return (
    <section className="key-highlights" id="key-highlights" aria-labelledby="key-highlights-title">
      <div className="key-highlights__container">
        <h2 id="key-highlights-title" className="key-highlights__title">
          Key Highlights – What I Bring to Critical Mass
        </h2>
        
        <div className="key-highlights__grid">
          <Card
            variant="feature"
            title="3+ Years Front-End Experience"
            image={{
              src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
              alt: "Front-end development experience and expertise",
              width: 400,
              height: 300
            }}
          >
            <p>
              Full Stack Software Engineer with more than <strong>3 years of experience</strong> building robust, scalable, and high-performance software across web, desktop, mobile, and hybrid platforms. I work across the full development cycle—from design and architecture to deployment and optimization.
            </p>
          </Card>
          
          <Card
            variant="feature"
            title="Modern Front-End Stack"
            image={{
              src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
              alt: "Modern front-end technologies and frameworks",
              width: 400,
              height: 300
            }}
          >
            <p>
              Strong expertise in <strong>TypeScript, JavaScript, React, Next.js, HTML5, CSS3, SASS/SCSS</strong>, design systems, and reusable components. Experience with automation tools like Gulp, Vite, and modern bundlers for efficient front-end pipelines.
            </p>
          </Card>
          
          <Card
            variant="feature"
            title="Design-to-Code Translation"
            image={{
              src: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
              alt: "Design to code translation and implementation",
              width: 400,
              height: 300
            }}
          >
            <p>
              I translate <strong>Figma designs and wireframes</strong> into standard-compliant HTML5, semantic CSS3, and responsive React/Next.js components with pixel-perfect attention to detail. Experience ensuring cross-browser compatibility and mobile-first, performant code.
            </p>
          </Card>
          
          <Card
            variant="feature"
            title="Full-Stack & API Integration"
            image={{
              src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
              alt: "Full-stack development and API integration",
              width: 400,
              height: 300
            }}
          >
            <p>
              Experience with <strong>RESTful APIs, SOAP, JSON, XML, HTTP</strong>, and integrating web solutions with external services, CMS systems, and third-party applications. Full-stack exposure including databases (PostgreSQL, MongoDB), API design, and performance monitoring.
            </p>
          </Card>
          
          <Card
            variant="feature"
            title="Team Leadership & Collaboration"
            image={{
              src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
              alt: "Team leadership and collaboration",
              width: 400,
              height: 300
            }}
          >
            <p>
              CEO & Lead Developer at <strong>Novaera</strong>, leading a <strong>six-member development team</strong>. I coordinate with design, business, QA, and tech leads to deliver high-quality, punctual web development. Strong in communication, organization, and mentorship.
            </p>
          </Card>
          
          <Card
            variant="feature"
            title="Performance & Problem Solving"
            image={{
              src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
              alt: "Performance optimization and problem solving",
              width: 400,
              height: 300
            }}
          >
            <p>
              Expertise in <strong>performance optimization, scalability, debugging, and root cause analysis</strong>. I analyze and optimize code for quality, efficiency, and performance, identify and resolve scalability issues, and drive efforts to reduce technical debt.
            </p>
          </Card>
        </div>
        
        <ScrollArrow
          targetId="cta"
          color="red"
        />
      </div>
    </section>
  );
}

