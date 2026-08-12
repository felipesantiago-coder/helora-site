'use client';

import dynamic from 'next/dynamic';
import { Header } from '@/components/helora/Header';
import { ConceptSection } from '@/components/helora/ConceptSection';
import { ServicesSection } from '@/components/helora/ServicesSection';
import { ConveniosSection } from '@/components/helora/ConveniosSection';
import { TeamSection } from '@/components/helora/TeamSection';
import { TestimonialsSection } from '@/components/helora/TestimonialsSection';
import { CTASection } from '@/components/helora/CTASection';
import { Footer } from '@/components/helora/Footer';
import { OrganicDivider } from '@/components/helora/OrganicDivider';

/* ── Lazy load heavy components ── */
const HeroSection = dynamic(
  () => import('@/components/helora/HeroSection').then((m) => ({ default: m.HeroSection })),
  {
    ssr: false,
    loading: () => <HeroFallback />,
  }
);

function HeroFallback() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #141E03, #283107)' }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="font-serif font-light text-[1.85rem] sm:text-[2.75rem] md:text-5xl lg:text-6xl text-white tracking-tight text-balance leading-[1.2] mb-6">
          Cuidar de você é
          <br />
          <span className="text-white/60">nossa essência.</span>
        </h1>
        <p className="font-sans text-white/60 text-[0.938rem] sm:text-base md:text-[1.063rem] max-w-md mx-auto mb-10 leading-relaxed">
          Um espaço de acolhimento onde você pode respirar, ser ouvido e cuidar de si.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <HeroSection />
        <ConceptSection />
        <OrganicDivider variant="leaf" />
        <ServicesSection />
        <OrganicDivider variant="sage" />
        <ConveniosSection />
        <TeamSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
