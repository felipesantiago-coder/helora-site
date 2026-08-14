'use client';

import Image from 'next/image';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Header } from '@/components/helora/Header';
import { Footer } from '@/components/helora/Footer';
import { ALL_CONVENIOS } from '@/data/convenios';
import { getWhatsAppLink } from '@/lib/utils';

function ConvenioCard({ name, src }: { name: string; src: string | null }) {
  return (
    <div className="group relative flex flex-col items-center rounded-2xl overflow-hidden bg-white border border-helora-gainsboro/30 shadow-organic transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-helora-sage/50" role="listitem">
      <div className="relative w-full aspect-square p-3 sm:p-4">
        {src ? (
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt={`Logo ${name}`}
              fill
              sizes="(max-width: 639px) 50vw, (max-width: 767px) 33vw, 25vw"
              className="object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          <span className="font-sans text-xs sm:text-sm font-medium text-helora-tan text-center leading-tight select-none">
            {name}
          </span>
        )}
      </div>
      <div className="w-full flex items-center justify-center border-t border-helora-sage/20 bg-helora-antique-white/50 px-1.5 sm:px-2 py-2.5 sm:py-3">
        <span className="font-sans text-[11px] sm:text-xs font-semibold text-helora-dark-green text-center leading-snug tracking-wide line-clamp-2 block">
          {name}
        </span>
      </div>
    </div>
  );
}

export default function ConveniosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-helora-antique-white/40">
      <Header />

      <main id="main-content" className="flex-1 pt-20 sm:pt-16 md:pt-[72px]">
        {/* Page hero */}
        <section className="relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="w-[500px] h-[500px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(119,127,92,0.08) 0%, rgba(119,127,92,0) 70%)',
              }}
            />
          </div>

          <div className="max-w-5xl mx-auto px-4 py-12 sm:py-16 md:py-20 relative z-10">
            {/* Back link */}
            <a
              href="/"
              className="inline-flex items-center gap-1.5 font-sans text-sm text-helora-tan hover:text-helora-dark-green transition-colors duration-200 mb-8 sm:mb-12 focus:outline-none focus-visible:underline"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Voltar ao início
            </a>

            {/* Title block */}
            <div className="max-w-2xl">
              <h1 className="font-serif font-normal text-3xl sm:text-4xl md:text-5xl text-helora-dark-green tracking-tight text-balance leading-[1.2] mb-4">
                Convênios atendidos
              </h1>
              <p className="font-sans text-helora-tan text-base sm:text-lg leading-relaxed max-w-lg">
                Atendemos diversos planos de saúde para facilitar o seu acesso ao
                cuidado. Confira abaixo a lista completa.
              </p>
            </div>

            {/* Count badge */}
            <div className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-helora-sage/10 border border-helora-sage/20">
              <span className="w-2 h-2 rounded-full bg-helora-sage animate-pulse" />
              <span className="font-sans text-sm font-medium text-helora-sage">
                {ALL_CONVENIOS.length} convênios aceitos
              </span>
            </div>
          </div>
        </section>

        {/* Logo grid */}
        <section className="max-w-5xl mx-auto px-4 pb-16 sm:pb-20 md:pb-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5" role="list" aria-label="Lista de convênios aceitos">
            {ALL_CONVENIOS.map((item) => (
              <ConvenioCard key={item.name} name={item.name} src={item.src} />
            ))}
          </div>

          {/* CTA after grid */}
          <div className="mt-12 sm:mt-16 md:mt-20 text-center">
            <p className="font-sans text-helora-tan text-sm sm:text-base mb-6">
              Não encontrou seu plano? Entre em contato e verificamos para você.
            </p>
            <a
              href={getWhatsAppLink('convenio')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill inline-flex items-center gap-2 bg-helora-sage text-white text-sm sm:text-base font-medium px-6 sm:px-8 py-3 sm:py-3.5 hover:bg-helora-dark-green transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50"
            >
              <MessageCircle size={18} aria-hidden="true" />
              Perguntar pelo WhatsApp
              <span className="sr-only">(abre em nova janela)</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
