/**
 * Toast Component Tests
 */

import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import Toast from '@/components/feedback/Toast';

jest.useFakeTimers();

describe('Toast Component', () => {
  describe('Rendering', () => {
    it('should render toast with message', () => {
      render(
        <Toast
          message="Toast message"
          onDismiss={() => {}}
        />
      );
      
      expect(screen.getByText('Toast message')).toBeInTheDocument();
    });

    it('should render with success variant', () => {
      const { container } = render(
        <Toast
          message="Success"
          variant="success"
          onDismiss={() => {}}
        />
      );
      
      const toast = container.querySelector('.toast');
      expect(toast).toHaveClass('toast--success');
    });

    it('should render with error variant', () => {
      const { container } = render(
        <Toast
          message="Error"
          variant="error"
          onDismiss={() => {}}
        />
      );
      
      const toast = container.querySelector('.toast');
      expect(toast).toHaveClass('toast--error');
    });

    it('should render with info variant by default', () => {
      const { container } = render(
        <Toast
          message="Info"
          onDismiss={() => {}}
        />
      );
      
      const toast = container.querySelector('.toast');
      expect(toast).toHaveClass('toast--info');
    });

    it('should render with warning variant', () => {
      const { container } = render(
        <Toast
          message="Warning"
          variant="warning"
          onDismiss={() => {}}
        />
      );
      
      const toast = container.querySelector('.toast');
      expect(toast).toHaveClass('toast--warning');
    });
  });

  describe('Positions', () => {
    it('should render in top-right position by default', () => {
      const { container } = render(
        <Toast
          message="Toast"
          onDismiss={() => {}}
        />
      );
      
      const toast = container.querySelector('.toast');
      expect(toast).toHaveClass('toast--top-right');
    });

    it('should render in different positions', () => {
      const { container: c1 } = render(
        <Toast
          message="Toast"
          position="top-left"
          onDismiss={() => {}}
        />
      );
      expect(c1.querySelector('.toast')).toHaveClass('toast--top-left');
    });
  });

  describe('Auto Dismiss', () => {
    it('should auto dismiss after duration', async () => {
      const handleDismiss = jest.fn();
      render(
        <Toast
          message="Toast"
          duration={1000}
          autoDismiss={true}
          onDismiss={handleDismiss}
        />
      );
      
      expect(screen.getByText('Toast')).toBeInTheDocument();
      
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      
      await waitFor(() => {
        expect(handleDismiss).toHaveBeenCalled();
      }, { timeout: 2000 });
    });

    it('should not auto dismiss when autoDismiss is false', () => {
      const handleDismiss = jest.fn();
      render(
        <Toast
          message="Toast"
          autoDismiss={false}
          onDismiss={handleDismiss}
        />
      );
      
      jest.advanceTimersByTime(10000);
      
      expect(handleDismiss).not.toHaveBeenCalled();
    });
  });

  describe('Interactions', () => {
    it('should call onDismiss when dismiss button is clicked', async () => {
      const handleDismiss = jest.fn();
      render(
        <Toast
          message="Toast"
          onDismiss={handleDismiss}
        />
      );
      
      const dismissButton = screen.getByRole('button', { name: /close notification/i });
      
      act(() => {
        fireEvent.click(dismissButton);
      });
      
      await waitFor(() => {
        expect(handleDismiss).toHaveBeenCalled();
      });
    });

    it('should call action button onClick when provided', () => {
      const handleAction = jest.fn();
      const handleDismiss = jest.fn();
      render(
        <Toast
          message="Toast"
          onDismiss={handleDismiss}
          actionButton={{
            label: 'Action',
            onClick: handleAction,
          }}
        />
      );
      
      const actionButton = screen.getByRole('button', { name: /action/i });
      fireEvent.click(actionButton);
      
      expect(handleAction).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('should have role status for non-error variants', () => {
      render(
        <Toast
          message="Info toast"
          variant="info"
          onDismiss={() => {}}
        />
      );
      
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should have role alert for error variant', () => {
      render(
        <Toast
          message="Error toast"
          variant="error"
          onDismiss={() => {}}
        />
      );
      
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('should have aria-live polite for non-error variants', () => {
      render(
        <Toast
          message="Info"
          variant="info"
          onDismiss={() => {}}
        />
      );
      
      expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite');
    });

    it('should have aria-live assertive for error variant', () => {
      render(
        <Toast
          message="Error"
          variant="error"
          onDismiss={() => {}}
        />
      );
      
      expect(screen.getByRole('alert')).toHaveAttribute('aria-live', 'assertive');
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(
        <Toast
          message="Toast"
          onDismiss={() => {}}
        />
      );
      
      expect(container.querySelector('.toast')).toBeInTheDocument();
    });
  });
});

