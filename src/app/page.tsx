'use client';

import dynamic from 'next/dynamic';
import { Header } from '@/components/helora/Header';
import { AboutSection } from '@/components/helora/AboutSection';
import { CareSection } from '@/components/helora/CareSection';
import { ServicesSection } from '@/components/helora/ServicesSection';
import { TeamSection } from '@/components/helora/TeamSection';

/* ── Lazy load heavy / below-fold components ── */
const HeroSection = dynamic(
  () => import('@/components/helora/HeroSection').then((m) => ({ default: m.HeroSection })),
  { ssr: true, loading: () => <HeroFallback /> }
);

const ComingSoonSection = dynamic(
  () => import('@/components/helora/ComingSoonSection').then((m) => ({ default: m.ComingSoonSection })),
  { ssr: true }
);

const TrustSection = dynamic(
  () => import('@/components/helora/TrustSection').then((m) => ({ default: m.TrustSection })),
  { ssr: true }
);

const CTASection = dynamic(
  () => import('@/components/helora/CTASection').then((m) => ({ default: m.CTASection })),
  { ssr: true }
);

const Footer = dynamic(
  () => import('@/components/helora/Footer').then((m) => ({ default: m.Footer })),
  { ssr: true }
);

function HeroFallback() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#2C241C]"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <h1 className="font-serif font-light text-[2rem] sm:text-[3rem] text-white tracking-[-0.02em] leading-[1.15] mb-6">
          Cuidar de você é a nossa essência.
        </h1>
        <p className="font-sans text-white/70 text-base max-w-md mx-auto mb-10 leading-relaxed">
          Um espaço de saúde integrada onde você pode respirar, ser ouvido e cuidar de si por inteiro.
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
        <AboutSection />
        <CareSection />
        <ServicesSection />
        <TeamSection />
        <ComingSoonSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
