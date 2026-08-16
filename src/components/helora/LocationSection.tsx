'use client';

import { MapPin, Navigation } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { OrganicNatureBg } from './OrganicNatureBg';

const ADDRESS = 'SEPS 707/907 Conjunto E Sala 214, Edifício San Marino, Asa Sul, Brasília – DF';
const MAPS_EMBED = 'https://maps.google.com/maps?q=SEPS+707%2F907+Conjunto+E+Sala+214+Edif%C3%ADcio+San+Marino+Asa+Sul+Bras%C3%ADlia+DF&t=&z=16&ie=UTF8&iwloc=&output=embed';
const MAPS_LINK = 'https://www.google.com/maps/search/SEPS+707%2F907+Conjunto+E+Sala+214+Edif%C3%ADcio+San+Marino+Asa+Sul+Bras%C3%ADlia+DF';

export function LocationSection() {
  return (
    <section id="localizacao" className="bg-helora-white py-12 md:py-24 relative overflow-hidden">
      <OrganicNatureBg variant="understory" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <h2 className="font-serif font-normal text-2xl md:text-4xl text-helora-dark-green tracking-tight text-balance mb-4">
              Onde estamos
            </h2>
            <p className="font-sans text-helora-tan text-base md:text-lg leading-relaxed">
              Nosso espaço fica na Asa Sul, em Brasília — de fácil acesso e pensado para seu conforto.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Address card */}
          <ScrollReveal delay={0.1}>
            <div className="helora-card flex flex-col h-full">
              <div className="flex items-start gap-3 mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-helora-sage/15 shrink-0">
                  <MapPin size={18} className="text-helora-sage" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif font-normal text-xl text-helora-dark-green tracking-tight">
                    Endereço
                  </h3>
                  <p className="font-sans text-[13px] text-helora-tan mt-0.5 tracking-wide uppercase">
                    Asa Sul, Brasília – DF
                  </p>
                </div>
              </div>

              <address className="font-sans text-[15px] text-helora-dark-coffee leading-relaxed not-italic mb-6 pl-[52px]">
                {ADDRESS}
              </address>

              <div className="mt-auto pl-[52px]">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill inline-flex items-center gap-2 bg-helora-sage text-white text-sm font-medium px-5 py-2.5 hover:bg-helora-dark-green transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50"
                >
                  <Navigation size={15} aria-hidden="true" />
                  Abrir no Google Maps
                  <span className="sr-only">(abre em nova janela)</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Map embed */}
          <ScrollReveal delay={0.2}>
            <div className="helora-card overflow-hidden p-0 h-full min-h-[300px] md:min-h-0">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Helora Saúde Integrada no Google Maps"
                className="w-full h-full min-h-[300px] md:min-h-[360px] rounded-2xl"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
