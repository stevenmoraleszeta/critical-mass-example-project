'use client';

import React from 'react';
import Link from 'next/link';

export interface FooterProps {
  className?: string;
}

interface SocialLink {
  href: string;
  label: string;
  ariaLabel: string;
  icon?: string;
  isExternal?: boolean;
  badgeColor?: 'primary' | 'secondary' | 'accent';
}

interface ContactLink {
  href: string;
  label: string;
  ariaLabel: string;
  type: 'email' | 'phone' | 'whatsapp';
  badgeColor?: 'primary' | 'secondary' | 'accent';
}

const socialLinks: SocialLink[] = [
  { 
    href: 'https://www.linkedin.com/in/stevenmoralesfallas/', 
    label: 'LinkedIn', 
    ariaLabel: 'Visit Steven Morales LinkedIn profile',
    isExternal: true,
    badgeColor: 'primary'
  },
  { 
    href: 'https://github.com/stevenmoraleszeta', 
    label: 'GitHub', 
    ariaLabel: 'Visit Steven Morales GitHub profile',
    isExternal: true,
    badgeColor: 'accent'
  },
  { 
    href: 'https://github.com/stevenmoraleszeta/critical-mass-example-project', 
    label: 'Project Repository', 
    ariaLabel: 'View Critical Mass example project repository on GitHub',
    isExternal: true,
    badgeColor: 'accent'
  },
  { 
    href: 'https://www.instagram.com/stevenmorales.novaera/', 
    label: 'Instagram', 
    ariaLabel: 'Visit Steven Morales Instagram profile',
    isExternal: true,
    badgeColor: 'secondary'
  },
];

const contactLinks: ContactLink[] = [
  {
    href: 'mailto:fallasmoraless@gmail.com',
    label: 'fallasmoraless@gmail.com',
    ariaLabel: 'Send email to fallasmoraless@gmail.com',
    type: 'email',
    badgeColor: 'primary'
  },
  {
    href: 'https://wa.me/50661304830?text=Hi!%20I%20came%20across%20your%20portfolio%20project%20and%20I%27d%20like%20to%20connect.',
    label: '+506 6130 4830',
    ariaLabel: 'Contact via WhatsApp at +506 6130 4830',
    type: 'whatsapp',
    badgeColor: 'accent'
  },
];

/**
 * Footer Component Implementation
 * 
 * Features:
 * - Semantic footer structure
 * - Social media links section
 * - Contact information section
 * - Copyright notice
 * - ARIA attributes for screen readers
 * - Keyboard navigation support
 * - Responsive layout (mobile-first)
 */
export default function Footer({ className = '' }: FooterProps) {
  const baseClass = 'footer';
  const classNames = [baseClass, className].filter(Boolean).join(' ');

  const handleExternalLinkKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer 
      className={classNames}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="footer__container">
        <div className="footer__content">
          <nav 
            className="footer__social"
            aria-label="Social media links"
          >
            <h2 className="footer__section-title">Connect</h2>
            <ul className="footer__social-list">
              {socialLinks.map((link) => (
                <li key={link.href} className="footer__social-item">
                  {link.isExternal ? (
                    <a
                      href={link.href}
                      className={`footer__social-link footer__social-link--${link.badgeColor || 'primary'}`}
                      aria-label={link.ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                      onKeyDown={(e) => handleExternalLinkKeyDown(e, link.href)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={`footer__social-link footer__social-link--${link.badgeColor || 'primary'}`}
                      aria-label={link.ariaLabel}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div 
            className="footer__contact"
            aria-label="Contact information"
          >
            <h2 className="footer__section-title">Contact</h2>
            <ul className="footer__contact-list">
              {contactLinks.map((link) => (
                <li key={link.href} className="footer__contact-item">
                  <a
                    href={link.href}
                    className={`footer__contact-link footer__contact-link--${link.badgeColor || 'primary'}`}
                    aria-label={link.ariaLabel}
                    {...(link.type === 'email' ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                    onKeyDown={(e) => {
                      if (link.type !== 'email') {
                        handleExternalLinkKeyDown(e, link.href);
                      }
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__copyright">
          <p className="footer__copyright-text">
            © {new Date().getFullYear()} Steven Morales. All rights reserved.
          </p>
          <p className="footer__copyright-note">
            Built with attention to detail for the Critical Mass Front-End Developer role.
          </p>
        </div>
      </div>
    </footer>
  );
}

