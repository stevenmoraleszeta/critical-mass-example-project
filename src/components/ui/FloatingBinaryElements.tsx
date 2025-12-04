'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useMediaQuery, useWindowSize } from '@/lib/hooks';

export interface FloatingBinaryElementsProps {
  count?: number;
  minFontSize?: number;
  maxFontSize?: number;
  minOpacity?: number;
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
  opacity: number;
  hoverColor: HoverColor;
  floatY: number;
  floatX: number;
}

export default function FloatingBinaryElements({
  count = 80,
  minFontSize = 0.5,
  maxFontSize = 2,
  minOpacity = 0.1,
  maxOpacity = 0.4,
}: FloatingBinaryElementsProps) {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = useMediaQuery({ query: '(prefers-reduced-motion: reduce)' });
  const windowSize = useWindowSize({ debounceDelay: 250 });
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const responsiveCount = useMemo(() => {
    if (!isMounted) return count;
    
    const viewportWidth = windowSize.width;
      const minViewport = 320;
      const maxViewport = 1920;
      const minElements = 50;
      const maxElements = count;
      const clampedWidth = Math.max(minViewport, Math.min(maxViewport, viewportWidth));
      const linearRatio = (clampedWidth - minViewport) / (maxViewport - minViewport);
      const smoothRatio = Math.sqrt(linearRatio);
      const calculatedCount = Math.round(minElements + (maxElements - minElements) * smoothRatio);
    return Math.max(minElements, calculatedCount);
  }, [count, isMounted, windowSize.width]);
  
  const elements = useMemo(() => {
    if (!isMounted) return [];
    
      return Array.from({ length: responsiveCount }, (_, index) => {
        const value: '0' | '1' = Math.random() > 0.5 ? '1' : '0';
        const fontSize = minFontSize + Math.random() * (maxFontSize - minFontSize);
        
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        
        const animationDuration = prefersReducedMotion ? 0 : (6 + Math.random() * 4);
        const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);
        const hoverColors: HoverColor[] = ['blue', 'red', 'yellow'];
        const hoverColor = hoverColors[Math.floor(Math.random() * hoverColors.length)];
        
        const floatY = -20 - Math.random() * 20;
        const floatX = -15 + Math.random() * 30;
        
        return {
          id: index,
          value,
          fontSize,
          left,
          top,
          animationDuration,
          opacity,
          hoverColor,
          floatY,
          floatX,
        };
      });
  }, [responsiveCount, minFontSize, maxFontSize, minOpacity, maxOpacity, isMounted, prefersReducedMotion]);
    
  if (!isMounted || prefersReducedMotion) {
    return null;
  }

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
            '--binary-float-y': `${element.floatY}px`,
            '--binary-float-x': `${element.floatX}px`,
          } as React.CSSProperties & { 
            '--binary-float-y': string;
            '--binary-float-x': string;
          }}
        >
          {element.value}
        </span>
      ))}
    </div>
  );
}

