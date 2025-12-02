'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import FloatingBinaryElements from '@/components/ui/FloatingBinaryElements';

/**
 * Hero Component
 * 
 * Main hero section for the landing page. Presents Steven Morales as a product
 * with clear CTAs and engaging copy.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h1>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 * 
 * @example
 * ```tsx
 * <Hero
 *   title="Meet Steven Morales: Your Next Front-End Experience Engine."
 *   subtitle="A human-first, code-driven product..."
 *   ctaPrimary={{ text: "View Features", href: "#features" }}
 *   ctaSecondary={{ text: "See Live Content", href: "/content" }}
 *   note="No monthly subscription. Just coffee and interesting problems."
 * />
 * ```
 */

export interface HeroProps {
  /** Main title (H1) */
  title: string;
  /** Subtitle text */
  subtitle: string;
  /** Primary CTA button configuration */
  ctaPrimary: {
    text: string;
    href: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'ghost' | 'save' | 'exit';
  };
  /** Secondary CTA button configuration */
  ctaSecondary: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  /** Optional note text (small copy) */
  note?: string;
  /** Optional image configuration */
  image?: {
    src: string;
    alt: string;
  };
  /** Optional background image configuration */
  backgroundImage?: {
    src: string;
    alt?: string;
  };
}

/**
 * Hero Component Implementation
 * 
 * Features:
 * - Smooth scroll to Features section (for primary CTA)
 * - Responsive layout (mobile-first)
 * - Background gradient
 * - Accessible semantic structure
 */
export default function Hero({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  note,
  image,
  backgroundImage,
}: HeroProps) {
  // Handle smooth scroll to Features section
  const handlePrimaryClick = () => {
    if (ctaPrimary.onClick) {
      ctaPrimary.onClick();
    }
    
    // If href is an anchor link, implement smooth scroll
    if (ctaPrimary.href.startsWith('#')) {
      const targetId = ctaPrimary.href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <section 
      className="hero" 
      aria-labelledby="hero-title"
    >
      {/* Optimized background image using next/image */}
      {backgroundImage && (
        <div className="hero__background-image" aria-hidden="true">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt || ''}
            fill
            priority
            quality={85}
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
            className="hero__background-image-element"
          />
        </div>
      )}
      
      <div className="hero__container">
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            {title}
          </h1>
          
          <p className="hero__subtitle">
            {subtitle}
          </p>
          
          <div className="hero__actions">
            <Button
              variant={ctaPrimary.variant || "primary"}
              size="lg"
              href={ctaPrimary.href.startsWith('#') ? undefined : ctaPrimary.href}
              onClick={handlePrimaryClick}
              ariaLabel={ctaPrimary.text}
            >
              {ctaPrimary.text}
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              href={ctaSecondary.href}
              onClick={ctaSecondary.onClick}
              ariaLabel={ctaSecondary.text}
            >
              {ctaSecondary.text}
            </Button>
          </div>
          
          {note && (
            <p className="hero__note">
              {note}
            </p>
          )}
        </div>
        
        {image && (
          <div className="hero__visual">
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              priority
              className="hero__image"
            />
          </div>
        )}
      </div>
      
      {/* Background gradient overlay */}
      <div className="hero__gradient" aria-hidden="true" />
      
      {/* Background image overlay for better text readability */}
      {backgroundImage && (
        <div className="hero__background-overlay" aria-hidden="true" />
      )}
      
      {/* Floating binary elements (0s and 1s) */}
      <FloatingBinaryElements 
        count={130}
        minFontSize={0.5}
        maxFontSize={2}
        minOpacity={0.2}
        maxOpacity={0.5}
      />
    </section>
  );
}



