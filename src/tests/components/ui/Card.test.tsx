/**
 * Card Component Tests
 * 
 * Following Critical Mass requirements:
 * - Test card renders correctly
 * - Test card variants work
 * - Test card is accessible
 * 
 * Following TODO.md requirements:
 * - Test card renders correctly
 * - Test all variants (default, feature, content)
 * - Test image support
 * - Test footer support
 * - Test children support
 */

import { render, screen } from '@testing-library/react';
import Card from '@/components/ui/Card';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, className, loading }: any) => {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
      />
    );
  },
}));

describe('Card Component', () => {
  // ============================================================================
  // Rendering Tests
  // ============================================================================
  
  describe('Rendering', () => {
    it('should render card with title and description', () => {
      render(
        <Card title="Card Title" description="Card description" />
      );
      
      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card description')).toBeInTheDocument();
    });

    it('should render with default variant by default', () => {
      render(<Card title="Default Card" />);
      
      const card = screen.getByRole('article');
      expect(card).toHaveClass('card', 'card--default');
    });

    it('should render with default variant explicitly', () => {
      render(<Card variant="default" title="Default Card" />);
      
      const card = screen.getByRole('article');
      expect(card).toHaveClass('card', 'card--default');
    });

    it('should render with feature variant', () => {
      render(<Card variant="feature" title="Feature Card" />);
      
      const card = screen.getByRole('article');
      expect(card).toHaveClass('card', 'card--feature');
    });

    it('should render with content variant', () => {
      render(<Card variant="content" title="Content Card" />);
      
      const card = screen.getByRole('article');
      expect(card).toHaveClass('card', 'card--content');
    });

    it('should render card with children', () => {
      render(
        <Card>
          <p>Card content</p>
        </Card>
      );
      
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('should render card with custom className', () => {
      render(<Card className="custom-class" title="Custom Card" />);
      
      const card = screen.getByRole('article');
      expect(card).toHaveClass('custom-class');
    });
  });

  // ============================================================================
  // Image Support Tests
  // ============================================================================
  
  describe('Image Support', () => {
    it('should render card with image', () => {
      render(
        <Card
          title="Card with Image"
          image={{
            src: '/test-image.jpg',
            alt: 'Test image',
            width: 400,
            height: 300,
          }}
        />
      );
      
      const image = screen.getByAltText('Test image');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', '/test-image.jpg');
      expect(image).toHaveAttribute('width', '400');
      expect(image).toHaveAttribute('height', '300');
    });

    it('should render image with default dimensions', () => {
      render(
        <Card
          image={{
            src: '/test-image.jpg',
            alt: 'Test image',
          }}
        />
      );
      
      const image = screen.getByAltText('Test image');
      expect(image).toHaveAttribute('width', '400');
      expect(image).toHaveAttribute('height', '300');
    });

    it('should render image with lazy loading', () => {
      render(
        <Card
          image={{
            src: '/test-image.jpg',
            alt: 'Test image',
          }}
        />
      );
      
      const image = screen.getByAltText('Test image');
      expect(image).toHaveAttribute('loading', 'lazy');
    });

    it('should render image in card__image container', () => {
      render(
        <Card
          image={{
            src: '/test-image.jpg',
            alt: 'Test image',
          }}
        />
      );
      
      const imageContainer = screen.getByAltText('Test image').closest('.card__image');
      expect(imageContainer).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Footer Support Tests
  // ============================================================================
  
  describe('Footer Support', () => {
    it('should render card with footer', () => {
      render(
        <Card title="Card with Footer" footer={<button>Action</button>} />
      );
      
      expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument();
      
      const footer = screen.getByRole('button').closest('.card__footer');
      expect(footer).toBeInTheDocument();
    });

    it('should render footer with React node content', () => {
      render(
        <Card
          footer={
            <div>
              <span>Footer content</span>
              <button>Button</button>
            </div>
          }
        />
      );
      
      expect(screen.getByText('Footer content')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Content Combination Tests
  // ============================================================================
  
  describe('Content Combinations', () => {
    it('should render card with title, description, and children', () => {
      render(
        <Card title="Title" description="Description">
          <p>Children content</p>
        </Card>
      );
      
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByText('Children content')).toBeInTheDocument();
    });

    it('should render card with all elements: image, title, description, children, footer', () => {
      render(
        <Card
          variant="feature"
          title="Full Card"
          description="Description"
          image={{
            src: '/test.jpg',
            alt: 'Test',
          }}
          footer={<button>Action</button>}
        >
          <p>Body content</p>
        </Card>
      );
      
      expect(screen.getByAltText('Test')).toBeInTheDocument();
      expect(screen.getByText('Full Card')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByText('Body content')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument();
    });

    it('should render card with only children (no title or description)', () => {
      render(
        <Card>
          <div>
            <h2>Custom Title</h2>
            <p>Custom content</p>
          </div>
        </Card>
      );
      
      expect(screen.getByText('Custom Title')).toBeInTheDocument();
      expect(screen.getByText('Custom content')).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Semantic HTML Tests (Accessibility)
  // ============================================================================
  
  describe('Semantic HTML (Accessibility)', () => {
    it('should render as article element', () => {
      render(<Card title="Card" />);
      
      const card = screen.getByRole('article');
      expect(card).toBeInTheDocument();
    });

    it('should render title as h3 element', () => {
      render(<Card title="Card Title" />);
      
      const title = screen.getByRole('heading', { level: 3 });
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Card Title');
    });

    it('should render description as paragraph element', () => {
      render(<Card description="Card description" />);
      
      const description = screen.getByText('Card description');
      expect(description.tagName).toBe('P');
    });

    it('should have proper structure with card__content container', () => {
      render(<Card title="Card" description="Description" />);
      
      const card = screen.getByRole('article');
      const content = card.querySelector('.card__content');
      expect(content).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Variant-Specific Tests
  // ============================================================================
  
  describe('Variant-Specific Behavior', () => {
    it('should apply feature variant styles', () => {
      render(<Card variant="feature" title="Feature" />);
      
      const card = screen.getByRole('article');
      expect(card).toHaveClass('card--feature');
    });

    it('should apply content variant styles', () => {
      render(<Card variant="content" title="Content" />);
      
      const card = screen.getByRole('article');
      expect(card).toHaveClass('card--content');
    });

    it('should render all variants correctly', () => {
      const { rerender } = render(<Card variant="default" title="Card" />);
      let card = screen.getByRole('article');
      expect(card).toHaveClass('card--default');

      rerender(<Card variant="feature" title="Card" />);
      card = screen.getByRole('article');
      expect(card).toHaveClass('card--feature');

      rerender(<Card variant="content" title="Card" />);
      card = screen.getByRole('article');
      expect(card).toHaveClass('card--content');
    });
  });

  // ============================================================================
  // Edge Cases
  // ============================================================================
  
  describe('Edge Cases', () => {
    it('should handle empty card gracefully', () => {
      render(<Card />);
      
      const card = screen.getByRole('article');
      expect(card).toBeInTheDocument();
    });

    it('should handle card with only title', () => {
      render(<Card title="Title Only" />);
      
      expect(screen.getByText('Title Only')).toBeInTheDocument();
    });

    it('should handle card with only description', () => {
      render(<Card description="Description only" />);
      
      expect(screen.getByText('Description only')).toBeInTheDocument();
    });

    it('should handle card with only image', () => {
      render(
        <Card
          image={{
            src: '/test.jpg',
            alt: 'Test image',
          }}
        />
      );
      
      expect(screen.getByAltText('Test image')).toBeInTheDocument();
    });

    it('should handle multiple class names correctly', () => {
      render(
        <Card
          variant="feature"
          className="custom-class another-class"
          title="Card"
        />
      );
      
      const card = screen.getByRole('article');
      expect(card).toHaveClass('card', 'card--feature', 'custom-class', 'another-class');
    });
  });
});

