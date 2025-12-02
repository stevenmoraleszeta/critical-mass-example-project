'use client';

import React, { useState, useEffect } from 'react';

export interface FloatingGeometricShapesProps {
  count?: number;
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
}

type ShapeType = 'triangle' | 'circle' | 'square';
type HoverColor = 'blue' | 'red' | 'yellow';

interface GeometricShape {
  id: number;
  type: ShapeType;
  size: number;
  left: number;
  top: number;
  animationDuration: number;
  animationDelay: number;
  opacity: number;
  initialRotation: number;
  hoverColor: HoverColor;
}

export default function FloatingGeometricShapes({
  count = 30,
  minSize = 20,
  maxSize = 60,
  minOpacity = 0.1,
  maxOpacity = 0.3,
}: FloatingGeometricShapesProps) {
  const [shapes, setShapes] = useState<GeometricShape[]>([]);
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
      const minElements = 15;
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
    
    const generateShapes = (): GeometricShape[] => {
      const shapeTypes: ShapeType[] = ['triangle', 'circle', 'square'];
      
      return Array.from({ length: responsiveCount }, (_, index) => {
        const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        const size = minSize + Math.random() * (maxSize - minSize);
        
        // Regions only in the grid area (avoiding text area at top)
        // Text area is roughly top 25-30%, cards grid starts around 40-45%
        // Focus on the bottom 55-60% where cards are located
        const regions = [
          { left: [5, 32], top: [45, 70] },    // Top left card area
          { left: [34, 66], top: [45, 70] },   // Top middle card area
          { left: [67, 95], top: [45, 70] },   // Top right card area
          { left: [5, 32], top: [70, 95] },    // Bottom left card area
          { left: [34, 66], top: [70, 95] },   // Bottom middle card area
          { left: [67, 95], top: [70, 95] },   // Bottom right card area
        ];
        
        const selectedRegion = regions[Math.floor(Math.random() * regions.length)];
        const left = selectedRegion.left[0] + Math.random() * (selectedRegion.left[1] - selectedRegion.left[0]);
        const top = selectedRegion.top[0] + Math.random() * (selectedRegion.top[1] - selectedRegion.top[0]);
        const animationDuration = 10 + Math.random() * 15;
        const animationDelay = Math.random() * 5;
        const opacity = minOpacity + Math.random() * (maxOpacity - minOpacity);
        const initialRotation = -45 + Math.random() * 90;
        const hoverColors: HoverColor[] = ['blue', 'red', 'yellow'];
        const hoverColor = hoverColors[Math.floor(Math.random() * hoverColors.length)];
        
        return {
          id: index,
          type,
          size,
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
    
    setShapes(generateShapes());
  }, [responsiveCount, minSize, maxSize, minOpacity, maxOpacity, isMounted]);

  const renderShape = (shape: GeometricShape) => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute',
      left: `${shape.left}%`,
      top: `${shape.top}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: shape.opacity,
      animationDuration: `${shape.animationDuration}s`,
      animationDelay: `${shape.animationDelay}s`,
      '--initial-rotation': `${shape.initialRotation}deg`,
      transform: `translate(-50%, -50%) rotate(var(--initial-rotation, 0deg))`,
    } as React.CSSProperties & { '--initial-rotation': string };

    switch (shape.type) {
      case 'triangle':
        return (
          <div
            key={shape.id}
            className="floating-geometric-shapes__shape floating-geometric-shapes__shape--triangle"
            data-hover-color={shape.hoverColor}
            style={baseStyle}
          >
            <svg width={shape.size} height={shape.size} viewBox="0 0 100 100" aria-hidden="true">
              <polygon
                points="50,10 90,90 10,90"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        );
      
      case 'circle':
        return (
          <div
            key={shape.id}
            className="floating-geometric-shapes__shape floating-geometric-shapes__shape--circle"
            data-hover-color={shape.hoverColor}
            style={baseStyle}
          >
            <svg width={shape.size} height={shape.size} viewBox="0 0 100 100" aria-hidden="true">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        );
      
      case 'square':
        return (
          <div
            key={shape.id}
            className="floating-geometric-shapes__shape floating-geometric-shapes__shape--square"
            data-hover-color={shape.hoverColor}
            style={baseStyle}
          >
            <svg width={shape.size} height={shape.size} viewBox="0 0 100 100" aria-hidden="true">
              <rect
                x="10"
                y="10"
                width="80"
                height="80"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div 
      className="floating-geometric-shapes" 
      aria-hidden="true"
    >
      {shapes.map((shape) => renderShape(shape))}
    </div>
  );
}

