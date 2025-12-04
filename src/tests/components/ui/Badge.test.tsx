/**
 * Badge Component Tests
 */

import { render, screen } from '@testing-library/react';
import Badge from '@/components/ui/Badge';

describe('Badge Component', () => {
  describe('Rendering', () => {
    it('should render badge with text', () => {
      render(<Badge text="Live" status="live" />);
      expect(screen.getByText('Live')).toBeInTheDocument();
    });

    it('should render with live status', () => {
      const { container } = render(<Badge text="Live" status="live" />);
      const badge = container.querySelector('.badge');
      expect(badge).toHaveClass('badge--live');
    });

    it('should render with upcoming status', () => {
      const { container } = render(<Badge text="Upcoming" status="upcoming" />);
      const badge = container.querySelector('.badge');
      expect(badge).toHaveClass('badge--upcoming');
    });

    it('should render with draft status', () => {
      const { container } = render(<Badge text="Draft" status="draft" />);
      const badge = container.querySelector('.badge');
      expect(badge).toHaveClass('badge--draft');
    });
  });

  describe('Accessibility', () => {
    it('should have role status', () => {
      render(<Badge text="Live" status="live" />);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should have aria-label with status and text', () => {
      render(<Badge text="Live" status="live" />);
      const badge = screen.getByRole('status');
      expect(badge).toHaveAttribute('aria-label', 'Status: live - Live');
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(<Badge text="Live" status="live" />);
      const badge = container.querySelector('.badge');
      expect(badge).toHaveClass('badge');
      expect(badge).toHaveClass('badge--live');
    });
  });
});

