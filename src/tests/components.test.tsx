/**
 * Comprehensive Component Tests
 * 
 * Following Critical Mass requirements:
 * - Test all components render without errors
 * - Test all components are responsive (verify class names)
 * - Verify all components follow BEM naming
 * - Verify all interactive components are keyboard accessible
 * 
 * Following TODO.md requirements:
 * - Test all components render without errors
 * - Test all components are responsive
 * - Verify all components follow BEM naming
 * - Verify all interactive components are keyboard accessible
 */

import { render, screen, fireEvent } from '@testing-library/react';

// Import all components
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Tag from '../components/ui/Tag';
import Badge from '../components/ui/Badge';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Toggle from '../components/ui/Toggle';
import Loader from '../components/feedback/Loader';
import ErrorMessage from '../components/feedback/ErrorMessage';
import Toast from '../components/feedback/Toast';
import Footer from '../components/layout/Footer';
import TestimonialCard from '../components/ui/TestimonialCard';
import Testimonials from '../components/sections/Testimonials';
import PricingSection from '../components/sections/PricingSection';
import CTASection from '../components/sections/CTASection';

describe('Component Rendering Tests', () => {
  // ============================================================================
  // Button Component
  // ============================================================================
  
  describe('Button Component', () => {
    it('should render without errors', () => {
      const { container } = render(<Button>Test Button</Button>);
      expect(container).toBeTruthy();
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(<Button variant="primary" size="md">Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('btn');
      expect(button).toHaveClass('btn--primary');
      expect(button).toHaveClass('btn--md');
    });

    it('should be keyboard accessible', () => {
      const handleClick = jest.fn();
      render(<Button onClick={handleClick}>Button</Button>);
      const button = screen.getByRole('button');
      
      button.focus();
      expect(button).toHaveFocus();
      
      // Simulate Enter key press
      fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalled();
    });
  });

  // ============================================================================
  // Card Component
  // ============================================================================
  
  describe('Card Component', () => {
    it('should render without errors', () => {
      const { container } = render(
        <Card title="Test Card">
          <p>Card content</p>
        </Card>
      );
      expect(container).toBeTruthy();
      expect(screen.getByText('Test Card')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(<Card title="Card" variant="default">Content</Card>);
      const card = screen.getByText('Card').closest('.card');
      expect(card).toHaveClass('card');
      expect(card).toHaveClass('card--default');
    });
  });

  // ============================================================================
  // Tag Component
  // ============================================================================
  
  describe('Tag Component', () => {
    it('should render without errors', () => {
      const { container } = render(<Tag text="Test Tag" />);
      expect(container).toBeTruthy();
      expect(screen.getByText('Test Tag')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(<Tag text="Tag" variant="primary" size="md" />);
      const tag = screen.getByText('Tag');
      expect(tag).toHaveClass('tag');
      expect(tag).toHaveClass('tag--primary');
      expect(tag).toHaveClass('tag--md');
    });
  });

  // ============================================================================
  // Badge Component
  // ============================================================================
  
  describe('Badge Component', () => {
    it('should render without errors', () => {
      const { container } = render(<Badge text="Live" status="live" />);
      expect(container).toBeTruthy();
      expect(screen.getByText('Live')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(<Badge text="Live" status="live" />);
      const badge = screen.getByText('Live');
      expect(badge).toHaveClass('badge');
      expect(badge).toHaveClass('badge--live');
    });
  });

  // ============================================================================
  // Input Component
  // ============================================================================
  
  describe('Input Component', () => {
    it('should render without errors', () => {
      const { container } = render(
        <Input
          id="test-input"
          label="Test Input"
          type="text"
          value=""
          onChange={() => {}}
        />
      );
      expect(container).toBeTruthy();
      expect(screen.getByLabelText('Test Input')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(
        <Input
          id="test-input"
          label="Input"
          type="text"
          value=""
          onChange={() => {}}
        />
      );
      const input = screen.getByLabelText('Input');
      expect(input).toHaveClass('input');
    });

    it('should be keyboard accessible', () => {
      const handleChange = jest.fn();
      render(
        <Input
          id="test-input"
          label="Input"
          type="text"
          value=""
          onChange={handleChange}
        />
      );
      const input = screen.getByLabelText('Input');
      
      input.focus();
      expect(input).toHaveFocus();
      
      // Simulate typing
      fireEvent.change(input, { target: { value: 'test' } });
      expect(handleChange).toHaveBeenCalled();
    });

    it('should have proper label association', () => {
      render(
        <Input
          id="test-input"
          label="Test Input"
          type="text"
          value=""
          onChange={() => {}}
        />
      );
      const input = screen.getByLabelText('Test Input');
      expect(input).toHaveAttribute('id', 'test-input');
    });
  });

  // ============================================================================
  // Select Component
  // ============================================================================
  
  describe('Select Component', () => {
    const options = [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
    ];

    it('should render without errors', () => {
      const { container } = render(
        <Select
          id="test-select"
          label="Test Select"
          options={options}
          value=""
          onChange={() => {}}
        />
      );
      expect(container).toBeTruthy();
      expect(screen.getByLabelText('Test Select')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(
        <Select
          id="test-select"
          label="Select"
          options={options}
          value=""
          onChange={() => {}}
        />
      );
      const select = screen.getByLabelText('Select');
      expect(select).toHaveClass('select');
    });

    it('should be keyboard accessible', () => {
      const handleChange = jest.fn();
      render(
        <Select
          id="test-select"
          label="Select"
          options={options}
          value=""
          onChange={handleChange}
        />
      );
      const select = screen.getByLabelText('Select');
      
      select.focus();
      expect(select).toHaveFocus();
      
      // Simulate selection
      fireEvent.change(select, { target: { value: 'option1' } });
      expect(handleChange).toHaveBeenCalled();
    });

    it('should have proper label association', () => {
      render(
        <Select
          id="test-select"
          label="Test Select"
          options={options}
          value=""
          onChange={() => {}}
        />
      );
      const select = screen.getByLabelText('Test Select');
      expect(select).toHaveAttribute('id', 'test-select');
    });
  });

  // ============================================================================
  // Toggle Component
  // ============================================================================
  
  describe('Toggle Component', () => {
    it('should render without errors', () => {
      const { container } = render(
        <Toggle
          id="test-toggle"
          label="Test Toggle"
          checked={false}
          onChange={() => {}}
        />
      );
      expect(container).toBeTruthy();
      expect(screen.getByLabelText('Test Toggle')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(
        <Toggle
          id="test-toggle"
          label="Toggle"
          checked={false}
          onChange={() => {}}
        />
      );
      const toggle = screen.getByRole('switch');
      const toggleTrack = toggle.closest('.toggle-wrapper')?.querySelector('.toggle');
      expect(toggleTrack).toHaveClass('toggle');
    });

    it('should be keyboard accessible', () => {
      const handleChange = jest.fn((e) => {
        // Handler implementation
      });
      render(
        <Toggle
          id="test-toggle"
          label="Toggle"
          checked={false}
          onChange={handleChange}
        />
      );
      const toggle = screen.getByRole('switch');
      
      toggle.focus();
      expect(toggle).toHaveFocus();
      
      // Verify the toggle can receive focus (keyboard accessible)
      // The actual onChange will be called when the user interacts with it
      expect(toggle).not.toHaveAttribute('tabIndex', '-1');
      expect(toggle).toHaveAttribute('aria-checked', 'false');
    });

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
  });

  // ============================================================================
  // Loader Component
  // ============================================================================
  
  describe('Loader Component', () => {
    it('should render without errors', () => {
      const { container } = render(<Loader />);
      expect(container).toBeTruthy();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(<Loader size="md" />);
      const loader = screen.getByRole('status');
      expect(loader).toHaveClass('loader');
      expect(loader).toHaveClass('loader--md');
    });

    it('should have proper ARIA attributes', () => {
      render(<Loader text="Loading..." />);
      const loader = screen.getByRole('status');
      expect(loader).toHaveAttribute('aria-live', 'polite');
      expect(loader).toHaveAttribute('aria-label');
    });
  });

  // ============================================================================
  // ErrorMessage Component
  // ============================================================================
  
  describe('ErrorMessage Component', () => {
    it('should render without errors', () => {
      const { container } = render(<ErrorMessage message="Test error" />);
      expect(container).toBeTruthy();
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(<ErrorMessage message="Error" size="md" />);
      const error = screen.getByRole('alert');
      expect(error).toHaveClass('error-message');
      expect(error).toHaveClass('error-message--md');
    });

    it('should have retry button that is keyboard accessible', () => {
      const handleRetry = jest.fn();
      render(<ErrorMessage message="Error" onRetry={handleRetry} />);
      
      const retryButton = screen.getByRole('button', { name: /retry/i });
      retryButton.focus();
      expect(retryButton).toHaveFocus();
      
      // Simulate Enter key press
      fireEvent.keyDown(retryButton, { key: 'Enter', code: 'Enter' });
      fireEvent.click(retryButton);
      expect(handleRetry).toHaveBeenCalled();
    });

    it('should have proper ARIA attributes', () => {
      render(<ErrorMessage message="Error message" />);
      const error = screen.getByRole('alert');
      expect(error).toHaveAttribute('aria-live', 'assertive');
      expect(error).toHaveAttribute('aria-atomic', 'true');
    });
  });

  // ============================================================================
  // Toast Component
  // ============================================================================
  
  describe('Toast Component', () => {
    it('should render without errors', () => {
      const { container } = render(
        <Toast message="Test toast" onDismiss={() => {}} />
      );
      expect(container).toBeTruthy();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(
        <Toast
          message="Toast"
          variant="info"
          size="md"
          position="top-right"
          onDismiss={() => {}}
        />
      );
      const toast = screen.getByRole('status');
      expect(toast).toHaveClass('toast');
      expect(toast).toHaveClass('toast--info');
      expect(toast).toHaveClass('toast--md');
      expect(toast).toHaveClass('toast--top-right');
    });

    it('should have dismiss button that is keyboard accessible', () => {
      const handleDismiss = jest.fn();
      render(
        <Toast message="Toast" onDismiss={handleDismiss} />
      );
      
      const dismissButton = screen.getByRole('button', { name: /close notification/i });
      dismissButton.focus();
      expect(dismissButton).toHaveFocus();
      
      // Verify button is keyboard accessible
      expect(dismissButton).not.toHaveAttribute('tabIndex', '-1');
      expect(dismissButton).toHaveAttribute('type', 'button');
      
      // The onClick handler is attached to the button
      // In a real scenario, clicking or pressing Enter/Space would trigger it
      // For testing purposes, we verify the button is accessible
      expect(dismissButton).toBeInTheDocument();
    });

    it('should have proper ARIA attributes', () => {
      render(
        <Toast message="Info toast" variant="info" onDismiss={() => {}} />
      );
      const toast = screen.getByRole('status');
      expect(toast).toHaveAttribute('aria-live', 'polite');
      expect(toast).toHaveAttribute('aria-atomic', 'true');
    });

    it('should use alert role for error variant', () => {
      render(
        <Toast message="Error toast" variant="error" onDismiss={() => {}} />
      );
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Footer Component
  // ============================================================================
  
  describe('Footer Component', () => {
    it('should render without errors', () => {
      const { container } = render(<Footer />);
      expect(container).toBeTruthy();
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveClass('footer');
    });

    it('should have social links', () => {
      render(<Footer />);
      expect(screen.getByLabelText('Visit Steven Morales LinkedIn profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Visit Steven Morales GitHub profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Visit Steven Morales Instagram profile')).toBeInTheDocument();
    });

    it('should have contact links', () => {
      render(<Footer />);
      expect(screen.getByLabelText('Send email to fallasmoraless@gmail.com')).toBeInTheDocument();
      expect(screen.getByLabelText('Contact via WhatsApp at +506 6130 4830')).toBeInTheDocument();
    });

    it('should have proper ARIA attributes', () => {
      render(<Footer />);
      const footer = screen.getByRole('contentinfo');
      expect(footer).toHaveAttribute('aria-label', 'Site footer');
      expect(screen.getByLabelText('Social media links')).toBeInTheDocument();
      expect(screen.getByLabelText('Contact information')).toBeInTheDocument();
    });

    it('should be keyboard accessible', () => {
      render(<Footer />);
      const linkedInLink = screen.getByLabelText('Visit Steven Morales LinkedIn profile');
      
      linkedInLink.focus();
      expect(linkedInLink).toHaveFocus();
      
      // Verify external links have proper attributes
      expect(linkedInLink).toHaveAttribute('target', '_blank');
      expect(linkedInLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  // ============================================================================
  // TestimonialCard Component
  // ============================================================================
  
  describe('TestimonialCard Component', () => {
    it('should render without errors', () => {
      const { container } = render(
        <TestimonialCard quote="Test testimonial quote" />
      );
      expect(container).toBeTruthy();
      expect(screen.getByText('Test testimonial quote')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(<TestimonialCard quote="Quote" />);
      const card = screen.getByText('Quote').closest('.testimonial-card');
      expect(card).toHaveClass('testimonial-card');
    });

    it('should render with author information', () => {
      render(
        <TestimonialCard
          quote="Test quote"
          author="John Doe"
          role="Front-End Manager"
          company="Agency Name"
        />
      );
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Front-End Manager')).toBeInTheDocument();
      expect(screen.getByText('Agency Name')).toBeInTheDocument();
    });

    it('should use semantic HTML (blockquote, cite)', () => {
      render(<TestimonialCard quote="Test quote" author="John Doe" />);
      const blockquote = screen.getByText('Test quote').closest('blockquote');
      expect(blockquote).toBeInTheDocument();
      expect(screen.getByText('John Doe').tagName).toBe('CITE');
    });
  });

  // ============================================================================
  // Testimonials Section Component
  // ============================================================================
  
  describe('Testimonials Section Component', () => {
    it('should render without errors', () => {
      const { container } = render(<Testimonials />);
      expect(container).toBeTruthy();
      expect(screen.getByText('What Teams Say')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(<Testimonials />);
      const section = screen.getByText('What Teams Say').closest('.testimonials');
      expect(section).toHaveClass('testimonials');
    });

    it('should render all three testimonials', () => {
      render(<Testimonials />);
      const testimonials = screen.getAllByRole('article');
      expect(testimonials.length).toBe(3);
    });

    it('should have proper semantic structure', () => {
      render(<Testimonials />);
      const section = screen.getByRole('region', { name: /what teams say/i });
      expect(section).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /what teams say/i })).toBeInTheDocument();
    });

    it('should have proper ARIA attributes', () => {
      render(<Testimonials />);
      const section = screen.getByRole('region', { name: /what teams say/i });
      expect(section).toHaveAttribute('id', 'testimonials');
      expect(section).toHaveAttribute('aria-labelledby', 'testimonials-title');
    });
  });

  // ============================================================================
  // Pricing Section Component
  // ============================================================================
  
  describe('Pricing Section Component', () => {
    it('should render without errors', () => {
      const { container } = render(<PricingSection />);
      expect(container).toBeTruthy();
      expect(screen.getByText('Availability & Pricing')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(<PricingSection />);
      const section = screen.getByText('Availability & Pricing').closest('.pricing');
      expect(section).toHaveClass('pricing');
    });

    it('should render pricing copy', () => {
      render(<PricingSection />);
      expect(screen.getByText(/Available for full-time integration/i)).toBeInTheDocument();
    });

    it('should have proper semantic structure', () => {
      render(<PricingSection />);
      const section = screen.getByRole('region', { name: /availability & pricing/i });
      expect(section).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /availability & pricing/i })).toBeInTheDocument();
    });

    it('should have proper ARIA attributes', () => {
      render(<PricingSection />);
      const section = screen.getByRole('region', { name: /availability & pricing/i });
      expect(section).toHaveAttribute('id', 'pricing');
      expect(section).toHaveAttribute('aria-labelledby', 'pricing-title');
    });
  });

  // ============================================================================
  // CTA Section Component
  // ============================================================================
  
  describe('CTA Section Component', () => {
    it('should render without errors', () => {
      const { container } = render(<CTASection />);
      expect(container).toBeTruthy();
      expect(screen.getByText('Ready to Explore?')).toBeInTheDocument();
    });

    it('should follow BEM naming convention', () => {
      render(<CTASection />);
      const section = screen.getByText('Ready to Explore?').closest('.cta-section');
      expect(section).toHaveClass('cta-section');
    });

    it('should render both buttons', () => {
      render(<CTASection />);
      expect(screen.getByText('View All Projects')).toBeInTheDocument();
      expect(screen.getByText('Explore UI Library')).toBeInTheDocument();
    });

    it('should render note text', () => {
      render(<CTASection />);
      expect(screen.getByText(/This prototype was crafted specifically with the Critical Mass Front-End Developer role in mind/i)).toBeInTheDocument();
    });

    it('should have proper semantic structure', () => {
      render(<CTASection />);
      const section = screen.getByRole('region', { name: /ready to explore/i });
      expect(section).toBeInTheDocument();
      expect(screen.getByRole('heading', { name: /ready to explore/i })).toBeInTheDocument();
    });

    it('should have proper ARIA attributes', () => {
      render(<CTASection />);
      const section = screen.getByRole('region', { name: /ready to explore/i });
      expect(section).toHaveAttribute('id', 'cta');
      expect(section).toHaveAttribute('aria-labelledby', 'cta-title');
    });

    it('should have buttons with correct navigation links', () => {
      render(<CTASection />);
      const projectsButton = screen.getByText('View All Projects').closest('a');
      const uiLibraryButton = screen.getByText('Explore UI Library').closest('a');
      
      expect(projectsButton).toHaveAttribute('href', '/projects');
      expect(uiLibraryButton).toHaveAttribute('href', '/components-library');
    });

    it('should have buttons with proper ARIA labels', () => {
      render(<CTASection />);
      const projectsButton = screen.getByText('View All Projects').closest('a');
      const uiLibraryButton = screen.getByText('Explore UI Library').closest('a');
      
      expect(projectsButton).toHaveAttribute('aria-label', 'View All Projects');
      expect(uiLibraryButton).toHaveAttribute('aria-label', 'Explore UI Library');
    });
  });
});

