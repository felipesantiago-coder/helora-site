'use client';

import { MessageCircle } from 'lucide-react';
import { Header } from '@/components/helora/Header';
import { Footer } from '@/components/helora/Footer';
import { ScrollReveal } from '@/components/helora/ScrollReveal';
import { OrganicNatureBg } from '@/components/helora/OrganicNatureBg';
import { getWhatsAppLink } from '@/lib/utils';

const SERVICES = [
  {
    id: 'palestras',
    icon: 'mic' as const,
    title: 'Palestras e workshops',
    description:
      'Temas como saúde mental no trabalho, parentalidade, manejo de ansiedade e estresse, inteligência emocional e outros, adaptados ao contexto e à necessidade da sua organização.',
    audience: 'Empresas, escolas e eventos',
    format: 'Presencial ou online',
  },
  {
    id: 'consultoria',
    icon: 'building' as const,
    title: 'Consultoria organizacional',
    description:
      'Diagnóstico de clima organizacional, planejamento de programas de bem-estar e estratégias de cuidado com equipes, sempre com base em evidências e alinhados à realidade da empresa.',
    audience: 'RH, gestores e instituições',
    format: 'Presencial ou online',
  },
  {
    id: 'supervisao',
    icon: 'users' as const,
    title: 'Supervisão clínica',
    description:
      'Supervisão individual ou em grupo para psicólogos, com foco em TCC, Terapia do Esquema, Neuropsicologia e Abordagem Centrada na Pessoa. Um espaço de crescimento técnico e ético.',
    audience: 'Psicólogos em formação ou atuação',
    format: 'Presencial ou online',
  },
  {
    id: 'avaliacoes',
    icon: 'clipboard' as const,
    title: 'Avaliações psicológicas para empresas',
    description:
      'Avaliações psicológicas e neuropsicológicas para processos seletivos, promoções, acompanhamento funcional e verificação de aptidão, com laudos técnicos completos.',
    audience: 'Departamentos de pessoas e RH',
    format: 'Presencial',
  },
  {
    id: 'laudos',
    icon: 'file' as const,
    title: 'Pareceres e laudos técnicos',
    description:
      'Laudos neuropsicológicos, pareceres técnicos e periciais para fins jurídicos, médicos ou institucionais, elaborados com rigor metodológico e ético.',
    audience: 'Instituições, advocacia e tribunais',
    format: 'Presencial + documento',
  },
  {
    id: 'bem-estar',
    icon: 'heart' as const,
    title: 'Programas de bem-estar',
    description:
      'Pacotes periódicos de cuidado com a equipe: workshops contínuos, grupos de escuta, sessões de acompanhamento e relatórios de evolução, personalizados para cada organização.',
    audience: 'Empresas e convênios',
    format: 'Personalizado',
  },
];

const DIFFERENTIALS = [
  {
    icon: 'team' as const,
    title: 'Equipe multidisciplinar',
    description: 'Profissionais com especializações em TCC, Terapia do Esquema, Neuropsicologia e Psicologia Humanista.',
  },
  {
    icon: 'evidence' as const,
    title: 'Baseada em evidências',
    description: 'Todas as abordagens e materiais são fundamentados em evidências científicas atualizadas.',
  },
  {
    icon: 'experience' as const,
    title: 'Mais de 8.000 atendimentos',
    description: 'Experiência clínica consolidada, aplicada agora em formato institucional e corporativo.',
  },
  {
    icon: 'flexible' as const,
    title: 'Formato flexível',
    description: 'Presencial, online ou híbrido. Adaptamos o formato, o conteúdo e a carga horária à sua necessidade.',
  },
];

/* SVG icons to keep the page self-contained and consistent */
function ServiceIcon({ type, className }: { type: string; className?: string }) {
  const cls = className ?? 'w-5 h-5';
  switch (type) {
    case 'mic':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" /></svg>
      );
    case 'building':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
      );
    case 'users':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      );
    case 'clipboard':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>
      );
    case 'file':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>
      );
    case 'heart':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
      );
    case 'team':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      );
    case 'evidence':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /><path d="M11 8v6" /><path d="M8 11h6" /></svg>
      );
    case 'experience':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="m17 5-5-3-5 3" /><path d="M17 5l5 3-5 3" /><path d="M7 5L2 8l5 3" /><circle cx="12" cy="15" r="5" /></svg>
      );
    case 'flexible':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18" /><rect width="18" height="18" x="3" y="3" rx="2" /></svg>
      );
    default:
      return null;
  }
}

export default function InstitucionalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden min-h-[100dvh] flex items-center justify-center"
          style={{ background: 'linear-gradient(to bottom, #141E03, #283107)' }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(119,127,92,0.12) 0%, rgba(119,127,92,0) 70%)' }} />
          </div>
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <ScrollReveal>
              <h1 className="font-serif font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-white tracking-tight text-balance leading-[1.2] mb-6">
                Cuidado que se multiplica
              </h1>
              <p className="font-sans text-white/60 text-[0.938rem] sm:text-base md:text-[1.063rem] max-w-xl mx-auto mb-10 leading-relaxed">
                Levamos saúde mental para onde as pessoas precisam: empresas, escolas, consultórios e instituições. Sob consulta.
              </p>
              <a
                href={getWhatsAppLink('institucional')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-2 bg-white/15 text-white border border-white/20 backdrop-blur-sm font-medium py-3 px-8 hover:bg-white/25 transition-[color,background-color,transform] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50 text-[15px] sm:text-base shadow-organic-lg active:scale-[0.98]"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Fale conosco
                <span className="sr-only">(abre em nova janela)</span>
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Services */}
        <section className="bg-helora-white py-12 md:py-24 relative overflow-hidden">
          <OrganicNatureBg variant="understory" />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="max-w-2xl mb-14">
                <h2 className="font-serif font-normal text-2xl md:text-4xl text-helora-dark-green tracking-tight text-balance mb-4">
                  O que oferecemos
                </h2>
                <p className="font-sans text-helora-tan text-base md:text-lg leading-relaxed">
                  Soluções em saúde mental adaptadas à realidade da sua organização.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.map((service, index) => (
                <ScrollReveal key={service.id} delay={index * 0.08}>
                  <article className="helora-card h-full flex flex-col text-left group relative overflow-hidden">
                    {/* Top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden" aria-hidden="true">
                      <svg width="100%" height="3" viewBox="0 0 400 3" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 1.5 Q100 0, 200 2 Q300 3, 400 1" stroke="#777F5C" strokeWidth="3" fill="none" strokeLinecap="round" />
                      </svg>
                    </div>

                    {/* Icon */}
                    <div className="w-10 h-10 rounded-full bg-helora-sage/10 flex items-center justify-center mb-4 text-helora-sage group-hover:bg-helora-sage/15 transition-colors duration-200">
                      <ServiceIcon type={service.icon} />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif font-normal text-xl text-helora-dark-green tracking-tight mb-2">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="font-sans text-[15px] text-helora-tan leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Footer info */}
                    <div className="pt-5 mt-auto border-t border-helora-gainsboro/40 flex flex-col gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-helora-sage/60 shrink-0" aria-hidden="true" />
                        <span className="font-sans text-xs text-helora-tan/80">{service.audience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-helora-sienna/50 shrink-0" aria-hidden="true" />
                        <span className="font-sans text-xs text-helora-tan/80">{service.format}</span>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section className="bg-helora-antique-white/40 py-12 md:py-24 relative overflow-hidden">
          <OrganicNatureBg variant="forest-floor" />
          <div className="max-w-6xl mx-auto px-4 relative z-10">
            <ScrollReveal>
              <div className="max-w-2xl mb-14 mx-auto text-center">
                <h2 className="font-serif font-normal text-2xl md:text-4xl text-helora-dark-green tracking-tight text-balance mb-4">
                  Por que escolher a Helora
                </h2>
                <p className="font-sans text-helora-tan text-base md:text-lg leading-relaxed">
                  Referência em saúde mental em Brasília, agora também para a sua organização.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {DIFFERENTIALS.map((item, index) => (
                <ScrollReveal key={item.icon} delay={index * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-helora-sage/10 flex items-center justify-center shrink-0 text-helora-sage">
                      <ServiceIcon type={item.icon} className="w-[18px] h-[18px]" />
                    </div>
                    <div>
                      <h3 className="font-serif font-normal text-lg text-helora-dark-coffee tracking-tight mb-1">
                        {item.title}
                      </h3>
                      <p className="font-sans text-sm text-helora-tan leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-16 md:py-28">
          <OrganicNatureBg variant="soil" />
          <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
            <ScrollReveal>
              <h2 className="font-serif font-normal text-3xl md:text-5xl text-helora-dark-coffee tracking-tight text-balance mb-6">
                Vamos conversar?
              </h2>
              <p className="font-sans text-helora-tan text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto">
                Cada organização é diferente. Conte-nos sobre a sua e vamos encontrar a melhor forma de ajudar.
              </p>
              <a
                href={getWhatsAppLink('institucional')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-2 bg-helora-sage text-white font-medium py-3 px-8 sm:py-3.5 sm:px-9 hover:bg-helora-dark-green transition-[color,background-color,transform] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50 text-[15px] sm:text-base shadow-organic-lg active:scale-[0.98]"
              >
                <MessageCircle size={18} aria-hidden="true" />
                Fale pelo WhatsApp
                <span className="sr-only">(abre em nova janela)</span>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
