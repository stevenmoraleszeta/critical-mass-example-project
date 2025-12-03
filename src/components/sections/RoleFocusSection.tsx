'use client';

import React from 'react';
import CardBoard, { CardData } from '@/components/sections/CardBoard';

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
 * - Drag and drop functionality with localStorage persistence
 */

const initialCards: CardData[] = [
  {
    id: '1',
    title: 'Design Translation',
    description: 'I translate Figma/wireframes into semantic HTML5, modern CSS3, and React/Next.js components.',
  },
  {
    id: '2',
    title: 'Responsive & Accessible',
    description: 'I build mobile-first layouts with accessibility best practices (WCAG mindset) and cross-browser support.',
  },
  {
    id: '3',
    title: 'API Integration',
    description: 'I work daily with REST APIs, JSON, HTTP, and have familiarity with SOAP and external services.',
  },
  {
    id: '4',
    title: 'Tooling',
    description: 'I use SASS/LESS, Gulp, Vite, GitHub Actions and modern bundlers to maintain efficient front-end pipelines.',
  },
  {
    id: '5',
    title: 'Collaboration',
    description: 'I coordinate with design, business, QA, and tech leads to deliver on time with quality.',
  },
  {
    id: '6',
    title: 'Ownership',
    description: "I'm used to owning features end-to-end, providing time estimates, and communicating progress clearly.",
  },
];

export default function RoleFocusSection() {
  return (
    <CardBoard
      id="role-focus"
      title={
        <>
          Role Focus: Developer, Front End<br />
          @ Critical Mass
        </>
      }
      subtitle={
        <>
          This portfolio is intentionally designed as a <strong>live case study</strong> for the <strong>Developer, Front End</strong> position at Critical Mass:
        </>
      }
      cards={initialCards}
      draggable={true}
      storageKey="role-focus-cards-order"
      scrollTargetId="key-highlights"
      className="role-focus"
    />
  );
}
