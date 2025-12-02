'use client';

import React from 'react';
import Card from '@/components/ui/Card';

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
            title="Front-End Expertise"
            image={{
              src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
              alt: "Front-end development technologies and frameworks",
              width: 400,
              height: 300
            }}
          >
            <p>
              Strong in <strong>HTML, CSS, JavaScript, TypeScript, React, Next.js</strong>, design systems and reusable components.
            </p>
          </Card>
          
          <Card
            variant="feature"
            title="Product Mindset"
            image={{
              src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
              alt: "Product strategy and user experience design",
              width: 400,
              height: 300
            }}
          >
            <p>
              I think in <strong>flows, user journeys, and product impact</strong>, not just isolated tasks.
            </p>
          </Card>
          
          <Card
            variant="feature"
            title="Performance & Quality"
            image={{
              src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
              alt: "Performance metrics and quality assurance",
              width: 400,
              height: 300
            }}
          >
            <p>
              Experience with <strong>performance optimization, scalability, and maintainable architectures</strong>.
            </p>
          </Card>
          
          <Card
            variant="feature"
            title="Leadership & Mentorship"
            image={{
              src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
              alt: "Team leadership and mentorship",
              width: 400,
              height: 300
            }}
          >
            <p>
              CEO & Lead Developer at <strong>Novaera</strong>, leading a <strong>multi-developer engineering team</strong>.
            </p>
          </Card>
          
          <Card
            variant="feature"
            title="Education & Impact"
            image={{
              src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
              alt: "Education and teaching impact",
              width: 400,
              height: 300
            }}
          >
            <p>
              CEO & Lead Tech Educator at <strong>ZETA Academia</strong>, offering <strong>30+ courses</strong> to <strong>1,000+ students</strong> in Python, AI, Java, Excel, and more.
            </p>
          </Card>
          
          <Card
            variant="feature"
            title="Problem Solver"
            image={{
              src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
              alt: "Problem solving and technical solutions",
              width: 400,
              height: 300
            }}
          >
            <p>
              Comfortable with <strong>debugging, root cause analysis, and reducing technical debt</strong>.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

