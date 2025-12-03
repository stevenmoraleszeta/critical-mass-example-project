import { Suspense, lazy } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import CardBoard, { CardData } from '@/components/sections/CardBoard';

// Lazy load non-critical sections for better initial page load performance
const KeyHighlightsSection = lazy(() => import('@/components/sections/KeyHighlightsSection'));
const CTASection = lazy(() => import('@/components/sections/CTASection'));

const roleFocusCards: CardData[] = [
  {
    id: '1',
    title: 'Design Translation',
    description: 'I translate Figma/wireframes into semantic HTML5, modern CSS3, and React/Next.js components.',
  },
  {
    id: '2',
    title: 'Responsive & Accessible',
    description: 'I build mobile-first layouts with accessibility best practices (WCAG mindset) and cross-browser support.',
  },
  {
    id: '3',
    title: 'API Integration',
    description: 'I work daily with REST APIs, JSON, HTTP, and have familiarity with SOAP and external services.',
  },
  {
    id: '4',
    title: 'Tooling',
    description: 'I use SASS/LESS, Gulp, Vite, GitHub Actions and modern bundlers to maintain efficient front-end pipelines.',
  },
  {
    id: '5',
    title: 'Collaboration',
    description: 'I coordinate with design, business, QA, and tech leads to deliver on time with quality.',
  },
  {
    id: '6',
    title: 'Ownership',
    description: "I'm used to owning features end-to-end, providing time estimates, and communicating progress clearly.",
  },
];

export default function Home() {
  return (
    <MainLayout>
      <div className="home-page">
        <Hero
          title={
            <>
              Steven Morales
              <br />
              Full Stack Software Engineer & Tech Leader
            </>
          }
          subtitle={
            <>
              Building <strong>high-quality, responsive, accessible full stack experiences</strong> that connect technology, creativity, and real human needs.
            </>
          }
          backgroundImage={{
            src: "/images/hero-background.webp",
            alt: "Abstract background pattern for hero section",
          }}
        />
        <CardBoard
          id="role-focus"
          title={
            <>
              Role Focus: Developer, Front End<br />
              @ Critical Mass
            </>
          }
          subtitle={
            <>
              This portfolio is intentionally designed as a <strong>live case study</strong> for the <strong>Developer, Front End</strong> position at Critical Mass:
            </>
          }
          cards={roleFocusCards}
          draggable={true}
          storageKey="role-focus-cards-order"
          scrollTargetId="key-highlights"
          className="role-focus"
        />
        <Suspense fallback={null}>
        <KeyHighlightsSection />
        </Suspense>
        <Suspense fallback={null}>
        <CTASection />
        </Suspense>
      </div>
    </MainLayout>
  );
}
