import { MapPin, Navigation } from 'lucide-react';

const ADDRESS = 'SEPS 707/907 Conjunto E Sala 214, Edifício San Marino, Asa Sul, Brasília — DF';
const MAPS_EMBED =
  'https://maps.google.com/maps?q=SEPS+707%2F907+Conjunto+E+Sala+214+Edif%C3%ADcio+San+Marino+Asa+Sul+Bras%C3%ADlia+DF&t=&z=16&ie=UTF8&iwloc=&output=embed';
const MAPS_LINK =
  'https://www.google.com/maps/search/SEPS+707%2F907+Conjunto+E+Sala+214+Edif%C3%ADcio+San+Marino+Asa+Sul+Bras%C3%ADlia+DF';

export function LocationSection() {
  return (
    <section id="localizacao" className="section-padding bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[700px] mb-14">
          <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
            Localização
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-[#2C2C2C] leading-[1.2] mb-4 text-balance">
            Onde estamos
          </h2>
          <p className="font-sans text-[0.95rem] sm:text-base text-[#5A5A5A] leading-[1.8]">
            Nosso espaço fica na Asa Sul, em Brasília, de fácil acesso e pensado para seu conforto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr] lg:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-start">
          {/* Address card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <div className="flex items-start gap-3 mb-5">
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#9C6146]/10 shrink-0">
                <MapPin size={18} className="text-[#9C6146]" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-[1.1rem] sm:text-[1.2rem] text-[#2C2C2C] leading-tight">
                  Endereço
                </h3>
                <p className="font-sans text-[12px] text-[#A39B82] mt-0.5 tracking-wide uppercase">
                  Asa Sul, Brasília, DF
                </p>
              </div>
            </div>

            <address className="font-sans text-[0.9rem] text-[#5A5A5A] leading-[1.7] not-italic mb-8 pl-[52px]">
              {ADDRESS}
            </address>

            <div className="pl-[52px]">
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-[13px] tracking-[0.06em] font-medium px-6 py-3 rounded-full bg-[#9C6146] text-white hover:bg-[#8A563D] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9C6146]/50"
              >
                <Navigation size={15} aria-hidden="true" />
                Abrir no Google Maps
                <span className="sr-only">(abre em nova janela)</span>
              </a>
            </div>
          </div>

          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.04)] h-full min-h-[300px] md:min-h-[400px]">
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Helora Saúde Integrada no Google Maps"
              className="w-full h-full min-h-[300px] md:min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
