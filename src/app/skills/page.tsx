'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Specs from '@/components/sections/Specs';

/**
 * Skills Page
 * 
 * Showcase of technical skills and expertise.
 * Demonstrates comprehensive knowledge across front-end, back-end, and tools.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML
 * - Full accessibility
 * - Mobile-first responsive design
 */

export default function Skills() {
  return (
    <MainLayout>
      <main className="skills-page">
        <div className="skills-page__container">
          <h1 className="skills-page__title">Skills & Expertise</h1>
          
          <p className="skills-page__description">
            A comprehensive overview of my technical skills and expertise across front-end development, 
            back-end technologies, and development tools. These skills have been applied in real-world 
            projects including SaaS ERP systems, EdTech platforms, and scalable web applications.
          </p>

          <Specs
            title="Tech Stack & Expertise"
            columns={[
              {
                title: "Front-End Technologies",
                items: [
                  "React & Next.js",
                  "TypeScript",
                  "HTML5 & CSS3",
                  "SASS/SCSS & LESS",
                  "TailwindCSS",
                  "React Native",
                  "JavaScript (ES6+)",
                ],
              },
              {
                title: "Back-End & Data",
                items: [
                  "Node.js & Python",
                  "PostgreSQL & MongoDB",
                  "REST & GraphQL APIs",
                  "JSON, XML, HTTP",
                  "Firebase",
                ],
              },
              {
                title: "Tools & Practices",
                items: [
                  "Git & GitHub",
                  "Gulp & Vite",
                  "Jest & RTL",
                  "Figma Design Translation",
                  "Docker & AWS",
                ],
              },
            ]}
            footerNote="Experience with full-stack development, API design, and scalable architecture."
          />
        </div>
      </main>
    </MainLayout>
  );
}

