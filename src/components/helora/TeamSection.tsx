'use client';

import { useState, useCallback } from 'react';
import { Heart, ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { OrganicNatureBg } from './OrganicNatureBg';
import { cn } from '@/lib/utils';

interface Professional {
  id: string;
  name: string;
  registration: string;
  title: string;
  summary: string;
  fullBio: string;
}

const PROFESSIONALS: Professional[] = [
  {
    id: '1',
    name: 'Maria de Fátima Soares Correia',
    registration: 'CRP 01/25456 – DF',
    title: 'Psicóloga Clínica · Neuropsicologia',
    summary:
      'Especialista em Neuropsicologia com mais de 8.000 atendimentos clínicos. Atende crianças, adolescentes, adultos e idosos com psicoterapia e avaliação neuropsicológica focadas no funcionamento cognitivo, emocional e comportamental.',
    fullBio:
      'Psicóloga clínica, especialista em Neuropsicologia e palestrante, dedico minha atuação à promoção da saúde mental com excelência técnica, ética e acolhimento. Ao longo da minha trajetória profissional, já realizei mais de 8.000 atendimentos clínicos, consolidando uma prática pautada em evidências científicas e no respeito à singularidade de cada paciente.\n\nAtendo crianças, adolescentes, adultos e idosos, oferecendo psicoterapia e avaliação neuropsicológica com foco na compreensão do funcionamento cognitivo, emocional e comportamental, contribuindo para diagnósticos precisos e intervenções individualizadas.\n\nMeu compromisso é proporcionar um ambiente seguro, ético e confidencial, promovendo autoconhecimento, equilíbrio emocional e qualidade de vida.',
  },
  {
    id: '2',
    name: 'Juliana Santos Ribeiro Veras de Alencar',
    registration: 'CRP 01/25845 – DF',
    title: 'Psicóloga · TCC e Terapia do Esquema',
    summary:
      'Atua com Terapia Cognitivo-Comportamental e Terapia do Esquema para adultos e idosos a partir de 18 anos, com foco em ansiedade, depressão, autoestima, relacionamentos e desenvolvimento pessoal.',
    fullBio:
      'Atuo com Terapia Cognitivo-Comportamental (TCC) associada à Terapia do Esquema, abordagens baseadas em evidências científicas que promovem mudanças nos pensamentos, emoções e comportamentos. Enquanto a TCC trabalha as dificuldades do presente, a Terapia do Esquema auxilia na compreensão e transformação de padrões emocionais e crenças profundas.\n\nRealizo atendimento psicológico individual para adultos e idosos (a partir de 18 anos), com foco em ansiedade, depressão, autoestima, relacionamentos, perfeccionismo, medo de rejeição e desenvolvimento pessoal.\n\nAcredito em uma psicoterapia acolhedora, ética e sem julgamentos, oferecendo um espaço seguro para o autoconhecimento, o fortalecimento emocional e a construção de uma vida mais saudável e equilibrada.',
  },
  {
    id: '3',
    name: 'Elizângela Brito',
    registration: 'CRP 01/25.683 – DF',
    title: 'Psicóloga Clínica · Neuropsicóloga',
    summary:
      'Especialista em Psicologia Humanista (Abordagem Centrada na Pessoa) e Neuropsicologia. Realiza avaliações psicológicas e neuropsicológicas para TDAH, TEA, dificuldades de aprendizagem, alterações de memória e demências.',
    fullBio:
      'Sou psicóloga clínica, especialista em Psicologia Humanista com Abordagem Centrada na Pessoa e em Neuropsicologia.\n\nAtuo com psicoterapia para crianças, adolescentes, adultos e idosos, ofereço um atendimento humanizado, ético e baseado em evidências, promovendo saúde mental, autoconhecimento e qualidade de vida, respeitando a singularidade de cada pessoa e auxiliando no desenvolvimento de recursos para enfrentar desafios e alcançar seu potencial.\n\nRealizo Avaliações Psicológicas e Neuropsicológicas de crianças, adolescentes, adultos e idosos, utilizando entrevistas e instrumentos padronizados para investigar o funcionamento cognitivo, emocional e comportamental, auxiliando no diagnóstico, planejamento terapêutico e reabilitação.\n\nA avaliação neuropsicológica é indicada para investigação de condições como TDAH, Transtorno do Espectro Autista (TEA), dificuldades de aprendizagem, alterações de memória, demências, doenças neurológicas e outras condições que impactam o funcionamento cognitivo e emocional.',
  },
];

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function ProfessionalCard({ person, index }: { person: Professional; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const bioId = `bio-${person.id}`;

  const toggle = useCallback(() => setExpanded((prev) => !prev), []);

  return (
    <ScrollReveal delay={index * 0.1}>
      <article className="helora-card flex flex-col hover:shadow-organic-lg transition-shadow duration-300 relative overflow-hidden" aria-label={person.name}>
        {/* Left organic border */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px]" aria-hidden="true">
          <svg
            width="3"
            height="100%"
            viewBox="0 0 3 200"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 0 Q0 50, 2.5 100 Q3 150, 1.5 200"
              stroke="#777F5C"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Header: avatar + name + title */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-helora-sage/20 to-helora-sage/10 flex items-center justify-center shrink-0 border border-helora-sage/10">
            <span className="font-serif text-base text-helora-sage font-normal">
              {getInitials(person.name)}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif font-normal text-lg text-helora-dark-coffee tracking-tight leading-tight">
              {person.name}
            </h3>
            <p className="font-sans text-xs text-helora-tan mt-0.5 tracking-wide uppercase">
              {person.registration}
            </p>
          </div>
        </div>

        {/* Specialty badge */}
        <div className="mt-3">
          <span className="inline-flex items-center gap-1.5 bg-helora-sienna/8 rounded-full px-2.5 py-0.5 border border-helora-sienna/10">
            <Heart size={13} className="text-helora-sienna" aria-hidden="true" />
            <span className="font-sans text-[13px] font-medium text-helora-sienna">
              {person.title}
            </span>
          </span>
        </div>

        {/* Summary text */}
        <p className="font-sans text-[14px] text-helora-tan leading-relaxed mt-3">
          {person.summary}
        </p>

        {/* Expandable full bio */}
        <div
          id={bioId}
          className={cn(
            'grid transition-[grid-template-rows] duration-500 ease-in-out',
            expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          )}
        >
          <div className="overflow-hidden">
            <div className="pt-2 border-t border-helora-sage/10 mt-3">
              {person.fullBio.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans text-[13px] text-helora-tan/80 leading-relaxed mt-2 first:mt-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle button */}
        <button
          type="button"
          onClick={toggle}
          className="mt-3 flex items-center gap-1.5 font-sans text-[13px] font-medium text-helora-sage hover:text-helora-dark-green transition-colors duration-200 group w-fit"
          aria-expanded={expanded}
          aria-controls={bioId}
        >
          <span>{expanded ? 'Recolher' : 'Ler mais'}</span>
          <ChevronDown
            size={15}
            className={cn(
              'transition-transform duration-300',
              expanded && 'rotate-180'
            )}
            aria-hidden="true"
          />
        </button>

        {/* Corner decoration */}
        <div
          className="absolute bottom-0 right-0 pointer-events-none opacity-[0.04]"
          aria-hidden="true"
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M80 80 Q50 70, 40 40 Q35 20, 50 5 Q65 15, 70 40 Q75 60, 80 80Z"
              fill="#777F5C"
            />
          </svg>
        </div>
      </article>
    </ScrollReveal>
  );
}

export function TeamSection() {
  return (
    <section id="equipe" className="bg-helora-white py-12 md:py-24 relative overflow-hidden">
      <OrganicNatureBg variant="forest-floor" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <h2 className="font-serif font-normal text-2xl md:text-4xl text-helora-dark-green tracking-tight text-balance mb-4">
              Quem te acompanha
            </h2>
            <p className="font-sans text-helora-tan text-base md:text-lg leading-relaxed">
              Quem cuida de você aqui dentro.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {PROFESSIONALS.map((person, index) => (
            <ProfessionalCard key={person.id} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
