'use client';

import { ScrollReveal } from './ScrollReveal';
import { OrganicNatureBg, FloatingLeaf, OrganicBranch } from './OrganicNatureBg';
import { SoundWaveDivider } from './SoundWaveDivider';

export function ConceptSection() {
  return (
    <section id="conceito" className="relative">
      {/* Sound-wave visualizer: reacts to the ambient music in real-time */}
      <SoundWaveDivider />

      {/* Content wrapper with overflow-hidden for floating elements */}
      <div className="bg-helora-white py-12 md:py-24 relative overflow-hidden">
        {/* Forest layer: Understory, vertical vine patterns, entering the forest */}
        <OrganicNatureBg variant="understory" />

        {/* Floating leaf accents */}
        <FloatingLeaf className="absolute top-12 left-4 md:left-12" size="md" color="sage" />
        <FloatingLeaf className="absolute bottom-16 right-8 md:right-16" size="sm" color="sienna" />

        {/* Organic branch decoration */}
        <OrganicBranch className="absolute bottom-0 right-0 opacity-40" flip />

        <div className="max-w-2xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <h2 className="font-serif font-normal text-2xl md:text-4xl text-helora-dark-green tracking-tight text-balance mb-8">
              O que é a Helora
            </h2>

            <div className="space-y-6 text-helora-dark-coffee font-sans relative leading-[1.85]">
              {/* Organic sienna accent, curved leaf-like border */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full overflow-hidden" aria-hidden="true">
                <svg width="3" height="100%" viewBox="0 0 3 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 0 Q0 75, 2 150 Q3 225, 1.5 300" stroke="#9C6146" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </div>

              <p className="text-base md:text-[17px] pl-8">
                A Helora nasceu da vontade de oferecer um cuidado de verdade. Não somos
                apenas um consultório, somos um espaço pensado para que você se sinta
                acolhido de verdade. Aqui, cada detalhe existe para que você possa
                respirar, ser ouvido e cuidar de si no seu próprio tempo.
              </p>
              <p className="text-base md:text-[17px] pl-8">
                Saúde integrada é olhar para você por inteiro: corpo, mente e emoção.
                Acreditamos que cada aspecto de quem você é merece atenção e respeito, e
                por isso nosso trabalho não se limita a uma abordagem única. Trabalhamos
                para que o cuidado faça sentido para a sua vida, sem rótulos e sem
                pressa.
              </p>
              <p className="text-base md:text-[17px] pl-8">
                Nosso espaço em Brasília foi projetado para transmitir calma e
                segurança. Desde o primeiro contato até o acompanhamento contínuo,
                você encontra profissionais que escolheram o cuidado como caminho,
                porque acreditamos que cuidar é a forma mais genuína de estar presente.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
