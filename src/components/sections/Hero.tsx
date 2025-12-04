'use client';

import React from 'react';
import Image from 'next/image';
import FloatingBinaryElements from '@/components/ui/FloatingBinaryElements';
import ScrollArrow from '@/components/ui/ScrollArrow';

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
            fetchPriority="high"
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
          
          <ScrollArrow
            targetId={scrollTargetId}
            color="white"
          />
        </div>
        
        {image && (
          <div className="hero__visual">
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="hero__image"
            />
          </div>
        )}
      </div>
      
      {/* Background image overlay for better text readability */}
      {backgroundImage && (
        <div className="hero__background-overlay" aria-hidden="true" />
      )}
      
      {/* Floating binary elements (0s and 1s) */}
      <FloatingBinaryElements 
        count={250}
        minFontSize={1}
        maxFontSize={2}
        minOpacity={0.2}
        maxOpacity={0.5}
      />
    </section>
  );
}
