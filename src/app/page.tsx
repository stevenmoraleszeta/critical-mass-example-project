import { Suspense, lazy } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import CardBoard, { CardData } from '@/components/sections/CardBoard';
import Button from '@/components/ui/Button';
import Loader from '@/components/feedback/Loader';

const KeyHighlightsSection = lazy(() => import('@/components/sections/KeyHighlightsSection'));
const CTASection = lazy(() => import('@/components/sections/CTASection'));

const roleFocusCards: CardData[] = [
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
    description: 'I integrate REST APIs, JSON data structures, and handle client-side state management, demonstrating readiness for CMS systems and external services.',
  },
  {
    id: '4',
    title: 'Modern Front-End Technologies',
    description: 'I build with Next.js 14 App Router, React 19, TypeScript, and SASS/SCSS, using modern patterns including server components and optimized image loading.',
  },
  {
    id: '5',
    title: 'Design Systems & Reusable Components',
    description: 'I build complete reusable component libraries following BEM methodology, demonstrating design system thinking and component reusability.',
  },
  {
    id: '6',
    title: 'Best Practices & Documentation',
    description: 'I implement industry best practices including BEM methodology, SMACSS architecture, TypeScript for type safety, and well-documented code following Next.js and React standards.',
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
          action={
            <Button
              variant="exit"
              size="lg"
              href="/this-project"
              ariaLabel="View This Project"
              prefetch={true}
              className="role-focus__button"
            >
              View This Project
            </Button>
          }
        />
        <Suspense fallback={<Loader size="sm" />}>
          <KeyHighlightsSection />
        </Suspense>
        <Suspense fallback={<Loader size="sm" />}>
          <CTASection />
        </Suspense>
      </div>
    </MainLayout>
  );
}
