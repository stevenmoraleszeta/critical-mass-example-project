'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Card from '@/components/ui/Card';
import AnimatedGradientBackground from '@/components/ui/AnimatedGradientBackground';
import FloatingBinaryElements from '@/components/ui/FloatingBinaryElements';

export default function CoverLetter() {
  return (
    <MainLayout>
      <div className="cover-letter-page">
        <AnimatedGradientBackground />
        <FloatingBinaryElements 
          count={300}
          minFontSize={0.4}
          maxFontSize={2.5}
          minOpacity={0.15}
          maxOpacity={0.4}
        />
        <div className="cover-letter-page__container">
          <section 
            className="cover-letter-page__hero" 
            aria-labelledby="cover-letter-title"
          >
            <h1 id="cover-letter-title" className="cover-letter-page__title">
              Cover Letter
            </h1>
            <p className="cover-letter-page__intro">
              With <strong>3+ years</strong> of full-stack development experience and a proven track record of <strong>leading teams</strong> and building <strong>scalable applications</strong>, I bring a unique combination of technical expertise and leadership to the <strong>Developer, Front End</strong> role at Critical Mass.
            </p>
          </section>

          <section 
            id="experience" 
            className="cover-letter-page__section" 
            aria-labelledby="experience-title"
          >
            <Card variant="default" className="cover-letter-page__card">
              <div className="cover-letter-page__card-content">
                <h2 id="experience-title" className="cover-letter-page__section-title">
                  Professional Experience
                </h2>
                <div className="cover-letter-page__content">
                  <p className="cover-letter-page__text">
                    As <strong>CEO & Lead Software Developer</strong> at Novaera, I&apos;ve led a team of 6+ developers and designers in building intelligent digital solutions. As <strong>CEO & Lead Tech Educator</strong> at ZETA Academia, I&apos;ve empowered <strong>1,000+ students</strong> through hands-on education. This dual experience has shaped my approach to <strong>collaboration, mentorship, and delivering high-quality code</strong> that meets both technical and business objectives.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <section 
            className="cover-letter-page__section cover-letter-page__section--capabilities" 
            aria-labelledby="capabilities-title"
          >
            <Card variant="default" className="cover-letter-page__card">
              <div className="cover-letter-page__card-content">
                <h2 id="capabilities-title" className="cover-letter-page__section-title">
                  Technical Capabilities
                </h2>
                <div className="cover-letter-page__content">
                  <p className="cover-letter-page__text">
                    I&apos;m ready to translate <strong>Figma designs into pixel-perfect, responsive, and accessible interfaces</strong>, integrate with <strong>REST/SOAP APIs and content management systems</strong>, and collaborate seamlessly with <strong>Creative, Business, Technology, and QA teams</strong> to deliver exceptional web experiences on time and with quality.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <section 
            className="cover-letter-page__section" 
            aria-labelledby="value-title"
          >
            <Card variant="default" className="cover-letter-page__card">
              <div className="cover-letter-page__card-content">
                <h2 id="value-title" className="cover-letter-page__section-title">
                  Value Proposition
                </h2>
                <div className="cover-letter-page__content">
                  <p className="cover-letter-page__text">
                    I&apos;d be excited to discuss how my experience in <strong>design-to-code translation</strong>, <strong>component-driven architecture</strong>, <strong>performance optimization</strong>, and <strong>cross-functional collaboration</strong> can contribute to Critical Mass&apos; mission of creating meaningful digital experiences.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          <section 
            className="cover-letter-page__section cover-letter-page__section--quotes" 
            aria-labelledby="philosophy-title"
          >
            <h2 id="philosophy-title" className="cover-letter-page__section-title">
              Philosophy & Approach
            </h2>
            <div className="cover-letter-page__quotes-container">
              <blockquote className="cover-letter-page__quote">
                <p className="cover-letter-page__quote-text">
                  &quot;We don&apos;t need to wait a single moment to start changing the world.&quot;
                </p>
                <cite className="cover-letter-page__quote-author">— Anne Frank</cite>
              </blockquote>
              <blockquote className="cover-letter-page__quote">
                <p className="cover-letter-page__quote-text">
                  &quot;It&apos;s the ones bold — or crazy — enough to think they can do it, who actually do.&quot;
                </p>
                <cite className="cover-letter-page__quote-author">— Steve Jobs</cite>
              </blockquote>
            </div>
          </section>

          <section 
            className="cover-letter-page__section" 
            aria-labelledby="closing-title"
          >
            <Card variant="default" className="cover-letter-page__card cover-letter-page__card--closing">
              <div className="cover-letter-page__card-content">
                <h2 id="closing-title" className="cover-letter-page__section-title">
                  Final Thoughts
                </h2>
                <div className="cover-letter-page__content">
                  <p className="cover-letter-page__text">
                    I carry both ideas with me every day: <strong>the urgency to act, and the audacity to dream big</strong>. This philosophy drives how I approach every project — from translating <strong>Figma designs into pixel-perfect code</strong> to leading cross-functional teams in building <strong>scalable, accessible, and performant web experiences</strong>. I&apos;m not just looking for a job; I&apos;m seeking to join a team where I can contribute my technical expertise, leadership experience, and passion for creating <strong>meaningful digital experiences</strong> that make a real difference.
                  </p>
                  <p className="cover-letter-page__text cover-letter-page__text--closing">
                    Let&apos;s build something great together at Critical Mass.
                  </p>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

