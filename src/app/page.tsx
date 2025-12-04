import { Suspense, lazy } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/sections/Hero';
import CardBoard, { CardData } from '@/components/sections/CardBoard';
import Button from '@/components/ui/Button';
import Loader from '@/components/feedback/Loader';
import FeatureGridSection, { FeatureItem } from '@/components/sections/FeatureGridSection';

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
    description: 'I integrate REST and SOAP APIs, JSON data structures, and client-side state management. This portfolio focuses on front-end; my GitHub showcases API integrations.',
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

const keyHighlights: FeatureItem[] = [
  {
    title: '3+ Years Front-End Experience',
    image: {
      src: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
      alt: 'Front-end development experience and expertise',
      width: 400,
      height: 300,
    },
    content: (
      <p>
        Full Stack Software Engineer with more than <strong>3 years of experience</strong> building robust, scalable, and high-performance software across web, desktop, mobile, and hybrid platforms. I work across the full development cycle—from design and architecture to deployment and optimization.
      </p>
    ),
  },
  {
    title: 'Modern Front-End Stack',
    image: {
      src: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      alt: 'Modern front-end technologies and frameworks',
      width: 400,
      height: 300,
    },
    content: (
      <p>
        Strong expertise in <strong>TypeScript, JavaScript, React, Next.js, HTML5, CSS3, SASS/SCSS</strong>, design systems, and reusable components. Experience with automation tools like Gulp, Vite, and modern bundlers for efficient front-end pipelines.
      </p>
    ),
  },
  {
    title: 'Design-to-Code Translation',
    image: {
      src: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop',
      alt: 'Design to code translation and implementation',
      width: 400,
      height: 300,
    },
    content: (
      <p>
        I translate <strong>Figma designs and wireframes</strong> into standard-compliant HTML5, semantic CSS3, and responsive React/Next.js components with pixel-perfect attention to detail. Experience ensuring cross-browser compatibility and mobile-first, performant code.
      </p>
    ),
  },
  {
    title: 'Full-Stack & API Integration',
    image: {
      src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
      alt: 'Full-stack development and API integration',
      width: 400,
      height: 300,
    },
    content: (
      <p>
        Experience with <strong>RESTful APIs, SOAP, JSON, XML, HTTP</strong>, and integrating web solutions with external services, CMS systems, and third-party applications. While this portfolio focuses on front-end demonstration, most of my projects feature comprehensive API integrations—visible in my public GitHub repositories—including full-stack architectures with databases (PostgreSQL, MongoDB), API design, and performance monitoring.
      </p>
    ),
  },
  {
    title: 'Team Leadership & Collaboration',
    image: {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
      alt: 'Team leadership and collaboration',
      width: 400,
      height: 300,
    },
    content: (
      <p>
        CEO & Lead Developer at <strong>Novaera</strong>, leading a <strong>six-member development team</strong>. I coordinate with design, business, QA, and tech leads to deliver high-quality, punctual web development. Strong in communication, organization, and mentorship.
      </p>
    ),
  },
  {
    title: 'Performance & Problem Solving',
    image: {
      src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
      alt: 'Performance optimization and problem solving',
      width: 400,
      height: 300,
    },
    content: (
      <p>
        Expertise in <strong>performance optimization, scalability, debugging, and root cause analysis</strong>. I analyze and optimize code for quality, efficiency, and performance, identify and resolve scalability issues, and drive efforts to reduce technical debt.
      </p>
    ),
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
        <FeatureGridSection
          id="key-highlights"
          title="Key Highlights – What I Bring to Critical Mass"
          highlights={keyHighlights}
          actionButton={{
            text: 'View Currículum',
            href: '/curriculum',
            variant: 'exit',
            size: 'lg',
            ariaLabel: 'View Currículum',
            prefetch: true,
            className: 'key-highlights__button',
          }}
          scrollArrow={{
            targetId: 'cta',
            color: 'red',
          }}
          className="key-highlights"
        />
        <Suspense fallback={<Loader size="sm" />}>
          <CTASection />
        </Suspense>
      </div>
    </MainLayout>
  );
}
