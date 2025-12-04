/**
 * Footer Component Tests
 */

import { render, screen } from '@testing-library/react';
import Footer from '@/components/layout/Footer';

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, className, ariaLabel, ...props }: any) => (
    <a href={href} className={className} aria-label={ariaLabel} {...props}>
      {children}
    </a>
  ),
}));

describe('Footer Component', () => {
  describe('Rendering', () => {
    it('should render footer', () => {
      const { container } = render(<Footer />);
      expect(container.querySelector('.footer')).toBeInTheDocument();
    });

    it('should render social links', () => {
      render(<Footer />);
      
      expect(screen.getByLabelText('Visit Steven Morales LinkedIn profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Visit Steven Morales GitHub profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Visit Steven Morales Instagram profile')).toBeInTheDocument();
    });

    it('should render contact links', () => {
      render(<Footer />);
      
      expect(screen.getByLabelText('Send email to fallasmoraless@gmail.com')).toBeInTheDocument();
      expect(screen.getByLabelText('Contact via WhatsApp at +506 6130 4830')).toBeInTheDocument();
    });

    it('should render copyright notice', () => {
      render(<Footer />);
      expect(screen.getByText(/© \d{4} Steven Morales/i)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have role contentinfo', () => {
      render(<Footer />);
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('should have aria-label for site footer', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveAttribute('aria-label', 'Site footer');
    });

    it('should have aria-label for social media links', () => {
      render(<Footer />);
      expect(screen.getByLabelText('Social media links')).toBeInTheDocument();
    });

    it('should have aria-label for contact information', () => {
      render(<Footer />);
      expect(screen.getByLabelText('Contact information')).toBeInTheDocument();
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(<Footer />);
      expect(container.querySelector('.footer')).toBeInTheDocument();
      expect(container.querySelector('.footer__container')).toBeInTheDocument();
      expect(container.querySelector('.footer__content')).toBeInTheDocument();
    });
  });
});

