'use client';

import React from 'react';
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Tag from "@/components/ui/Tag";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Toggle from "@/components/ui/Toggle";
import Loader from "@/components/feedback/Loader";
import ErrorMessage from "@/components/feedback/ErrorMessage";
import Toast from "@/components/feedback/Toast";
import styles from "./page.module.css";

export default function Home() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  // Input state management
  const [textValue, setTextValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [requiredValue, setRequiredValue] = React.useState('');

  // Select state management
  const [categoryValue, setCategoryValue] = React.useState('all');
  const [statusValue, setStatusValue] = React.useState('live');
  const [requiredSelectValue, setRequiredSelectValue] = React.useState('');
  const [selectError, setSelectError] = React.useState('');

  // Toggle state management
  const [darkMode, setDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);
  const [autoSave, setAutoSave] = React.useState(false);

  // Error message handlers
  const handleRetry = () => {
    alert("Retry clicked!");
  };

  // Toast state management
  const [toasts, setToasts] = React.useState<{
    id: string;
    message: string;
    variant: 'success' | 'error' | 'info' | 'warning';
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    size: 'sm' | 'md' | 'lg';
    autoDismiss: boolean;
    duration: number;
  }[]>([]);

  const showToast = (
    message: string,
    variant: 'success' | 'error' | 'info' | 'warning' = 'info',
    position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right',
    size: 'sm' | 'md' | 'lg' = 'md',
    autoDismiss: boolean = true,
    duration: number = 5000
  ) => {
    const id = Math.random().toString(36).substring(7);
    setToasts((prev) => [...prev, { id, message, variant, position, size, autoDismiss, duration }]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmailValue(value);
    // Simple email validation
    if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
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

          {/* Input Component Showcase */}
          <section>
            <h1 className={styles['section-title']}>Input Component Showcase</h1>
            
            {/* Input Types Section */}
            <section>
              <h2>Input Types</h2>
              <div className={styles['input-group']}>
                <Input
                  id="input-text"
                  label="Text Input"
                  type="text"
                  placeholder="Enter text..."
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                />
                <Input
                  id="input-email"
                  label="Email Input"
                  type="email"
                  placeholder="Enter email..."
                  value={emailValue}
                  onChange={handleEmailChange}
                  error={emailError}
                />
                <Input
                  id="input-search"
                  label="Search Input"
                  type="search"
                  placeholder="Search content..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <Input
                  id="input-password"
                  label="Password Input"
                  type="password"
                  placeholder="Enter password..."
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                />
              </div>
            </section>

            {/* Required Inputs Section */}
            <section>
              <h2>Required Inputs</h2>
              <div className={styles['input-group']}>
                <Input
                  id="input-required"
                  label="Required Field"
                  type="text"
                  placeholder="This field is required"
                  value={requiredValue}
                  onChange={(e) => setRequiredValue(e.target.value)}
                  required
                />
                <Input
                  id="input-required-email"
                  label="Required Email"
                  type="email"
                  placeholder="email@example.com"
                  value={emailValue}
                  onChange={handleEmailChange}
                  required
                  error={emailError}
                />
              </div>
            </section>

            {/* Error States Section */}
            <section>
              <h2>Error States</h2>
              <div className={styles['input-group']}>
                <Input
                  id="input-error-1"
                  label="Input with Error"
                  type="text"
                  placeholder="Enter value..."
                  value=""
                  onChange={() => {}}
                  error="This field is required"
                />
                <Input
                  id="input-error-2"
                  label="Email Validation Error"
                  type="email"
                  placeholder="email@example.com"
                  value="invalid-email"
                  onChange={handleEmailChange}
                  error="Please enter a valid email address"
                />
              </div>
            </section>

            {/* All States Combined */}
            <section>
              <h2>All States Combined</h2>
              <div className={styles['input-group']}>
                <Input
                  id="input-normal"
                  label="Normal Input"
                  type="text"
                  placeholder="Normal state"
                  value={textValue}
                  onChange={(e) => setTextValue(e.target.value)}
                />
                <Input
                  id="input-required-state"
                  label="Required Input"
                  type="text"
                  placeholder="Required field"
                  value={requiredValue}
                  onChange={(e) => setRequiredValue(e.target.value)}
                  required
                />
                <Input
                  id="input-error-state"
                  label="Error Input"
                  type="text"
                  placeholder="Has error"
                  value=""
                  onChange={() => {}}
                  error="This field has an error"
                />
                <Input
                  id="input-required-error"
                  label="Required with Error"
                  type="text"
                  placeholder="Required and has error"
                  value=""
                  onChange={() => {}}
                  required
                  error="This required field has an error"
                />
              </div>
            </section>
          </section>

          {/* Select Component Showcase */}
          <section>
            <h1 className={styles['section-title']}>Select Component Showcase</h1>
            
            {/* Basic Select Section */}
            <section>
              <h2>Basic Select</h2>
              <div className={styles['input-group']}>
                <Select
                  id="select-category"
                  label="Category"
                  options={[
                    { value: 'all', label: 'All Categories' },
                    { value: 'campaign', label: 'Campaign' },
                    { value: 'case-study', label: 'Case Study' },
                    { value: 'experiment', label: 'Experiment' },
                    { value: 'learning', label: 'Learning' }
                  ]}
                  value={categoryValue}
                  onChange={(e) => setCategoryValue(e.target.value)}
                />
                <Select
                  id="select-status"
                  label="Status"
                  options={[
                    { value: 'live', label: 'Live' },
                    { value: 'upcoming', label: 'Upcoming' },
                    { value: 'draft', label: 'Draft' }
                  ]}
                  value={statusValue}
                  onChange={(e) => setStatusValue(e.target.value)}
                />
              </div>
            </section>

            {/* Required Select Section */}
            <section>
              <h2>Required Select</h2>
              <div className={styles['input-group']}>
                <Select
                  id="select-required"
                  label="Required Category"
                  options={[
                    { value: '', label: 'Select a category...' },
                    { value: 'campaign', label: 'Campaign' },
                    { value: 'case-study', label: 'Case Study' },
                    { value: 'experiment', label: 'Experiment' }
                  ]}
                  value={requiredSelectValue}
                  onChange={(e) => setRequiredSelectValue(e.target.value)}
                  required
                />
              </div>
            </section>

            {/* Error States Section */}
            <section>
              <h2>Error States</h2>
              <div className={styles['input-group']}>
                <Select
                  id="select-error"
                  label="Select with Error"
                  options={[
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' },
                    { value: 'option3', label: 'Option 3' }
                  ]}
                  value=""
                  onChange={() => {}}
                  error="Please select an option"
                />
                <Select
                  id="select-required-error"
                  label="Required with Error"
                  options={[
                    { value: '', label: 'Select...' },
                    { value: 'option1', label: 'Option 1' },
                    { value: 'option2', label: 'Option 2' }
                  ]}
                  value=""
                  onChange={() => {}}
                  required
                  error="This field is required"
                />
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className={styles['input-group']}>
                <Select
                  id="select-filter"
                  label="Filter by Category"
                  options={[
                    { value: 'all', label: 'All Categories' },
                    { value: 'campaign', label: 'Campaign' },
                    { value: 'case-study', label: 'Case Study' },
                    { value: 'experiment', label: 'Experiment' },
                    { value: 'learning', label: 'Learning' }
                  ]}
                  value={categoryValue}
                  onChange={(e) => setCategoryValue(e.target.value)}
                />
                <Select
                  id="select-sort"
                  label="Sort By"
                  options={[
                    { value: 'newest', label: 'Newest First' },
                    { value: 'oldest', label: 'Oldest First' },
                    { value: 'title', label: 'Title A-Z' },
                    { value: 'title-desc', label: 'Title Z-A' }
                  ]}
                  value="newest"
                  onChange={() => {}}
                />
              </div>
            </section>
          </section>

          {/* Toggle Component Showcase */}
          <section>
            <h1 className={styles['section-title']}>Toggle Component Showcase</h1>
            
            {/* Basic Toggle Section */}
            <section>
              <h2>Basic Toggle</h2>
              <div className={styles['input-group']}>
                <Toggle
                  id="toggle-dark-mode"
                  label="Dark Mode"
                  checked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                />
                <Toggle
                  id="toggle-notifications"
                  label="Enable Notifications"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                />
                <Toggle
                  id="toggle-auto-save"
                  label="Auto Save"
                  checked={autoSave}
                  onChange={(e) => setAutoSave(e.target.checked)}
                />
              </div>
            </section>

            {/* Toggle States Section */}
            <section>
              <h2>Toggle States</h2>
              <div className={styles['input-group']}>
                <Toggle
                  id="toggle-checked"
                  label="Checked Toggle"
                  checked={true}
                  onChange={() => {}}
                />
                <Toggle
                  id="toggle-unchecked"
                  label="Unchecked Toggle"
                  checked={false}
                  onChange={() => {}}
                />
                <Toggle
                  id="toggle-disabled-checked"
                  label="Disabled (Checked)"
                  checked={true}
                  onChange={() => {}}
                  disabled
                />
                <Toggle
                  id="toggle-disabled-unchecked"
                  label="Disabled (Unchecked)"
                  checked={false}
                  onChange={() => {}}
                  disabled
                />
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className={styles['input-group']}>
                <Toggle
                  id="toggle-show-live"
                  label="Show only live content"
                  checked={false}
                  onChange={() => {}}
                />
                <Toggle
                  id="toggle-email-alerts"
                  label="Email alerts"
                  checked={true}
                  onChange={() => {}}
                />
                <Toggle
                  id="toggle-public-profile"
                  label="Make profile public"
                  checked={false}
                  onChange={() => {}}
                />
              </div>
            </section>
          </section>

          {/* Loader Component Showcase */}
          <section>
            <h1 className={styles['section-title']}>Loader Component Showcase</h1>
            
            {/* Basic Loader Section */}
            <section>
              <h2>Basic Loader</h2>
              <div className={styles['loader-group']}>
                <Loader />
                <Loader text="Loading..." />
                <Loader text="Please wait" />
              </div>
            </section>

            {/* Loader Sizes Section */}
            <section>
              <h2>Loader Sizes</h2>
              <div className={styles['loader-group']}>
                <Loader size="sm" text="Small loader" />
                <Loader size="md" text="Medium loader" />
                <Loader size="lg" text="Large loader" />
              </div>
            </section>

            {/* Loader Without Text */}
            <section>
              <h2>Loader Without Text</h2>
              <div className={styles['loader-group']}>
                <Loader size="sm" />
                <Loader size="md" />
                <Loader size="lg" />
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className={styles['loader-examples']}>
                <div className={styles['loader-example']}>
                  <h3>Loading Content</h3>
                  <Loader text="Loading content..." size="md" />
                </div>
                <div className={styles['loader-example']}>
                  <h3>Processing Request</h3>
                  <Loader text="Processing your request" size="md" />
                </div>
                <div className={styles['loader-example']}>
                  <h3>Fetching Data</h3>
                  <Loader text="Fetching data..." size="lg" />
                </div>
              </div>
            </section>
          </section>

          {/* ErrorMessage Component Showcase */}
          <section>
            <h1 className={styles['section-title']}>ErrorMessage Component Showcase</h1>
            
            {/* Basic Error Message Section */}
            <section>
              <h2>Basic Error Message</h2>
              <div className={styles['error-group']}>
                <ErrorMessage message="Something went wrong" />
                <ErrorMessage message="Failed to load content" />
                <ErrorMessage message="Network error occurred" />
              </div>
            </section>

            {/* Error Message with Retry Section */}
            <section>
              <h2>Error Message with Retry Button</h2>
              <div className={styles['error-group']}>
                <ErrorMessage 
                  message="Failed to load data" 
                  onRetry={handleRetry}
                />
                <ErrorMessage 
                  message="Connection timeout" 
                  onRetry={handleRetry}
                  retryLabel="Try Again"
                />
                <ErrorMessage 
                  message="Server error. Please try again later." 
                  onRetry={handleRetry}
                  retryLabel="Retry"
                />
              </div>
            </section>

            {/* Error Message Sizes Section */}
            <section>
              <h2>Error Message Sizes</h2>
              <div className={styles['error-group']}>
                <ErrorMessage 
                  size="sm" 
                  message="Small error message" 
                  onRetry={handleRetry}
                />
                <ErrorMessage 
                  size="md" 
                  message="Medium error message" 
                  onRetry={handleRetry}
                />
                <ErrorMessage 
                  size="lg" 
                  message="Large error message" 
                  onRetry={handleRetry}
                />
              </div>
            </section>

            {/* Error Message Without Retry */}
            <section>
              <h2>Error Message Without Retry</h2>
              <div className={styles['error-group']}>
                <ErrorMessage size="sm" message="Small error without retry" />
                <ErrorMessage size="md" message="Medium error without retry" />
                <ErrorMessage size="lg" message="Large error without retry" />
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className={styles['error-examples']}>
                <div className={styles['error-example']}>
                  <h3>API Error</h3>
                  <ErrorMessage 
                    message="Failed to fetch data from server" 
                    onRetry={handleRetry}
                    retryLabel="Retry Request"
                  />
                </div>
                <div className={styles['error-example']}>
                  <h3>Network Error</h3>
                  <ErrorMessage 
                    message="No internet connection" 
                    onRetry={handleRetry}
                    retryLabel="Check Connection"
                  />
                </div>
                <div className={styles['error-example']}>
                  <h3>Validation Error</h3>
                  <ErrorMessage 
                    message="Invalid input. Please check your data." 
                  />
                </div>
              </div>
            </section>
          </section>

          {/* Toast Component Showcase */}
          <section>
            <h1 className={styles['section-title']}>Toast Component Showcase</h1>
            
            {/* Toast Variants Section */}
            <section>
              <h2>Toast Variants</h2>
              <div className={styles['toast-group']}>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('Operation completed successfully!', 'success')}
                >
                  Show Success Toast
                </button>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('An error occurred. Please try again.', 'error')}
                >
                  Show Error Toast
                </button>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('Here is some information for you.', 'info')}
                >
                  Show Info Toast
                </button>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('Warning: This action cannot be undone.', 'warning')}
                >
                  Show Warning Toast
                </button>
              </div>
            </section>

            {/* Toast Sizes Section */}
            <section>
              <h2>Toast Sizes</h2>
              <div className={styles['toast-group']}>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('Small toast message', 'info', 'top-right', 'sm')}
                >
                  Show Small Toast
                </button>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('Medium toast message', 'info', 'top-right', 'md')}
                >
                  Show Medium Toast
                </button>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('Large toast message with more content', 'info', 'top-right', 'lg')}
                >
                  Show Large Toast
                </button>
              </div>
            </section>

            {/* Toast Positions Section */}
            <section>
              <h2>Toast Positions</h2>
              <div className={styles['toast-group']}>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('Top Right Toast', 'info', 'top-right')}
                >
                  Top Right
                </button>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('Top Left Toast', 'info', 'top-left')}
                >
                  Top Left
                </button>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('Bottom Right Toast', 'info', 'bottom-right')}
                >
                  Bottom Right
                </button>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('Bottom Left Toast', 'info', 'bottom-left')}
                >
                  Bottom Left
                </button>
              </div>
            </section>

            {/* Auto-Dismiss Section */}
            <section>
              <h2>Auto-Dismiss Options</h2>
              <div className={styles['toast-group']}>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('This toast will auto-dismiss in 5 seconds', 'info', 'top-right', 'md', true, 5000)}
                >
                  Auto-Dismiss (5s)
                </button>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('This toast will auto-dismiss in 3 seconds', 'success', 'top-right', 'md', true, 3000)}
                >
                  Auto-Dismiss (3s)
                </button>
                <button
                  className={styles['toast-trigger']}
                  onClick={() => showToast('This toast will not auto-dismiss. Click X to close.', 'warning', 'top-right', 'md', false, 0)}
                >
                  No Auto-Dismiss
                </button>
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className={styles['toast-examples']}>
                <div className={styles['toast-example']}>
                  <h3>Success Notification</h3>
                  <button
                    className={styles['toast-trigger']}
                    onClick={() => showToast('Your changes have been saved successfully!', 'success', 'top-right', 'md', true, 4000)}
                  >
                    Save Success
                  </button>
                </div>
                <div className={styles['toast-example']}>
                  <h3>Error Notification</h3>
                  <button
                    className={styles['toast-trigger']}
                    onClick={() => showToast('Failed to connect to server. Please check your connection.', 'error', 'top-right', 'md', true, 6000)}
                  >
                    Show Error
                  </button>
                </div>
                <div className={styles['toast-example']}>
                  <h3>Info Notification</h3>
                  <button
                    className={styles['toast-trigger']}
                    onClick={() => showToast('New features are available. Check them out!', 'info', 'bottom-right', 'md', true, 5000)}
                  >
                    Show Info
                  </button>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>

      {/* Render all active toasts */}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          variant={toast.variant}
          position={toast.position}
          size={toast.size}
          autoDismiss={toast.autoDismiss}
          duration={toast.duration}
          onDismiss={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
}
