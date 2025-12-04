/**
 * FeatureGridSection Component Tests (Key Highlights Section)
 * 
 * Following Critical Mass requirements:
 * - Test section renders correctly
 * - Test section is responsive
 * 
 * Following TODO.md Phase 19 requirements:
 * - Test section renders with all 6 highlights from PROJECT-CONTENT.md
 * - Test section is responsive
 */

import { render, screen } from '@testing-library/react';
import FeatureGridSection, { FeatureItem } from '@/components/sections/FeatureGridSection';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, className }: any) => (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      data-testid="next-image"
    />
  ),
}));

jest.mock('@/components/ui/Card', () => ({
  __esModule: true,
  default: ({ title, image, children, variant }: any) => (
    <article data-testid="feature-card" data-variant={variant}>
      {image && <img src={image.src} alt={image.alt} data-testid="card-image" />}
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  ),
}));

jest.mock('@/components/ui/Button', () => ({
  __esModule: true,
  default: ({ children, href, variant, size, ariaLabel }: any) => (
    <a
      href={href}
      data-variant={variant}
      data-size={size}
      aria-label={ariaLabel}
      data-testid="action-button"
    >
      {children}
    </a>
  ),
}));

jest.mock('@/components/ui/ScrollArrow', () => ({
  __esModule: true,
  default: ({ targetId, color }: any) => (
    <div data-testid="scroll-arrow" data-target-id={targetId} data-color={color} />
  ),
}));

const mockHighlights: FeatureItem[] = [
  {
    title: 'Front-End Expertise',
    image: {
      src: '/test-image-1.jpg',
      alt: 'Front-end development',
      width: 400,
      height: 300,
    },
    content: (
      <p>
        Strong in <strong>HTML, CSS, JavaScript, TypeScript, React, Next.js</strong>, design systems and reusable components.
      </p>
    ),
  },
  {
    title: 'Product Mindset',
    image: {
      src: '/test-image-2.jpg',
      alt: 'Product thinking',
      width: 400,
      height: 300,
    },
    content: (
      <p>
        I think in <strong>flows, user journeys, and product impact</strong>, not just isolated tasks.
      </p>
    ),
  },
  {
    title: 'Performance & Quality',
    image: {
      src: '/test-image-3.jpg',
      alt: 'Performance optimization',
      width: 400,
      height: 300,
    },
    content: (
      <p>
        Experience with <strong>performance optimization, scalability, and maintainable architectures</strong>.
      </p>
    ),
  },
  {
    title: 'Leadership & Mentorship',
    image: {
      src: '/test-image-4.jpg',
      alt: 'Leadership',
      width: 400,
      height: 300,
    },
    content: (
      <p>
        CEO & Lead Developer at <strong>Novaera</strong>, leading a <strong>multi-developer engineering team</strong>.
      </p>
    ),
  },
  {
    title: 'Education & Impact',
    image: {
      src: '/test-image-5.jpg',
      alt: 'Education',
      width: 400,
      height: 300,
    },
    content: (
      <p>
        CEO & Lead Tech Educator at <strong>ZETA Academia</strong>, offering <strong>30+ courses</strong> to <strong>1,000+ students</strong>.
      </p>
    ),
  },
  {
    title: 'Problem Solver',
    image: {
      src: '/test-image-6.jpg',
      alt: 'Problem solving',
      width: 400,
      height: 300,
    },
    content: (
      <p>
        Comfortable with <strong>debugging, root cause analysis, and reducing technical debt</strong>.
      </p>
    ),
  },
];

describe('FeatureGridSection Component (Key Highlights Section)', () => {
  // ============================================================================
  // Rendering Tests
  // ============================================================================
  
  describe('Rendering', () => {
    it('should render FeatureGridSection with title', () => {
      render(
        <FeatureGridSection
          title="Key Highlights – What I Bring to Critical Mass"
          highlights={mockHighlights}
        />
      );
      
      expect(screen.getByRole('region', { name: /key highlights/i })).toBeInTheDocument();
      expect(screen.getByText(/Key Highlights – What I Bring to Critical Mass/i)).toBeInTheDocument();
    });

    it('should render all 6 highlights from mock data', () => {
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
        />
      );
      
      expect(screen.getByText('Front-End Expertise')).toBeInTheDocument();
      expect(screen.getByText('Product Mindset')).toBeInTheDocument();
      expect(screen.getByText('Performance & Quality')).toBeInTheDocument();
      expect(screen.getByText('Leadership & Mentorship')).toBeInTheDocument();
      expect(screen.getByText('Education & Impact')).toBeInTheDocument();
      expect(screen.getByText('Problem Solver')).toBeInTheDocument();
      
      const cards = screen.getAllByTestId('feature-card');
      expect(cards).toHaveLength(6);
    });

    it('should render images for all highlights', () => {
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
        />
      );
      
      const images = screen.getAllByTestId('card-image');
      expect(images).toHaveLength(6);
      expect(images[0]).toHaveAttribute('alt', 'Front-end development');
      expect(images[5]).toHaveAttribute('alt', 'Problem solving');
    });

    it('should render content for each highlight', () => {
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
        />
      );
      
      expect(screen.getByText(/Strong in/i)).toBeInTheDocument();
      expect(screen.getByText(/HTML, CSS, JavaScript, TypeScript, React, Next.js/i)).toBeInTheDocument();
      expect(screen.getByText(/I think in/i)).toBeInTheDocument();
      expect(screen.getByText(/flows, user journeys, and product impact/i)).toBeInTheDocument();
      expect(screen.getByText(/Experience with/i)).toBeInTheDocument();
      expect(screen.getByText(/CEO & Lead Developer/i)).toBeInTheDocument();
      expect(screen.getByText(/Novaera/i)).toBeInTheDocument();
      expect(screen.getByText(/CEO & Lead Tech Educator/i)).toBeInTheDocument();
      expect(screen.getByText(/ZETA Academia/i)).toBeInTheDocument();
      expect(screen.getByText(/Comfortable with/i)).toBeInTheDocument();
      expect(screen.getByText(/debugging, root cause analysis/i)).toBeInTheDocument();
    });

    it('should render action button when provided', () => {
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
          actionButton={{
            text: 'View Currículum',
            href: '/curriculum',
            variant: 'exit',
            size: 'lg',
            ariaLabel: 'View Currículum',
          }}
        />
      );
      
      const actionButton = screen.getByTestId('action-button');
      expect(actionButton).toBeInTheDocument();
      expect(actionButton).toHaveTextContent('View Currículum');
      expect(actionButton).toHaveAttribute('href', '/curriculum');
      expect(actionButton).toHaveAttribute('data-variant', 'exit');
      expect(actionButton).toHaveAttribute('data-size', 'lg');
    });

    it('should render scroll arrow when provided', () => {
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
          scrollArrow={{
            targetId: 'cta',
            color: 'red',
          }}
        />
      );
      
      const scrollArrow = screen.getByTestId('scroll-arrow');
      expect(scrollArrow).toBeInTheDocument();
      expect(scrollArrow).toHaveAttribute('data-target-id', 'cta');
      expect(scrollArrow).toHaveAttribute('data-color', 'red');
    });
  });

  // ============================================================================
  // Semantic HTML Tests (Accessibility)
  // ============================================================================
  
  describe('Semantic HTML (Accessibility)', () => {
    it('should render as section element', () => {
      const { container } = render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
        />
      );
      
      const section = container.querySelector('section.feature-grid');
      expect(section).toBeInTheDocument();
    });

    it('should have aria-labelledby pointing to title', () => {
      render(
        <FeatureGridSection
          id="key-highlights"
          title="Key Highlights"
          highlights={mockHighlights}
        />
      );
      
      const section = screen.getByRole('region', { name: /key highlights/i });
      expect(section).toHaveAttribute('aria-labelledby', 'key-highlights-title');
      
      const title = screen.getByRole('heading', { level: 2 });
      expect(title).toHaveAttribute('id', 'key-highlights-title');
    });

    it('should have heading level 2 for section title', () => {
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
        />
      );
      
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Key Highlights');
    });

    it('should use default id when not provided', () => {
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
        />
      );
      
      const section = screen.getByRole('region', { name: /key highlights/i });
      expect(section).toHaveAttribute('id', 'feature-grid');
      expect(section).toHaveAttribute('aria-labelledby', 'feature-grid-title');
    });
  });

  // ============================================================================
  // BEM Naming Tests
  // ============================================================================
  
  describe('BEM Naming Convention', () => {
    it('should follow BEM naming for feature-grid section', () => {
      const { container } = render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
        />
      );
      
      const featureGrid = container.querySelector('.feature-grid');
      expect(featureGrid).toBeInTheDocument();
      
      const containerElement = container.querySelector('.feature-grid__container');
      expect(containerElement).toBeInTheDocument();
      
      const title = container.querySelector('.feature-grid__title');
      expect(title).toBeInTheDocument();
      
      const grid = container.querySelector('.feature-grid__grid');
      expect(grid).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      const { container } = render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
          className="key-highlights"
        />
      );
      
      const section = container.querySelector('.feature-grid.key-highlights');
      expect(section).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Content Verification Tests
  // ============================================================================
  
  describe('Content Verification from PROJECT-CONTENT.md', () => {
    it('should render all 6 key highlights items from PROJECT-CONTENT.md', () => {
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
        />
      );
      
      expect(screen.getByText(/Front-End Expertise/i)).toBeInTheDocument();
      expect(screen.getByText(/Product Mindset/i)).toBeInTheDocument();
      expect(screen.getByText(/Performance & Quality/i)).toBeInTheDocument();
      expect(screen.getByText(/Leadership & Mentorship/i)).toBeInTheDocument();
      expect(screen.getByText(/Education & Impact/i)).toBeInTheDocument();
      expect(screen.getByText(/Problem Solver/i)).toBeInTheDocument();
    });

    it('should render highlights with feature variant cards', () => {
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
        />
      );
      
      const cards = screen.getAllByTestId('feature-card');
      cards.forEach(card => {
        expect(card).toHaveAttribute('data-variant', 'feature');
      });
    });
  });

  // ============================================================================
  // Action Button Tests
  // ============================================================================
  
  describe('Action Button', () => {
    it('should not render action button when not provided', () => {
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
        />
      );
      
      const actionButton = screen.queryByTestId('action-button');
      expect(actionButton).not.toBeInTheDocument();
    });

    it('should render action button with correct props', () => {
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={mockHighlights}
          actionButton={{
            text: 'View More',
            href: '/more',
            variant: 'primary',
            size: 'md',
            ariaLabel: 'View more highlights',
            prefetch: true,
            className: 'custom-button',
          }}
        />
      );
      
      const actionButton = screen.getByTestId('action-button');
      expect(actionButton).toHaveTextContent('View More');
      expect(actionButton).toHaveAttribute('href', '/more');
      expect(actionButton).toHaveAttribute('data-variant', 'primary');
      expect(actionButton).toHaveAttribute('data-size', 'md');
      expect(actionButton).toHaveAttribute('aria-label', 'View more highlights');
    });
  });

  // ============================================================================
  // Edge Cases
  // ============================================================================
  
  describe('Edge Cases', () => {
    it('should handle empty highlights array', () => {
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={[]}
        />
      );
      
      expect(screen.getByText('Key Highlights')).toBeInTheDocument();
      const cards = screen.queryAllByTestId('feature-card');
      expect(cards).toHaveLength(0);
    });

    it('should handle single highlight', () => {
      const singleHighlight = [mockHighlights[0]];
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={singleHighlight}
        />
      );
      
      expect(screen.getByText('Front-End Expertise')).toBeInTheDocument();
      const cards = screen.getAllByTestId('feature-card');
      expect(cards).toHaveLength(1);
    });

    it('should handle highlights without images', () => {
      const highlightsWithoutImages: FeatureItem[] = [
        {
          title: 'Test Highlight',
          image: {
            src: '/placeholder.jpg',
            alt: 'Placeholder',
            width: 400,
            height: 300,
          },
          content: <p>Test content</p>,
        },
      ];
      
      render(
        <FeatureGridSection
          title="Key Highlights"
          highlights={highlightsWithoutImages}
        />
      );
      
      expect(screen.getByText('Test Highlight')).toBeInTheDocument();
    });
  });
});

