'use client';

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import styles from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1>Button Component Showcase</h1>
          
          {/* Variants Section */}
          <section>
            <h2>Variants</h2>
            <div className={`${styles['button-group']}`}>
              <Button variant="primary" onClick={handleClick}>
                Primary Button
              </Button>
              <Button variant="secondary" onClick={handleClick}>
                Secondary Button
              </Button>
              <Button variant="ghost" onClick={handleClick}>
                Ghost Button
              </Button>
            </div>
          </section>

          {/* Sizes Section */}
          <section>
            <h2>Sizes</h2>
            <div className={`${styles['button-group']} ${styles['button-group--align-center']}`}>
              <Button size="sm" onClick={handleClick}>
                Small Button
              </Button>
              <Button size="md" onClick={handleClick}>
                Medium Button
              </Button>
              <Button size="lg" onClick={handleClick}>
                Large Button
              </Button>
            </div>
          </section>

          {/* All Variants with All Sizes */}
          <section>
            <h2>All Variants × All Sizes</h2>
            <div className={`${styles['button-group']} ${styles['button-group--vertical']}`}>
              <div>
                <h3>Primary</h3>
                <div className={`${styles['button-group']} ${styles['button-group--align-center']}`}>
                  <Button variant="primary" size="sm" onClick={handleClick}>Small</Button>
                  <Button variant="primary" size="md" onClick={handleClick}>Medium</Button>
                  <Button variant="primary" size="lg" onClick={handleClick}>Large</Button>
                </div>
              </div>
              <div>
                <h3>Secondary</h3>
                <div className={`${styles['button-group']} ${styles['button-group--align-center']}`}>
                  <Button variant="secondary" size="sm" onClick={handleClick}>Small</Button>
                  <Button variant="secondary" size="md" onClick={handleClick}>Medium</Button>
                  <Button variant="secondary" size="lg" onClick={handleClick}>Large</Button>
                </div>
              </div>
              <div>
                <h3>Ghost</h3>
                <div className={`${styles['button-group']} ${styles['button-group--align-center']}`}>
                  <Button variant="ghost" size="sm" onClick={handleClick}>Small</Button>
                  <Button variant="ghost" size="md" onClick={handleClick}>Medium</Button>
                  <Button variant="ghost" size="lg" onClick={handleClick}>Large</Button>
                </div>
              </div>
            </div>
          </section>

          {/* States Section */}
          <section>
            <h2>States</h2>
            <div className={styles['button-group']}>
              <Button onClick={handleClick}>Normal</Button>
              <Button disabled onClick={handleClick}>Disabled</Button>
              <Button loading onClick={handleClick}>Loading</Button>
            </div>
          </section>

          {/* Link Buttons Section */}
          <section>
            <h2>Link Buttons</h2>
            <div className={styles['button-group']}>
              <Button href="/" variant="primary">Link Primary</Button>
              <Button href="/" variant="secondary">Link Secondary</Button>
              <Button href="/" variant="ghost">Link Ghost</Button>
            </div>
          </section>

          {/* Accessibility Section */}
          <section>
            <h2>Accessibility</h2>
            <div className={styles['button-group']}>
              <Button ariaLabel="Close dialog" onClick={handleClick}>×</Button>
              <Button ariaLabel="Save changes" variant="primary" onClick={handleClick}>💾</Button>
              <Button ariaLabel="Delete item" variant="secondary" onClick={handleClick}>🗑️</Button>
            </div>
          </section>

          {/* Card Component Showcase */}
          <section>
            <h1 style={{ marginTop: '4rem', marginBottom: '2rem' }}>Card Component Showcase</h1>
            
            {/* Variants Section */}
            <section>
              <h2>Variants</h2>
              <div className={styles['card-group']}>
                <Card 
                  variant="default" 
                  title="Default Card"
                  description="This is a default variant card with title and description."
                />
                <Card 
                  variant="feature" 
                  title="Feature Card"
                  description="This is a feature variant card, perfect for showcasing features."
                />
                <Card 
                  variant="content" 
                  title="Content Card"
                  description="This is a content variant card, optimized for content feeds."
                />
              </div>
            </section>

            {/* Cards with Images */}
            <section>
              <h2>Cards with Images</h2>
              <div className={styles['card-group']}>
                <Card 
                  variant="default"
                  title="Card with Image"
                  description="This card includes an image to demonstrate the image support."
                  image={{
                    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                    alt: "Sample image for card",
                    width: 400,
                    height: 300
                  }}
                />
                <Card 
                  variant="feature"
                  title="Feature with Image"
                  description="Feature cards can also include images to make them more visually appealing."
                  image={{
                    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                    alt: "Feature image",
                    width: 400,
                    height: 300
                  }}
                />
                <Card 
                  variant="content"
                  title="Content with Image"
                  description="Content cards work great with images for displaying articles or posts."
                  image={{
                    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
                    alt: "Content image",
                    width: 400,
                    height: 300
                  }}
                />
              </div>
            </section>

            {/* Cards with Footer */}
            <section>
              <h2>Cards with Footer</h2>
              <div className={styles['card-group']}>
                <Card 
                  variant="default"
                  title="Card with Footer"
                  description="This card includes a footer section with action buttons."
                  footer={
                    <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
                      <Button size="sm" variant="primary" onClick={handleClick}>Action</Button>
                      <Button size="sm" variant="ghost" onClick={handleClick}>Cancel</Button>
                    </div>
                  }
                />
                <Card 
                  variant="feature"
                  title="Feature with Footer"
                  description="Feature cards can have footers with multiple action options."
                  footer={
                    <Button variant="primary" onClick={handleClick}>Learn More</Button>
                  }
                />
                <Card 
                  variant="content"
                  title="Content with Footer"
                  description="Content cards often have footers with metadata or actions."
                  footer={
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Published: Today</span>
                      <Button size="sm" variant="ghost" onClick={handleClick}>Read More</Button>
                    </div>
                  }
                />
              </div>
            </section>

            {/* Cards with Children */}
            <section>
              <h2>Cards with Custom Children</h2>
              <div className={styles['card-group']}>
                <Card variant="default">
                  <div>
                    <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Custom Content Card</h3>
                    <p>This card uses custom children instead of title and description props.</p>
                    <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                      <li>Flexible content structure</li>
                      <li>Full control over layout</li>
                      <li>Perfect for complex content</li>
                    </ul>
                  </div>
                </Card>
                <Card variant="feature">
                  <div>
                    <h3 style={{ marginTop: 0, marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Feature with Custom Content</h3>
                    <p>You can combine custom children with other props for maximum flexibility.</p>
                    <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: 'var(--color-gray-50)', borderRadius: '0.5rem' }}>
                      <strong>Pro tip:</strong> Use children for complex layouts!
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Complete Cards */}
            <section>
              <h2>Complete Cards (All Features)</h2>
              <div className={styles['card-group']}>
                <Card 
                  variant="default"
                  title="Complete Default Card"
                  description="This card demonstrates all features: image, content, and footer."
                  image={{
                    src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
                    alt: "Complete card image",
                    width: 400,
                    height: 300
                  }}
                  footer={
                    <Button variant="primary" onClick={handleClick}>View Details</Button>
                  }
                >
                  <p style={{ marginTop: '0.5rem' }}>
                    This card also includes custom children content in addition to the title and description.
                  </p>
                </Card>
                <Card 
                  variant="feature"
                  title="Complete Feature Card"
                  description="Feature cards can showcase all capabilities together."
                  image={{
                    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
                    alt: "Feature showcase",
                    width: 400,
                    height: 300
                  }}
                  footer={
                    <div style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
                      <Button size="sm" variant="primary" onClick={handleClick}>Get Started</Button>
                      <Button size="sm" variant="ghost" onClick={handleClick}>Learn More</Button>
                    </div>
                  }
                />
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}
