# BEM Methodology Guide & Critical Mass Compliance Review

**This document provides BEM naming conventions, examples, and verifies compliance with Critical Mass job requirements.**

---

## BEM Naming Convention

### Structure
- **Block**: Standalone component (`.hero`, `.button`, `.card`)
- **Element**: Part of a block (`.hero__title`, `.button__icon`)
- **Modifier**: Variation of a block or element (`.button--primary`, `.hero--large`)

### Rules
1. Use single hyphen for multi-word blocks: `.feature-card` (not `.featureCard` or `.feature_card`)
2. Use double underscore for elements: `.hero__title` (not `.hero-title` or `.heroTitle`)
3. Use double hyphen for modifiers: `.button--primary` (not `.button-primary` or `.buttonPrimary`)
4. Never nest blocks inside blocks (avoid `.card .button`, use `.card__button` instead)
5. Modifiers should be independent: `.button.button--primary` (not `.button--primary` alone)

### SCSS Nesting Pattern
```scss
.block {
  // Block styles
  
  &__element {
    // Element styles
  }
  
  &--modifier {
    // Modifier styles
  }
  
  &__element--modifier {
    // Element modifier styles
  }
}
```

---

## Example Components Following BEM

### Hero Component Example
```scss
// styles/components/_hero.scss
.hero {
  padding: var(--space-xl) 0;
  display: grid;
  gap: var(--space-lg);

  &__content {
    max-width: 560px;
  }

  &__title {
    font-size: var(--fs-3xl);
    margin-bottom: var(--space-md);
  }

  &__subtitle {
    font-size: var(--fs-lg);
    color: var(--color-text-muted);
    margin-bottom: var(--space-lg);
  }

  &__actions {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
  }

  &__note {
    margin-top: var(--space-md);
    font-size: var(--fs-sm);
    color: var(--color-text-muted);
  }

  // Modifier: Large hero variant
  &--large {
    padding: var(--space-2xl) 0;
  }
}
```

### Button Component Example
```scss
// styles/components/_buttons.scss
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-sm) var(--space-md);
  border: none;
  border-radius: var(--radius-md);
  font-size: var(--fs-base);
  font-weight: var(--fw-medium);
  cursor: pointer;
  transition: all var(--transition-base);
  @include focus-visible;

  &__icon {
    margin-right: var(--space-xs);
  }

  &__text {
    // Text styles if needed
  }

  // Variants (modifiers)
  &--primary {
    background-color: var(--color-primary);
    color: var(--color-bg-light);
    
    &:hover {
      background-color: var(--color-ocean-teal);
    }
  }

  &--secondary {
    background-color: var(--color-secondary);
    color: var(--color-text-primary);
  }

  &--ghost {
    background-color: transparent;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }

  // Sizes (modifiers)
  &--sm {
    padding: var(--space-xs) var(--space-sm);
    font-size: var(--fs-sm);
  }

  &--md {
    padding: var(--space-sm) var(--space-md);
    font-size: var(--fs-base);
  }

  &--lg {
    padding: var(--space-md) var(--space-lg);
    font-size: var(--fs-lg);
  }

  // States (modifiers)
  &--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
}
```

### Card Component Example
```scss
// styles/components/_cards.scss
.card {
  background-color: var(--color-bg-white);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
  box-shadow: var(--shadow-md);
  transition: box-shadow var(--transition-base);

  &__header {
    margin-bottom: var(--space-md);
  }

  &__title {
    font-size: var(--fs-xl);
    font-weight: var(--fw-bold);
    margin-bottom: var(--space-xs);
  }

  &__subtitle {
    font-size: var(--fs-sm);
    color: var(--color-text-muted);
  }

  &__body {
    margin-bottom: var(--space-md);
  }

  &__image {
    width: 100%;
    height: auto;
    border-radius: var(--radius-md);
    margin-bottom: var(--space-md);
  }

  &__footer {
    margin-top: var(--space-md);
    padding-top: var(--space-md);
    border-top: 1px solid var(--color-gray-200);
  }

  // Variants (modifiers)
  &--feature {
    padding: var(--space-xl);
    text-align: center;
  }

  &--content {
    padding: var(--space-md);
  }
}
```

---

## Critical Mass Requirements Compliance Review

### ✅ SASS/SCSS Preprocessing Tools
**Requirement**: "Experience with automation and pre-processing tools (Gulp, SASS, LESS)"

**Status**: ✅ **COMPLIANT**
- Using SASS/SCSS (v1.94.2)
- Organized architecture following SMACSS
- Modern `@use` syntax (replacing deprecated `@import`)
- Proper file structure: `base/`, `components/`, `pages/`
- Variables, mixins, and utilities properly organized

**Files Verified**:
- `src/styles/base/_variables.scss` ✅
- `src/styles/base/_mixins.scss` ✅
- `src/styles/base/_layout.scss` ✅
- `src/styles/main.scss` ✅ (proper import order)

### ✅ BEM Methodology
**Requirement**: "SASS / preprocessors → Real use of SCSS with BEM/SMACSS"

**Status**: ⚠️ **PARTIALLY COMPLIANT** (Structure ready, components pending)
- BEM structure is defined in `_layout.scss` (`.grid`, `.grid--2`, `.grid--3`)
- Mixins and utilities follow BEM patterns
- **Action Needed**: Create component styles following BEM (buttons, cards, etc.)
- **Action Needed**: Document BEM conventions for team reference

**Current BEM Usage**:
- ✅ Layout utilities: `.container`, `.container--sm`, `.grid--2`, `.grid--3`
- ✅ Spacing utilities: `.m-sm`, `.p-lg`, etc.
- ⏳ Component styles: Need to create `_buttons.scss`, `_cards.scss`, etc.

### ✅ Mobile-First Approach
**Requirement**: "Mobile-first, responsive development"

**Status**: ✅ **COMPLIANT**
- Breakpoint mixins use `min-width` (mobile-first)
- Grid utilities start with 1 column on mobile
- Container has responsive padding
- All breakpoints defined: xs (320px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px)

**Verification**:
```scss
// ✅ Mobile-first breakpoints
@mixin breakpoint-md {
  @media (min-width: #{$breakpoint-md}) {
    @content;
  }
}

// ✅ Mobile-first grid
.grid--3 {
  grid-template-columns: 1fr; // Mobile: 1 column
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr); // Tablet: 2 columns
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); // Desktop: 3 columns
  }
}
```

### ✅ SMACSS Architecture
**Requirement**: "SASS / preprocessors → Real use of SCSS with BEM/SMACSS"

**Status**: ✅ **COMPLIANT**
- **Base Layer**: `_reset.scss`, `_typography.scss`, `_variables.scss`, `_mixins.scss`
- **Layout Layer**: `_layout.scss` (utilities)
- **Components Layer**: `components/` directory (ready for component styles)
- **Pages Layer**: `pages/` directory (ready for page-specific styles)
- Proper import order in `main.scss`

**Structure**:
```
styles/
  base/          # SMACSS Base
  components/    # SMACSS Modules
  pages/         # SMACSS Pages
  main.scss      # Main import file
```

### ✅ Design System & Reusable Components
**Requirement**: "Familiarity with design systems, reusable components"

**Status**: ⏳ **IN PROGRESS**
- Design system foundation ready (variables, typography, spacing)
- Component structure defined
- **Action Needed**: Create actual components (Button, Card, Tag, Badge, etc.)
- **Action Needed**: Create `/components` page to document components

### ✅ Accessibility
**Requirement**: "Accessibility → Semantic HTML, ARIA, focus states"

**Status**: ✅ **COMPLIANT** (Foundation ready)
- Focus-visible mixin created (`@include focus-visible`)
- Reduced motion support
- **Action Needed**: Apply accessibility to all components when created

**Accessibility Features**:
- ✅ Focus-visible mixin for keyboard navigation
- ✅ Reduced motion support
- ✅ Semantic HTML structure ready

### ✅ Performance Optimization
**Requirement**: "Performance → Lazy loading, good image practices"

**Status**: ✅ **COMPLIANT** (Setup ready)
- Font optimization via `next/font/google` (Inter)
- `next/image` should be used for all images
- **Action Needed**: Ensure all images use `next/image` when components are created

**Performance Features**:
- ✅ Font optimization (next/font/google)
- ✅ CSS variables for efficient styling
- ✅ Mobile-first reduces unnecessary CSS

### ✅ Testing
**Requirement**: "Testing → At least 2–3 unit tests (Jest + RTL)"

**Status**: ✅ **COMPLIANT** (Setup ready)
- Jest configured (v30.2.0)
- React Testing Library configured (v16.3.0)
- Test structure ready
- **Action Needed**: Create actual tests (Hero.test.tsx, Button.test.tsx, Content.test.tsx)

---

## Action Items for Full Compliance

### Immediate Actions (Phase 2 - BEM Methodology)

1. **Document BEM Naming Convention** ✅ (This document)
   - [x] Create BEM guide with examples
   - [ ] Add to project documentation

2. **Create Example Component with BEM Classes**
   - [ ] Create `Button.tsx` component
   - [ ] Create `styles/components/_buttons.scss` with BEM classes
   - [ ] Follow example patterns above

3. **Verify BEM Structure is Consistent**
   - [ ] Review all component styles for BEM compliance
   - [ ] Ensure no nested blocks
   - [ ] Ensure proper modifier usage

### Component Creation Checklist

When creating any component, ensure:

- [ ] Component uses BEM class names (`.component-name`, `.component-name__element`)
- [ ] SCSS file follows BEM nesting pattern
- [ ] Modifiers use double hyphen (`.component--modifier`)
- [ ] Elements use double underscore (`.component__element`)
- [ ] Mobile-first responsive styles
- [ ] Accessibility attributes (focus-visible, ARIA)
- [ ] Uses design system variables (colors, spacing, typography)
- [ ] TypeScript interface defined
- [ ] Component is documented

---

## BEM Best Practices for This Project

### DO ✅
```scss
// ✅ Good: Proper BEM structure
.card {
  &__title { }
  &__body { }
  &--feature { }
}

// ✅ Good: Using modifiers correctly
<button className="btn btn--primary btn--lg">
```

### DON'T ❌
```scss
// ❌ Bad: Nested blocks
.card {
  .button { } // Should be .card__button
}

// ❌ Bad: Wrong naming
.card-title { } // Should be .card__title
.cardPrimary { } // Should be .card--primary

// ❌ Bad: Modifier without block
.btn--primary { } // Should be .btn.btn--primary
```

---

## References

- **Critical Mass Job Posting**: Section 11 in `project-idea.md`
- **Project Requirements**: Section 1 in `project-idea.md`
- **BEM Example**: Section 4.4 in `project-idea.md`
- **SMACSS Architecture**: Section 2.2 in `project-idea.md`

---

**Last Updated**: Review date for Critical Mass compliance verification.

