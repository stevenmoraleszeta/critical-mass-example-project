'use client';

import Button from "@/components/ui/Button";
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
        </div>
      </main>
    </div>
  );
}
