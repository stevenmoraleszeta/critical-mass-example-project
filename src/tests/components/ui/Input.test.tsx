/**
 * Input Component Tests
 * 
 * Following Critical Mass requirements:
 * - Test input renders correctly
 * - Test input is accessible
 * - Test validation and error states
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Input from '@/components/ui/Input';

describe('Input Component', () => {
  describe('Rendering', () => {
    it('should render input with label', () => {
      render(
        <Input
          id="test-input"
          label="Test Input"
          value=""
          onChange={() => {}}
        />
      );
      
      expect(screen.getByLabelText('Test Input')).toBeInTheDocument();
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should render with different input types', () => {
      const { rerender } = render(
        <Input
          id="test-input"
          label="Email Input"
          type="email"
          value=""
          onChange={() => {}}
        />
      );
      
      expect(screen.getByLabelText('Email Input')).toHaveAttribute('type', 'email');
      
      rerender(
        <Input
          id="test-input"
          label="Password Input"
          type="password"
          value=""
          onChange={() => {}}
        />
      );
      
      expect(screen.getByLabelText('Password Input')).toHaveAttribute('type', 'password');
    });

    it('should render with placeholder', () => {
      render(
        <Input
          id="test-input"
          label="Test Input"
          placeholder="Enter text here"
          value=""
          onChange={() => {}}
        />
      );
      
      expect(screen.getByPlaceholderText('Enter text here')).toBeInTheDocument();
    });

    it('should display value correctly', () => {
      render(
        <Input
          id="test-input"
          label="Test Input"
          value="Test value"
          onChange={() => {}}
        />
      );
      
      expect(screen.getByRole('textbox')).toHaveValue('Test value');
    });
  });

  describe('Required Field', () => {
    it('should show required indicator when required', () => {
      render(
        <Input
          id="test-input"
          label="Required Input"
          required
          value=""
          onChange={() => {}}
        />
      );
      
      const label = screen.getByText('Required Input');
      const requiredSpan = label.querySelector('.input__required');
      expect(requiredSpan).toBeInTheDocument();
    });

    it('should have aria-required when required', () => {
      render(
        <Input
          id="test-input"
          label="Required Input"
          required
          value=""
          onChange={() => {}}
        />
      );
      
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true');
      expect(screen.getByRole('textbox')).toHaveAttribute('required');
    });
  });

  describe('Error State', () => {
    it('should display error message when error is provided', () => {
      render(
        <Input
          id="test-input"
          label="Test Input"
          value=""
          onChange={() => {}}
          error="This field is required"
        />
      );
      
      expect(screen.getByText('This field is required')).toBeInTheDocument();
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('should have aria-invalid when error is present', () => {
      render(
        <Input
          id="test-input"
          label="Test Input"
          value=""
          onChange={() => {}}
          error="Error message"
        />
      );
      
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
    });

    it('should have error class on wrapper when error is present', () => {
      const { container } = render(
        <Input
          id="test-input"
          label="Test Input"
          value=""
          onChange={() => {}}
          error="Error message"
        />
      );
      
      const wrapper = container.querySelector('.input');
      expect(wrapper).toHaveClass('input--error');
    });

    it('should associate error message with input via aria-describedby', () => {
      render(
        <Input
          id="test-input"
          label="Test Input"
          value=""
          onChange={() => {}}
          error="Error message"
        />
      );
      
      const input = screen.getByRole('textbox');
      const errorId = input.getAttribute('aria-describedby');
      expect(errorId).toBe('test-input-error');
      
      const errorMessage = screen.getByText('Error message');
      expect(errorMessage).toHaveAttribute('id', 'test-input-error');
    });
  });

  describe('Interactions', () => {
    it('should call onChange when input value changes', () => {
      const handleChange = jest.fn();
      render(
        <Input
          id="test-input"
          label="Test Input"
          value=""
          onChange={handleChange}
        />
      );
      
      const input = screen.getByRole('textbox');
      fireEvent.change(input, { target: { value: 'new value' } });
      
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should be keyboard accessible', () => {
      render(
        <Input
          id="test-input"
          label="Test Input"
          value=""
          onChange={() => {}}
        />
      );
      
      const input = screen.getByRole('textbox');
      input.focus();
      expect(input).toHaveFocus();
    });
  });

  describe('Accessibility', () => {
    it('should have proper label association', () => {
      render(
        <Input
          id="test-input"
          label="Test Input"
          value=""
          onChange={() => {}}
        />
      );
      
      const label = screen.getByText('Test Input');
      const input = screen.getByRole('textbox');
      
      expect(label).toHaveAttribute('for', 'test-input');
      expect(input).toHaveAttribute('id', 'test-input');
    });

    it('should support custom aria-describedby', () => {
      render(
        <Input
          id="test-input"
          label="Test Input"
          value=""
          onChange={() => {}}
          ariaDescribedBy="custom-description"
        />
      );
      
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-describedby', 'custom-description');
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(
        <Input
          id="test-input"
          label="Test Input"
          value=""
          onChange={() => {}}
        />
      );
      
      expect(container.querySelector('.input')).toBeInTheDocument();
      expect(container.querySelector('.input__label')).toBeInTheDocument();
      expect(container.querySelector('.input__field')).toBeInTheDocument();
    });
  });
});

