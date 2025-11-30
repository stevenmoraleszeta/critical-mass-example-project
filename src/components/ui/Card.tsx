'use client';

import React from 'react';
import Image from 'next/image';

/**
 * Card Component
 * 
 * A reusable card component with multiple variants and flexible content support.
 * Supports image, footer, and custom children content with full accessibility.
 * 
 * @example
 * ```tsx
 * <Card variant="default" title="Card Title" description="Card description">
 *   Card content
 * </Card>
 * 
 * <Card 
 *   variant="feature" 
 *   title="Feature" 
 *   description="Feature description"
 *   image={{ src: "/image.jpg", alt: "Feature image" }}
 * />
 * 
 * <Card variant="content" footer={<Button>Action</Button>}>
 *   <p>Content card with footer</p>
 * </Card>
 * ```
 */

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card description */
  description?: string;
  /** Card image with src and alt */
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  /** Card footer content (React node) */
  footer?: React.ReactNode;
  /** Card main content (React node) - used instead of or alongside title/description */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Card variant: default, feature, or content */
  variant?: 'default' | 'feature' | 'content';
}

/**
 * Card Component Implementation
 * 
 * Handles three variants with flexible content support.
 * Follows Critical Mass accessibility requirements:
 * - Semantic HTML (<article> for cards)
 * - Proper heading hierarchy when title is provided
 * - Image alt text support
 * - Keyboard navigation support
 */
export default function Card({
  title,
  description,
  image,
  footer,
  children,
  className = '',
  variant = 'default',
}: CardProps) {
  // Build BEM class names
  const baseClass = 'card';
  const variantClass = `card--${variant}`;
  
  const classNames = [
    baseClass,
    variantClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classNames}>
      {/* Image Section */}
      {image && (
        <div className="card__image">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 400}
            height={image.height || 300}
            className="card__img"
            loading="lazy"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="card__content">
        {/* Title */}
        {title && (
          <h3 className="card__title">
            {title}
          </h3>
        )}

        {/* Description */}
        {description && (
          <p className="card__description">
            {description}
          </p>
        )}

        {/* Children Content */}
        {children && (
          <div className="card__body">
            {children}
          </div>
        )}
      </div>

      {/* Footer Section */}
      {footer && (
        <div className="card__footer">
          {footer}
        </div>
      )}
    </article>
  );
}

