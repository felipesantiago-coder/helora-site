import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

const SERVICES = [
  {
    title: 'Palestras e workshops',
    description:
      'Temas como saúde mental no trabalho, parentalidade, manejo de ansiedade e estresse, inteligência emocional e outros, adaptados ao contexto e à necessidade da sua organização.',
    audience: 'Empresas, escolas e eventos',
    format: 'Presencial ou online',
  },
  {
    title: 'Consultoria organizacional',
    description:
      'Diagnóstico de clima organizacional, planejamento de programas de bem-estar e estratégias de cuidado com equipes, sempre com base em evidências e alinhados à realidade da empresa.',
    audience: 'RH, gestores e instituições',
    format: 'Presencial ou online',
  },
  {
    title: 'Supervisão clínica',
    description:
      'Supervisão individual ou em grupo para psicólogos, com foco em TCC, Terapia do Esquema, Neuropsicologia e Abordagem Centrada na Pessoa. Um espaço de crescimento técnico e ético.',
    audience: 'Psicólogos em formação ou atuação',
    format: 'Presencial ou online',
  },
  {
    title: 'Avaliações psicológicas para empresas',
    description:
      'Avaliações psicológicas e neuropsicológicas para processos seletivos, promoções, acompanhamento funcional e verificação de aptidão, com laudos técnicos completos.',
    audience: 'Departamentos de pessoas e RH',
    format: 'Presencial',
  },
  {
    title: 'Pareceres e laudos técnicos',
    description:
      'Laudos neuropsicológicos, pareceres técnicos e periciais para fins jurídicos, médicos ou institucionais, elaborados com rigor metodológico e ético.',
    audience: 'Instituições, advocacia e tribunais',
    format: 'Presencial + documento',
  },
  {
    title: 'Programas de bem-estar',
    description:
      'Pacotes periódicos de cuidado com a equipe: workshops contínuos, grupos de escuta, sessões de acompanhamento e relatórios de evolução, personalizados para cada organização.',
    audience: 'Empresas e convênios',
    format: 'Personalizado',
  },
] as const;

const DIFFERENTIALS = [
  {
    title: 'Equipe multidisciplinar',
    description:
      'Profissionais com especializações em TCC, Terapia do Esquema, Neuropsicologia e Psicologia Humanista.',
  },
  {
    title: 'Baseada em evidências',
    description:
      'Todas as abordagens e materiais são fundamentados em evidências científicas atualizadas.',
  },
  {
    title: 'Mais de 8.000 atendimentos',
    description:
      'Experiência clínica consolidada, aplicada agora em formato institucional e corporativo.',
  },
  {
    title: 'Formato flexível',
    description:
      'Presencial, online ou híbrido. Adaptamos o formato, o conteúdo e a carga horária à sua necessidade.',
  },
] as const;

export function EmpresasSection() {
  return (
    <section id="empresas" className="section-padding bg-[#F5F0EB]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-[700px] mb-14">
          <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
            Helora para Empresas
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] md:text-[2.75rem] text-[#2C2C2C] leading-[1.2] mb-4 text-balance">
            Cuidado que se multiplica.
          </h2>
          <p className="font-sans text-[0.95rem] sm:text-base text-[#5A5A5A] leading-[1.8]">
            Levamos saúde mental para onde as pessoas precisam: empresas, escolas, consultórios e instituições.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {SERVICES.map((service) => (
            <article
              key={service.title}
              className="bg-white rounded-2xl p-8 border border-[#E8E4DD] hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <h3 className="font-serif text-[1.1rem] sm:text-[1.15rem] text-[#2C2C2C] mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="font-sans text-[0.875rem] text-[#6B6B6B] leading-[1.7] flex-1">
                {service.description}
              </p>
              <div className="pt-5 mt-5 border-t border-[#E8E4DD]/60 flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#777F5C]/60 shrink-0" aria-hidden="true" />
                  <span className="font-sans text-[11px] text-[#6B6B6B]">{service.audience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A39B82]/60 shrink-0" aria-hidden="true" />
                  <span className="font-sans text-[11px] text-[#6B6B6B]">{service.format}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Differentials */}
        <div className="max-w-[700px] mb-16">
          <p className="font-sans text-[12px] tracking-[0.15em] uppercase text-[#A39B82] mb-4">
            Por que escolher a Helora
          </p>
          <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] text-[#2C2C2C] leading-[1.2] mb-4 text-balance">
            Referência em saúde mental em Brasília, agora para a sua organização.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-[900px] mb-20">
          {DIFFERENTIALS.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#777F5C]/10 flex items-center justify-center shrink-0">
                <span className="block w-1.5 h-1.5 rounded-full bg-[#777F5C]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-serif text-[1.05rem] text-[#2C2C2C] mb-1 leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-[0.875rem] text-[#6B6B6B] leading-[1.7]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-[700px]">
          <h2 className="font-serif text-[1.75rem] sm:text-[2.25rem] text-[#2C2C2C] leading-[1.2] mb-4 text-balance">
            Cada organização é diferente.
          </h2>
          <p className="font-sans text-[0.95rem] sm:text-base text-[#5A5A5A] leading-[1.8] mb-8">
            Conte-nos sobre a sua e vamos encontrar a melhor forma de ajudar.
          </p>
          <a
            href={getWhatsAppLink('institucional')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-[13px] tracking-[0.1em] uppercase font-medium px-8 py-3.5 rounded-full bg-[#777F5C] text-white hover:bg-[#283107] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Fale conosco
          </a>
        </div>
      </div>
    </section>
  );
}
