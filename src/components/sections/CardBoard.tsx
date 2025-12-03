'use client';

import React, { useState, useEffect } from 'react';
import FeatureCard from '@/components/ui/FeatureCard';
import Toast from '@/components/feedback/Toast';

/**
 * CardBoard Component
 * 
 * A reusable component for displaying a grid of cards with optional drag & drop functionality.
 * Used directly in pages (Home, This Project) to maintain consistent design and behavior.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * - Optional drag and drop with localStorage persistence
 */

export interface CardData {
  id: string;
  title: string;
  description: string;
}

export interface CardBoardProps {
  /** Section ID for accessibility */
  id: string;
  /** Section title */
  title: string | React.ReactNode;
  /** Section subtitle/description */
  subtitle?: string | React.ReactNode;
  /** Array of cards to display */
  cards: CardData[];
  /** Enable drag and drop functionality */
  draggable?: boolean;
  /** localStorage key for persisting card order (only used if draggable is true) */
  storageKey?: string;
  /** Optional scroll target ID for scroll arrow */
  scrollTargetId?: string;
  /** Additional CSS classes */
  className?: string;
  /** Custom render function for cards (optional) */
  renderCard?: (card: CardData, index: number, handlers: DragHandlers) => React.ReactNode;
}

interface DragHandlers {
  onDragStart: () => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: () => void;
  onDrop: (e: React.DragEvent) => void;
  onDragEnd: () => void;
}

export default function CardBoard({
  id,
  title,
  subtitle,
  cards: initialCards,
  draggable = false,
  storageKey,
  scrollTargetId,
  className = '',
  renderCard,
}: CardBoardProps) {
  const [cards, setCards] = useState<CardData[]>(initialCards);
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [showToast, setShowToast] = useState(false);

  // Load cards order from localStorage if draggable and storageKey provided
  useEffect(() => {
    if (!draggable || !storageKey || typeof window === 'undefined') {
      return;
    }

    const savedOrder = localStorage.getItem(storageKey);
    if (!savedOrder) {
      return;
    }

    try {
      const order = JSON.parse(savedOrder) as string[];
      const orderedCards = order
        .map((id) => initialCards.find((card) => card.id === id))
        .filter((card): card is CardData => card !== undefined);
      
      const existingIds = new Set(order);
      const newCards = initialCards.filter((card) => !existingIds.has(card.id));
      
      setCards([...orderedCards, ...newCards]);
    } catch {
      // Silently fail if localStorage is unavailable or corrupted
    }
  }, [draggable, storageKey, initialCards]);

  // Save order to localStorage whenever it changes
  useEffect(() => {
    if (!draggable || !storageKey || typeof window === 'undefined' || cards.length === 0) {
      return;
    }

    try {
      const order = cards.map((card) => card.id);
      localStorage.setItem(storageKey, JSON.stringify(order));
    } catch {
      // Silently fail if localStorage is unavailable
    }
  }, [cards, draggable, storageKey]);

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
    
    if (storageKey) {
      setShowToast(true);
    }
  };

  const handleReset = () => {
    if (typeof window !== 'undefined' && storageKey) {
      try {
        localStorage.removeItem(storageKey);
        setCards(initialCards);
        setShowToast(false);
      } catch {
        setCards(initialCards);
        setShowToast(false);
      }
    }
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleScrollDown = () => {
    if (!scrollTargetId || typeof window === 'undefined') return;
    
    const targetElement = document.getElementById(scrollTargetId);
    
    if (targetElement) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      targetElement.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
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

  const titleId = `${id}-title`;

  const calculateRotation = (index: number): number => {
    const rotations = [
      -5.5, 1.5, 5.5, 4.5, -1, -4.5,
      -3.2, 2.8, -2.3, 3.7, -4.1, 1.8,
      -5.2, 4.3, -1.7, 2.5, -3.8, 5.1,
      -2.1, 3.9, -4.7, 1.3, -5.8, 2.9,
      -3.5, 4.8, -1.2, 3.1, -4.9, 2.2,
    ];
    
    return rotations[index % rotations.length];
  };

  const calculateAnimationDelay = (index: number): number => {
    return 0.2 + (index * 0.2);
  };

  return (
    <>
      <section className={`card-board ${className}`} id={id} aria-labelledby={titleId}>
        <div className="card-board__container">
          <h2 id={titleId} className="card-board__title">
            {title}
          </h2>
          
          {subtitle && (
            <p className="card-board__subtitle">
              {subtitle}
            </p>
          )}
          
          <div className="card-board__grid">
            {cards.map((card, index) => {
              const handlers: DragHandlers = {
                onDragStart: () => handleDragStart(index),
                onDragOver: (e) => handleDragOver(e, index),
                onDragLeave: handleDragLeave,
                onDrop: (e) => handleDrop(e, index),
                onDragEnd: handleDragEnd,
              };

              const rotation = calculateRotation(index);
              const animationDelay = calculateAnimationDelay(index);

              if (renderCard) {
                return (
                  <React.Fragment key={card.id}>
                    {renderCard(card, index, handlers)}
                  </React.Fragment>
                );
              }

              return (
                <FeatureCard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                  draggable={draggable}
                  isDragging={draggedIndex === index}
                  isDragOver={dragOverIndex === index}
                  rotation={rotation}
                  animationDelay={animationDelay}
                  onDragStart={handlers.onDragStart}
                  onDragOver={handlers.onDragOver}
                  onDragLeave={handlers.onDragLeave}
                  onDrop={handlers.onDrop}
                  onDragEnd={handlers.onDragEnd}
                />
              );
            })}
          </div>
          
          {scrollTargetId && (
            <button
              className="card-board__scroll-arrow"
              onClick={handleScrollDown}
              onKeyDown={handleKeyDown}
              aria-label="Scroll to next section"
              type="button"
            >
              <svg
                className="card-board__scroll-arrow-icon"
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
          )}
        </div>
      </section>
      
      {showToast && storageKey && (
        <Toast
          message="Order saved to localStorage"
          variant="warning"
          position="top-right"
          autoDismiss={false}
          actionButton={{
            label: 'Reset',
            onClick: handleReset,
          }}
          onDismiss={() => setShowToast(false)}
        />
      )}
    </>
  );
}

