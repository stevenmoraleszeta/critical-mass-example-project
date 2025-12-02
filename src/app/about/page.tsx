import MainLayout from '@/components/layout/MainLayout';

/**
 * About Page
 * 
 * Professional portfolio page explaining the purpose of this prototype
 * and how it demonstrates skills relevant to the Critical Mass position.
 * 
 * Follows Critical Mass requirements:
 * - Semantic HTML
 * - Full accessibility
 * - Mobile-first responsive design
 */
export default function About() {
  return (
    <MainLayout>
      <main className="about-page">
        <div className="about-page__container">
          <h1 className="about-page__title">About This Portfolio</h1>
          
          <section className="about-page__section">
            <h2 className="about-page__section-title">Context</h2>
            <p className="about-page__section-content">
              I'm applying for the <strong>Front-End Developer position at Critical Mass</strong> in San Jose, Costa Rica. 
              This portfolio prototype serves as a practical demonstration of my skills and approach to front-end 
              development in an agency environment.
            </p>
            <p className="about-page__section-content">
              Currently, I serve as <strong>CEO & Lead Software Developer at Novaera</strong>, leading a team of 6+ 
              developers building intelligent and scalable digital solutions. I'm also <strong>CEO & Lead Tech Educator 
              at ZETA Academia</strong>, where I lead a team of 4+ educators and empower 1,000+ students to learn Python, 
              AI, and Web Development.
            </p>
          </section>

          <section className="about-page__section">
            <h2 className="about-page__section-title">Objective</h2>
            <p className="about-page__section-content">
              This portfolio demonstrates skills directly aligned with the Critical Mass job posting:
            </p>
            <ul className="about-page__list">
              <li><strong>Design-to-code translation</strong> – Translating Figma designs into responsive, accessible code with attention to detail</li>
              <li><strong>Responsive, mobile-first development</strong> – Built with mobile-first approach, tested across all breakpoints</li>
              <li><strong>Accessibility best practices</strong> – WCAG-compliant implementations with semantic HTML, ARIA attributes, and keyboard navigation</li>
              <li><strong>Performance optimization</strong> – Font optimization, image optimization, code splitting, and performance-focused architecture</li>
              <li><strong>API integration and data handling</strong> – Demonstrates API integration capabilities with JSON endpoints and client-side filtering</li>
              <li><strong>SASS preprocessing with organized architecture</strong> – Complete SCSS architecture following BEM and SMACSS principles</li>
              <li><strong>Component system development</strong> – Reusable, documented components with variants, states, and accessibility features</li>
              <li><strong>Testing practices</strong> – Jest and React Testing Library for component and integration testing</li>
              <li><strong>Version control and collaboration</strong> – Git workflow with descriptive commits and organized branch strategy</li>
            </ul>
          </section>

          <section className="about-page__section">
            <h2 className="about-page__section-title">How It's Built</h2>
            <p className="about-page__section-content">
              This prototype is built with <strong>Next.js 14 (App Router)</strong>, <strong>TypeScript</strong>, and 
              <strong> SASS/SCSS</strong>, following industry best practices:
            </p>
            <ul className="about-page__list">
              <li><strong>Architecture:</strong> BEM methodology for CSS, SMACSS for organization, component-based React architecture</li>
              <li><strong>Accessibility:</strong> Semantic HTML, ARIA attributes, keyboard navigation, focus management, screen reader support</li>
              <li><strong>Performance:</strong> Font optimization via next/font, image optimization with next/image, code splitting, lazy loading</li>
              <li><strong>Testing:</strong> Jest and React Testing Library for unit and integration tests</li>
              <li><strong>Code Quality:</strong> TypeScript for type safety, ESLint for code quality, organized folder structure</li>
            </ul>
          </section>

          <section className="about-page__section">
            <h2 className="about-page__section-title">Real-World Experience</h2>
            <p className="about-page__section-content">
              Beyond this prototype, my experience includes:
            </p>
            <ul className="about-page__list">
              <li><strong>Leading development teams</strong> at Novaera and ZETA Academia, building scalable applications</li>
              <li><strong>Full-stack development</strong> – Built complete ERP systems, EdTech platforms, and SaaS applications</li>
              <li><strong>API design and integration</strong> – Designed and consumed REST APIs, integrated with third-party services</li>
              <li><strong>Database design</strong> – Experience with PostgreSQL, MongoDB, and SQL databases</li>
              <li><strong>Cloud deployment</strong> – Deployed applications to Vercel, AWS, and other cloud platforms</li>
              <li><strong>Cross-functional collaboration</strong> – Worked with design, business, and QA teams to deliver high-quality products</li>
            </ul>
          </section>

          <section className="about-page__section">
            <h2 className="about-page__section-title">Why Critical Mass?</h2>
            <p className="about-page__section-content">
              I'm excited about the opportunity to join Critical Mass because it represents a chance to work on 
              meaningful projects with a forward-thinking team. My experience leading teams, building scalable 
              applications, and focusing on quality aligns perfectly with Critical Mass's values. I'm ready to 
              bring my passion for innovation, attention to detail, and collaborative approach to your projects.
            </p>
            <p className="about-page__section-content">
              I'm based in Costa Rica and available for the full-time position, ready to work from the office 
              a minimum of 3 days a week as required.
            </p>
          </section>
        </div>
      </main>
    </MainLayout>
  );
}

