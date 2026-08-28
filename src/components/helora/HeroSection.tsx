'use client';

import { HeloraOrganicO } from '@/components/helora/HeloraOrganicO';
import { getWhatsAppLink } from '@/lib/utils';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-background.jpeg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Floating organic O — decorative background element */}
      <HeloraOrganicO
        size={320}
        className="absolute top-[15%] right-[-5%] text-white/[0.04] pointer-events-none hidden md:block"
      />
      <HeloraOrganicO
        size={200}
        className="absolute bottom-[12%] left-[-3%] text-white/[0.03] pointer-events-none hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h1 className="font-serif font-light text-[2.75rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] text-white tracking-[-0.02em] leading-[1.1] mb-6 text-balance">
          Cuidar de você é a nossa essência.
        </h1>
        <p className="font-sans text-white/90 text-[0.95rem] sm:text-base md:text-[1.05rem] max-w-lg mx-auto mb-10 leading-relaxed">
          Um espaço de saúde integrada onde você pode respirar,
          ser ouvido e cuidar de si por inteiro.
        </p>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-sans text-[13px] tracking-[0.1em] uppercase font-medium px-8 py-3.5 rounded-full bg-white text-[#2C2C2C] hover:bg-white/90 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          Marcar uma conversa
        </a>
      </div>
    </section>
  );
}
