/**
 * Responsive Design Verification Tests
 * 
 * Following Critical Mass requirements:
 * - Test all components are responsive
 * - Verify mobile-first approach
 * - Check for responsive breakpoints
 * 
 * This test verifies that components have responsive class names
 * and can adapt to different screen sizes
 */

import { render, screen, cleanup } from '@testing-library/react';

// Import all components
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Toggle from '../components/ui/Toggle';
import Loader from '../components/feedback/Loader';
import ErrorMessage from '../components/feedback/ErrorMessage';
import Toast from '../components/feedback/Toast';

describe('Responsive Design Tests', () => {
  afterEach(() => {
    cleanup();
  });

  // ============================================================================
  // Button Component Responsiveness
  // ============================================================================
  
  describe('Button Component', () => {
    it('should have size variants for responsive design', () => {
      const { container: container1 } = render(<Button size="sm">Small</Button>);
      expect(container1.querySelector('.btn--sm')).toBeInTheDocument();
      cleanup();
      
      const { container: container2 } = render(<Button size="md">Medium</Button>);
      expect(container2.querySelector('.btn--md')).toBeInTheDocument();
      cleanup();
      
      const { container: container3 } = render(<Button size="lg">Large</Button>);
      expect(container3.querySelector('.btn--lg')).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Card Component Responsiveness
  // ============================================================================
  
  describe('Card Component', () => {
    it('should render without errors and be responsive', () => {
      const { container } = render(
        <Card title="Responsive Card">
          <p>Content</p>
        </Card>
      );
      expect(container).toBeTruthy();
      // Card should have base class for responsive styling
      const card = screen.getByText('Responsive Card').closest('.card');
      expect(card).toBeTruthy();
    });
  });

  // ============================================================================
  // Tag Component Responsiveness
  // ============================================================================
  
  describe('Tag Component', () => {
    it('should have size variants for responsive design', () => {
      const { container: container1 } = render(<Tag text="Small Tag" size="sm" />);
      expect(container1.querySelector('.tag--sm')).toBeInTheDocument();
      cleanup();
      
      const { container: container2 } = render(<Tag text="Medium Tag" size="md" />);
      expect(container2.querySelector('.tag--md')).toBeInTheDocument();
      cleanup();
      
      const { container: container3 } = render(<Tag text="Large Tag" size="lg" />);
      expect(container3.querySelector('.tag--lg')).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Badge Component Responsiveness
  // ============================================================================
  
  describe('Badge Component', () => {
    it('should render and be responsive', () => {
      const { container } = render(<Badge text="Live" status="live" />);
      expect(container).toBeTruthy();
      expect(screen.getByText('Live')).toHaveClass('badge');
    });
  });

  // ============================================================================
  // Input Component Responsiveness
  // ============================================================================
  
  describe('Input Component', () => {
    it('should render and be responsive', () => {
      const { container } = render(
        <Input
          id="responsive-input"
          label="Responsive Input"
          type="text"
          value=""
          onChange={() => {}}
        />
      );
      expect(container).toBeTruthy();
      const input = screen.getByLabelText('Responsive Input');
      expect(input).toHaveClass('input');
    });
  });

  // ============================================================================
  // Select Component Responsiveness
  // ============================================================================
  
  describe('Select Component', () => {
    it('should render and be responsive', () => {
      const { container } = render(
        <Select
          id="responsive-select"
          label="Responsive Select"
          options={[{ value: '1', label: 'Option 1' }]}
          value=""
          onChange={() => {}}
        />
      );
      expect(container).toBeTruthy();
      const select = screen.getByLabelText('Responsive Select');
      expect(select).toHaveClass('select');
    });
  });

  // ============================================================================
  // Toggle Component Responsiveness
  // ============================================================================
  
  describe('Toggle Component', () => {
    it('should render and be responsive', () => {
      const { container } = render(
        <Toggle
          id="responsive-toggle"
          label="Responsive Toggle"
          checked={false}
          onChange={() => {}}
        />
      );
      expect(container).toBeTruthy();
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Loader Component Responsiveness
  // ============================================================================
  
  describe('Loader Component', () => {
    it('should have size variants for responsive design', () => {
      const { container: container1 } = render(<Loader size="sm" />);
      expect(container1.querySelector('.loader--sm')).toBeInTheDocument();
      cleanup();
      
      const { container: container2 } = render(<Loader size="md" />);
      expect(container2.querySelector('.loader--md')).toBeInTheDocument();
      cleanup();
      
      const { container: container3 } = render(<Loader size="lg" />);
      expect(container3.querySelector('.loader--lg')).toBeInTheDocument();
    });
  });

  // ============================================================================
  // ErrorMessage Component Responsiveness
  // ============================================================================
  
  describe('ErrorMessage Component', () => {
    it('should have size variants for responsive design', () => {
      const { container: container1 } = render(<ErrorMessage message="Error" size="sm" />);
      expect(container1.querySelector('.error-message--sm')).toBeInTheDocument();
      cleanup();
      
      const { container: container2 } = render(<ErrorMessage message="Error" size="md" />);
      expect(container2.querySelector('.error-message--md')).toBeInTheDocument();
      cleanup();
      
      const { container: container3 } = render(<ErrorMessage message="Error" size="lg" />);
      expect(container3.querySelector('.error-message--lg')).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Toast Component Responsiveness
  // ============================================================================
  
  describe('Toast Component', () => {
    it('should have size variants for responsive design', () => {
      const { container: container1 } = render(<Toast message="Toast" size="sm" onDismiss={() => {}} />);
      expect(container1.querySelector('.toast--sm')).toBeInTheDocument();
      cleanup();
      
      const { container: container2 } = render(<Toast message="Toast" size="md" onDismiss={() => {}} />);
      expect(container2.querySelector('.toast--md')).toBeInTheDocument();
      cleanup();
      
      const { container: container3 } = render(<Toast message="Toast" size="lg" onDismiss={() => {}} />);
      expect(container3.querySelector('.toast--lg')).toBeInTheDocument();
    });

    it('should have position variants for responsive design', () => {
      render(
        <Toast
          message="Toast"
          position="top-right"
          onDismiss={() => {}}
        />
      );
      expect(screen.getByRole('status')).toHaveClass('toast--top-right');
    });
  });
});

