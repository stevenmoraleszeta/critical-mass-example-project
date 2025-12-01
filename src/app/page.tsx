import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <MainLayout>
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
    </MainLayout>
  );
}
