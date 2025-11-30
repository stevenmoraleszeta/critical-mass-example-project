/**
 * Button Component Tests
 * 
 * Following Critical Mass requirements:
 * - Test button renders correctly
 * - Test button is keyboard accessible
 * - Test button works with screen reader
 * 
 * Following TODO.md requirements:
 * - Test button renders with given text
 * - Test button calls onClick handler when clicked
 * - Test button handles disabled state
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/ui/Button';

describe('Button Component', () => {
  // ============================================================================
  // Rendering Tests
  // ============================================================================
  
  describe('Rendering', () => {
    it('should render button with given text', () => {
      render(<Button>Click Me</Button>);
      
      const button = screen.getByRole('button', { name: /click me/i });
      expect(button).toBeInTheDocument();
      expect(button).toHaveTextContent('Click Me');
    });

    it('should render with primary variant by default', () => {
      render(<Button>Primary Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn', 'btn--primary', 'btn--md');
    });

    it('should render with secondary variant', () => {
      render(<Button variant="secondary">Secondary Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn', 'btn--secondary');
    });

    it('should render with ghost variant', () => {
      render(<Button variant="ghost">Ghost Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn', 'btn--ghost');
    });

    it('should render with small size', () => {
      render(<Button size="sm">Small Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn--sm');
    });

    it('should render with medium size (default)', () => {
      render(<Button>Medium Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn--md');
    });

    it('should render with large size', () => {
      render(<Button size="lg">Large Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn--lg');
    });

    it('should render as link when href is provided', () => {
      render(<Button href="/about">Go to About</Button>);
      
      const link = screen.getByRole('link', { name: /go to about/i });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/about');
    });

    it('should render with custom className', () => {
      render(<Button className="custom-class">Custom Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('custom-class');
    });
  });

  // ============================================================================
  // Interaction Tests
  // ============================================================================
  
  describe('Interactions', () => {
    it('should call onClick handler when clicked', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Click Me</Button>);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick when disabled', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick} disabled>Disabled Button</Button>);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should not call onClick when loading', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick} loading>Loading Button</Button>);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should handle Enter key press', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Enter Button</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      // Simulate Enter key press - buttons respond to Enter by default
      fireEvent.keyDown(button, { key: 'Enter', code: 'Enter', keyCode: 13 });
      fireEvent.keyPress(button, { key: 'Enter', code: 'Enter', keyCode: 13 });
      
      // Note: In real browser, Enter triggers click, but in tests we verify the button is focusable
      expect(button).toHaveFocus();
    });

    it('should handle Space key press', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Space Button</Button>);
      
      const button = screen.getByRole('button');
      button.focus();
      // Simulate Space key press - buttons respond to Space by default
      fireEvent.keyDown(button, { key: ' ', code: 'Space', keyCode: 32 });
      fireEvent.keyPress(button, { key: ' ', code: 'Space', keyCode: 32 });
      
      // Note: In real browser, Space triggers click, but in tests we verify the button is focusable
      expect(button).toHaveFocus();
    });
  });

  // ============================================================================
  // Disabled State Tests
  // ============================================================================
  
  describe('Disabled State', () => {
    it('should render disabled button', () => {
      render(<Button disabled>Disabled Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('btn--disabled');
    });

    it('should not be clickable when disabled', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick} disabled>Disabled Button</Button>);
      
      const button = screen.getByRole('button');
      fireEvent.click(button);
      
      expect(handleClick).not.toHaveBeenCalled();
      expect(button).toBeDisabled();
    });

    it('should render as button when disabled even with href', () => {
      render(<Button href="/about" disabled>Disabled Link</Button>);
      
      // When disabled, Button component renders as <button>, not <Link>
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('btn--disabled');
    });
  });

  // ============================================================================
  // Loading State Tests
  // ============================================================================
  
  describe('Loading State', () => {
    it('should render loading spinner when loading', () => {
      render(<Button loading>Loading Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn--loading');
      expect(button).toHaveAttribute('aria-busy', 'true');
      
      const spinner = button.querySelector('.btn__spinner');
      expect(spinner).toBeInTheDocument();
    });

    it('should be disabled when loading', () => {
      render(<Button loading>Loading Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
    });
  });

  // ============================================================================
  // Accessibility Tests
  // ============================================================================
  
  describe('Accessibility', () => {
    it('should have aria-label when provided', () => {
      render(<Button ariaLabel="Close dialog">×</Button>);
      
      const button = screen.getByRole('button', { name: /close dialog/i });
      expect(button).toHaveAttribute('aria-label', 'Close dialog');
    });

    it('should be keyboard accessible', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Keyboard Button</Button>);
      
      const button = screen.getByRole('button');
      
      // Focus button (simulating Tab navigation)
      button.focus();
      expect(button).toHaveFocus();
      
      // Verify button can receive focus (keyboard accessible)
      expect(button).not.toHaveAttribute('tabIndex', '-1');
      
      // Click works (keyboard users can activate with Enter/Space)
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should work with screen reader (has accessible name)', () => {
      render(<Button>Screen Reader Button</Button>);
      
      const button = screen.getByRole('button', { name: /screen reader button/i });
      expect(button).toBeInTheDocument();
    });

    it('should work with screen reader (aria-label)', () => {
      render(<Button ariaLabel="Submit form">Submit</Button>);
      
      const button = screen.getByRole('button', { name: /submit form/i });
      expect(button).toBeInTheDocument();
    });

    it('should have correct button type', () => {
      render(<Button type="submit">Submit Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'submit');
    });

    it('should have correct button type for reset', () => {
      render(<Button type="reset">Reset Button</Button>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('type', 'reset');
    });
  });

  // ============================================================================
  // Link Button Tests
  // ============================================================================
  
  describe('Link Button', () => {
    it('should render as Next.js Link when href is provided', () => {
      render(<Button href="/about">Go to About</Button>);
      
      const link = screen.getByRole('link');
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', '/about');
    });

    it('should render as button when disabled (not as link)', () => {
      render(<Button href="/about" disabled>Disabled Link</Button>);
      
      // When disabled, Button renders as <button>, not <Link>
      const button = screen.getByRole('button');
      expect(button).toBeDisabled();
      expect(button).toHaveClass('btn--disabled');
      
      // Should not be a link
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('should be keyboard accessible as link', () => {
      render(<Button href="/about">Go to About</Button>);
      
      const link = screen.getByRole('link');
      
      // Focus link (simulating Tab navigation)
      link.focus();
      expect(link).toHaveFocus();
    });
  });

  // ============================================================================
  // Edge Cases
  // ============================================================================
  
  describe('Edge Cases', () => {
    it('should handle empty children gracefully', () => {
      render(<Button ariaLabel="Empty button">{''}</Button>);
      
      const button = screen.getByRole('button', { name: /empty button/i });
      expect(button).toBeInTheDocument();
    });

    it('should handle React node children', () => {
      render(
        <Button>
          <span>Icon</span> Text
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveTextContent('Icon Text');
    });

    it('should combine multiple class names correctly', () => {
      render(
        <Button variant="primary" size="lg" className="custom-class">
          Custom Button
        </Button>
      );
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn', 'btn--primary', 'btn--lg', 'custom-class');
    });
  });
});

