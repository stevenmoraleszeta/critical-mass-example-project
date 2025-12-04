'use client';

import React from 'react';
import Link from 'next/link';
import MainLayout from '@/components/layout/MainLayout';
import Card from '@/components/ui/Card';
import Tag from '@/components/ui/Tag';
import Button from '@/components/ui/Button';
import CardBoard, { CardData } from '@/components/sections/CardBoard';
import ScrollArrow from '@/components/ui/ScrollArrow';
import AnimatedGradientBackground from '@/components/ui/AnimatedGradientBackground';
import FloatingBinaryElements from '@/components/ui/FloatingBinaryElements';

const coreSkillsCards: CardData[] = [
  {
    id: '1',
    title: 'Languages & Frameworks',
    description: 'TypeScript, JavaScript, Node.js, Python, Java, C#, PHP, React, Next.js, HTML5, CSS3',
  },
  {
    id: '2',
    title: 'Databases',
    description: 'PostgreSQL, SQL, MongoDB (NoSQL), Firebase',
  },
  {
    id: '3',
    title: 'DevOps & Cloud',
    description: 'Git, Docker, AWS, CI/CD Pipelines, Render, Vercel',
  },
  {
    id: '4',
    title: 'Architecture & Engineering',
    description: 'RESTful APIs, Microservices, Performance Optimization, Scalability, Systems Design, Agile/Scrum, UX/UI Collaboration',
  },
  {
    id: '5',
    title: 'Soft Skills',
    description: 'Leadership, Communication, Organization, Adaptability, Creativity, Mentorship, Tenacity, Ambition, Learning',
  },
];

export default function Curriculum() {
  return (
    <MainLayout>
      <div className="curriculum-page">
        <AnimatedGradientBackground />
        <FloatingBinaryElements 
          count={600}
          minFontSize={0.4}
          maxFontSize={2.5}
          minOpacity={0.15}
          maxOpacity={0.4}
        />
        <div className="curriculum-page__container">
          <section 
            className="curriculum-page__hero" 
            aria-labelledby="curriculum-title"
          >
            <h1 id="curriculum-title" className="curriculum-page__title">
              Professional Curriculum
            </h1>
            <p className="curriculum-page__intro">
              Full Stack Software Engineer with more than <strong>3 years of experience</strong> building robust, scalable, and high-performance software across web, desktop, mobile, and hybrid platforms.
            </p>
            <ScrollArrow targetId="professional-summary" />
          </section>

          <section 
            id="professional-summary" 
            className="curriculum-page__section" 
            aria-labelledby="professional-summary-title"
          >
            <Card variant="default" className="curriculum-page__card">
              <div className="curriculum-page__card-content">
                <h2 id="professional-summary-title" className="curriculum-page__section-title">
                  Professional Summary
                </h2>
                <div className="curriculum-page__content">
                  <p className="curriculum-page__text">
                    Full Stack Software Engineer with more than <strong>3 years of experience</strong> building robust, scalable, and high-performance software across web, desktop, mobile, and hybrid platforms. I enjoy creating clean and efficient solutions that connect technology, creativity, and real user needs. I have worked across the full development cycle—from design and architecture to deployment and optimization—combining strong technical knowledge with leadership, teamwork, and problem-solving. I value <strong>ambition, innovation, and knowledge</strong>.
                  </p>
                </div>
              </div>
            </Card>
            <ScrollArrow targetId="core-skills" />
          </section>

          <section 
            id="core-skills" 
            className="curriculum-page__section curriculum-page__section--skills" 
            aria-labelledby="core-skills-title"
          >
            <div className="curriculum-page__skills-wrapper">
              <CardBoard
                id="core-skills"
                title="Core Technical Skills"
                cards={coreSkillsCards}
                draggable={false}
                className="curriculum-page__skills-board"
              />
            </div>
            <ScrollArrow targetId="professional-experience" />
          </section>

          <section 
            id="professional-experience" 
            className="curriculum-page__section" 
            aria-labelledby="professional-experience-title"
          >
            <h2 id="professional-experience-title" className="curriculum-page__section-title curriculum-page__section-title--standalone">
              Professional Experience
            </h2>
            <div className="curriculum-page__experience-list">
              <Card variant="default" className="curriculum-page__card">
                <div className="curriculum-page__card-content">
                  <h3 className="curriculum-page__experience-title">CEO & Lead Software Developer</h3>
                  <div className="curriculum-page__experience-meta">
                    <Tag text="Novaera" variant="secondary" size="md" />
                    <Tag text="May 2024 - Present" variant="secondary" size="md" />
                  </div>
                  <div className="curriculum-page__content">
                    <p className="curriculum-page__text">
                      Lead a six-member development team creating automation tools, ERP systems, websites, and AI-powered platforms. Design and implement full-stack architectures, APIs, and modular components for scalable solutions. Collaborate with designers and clients to ensure usability, performance, and consistency. Novaera integrates technology solutions with design and marketing services, helping clients build strong digital identities and unified brand experiences.
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="curriculum-page__card">
                <div className="curriculum-page__card-content">
                  <h3 className="curriculum-page__experience-title">Freelance Software Developer</h3>
                  <div className="curriculum-page__experience-meta">
                    <Tag text="Self-Employed" variant="secondary" size="md" />
                    <Tag text="Aug 2022 - Present" variant="secondary" size="md" />
                  </div>
                  <div className="curriculum-page__content">
                    <p className="curriculum-page__text">
                      Develop custom ERP systems, websites, and automation platforms for small and medium-sized companies. Create websites using CMS platforms including Odoo and WordPress. Integrate modern front-end frameworks with efficient and secure backend architectures. Work closely with clients to translate business needs into clean, functional, and maintainable code.
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="curriculum-page__card">
                <div className="curriculum-page__card-content">
                  <h3 className="curriculum-page__experience-title">Software Developer (Intern)</h3>
                  <div className="curriculum-page__experience-meta">
                    <Tag text="INFOCOOP" variant="secondary" size="md" />
                    <Tag text="Aug 2023 - Nov 2023" variant="secondary" size="md" />
                  </div>
                  <div className="curriculum-page__content">
                    <p className="curriculum-page__text">
                      Enhanced the educational platform of the Instituto Nacional de Cooperativismo. Developed automation tools that improved system performance and reduced manual work. Participated in code reviews and documentation to maintain technical standards.
                    </p>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="curriculum-page__card">
                <div className="curriculum-page__card-content">
                  <h3 className="curriculum-page__experience-title">Software Developer</h3>
                  <div className="curriculum-page__experience-meta">
                    <Tag text="TI Recursos CR" variant="secondary" size="md" />
                    <Tag text="Dec 2022 - Feb 2023" variant="secondary" size="md" />
                  </div>
                  <div className="curriculum-page__content">
                    <p className="curriculum-page__text">
                      Implemented custom Odoo ERP modules and created websites using Odoo CMS tailored to client requirements. Improved integrations, performance, and documentation for long-term maintainability.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section 
            id="project-highlights" 
            className="curriculum-page__section" 
            aria-labelledby="project-highlights-title"
          >
            <h2 id="project-highlights-title" className="curriculum-page__section-title curriculum-page__section-title--standalone">
              Project Highlights
            </h2>
            <div className="curriculum-page__projects-list">
              <Card variant="default" className="curriculum-page__card">
                <div className="curriculum-page__card-content">
                  <h3 className="curriculum-page__project-title">Critical Mass Portfolio Prototype</h3>
                  <Tag text="2025" variant="secondary" size="md" />
                  <div className="curriculum-page__content">
                    <p className="curriculum-page__text">
                      A professional portfolio prototype built specifically for the Critical Mass Front-End Developer role. Demonstrates design-to-code translation, responsive architecture, accessibility best practices (WCAG), API integration, SASS/SCSS preprocessing with BEM methodology, and component library development. Built with Next.js 14, TypeScript, and React Testing Library to showcase front-end expertise in an agency context.
                    </p>
                    <div className="curriculum-page__project-links">
                      <a href="https://stevenmorales.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="View Critical Mass Portfolio Prototype live demo">
                        <Button variant="secondary" size="sm">Live Demo</Button>
                      </a>
                      <a href="https://github.com/stevenmoraleszeta/critical-mass-example-project" target="_blank" rel="noopener noreferrer" aria-label="View Critical Mass Portfolio Prototype GitHub repository">
                        <Button variant="secondary" size="sm">GitHub</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="curriculum-page__card">
                <div className="curriculum-page__card-content">
                  <h3 className="curriculum-page__project-title">Precision Seas ERP System</h3>
                  <Tag text="2025" variant="secondary" size="md" />
                  <div className="curriculum-page__content">
                    <p className="curriculum-page__text">
                      Developed a complete ERP solution for a manufacturing company specializing in industrial parts. Implemented modules to manage resources and improve traceability and efficiency across operations through data and automation.
                    </p>
                    <div className="curriculum-page__project-links">
                      <a href="https://precision-seas-erp.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="View Precision Seas ERP System live demo">
                        <Button variant="secondary" size="sm">Live Demo</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="curriculum-page__card">
                <div className="curriculum-page__card-content">
                  <h3 className="curriculum-page__project-title">Novaera SaaS ERP</h3>
                  <Tag text="2024 - 2025" variant="secondary" size="md" />
                  <div className="curriculum-page__content">
                    <p className="curriculum-page__text">
                      Designed and co-developed an innovative SaaS ERP platform used by business clients. Integrated automation, analytics, and multi-module management with a strong focus on scalability and performance. Led a six-member engineering team ensuring code quality, maintainability, and clear technical documentation.
                    </p>
                    <div className="curriculum-page__project-links">
                      <a href="https://novaera-saas-erp.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="View Novaera SaaS ERP live demo">
                        <Button variant="secondary" size="sm">Live Demo</Button>
                      </a>
                      <a href="https://github.com/stevenmoraleszeta/novaera-saas-erp-web" target="_blank" rel="noopener noreferrer" aria-label="View Novaera SaaS ERP Web GitHub repository">
                        <Button variant="secondary" size="sm">GitHub Web</Button>
                      </a>
                      <a href="https://github.com/stevenmoraleszeta/novaera-saas-erp-api" target="_blank" rel="noopener noreferrer" aria-label="View Novaera SaaS ERP API GitHub repository">
                        <Button variant="secondary" size="sm">GitHub API</Button>
                      </a>
                      <a href="https://github.com/stevenmoraleszeta/novaera-saas-erp-db" target="_blank" rel="noopener noreferrer" aria-label="View Novaera SaaS ERP DB GitHub repository">
                        <Button variant="secondary" size="sm">GitHub DB</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="curriculum-page__card">
                <div className="curriculum-page__card-content">
                  <h3 className="curriculum-page__project-title">ZETA Academia EdTech Platform</h3>
                  <Tag text="2024 - 2025" variant="secondary" size="md" />
                  <div className="curriculum-page__content">
                    <p className="curriculum-page__text">
                      Founded and led ZETA Academia, an educational startup offering courses in Artificial Intelligence, Python, Java, Excel, and more. Led a five-person team to design and co-develop the learning platform, which supports over <strong>1,000 students</strong> and <strong>30+ courses</strong>. Focused on performance, accessibility, and scalability, integrating user analytics and responsive design.
                    </p>
                    <div className="curriculum-page__project-links">
                      <a href="https://zetaacademia.com" target="_blank" rel="noopener noreferrer" aria-label="View ZETA Academia EdTech Platform live demo">
                        <Button variant="secondary" size="sm">Live Demo</Button>
                      </a>
                      <a href="https://github.com/stevenmoraleszeta/novaera-academy-web" target="_blank" rel="noopener noreferrer" aria-label="View ZETA Academia EdTech Platform Web GitHub repository">
                        <Button variant="secondary" size="sm">GitHub Web</Button>
                      </a>
                      <a href="https://github.com/stevenmoraleszeta/novaera-academy-api" target="_blank" rel="noopener noreferrer" aria-label="View ZETA Academia EdTech Platform API GitHub repository">
                        <Button variant="secondary" size="sm">GitHub API</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="curriculum-page__card">
                <div className="curriculum-page__card-content">
                  <h3 className="curriculum-page__project-title">TimerChill — Modern Pomodoro Timer</h3>
                  <Tag text="2024" variant="secondary" size="md" />
                  <div className="curriculum-page__content">
                    <p className="curriculum-page__text">
                      A modern React timer app built with TypeScript and Vite. Includes Pomodoro focus cycles, ambient background sounds, statistics tracking, and dark/light themes. Designed for smooth productivity with a clean UI, animations, and persistent user preferences.
                    </p>
                    <div className="curriculum-page__project-links">
                      <a href="https://timerchill.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="View TimerChill live demo">
                        <Button variant="secondary" size="sm">Live Demo</Button>
                      </a>
                      <a href="https://github.com/stevenmoraleszeta/timer-chill-web" target="_blank" rel="noopener noreferrer" aria-label="View TimerChill GitHub repository">
                        <Button variant="secondary" size="sm">GitHub</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="curriculum-page__card">
                <div className="curriculum-page__card-content">
                  <h3 className="curriculum-page__project-title">Matemática Integral ERP & Automation System</h3>
                  <Tag text="2024" variant="secondary" size="md" />
                  <div className="curriculum-page__content">
                    <p className="curriculum-page__text">
                      Built an ERP system to manage academic, financial, and operational processes for an educational institution. Integrated automation and reporting tools to simplify daily management.
                    </p>
                    <div className="curriculum-page__project-links">
                      <a href="https://matematica-integral.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="View Matemática Integral ERP live demo">
                        <Button variant="secondary" size="sm">Live Demo</Button>
                      </a>
                      <a href="https://github.com/stevenmoraleszeta/matematica-integral-web" target="_blank" rel="noopener noreferrer" aria-label="View Matemática Integral ERP GitHub repository">
                        <Button variant="secondary" size="sm">GitHub</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="curriculum-page__card">
                <div className="curriculum-page__card-content">
                  <h3 className="curriculum-page__project-title">Demeter IoT Agriculture System</h3>
                  <Tag text="2024" variant="secondary" size="md" />
                  <div className="curriculum-page__content">
                    <p className="curriculum-page__text">
                      Developed an IoT-based system for smart agriculture presented in a Nestlé innovation competition. Enabled real-time monitoring and automated irrigation using microcontrollers and sensors.
                    </p>
                    <div className="curriculum-page__project-links">
                      <a href="https://demeter-prototype.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="View Demeter IoT Agriculture System live demo">
                        <Button variant="secondary" size="sm">Live Demo</Button>
                      </a>
                      <a href="https://github.com/stevenmoraleszeta/demeter-prototype" target="_blank" rel="noopener noreferrer" aria-label="View Demeter IoT Agriculture System GitHub repository">
                        <Button variant="secondary" size="sm">GitHub</Button>
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card variant="default" className="curriculum-page__card">
                <div className="curriculum-page__card-content">
                  <h3 className="curriculum-page__project-title">INFOCOOP Education Platform Enhancement</h3>
                  <Tag text="2023" variant="secondary" size="md" />
                  <div className="curriculum-page__content">
                    <p className="curriculum-page__text">
                      Improved the performance and usability of the institutional e-learning platform. Redesigned modules and applied optimization techniques to improve the user experience.
                    </p>
                  </div>
                </div>
              </Card>

            </div>
            <ScrollArrow targetId="education" color="white" />
          </section>

          <section 
            id="education" 
            className="curriculum-page__section" 
            aria-labelledby="education-title"
          >
            <Card variant="default" className="curriculum-page__card">
              <div className="curriculum-page__card-content">
                <h2 id="education-title" className="curriculum-page__section-title">
                  Education
                </h2>
                <div className="curriculum-page__content">
                  <div className="curriculum-page__education-item">
                    <h3 className="curriculum-page__education-degree">Technical Degree in Software Development</h3>
                    <p className="curriculum-page__education-institution">CTP de Orosi (2023)</p>
                    <p className="curriculum-page__education-note">Graduated with highest GPA and honors.</p>
                  </div>
                </div>
              </div>
            </Card>
            <ScrollArrow targetId="languages" color="white" />
          </section>

          <section 
            id="languages" 
            className="curriculum-page__section" 
            aria-labelledby="languages-title"
          >
            <Card variant="default" className="curriculum-page__card">
              <div className="curriculum-page__card-content">
                <h2 id="languages-title" className="curriculum-page__section-title">
                  Languages
                </h2>
                <div className="curriculum-page__content">
                  <div className="curriculum-page__languages-list">
                    <div className="curriculum-page__language-item">
                      <span className="curriculum-page__language-name">Spanish</span>
                      <span className="curriculum-page__language-level">Native</span>
                    </div>
                    <div className="curriculum-page__language-item">
                      <span className="curriculum-page__language-name">English</span>
                      <span className="curriculum-page__language-level">Professional Working Proficiency</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          <section 
            className="curriculum-page__section" 
            aria-labelledby="cta-title"
          >
            <Card variant="default" className="curriculum-page__card curriculum-page__card--closing">
              <div className="curriculum-page__card-content">
                <h2 id="cta-title" className="curriculum-page__section-title">
                  Let&apos;s Connect
                </h2>
                <div className="curriculum-page__content">
                  <p className="curriculum-page__text">
                    Interested in discussing opportunities or collaborating on innovative projects?
                  </p>
                  <p className="curriculum-page__text curriculum-page__text--closing">
                    <Link href="/contact" className="curriculum-page__cta-link">
                      Get in Touch
                    </Link>
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
