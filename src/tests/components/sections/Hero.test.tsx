/**
 * Hero Component Tests
 * 
 * Following Critical Mass requirements:
 * - Test Hero component renders correctly
 * - Test Hero is accessible
 * - Test Hero is responsive
 * 
 * Following TODO.md Phase 19 requirements:
 * - Test Hero component renders correctly with new content from PROJECT-CONTENT.md
 * - Test title and subtitle render correctly
 * - Test background image renders correctly if provided
 */

import { render, screen } from '@testing-library/react';
import Hero from '@/components/sections/Hero';

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, className, fill, priority, fetchPriority, quality, sizes, style }: any) => {
    if (fill) {
      return (
        <div
          data-testid="next-image-fill"
          data-src={src}
          data-alt={alt}
          className={className}
          style={style}
          data-priority={priority}
          data-fetch-priority={fetchPriority}
          data-quality={quality}
          data-sizes={sizes}
        />
      );
    }
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        data-priority={priority}
        data-quality={quality}
        data-sizes={sizes}
      />
    );
  },
}));

jest.mock('@/components/ui/FloatingBinaryElements', () => ({
  __esModule: true,
  default: () => <div data-testid="floating-binary-elements" />,
}));

jest.mock('@/components/ui/ScrollArrow', () => ({
  __esModule: true,
  default: ({ targetId, color }: any) => (
    <div data-testid="scroll-arrow" data-target-id={targetId} data-color={color} />
  ),
}));

describe('Hero Component', () => {
  // ============================================================================
  // Rendering Tests
  // ============================================================================
  
  describe('Rendering', () => {
    it('should render Hero component with title and subtitle', () => {
      render(
        <Hero
          title="Steven Morales Full Stack Software Engineer & Tech Leader"
          subtitle="Building high-quality, responsive, accessible full stack experiences"
        />
      );
      
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByText(/Steven Morales Full Stack Software Engineer & Tech Leader/i)).toBeInTheDocument();
      expect(screen.getByText(/Building high-quality/i)).toBeInTheDocument();
    });

    it('should render Hero component with ReactNode title', () => {
      render(
        <Hero
          title={
            <>
              Steven Morales
              <br />
              Full Stack Software Engineer & Tech Leader
            </>
          }
          subtitle="Building high-quality, responsive, accessible full stack experiences"
        />
      );
      
      const heading = screen.getByRole('heading', { level: 1 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Steven Morales');
      expect(heading).toHaveTextContent('Full Stack Software Engineer & Tech Leader');
    });

    it('should render Hero component with ReactNode subtitle', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle={
            <>
              Building <strong>high-quality, responsive, accessible</strong> full stack experiences
            </>
          }
        />
      );
      
      expect(screen.getByText(/Building/i)).toBeInTheDocument();
      expect(screen.getByText(/high-quality, responsive, accessible/i)).toBeInTheDocument();
    });

    it('should render with keyIdentity when provided', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
          keyIdentity="Full Stack Software Engineer | Tech Leader"
        />
      );
      
      expect(screen.getByText(/Full Stack Software Engineer \| Tech Leader/i)).toBeInTheDocument();
    });

    it('should render with valueIntro when provided', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
          valueIntro="3+ years of experience building scalable applications"
        />
      );
      
      expect(screen.getByText(/3\+ years of experience/i)).toBeInTheDocument();
    });

    it('should render with note when provided', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
          note="Available for full-time opportunities at Critical Mass."
        />
      );
      
      expect(screen.getByText(/Available for full-time opportunities/i)).toBeInTheDocument();
    });

    it('should render scroll arrow with default target', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
        />
      );
      
      const scrollArrow = screen.getByTestId('scroll-arrow');
      expect(scrollArrow).toBeInTheDocument();
      expect(scrollArrow).toHaveAttribute('data-target-id', 'role-focus');
      expect(scrollArrow).toHaveAttribute('data-color', 'white');
    });

    it('should render scroll arrow with custom target', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
          scrollTargetId="custom-target"
        />
      );
      
      const scrollArrow = screen.getByTestId('scroll-arrow');
      expect(scrollArrow).toHaveAttribute('data-target-id', 'custom-target');
    });
  });

  // ============================================================================
  // Image Tests
  // ============================================================================
  
  describe('Image Support', () => {
    it('should render background image when provided', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
          backgroundImage={{
            src: '/images/hero-background.webp',
            alt: 'Abstract background pattern',
          }}
        />
      );
      
      const backgroundImage = screen.getByTestId('next-image-fill');
      expect(backgroundImage).toBeInTheDocument();
      expect(backgroundImage).toHaveAttribute('data-src', '/images/hero-background.webp');
      expect(backgroundImage).toHaveAttribute('data-alt', 'Abstract background pattern');
    });

    it('should render foreground image when provided', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
          image={{
            src: '/images/hero-image.jpg',
            alt: 'Steven Morales photo',
          }}
        />
      );
      
      const image = screen.getByAltText('Steven Morales photo');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', '/images/hero-image.jpg');
    });

    it('should render both background and foreground images', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
          backgroundImage={{
            src: '/images/hero-background.webp',
            alt: 'Abstract background',
          }}
          image={{
            src: '/images/hero-image.jpg',
            alt: 'Steven Morales photo',
          }}
        />
      );
      
      const backgroundImage = screen.getByTestId('next-image-fill');
      const foregroundImage = screen.getByAltText('Steven Morales photo');
      
      expect(backgroundImage).toBeInTheDocument();
      expect(foregroundImage).toBeInTheDocument();
    });

    it('should render background overlay when background image is provided', () => {
      const { container } = render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
          backgroundImage={{
            src: '/images/hero-background.webp',
            alt: 'Abstract background',
          }}
        />
      );
      
      const overlay = container.querySelector('.hero__background-overlay');
      expect(overlay).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Semantic HTML Tests (Accessibility)
  // ============================================================================
  
  describe('Semantic HTML (Accessibility)', () => {
    it('should render as section element', () => {
      const { container } = render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
        />
      );
      
      const section = container.querySelector('section.hero');
      expect(section).toBeInTheDocument();
    });

    it('should have aria-labelledby pointing to title', () => {
      const { container } = render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
        />
      );
      
      const section = container.querySelector('section.hero');
      expect(section).toHaveAttribute('aria-labelledby', 'hero-title');
      
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toHaveAttribute('id', 'hero-title');
    });

    it('should have single h1 element (semantic correctness)', () => {
      const { container } = render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
        />
      );
      
      const headings = container.querySelectorAll('h1');
      expect(headings).toHaveLength(1);
    });

    it('should mark background image as decorative (aria-hidden)', () => {
      const { container } = render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
          backgroundImage={{
            src: '/images/hero-background.webp',
            alt: 'Abstract background',
          }}
        />
      );
      
      const backgroundImageContainer = container.querySelector('.hero__background-image');
      expect(backgroundImageContainer).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // ============================================================================
  // BEM Naming Tests
  // ============================================================================
  
  describe('BEM Naming Convention', () => {
    it('should follow BEM naming for hero section', () => {
      const { container } = render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
        />
      );
      
      const hero = container.querySelector('.hero');
      expect(hero).toBeInTheDocument();
      
      const containerElement = container.querySelector('.hero__container');
      expect(containerElement).toBeInTheDocument();
      
      const content = container.querySelector('.hero__content');
      expect(content).toBeInTheDocument();
      
      const title = container.querySelector('.hero__title');
      expect(title).toBeInTheDocument();
      
      const subtitle = container.querySelector('.hero__subtitle');
      expect(subtitle).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Floating Binary Elements Tests
  // ============================================================================
  
  describe('Floating Binary Elements', () => {
    it('should render FloatingBinaryElements component', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
        />
      );
      
      const floatingElements = screen.getByTestId('floating-binary-elements');
      expect(floatingElements).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Edge Cases
  // ============================================================================
  
  describe('Edge Cases', () => {
    it('should render without optional props', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
        />
      );
      
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
      expect(screen.getByText(/Building experiences/i)).toBeInTheDocument();
    });

    it('should handle empty string note gracefully', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
          note=""
        />
      );
      
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('should combine multiple optional content sections', () => {
      render(
        <Hero
          title="Steven Morales"
          subtitle="Building experiences"
          keyIdentity="Full Stack Developer"
          valueIntro="3+ years experience"
          note="Available for opportunities"
        />
      );
      
      expect(screen.getByText(/Full Stack Developer/i)).toBeInTheDocument();
      expect(screen.getByText(/3\+ years experience/i)).toBeInTheDocument();
      expect(screen.getByText(/Available for opportunities/i)).toBeInTheDocument();
    });
  });
});

