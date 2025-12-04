/**
 * ScrollArrow Component Tests
 */

import { render, screen, fireEvent } from '@testing-library/react';
import ScrollArrow from '@/components/ui/ScrollArrow';

describe('ScrollArrow Component', () => {
  beforeEach(() => {
    document.getElementById = jest.fn();
    window.matchMedia = jest.fn(() => ({
      matches: false,
      media: '',
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })) as jest.Mock;
  });

  describe('Rendering', () => {
    it('should render scroll arrow button', () => {
      render(<ScrollArrow targetId="target-section" />);
      
      const button = screen.getByRole('button');
      expect(button).toBeInTheDocument();
    });

    it('should render with default color red', () => {
      const { container } = render(<ScrollArrow targetId="target-section" />);
      
      const button = container.querySelector('.scroll-arrow');
      expect(button).toHaveClass('scroll-arrow--red');
    });

    it('should render with different colors', () => {
      const { container: c1 } = render(<ScrollArrow targetId="target-section" color="white" />);
      expect(c1.querySelector('.scroll-arrow')).toHaveClass('scroll-arrow--white');
    });

    it('should render SVG icon', () => {
      const { container } = render(<ScrollArrow targetId="target-section" />);
      
      const svg = container.querySelector('.scroll-arrow__icon');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Interactions', () => {
    it('should scroll to target element when clicked', () => {
      const mockScrollIntoView = jest.fn();
      const mockElement = {
        scrollIntoView: mockScrollIntoView,
      };
      
      (document.getElementById as jest.Mock).mockReturnValue(mockElement);
      
      render(<ScrollArrow targetId="target-section" />);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(document.getElementById).toHaveBeenCalledWith('target-section');
      expect(mockScrollIntoView).toHaveBeenCalled();
    });

    it('should handle keyboard navigation', () => {
      const mockScrollIntoView = jest.fn();
      const mockElement = {
        scrollIntoView: mockScrollIntoView,
      };
      
      (document.getElementById as jest.Mock).mockReturnValue(mockElement);
      
      render(<ScrollArrow targetId="target-section" />);
      
      const button = screen.getByRole('button');
      
      fireEvent.keyDown(button, { key: 'Enter' });
      expect(mockScrollIntoView).toHaveBeenCalled();
      
      mockScrollIntoView.mockClear();
      fireEvent.keyDown(button, { key: ' ' });
      expect(mockScrollIntoView).toHaveBeenCalled();
    });

    it('should not scroll if target element does not exist', () => {
      (document.getElementById as jest.Mock).mockReturnValue(null);
      
      render(<ScrollArrow targetId="non-existent" />);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(document.getElementById).toHaveBeenCalledWith('non-existent');
    });
  });

  describe('Accessibility', () => {
    it('should have default aria-label', () => {
      render(<ScrollArrow targetId="target-section" />);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Scroll to next section');
    });

    it('should use custom aria-label when provided', () => {
      render(
        <ScrollArrow
          targetId="target-section"
          ariaLabel="Scroll to content"
        />
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Scroll to content');
    });

    it('should have button type', () => {
      render(<ScrollArrow targetId="target-section" />);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'button');
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(<ScrollArrow targetId="target-section" />);
      
      expect(container.querySelector('.scroll-arrow')).toBeInTheDocument();
      expect(container.querySelector('.scroll-arrow__icon')).toBeInTheDocument();
    });
  });
});

