'use client';

import React from 'react';
import FeatureCard from '@/components/ui/FeatureCard';
import Toast from '@/components/feedback/Toast';
import ScrollArrow from '@/components/ui/ScrollArrow';
import { useDragAndDrop } from '@/lib/hooks/useDragAndDrop';

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
  const {
    items: cards,
    draggedIndex,
    dragOverIndex,
    showToast,
    handlers: dragHandlers,
  } = useDragAndDrop<CardData>({
    items: initialCards,
    enabled: draggable,
    storageKey,
  });


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
                onDragStart: () => dragHandlers.onDragStart(index),
                onDragOver: (e) => dragHandlers.onDragOver(e, index),
                onDragLeave: dragHandlers.onDragLeave,
                onDrop: (e) => dragHandlers.onDrop(e, index),
                onDragEnd: dragHandlers.onDragEnd,
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
            <ScrollArrow
              targetId={scrollTargetId}
              color="red"
            />
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
            onClick: dragHandlers.onReset,
          }}
          onDismiss={dragHandlers.dismissToast}
        />
      )}
    </>
  );
}

