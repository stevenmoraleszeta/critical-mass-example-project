/**
 * Simple test to verify Jest and React Testing Library setup is working
 */
import { render, screen } from '@testing-library/react';

describe('Test Setup Verification', () => {
  it('should verify testing environment is configured correctly', () => {
    const TestComponent = () => (
      <div>
        <h1>Test Setup</h1>
        <p>This is a simple test to verify Jest and React Testing Library are working.</p>
      </div>
    );

    render(<TestComponent />);
    
    expect(screen.getByText('Test Setup')).toBeInTheDocument();
    expect(screen.getByText(/This is a simple test/i)).toBeInTheDocument();
  });

  it('should verify jest-dom matchers are available', () => {
    render(
      <div>
        <button disabled>Disabled Button</button>
        <input aria-label="test input" />
      </div>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    
    const input = screen.getByLabelText('test input');
    expect(input).toBeInTheDocument();
  });
});

