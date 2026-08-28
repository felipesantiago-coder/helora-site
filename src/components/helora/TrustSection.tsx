const FEATURED_STAT = {
  number: '+8.000',
  label: 'atendimentos',
  description:
    'Experiências clínicas que se solidificam em cuidado, não em pressa.',
};

const TRUST_ITEMS: { label: string; description: string }[] = [
  {
    label: 'Profissionais certificados',
    description:
      'CRP ativa, formação contínua e prática baseada em evidências.',
  },
  {
    label: 'Sigilo e ética garantidos',
    description:
      'O que é dito aqui fica aqui. Dados protegidos pela LGPD.',
  },
  {
    label: 'Tempo e escuta de verdade',
    description:
      'Um tempo reservado só para você, com presença de verdade em cada encontro.',
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-[#2C241C]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[700px] mb-16">
          <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
            Por que a Helora
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-white leading-[1.2] text-balance">
            Confiança se constrói com verdade.
          </h2>
        </div>

        {/* Featured stat */}
        <div className="mb-14 pb-14 border-b border-white/[0.08]">
          <span className="block font-serif text-[3rem] sm:text-[4rem] md:text-[4.5rem] text-[#A39B82] leading-none tracking-[-0.02em]">
            {FEATURED_STAT.number}
          </span>
          <h3 className="font-sans text-[14px] tracking-[0.04em] font-medium text-white mt-3 mb-3 leading-tight">
            {FEATURED_STAT.label}
          </h3>
          <p className="font-sans text-[0.938rem] text-white/60 leading-[1.7] max-w-[480px]">
            {FEATURED_STAT.description}
          </p>
        </div>

        {/* Trust items — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="text-left">
              <h3 className="font-sans text-[14px] tracking-[0.02em] font-medium text-white mb-3 leading-tight">
                {item.label}
              </h3>
              <p className="font-sans text-[0.875rem] text-white/60 leading-[1.7]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
