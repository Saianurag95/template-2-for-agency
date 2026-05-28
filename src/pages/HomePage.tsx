import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBand from '../components/TrustBand';
import PainPoints from '../components/PainPoints';
import Services from '../components/Services';
import DemoShowcase from '../components/DemoShowcase';
import Packages from '../components/Packages';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import BookingCTA from '../components/BookingCTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBand />
        <PainPoints />
        <Services />
        <DemoShowcase />
        <Packages />
        <Process />
        <Testimonials />
        <BookingCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
