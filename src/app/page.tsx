import MainLayout from '@/components/layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
        <div className="container" style={{ padding: '2rem', textAlign: 'center', width: '100%' }}>
          <h1>Welcome to Steven Morales FE-01</h1>
          <p>This is the main landing page. Content sections will be added here.</p>
        </div>
    </MainLayout>
  );
}
