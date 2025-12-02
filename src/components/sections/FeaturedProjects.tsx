'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Tag from '@/components/ui/Tag';

/**
 * Featured Projects Section Component
 * 
 * Showcases real-world projects demonstrating full-stack expertise,
 * leadership, and scalable application development.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML (<section>, <h2>)
 * - Full accessibility (ARIA, keyboard navigation)
 * - Mobile-first responsive design
 * - BEM methodology
 */

export interface Project {
  id: number;
  title: string;
  description: string;
  status: 'live' | 'upcoming' | 'draft';
  technologies: string[];
  highlights: string[];
  url?: string;
  githubUrl?: string;
}

export default function FeaturedProjects() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Novaera SaaS ERP',
      description: 'Modular SaaS ERP for business management with automation, analytics, and scalable architecture. Leading a team of 6+ developers to ensure scalability, quality, and maintainability.',
      status: 'live',
      technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'REST API', 'AWS'],
      highlights: [
        'Led team of 6+ developers',
        'Scalable microservices architecture',
        'Multi-tenant SaaS platform',
        'Real-time analytics and reporting'
      ],
      url: 'https://novaera-saas-erp.vercel.app',
      githubUrl: 'https://github.com/stevenmoraleszeta/novaera-saas-erp-web'
    },
    {
      id: 2,
      title: 'ZETA Academia EdTech Platform',
      description: 'Founded an EdTech startup offering 30+ courses to 1,000+ students. Designed a scalable and accessible learning platform with analytics, responsive design, and continuous improvements.',
      status: 'live',
      technologies: ['React', 'Next.js', 'TypeScript', 'MongoDB', 'Firebase', 'SASS'],
      highlights: [
        '1,000+ active students',
        '30+ courses available',
        'Led team of 4+ educators',
        'Scalable learning platform'
      ],
      url: 'https://zetaacademia.com',
      githubUrl: 'https://github.com/stevenmoraleszeta/novaera-academy-web'
    },
    {
      id: 3,
      title: 'Precision Seas ERP System',
      description: 'Integrated ERP for an industrial manufacturing company. Developed modules for inventory, billing, production, and data analytics. Currently under final testing before release.',
      status: 'upcoming',
      technologies: ['React', 'Next.js', 'PostgreSQL', 'REST API', 'Docker'],
      highlights: [
        'Industrial manufacturing focus',
        'Complete inventory management',
        'Production tracking and analytics',
        'Full-stack development'
      ],
      url: 'https://precision-seas-erp.vercel.app'
    },
    {
      id: 4,
      title: 'Matemática Integral ERP',
      description: 'Custom ERP and automation platform for an educational institution. Integrated resources management, academic, and attendance modules — optimizing daily operations through automation.',
      status: 'live',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'SASS'],
      highlights: [
        'Educational institution focus',
        'Automation and reporting',
        'Resource management',
        'Academic module integration'
      ],
      url: 'https://matematica-integral.vercel.app',
      githubUrl: 'https://github.com/stevenmoraleszeta/matematica-integral-web'
    }
  ];

  return (
    <section className="featured-projects" id="projects" aria-labelledby="projects-title">
      <div className="featured-projects__container">
        <h2 id="projects-title" className="featured-projects__title">
          Featured Projects
        </h2>
        
        <p className="featured-projects__subtitle">
          Real-world applications demonstrating full-stack expertise, leadership, and scalable architecture.
        </p>
        
        <div className="featured-projects__grid">
          {projects.map((project) => (
            <Card
              key={project.id}
              variant="feature"
              className="featured-projects__card"
            >
              <div className="featured-projects__card-header">
                <h3 className="featured-projects__card-title">
                  {project.title}
                </h3>
                <Badge
                  text={project.status === 'live' ? 'Live' : project.status === 'upcoming' ? 'Upcoming' : 'Draft'}
                  status={project.status}
                />
              </div>
              
              <p className="featured-projects__card-description">
                {project.description}
              </p>
              
              <div className="featured-projects__card-highlights">
                <h4 className="featured-projects__highlights-title">Key Highlights:</h4>
                <ul className="featured-projects__highlights-list">
                  {project.highlights.map((highlight, index) => (
                    <li key={index} className="featured-projects__highlight-item">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="featured-projects__card-technologies">
                {project.technologies.map((tech) => (
                  <Tag
                    key={tech}
                    text={tech}
                    variant="primary"
                    size="sm"
                  />
                ))}
              </div>
              
              <div className="featured-projects__card-footer">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-projects__link"
                    aria-label={`Visit ${project.title} live site`}
                  >
                    View Live Site →
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="featured-projects__link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

