import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import AppShowcase from '@/components/AppShowcase';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AppShowcase />
      <Footer />
    </main>
  );
}
