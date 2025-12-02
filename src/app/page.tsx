import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Specs from '@/components/sections/Specs';
import UseCases from '@/components/sections/UseCases';
import PerformanceSection from '@/components/sections/PerformanceSection';
import Testimonials from '@/components/sections/Testimonials';
import PricingSection from '@/components/sections/PricingSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <MainLayout>
      <div className="home-page">
        <Hero
          title="Meet Steven Morales: Your Next Front-End Experience Engine."
          subtitle="A human-first, code-driven product designed to translate beautiful designs into responsive, accessible, high-quality web experiences."
          ctaPrimary={{
            text: "View Features",
            href: "#features",
          }}
          ctaSecondary={{
            text: "See Live Content",
            href: "/content",
          }}
          note="No monthly subscription. Just coffee and interesting problems."
        />
        <Features />
        <Specs
          title="Tech Specs"
          columns={[
            {
              title: "Supported Technologies",
              items: [
                "React",
                "Next.js",
                "TypeScript",
                "HTML5",
                "CSS3",
                "SASS",
                "Git",
                "Jest",
                "RTL",
              ],
            },
            {
              title: "Protocols & Data",
              items: [
                "HTTP",
                "JSON",
                "Basic XML",
                "REST APIs",
              ],
            },
            {
              title: "Integrations",
              items: [
                "CMS-like data",
                "3rd-party APIs",
                "Webhooks",
              ],
            },
          ]}
          footerNote="Backwards-compatible with legacy codebases (with patience)."
        />
        <UseCases />
        <PerformanceSection />
        <Testimonials />
        <PricingSection />
        <CTASection />
      </div>
    </MainLayout>
  );
}
