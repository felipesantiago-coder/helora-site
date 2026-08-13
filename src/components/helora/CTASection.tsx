'use client';

import { MessageCircle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { OrganicNatureBg } from './OrganicNatureBg';
import { getWhatsAppLink } from '@/lib/utils';

export function CTASection() {
  return (
    <section id="agendamento" className="relative overflow-hidden py-16 md:py-28">
      <OrganicNatureBg variant="soil" />

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <ScrollReveal>
          <h2 className="font-serif font-normal text-3xl md:text-5xl text-helora-dark-coffee tracking-tight text-balance mb-6">
            Vamos começar?
          </h2>
          <p className="font-sans text-helora-tan text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
            O primeiro passo é conversar. Estamos aqui.
          </p>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill inline-flex items-center gap-2 bg-helora-sage text-white font-medium py-3 px-8 sm:py-3.5 sm:px-9 hover:bg-helora-dark-green transition-[color,background-color,transform] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50 text-[15px] sm:text-base shadow-organic-lg active:scale-[0.98]"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Agendar sessão
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
