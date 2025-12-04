/**
 * Toggle Component Tests
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from '@/components/ui/Toggle';

describe('Toggle Component', () => {
  describe('Rendering', () => {
    it('should render toggle with label', () => {
      render(
        <Toggle
          id="test-toggle"
          label="Test Toggle"
          checked={false}
          onChange={() => {}}
        />
      );
      
      expect(screen.getByLabelText('Test Toggle')).toBeInTheDocument();
    });

    it('should render as switch role', () => {
      render(
        <Toggle
          id="test-toggle"
          label="Test Toggle"
          checked={false}
          onChange={() => {}}
        />
      );
      
      expect(screen.getByRole('switch')).toBeInTheDocument();
    });

    it('should display checked state correctly', () => {
      render(
        <Toggle
          id="test-toggle"
          label="Test Toggle"
          checked={true}
          onChange={() => {}}
        />
      );
      
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'true');
    });

    it('should display unchecked state correctly', () => {
      render(
        <Toggle
          id="test-toggle"
          label="Test Toggle"
          checked={false}
          onChange={() => {}}
        />
      );
      
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'false');
    });
  });

  describe('Interactions', () => {
    it('should call onChange when clicked', () => {
      const handleChange = jest.fn();
      render(
        <Toggle
          id="test-toggle"
          label="Test Toggle"
          checked={false}
          onChange={handleChange}
        />
      );
      
      const toggle = screen.getByRole('switch');
      fireEvent.click(toggle);
      
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('should be keyboard accessible', () => {
      render(
        <Toggle
          id="test-toggle"
          label="Test Toggle"
          checked={false}
          onChange={() => {}}
        />
      );
      
      const toggle = screen.getByRole('switch');
      toggle.focus();
      expect(toggle).toHaveFocus();
    });
  });

  describe('Accessibility', () => {
    it('should have proper label association', () => {
      render(
        <Toggle
          id="test-toggle"
          label="Test Toggle"
          checked={false}
          onChange={() => {}}
        />
      );
      
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('id', 'test-toggle');
    });

    it('should have aria-checked attribute', () => {
      render(
        <Toggle
          id="test-toggle"
          label="Test Toggle"
          checked={true}
          onChange={() => {}}
        />
      );
      
      const toggle = screen.getByRole('switch');
      expect(toggle).toHaveAttribute('aria-checked', 'true');
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(
        <Toggle
          id="test-toggle"
          label="Test Toggle"
          checked={false}
          onChange={() => {}}
        />
      );
      
      expect(container.querySelector('.toggle-wrapper')).toBeInTheDocument();
      expect(container.querySelector('.toggle')).toBeInTheDocument();
    });
  });
});

