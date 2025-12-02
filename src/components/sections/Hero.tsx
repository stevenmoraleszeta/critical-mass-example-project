'use client';

import React from 'react';
import Image from 'next/image';
import FloatingBinaryElements from '@/components/ui/FloatingBinaryElements';

/**
 * Hero Component
 * 
 * Main hero section for the landing page. Presents Steven Morales as a professional
 * front-end developer with portfolio-focused messaging and clear CTAs.
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
 *   title="Steven Morales: Full Stack Developer & Tech Leader"
 *   subtitle="Building scalable, accessible, and performant web experiences..."
 *   ctaPrimary={{ text: "View My Work", href: "#projects" }}
 *   ctaSecondary={{ text: "Explore Components", href: "/components" }}
 *   note="Available for full-time opportunities at Critical Mass."
 * />
 * ```
 */

export interface HeroProps {
  /** Main title (H1, supports ReactNode for formatting) */
  title: React.ReactNode;
  /** Subtitle text (supports ReactNode for formatting) */
  subtitle: React.ReactNode;
  /** Key identity line (role tags, supports ReactNode for formatting) */
  keyIdentity?: React.ReactNode;
  /** Value intro paragraph (experience summary, supports ReactNode for formatting) */
  valueIntro?: React.ReactNode;
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
  /** Target section ID for scroll arrow (default: "role-focus") */
  scrollTargetId?: string;
}

/**
 * Hero Component Implementation
 * 
 * Features:
 * - Scroll arrow to navigate to next section
 * - Responsive layout (mobile-first)
 * - Background gradient
 * - Accessible semantic structure
 */
export default function Hero({
  title,
  subtitle,
  keyIdentity,
  valueIntro,
  note,
  image,
  backgroundImage,
  scrollTargetId = 'role-focus',
}: HeroProps) {
  const handleScrollDown = () => {
    const targetElement = document.getElementById(scrollTargetId);
    
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
          
          {keyIdentity && (
            <p className="hero__key-identity">
              {keyIdentity}
            </p>
          )}
          
          {valueIntro && (
            <p className="hero__value-intro">
              {valueIntro}
            </p>
          )}
          
          {note && (
            <p className="hero__note">
              {note}
            </p>
          )}
          
          <button
            className="hero__scroll-arrow"
            onClick={handleScrollDown}
            onKeyDown={handleKeyDown}
            aria-label="Scroll to next section"
            type="button"
          >
            <svg
              className="hero__scroll-arrow-icon"
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
