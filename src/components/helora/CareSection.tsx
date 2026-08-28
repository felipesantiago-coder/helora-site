export const CARE_PILLARS = [
  {
    number: '01',
    title: 'Tempo de verdade',
    description: 'No ritmo que o seu momento pede, nunca apressado.',
  },
  {
    number: '02',
    title: 'Escuta antes de tudo',
    description: 'Entende a fala, não silencia o sintoma.',
  },
  {
    number: '03',
    title: 'Cuidado que se conecta',
    description: 'Psicologia, neuropsicologia e, em breve, novas áreas.',
  },
  {
    number: '04',
    title: 'Ambiente que acolhe',
    description: 'Sereno e confortável; o cuidado começa pela sensação.',
  },
] as const;

export function CareSection() {
  return (
    <section id="cuidar" className="section-padding bg-[#F0EBE3]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[700px] mb-16">
          <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
            Nossa forma de cuidar
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-[#2C2C2C] leading-[1.2] mb-4 text-balance">
            O tempo de quem tem tempo para você.
          </h2>
          <p className="font-sans text-[0.95rem] sm:text-base text-[#5A5A5A] leading-[1.8]">
            O que faz a diferença não é só quem cuida, é como.
          </p>
        </div>

        {/* Intro paragraph */}
        <p className="font-sans text-[0.95rem] sm:text-base text-[#5A5A5A] leading-[1.8] max-w-[800px] mb-14">
          Sessões que não têm relógio na parede correndo contra você. Uma escuta que acolhe antes de orientar. Um ambiente pensado para acalmar desde a porta. E, cada vez mais, diferentes especialistas conversando entre si para cuidar de você sem que você precise recomeçar a história a cada porta.
        </p>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {CARE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white rounded-2xl p-8 border border-[#E8E4DD] hover:shadow-md transition-shadow duration-300"
            >
              <span className="font-serif text-[2.5rem] text-[#E8E4DD] leading-none block mb-4">
                {pillar.number}
              </span>
              <h3 className="font-serif text-[1.1rem] sm:text-[1.15rem] text-[#2C2C2C] mb-3 leading-tight">
                {pillar.title}
              </h3>
              <p className="font-sans text-[0.875rem] text-[#6B6B6B] leading-[1.7]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
