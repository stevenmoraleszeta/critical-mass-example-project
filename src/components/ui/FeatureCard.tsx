'use client';

import React from 'react';

export interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  draggable?: boolean;
  isDragging?: boolean;
  isDragOver?: boolean;
  rotation?: number;
  animationDelay?: number;
  onDragStart?: () => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDragLeave?: () => void;
  onDrop?: (e: React.DragEvent) => void;
  onDragEnd?: () => void;
}

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
      {icon && (
        <div className="feature-card__icon" aria-hidden="true">
          {icon}
        </div>
      )}

      <div className="feature-card__content">
        <h3 className="feature-card__title">
          {title}
        </h3>

        <p className="feature-card__description">
          {description}
        </p>
      </div>
    </article>
  );
}

