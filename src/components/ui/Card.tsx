'use client';

import React from 'react';
import Image from 'next/image';

export interface CardProps {
  title?: string;
  description?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  footer?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'feature' | 'content';
}

export default function Card({
  title,
  description,
  image,
  footer,
  children,
  className = '',
  variant = 'default',
}: CardProps) {
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
      {image && (
        <div className="card__image">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 400}
            height={image.height || 300}
            className="card__img"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      )}

      <div className="card__content">
        {title && (
          <h3 className="card__title">
            {title}
          </h3>
        )}

        {description && (
          <p className="card__description">
            {description}
          </p>
        )}

        {children && (
          <div className="card__body">
            {children}
          </div>
        )}
      </div>

      {footer && (
        <div className="card__footer">
          {footer}
        </div>
      )}
    </article>
  );
}

