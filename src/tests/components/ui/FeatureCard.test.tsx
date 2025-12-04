/**
 * FeatureCard Component Tests
 */

import { render, screen, fireEvent } from '@testing-library/react';
import FeatureCard from '@/components/ui/FeatureCard';

describe('FeatureCard Component', () => {
  describe('Rendering', () => {
    it('should render feature card with title and description', () => {
      render(
        <FeatureCard
          title="Feature Title"
          description="Feature description"
        />
      );
      
      expect(screen.getByText('Feature Title')).toBeInTheDocument();
      expect(screen.getByText('Feature description')).toBeInTheDocument();
    });

    it('should render as article element', () => {
      const { container } = render(
        <FeatureCard
          title="Feature"
          description="Description"
        />
      );
      
      expect(container.querySelector('article')).toBeInTheDocument();
    });

    it('should render with icon when provided', () => {
      render(
        <FeatureCard
          title="Feature"
          description="Description"
          icon={<span data-testid="icon">Icon</span>}
        />
      );
      
      expect(screen.getByTestId('icon')).toBeInTheDocument();
    });
  });

  describe('Drag and Drop', () => {
    it('should be draggable when draggable prop is true', () => {
      render(
        <FeatureCard
          title="Feature"
          description="Description"
          draggable={true}
        />
      );
      
      const card = screen.getByText('Feature').closest('article');
      expect(card).toHaveAttribute('draggable', 'true');
    });

    it('should not be draggable when draggable prop is false', () => {
      render(
        <FeatureCard
          title="Feature"
          description="Description"
          draggable={false}
        />
      );
      
      const card = screen.getByText('Feature').closest('article');
      expect(card).toHaveAttribute('draggable', 'false');
    });

    it('should be configured for drag start when draggable', () => {
      const handleDragStart = jest.fn();
      render(
        <FeatureCard
          title="Feature"
          description="Description"
          draggable={true}
          onDragStart={handleDragStart}
        />
      );
      
      const card = screen.getByText('Feature').closest('article');
      expect(card).toHaveAttribute('draggable', 'true');
      expect(card).toHaveAttribute('aria-grabbed', 'false');
    });

    it('should apply dragging class when isDragging is true', () => {
      const { container } = render(
        <FeatureCard
          title="Feature"
          description="Description"
          isDragging={true}
        />
      );
      
      const card = container.querySelector('.feature-card');
      expect(card).toHaveClass('feature-card--dragging');
    });

    it('should apply drag-over class when isDragOver is true', () => {
      const { container } = render(
        <FeatureCard
          title="Feature"
          description="Description"
          isDragOver={true}
        />
      );
      
      const card = container.querySelector('.feature-card');
      expect(card).toHaveClass('feature-card--drag-over');
    });
  });

  describe('Accessibility', () => {
    it('should have aria-grabbed when draggable and dragging', () => {
      render(
        <FeatureCard
          title="Feature"
          description="Description"
          draggable={true}
          isDragging={true}
        />
      );
      
      const card = screen.getByText('Feature').closest('article');
      expect(card).toHaveAttribute('aria-grabbed', 'true');
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(
        <FeatureCard
          title="Feature"
          description="Description"
        />
      );
      
      expect(container.querySelector('.feature-card')).toBeInTheDocument();
      expect(container.querySelector('.feature-card__content')).toBeInTheDocument();
      expect(container.querySelector('.feature-card__title')).toBeInTheDocument();
      expect(container.querySelector('.feature-card__description')).toBeInTheDocument();
    });
  });
});

