import { HeloraOrganicO } from '@/components/helora/HeloraOrganicO';

const COMING_SOON: { title: string; description: string }[] = [
  {
    title: 'Nutrição',
    description:
      'Alimentação com acolhimento, sem culpa e sem dietas da moda.',
  },
  {
    title: 'Fonoaudiologia',
    description:
      'Cuidado com a comunicação, a fala e o desenvolvimento.',
  },
  {
    title: 'Fisioterapia',
    description: 'O corpo também guarda histórias. Movimento que cura.',
  },
];

export function ComingSoonSection() {
  return (
    <section className="section-padding bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[700px] mb-14">
          <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
            Em breve na Helora
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-[#2C2C2C] leading-[1.2] mb-4 text-balance">
            O cuidado integrado está crescendo.
          </h2>
          <p className="font-sans text-[0.95rem] sm:text-base text-[#5A5A5A] leading-[1.8]">
            Novas formas de cuidar de você, chegando aos poucos à Helora.
          </p>
        </div>

        <p className="font-sans text-[0.95rem] sm:text-base text-[#5A5A5A] leading-[1.8] max-w-[800px] mb-14">
          Acreditamos que cuidar da mente e cuidar do corpo fazem parte da mesma história. Por isso, a Helora está se preparando para reunir, no mesmo lugar, novos especialistas, para que o seu cuidado seja cada vez mais completo.
        </p>

        {/* Coming soon cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {COMING_SOON.map((item) => (
            <div
              key={item.title}
              className="relative overflow-hidden bg-[#F0EBE3] rounded-2xl p-8 border border-[#E8E4DD]"
            >
              <span className="inline-block font-sans text-[11px] tracking-[0.12em] uppercase text-[#9C6146] font-medium px-3 py-1 rounded-full bg-[#9C6146]/10 mb-5">
                Em breve
              </span>
              <h3 className="font-serif text-[1.2rem] text-[#2C2C2C] mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="font-sans text-[0.875rem] text-[#6B6B6B] leading-[1.7] relative z-10">
                {item.description}
              </p>
              {/* Watermark organic O */}
              <HeloraOrganicO
                size={120}
                className="absolute -bottom-4 -right-4 text-[#A39B82]/[0.08] pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
