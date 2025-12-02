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
          title="Steven Morales: Full Stack Developer & Tech Leader"
          subtitle="Passionate about building robust, scalable, and meaningful innovations. Leading teams at Novaera and ZETA Academia, empowering 1,000+ students while delivering high-quality web experiences."
          ctaPrimary={{
            text: "View My Work",
            href: "#projects",
            variant: "highlight", // Yellow with blue text and border
          }}
          ctaSecondary={{
            text: "View All Projects",
            href: "/projects",
          }}
          note="Available for full-time opportunities at Critical Mass. Based in Costa Rica."
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
