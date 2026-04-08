import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import Services from '@/components/Services';
import MeshTechSpecs from '@/components/MeshTechSpecs';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Trust />
        <Services />
        <MeshTechSpecs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
