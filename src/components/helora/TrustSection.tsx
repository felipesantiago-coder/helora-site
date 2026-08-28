export const TRUST_ITEMS = [
  {
    stat: '+8.000',
    label: 'atendimentos',
    description:
      'Experiências clínicas que se solidificam em cuidado, não em pressa.',
  },
  {
    stat: '',
    label: 'Profissionais certificados',
    description:
      'CRP ativa, formação contínua e prática baseada em evidências.',
  },
  {
    stat: '',
    label: 'Sigilo e ética garantidos',
    description:
      'O que é dito aqui fica aqui. Dados protegidos pela LGPD.',
  },
  {
    stat: '',
    label: 'Tempo e escuta de verdade',
    description:
      'Um tempo reservado só para você, com presença de verdade em cada encontro.',
  },
] as const;

export function TrustSection() {
  return (
    <section className="section-padding bg-[#2C241C]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-[700px] mb-16">
          <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
            Por que a Helora
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-white leading-[1.2] text-balance">
            Confiança se constrói com verdade.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="text-left">
              {item.stat && (
                <span className="block font-serif text-[2.5rem] sm:text-[3rem] text-[#A39B82] leading-none mb-4">
                  {item.stat}
                </span>
              )}
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
