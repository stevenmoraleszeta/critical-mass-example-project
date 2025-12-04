/**
 * CTASection Component Tests
 */

import { render, screen } from '@testing-library/react';
import CTASection from '@/components/sections/CTASection';

jest.mock('@/components/ui/Button', () => ({
  __esModule: true,
  default: ({ children, href, variant, size, ariaLabel }: any) => (
    <a
      href={href}
      data-variant={variant}
      data-size={size}
      aria-label={ariaLabel}
      data-testid="cta-button"
    >
      {children}
    </a>
  ),
}));

jest.mock('@/components/ui/AnimatedGradientBackground', () => ({
  __esModule: true,
  default: () => <div data-testid="animated-gradient" />,
}));

describe('CTASection Component', () => {
  describe('Rendering', () => {
    it('should render CTA section', () => {
      const { container } = render(<CTASection />);
      expect(container.querySelector('.cta-section')).toBeInTheDocument();
    });

    it('should render title', () => {
      render(<CTASection />);
      expect(screen.getByText(/Want to see how I would work at Critical Mass/i)).toBeInTheDocument();
    });

    it('should render description', () => {
      render(<CTASection />);
      expect(screen.getByText(/Start with the/i)).toBeInTheDocument();
    });

    it('should render action buttons', () => {
      render(<CTASection />);
      
      const buttons = screen.getAllByTestId('cta-button');
      expect(buttons).toHaveLength(2);
      expect(screen.getByText('See Cover Letter')).toBeInTheDocument();
      expect(screen.getByText('Get in Touch')).toBeInTheDocument();
    });

    it('should render animated gradient background', () => {
      render(<CTASection />);
      expect(screen.getByTestId('animated-gradient')).toBeInTheDocument();
    });
  });

  describe('Button Links', () => {
    it('should have correct href for Cover Letter button', () => {
      render(<CTASection />);
      const coverLetterButton = screen.getByText('See Cover Letter').closest('a');
      expect(coverLetterButton).toHaveAttribute('href', '/cover-letter');
    });

    it('should have correct href for Contact button', () => {
      render(<CTASection />);
      const contactButton = screen.getByText('Get in Touch').closest('a');
      expect(contactButton).toHaveAttribute('href', '/contact');
    });
  });

  describe('Accessibility', () => {
    it('should have aria-labelledby pointing to title', () => {
      const { container } = render(<CTASection />);
      const section = container.querySelector('.cta-section');
      expect(section).toHaveAttribute('aria-labelledby', 'cta-title');
      
      const title = screen.getByRole('heading', { level: 2 });
      expect(title).toHaveAttribute('id', 'cta-title');
    });

    it('should have single h2 heading', () => {
      render(<CTASection />);
      const headings = screen.getAllByRole('heading', { level: 2 });
      expect(headings).toHaveLength(1);
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(<CTASection />);
      expect(container.querySelector('.cta-section')).toBeInTheDocument();
      expect(container.querySelector('.cta-section__container')).toBeInTheDocument();
      expect(container.querySelector('.cta-section__title')).toBeInTheDocument();
      expect(container.querySelector('.cta-section__description')).toBeInTheDocument();
      expect(container.querySelector('.cta-section__actions')).toBeInTheDocument();
    });
  });
});

