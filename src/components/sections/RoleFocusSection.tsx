'use client';

import React, { useState, useEffect } from 'react';
import FeatureCard from '@/components/ui/FeatureCard';
import Toast from '@/components/feedback/Toast';

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

const STORAGE_KEY = 'role-focus-cards-order';

interface CardData {
  id: string;
  title: string;
  description: string;
}

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

// Function to load cards order from localStorage
const loadCardsFromStorage = (): CardData[] => {
  if (typeof window === 'undefined') {
    return initialCards;
  }

  const savedOrder = localStorage.getItem(STORAGE_KEY);
  if (!savedOrder) {
    return initialCards;
  }

  try {
    const order = JSON.parse(savedOrder) as string[];
    const orderedCards = order
      .map((id) => initialCards.find((card) => card.id === id))
      .filter((card): card is CardData => card !== undefined);
    
    // Add any new cards that might not be in saved order
    const existingIds = new Set(order);
    const newCards = initialCards.filter((card) => !existingIds.has(card.id));
    
    return [...orderedCards, ...newCards];
  } catch (error) {
    console.error('Error loading card order from localStorage:', error);
    return initialCards;
  }
};

export default function RoleFocusSection() {
  const [cards, setCards] = useState<CardData[]>(loadCardsFromStorage);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);

  // Save order to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && cards.length > 0) {
      const order = cards.map((card) => card.id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(order));
    }
  }, [cards]);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverIndex(index);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  const handleDrop = (e: React.DragEvent, dropIndex: number) => {
    e.preventDefault();
    
    if (draggedIndex === null || draggedIndex === dropIndex) {
      setDraggedIndex(null);
      setDragOverIndex(null);
      return;
    }

    const newCards = [...cards];
    const draggedCard = newCards[draggedIndex];
    
    newCards.splice(draggedIndex, 1);
    newCards.splice(dropIndex, 0, draggedCard);
    
    setCards(newCards);
    setDraggedIndex(null);
    setDragOverIndex(null);
    
    // Show toast notification
    setShowToast(true);
  };
  
  const handleReset = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
      setCards(initialCards);
      setShowToast(false);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleScrollDown = () => {
    if (typeof window === 'undefined') return;
    
    const targetElement = document.getElementById('key-highlights');
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleScrollDown();
    }
  };

  return (
    <>
      <section className="role-focus" id="role-focus" aria-labelledby="role-focus-title">
        <div className="role-focus__container">
          <h2 id="role-focus-title" className="role-focus__title">
            Role Focus: Developer, Front End<br />
            @ Critical Mass
          </h2>
          
          <p className="role-focus__subtitle">
            This portfolio is intentionally designed as a <strong>live case study</strong> for the <strong>Developer, Front End</strong> position at Critical Mass:
          </p>
          
          <div className="role-focus__grid">
            {cards.map((card, index) => (
              <FeatureCard
                key={card.id}
                title={card.title}
                description={card.description}
                draggable
                isDragging={draggedIndex === index}
                isDragOver={dragOverIndex === index}
                onDragStart={() => handleDragStart(index)}
                onDragOver={(e) => handleDragOver(e, index)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, index)}
                onDragEnd={handleDragEnd}
              />
            ))}
          </div>
          
          <button
            className="role-focus__scroll-arrow"
            onClick={handleScrollDown}
            onKeyDown={handleKeyDown}
            aria-label="Scroll to next section"
            type="button"
          >
            <svg
              className="role-focus__scroll-arrow-icon"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>
      
      {showToast && (
        <Toast
          message="Orden guardado en localStorage"
          variant="error"
          position="top-right"
          autoDismiss={false}
          actionButton={{
            label: 'Resetear',
            onClick: handleReset,
          }}
          onDismiss={() => setShowToast(false)}
        />
      )}
    </>
  );
}
