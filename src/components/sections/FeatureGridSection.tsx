'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import ScrollArrow from '@/components/ui/ScrollArrow';

export interface FeatureItem {
  title: string;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  content: React.ReactNode;
}

export interface FeatureGridSectionProps {
  title: string;
  id?: string;
  highlights: FeatureItem[];
  actionButton?: {
    text: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'highlight' | 'exit' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    ariaLabel?: string;
    prefetch?: boolean;
    className?: string;
  };
  scrollArrow?: {
    targetId: string;
    color?: 'white' | 'red' | 'primary' | 'secondary';
  };
  className?: string;
}

export default function FeatureGridSection({
  title,
  id,
  highlights,
  actionButton,
  scrollArrow,
  className = '',
}: FeatureGridSectionProps) {
  const sectionId = id || 'feature-grid';
  const titleId = `${sectionId}-title`;

  const baseClass = 'feature-grid';
  const classNames = [
    baseClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section 
      className={classNames} 
      id={sectionId} 
      aria-labelledby={titleId}
    >
      <div className={`${baseClass}__container`}>
        <h2 id={titleId} className={`${baseClass}__title`}>
          {title}
        </h2>
        
        <div className={`${baseClass}__grid`}>
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              variant="feature"
              title={highlight.title}
              image={highlight.image}
            >
              {highlight.content}
            </Card>
          ))}
        </div>
        
        {actionButton && (
          <div className={`${baseClass}__action`}>
            <Button
              variant={actionButton.variant || 'exit'}
              size={actionButton.size || 'lg'}
              href={actionButton.href}
              ariaLabel={actionButton.ariaLabel || actionButton.text}
              prefetch={actionButton.prefetch}
              className={`${baseClass}__button ${actionButton.className || ''}`}
            >
              {actionButton.text}
            </Button>
          </div>
        )}
        
        {scrollArrow && (
          <ScrollArrow
            targetId={scrollArrow.targetId}
            color={scrollArrow.color || 'red'}
          />
        )}
      </div>
    </section>
  );
}

