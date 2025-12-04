'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

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
                    <dt className="contact-page__info-label">Location</dt>
                    <dd className="contact-page__info-value">Costa Rica</dd>
                  </div>
                  <div className="contact-page__info-item">
                    <dt className="contact-page__info-label">Phone / WhatsApp</dt>
                    <dd className="contact-page__info-value">
                      <a
                        href="https://wa.me/50661304830"
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

          <section className="contact-page__section" aria-labelledby="profiles-title">
            <Card variant="default" className="contact-page__card">
              <div className="contact-page__card-content">
                <h2 id="profiles-title" className="contact-page__section-title">
                  Online Profiles
                </h2>
                <div className="contact-page__profiles-grid">
                  <a
                    href="https://github.com/stevenmoraleszeta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-page__profile-link"
                    aria-label="Visit GitHub profile: github.com/stevenmoraleszeta"
                  >
                    <Button
                      variant="primary"
                      size="md"
                      className="contact-page__profile-button"
                    >
                      GitHub
                    </Button>
                  </a>
                  <a
                    href="https://linkedin.com/in/stevenmoralesfallas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-page__profile-link"
                    aria-label="Visit LinkedIn profile: linkedin.com/in/stevenmoralesfallas"
                  >
                    <Button
                      variant="secondary"
                      size="md"
                      className="contact-page__profile-button"
                    >
                      LinkedIn
                    </Button>
                  </a>
                  <a
                    href="https://instagram.com/stevenmorales.novaera"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-page__profile-link"
                    aria-label="Visit Instagram profile: @stevenmorales.novaera"
                  >
                    <Button
                      variant="highlight"
                      size="md"
                      className="contact-page__profile-button"
                    >
                      Instagram
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </section>

          <section className="contact-page__section" aria-labelledby="closing-title">
            <Card variant="default" className="contact-page__card contact-page__card--closing">
              <div className="contact-page__card-content">
                <h2 id="closing-title" className="contact-page__section-title">
                  Let&apos;s Connect
                </h2>
                <div className="contact-page__closing-message">
                  <p className="contact-page__closing-text">
                    If you&apos;re looking for a <strong>front-end developer</strong> who can:
                  </p>
                  <ul className="contact-page__closing-list">
                    <li className="contact-page__closing-item">
                      Translate <strong>Figma designs</strong> into <strong>high-quality, responsive, accessible interfaces</strong>,
                    </li>
                    <li className="contact-page__closing-item">
                      Own features <strong>end-to-end</strong> from concept to production,
                    </li>
                    <li className="contact-page__closing-item">
                      Collaborate closely with <strong>creative, business, technology, and QA</strong> teams,
                    </li>
                    <li className="contact-page__closing-item">
                      And bring a <strong>product-driven mindset</strong> amplified by <strong>teaching and leadership experience</strong>,
                    </li>
                  </ul>
                  <p className="contact-page__closing-text">
                    I&apos;d be excited to talk and show how I can contribute to <strong>Critical Mass</strong>.
                  </p>
                  <blockquote className="contact-page__quote">
                    <p className="contact-page__quote-text">
                      &quot;We don&apos;t need to wait a single moment to start changing the world.&quot;
                    </p>
                    <cite className="contact-page__quote-author">— Anne Frank</cite>
                  </blockquote>
                  <p className="contact-page__closing-text">
                    I build technology with that urgency, and with the ambition to <strong>make a meaningful impact</strong> through code, design, and thoughtful experiences.
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

