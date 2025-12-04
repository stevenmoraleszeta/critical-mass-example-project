/**
 * Tag Component Tests
 */

import { render, screen } from '@testing-library/react';
import Tag from '@/components/ui/Tag';

describe('Tag Component', () => {
  describe('Rendering', () => {
    it('should render tag with text', () => {
      render(<Tag text="React" />);
      expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('should render with default variant', () => {
      const { container } = render(<Tag text="Tag" />);
      const tag = container.querySelector('.tag');
      expect(tag).toHaveClass('tag--default');
    });

    it('should render with primary variant', () => {
      const { container } = render(<Tag text="Tag" variant="primary" />);
      const tag = container.querySelector('.tag');
      expect(tag).toHaveClass('tag--primary');
    });

    it('should render with secondary variant', () => {
      const { container } = render(<Tag text="Tag" variant="secondary" />);
      const tag = container.querySelector('.tag');
      expect(tag).toHaveClass('tag--secondary');
    });

    it('should render with small size', () => {
      const { container } = render(<Tag text="Tag" size="sm" />);
      const tag = container.querySelector('.tag');
      expect(tag).toHaveClass('tag--sm');
    });

    it('should render with medium size by default', () => {
      const { container } = render(<Tag text="Tag" />);
      const tag = container.querySelector('.tag');
      expect(tag).toHaveClass('tag--md');
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(<Tag text="Tag" variant="primary" size="md" />);
      const tag = container.querySelector('.tag');
      expect(tag).toHaveClass('tag');
      expect(tag).toHaveClass('tag--primary');
      expect(tag).toHaveClass('tag--md');
    });
  });
});

