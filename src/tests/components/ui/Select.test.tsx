/**
 * Select Component Tests
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Select from '@/components/ui/Select';

jest.mock('@/lib/hooks', () => ({
  useToggle: () => ({
    value: false,
    setTrue: jest.fn(),
    setFalse: jest.fn(),
    toggle: jest.fn(),
  }),
  useClickOutside: jest.fn(),
  useFocusTrap: jest.fn(),
  useDebounce: (value: string) => value,
}));

const mockOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

describe('Select Component', () => {
  describe('Rendering', () => {
    it('should render select with label', () => {
      render(
        <Select
          id="test-select"
          label="Test Select"
          options={mockOptions}
          value=""
          onChange={() => {}}
        />
      );
      
      expect(screen.getByLabelText('Test Select')).toBeInTheDocument();
    });

    it('should display placeholder when no value is selected', () => {
      render(
        <Select
          id="test-select"
          label="Test Select"
          options={mockOptions}
          value=""
          onChange={() => {}}
        />
      );
      
      const trigger = screen.getByLabelText('Test Select');
      expect(trigger).toHaveTextContent('Select an option');
    });

    it('should display selected option label', () => {
      render(
        <Select
          id="test-select"
          label="Test Select"
          options={mockOptions}
          value="option2"
          onChange={() => {}}
        />
      );
      
      const trigger = screen.getByLabelText('Test Select');
      expect(trigger).toHaveTextContent('Option 2');
    });
  });

  describe('Required Field', () => {
    it('should show required indicator when required', () => {
      render(
        <Select
          id="test-select"
          label="Required Select"
          options={mockOptions}
          value=""
          onChange={() => {}}
          required
        />
      );
      
      const label = screen.getByText('Required Select');
      const requiredSpan = label.querySelector('.select__required');
      expect(requiredSpan).toBeInTheDocument();
    });
  });

  describe('Error State', () => {
    it('should display error message when error is provided', () => {
      render(
        <Select
          id="test-select"
          label="Test Select"
          options={mockOptions}
          value=""
          onChange={() => {}}
          error="Please select an option"
        />
      );
      
      expect(screen.getByText('Please select an option')).toBeInTheDocument();
    });

    it('should have error class when error is present', () => {
      const { container } = render(
        <Select
          id="test-select"
          label="Test Select"
          options={mockOptions}
          value=""
          onChange={() => {}}
          error="Error message"
        />
      );
      
      const wrapper = container.querySelector('.select');
      expect(wrapper).toHaveClass('select--error');
    });
  });

  describe('Accessibility', () => {
    it('should have proper label association', () => {
      render(
        <Select
          id="test-select"
          label="Test Select"
          options={mockOptions}
          value=""
          onChange={() => {}}
        />
      );
      
      const label = screen.getByText('Test Select');
      const trigger = screen.getByLabelText('Test Select');
      
      expect(label).toHaveAttribute('for', 'test-select');
      expect(trigger).toHaveAttribute('id', 'test-select');
    });

    it('should have aria-haspopup listbox', () => {
      render(
        <Select
          id="test-select"
          label="Test Select"
          options={mockOptions}
          value=""
          onChange={() => {}}
        />
      );
      
      const trigger = screen.getByLabelText('Test Select');
      expect(trigger).toHaveAttribute('aria-haspopup', 'listbox');
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(
        <Select
          id="test-select"
          label="Test Select"
          options={mockOptions}
          value=""
          onChange={() => {}}
        />
      );
      
      expect(container.querySelector('.select')).toBeInTheDocument();
      expect(container.querySelector('.select__label')).toBeInTheDocument();
      expect(container.querySelector('.select__trigger')).toBeInTheDocument();
    });
  });
});

