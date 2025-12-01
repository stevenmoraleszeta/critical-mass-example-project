import Header from '@/components/layout/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <div style={{ padding: '2rem', maxWidth: '1280px', margin: '0 auto' }}>
          <h1>Welcome to Steven Morales FE-01</h1>
          <p>This is the main landing page. Content sections will be added here.</p>
        </div>
      </main>
    </>
  );
}
