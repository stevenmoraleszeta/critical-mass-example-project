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
                <Button
                  variant="highlight"
                  size="lg"
                  href="https://github.com/stevenmoraleszeta"
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel="Visit GitHub profile: github.com/stevenmoraleszeta"
                >
                  GitHub
                </Button>
                
                <Button
                  variant="primary"
                  size="lg"
                  href="https://linkedin.com/in/stevenmoralesfallas"
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel="Visit LinkedIn profile: linkedin.com/in/stevenmoralesfallas"
                >
                  LinkedIn
                </Button>
                
                <Button
                  variant="secondary"
                  size="lg"
                  href="https://instagram.com/stevenmorales.novaera"
                  target="_blank"
                  rel="noopener noreferrer"
                  ariaLabel="Visit Instagram profile: @stevenmorales.novaera"
                >
                  Instagram
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </MainLayout>
  );
}

