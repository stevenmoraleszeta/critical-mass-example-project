import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import UseCases from '@/components/sections/UseCases';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import LeadershipSection from '@/components/sections/LeadershipSection';
import PerformanceSection from '@/components/sections/PerformanceSection';
import PricingSection from '@/components/sections/PricingSection';
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
              Building <strong>scalable full-stack solutions</strong> that connect technology, creativity, and real human needs.
            </>
          }
          keyIdentity={
            <>
              Costa Rica · Applying for <strong>Developer, Front End at Critical Mass</strong>
            </>
          }
          ctaPrimary={{
            text: "Want to see how I would work at Critical Mass?",
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
        <Features />
        <UseCases />
        <FeaturedProjects />
        <LeadershipSection />
        <PerformanceSection />
        <PricingSection />
        <CTASection />
      </div>
    </MainLayout>
  );
}
