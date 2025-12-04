/**
 * NavBar Component Tests
 */

import { render, screen } from '@testing-library/react';
import NavBar from '@/components/layout/NavBar';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

jest.mock('@/lib/hooks', () => ({
  useToggle: () => ({
    value: false,
    setTrue: jest.fn(),
    setFalse: jest.fn(),
    toggle: jest.fn(),
  }),
  useClickOutside: jest.fn(),
  useMediaQuery: () => false,
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, className, ariaLabel, onClick, ...props }: any) => (
    <a href={href} className={className} aria-label={ariaLabel} onClick={onClick} {...props}>
      {children}
    </a>
  ),
}));

describe('NavBar Component', () => {
  describe('Rendering', () => {
    it('should render navbar', () => {
      const { container } = render(<NavBar />);
      expect(container.querySelector('.navbar')).toBeInTheDocument();
    });

    it('should render navigation links', () => {
      render(<NavBar />);
      
      expect(screen.getByLabelText('Go to home page')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to this project page')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to curriculum page')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to cover letter page')).toBeInTheDocument();
      expect(screen.getByLabelText('Go to contact page')).toBeInTheDocument();
    });

    it('should render logo link', () => {
      render(<NavBar />);
      
      const logoLink = screen.getByLabelText('Steven Morales - Home');
      expect(logoLink).toBeInTheDocument();
      expect(logoLink).toHaveAttribute('href', '/');
    });

    it('should render menu button', () => {
      render(<NavBar />);
      
      const menuButton = screen.getByLabelText('Open navigation menu');
      expect(menuButton).toBeInTheDocument();
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Accessibility', () => {
    it('should have role navigation', () => {
      render(<NavBar />);
      expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('should have aria-label for main navigation', () => {
      render(<NavBar />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveAttribute('aria-label', 'Main navigation');
    });

    it('should have aria-controls on menu button', () => {
      render(<NavBar />);
      const menuButton = screen.getByLabelText('Open navigation menu');
      expect(menuButton).toHaveAttribute('aria-controls', 'navbar-menu');
    });
  });

  describe('BEM Naming', () => {
    it('should follow BEM naming convention', () => {
      const { container } = render(<NavBar />);
      expect(container.querySelector('.navbar')).toBeInTheDocument();
      expect(container.querySelector('.navbar__container')).toBeInTheDocument();
      expect(container.querySelector('.navbar__list')).toBeInTheDocument();
    });
  });
});

