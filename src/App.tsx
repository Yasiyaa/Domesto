import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustFeatures } from './components/TrustFeatures';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ServicesGrid } from './components/ServicesGrid';
import { PopularServices } from './components/PopularServices';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PricingSection } from './components/PricingSection';
import { NDISSection } from './components/NDISSection';
import { ProcessSection } from './components/ProcessSection';
import { TeamSection } from './components/TeamSection';
import { Testimonials } from './components/Testimonials';
import { ProjectsGallery } from './components/ProjectsGallery';
import { QualitySection } from './components/QualitySection';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { CookieConsent } from './components/CookieConsent';
import { BackToTop } from './components/BackToTop';
import { BookingModal } from './components/BookingModal';
import { LegalModal } from './components/LegalModal';
import { SmoothScroll } from './components/SmoothScroll';

export function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | undefined>(undefined);
  const [legalModal, setLegalModal] = useState<{ title: string | null; content: string | null }>({
    title: null,
    content: null
  });

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName);
    setBookingModalOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-sky-200 selection:text-domesto-navy">
        {/* Navigation Header */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Main Content Sections */}
        <main>
          {/* 1. Hero Section */}
          <Hero onOpenBooking={() => handleOpenBooking()} />

          {/* 2. Trust Feature Cards */}
          <TrustFeatures onOpenBooking={() => handleOpenBooking()} />

          {/* 3. Statistics Counter */}
          <StatsSection />

          {/* 4. About Section */}
          <AboutSection onOpenBooking={() => handleOpenBooking()} />

          {/* 5. Main Services Grid + Detail Modal */}
          <ServicesGrid onOpenBooking={handleOpenBooking} />

          {/* 6. Popular Services Highlight */}
          <PopularServices onOpenBooking={handleOpenBooking} />

          {/* 7. Why Choose Domesto */}
          <WhyChooseUs />

          {/* 8. Pricing Section */}
          <PricingSection onOpenBooking={handleOpenBooking} />

          {/* 9. NDIS Dedicated Section */}
          <NDISSection onOpenBooking={handleOpenBooking} />

          {/* 10. Process Section */}
          <ProcessSection />

          {/* 11. Team Showcase */}
          <TeamSection />

          {/* 12. Testimonials Carousel */}
          <Testimonials />

          {/* 13. Projects Gallery & Interactive Before/After Slider */}
          <ProjectsGallery onOpenBooking={handleOpenBooking} />

          {/* 14. Work Quality Metrics */}
          <QualitySection />

          {/* 15. Inline Booking Section */}
          <BookingSection initialService={selectedServiceForBooking} />

          {/* 16. Contact Section & Map */}
          <ContactSection onOpenBooking={() => handleOpenBooking()} />
        </main>

        {/* Footer */}
        <Footer
          onOpenBooking={handleOpenBooking}
          onOpenLegalModal={(title, content) => setLegalModal({ title, content })}
        />

        {/* Global Interactive Overlays */}
        <StickyMobileBar onOpenBooking={() => handleOpenBooking()} />
        <CookieConsent />
        <BackToTop />

        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          serviceName={selectedServiceForBooking}
        />

        <LegalModal
          title={legalModal.title}
          content={legalModal.content}
          onClose={() => setLegalModal({ title: null, content: null })}
        />
      </div>
    </SmoothScroll>
  );
}

export default App;
