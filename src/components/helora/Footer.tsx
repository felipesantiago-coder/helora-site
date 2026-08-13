'use client';

import { MessageCircle, MapPin, ShieldCheck, Lock, FileCheck, Eye, HeartHandshake } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Início', href: '#' },
  { label: 'Conceito', href: '/#conceito' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Convênios', href: '/convenios' },
  { label: 'Equipe', href: '/#equipe' },
  { label: 'Depoimentos', href: '/#depoimentos' },
] as const;

const PHONE_DISPLAY = '(61) 9 9999-9999'; // ← Replace with real number

const COL_HEADER = 'font-sans text-[11px] font-medium text-helora-sage/70 tracking-[0.15em] uppercase mb-4';

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

      <div className="max-w-5xl mx-auto px-4 pt-10 pb-8 md:pt-14 md:pb-10 relative">
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

        {/* Brand anchor — centered at top */}
        <div className="flex flex-col items-center mb-10 relative z-10">
          <img
            src="/logo-mark.svg"
            alt="Helora"
            className="h-8 sm:h-9 w-auto shrink-0 brightness-0 invert"
          />
          <p className="font-sans text-helora-gainsboro/70 text-[11px] mt-1.5 tracking-[0.15em] uppercase">
            saúde integrada
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-helora-sage/10 mb-10 relative z-10" aria-hidden="true" />

        {/* 3 info columns — all left-aligned, matching structure */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 relative z-10">

          {/* Navegação */}
          <nav className="flex flex-col" aria-label="Navegação do rodapé">
            <p className={COL_HEADER}>Navegação</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('/#')) {
                        // hash link on main page
                        e.preventDefault();
                        window.location.href = link.href;
                      }
                      // absolute paths like /convenios work via default <a> behavior
                    }}
                    className="font-sans text-[13px] text-white/60 hover:text-white transition-colors duration-200 text-left focus:outline-none focus-visible:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div className="flex flex-col">
            <p className={COL_HEADER}>Contato</p>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-[13px] text-white/60 hover:text-white transition-colors duration-200"
                >
                  <MessageCircle size={14} className="text-helora-sage/50 shrink-0" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <address className="not-italic inline-flex items-center gap-2 font-sans text-[13px] text-white/60" aria-label="Localização">
                  <MapPin size={14} className="text-helora-sage/50 shrink-0" aria-hidden="true" />
                  Brasília, DF
                </address>
              </li>
            </ul>
          </div>

          {/* Segurança e confiança */}
          <div className="flex flex-col">
            <p className={COL_HEADER}>Segurança</p>
            <ul className="flex flex-col gap-3">
              <li className="inline-flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-helora-sage/15 text-helora-sage/70 shrink-0">
                  <Lock size={13} aria-hidden="true" />
                </span>
                <span className="font-sans text-[13px] text-white/60 leading-tight">Site seguro (SSL/HTTPS)</span>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-helora-sage/15 text-helora-sage/70 shrink-0">
                  <ShieldCheck size={13} aria-hidden="true" />
                </span>
                <span className="font-sans text-[13px] text-white/60 leading-tight">Dados protegidos pela LGPD</span>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-helora-sage/15 text-helora-sage/70 shrink-0">
                  <FileCheck size={13} aria-hidden="true" />
                </span>
                <span className="font-sans text-[13px] text-white/60 leading-tight">Profissionais registrados no CRP</span>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-helora-sage/15 text-helora-sage/70 shrink-0">
                  <Eye size={13} aria-hidden="true" />
                </span>
                <span className="font-sans text-[13px] text-white/60 leading-tight">Sigilo profissional garantido</span>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-helora-sage/15 text-helora-sage/70 shrink-0">
                  <HeartHandshake size={13} aria-hidden="true" />
                </span>
                <span className="font-sans text-[13px] text-white/60 leading-tight">Atendimento ético e humanizado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-helora-sage/10 pt-5 mt-10 relative z-10">
          <p className="font-sans text-[11px] text-helora-gainsboro/40 text-center">
            © 2026 Helora Saúde Integrada. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
