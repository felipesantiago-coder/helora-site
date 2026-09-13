import { Header } from '@/components/helora/Header';
import { HeroSection } from '@/components/helora/HeroSection';
import { AboutSection } from '@/components/helora/AboutSection';
import { CareSection } from '@/components/helora/CareSection';
import { ServicesSection } from '@/components/helora/ServicesSection';
import { TeamSection } from '@/components/helora/TeamSection';
import { ComingSoonSection } from '@/components/helora/ComingSoonSection';
import { TrustSection } from '@/components/helora/TrustSection';
import { ReviewsSection } from '@/components/helora/ReviewsSection';
import { LocationSection } from '@/components/helora/LocationSection';
import { CTASection } from '@/components/helora/CTASection';
import { Footer } from '@/components/helora/Footer';
import { WhatsAppFAB } from '@/components/helora/WhatsAppFAB';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <CareSection />
        <ServicesSection />
        <TeamSection />
        <ComingSoonSection />
        <TrustSection />
        <ReviewsSection />
        <LocationSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
