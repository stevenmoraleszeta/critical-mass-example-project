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
        <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <h1 style={{ marginBottom: "2rem" }}>Button Component Showcase</h1>
          
          {/* Variants Section */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>Variants</h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
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
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>Sizes</h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center", marginBottom: "1rem" }}>
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
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>All Variants × All Sizes</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>Primary</h3>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                  <Button variant="primary" size="sm" onClick={handleClick}>Small</Button>
                  <Button variant="primary" size="md" onClick={handleClick}>Medium</Button>
                  <Button variant="primary" size="lg" onClick={handleClick}>Large</Button>
                </div>
              </div>
              <div>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>Secondary</h3>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                  <Button variant="secondary" size="sm" onClick={handleClick}>Small</Button>
                  <Button variant="secondary" size="md" onClick={handleClick}>Medium</Button>
                  <Button variant="secondary" size="lg" onClick={handleClick}>Large</Button>
                </div>
              </div>
              <div>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>Ghost</h3>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
                  <Button variant="ghost" size="sm" onClick={handleClick}>Small</Button>
                  <Button variant="ghost" size="md" onClick={handleClick}>Medium</Button>
                  <Button variant="ghost" size="lg" onClick={handleClick}>Large</Button>
                </div>
              </div>
            </div>
          </section>

          {/* States Section */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>States</h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <Button onClick={handleClick}>Normal</Button>
              <Button disabled onClick={handleClick}>Disabled</Button>
              <Button loading onClick={handleClick}>Loading</Button>
            </div>
          </section>

          {/* Link Buttons Section */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>Link Buttons</h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
              <Button href="/" variant="primary">Link Primary</Button>
              <Button href="/" variant="secondary">Link Secondary</Button>
              <Button href="/" variant="ghost">Link Ghost</Button>
            </div>
          </section>

          {/* Accessibility Section */}
          <section style={{ marginBottom: "3rem" }}>
            <h2 style={{ marginBottom: "1rem" }}>Accessibility</h2>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
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
