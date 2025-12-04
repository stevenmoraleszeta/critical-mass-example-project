/**
 * Loader Component Tests
 */

import { render, screen } from '@testing-library/react';
import Loader from '@/components/feedback/Loader';

describe('Loader Component', () => {
  describe('Rendering', () => {
    it('should render loader', () => {
      render(<Loader />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should render with loading text', () => {
      render(<Loader text="Loading..." />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should render without text', () => {
      render(<Loader />);
      expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
    });

    it('should render with small size', () => {
      const { container } = render(<Loader size="sm" />);
      const loader = container.querySelector('.loader');
      expect(loader).toHaveClass('loader--sm');
    });

    it('should render with medium size by default', () => {
      const { container } = render(<Loader />);
      const loader = container.querySelector('.loader');
      expect(loader).toHaveClass('loader--md');
    });

    it('should render with large size', () => {
      const { container } = render(<Loader size="lg" />);
      const loader = container.querySelector('.loader');
      expect(loader).toHaveClass('loader--lg');
    });
  });

  describe('Accessibility', () => {
    it('should have role status', () => {
      render(<Loader />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should have aria-live polite', () => {
      render(<Loader />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite');
    });

    it('should have aria-label', () => {
      render(<Loader text="Loading content" />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading content');
    });

    it('should have default aria-label when no text', () => {
      render(<Loader />);
      expect(screen.getByRole('status')).toHaveAttribute('aria-label', 'Loading');
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(<Loader />);
      expect(container.querySelector('.loader')).toBeInTheDocument();
      expect(container.querySelector('.loader__spinner')).toBeInTheDocument();
    });
  });
});

