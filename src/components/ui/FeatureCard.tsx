'use client';

import React from 'react';

/**
 * FeatureCard Component
 * 
 * A reusable card component specifically designed for displaying features.
 * Each card includes an icon, title, and description.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<article>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={<DesignIcon />}
 *   title="Design-to-Code Translation"
 *   description="Converts Figma and wireframes into clean, semantic HTML/CSS and reusable React components."
 * />
 * ```
 */

export interface FeatureCardProps {
  /** Optional icon element (SVG or React component) */
  icon?: React.ReactNode;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Additional CSS classes */
  className?: string;
  /** Enable drag and drop */
  draggable?: boolean;
  /** Is currently being dragged */
  isDragging?: boolean;
  /** Is drag over target */
  isDragOver?: boolean;
  /** Rotation angle in degrees for disordered appearance */
  rotation?: number;
  /** Animation delay in seconds */
  animationDelay?: number;
  /** Drag start handler */
  onDragStart?: () => void;
  /** Drag over handler */
  onDragOver?: (e: React.DragEvent) => void;
  /** Drag leave handler */
  onDragLeave?: () => void;
  /** Drop handler */
  onDrop?: (e: React.DragEvent) => void;
  /** Drag end handler */
  onDragEnd?: () => void;
}

/**
 * FeatureCard Component Implementation
 * 
 * Features:
 * - Icon support (optional)
 * - Semantic HTML structure
 * - Accessible markup
 * - BEM class naming
 */
export default function FeatureCard({
  icon,
  title,
  description,
  className = '',
  draggable = false,
  isDragging = false,
  isDragOver = false,
  rotation = 0,
  animationDelay = 0,
  onDragStart,
  onDragOver,
  onDragLeave,
  onDrop,
  onDragEnd,
}: FeatureCardProps) {
  // Build BEM class names
  const baseClass = 'feature-card';
  
  const classNames = [
    baseClass,
    isDragging && `${baseClass}--dragging`,
    isDragOver && `${baseClass}--drag-over`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const style = {
    '--card-rotation': `${rotation}deg`,
    '--card-animation-delay': `${animationDelay}s`,
  } as React.CSSProperties;

  return (
    <article
      className={classNames}
      style={style}
      draggable={draggable}
      onDragStart={(e) => {
        if (draggable && onDragStart) {
          e.dataTransfer.effectAllowed = 'move';
          onDragStart();
        }
      }}
      onDragOver={(e) => {
        if (draggable && onDragOver) {
          e.preventDefault();
          onDragOver(e);
        }
      }}
      onDragLeave={() => {
        if (draggable && onDragLeave) {
          onDragLeave();
        }
      }}
      onDrop={(e) => {
        if (draggable && onDrop) {
          e.preventDefault();
          onDrop(e);
        }
      }}
      onDragEnd={() => {
        if (draggable && onDragEnd) {
          onDragEnd();
        }
      }}
      aria-grabbed={draggable ? isDragging : undefined}
    >
      {/* Icon Section */}
      {icon && (
        <div className="feature-card__icon" aria-hidden="true">
          {icon}
        </div>
      )}

      {/* Content Section */}
      <div className="feature-card__content">
        {/* Title */}
        <h3 className="feature-card__title">
          {title}
        </h3>

        {/* Description */}
        <p className="feature-card__description">
          {description}
        </p>
      </div>
    </article>
  );
}

