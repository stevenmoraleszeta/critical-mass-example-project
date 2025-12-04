'use client';

import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
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
import FeatureCard from "@/components/ui/FeatureCard";
import StatCard from "@/components/ui/StatCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import UseCaseCard from "@/components/ui/UseCaseCard";
// Styles are now in SCSS: src/styles/pages/_components.scss

export default function UILibrary() {
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

  // Toggle state management
  const [darkMode, setDarkMode] = React.useState(false);
  const [notifications, setNotifications] = React.useState(true);
  const [autoSave, setAutoSave] = React.useState(false);
  
  // Usage examples toggle states
  const [showLive, setShowLive] = React.useState(false);
  const [emailAlerts, setEmailAlerts] = React.useState(true);
  const [publicProfile, setPublicProfile] = React.useState(false);

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
    <MainLayout className="components-page__main">
    <div className="components-page">
        <div className="components-page__content">
          <h1 className="components-page__main-title">UI Library</h1>
          <p className="components-page__intro">
            A small set of reusable components used across this portfolio, documented with their intended usage and accessibility notes.
          </p>
          
          <section>
            <h2>Button Component Showcase</h2>
          
          {/* Variants Section */}
          <section>
            <h2>Variants</h2>
            <div className="components-page__button-group">
              <Button variant="primary" onClick={handleClick}>
                Primary Button
              </Button>
              <Button variant="secondary" onClick={handleClick}>
                Secondary Button
              </Button>
              <Button variant="highlight" onClick={handleClick}>
                Highlight Button
              </Button>
              <Button variant="ghost" onClick={handleClick}>
                Ghost Button
              </Button>
            </div>
          </section>

          {/* Sizes Section */}
          <section>
            <h2>Sizes</h2>
            <div className="components-page__button-group components-page__button-group--align-center">
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
            <div className="components-page__button-group components-page__button-group--vertical">
              <div>
                <h3>Primary</h3>
                <div className="components-page__button-group components-page__button-group--align-center">
                  <Button variant="primary" size="sm" onClick={handleClick}>Small</Button>
                  <Button variant="primary" size="md" onClick={handleClick}>Medium</Button>
                  <Button variant="primary" size="lg" onClick={handleClick}>Large</Button>
                </div>
              </div>
              <div>
                <h3>Secondary</h3>
                <div className="components-page__button-group components-page__button-group--align-center">
                  <Button variant="secondary" size="sm" onClick={handleClick}>Small</Button>
                  <Button variant="secondary" size="md" onClick={handleClick}>Medium</Button>
                  <Button variant="secondary" size="lg" onClick={handleClick}>Large</Button>
                </div>
              </div>
              <div>
                <h3>Highlight</h3>
                <div className="components-page__button-group components-page__button-group--align-center">
                  <Button variant="highlight" size="sm" onClick={handleClick}>Small</Button>
                  <Button variant="highlight" size="md" onClick={handleClick}>Medium</Button>
                  <Button variant="highlight" size="lg" onClick={handleClick}>Large</Button>
                </div>
              </div>
              <div>
                <h3>Ghost</h3>
                <div className="components-page__button-group components-page__button-group--align-center">
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
            <div className="components-page__button-group">
              <Button onClick={handleClick}>Normal</Button>
              <Button disabled onClick={handleClick}>Disabled</Button>
              <Button loading onClick={handleClick}>Loading</Button>
            </div>
          </section>

          {/* Link Buttons Section */}
          <section>
            <h2>Link Buttons</h2>
            <div className="components-page__button-group">
              <Button href="/" variant="primary">Link Primary</Button>
              <Button href="/" variant="secondary">Link Secondary</Button>
              <Button href="/" variant="highlight">Link Highlight</Button>
              <Button href="/" variant="ghost">Link Ghost</Button>
            </div>
          </section>

          {/* Accessibility Section */}
          <section>
            <h2>Accessibility</h2>
            <div className="components-page__button-group">
              <Button ariaLabel="Close dialog" onClick={handleClick}>
                <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
              <Button ariaLabel="Save changes" variant="highlight" onClick={handleClick}>
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
          </section>

          {/* Card Component Showcase */}
          <section>
            <h2 className="components-page__section-title">Card Component Showcase</h2>
            
            {/* Variants Section */}
            <section>
              <h2>Variants</h2>
              <div className="components-page__card-group">
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
              <div className="components-page__card-group">
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
              <div className="components-page__card-group">
                <Card 
                  variant="default"
                  title="Card with Footer"
                  description="This card includes a footer section with action buttons."
                  footer={
                    <div className="components-page__card-footer-actions">
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
                    <div className="components-page__card-footer-meta">
                      <span className="components-page__card-footer-meta__text">Published: Today</span>
                      <Button size="sm" variant="ghost" onClick={handleClick}>Read More</Button>
                    </div>
                  }
                />
              </div>
            </section>

            {/* Cards with Children */}
            <section>
              <h2>Cards with Custom Children</h2>
              <div className="components-page__card-group">
                <Card variant="default">
                  <div className="components-page__card-custom-content">
                    <h3 className="components-page__card-custom-content__title">Custom Content Card</h3>
                    <p>This card uses custom children instead of title and description props.</p>
                    <ul className="components-page__card-custom-content__list">
                      <li>Flexible content structure</li>
                      <li>Full control over layout</li>
                      <li>Perfect for complex content</li>
                    </ul>
                  </div>
                </Card>
                <Card variant="feature">
                  <div className="components-page__card-custom-content">
                    <h3 className="components-page__card-custom-content__title components-page__card-custom-content__title--primary">Feature with Custom Content</h3>
                    <p>You can combine custom children with other props for maximum flexibility.</p>
                    <div className="components-page__card-custom-content__tip">
                      <strong>Pro tip:</strong> Use children for complex layouts!
                    </div>
                  </div>
                </Card>
              </div>
            </section>

            {/* Complete Cards */}
            <section>
              <h2>Complete Cards (All Features)</h2>
              <div className="components-page__card-group">
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
                  <p className="components-page__card-additional-text">
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
                    <div className="components-page__card-footer-actions">
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
            <h1 className="components-page__section-title">Tag Component Showcase</h1>
            
            {/* Variants Section */}
            <section>
              <h2>Variants</h2>
              <div className="components-page__tag-group">
                <Tag text="Default Tag" variant="default" />
                <Tag text="Primary Tag" variant="primary" />
                <Tag text="Secondary Tag" variant="secondary" />
              </div>
            </section>

            {/* Sizes Section */}
            <section>
              <h2>Sizes</h2>
              <div className="components-page__tag-group components-page__tag-group--align-center">
                <Tag text="Small Tag" size="sm" />
                <Tag text="Medium Tag" size="md" />
              </div>
            </section>

            {/* All Variants with All Sizes */}
            <section>
              <h2>All Variants × All Sizes</h2>
              <div className="components-page__tag-group components-page__tag-group--vertical">
                <div>
                  <h3>Default</h3>
                  <div className="components-page__tag-group components-page__tag-group--align-center">
                    <Tag text="Small" variant="default" size="sm" />
                    <Tag text="Medium" variant="default" size="md" />
                  </div>
                </div>
                <div>
                  <h3>Primary</h3>
                  <div className="components-page__tag-group components-page__tag-group--align-center">
                    <Tag text="Small" variant="primary" size="sm" />
                    <Tag text="Medium" variant="primary" size="md" />
                  </div>
                </div>
                <div>
                  <h3>Secondary</h3>
                  <div className="components-page__tag-group components-page__tag-group--align-center">
                    <Tag text="Small" variant="secondary" size="sm" />
                    <Tag text="Medium" variant="secondary" size="md" />
                  </div>
                </div>
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className="components-page__tag-examples">
                <div className="components-page__tag-example">
                  <h3>Categories</h3>
                  <div className="components-page__tag-group">
                    <Tag text="React" variant="primary" />
                    <Tag text="TypeScript" variant="secondary" />
                    <Tag text="Next.js" variant="default" />
                    <Tag text="SCSS" variant="primary" />
                  </div>
                </div>
                <div className="components-page__tag-example">
                  <h3>Technologies</h3>
                  <div className="components-page__tag-group">
                    <Tag text="Frontend" variant="default" size="sm" />
                    <Tag text="Backend" variant="default" size="sm" />
                    <Tag text="Full Stack" variant="primary" size="sm" />
                    <Tag text="DevOps" variant="secondary" size="sm" />
                  </div>
                </div>
                <div className="components-page__tag-example">
                  <h3>Skills</h3>
                  <div className="components-page__tag-group">
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
            <h1 className="components-page__section-title">Badge Component Showcase</h1>
            
            {/* Status Variants Section */}
            <section>
              <h2>Status Variants</h2>
              <div className="components-page__badge-group">
                <Badge text="Live" status="live" />
                <Badge text="Upcoming" status="upcoming" />
                <Badge text="Draft" status="draft" />
              </div>
            </section>

            {/* All Statuses Section */}
            <section>
              <h2>All Status Types</h2>
              <div className="components-page__badge-group components-page__badge-group--align-center">
                <Badge text="Live" status="live" />
                <Badge text="Upcoming" status="upcoming" />
                <Badge text="Draft" status="draft" />
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className="components-page__badge-examples">
                <div className="components-page__badge-example">
                  <h3>Content Status</h3>
                  <div className="components-page__badge-group">
                    <Badge text="Live" status="live" />
                    <Badge text="Published" status="live" />
                    <Badge text="Active" status="live" />
                  </div>
                </div>
                <div className="components-page__badge-example">
                  <h3>Upcoming Content</h3>
                  <div className="components-page__badge-group">
                    <Badge text="Upcoming" status="upcoming" />
                    <Badge text="Scheduled" status="upcoming" />
                    <Badge text="Coming Soon" status="upcoming" />
                  </div>
                </div>
                <div className="components-page__badge-example">
                  <h3>Draft Content</h3>
                  <div className="components-page__badge-group">
                    <Badge text="Draft" status="draft" />
                    <Badge text="In Review" status="draft" />
                    <Badge text="Pending" status="draft" />
                  </div>
                </div>
                <div className="components-page__badge-example">
                  <h3>Mixed Statuses</h3>
                  <div className="components-page__badge-group">
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
            <h1 className="components-page__section-title">Input Component Showcase</h1>
            
            {/* Input Types Section */}
            <section>
              <h2>Input Types</h2>
              <div className="components-page__input-group">
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
              <div className="components-page__input-group">
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
              <div className="components-page__input-group">
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
              <div className="components-page__input-group">
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
            <h1 className="components-page__section-title">Select Component Showcase</h1>
            
            {/* Basic Select Section */}
            <section>
              <h2>Basic Select</h2>
              <div className="components-page__input-group">
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
              <div className="components-page__input-group">
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
              <div className="components-page__input-group">
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
              <div className="components-page__input-group">
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
            <h1 className="components-page__section-title">Toggle Component Showcase</h1>
            
            {/* Basic Toggle Section */}
            <section>
              <h2>Basic Toggle</h2>
              <div className="components-page__input-group">
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
              <div className="components-page__input-group">
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
              <div className="components-page__input-group">
                <Toggle
                  id="toggle-show-live"
                  label="Show only live content"
                  checked={showLive}
                  onChange={(e) => setShowLive(e.target.checked)}
                />
                <Toggle
                  id="toggle-email-alerts"
                  label="Email alerts"
                  checked={emailAlerts}
                  onChange={(e) => setEmailAlerts(e.target.checked)}
                />
                <Toggle
                  id="toggle-public-profile"
                  label="Make profile public"
                  checked={publicProfile}
                  onChange={(e) => setPublicProfile(e.target.checked)}
                />
              </div>
            </section>
          </section>

          {/* Loader Component Showcase */}
          <section>
            <h1 className="components-page__section-title">Loader Component Showcase</h1>
            
            {/* Basic Loader Section */}
            <section>
              <h2>Basic Loader</h2>
              <div className="components-page__loader-group">
                <Loader />
                <Loader text="Loading..." />
                <Loader text="Please wait" />
              </div>
            </section>

            {/* Loader Sizes Section */}
            <section>
              <h2>Loader Sizes</h2>
              <div className="components-page__loader-group">
                <Loader size="sm" text="Small loader" />
                <Loader size="md" text="Medium loader" />
                <Loader size="lg" text="Large loader" />
              </div>
            </section>

            {/* Loader Without Text */}
            <section>
              <h2>Loader Without Text</h2>
              <div className="components-page__loader-group">
                <Loader size="sm" />
                <Loader size="md" />
                <Loader size="lg" />
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className="components-page__loader-examples">
                <div className="components-page__loader-example">
                  <h3>Loading Content</h3>
                  <Loader text="Loading content..." size="md" />
                </div>
                <div className="components-page__loader-example">
                  <h3>Processing Request</h3>
                  <Loader text="Processing your request" size="md" />
                </div>
                <div className="components-page__loader-example">
                  <h3>Fetching Data</h3>
                  <Loader text="Fetching data..." size="lg" />
                </div>
              </div>
            </section>
          </section>

          {/* ErrorMessage Component Showcase */}
          <section>
            <h1 className="components-page__section-title">ErrorMessage Component Showcase</h1>
            
            {/* Basic Error Message Section */}
            <section>
              <h2>Basic Error Message</h2>
              <div className="components-page__error-group">
                <ErrorMessage message="Something went wrong" />
                <ErrorMessage message="Failed to load content" />
                <ErrorMessage message="Network error occurred" />
              </div>
            </section>

            {/* Error Message with Retry Section */}
            <section>
              <h2>Error Message with Retry Button</h2>
              <div className="components-page__error-group">
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
              <div className="components-page__error-group">
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
              <div className="components-page__error-group">
                <ErrorMessage size="sm" message="Small error without retry" />
                <ErrorMessage size="md" message="Medium error without retry" />
                <ErrorMessage size="lg" message="Large error without retry" />
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className="components-page__error-examples">
                <div className="components-page__error-example">
                  <h3>API Error</h3>
                  <ErrorMessage 
                    message="Failed to fetch data from server" 
                    onRetry={handleRetry}
                    retryLabel="Retry Request"
                  />
                </div>
                <div className="components-page__error-example">
                  <h3>Network Error</h3>
                  <ErrorMessage 
                    message="No internet connection" 
                    onRetry={handleRetry}
                    retryLabel="Check Connection"
                  />
                </div>
                <div className="components-page__error-example">
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
            <h2 className="components-page__section-title">Toast Component Showcase</h2>
            
            {/* Toast Variants Section */}
            <section>
              <h2>Toast Variants</h2>
              <div className="components-page__toast-group">
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('Operation completed successfully!', 'success')}
                >
                  Show Success Toast
                </button>
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('An error occurred. Please try again.', 'error')}
                >
                  Show Error Toast
                </button>
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('Here is some information for you.', 'info')}
                >
                  Show Info Toast
                </button>
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('Warning: This action cannot be undone.', 'warning')}
                >
                  Show Warning Toast
                </button>
              </div>
            </section>

            {/* Toast Sizes Section */}
            <section>
              <h2>Toast Sizes</h2>
              <div className="components-page__toast-group">
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('Small toast message', 'info', 'top-right', 'sm')}
                >
                  Show Small Toast
                </button>
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('Medium toast message', 'info', 'top-right', 'md')}
                >
                  Show Medium Toast
                </button>
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('Large toast message with more content', 'info', 'top-right', 'lg')}
                >
                  Show Large Toast
                </button>
              </div>
            </section>

            {/* Toast Positions Section */}
            <section>
              <h2>Toast Positions</h2>
              <div className="components-page__toast-group">
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('Top Right Toast', 'info', 'top-right')}
                >
                  Top Right
                </button>
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('Top Left Toast', 'info', 'top-left')}
                >
                  Top Left
                </button>
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('Bottom Right Toast', 'info', 'bottom-right')}
                >
                  Bottom Right
                </button>
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('Bottom Left Toast', 'info', 'bottom-left')}
                >
                  Bottom Left
                </button>
              </div>
            </section>

            {/* Auto-Dismiss Section */}
            <section>
              <h2>Auto-Dismiss Options</h2>
              <div className="components-page__toast-group">
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('This toast will auto-dismiss in 5 seconds', 'info', 'top-right', 'md', true, 5000)}
                >
                  Auto-Dismiss (5s)
                </button>
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('This toast will auto-dismiss in 3 seconds', 'success', 'top-right', 'md', true, 3000)}
                >
                  Auto-Dismiss (3s)
                </button>
                <button
                  type="button"
                  className="components-page__toast-trigger"
                  onClick={() => showToast('This toast will not auto-dismiss. Click X to close.', 'warning', 'top-right', 'md', false, 0)}
                >
                  No Auto-Dismiss
                </button>
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className="components-page__toast-examples">
                <div className="components-page__toast-example">
                  <h3>Success Notification</h3>
                  <button
                    type="button"
                    className="components-page__toast-trigger components-page__toast-trigger--yellow"
                    onClick={() => showToast('Your changes have been saved successfully!', 'success', 'top-right', 'md', true, 4000)}
                  >
                    Save Success
                  </button>
                </div>
                <div className="components-page__toast-example">
                  <h3>Error Notification</h3>
                  <button
                    type="button"
                    className="components-page__toast-trigger components-page__toast-trigger--yellow"
                    onClick={() => showToast('Failed to connect to server. Please check your connection.', 'error', 'top-right', 'md', true, 6000)}
                  >
                    Show Error
                  </button>
                </div>
                <div className="components-page__toast-example">
                  <h3>Info Notification</h3>
                  <button
                    type="button"
                    className="components-page__toast-trigger components-page__toast-trigger--yellow"
                    onClick={() => showToast('New features are available. Check them out!', 'info', 'bottom-right', 'md', true, 5000)}
                  >
                    Show Info
                  </button>
                </div>
              </div>
            </section>
          </section>

          {/* FeatureCard Component Showcase */}
          <section>
            <h2 className="components-page__section-title">FeatureCard Component Showcase</h2>
            
            {/* Basic FeatureCard Section */}
            <section>
              <h2>Basic FeatureCard</h2>
              <div className="components-page__card-group">
                <FeatureCard
                  title="Design-to-Code Translation"
                  description="Converts Figma and wireframes into clean, semantic HTML/CSS and reusable React components."
                />
                <FeatureCard
                  title="Responsive & Mobile-First"
                  description="Optimized for all breakpoints. Designed to behave nicely on phones your stakeholders actually use."
                />
                <FeatureCard
                  title="API Integration Module"
                  description="Speaks fluent REST, JSON and HTTP. Comfortable integrating with CMSs and external web services."
                />
              </div>
            </section>

            {/* FeatureCard with Icons Section */}
            <section>
              <h2>FeatureCard with Icons</h2>
              <div className="components-page__card-group">
                <FeatureCard
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                  title="Component Architecture"
                  description="Built with reusable components following BEM methodology and design system principles."
                />
                <FeatureCard
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                  title="Performance Optimized"
                  description="Focus on Lighthouse scores, lazy loading, image optimization and bundle awareness."
                />
                <FeatureCard
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                  title="Accessibility First"
                  description="Semantic HTML, ARIA attributes, keyboard navigation, and WCAG compliance built-in."
                />
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className="components-page__card-group">
                <FeatureCard
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                  title="Front-End Expertise"
                  description="Strong in HTML, CSS, JavaScript, TypeScript, React, Next.js, design systems and reusable components."
                />
                <FeatureCard
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                  title="Leadership & Mentorship"
                  description="CEO & Lead Developer at Novaera, leading a multi-developer engineering team."
                />
                <FeatureCard
                  icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  }
                  title="Education & Impact"
                  description="CEO & Lead Tech Educator at ZETA Academia, offering 30+ courses to 1,000+ students."
                />
              </div>
            </section>
          </section>

          {/* StatCard Component Showcase */}
          <section>
            <h2 className="components-page__section-title">StatCard Component Showcase</h2>
            
            {/* Basic StatCard Section */}
            <section>
              <h2>Basic StatCard</h2>
              <div className="components-page__card-group">
                <StatCard
                  title="Lighthouse Focus"
                  description="Focus on Lighthouse scores & perceived performance."
                />
                <StatCard
                  title="Optimization Built-In"
                  description="Works with lazy loading, image optimization and bundle awareness."
                />
                <StatCard
                  title="Data-Driven Approach"
                  description="Approach: profile, measure, then optimize – not guess."
                />
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className="components-page__card-group">
                <StatCard
                  title="Team Leadership"
                  description="Leading 6+ developers at Novaera and 4+ educators at ZETA Academia. Establishing workflows, code reviews, CI/CD integration, and process improvement."
                />
                <StatCard
                  title="Cross-Functional Collaboration"
                  description="Working with Creative, Business, Technology, and QA teams to ensure delivery of high-quality, punctual web development."
                />
                <StatCard
                  title="Communication & Transparency"
                  description="Providing clear progress updates and realistic estimates to stakeholders. Ensuring transparency throughout development process."
                />
              </div>
            </section>
          </section>

          {/* TestimonialCard Component Showcase */}
          <section>
            <h2 className="components-page__section-title">TestimonialCard Component Showcase</h2>
            
            {/* Basic TestimonialCard Section */}
            <section>
              <h2>Basic TestimonialCard</h2>
              <div className="components-page__card-group">
                <TestimonialCard
                  quote="Working with Steven felt like plugging a specialized module into our team – fast to understand the brief, calm under pressure, and always pushing for cleaner code."
                />
                <TestimonialCard
                  quote="Delivers on time, communicates clearly, and writes code that's easy to maintain. Exactly what you want in a front-end developer."
                />
                <TestimonialCard
                  quote="Brought fresh ideas to our component architecture while respecting existing patterns. Great balance of innovation and pragmatism."
                />
              </div>
            </section>

            {/* TestimonialCard with Author Section */}
            <section>
              <h2>TestimonialCard with Author Information</h2>
              <div className="components-page__card-group">
                <TestimonialCard
                  quote="Strong technical leadership with the ability to translate complex requirements into clean, maintainable code. Excellent collaboration skills and attention to detail."
                  author="Sarah Johnson"
                  role="Front-End Manager"
                  company="Digital Agency"
                />
                <TestimonialCard
                  quote="Outstanding problem-solving skills and deep understanding of modern web technologies. Consistently delivers high-quality work that exceeds expectations."
                  author="Michael Chen"
                  role="Tech Lead"
                  company="Software Company"
                />
                <TestimonialCard
                  quote="Exceptional ability to work with cross-functional teams. Brings both technical expertise and product mindset to every project."
                  author="Emily Rodriguez"
                  role="Product Manager"
                  company="Tech Startup"
                />
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className="components-page__card-group">
                <TestimonialCard
                  quote="Steven's approach to building scalable component libraries has significantly improved our development workflow. The code is clean, well-documented, and follows industry best practices."
                  author="Team Lead"
                  role="Engineering Manager"
                />
                <TestimonialCard
                  quote="The attention to accessibility and performance in Steven's work is outstanding. Every component is built with users in mind, from keyboard navigation to screen reader support."
                  author="UX Designer"
                />
              </div>
            </section>
          </section>

          {/* UseCaseCard Component Showcase */}
          <section>
            <h2 className="components-page__section-title">UseCaseCard Component Showcase</h2>
            
            {/* Basic UseCaseCard Section */}
            <section>
              <h2>Basic UseCaseCard</h2>
              <div className="components-page__card-group">
                <UseCaseCard
                  question="Need a pixel-perfect build from a Figma file?"
                  answer="I've translated complex designs into production-ready code across multiple projects, including ERP systems and educational platforms. Built reusable component libraries that design teams love to work with."
                />
                <UseCaseCard
                  question="Need scalable architecture for growing teams?"
                  answer="Led development of modular SaaS ERP systems and EdTech platforms. Designed component systems that scale from prototypes to production applications serving 1,000+ users."
                />
                <UseCaseCard
                  question="Need someone who understands both front-end and back-end?"
                  answer="Full-stack experience building complete systems from database design to API development to responsive UIs. Comfortable with debugging, root cause analysis, and cross-browser compatibility."
                />
              </div>
            </section>

            {/* Usage Examples */}
            <section>
              <h2>Usage Examples</h2>
              <div className="components-page__card-group">
                <UseCaseCard
                  question="Need a component library your design team actually likes?"
                  answer="Can build accessible, reusable components and document them clearly. Components follow BEM methodology and are designed for maintainability and scalability."
                />
                <UseCaseCard
                  question="Need someone to debug that weird layout in Safari?"
                  answer="Comfortable with cross-browser issues and digging into root causes instead of patching symptoms. Experience with browser DevTools and systematic debugging approaches."
                />
                <UseCaseCard
                  question="Need performance optimization without sacrificing code quality?"
                  answer="Approach: profile, measure, then optimize – not guess. Experience with Lighthouse, Core Web Vitals, and performance optimization techniques that maintain code quality."
                />
              </div>
            </section>
          </section>
        </div>

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
    </MainLayout>
  );
}

