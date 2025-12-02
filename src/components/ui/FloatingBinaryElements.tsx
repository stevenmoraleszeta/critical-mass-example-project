'use client';

import React, { useMemo, useState, useEffect } from 'react';

/**
 * FloatingBinaryElements Component
 * 
 * Creates floating binary digits (0s and 1s) with different sizes and animations.
 * Used as decorative background elements in hero sections.
 * 
 * Features:
 * - At least 100 elements with different sizes
 * - Floating animations with varying speeds and directions
 * - Performance optimized using CSS animations
 * - Accessible (decorative elements marked with aria-hidden)
 * 
 * Follows Critical Mass requirements:
 * - BEM methodology
 * - Mobile-first responsive design
 * - Accessibility (decorative elements)
 * - Performance optimization
 * 
 * @example
 * ```tsx
 * <FloatingBinaryElements count={100} />
 * ```
 */

export interface FloatingBinaryElementsProps {
  /** Number of binary elements to render (default: 100) */
  count?: number;
  /** Minimum font size in rem (default: 0.5) */
  minFontSize?: number;
  /** Maximum font size in rem (default: 2) */
  maxFontSize?: number;
  /** Minimum opacity (default: 0.1) */
  minOpacity?: number;
  /** Maximum opacity (default: 0.4) */
  maxOpacity?: number;
}

type HoverColor = 'blue' | 'red' | 'yellow';

interface BinaryElement {
  id: number;
  value: '0' | '1';
  fontSize: number;
  left: number;
  top: number;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
  initialRotation: number;
  hoverColor: HoverColor;
}

/**
 * FloatingBinaryElements Implementation
 */
export default function FloatingBinaryElements({
  count = 100,
  minFontSize = 0.5,
  maxFontSize = 2,
  minOpacity = 0.1,
  maxOpacity = 0.4,
}: FloatingBinaryElementsProps) {
  // Responsive count: proportional to viewport width
  // Smaller viewport = fewer elements, larger viewport = more elements
  const [responsiveCount, setResponsiveCount] = useState(count);
  
  useEffect(() => {
    const updateCount = () => {
      const viewportWidth = window.innerWidth;
      
      // Calculate proportional count - more elements on mobile/tablet
      // Min viewport: 320px (smallest mobile) -> ~60 elements
      // Tablet: 768px -> ~95 elements
      // Max viewport: 1920px+ (large desktop) -> full count (130)
      const minViewport = 320;
      const maxViewport = 1920;
      const minElements = 60; // Increased minimum for mobile/tablet
      const maxElements = count;
      
      // Clamp viewport width between min and max
      const clampedWidth = Math.max(minViewport, Math.min(maxViewport, viewportWidth));
      
      // Calculate linear ratio (0 to 1)
      const linearRatio = (clampedWidth - minViewport) / (maxViewport - minViewport);
      
      // Use smoother curve for better distribution across all screen sizes
      // Square root curve makes reduction less aggressive on small screens
      const smoothRatio = Math.sqrt(linearRatio); // Less aggressive than quadratic
      
      // Calculate count using smooth curve
      const calculatedCount = Math.round(minElements + (maxElements - minElements) * smoothRatio);
      
      setResponsiveCount(Math.max(minElements, calculatedCount));
    };
    
    // Initial check
    updateCount();
    
    // Listen for resize events with debounce for better performance
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateCount, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [count]);
  
  // Generate binary elements with random properties
  const elements = useMemo<BinaryElement[]>(() => {
    return Array.from({ length: responsiveCount }, (_, index) => {
      // Randomly choose 0 or 1
      const value: '0' | '1' = Math.random() > 0.5 ? '1' : '0';
      
      // Random font size between min and max
      const fontSize = 
        minFontSize + Math.random() * (maxFontSize - minFontSize);
      
      // Random position avoiding center (25-75% exclusion zone - larger exclusion)
      // Elements positioned in corners and edges, far from center
      const regions = [
        { left: [0, 25], top: [0, 25] },       // Top-left corner
        { left: [75, 100], top: [0, 25] },     // Top-right corner
        { left: [0, 25], top: [75, 100] },     // Bottom-left corner
        { left: [75, 100], top: [75, 100] },   // Bottom-right corner
        { left: [0, 25], top: [25, 75] },      // Left edge
        { left: [75, 100], top: [25, 75] },    // Right edge
        { left: [25, 75], top: [0, 25] },      // Top edge
        { left: [25, 75], top: [75, 100] },    // Bottom edge
      ];
      
      const selectedRegion = regions[Math.floor(Math.random() * regions.length)];
      const left = selectedRegion.left[0] + Math.random() * (selectedRegion.left[1] - selectedRegion.left[0]);
      const top = selectedRegion.top[0] + Math.random() * (selectedRegion.top[1] - selectedRegion.top[0]);
      
      // Random animation duration (8-20 seconds)
      const animationDuration = 8 + Math.random() * 12;
      
      // Random animation delay (0-5 seconds)
      const animationDelay = Math.random() * 5;
      
      // Random opacity between min and max
      const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);
      
      // Random initial rotation (inclination) between -30 and 30 degrees
      const initialRotation = -30 + Math.random() * 60;
      
      // Random hover color (blue, red, or yellow)
      const hoverColors: HoverColor[] = ['blue', 'red', 'yellow'];
      const hoverColor = hoverColors[Math.floor(Math.random() * hoverColors.length)];
      
      return {
        id: index,
        value,
        fontSize,
        left,
        top,
        animationDuration,
        animationDelay,
        opacity,
        initialRotation,
        hoverColor,
      };
    });
  }, [responsiveCount, minFontSize, maxFontSize, minOpacity, maxOpacity]);

  return (
    <div 
      className="floating-binary-elements" 
      aria-hidden="true"
    >
      {elements.map((element) => (
        <span
          key={element.id}
          className="floating-binary-elements__element"
          data-value={element.value}
          data-hover-color={element.hoverColor}
          style={{
            fontSize: `${element.fontSize}rem`,
            left: `${element.left}%`,
            top: `${element.top}%`,
            opacity: element.opacity,
            animationDuration: `${element.animationDuration}s`,
            animationDelay: `${element.animationDelay}s`,
            '--initial-rotation': `${element.initialRotation}deg`,
          } as React.CSSProperties & { '--initial-rotation': string }}
        >
          {element.value}
        </span>
      ))}
    </div>
  );
}

