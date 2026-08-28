import { HeloraOrganicO } from '@/components/helora/HeloraOrganicO';

const SERVICES: { title: string; description: string }[] = [
  {
    title: 'Psicologia clínica',
    description:
      'O acompanhamento psicoterapêutico que está no coração da Helora, no cuidado com o que você sente e vive.',
  },
  {
    title: 'Terapia Cognitivo-Comportamental (TCC)',
    description:
      'Uma abordagem prática e baseada em evidências para lidar com pensamentos, emoções e comportamentos do presente.',
  },
  {
    title: 'Terapia do Esquema',
    description:
      'Um olhar mais profundo para os padrões e crenças que se repetem, ajudando você a transformá-los.',
  },
  {
    title: 'Avaliação psicológica',
    description:
      'Um processo cuidadoso para compreender melhor você e apoiar escolhas, encaminhamentos e caminhos.',
  },
  {
    title: 'Avaliação neuropsicológica',
    description:
      'Uma investigação ampla das funções cognitivas, emocionais e comportamentais, que integra diferentes aspectos do funcionamento individual para compreender demandas, potencialidades e necessidades de cuidado.',
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[700px] mb-14">
          <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
            Nossas especialidades
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-[#2C2C2C] leading-[1.2] mb-4 text-balance">
            O cuidado que você encontra na Helora.
          </h2>
          <p className="font-sans text-[0.95rem] sm:text-base text-[#5A5A5A] leading-[1.8]">
            A psicologia é o coração da Helora. Estas são as especialidades que acompanham você, no que você sente e no que você vive.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="relative overflow-hidden rounded-2xl bg-white border border-[#E8E4DD] p-7 sm:p-8"
            >
              {/* Small organic O icon */}
              <HeloraOrganicO
                size={28}
                className="text-[#777F5C] mb-5"
              />

              <h3 className="font-serif text-[1.1rem] sm:text-[1.15rem] text-[#2C2C2C] leading-tight mb-3">
                {service.title}
              </h3>
              <p className="font-sans text-[0.875rem] sm:text-[0.9rem] text-[#5A5A5A] leading-[1.75] relative z-10">
                {service.description}
              </p>

              {/* Large watermark O — bottom right */}
              <HeloraOrganicO
                size={140}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 text-[#777F5C]/[0.06] pointer-events-none"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
