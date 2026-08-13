'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Conceito', href: '#conceito' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Convênios', href: '/convenios' },
  { label: 'Equipe', href: '#equipe' },
] as const;

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === '/';
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const firstMobileItemRef = useRef<HTMLButtonElement>(null);
  const isTransparent = scrollY < 80 && isHome;

  // Scroll listener — only active on homepage
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

  /** Navigate to a hash link — on homepage scroll, otherwise go to /#hash */
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
        return; // let default <a> navigation happen
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

  const handleBooking = useCallback(() => {
    setMobileOpen(false);
    window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isTransparent
          ? 'bg-transparent text-white'
          : 'bg-helora-white/95 backdrop-blur-md shadow-organic text-helora-dark-coffee'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 sm:h-16 lg:h-[72px] flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="focus:outline-none transition-all duration-300 hidden md:inline-flex flex-col items-center"
          aria-label="Voltar ao início"
        >
          <img
            src="/logo-mark.svg"
            alt=""
            className={`h-6 sm:h-7 w-auto shrink-0 transition-all duration-300 ${!isTransparent ? 'invert' : ''}`}
          />
          <span
            className={
              'w-full text-center font-sans text-[9px] sm:text-[10px] tracking-[0.15em] uppercase leading-none mt-1.5 transition-colors duration-300 ' +
              (isTransparent ? 'text-white/75' : 'text-helora-tan')
            }
          >
            saúde integrada
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-sans text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:underline hover:font-semibold ${
                isTransparent
                  ? 'text-white/80 hover:text-white'
                  : 'text-helora-tan hover:text-helora-dark-coffee'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handleBooking}
            className={`btn-pill text-sm font-medium px-5 py-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50 ${
              isTransparent
                ? 'bg-white/15 text-white border border-white/20 hover:bg-white/25 backdrop-blur-sm'
                : 'bg-helora-sage text-white hover:bg-helora-dark-green'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <MessageCircle size={14} aria-hidden="true" />
              Agendar sessão
              <span className="sr-only">(abre em nova janela)</span>
            </span>
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className={`md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50 rounded-lg transition-colors duration-200 ${
            isTransparent ? 'text-white' : 'text-helora-dark-coffee'
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
          className="fixed inset-0 top-14 sm:top-16 bg-helora-dark-coffee/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-14 sm:top-16 left-0 right-0 bg-helora-white shadow-organic-lg z-40 transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col py-3 px-4 gap-0.5" aria-label="Menu mobile">
          {NAV_LINKS.map((link, i) => (
            <button
              key={link.href}
              ref={i === 0 ? firstMobileItemRef : undefined}
              onClick={() => handleMobileNavClick(link.href)}
              className="font-sans text-base font-medium text-helora-dark-coffee hover:text-helora-sage py-3 px-3 rounded-xl hover:bg-helora-gainsboro/50 transition-colors duration-200 text-left focus:outline-none focus-visible:bg-helora-gainsboro/50"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 px-3">
            <button
              onClick={handleBooking}
              className="w-full btn-pill bg-helora-sage text-white text-sm font-medium px-5 py-3 hover:bg-helora-dark-green transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50 flex items-center justify-center gap-2"
            >
              <MessageCircle size={16} aria-hidden="true" />
              Agendar sessão
              <span className="sr-only">(abre em nova janela)</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
