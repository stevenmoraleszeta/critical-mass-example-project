/**
 * MainLayout Component Tests
 */

import { render, screen } from '@testing-library/react';
import MainLayout from '@/components/layout/MainLayout';

jest.mock('@/components/layout/NavBar', () => ({
  __esModule: true,
  default: () => <nav data-testid="navbar">NavBar</nav>,
}));

jest.mock('@/components/layout/Footer', () => ({
  __esModule: true,
  default: () => <footer data-testid="footer">Footer</footer>,
}));

describe('MainLayout Component', () => {
  describe('Rendering', () => {
    it('should render MainLayout with children', () => {
      render(
        <MainLayout>
          <div>Test Content</div>
        </MainLayout>
      );
      
      expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('should render NavBar in header', () => {
      render(
        <MainLayout>
          <div>Content</div>
        </MainLayout>
      );
      
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });

    it('should render Footer', () => {
      render(
        <MainLayout>
          <div>Content</div>
        </MainLayout>
      );
      
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('should render main content area', () => {
      render(
        <MainLayout>
          <div>Content</div>
        </MainLayout>
      );
      
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
      expect(main).toHaveAttribute('id', 'main-content');
    });
  });

  describe('Semantic HTML', () => {
    it('should have semantic header element', () => {
      const { container } = render(
        <MainLayout>
          <div>Content</div>
        </MainLayout>
      );
      
      const header = container.querySelector('header[role="banner"]');
      expect(header).toBeInTheDocument();
    });

    it('should have semantic main element', () => {
      render(
        <MainLayout>
          <div>Content</div>
        </MainLayout>
      );
      
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });

    it('should have main-content id for skip link', () => {
      render(
        <MainLayout>
          <div>Content</div>
        </MainLayout>
      );
      
      const main = screen.getByRole('main');
      expect(main).toHaveAttribute('id', 'main-content');
    });
  });

  describe('Structure', () => {
    it('should have correct layout order: header, main, footer', () => {
      const { container } = render(
        <MainLayout>
          <div>Content</div>
        </MainLayout>
      );
      
      const header = container.querySelector('header');
      const main = container.querySelector('main');
      const footer = container.querySelector('footer');
      
      expect(header).toBeInTheDocument();
      expect(main).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
    });
  });
});

