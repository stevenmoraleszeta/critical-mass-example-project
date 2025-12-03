import { Suspense, lazy } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import RoleFocusSection from '@/components/sections/RoleFocusSection';

// Lazy load non-critical sections for better initial page load performance
const KeyHighlightsSection = lazy(() => import('@/components/sections/KeyHighlightsSection'));
const CTASection = lazy(() => import('@/components/sections/CTASection'));

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
        <RoleFocusSection />
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
