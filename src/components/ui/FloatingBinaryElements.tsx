'use client';

import React, { useState, useEffect } from 'react';

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
  animationDelay: number;
  opacity: number;
  initialRotation: number;
  hoverColor: HoverColor;
}

export default function FloatingBinaryElements({
  count = 100,
  minFontSize = 0.5,
  maxFontSize = 2,
  minOpacity = 0.1,
  maxOpacity = 0.4,
}: FloatingBinaryElementsProps) {
  const [elements, setElements] = useState<BinaryElement[]>([]);
  const [responsiveCount, setResponsiveCount] = useState(count);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  useEffect(() => {
    if (!isMounted) return;
    
    const updateCount = () => {
      const viewportWidth = window.innerWidth;
      const minViewport = 320;
      const maxViewport = 1920;
      const minElements = 60;
      const maxElements = count;
      const clampedWidth = Math.max(minViewport, Math.min(maxViewport, viewportWidth));
      const linearRatio = (clampedWidth - minViewport) / (maxViewport - minViewport);
      const smoothRatio = Math.sqrt(linearRatio);
      const calculatedCount = Math.round(minElements + (maxElements - minElements) * smoothRatio);
      setResponsiveCount(Math.max(minElements, calculatedCount));
    };
    
    updateCount();
    
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
  }, [count, isMounted]);
  
  useEffect(() => {
    if (!isMounted) return;
    
    const generateElements = (): BinaryElement[] => {
      return Array.from({ length: responsiveCount }, (_, index) => {
        const value: '0' | '1' = Math.random() > 0.5 ? '1' : '0';
        const fontSize = minFontSize + Math.random() * (maxFontSize - minFontSize);
        
        const regions = [
          { left: [0, 25], top: [0, 25] },
          { left: [75, 100], top: [0, 25] },
          { left: [0, 25], top: [75, 100] },
          { left: [75, 100], top: [75, 100] },
          { left: [0, 25], top: [25, 75] },
          { left: [75, 100], top: [25, 75] },
          { left: [25, 75], top: [0, 25] },
          { left: [25, 75], top: [75, 100] },
        ];
        
        const selectedRegion = regions[Math.floor(Math.random() * regions.length)];
        const left = selectedRegion.left[0] + Math.random() * (selectedRegion.left[1] - selectedRegion.left[0]);
        const top = selectedRegion.top[0] + Math.random() * (selectedRegion.top[1] - selectedRegion.top[0]);
        const animationDuration = 8 + Math.random() * 12;
        const animationDelay = Math.random() * 5;
        const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);
        const initialRotation = -30 + Math.random() * 60;
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
    };
    
    setElements(generateElements());
  }, [responsiveCount, minFontSize, maxFontSize, minOpacity, maxOpacity, isMounted]);

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

