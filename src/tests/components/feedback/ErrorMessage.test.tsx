/**
 * ErrorMessage Component Tests
 */

import { render, screen, fireEvent } from '@testing-library/react';
import ErrorMessage from '@/components/feedback/ErrorMessage';

jest.mock('@/components/ui/Button', () => ({
  __esModule: true,
  default: ({ children, onClick, ariaLabel }: any) => (
    <button onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  ),
}));

describe('ErrorMessage Component', () => {
  describe('Rendering', () => {
    it('should render error message', () => {
      render(<ErrorMessage message="Something went wrong" />);
      expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    });

    it('should render with retry button when onRetry is provided', () => {
      const handleRetry = jest.fn();
      render(
        <ErrorMessage
          message="Error occurred"
          onRetry={handleRetry}
        />
      );
      
      expect(screen.getByRole('button', { name: /retry/i })).toBeInTheDocument();
    });

    it('should not render retry button when onRetry is not provided', () => {
      render(<ErrorMessage message="Error occurred" />);
      expect(screen.queryByRole('button', { name: /retry/i })).not.toBeInTheDocument();
    });

    it('should render with custom retry label', () => {
      const handleRetry = jest.fn();
      render(
        <ErrorMessage
          message="Error occurred"
          onRetry={handleRetry}
          retryLabel="Try Again"
        />
      );
      
      expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('should render with small size', () => {
      const { container } = render(<ErrorMessage message="Error" size="sm" />);
      const error = container.querySelector('.error-message');
      expect(error).toHaveClass('error-message--sm');
    });

    it('should render with medium size by default', () => {
      const { container } = render(<ErrorMessage message="Error" />);
      const error = container.querySelector('.error-message');
      expect(error).toHaveClass('error-message--md');
    });

    it('should render with large size', () => {
      const { container } = render(<ErrorMessage message="Error" size="lg" />);
      const error = container.querySelector('.error-message');
      expect(error).toHaveClass('error-message--lg');
    });
  });

  describe('Interactions', () => {
    it('should call onRetry when retry button is clicked', () => {
      const handleRetry = jest.fn();
      render(
        <ErrorMessage
          message="Error occurred"
          onRetry={handleRetry}
        />
      );
      
      const retryButton = screen.getByRole('button', { name: /retry/i });
      fireEvent.click(retryButton);
      
      expect(handleRetry).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('should have role alert', () => {
      render(<ErrorMessage message="Error" />);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('should have aria-live assertive', () => {
      render(<ErrorMessage message="Error" />);
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'assertive');
    });

    it('should have aria-atomic true', () => {
      render(<ErrorMessage message="Error" />);
      expect(screen.getByRole('alert')).toHaveAttribute('aria-atomic', 'true');
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(<ErrorMessage message="Error" />);
      expect(container.querySelector('.error-message')).toBeInTheDocument();
      expect(container.querySelector('.error-message__icon')).toBeInTheDocument();
      expect(container.querySelector('.error-message__content')).toBeInTheDocument();
      expect(container.querySelector('.error-message__text')).toBeInTheDocument();
    });
  });
});

