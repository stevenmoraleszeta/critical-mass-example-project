'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import AnimatedGradientBackground from '@/components/ui/AnimatedGradientBackground';

export default function Contact() {
  return (
    <MainLayout>
      <div className="contact-page">
        <div className="contact-page__container">
          <section className="contact-page__hero" aria-labelledby="contact-title">
            <h1 id="contact-title" className="contact-page__title">
              Let&apos;s Build Something Great
            </h1>
          </section>

          <section className="contact-page__section" aria-labelledby="contact-info-title">
            <Card variant="default" className="contact-page__card">
              <div className="contact-page__card-content">
                <h2 id="contact-info-title" className="contact-page__section-title">
                  Contact Information
                </h2>
                <dl className="contact-page__info-list">
                  <div className="contact-page__info-item">
                    <dt className="contact-page__info-label">Name</dt>
                    <dd className="contact-page__info-value">Steven Morales Fallas</dd>
                  </div>
                  <div className="contact-page__info-item">
                    <dt className="contact-page__info-label">Phone / WhatsApp</dt>
                    <dd className="contact-page__info-value">
                      <a
                        href="https://wa.me/50661304830?text=Hi!%20I%20came%20across%20your%20portfolio%20project%20and%20I%27d%20like%20to%20connect."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-page__link"
                        aria-label="Contact via WhatsApp: +506 6130 4830"
                      >
                        +506 6130 4830
                      </a>
                    </dd>
                  </div>
                  <div className="contact-page__info-item">
                    <dt className="contact-page__info-label">Email</dt>
                    <dd className="contact-page__info-value">
                      <a
                        href="mailto:fallasmoraless@gmail.com"
                        className="contact-page__link"
                        aria-label="Send email to fallasmoraless@gmail.com"
                      >
                        fallasmoraless@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </Card>
          </section>

          <section className="contact-page__section contact-page__section--profiles" id="profiles" aria-labelledby="profiles-title">
            <AnimatedGradientBackground />
            <div className="contact-page__profiles-container">
              <h2 id="profiles-title" className="contact-page__profiles-title">
                Online Profiles
              </h2>
              <p className="contact-page__profiles-description">
                Connect with me on social media:
              </p>
              
              <div className="contact-page__profiles-actions">
                <a
                  href="https://github.com/stevenmoraleszeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-page__profiles-link"
                  aria-label="Visit GitHub profile: github.com/stevenmoraleszeta"
                >
                  <Button variant="highlight" size="lg">
                    GitHub
                  </Button>
                </a>
                
                <a
                  href="https://linkedin.com/in/stevenmoralesfallas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-page__profiles-link"
                  aria-label="Visit LinkedIn profile: linkedin.com/in/stevenmoralesfallas"
                >
                  <Button variant="primary" size="lg">
                    LinkedIn
                  </Button>
                </a>
                
                <a
                  href="https://instagram.com/stevenmorales.novaera"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-page__profiles-link"
                  aria-label="Visit Instagram profile: @stevenmorales.novaera"
                >
                  <Button variant="secondary" size="lg">
                    Instagram
                  </Button>
                </a>
              </div>
            </div>
          </section>

          <section className="contact-page__section" aria-labelledby="closing-title">
            <Card variant="default" className="contact-page__card contact-page__card--closing">
              <div className="contact-page__card-content">
                <h2 id="closing-title" className="contact-page__section-title">
                  Ready to Contribute
                </h2>
                <div className="contact-page__closing-message">
                  <p className="contact-page__closing-text">
                    With <strong>3+ years</strong> of full-stack development experience and a proven track record of <strong>leading teams</strong> and building <strong>scalable applications</strong>, I bring a unique combination of technical expertise and leadership to the <strong>Developer, Front End</strong> role at Critical Mass.
                  </p>
                  <p className="contact-page__closing-text">
                    As <strong>CEO & Lead Software Developer</strong> at Novaera, I&apos;ve led a team of 6+ developers and designers in building intelligent digital solutions. As <strong>CEO & Lead Tech Educator</strong> at ZETA Academia, I&apos;ve empowered <strong>1,000+ students</strong> through hands-on education. This dual experience has shaped my approach to <strong>collaboration, mentorship, and delivering high-quality code</strong> that meets both technical and business objectives.
                  </p>
                  <p className="contact-page__closing-text">
                    I&apos;m ready to translate <strong>Figma designs into pixel-perfect, responsive, and accessible interfaces</strong>, integrate with <strong>REST/SOAP APIs and content management systems</strong>, and collaborate seamlessly with <strong>Creative, Business, Technology, and QA teams</strong> to deliver exceptional web experiences on time and with quality.
                  </p>
                  <p className="contact-page__closing-text">
                    I&apos;d be excited to discuss how my experience in <strong>design-to-code translation</strong>, <strong>component-driven architecture</strong>, <strong>performance optimization</strong>, and <strong>cross-functional collaboration</strong> can contribute to Critical Mass&apos; mission of creating meaningful digital experiences.
                  </p>
                  <blockquote className="contact-page__quote">
                    <p className="contact-page__quote-text">
                      &quot;We don&apos;t need to wait a single moment to start changing the world.&quot;
                    </p>
                    <cite className="contact-page__quote-author">— Anne Frank</cite>
                  </blockquote>
                  <blockquote className="contact-page__quote">
                    <p className="contact-page__quote-text">
                      &quot;It&apos;s the ones bold — or crazy — enough to think they can do it, who actually do.&quot;
                    </p>
                    <cite className="contact-page__quote-author">— Steve Jobs</cite>
                  </blockquote>
                  <p className="contact-page__closing-text">
                    I carry both ideas with me every day: <strong>the urgency to act, and the audacity to dream big</strong>. This philosophy drives how I approach every project — from translating <strong>Figma designs into pixel-perfect code</strong> to leading cross-functional teams in building <strong>scalable, accessible, and performant web experiences</strong>. I&apos;m not just looking for a job; I&apos;m seeking to join a team where I can contribute my technical expertise, leadership experience, and passion for creating <strong>meaningful digital experiences</strong> that make a real difference.
                  </p>
                  <p className="contact-page__closing-text">
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

