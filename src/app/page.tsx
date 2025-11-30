'use client';

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import Badge from "@/components/ui/Badge";
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
              <Button ariaLabel="Close dialog" onClick={handleClick}>
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
              <Button ariaLabel="Save changes" variant="save" onClick={handleClick}>
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M13.333 4V13.333H2.667V2.667H10.667L13.333 4ZM8 11.333C9.473 11.333 10.667 10.139 10.667 8.667C10.667 7.194 9.473 6 8 6C6.527 6 5.333 7.194 5.333 8.667C5.333 10.139 6.527 11.333 8 11.333ZM4 2.667V4H2.667V2.667H4Z" fill="currentColor"/>
                </svg>
              </Button>
              <Button ariaLabel="Delete item" variant="exit" onClick={handleClick}>
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M5.333 3.333V2.667C5.333 2.313 5.474 1.974 5.724 1.724C5.974 1.474 6.313 1.333 6.667 1.333H9.333C9.687 1.333 10.026 1.474 10.276 1.724C10.526 1.974 10.667 2.313 10.667 2.667V3.333H13.333V4.667H12.667V13.333C12.667 13.687 12.526 14.026 12.276 14.276C12.026 14.526 11.687 14.667 11.333 14.667H4.667C4.313 14.667 3.974 14.526 3.724 14.276C3.474 14.026 3.333 13.687 3.333 13.333V4.667H2.667V3.333H5.333ZM6.667 2.667V3.333H9.333V2.667H6.667ZM4.667 4.667V13.333H11.333V4.667H4.667ZM6.667 6.667V11.333H8V6.667H6.667ZM8 6.667V11.333H9.333V6.667H8Z" fill="currentColor"/>
                </svg>
              </Button>
            </div>
          </section>

          {/* Card Component Showcase */}
          <section>
            <h1 className={styles['section-title']}>Card Component Showcase</h1>
            
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
                    <div className={styles['card-footer-actions']}>
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
                    <div className={styles['card-footer-meta']}>
                      <span className={styles['card-footer-meta__text']}>Published: Today</span>
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
                  <div className={styles['card-custom-content']}>
                    <h3 className={styles['card-custom-content__title']}>Custom Content Card</h3>
                    <p>This card uses custom children instead of title and description props.</p>
                    <ul className={styles['card-custom-content__list']}>
                      <li>Flexible content structure</li>
                      <li>Full control over layout</li>
                      <li>Perfect for complex content</li>
                    </ul>
                  </div>
                </Card>
                <Card variant="feature">
                  <div className={styles['card-custom-content']}>
                    <h3 className={`${styles['card-custom-content__title']} ${styles['card-custom-content__title--primary']}`}>Feature with Custom Content</h3>
                    <p>You can combine custom children with other props for maximum flexibility.</p>
                    <div className={styles['card-custom-content__tip']}>
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
                  <p className={styles['card-additional-text']}>
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
                    <div className={styles['card-footer-actions']}>
                      <Button size="sm" variant="primary" onClick={handleClick}>Get Started</Button>
                      <Button size="sm" variant="ghost" onClick={handleClick}>Learn More</Button>
                    </div>
                  }
                />
              </div>
            </section>
          </section>

          {/* Tag Component Showcase */}
          <section>
            <h1 className={styles['section-title']}>Tag Component Showcase</h1>
            
            {/* Variants Section */}
            <section>
              <h2>Variants</h2>
              <div className={styles['tag-group']}>
                <Tag text="Default Tag" variant="default" />
                <Tag text="Primary Tag" variant="primary" />
                <Tag text="Secondary Tag" variant="secondary" />
              </div>
            </section>

            {/* Sizes Section */}
            <section>
              <h2>Sizes</h2>
              <div className={`${styles['tag-group']} ${styles['tag-group--align-center']}`}>
                <Tag text="Small Tag" size="sm" />
                <Tag text="Medium Tag" size="md" />
              </div>
            </section>

            {/* All Variants with All Sizes */}
            <section>
              <h2>All Variants × All Sizes</h2>
              <div className={`${styles['tag-group']} ${styles['tag-group--vertical']}`}>
                <div>
                  <h3>Default</h3>
                  <div className={`${styles['tag-group']} ${styles['tag-group--align-center']}`}>
                    <Tag text="Small" variant="default" size="sm" />
                    <Tag text="Medium" variant="default" size="md" />
                  </div>
                </div>
                <div>
                  <h3>Primary</h3>
                  <div className={`${styles['tag-group']} ${styles['tag-group--align-center']}`}>
                    <Tag text="Small" variant="primary" size="sm" />
                    <Tag text="Medium" variant="primary" size="md" />
                  </div>
                </div>
                <div>
                  <h3>Secondary</h3>
                  <div className={`${styles['tag-group']} ${styles['tag-group--align-center']}`}>
                    <Tag text="Small" variant="secondary" size="sm" />
                    <Tag text="Medium" variant="secondary" size="md" />
                  </div>
                </div>
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className={styles['tag-examples']}>
                <div className={styles['tag-example']}>
                  <h3>Categories</h3>
                  <div className={styles['tag-group']}>
                    <Tag text="React" variant="primary" />
                    <Tag text="TypeScript" variant="secondary" />
                    <Tag text="Next.js" variant="default" />
                    <Tag text="SCSS" variant="primary" />
                  </div>
                </div>
                <div className={styles['tag-example']}>
                  <h3>Technologies</h3>
                  <div className={styles['tag-group']}>
                    <Tag text="Frontend" variant="default" size="sm" />
                    <Tag text="Backend" variant="default" size="sm" />
                    <Tag text="Full Stack" variant="primary" size="sm" />
                    <Tag text="DevOps" variant="secondary" size="sm" />
                  </div>
                </div>
                <div className={styles['tag-example']}>
                  <h3>Skills</h3>
                  <div className={styles['tag-group']}>
                    <Tag text="Responsive Design" variant="primary" />
                    <Tag text="Accessibility" variant="secondary" />
                    <Tag text="Performance" variant="default" />
                  </div>
                </div>
              </div>
            </section>
          </section>

          {/* Badge Component Showcase */}
          <section>
            <h1 className={styles['section-title']}>Badge Component Showcase</h1>
            
            {/* Status Variants Section */}
            <section>
              <h2>Status Variants</h2>
              <div className={styles['badge-group']}>
                <Badge text="Live" status="live" />
                <Badge text="Upcoming" status="upcoming" />
                <Badge text="Draft" status="draft" />
              </div>
            </section>

            {/* All Statuses Section */}
            <section>
              <h2>All Status Types</h2>
              <div className={`${styles['badge-group']} ${styles['badge-group--align-center']}`}>
                <Badge text="Live" status="live" />
                <Badge text="Upcoming" status="upcoming" />
                <Badge text="Draft" status="draft" />
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className={styles['badge-examples']}>
                <div className={styles['badge-example']}>
                  <h3>Content Status</h3>
                  <div className={styles['badge-group']}>
                    <Badge text="Live" status="live" />
                    <Badge text="Published" status="live" />
                    <Badge text="Active" status="live" />
                  </div>
                </div>
                <div className={styles['badge-example']}>
                  <h3>Upcoming Content</h3>
                  <div className={styles['badge-group']}>
                    <Badge text="Upcoming" status="upcoming" />
                    <Badge text="Scheduled" status="upcoming" />
                    <Badge text="Coming Soon" status="upcoming" />
                  </div>
                </div>
                <div className={styles['badge-example']}>
                  <h3>Draft Content</h3>
                  <div className={styles['badge-group']}>
                    <Badge text="Draft" status="draft" />
                    <Badge text="In Review" status="draft" />
                    <Badge text="Pending" status="draft" />
                  </div>
                </div>
                <div className={styles['badge-example']}>
                  <h3>Mixed Statuses</h3>
                  <div className={styles['badge-group']}>
                    <Badge text="Live" status="live" />
                    <Badge text="Upcoming" status="upcoming" />
                    <Badge text="Draft" status="draft" />
                    <Badge text="Published" status="live" />
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
    </div>
  );
}
