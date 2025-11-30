/**
 * Simple component to test SCSS import and usage
 * Note: Regular SCSS files are imported as side effects for global styles
 * CSS modules would use: import styles from './styles.module.scss'
 */
import '../styles/test.scss';

export function TestScssComponent() {
  return (
    <div className="test-scss">
      <h2>SCSS Test Component</h2>
      <p className="test-scss__nested">
        This component uses SCSS styles with variables and nesting.
      </p>
    </div>
  );
}

