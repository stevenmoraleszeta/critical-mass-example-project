/**
 * CardBoard Component Tests (Role Focus Section)
 * 
 * Following Critical Mass requirements:
 * - Test section renders correctly
 * - Test drag-and-drop functionality
 * - Test section is responsive
 * 
 * Following TODO.md Phase 19 requirements:
 * - Test section renders with all 6 items from PROJECT-CONTENT.md
 * - Test drag-and-drop functionality (if implemented)
 * - Test section is responsive
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CardBoard, { CardData } from '@/components/sections/CardBoard';

jest.mock('@/components/ui/FeatureCard', () => ({
  __esModule: true,
  default: ({ title, description, draggable, isDragging, isDragOver, onDragStart, onDragOver, onDrop, onDragEnd }: any) => (
    <div
      data-testid="feature-card"
      data-title={title}
      data-description={description}
      data-draggable={draggable}
      data-dragging={isDragging}
      data-drag-over={isDragOver}
      draggable={draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onDragEnd={onDragEnd}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  ),
}));

jest.mock('@/components/ui/ScrollArrow', () => ({
  __esModule: true,
  default: ({ targetId, color }: any) => (
    <div data-testid="scroll-arrow" data-target-id={targetId} data-color={color} />
  ),
}));

jest.mock('@/components/feedback/Toast', () => ({
  __esModule: true,
  default: ({ message, onDismiss, actionButton }: any) => (
    <div data-testid="toast">
      <span>{message}</span>
      {actionButton && (
        <button onClick={actionButton.onClick}>{actionButton.label}</button>
      )}
      <button onClick={onDismiss}>Dismiss</button>
    </div>
  ),
}));

const mockCards: CardData[] = [
  {
    id: '1',
    title: 'Design-to-Code Translation',
    description: 'I translate design concepts into standard-compliant HTML5, semantic CSS3, and responsive React/Next.js components with pixel-perfect attention to detail.',
  },
  {
    id: '2',
    title: 'Cross-Browser & Mobile-First',
    description: 'I implement mobile-first CSS strategies using SCSS variables and mixins for responsive breakpoints, tested across modern browsers and devices.',
  },
  {
    id: '3',
    title: 'API Integration & Web Services',
    description: 'I integrate REST and SOAP APIs, JSON data structures, and client-side state management.',
  },
  {
    id: '4',
    title: 'Modern Front-End Technologies',
    description: 'I build with Next.js 14 App Router, React 19, TypeScript, and SASS/SCSS.',
  },
  {
    id: '5',
    title: 'Design Systems & Reusable Components',
    description: 'I build complete reusable component libraries following BEM methodology.',
  },
  {
    id: '6',
    title: 'Best Practices & Documentation',
    description: 'I implement industry best practices including BEM methodology, SMACSS architecture, TypeScript for type safety.',
  },
];

describe('CardBoard Component (Role Focus Section)', () => {
  // ============================================================================
  // Rendering Tests
  // ============================================================================
  
  describe('Rendering', () => {
    it('should render CardBoard section with title', () => {
      render(
        <CardBoard
          id="role-focus"
          title="Role Focus: Developer, Front End @ Critical Mass"
          cards={mockCards}
        />
      );
      
      expect(screen.getByRole('region', { name: /role focus/i })).toBeInTheDocument();
      expect(screen.getByText(/Role Focus: Developer, Front End @ Critical Mass/i)).toBeInTheDocument();
    });

    it('should render CardBoard section with ReactNode title', () => {
      render(
        <CardBoard
          id="role-focus"
          title={
            <>
              Role Focus: Developer, Front End
              <br />
              @ Critical Mass
            </>
          }
          cards={mockCards}
        />
      );
      
      expect(screen.getByText(/Role Focus: Developer, Front End/i)).toBeInTheDocument();
      expect(screen.getByText(/@ Critical Mass/i)).toBeInTheDocument();
    });

    it('should render CardBoard section with subtitle', () => {
      render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          subtitle="This portfolio is intentionally designed as a live case study"
          cards={mockCards}
        />
      );
      
      expect(screen.getByText(/This portfolio is intentionally designed/i)).toBeInTheDocument();
    });

    it('should render all 6 cards from mock data', () => {
      render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={mockCards}
        />
      );
      
      expect(screen.getByText('Design-to-Code Translation')).toBeInTheDocument();
      expect(screen.getByText('Cross-Browser & Mobile-First')).toBeInTheDocument();
      expect(screen.getByText('API Integration & Web Services')).toBeInTheDocument();
      expect(screen.getByText('Modern Front-End Technologies')).toBeInTheDocument();
      expect(screen.getByText('Design Systems & Reusable Components')).toBeInTheDocument();
      expect(screen.getByText('Best Practices & Documentation')).toBeInTheDocument();
      
      const cards = screen.getAllByTestId('feature-card');
      expect(cards).toHaveLength(6);
    });

    it('should render scroll arrow when scrollTargetId is provided', () => {
      render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={mockCards}
          scrollTargetId="key-highlights"
        />
      );
      
      const scrollArrow = screen.getByTestId('scroll-arrow');
      expect(scrollArrow).toBeInTheDocument();
      expect(scrollArrow).toHaveAttribute('data-target-id', 'key-highlights');
    });

    it('should render action element when provided', () => {
      render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={mockCards}
          action={<button>View This Project</button>}
        />
      );
      
      expect(screen.getByText('View This Project')).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Drag and Drop Tests
  // ============================================================================
  
  describe('Drag and Drop Functionality', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should enable drag and drop when draggable is true', () => {
      render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={mockCards}
          draggable={true}
          storageKey="test-storage-key"
        />
      );
      
      const cards = screen.getAllByTestId('feature-card');
      cards.forEach(card => {
        expect(card).toHaveAttribute('data-draggable', 'true');
        expect(card).toHaveAttribute('draggable', 'true');
      });
    });

    it('should disable drag and drop when draggable is false', () => {
      render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={mockCards}
          draggable={false}
        />
      );
      
      const cards = screen.getAllByTestId('feature-card');
      cards.forEach(card => {
        expect(card).toHaveAttribute('data-draggable', 'false');
      });
    });

    it('should handle drag start event', () => {
      render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={mockCards}
          draggable={true}
          storageKey="test-storage-key"
        />
      );
      
      const cards = screen.getAllByTestId('feature-card');
      const firstCard = cards[0];
      
      fireEvent.dragStart(firstCard);
      
      expect(firstCard).toHaveAttribute('data-dragging', 'true');
    });
  });

  // ============================================================================
  // Semantic HTML Tests (Accessibility)
  // ============================================================================
  
  describe('Semantic HTML (Accessibility)', () => {
    it('should render as section element', () => {
      const { container } = render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={mockCards}
        />
      );
      
      const section = container.querySelector('section.card-board');
      expect(section).toBeInTheDocument();
    });

    it('should have aria-labelledby pointing to title', () => {
      const { container } = render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={mockCards}
        />
      );
      
      const section = container.querySelector('section.card-board');
      expect(section).toHaveAttribute('aria-labelledby', 'role-focus-title');
      
      const title = screen.getByRole('heading', { level: 2 });
      expect(title).toHaveAttribute('id', 'role-focus-title');
    });

    it('should have heading level 2 for section title', () => {
      render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={mockCards}
        />
      );
      
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Role Focus');
    });
  });

  // ============================================================================
  // BEM Naming Tests
  // ============================================================================
  
  describe('BEM Naming Convention', () => {
    it('should follow BEM naming for card-board section', () => {
      const { container } = render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={mockCards}
        />
      );
      
      const cardBoard = container.querySelector('.card-board');
      expect(cardBoard).toBeInTheDocument();
      
      const containerElement = container.querySelector('.card-board__container');
      expect(containerElement).toBeInTheDocument();
      
      const title = container.querySelector('.card-board__title');
      expect(title).toBeInTheDocument();
      
      const grid = container.querySelector('.card-board__grid');
      expect(grid).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      const { container } = render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={mockCards}
          className="role-focus"
        />
      );
      
      const section = container.querySelector('.card-board.role-focus');
      expect(section).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Content Verification Tests
  // ============================================================================
  
  describe('Content Verification from PROJECT-CONTENT.md', () => {
    it('should render all 6 role focus items from PROJECT-CONTENT.md', () => {
      render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={mockCards}
        />
      );
      
      expect(screen.getByText(/Design-to-Code Translation/i)).toBeInTheDocument();
      expect(screen.getByText(/Cross-Browser & Mobile-First/i)).toBeInTheDocument();
      expect(screen.getByText(/API Integration & Web Services/i)).toBeInTheDocument();
      expect(screen.getByText(/Modern Front-End Technologies/i)).toBeInTheDocument();
      expect(screen.getByText(/Design Systems & Reusable Components/i)).toBeInTheDocument();
      expect(screen.getByText(/Best Practices & Documentation/i)).toBeInTheDocument();
    });
  });

  // ============================================================================
  // Edge Cases
  // ============================================================================
  
  describe('Edge Cases', () => {
    it('should handle empty cards array', () => {
      render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={[]}
        />
      );
      
      expect(screen.getByText('Role Focus')).toBeInTheDocument();
      const cards = screen.queryAllByTestId('feature-card');
      expect(cards).toHaveLength(0);
    });

    it('should handle single card', () => {
      const singleCard = [mockCards[0]];
      render(
        <CardBoard
          id="role-focus"
          title="Role Focus"
          cards={singleCard}
        />
      );
      
      expect(screen.getByText('Design-to-Code Translation')).toBeInTheDocument();
      const cards = screen.getAllByTestId('feature-card');
      expect(cards).toHaveLength(1);
    });
  });
});

