'use client';

import { ScrollReveal } from './ScrollReveal';
import { ROW_1, ROW_2, ROW_3 } from '@/data/convenios';
import type { Convenio } from '@/data/convenios';

function ConvenioCard({ name, src, ariaHidden }: { name: string; src: string | null; ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex-shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] rounded-xl bg-white border border-helora-gainsboro/30 flex items-center justify-center p-1.5 sm:p-2 overflow-hidden"
    >
      {src ? (
        <img
          src={src}
          alt=""
          className="w-full h-full object-contain"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <span className="font-sans text-[10px] sm:text-xs font-medium text-helora-tan text-center leading-tight select-none">
          {name}
        </span>
      )}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  speed = 45,
  rowIndex,
}: {
  items: Convenio[];
  reverse?: boolean;
  speed?: number;
  rowIndex: number;
}) {
  return (
    <div
      className="group overflow-hidden w-full"
      tabIndex={0}
      role="region"
      aria-label={`Convênios — linha ${rowIndex}`}
    >
      <div
        className={`flex w-max gap-3 sm:gap-4 md:gap-5 py-1 ${reverse ? 'marquee-reverse' : 'marquee-forward'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {items.map((item) => (
          <ConvenioCard key={item.name} name={item.name} src={item.src} />
        ))}
        {items.map((item) => (
          <ConvenioCard key={`${item.name}-dup`} name={item.name} src={item.src} ariaHidden />
        ))}
      </div>
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

      <div className="space-y-2.5 sm:space-y-3 relative z-10">
        <MarqueeRow items={ROW_1} speed={50} rowIndex={1} />
        <MarqueeRow items={ROW_2} reverse speed={50} rowIndex={2} />
        <MarqueeRow items={ROW_3} speed={50} rowIndex={3} />
      </div>

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 md:w-32 bg-gradient-to-r from-helora-antique-white/40 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 md:w-32 bg-gradient-to-l from-helora-antique-white/40 to-transparent z-20" />
    </section>
  );
}
