/**
 * Test to verify SCSS files can be imported and used in components
 */
import { render, screen } from '@testing-library/react';
import { TestScssComponent } from '../components/TestScssComponent';

describe('SCSS Integration', () => {
  it('should render component that uses SCSS styles', () => {
    render(<TestScssComponent />);
    
    expect(screen.getByText('SCSS Test Component')).toBeInTheDocument();
    expect(screen.getByText(/This component uses SCSS styles/i)).toBeInTheDocument();
  });

  it('should apply SCSS classes correctly', () => {
    const { container } = render(<TestScssComponent />);
    
    const mainElement = container.querySelector('.test-scss');
    const nestedElement = container.querySelector('.test-scss__nested');
    
    expect(mainElement).toBeInTheDocument();
    expect(nestedElement).toBeInTheDocument();
  });
});

