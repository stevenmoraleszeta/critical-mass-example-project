# Testing Guide

This guide explains how to test your Next.js application, including SCSS setup verification.

## Available Test Commands

### Run All Tests
```bash
npm test
```
Runs all test suites once.

### Run Tests in Watch Mode
```bash
npm run test:watch
```
Runs tests in watch mode - automatically re-runs tests when files change. Great for development!

### Run Tests with Coverage Report
```bash
npm run test:coverage
```
Generates a coverage report showing which parts of your code are tested.

### Run a Specific Test File
```bash
npm test -- setup.test.tsx
npm test -- scss.test.tsx
```

### Run Tests Matching a Pattern
```bash
npm test -- --testNamePattern="SCSS"
npm test -- --testPathPattern="scss"
```

## Current Test Suites

### 1. Setup Verification (`src/__tests__/setup.test.tsx`)
- Verifies Jest and React Testing Library are configured correctly
- Tests basic component rendering
- Tests jest-dom matchers (like `toBeInTheDocument`, `toBeDisabled`)

### 2. SCSS Integration (`src/__tests__/scss.test.tsx`)
- Verifies SCSS files can be imported in components
- Tests that SCSS classes are applied correctly
- Confirms SCSS compilation works in the test environment

## Testing SCSS Setup

There are several ways to verify your SCSS setup is working:

### 1. **Build Test (Recommended)**
Test that SCSS compiles correctly:
```bash
npm run build
```
This will fail if SCSS has syntax errors.

### 2. **Component Tests**
Import SCSS in a component and test the component renders:
```typescript
// Import SCSS as side effect for global styles
import '../styles/test.scss';

export function MyComponent() {
  return <div className="test-scss">Content</div>;
}
```

### 3. **Visual Testing**
Start the dev server and visually verify styles:
```bash
npm run dev
```
Then open `http://localhost:3000` and inspect elements to see if SCSS styles are applied.

## SCSS File Structure

Your SCSS files are set up in:
- `src/styles/test.scss` - Test SCSS file demonstrating variables, nesting, and media queries
- SCSS files can be imported as:
  - **Global styles**: `import './styles/file.scss'` (side effect)
  - **CSS Modules**: `import styles from './styles/file.module.scss'` (returns class names)

## Jest Configuration

Jest is configured to handle SCSS files:
- **CSS Modules** (`.module.scss`) → Uses `identity-obj-proxy` to mock class names
- **Regular SCSS** (`.scss`) → Uses `styleMock.js` to mock styles (empty object)

This allows tests to run without actually processing SCSS files (which is faster).

## Next Steps

1. ✅ SCSS setup is working - you can create new SCSS files
2. Create component tests as you build components
3. Use `npm run test:watch` during development
4. Check coverage with `npm run test:coverage` before committing

## Troubleshooting

### Tests fail to run?
- Make sure all dependencies are installed: `npm install`
- Check Jest configuration in `jest.config.js`

### SCSS not compiling?
- Verify `sass` is installed: `npm list sass`
- Check SCSS syntax for errors
- Try building: `npm run build`

### Component not finding styles?
- For global styles: Import SCSS as side effect: `import './styles.scss'`
- For CSS modules: Use `.module.scss` extension and import as: `import styles from './styles.module.scss'`

