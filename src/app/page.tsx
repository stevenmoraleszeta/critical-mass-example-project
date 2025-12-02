import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import RoleFocusSection from '@/components/sections/RoleFocusSection';
import KeyHighlightsSection from '@/components/sections/KeyHighlightsSection';
import CTASection from '@/components/sections/CTASection';

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
          ctaPrimary={{
            text: "See My Work",
            href: "/critical-mass-case-study",
            variant: "highlight",
          }}
          ctaSecondary={{
            text: "View Projects",
            href: "/projects",
          }}
          backgroundImage={{
            src: "/images/hero-background.webp",
            alt: "Abstract background pattern for hero section",
          }}
        />
        <RoleFocusSection />
        <KeyHighlightsSection />
        <CTASection />
      </div>
    </MainLayout>
  );
}
