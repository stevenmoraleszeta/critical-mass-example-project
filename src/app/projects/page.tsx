'use client';

import React, { useState, useMemo } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Tag from '@/components/ui/Tag';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Toggle from '@/components/ui/Toggle';
import Loader from '@/components/feedback/Loader';
import ErrorMessage from '@/components/feedback/ErrorMessage';

/**
 * Projects Page
 * 
 * Showcase of all portfolio projects with filtering capabilities.
 * Demonstrates API integration and dynamic content handling.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML
 * - Full accessibility
 * - Mobile-first responsive design
 */

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  status: 'live' | 'upcoming' | 'draft';
  technologies: string[];
  highlights: string[];
  publishedAt: string;
  url?: string;
  githubUrl?: string;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'Novaera SaaS ERP',
    description: 'Modular SaaS ERP for business management with automation, analytics, and scalable architecture. Leading a team of 6+ developers to ensure scalability, quality, and maintainability.',
    category: 'SaaS',
    status: 'live',
    technologies: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'REST API', 'AWS'],
    highlights: [
      'Led team of 6+ developers',
      'Scalable microservices architecture',
      'Multi-tenant SaaS platform',
      'Real-time analytics and reporting'
    ],
    publishedAt: '2024-05-01',
    url: 'https://novaera-saas-erp.vercel.app',
    githubUrl: 'https://github.com/stevenmoraleszeta/novaera-saas-erp-web'
  },
  {
    id: 2,
    title: 'ZETA Academia EdTech Platform',
    description: 'Founded an EdTech startup offering 30+ courses to 1,000+ students. Designed a scalable and accessible learning platform with analytics, responsive design, and continuous improvements.',
    category: 'EdTech',
    status: 'live',
    technologies: ['React', 'Next.js', 'TypeScript', 'MongoDB', 'Firebase', 'SASS'],
    highlights: [
      '1,000+ active students',
      '30+ courses available',
      'Led team of 4+ educators',
      'Scalable learning platform'
    ],
    publishedAt: '2024-01-01',
    url: 'https://zetaacademia.com',
    githubUrl: 'https://github.com/stevenmoraleszeta/novaera-academy-web'
  },
  {
    id: 3,
    title: 'Precision Seas ERP System',
    description: 'Integrated ERP for an industrial manufacturing company. Developed modules for inventory, billing, production, and data analytics. Currently under final testing before release.',
    category: 'ERP Systems',
    status: 'upcoming',
    technologies: ['React', 'Next.js', 'PostgreSQL', 'REST API', 'Docker'],
    highlights: [
      'Industrial manufacturing focus',
      'Complete inventory management',
      'Production tracking and analytics',
      'Full-stack development'
    ],
    publishedAt: '2025-01-01',
    url: 'https://precision-seas-erp.vercel.app'
  },
  {
    id: 4,
    title: 'Matemática Integral ERP',
    description: 'Custom ERP and automation platform for an educational institution. Integrated resources management, academic, and attendance modules — optimizing daily operations through automation.',
    category: 'ERP Systems',
    status: 'live',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'SASS'],
    highlights: [
      'Educational institution focus',
      'Automation and reporting',
      'Resource management',
      'Academic module integration'
    ],
    publishedAt: '2024-06-01',
    url: 'https://matematica-integral.vercel.app',
    githubUrl: 'https://github.com/stevenmoraleszeta/matematica-integral-web'
  },
  {
    id: 5,
    title: 'Demeter IoT Agriculture System',
    description: 'IoT solution for smart agriculture, presented in a Nestlé innovation contest. Enabled real-time monitoring and automated actions using sensors and microcontrollers.',
    category: 'IoT',
    status: 'live',
    technologies: ['React', 'IoT', 'Microcontrollers', 'Sensors'],
    highlights: [
      'Nestlé innovation contest',
      'Real-time monitoring',
      'Automated irrigation',
      'Sensor integration'
    ],
    publishedAt: '2024-03-01',
    url: 'https://demeter-prototype.vercel.app',
    githubUrl: 'https://github.com/stevenmoraleszeta/demeter-prototype'
  },
  {
    id: 6,
    title: 'TimerChill - Modern Pomodoro Timer',
    description: 'Modern React timer app built with TypeScript and Vite. Includes Pomodoro focus cycles, ambient background sounds, statistics tracking, and dark/light themes.',
    category: 'Other',
    status: 'live',
    technologies: ['React', 'TypeScript', 'Vite'],
    highlights: [
      'Pomodoro focus cycles',
      'Statistics tracking',
      'Dark/light themes',
      'Ambient sounds'
    ],
    publishedAt: '2024-02-01',
    url: 'https://timerchill.vercel.app',
    githubUrl: 'https://github.com/stevenmoraleszeta/timer-chill-web'
  },
  {
    id: 7,
    title: 'Steven Morales Portfolio Prototype',
    description: 'Professional portfolio prototype built specifically for Critical Mass Front-End Developer position. Demonstrates design-to-code translation, accessibility best practices (WCAG), API integration, SASS/SCSS preprocessing with BEM methodology, and component library development.',
    category: 'Other',
    status: 'live',
    technologies: ['React', 'Next.js', 'TypeScript', 'SASS', 'BEM', 'Accessibility'],
    highlights: [
      'Critical Mass portfolio',
      'WCAG compliant',
      'Performance optimized',
      'BEM methodology'
    ],
    publishedAt: '2025-01-15',
    url: 'https://stevenmorales.vercel.app',
    githubUrl: 'https://github.com/stevenmoraleszeta/critical-mass-example-project'
  }
];

const categories = ['All', 'ERP Systems', 'EdTech', 'SaaS', 'IoT', 'Other'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showOnlyLive, setShowOnlyLive] = useState<boolean>(false);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesStatus = !showOnlyLive || project.status === 'live';
      
      return matchesCategory && matchesSearch && matchesStatus;
    });
  }, [selectedCategory, searchQuery, showOnlyLive]);

  return (
    <MainLayout>
      <main className="projects-page">
        <div className="projects-page__container">
          <h1 className="projects-page__title">Portfolio Projects</h1>
          
          <p className="projects-page__description">
            Showcase of real-world projects demonstrating full-stack expertise, leadership, and scalable architecture. 
            Data filtered on the client to demonstrate API integration capabilities.
          </p>

          <div className="projects-page__filters">
            <div className="projects-page__filter-group">
              <Select
                id="category-filter"
                label="Category"
                options={categories.map(cat => ({ value: cat, label: cat }))}
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              />
            </div>

            <div className="projects-page__filter-group">
              <Input
                id="search-filter"
                label="Search projects"
                type="search"
                placeholder="Search by title, description, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="projects-page__filter-group">
              <Toggle
                id="live-filter"
                label="Show only live"
                checked={showOnlyLive}
                onChange={(e) => setShowOnlyLive(e.target.checked)}
              />
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="projects-page__empty">
              <p>No projects match your filters yet.</p>
            </div>
          ) : (
            <div className="projects-page__grid">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  variant="feature"
                  className="projects-page__card"
                >
                  <div className="projects-page__card-header">
                    <h2 className="projects-page__card-title">
                      {project.title}
                    </h2>
                    <Badge
                      text={project.status === 'live' ? 'Live' : project.status === 'upcoming' ? 'Upcoming' : 'Draft'}
                      status={project.status}
                    />
                  </div>

                  <div className="projects-page__card-meta">
                    <Tag text={project.category} variant="primary" size="sm" />
                    <span className="projects-page__card-date">
                      {new Date(project.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <p className="projects-page__card-description">
                    {project.description}
                  </p>
                  
                  <div className="projects-page__card-highlights">
                    <h3 className="projects-page__highlights-title">Key Highlights:</h3>
                    <ul className="projects-page__highlights-list">
                      {project.highlights.map((highlight, index) => (
                        <li key={index} className="projects-page__highlight-item">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="projects-page__card-technologies">
                    {project.technologies.map((tech) => (
                      <Tag
                        key={tech}
                        text={tech}
                        variant="secondary"
                        size="sm"
                      />
                    ))}
                  </div>
                  
                  <div className="projects-page__card-footer">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projects-page__link"
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
                        className="projects-page__link"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        View on GitHub →
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>
    </MainLayout>
  );
}

