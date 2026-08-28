const PROFESSIONALS = [
  {
    name: 'Maria de Fátima Soares Correia',
    crp: 'CRP 01/25456',
    title: 'Psicóloga Clínica · Neuropsicologia',
    quote: 'Cuidar é um ato humano antes de ser técnico.',
    bio: [
      'Psicóloga clínica, especialista em Neuropsicologia e palestrante, dedico minha atuação à promoção da saúde mental com excelência técnica, ética e acolhimento. Ao longo da minha trajetória profissional, já realizei mais de 8.000 atendimentos clínicos, consolidando uma prática pautada em evidências científicas e no respeito à singularidade de cada paciente.',
      'Atendo crianças, adolescentes, adultos e idosos, oferecendo psicoterapia e avaliação neuropsicológica com foco na compreensão do funcionamento cognitivo, emocional e comportamental, contribuindo para diagnósticos precisos e intervenções individualizadas.',
      'Meu compromisso é proporcionar um ambiente seguro, ético e confidencial, promovendo autoconhecimento, equilíbrio emocional e qualidade de vida.',
    ],
    photo: '/fatima-profissional.jpeg',
  },
  {
    name: 'Juliana Santos Ribeiro Veras de Alencar',
    crp: 'CRP 01/25845 – DF',
    title: 'Psicóloga · TCC e Terapia do Esquema',
    quote: 'Um espaço seguro para se conhecer e se transformar.',
    bio: [
      'Atuo com Terapia Cognitivo-Comportamental (TCC) associada à Terapia do Esquema, abordagens baseadas em evidências científicas que promovem mudanças nos pensamentos, emoções e comportamentos. Enquanto a TCC trabalha as dificuldades do presente, a Terapia do Esquema auxilia na compreensão e transformação de padrões emocionais e crenças profundas.',
      'Realizo atendimento psicológico individual para adultos e idosos (a partir de 18 anos), com foco em ansiedade, depressão, autoestima, relacionamentos, perfeccionismo, medo de rejeição e desenvolvimento pessoal.',
      'Acredito em uma psicoterapia acolhedora, ética e sem julgamentos, oferecendo um espaço seguro para o autoconhecimento, o fortalecimento emocional e a construção de uma vida mais saudável e equilibrada.',
    ],
    photo: '/juliana-profissional.jpeg',
  },
  {
    name: 'Elizângela Brito',
    crp: 'CRP 01/25.683',
    title: 'Psicóloga Clínica · Neuropsicóloga · Avaliação',
    quote: 'Um olhar humano, que respeita a singularidade de cada pessoa.',
    bio: [
      'Sou psicóloga clínica, especialista em Psicologia Humanista com Abordagem Centrada na Pessoa e em Neuropsicologia. Atuo com psicoterapia para crianças, adolescentes, adultos e idosos, ofereço um atendimento humanizado, ético e baseado em evidências, promovendo saúde mental, autoconhecimento e qualidade de vida, respeitando a singularidade de cada pessoa e auxiliando no desenvolvimento de recursos para enfrentar desafios e alcançar seu potencial.',
      'Realizo Avaliações Psicológicas e Neuropsicológicas de crianças, adolescentes, adultos e idosos, utilizando entrevistas e instrumentos padronizados para investigar o funcionamento cognitivo, emocional e comportamental, auxiliando no diagnóstico, planejamento terapêutico e reabilitação.',
      'A avaliação neuropsicológica é indicada para investigação de condições como TDAH, Transtorno do Espectro Autista (TEA), dificuldades de aprendizagem, alterações de memória, demências, doenças neurológicas e outras condições que impactam o funcionamento cognitivo e emocional.',
    ],
    photo: '/elizangela-profissional.jpeg',
  },
] as const;

export function TeamSection() {
  return (
    <section id="equipe" className="section-padding bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[700px] mb-16 md:mb-20">
          <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
            Equipe
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-[#2C2C2C] leading-[1.2] text-balance">
            Profissionais que cuidam de verdade.
          </h2>
        </div>

        {/* Professionals */}
        <div className="space-y-16 md:space-y-20">
          {PROFESSIONALS.map((person, index) => (
            <article
              key={person.name}
              className={`grid grid-cols-1 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr] gap-8 md:gap-12 lg:gap-16 items-start ${
                index > 0 ? 'pt-16 md:pt-20 border-t border-[#E8E4DD]' : ''
              }`}
            >
              {/* Photo + Identity column */}
              <div className="w-full md:w-auto">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="font-serif text-[1.15rem] sm:text-[1.25rem] text-[#2C2C2C] leading-tight">
                    {person.name}
                  </h3>
                  <p className="font-sans text-[12px] text-[#999] mt-1">
                    {person.crp}
                  </p>
                  <p className="font-sans text-[13px] tracking-[0.04em] text-[#777F5C] font-medium mt-2">
                    {person.title}
                  </p>
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-col">
                {/* Quote */}
                <p className="font-serif italic text-[1.05rem] sm:text-[1.15rem] md:text-[1.25rem] text-[#5A5A5A] leading-[1.6] mb-6 md:mb-8">
                  {person.quote}
                </p>

                {/* Bio paragraphs */}
                <div className="space-y-4">
                  {person.bio.map((paragraph, i) => (
                    <p
                      key={i}
                      className="font-sans text-[0.9rem] sm:text-[0.938rem] text-[#5A5A5A] leading-[1.85]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
