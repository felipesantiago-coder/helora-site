'use client';

import { MessageCircle, MapPin, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Conceito', href: '#conceito' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Convênios', href: '#convenios' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Depoimentos', href: '#depoimentos' },
] as const;

const PHONE_DISPLAY = '(61) 9 9999-9999'; // ← Replace with real number

function scrollToSection(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#141E03] to-[#283107] text-white mt-auto relative overflow-hidden">
      {/* Organic nature wave top */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-[99%]"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0 30 Q180 65, 360 45 Q540 25, 720 50 Q900 75, 1080 40 Q1260 10, 1440 35 L1440 80 L0 80 Z"
            fill="#283107"
          />
          <path
            d="M0 30 Q180 65, 360 45 Q540 25, 720 50 Q900 75, 1080 40 Q1260 10, 1440 35"
            stroke="#777F5C"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
          />
          <path
            d="M720 25 Q735 12, 742 28 Q748 42, 730 44 Q712 40, 720 25Z"
            fill="#777F5C"
            opacity="0.15"
          />
        </svg>
      </div>

      {/* Top border accent */}
      <div
        className="h-[2px] bg-gradient-to-r from-transparent via-helora-sage/40 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-12 relative">
        {/* Breathing organic glow */}
        <div
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="w-64 h-64 rounded-full breathe-glow"
            style={{
              background:
                'radial-gradient(circle, rgba(119,127,92,0.12) 0%, rgba(119,127,92,0) 70%)',
            }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 relative z-10">
          {/* Column 1 — Brand */}
          <div>
            <div className="inline-flex flex-col items-center">
              <img
                src="/logo-mark.svg"
                alt="Helora"
                className="h-8 sm:h-10 w-auto shrink-0 brightness-0 invert"
              />
              <p className="w-full text-center font-sans text-helora-gainsboro/80 text-sm mt-1 tracking-wider uppercase">
                saúde integrada
              </p>
            </div>
            <p className="font-sans text-helora-gainsboro/70 text-sm mt-3 leading-relaxed">
              Clínica de psicologia em Brasília — DF, especializada em saúde mental, neuropsicologia e avaliação psicológica. Atendimento humanizado, ético e baseado em evidências científicas para todas as faixas etárias.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <nav
            className="flex flex-col items-center"
            aria-label="Navegação do rodapé"
          >
            <p className="font-sans text-xs font-medium text-helora-sage tracking-wider uppercase mb-3">
              Navegação
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="font-sans text-sm text-white/70 hover:text-white transition-colors duration-200 text-left focus:outline-none focus-visible:underline w-fit"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Column 3 — Contact & Credibility */}
          <div className="flex flex-col gap-4">
            <p className="font-sans text-xs font-medium text-helora-sage tracking-wider uppercase mb-1">
              Contato
            </p>

            {/* WhatsApp */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-sans text-sm text-white/80 hover:text-white transition-colors duration-200 w-fit group"
            >
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                <MessageCircle size={15} className="text-helora-sage" aria-hidden="true" />
              </span>
              <span>{PHONE_DISPLAY}</span>
            </a>

            {/* Location */}
            <div className="inline-flex items-center gap-2.5 font-sans text-sm text-white/60">
              <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                <MapPin size={15} className="text-helora-sage" aria-hidden="true" />
              </span>
              <span>Brasília — DF</span>
            </div>

            {/* LGPD / Professional compliance */}
            <div className="inline-flex items-start gap-2.5 font-sans text-[13px] text-white/40 mt-1">
              <ShieldCheck size={14} className="text-helora-sage/60 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                Dados tratados conforme a LGPD. Sigilo profissional garantido pelo Código de Ética do psicólogo.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-helora-sage/10 pt-5 mt-10 relative z-10">
          <p className="font-sans text-xs text-helora-gainsboro/50 text-center">
            © 2026 Helora Saúde Integrada. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
