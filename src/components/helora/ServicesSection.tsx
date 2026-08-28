export const SERVICES = [
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
] as const;

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

        {/* Services list */}
        <div className="space-y-0">
          {SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={`py-8 sm:py-10 ${index < SERVICES.length - 1 ? 'border-b border-[#E8E4DD]' : ''}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8">
                <h3 className="font-serif text-[1.15rem] sm:text-[1.25rem] text-[#2C2C2C] leading-tight shrink-0 sm:w-[320px]">
                  {service.title}
                </h3>
                <p className="font-sans text-[0.95rem] sm:text-base text-[#5A5A5A] leading-[1.8]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
