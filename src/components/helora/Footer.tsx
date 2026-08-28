import { HeloraOrganicO } from '@/components/helora/HeloraOrganicO';
import { getWhatsAppLink } from '@/lib/utils';

export function Footer() {
  return (
    <footer className="bg-[#2C241C] mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <HeloraOrganicO
                size={28}
                className="text-[#777F5C]"
                strokeWidth={2}
              />
              <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-white/50 leading-none">
                saúde integrada
              </span>
            </div>
            <p className="font-sans text-[0.875rem] text-white/50 leading-[1.7]">
              Saúde integrada em Brasília. Cuidar de você
              é a nossa essência.
            </p>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="font-sans text-[11px] tracking-[0.15em] uppercase text-white/40 mb-5">
              Navegação
            </h3>
            <nav className="flex flex-col gap-2.5" aria-label="Navegação do rodapé">
              {[
                { label: 'Início', href: '#hero' },
                { label: 'A Helora', href: '#sobre' },
                { label: 'Nossa forma de cuidar', href: '#cuidar' },
                { label: 'Equipe', href: '#equipe' },
                { label: 'Localização', href: '#localizacao' },
                { label: 'Convênios', href: '/convenios' },
                { label: 'Helora para empresas', href: '/empresas', external: true },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="font-sans text-[0.875rem] text-white/60 hover:text-white transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-sans text-[11px] tracking-[0.15em] uppercase text-white/40 mb-5">
              Contato
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[0.875rem] text-white/60 hover:text-white transition-colors duration-200 w-fit"
              >
                (61) 9 9593-8870 · WhatsApp
              </a>
              <a
                href="https://www.instagram.com/heloraclinica"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[0.875rem] text-white/60 hover:text-white transition-colors duration-200 w-fit"
              >
                @heloraclinica
              </a>
              <p className="font-sans text-[0.875rem] text-white/60">
                Asa Sul · Brasília — DF
              </p>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 py-6 border-b border-white/10">
          {[
            'Site seguro (SSL)',
            'Dados protegidos — LGPD',
            'Profissionais certificados',
            'Sigilo profissional',
            'Atendimento ético e humanizado',
          ].map((badge) => (
            <span
              key={badge}
              className="font-sans text-[0.75rem] text-white/40 flex items-center gap-1.5"
            >
              <span className="w-1 h-1 rounded-full bg-[#777F5C] shrink-0" />
              {badge}
            </span>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="font-sans text-[0.75rem] text-white/30">
            © 2026 Helora Saúde Integrada. Todos os direitos reservados.
          </p>
          <p className="font-serif italic text-[0.75rem] text-white/30">
            Cuidar de você é a nossa essência.
          </p>
        </div>
      </div>
    </footer>
  );
}
