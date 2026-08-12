'use client';

import { Leaf } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { OrganicNatureBg } from './OrganicNatureBg';

interface Service {
  id: string;
  name: string;
  price: number;
  description: string;
}

const SERVICES: Service[] = [
  {
    id: '1',
    name: 'Primeira sessão de cuidado',
    price: 180,
    description: 'Um espaço inicial para se conhecer e entender como posso te acompanhar. Sem pressa, sem compromisso imediato.',
  },
  {
    id: '2',
    name: 'Sessão individual',
    price: 200,
    description: 'Sessão contínua de cuidado, com foco no seu ritmo e nas suas necessidades.',
  },
  {
    id: '3',
    name: 'Sessão de casal',
    price: 300,
    description: 'Um espaço compartilhado para reconstruir laços e fortalecer a conexão.',
  },
];

function formatPrice(price: number): string {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-helora-antique-white py-12 md:py-24 relative overflow-hidden">
      <OrganicNatureBg variant="understory" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="max-w-2xl mb-14">
            <h2 className="font-serif font-normal text-2xl md:text-4xl text-helora-dark-green tracking-tight text-balance mb-4">
              Como podemos te acompanhar
            </h2>
            <p className="font-sans text-helora-tan text-base md:text-lg leading-relaxed">
              Cada sessão é pensada para o seu momento. Escolha o que faz sentido para você agora.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={service.id} delay={index * 0.1}>
              <article className="helora-card text-left group w-full relative overflow-hidden" aria-label={service.name}>
                <div className="absolute top-0 left-0 right-0 h-[3px] overflow-hidden" aria-hidden="true">
                  <svg width="100%" height="3" viewBox="0 0 400 3" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.5 Q100 0, 200 2 Q300 3, 400 1" stroke="#777F5C" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </svg>
                </div>

                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="font-serif font-normal text-xl md:text-[22px] text-helora-dark-green tracking-tight">
                    {service.name}
                  </h3>
                  <Leaf
                    size={18}
                    className="mt-1 shrink-0 text-helora-light-gray group-hover:text-helora-sage transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-sans text-[15px] text-helora-tan leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-helora-sienna shrink-0" aria-hidden="true" />
                  <span className="font-sans font-semibold text-lg text-helora-sienna">
                    {formatPrice(service.price)}
                  </span>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
