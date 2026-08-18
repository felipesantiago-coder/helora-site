'use client';

import { MessageCircle, MapPin, ShieldCheck, Lock, FileCheck, Eye, HeartHandshake } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { getWhatsAppLink, WHATSAPP_DISPLAY } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Início', href: '/' },
  { label: 'Conceito', href: '/#conceito' },
  { label: 'Serviços', href: '/#servicos' },
  { label: 'Convênios', href: '/convenios' },
  { label: 'Equipe', href: '/#equipe' },
  { label: 'Institucional', href: '/institucional' },
  { label: 'Depoimentos', href: '/#depoimentos' },
  { label: 'Localização', href: '/#localizacao' },
] as const;

const INSTAGRAM_URL = 'https://www.instagram.com/heloraclinica?igsh=bXJkbTg3Z2VzYXRs';

const COL_HEADER = 'font-sans text-[11px] font-medium text-helora-gainsboro/80 tracking-[0.15em] uppercase mb-4';

export function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === '/';

  function handleFooterNav(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith('/#')) {
      e.preventDefault();
      if (isHome) {
        const id = href.replace('/#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(href);
      }
    } else if (href === '/' && isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <footer className="bg-gradient-to-b from-[#777F5C] to-[#283107] text-white mt-auto relative overflow-hidden">
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
            fill="#777F5C"
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
        className="h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
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

        {/* Brand anchor, centered at top */}
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

        {/* 3 info columns, all left-aligned, matching structure */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10 relative z-10">

          {/* Navegação */}
          <nav className="flex flex-col" aria-label="Navegação do rodapé">
            <p className={COL_HEADER}>Navegação</p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleFooterNav(e, link.href)}
                    className="font-sans text-[13px] text-white/75 hover:text-white transition-colors duration-200 text-left focus:outline-none focus-visible:underline focus-visible:ring-2 focus-visible:ring-helora-sage/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141E03] rounded-sm"
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
                  className="inline-flex items-center gap-2 font-sans text-[13px] text-white/75 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:ring-2 focus-visible:ring-helora-sage/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141E03] rounded-sm"
                >
                  <MessageCircle size={14} className="text-helora-sage/50 shrink-0" aria-hidden="true" />
                  {WHATSAPP_DISPLAY}
                  <span className="sr-only">(abre em nova janela)</span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-[13px] text-white/75 hover:text-white transition-colors duration-200 focus:outline-none focus-visible:underline focus-visible:ring-2 focus-visible:ring-helora-sage/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#141E03] rounded-sm"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-helora-sage/50 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 0 1 1.523.99 4.088 4.088 0 0 1 .99 1.523c.163.46.349 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.088 4.088 0 0 1-.99 1.523 4.088 4.088 0 0 1-1.523.99c-.46.163-1.26.349-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.088 4.088 0 0 1-1.523-.99 4.088 4.088 0 0 1-.99-1.523c-.163-.46-.349-1.26-.403-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.088 4.088 0 0 1 .99-1.523 4.088 4.088 0 0 1 1.523-.99c.46-.163 1.26-.349 2.43-.403C8.416 2.175 8.796 2.163 12 2.163ZM12 0C8.741 0 8.333.014 7.053.072 5.775.131 4.903.333 4.14.63a5.876 5.876 0 0 0-2.126 1.384A5.876 5.876 0 0 0 .63 4.14C.333 4.903.131 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.059 1.277.261 2.149.558 2.912a5.876 5.876 0 0 0 1.384 2.126A5.876 5.876 0 0 0 4.14 23.37c.763.297 1.635.499 2.913.558C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.059 2.149-.261 2.912-.558a5.876 5.876 0 0 0 2.126-1.384 5.876 5.876 0 0 0 1.384-2.126c.297-.763.499-1.635.558-2.913C23.986 15.668 24 15.259 24 12s-.014-3.668-.072-4.948c-.059-1.277-.261-2.149-.558-2.912a5.876 5.876 0 0 0-1.384-2.126A5.876 5.876 0 0 0 19.86.63C19.097.333 18.225.131 16.948.072 15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"
                      fill="currentColor"
                    />
                  </svg>
                  @heloraclinica
                  <span className="sr-only">(abre em nova janela)</span>
                </a>
              </li>
              <li>
                <address className="not-italic inline-flex items-center gap-2 font-sans text-[13px] text-white/75" aria-label="Localização">
                  <MapPin size={14} className="text-helora-sage/50 shrink-0" aria-hidden="true" />
                  Brasília, DF, Asa Sul
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
                <span className="font-sans text-[13px] text-white/75 leading-tight">Site seguro (SSL/HTTPS)</span>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-helora-sage/15 text-helora-sage/70 shrink-0">
                  <ShieldCheck size={13} aria-hidden="true" />
                </span>
                <span className="font-sans text-[13px] text-white/75 leading-tight">Dados protegidos pela LGPD</span>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-helora-sage/15 text-helora-sage/70 shrink-0">
                  <FileCheck size={13} aria-hidden="true" />
                </span>
                <span className="font-sans text-[13px] text-white/75 leading-tight">Profissionais certificados</span>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-helora-sage/15 text-helora-sage/70 shrink-0">
                  <Eye size={13} aria-hidden="true" />
                </span>
                <span className="font-sans text-[13px] text-white/75 leading-tight">Sigilo profissional garantido</span>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-helora-sage/15 text-helora-sage/70 shrink-0">
                  <HeartHandshake size={13} aria-hidden="true" />
                </span>
                <span className="font-sans text-[13px] text-white/75 leading-tight">Atendimento ético e humanizado</span>
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
