'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

const NAV_LINKS: { label: string; href: string; external?: boolean }[] = [
  { label: 'Início', href: '#hero' },
  { label: 'Helora para Empresas', href: '/empresas', external: true },
  { label: 'Convênios', href: '/convenios' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const firstMobileItemRef = useRef<HTMLButtonElement>(null);
  const isTransparent = scrollY < 80 && isHome;

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      requestAnimationFrame(() => firstMobileItemRef.current?.focus());
    }
  }, [mobileOpen]);

  const navigateToHash = useCallback(
    (hash: string) => {
      if (isHome) {
        const id = hash.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push('/' + hash);
      }
    },
    [isHome, router]
  );

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith('/')) {
        setMobileOpen(false);
        return;
      }
      e.preventDefault();
      setMobileOpen(false);
      navigateToHash(href);
    },
    [navigateToHash]
  );

  const handleMobileNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      if (href.startsWith('/')) {
        router.push(href);
        return;
      }
      navigateToHash(href);
    },
    [navigateToHash, router]
  );

  const handleLogoClick = useCallback(() => {
    setMobileOpen(false);
    if (isHome) {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/');
    }
  }, [isHome, router]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-[#FAF8F5]/95 backdrop-blur-md text-[#2C2C2C]'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 sm:h-18 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="focus:outline-none transition-all duration-300 flex items-center gap-2"
          aria-label="Voltar ao início"
        >
          <img
            src="/logo-mark.svg"
            alt=""
            className={`h-7 w-auto shrink-0 transition-all duration-300 ${
              isTransparent ? 'brightness-0 invert' : 'brightness-0'
            }`}
          />
          <span
            className={`font-sans text-[10px] tracking-[0.18em] uppercase leading-none transition-colors duration-300 ${
              isTransparent ? 'text-white/80' : 'text-[#A39B82]'
            }`}
          >
            saúde integrada
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-sans text-[13px] tracking-[0.04em] transition-colors duration-300 focus:outline-none focus-visible:underline ${
                isTransparent
                  ? 'text-white/80 hover:text-white'
                  : 'text-[#6B6B6B] hover:text-[#2C2C2C]'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-sans text-[13px] tracking-[0.08em] uppercase font-medium px-6 py-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50 ${
              isTransparent
                ? 'bg-white text-[#2C2C2C] hover:bg-white/90'
                : 'bg-[#777F5C] text-white hover:bg-[#283107]'
            }`}
          >
            Marcar uma conversa
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`lg:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50 rounded-lg transition-colors duration-200 ${
            isTransparent ? 'text-white' : 'text-[#2C2C2C]'
          }`}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 sm:top-18 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed top-16 sm:top-18 left-0 right-0 bg-[#FAF8F5] z-40 transition-transform duration-300 ease-in-out shadow-lg ${
          mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col py-4 px-6 gap-1" aria-label="Menu mobile">
          {NAV_LINKS.map((link, i) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="font-sans text-base text-[#2C2C2C] hover:text-[#777F5C] py-3 px-3 rounded-xl hover:bg-[#F5F0EB] transition-colors duration-200 text-left focus:outline-none focus-visible:bg-[#F5F0EB]"
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.href}
                ref={i === 0 ? firstMobileItemRef : undefined}
                onClick={() => handleMobileNavClick(link.href)}
                className="font-sans text-base text-[#2C2C2C] hover:text-[#777F5C] py-3 px-3 rounded-xl hover:bg-[#F5F0EB] transition-colors duration-200 text-left focus:outline-none focus-visible:bg-[#F5F0EB]"
              >
                {link.label}
              </button>
            ),
          )}
          <div className="pt-3 px-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center font-sans text-sm font-medium px-6 py-3.5 rounded-full bg-[#777F5C] text-white hover:bg-[#283107] transition-colors duration-200"
            >
              Marcar uma conversa
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
