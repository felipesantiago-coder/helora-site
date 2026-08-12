'use client';

import { ScrollReveal } from './ScrollReveal';

/* ══════════════════════════════════════════════════════════════════════════
 * CONVÊNIOS — Infinite CSS Marquee
 * ══════════════════════════════════════════════════════════════════════════
 *
 * Three rows scrolling in opposite directions.
 * Pure CSS animation — zero JS runtime overhead.
 * ══════════════════════════════════════════════════════════════════════════ */

const ROW_1: string[] = [
  'NOTRE DAME',
  'TRÊS SAÚDE',
  'REAL GRANDEZA',
  'UNAFISCO SAÚDE',
  'GEAP',
  'GRAVIA',
  'PROASA',
  'LUMINAR SAÚDE',
  'AFEB BRASAL',
  'AFFEGO',
  'ANAFE SAÚDE',
  'CLIQUE MÉDICOS',
  'CUIDADOS PLUS',
  'FASCAL',
  'FAPES',
  'SAÚDE CAIXA',
  'SAÚDE PETROBRAS',
  'SERPRO',
  'SIS SENADO',
  'STF-MED',
];

const ROW_2: string[] = [
  'GDF SAÚDE',
  'PF SAÚDE',
  'PMDF',
  'PRÓ-SAÚDE CÂMARA',
  'PRÓ-SAÚDE TJDFT',
  'PRÓ-SER STJ',
  'PRÓ-SOCIAL TRF',
  'SAÚDE POSTAL',
  'PLAS/JMU STM',
  'TRT SAÚDE',
  'TST SAÚDE',
  'BACEN',
  'BRB SAÚDE',
  'CONAB',
  'CBMDF',
  'EMBRATEL TELOS',
  'CAEME',
  'CÉSAN',
  'CASEC',
  'CASEMBRAPA',
];

const ROW_3: string[] = [
  'VIDA EMPRESARIAL',
  'PLANEJAMENTO MPU',
  'CNTI',
  'CÂMARA LEGISLATIVA',
  'OMINTO SAÚDE',
];

function MarqueeRow({
  items,
  reverse = false,
  speed = 45,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  return (
    <div className="overflow-hidden w-full">
      <div
        className={`flex w-max gap-10 py-2 ${reverse ? 'marquee-reverse' : 'marquee-forward'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((name) => (
          <ConvenioItem key={name} name={name} />
        ))}
        {items.map((name) => (
          <ConvenioItem key={`${name}-dup`} name={name} />
        ))}
      </div>
    </div>
  );
}

function ConvenioItem({ name }: { name: string }) {
  return (
    <div className="flex-shrink-0 px-4 py-2.5 border border-helora-gainsboro/40 rounded-full bg-white/60 backdrop-blur-sm whitespace-nowrap">
      <span className="font-sans text-sm font-medium text-helora-tan tracking-wide select-none">
        {name}
      </span>
    </div>
  );
}

export function ConveniosSection() {
  return (
    <section id="convenios" className="bg-helora-antique-white/40 py-14 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10 mb-10">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif font-normal text-2xl md:text-4xl text-helora-dark-green tracking-tight text-balance mb-4">
              Convênios atendidos
            </h2>
            <p className="font-sans text-helora-tan text-base md:text-lg leading-relaxed">
              Atendemos diversos planos de saúde para facilitar o seu acesso ao cuidado.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <div className="space-y-3 relative z-10">
        <MarqueeRow items={ROW_1} speed={50} />
        <MarqueeRow items={ROW_2} reverse speed={55} />
        <MarqueeRow items={ROW_3} speed={60} />
      </div>

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-helora-antique-white/40 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-helora-antique-white/40 to-transparent z-20" />
    </section>
  );
}
