'use client';

import { useState, useEffect, useCallback } from 'react';
import { getWhatsAppLink } from '@/lib/utils';

/**
 * WhatsApp Floating Action Button
 * - Appears after scrolling past the hero (500px)
 * - Subtle pulse animation to draw attention
 * - Tooltip shown once on first visit, then remembered in sessionStorage
 * - Respects mobile safe area insets
 */

const SCROLL_THRESHOLD = 500;
const TOOLTIP_SESSION_KEY = 'helora-wa-tooltip-seen';
const TOOLTIP_DELAY_MS = 2000;
const TOOLTIP_HIDE_MS = 6000;

export function WhatsAppFAB() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const seen = sessionStorage.getItem(TOOLTIP_SESSION_KEY);
    if (!seen) {
      const showTimer = setTimeout(() => setTooltip(true), TOOLTIP_DELAY_MS);
      const hideTimer = setTimeout(() => {
        setTooltip(false);
        sessionStorage.setItem(TOOLTIP_SESSION_KEY, '1');
      }, TOOLTIP_DELAY_MS + TOOLTIP_HIDE_MS);
      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [visible]);

  const handleClick = useCallback(() => {
    setTooltip(false);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[60] transition-all duration-500 ease-out ${
        visible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-4 opacity-0 pointer-events-none'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-3 whitespace-nowrap transition-all duration-300 ease-out ${
          tooltip
            ? 'translate-y-0 opacity-100'
            : 'translate-y-2 opacity-0 pointer-events-none'
        }`}
        aria-hidden={!tooltip}
      >
        <div className="relative bg-[#2C2C2C] text-white font-sans text-[13px] px-4 py-2.5 rounded-xl shadow-lg">
          Agende pelo WhatsApp
          <span className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#2C2C2C] rotate-45 rounded-sm" />
        </div>
      </div>

      {/* Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        aria-label="Conversar pelo WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-[60px] sm:h-[60px] rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:bg-[#1FB855] hover:shadow-[0_6px_28px_rgba(37,211,102,0.45)] active:scale-95 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2"
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping"
          style={{ animationDuration: '2.5s' }}
          aria-hidden="true"
        />

        {/* WhatsApp icon (inline SVG) */}
        <svg
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7 sm:w-[30px] sm:h-[30px] relative z-10"
          aria-hidden="true"
        >
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.378L1.056 31.2l6.072-1.95A15.9 15.9 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.348 22.622c-.392 1.106-2.286 2.036-3.178 2.13-.814.086-1.842.122-2.97-.188a27.1 27.1 0 01-2.69-.996c-4.744-2.05-7.848-6.856-8.09-7.188-.238-.332-1.962-2.614-1.962-4.986s1.244-3.54 1.686-4.026c.44-.486.968-.608 1.29-.608.322 0 .644.004.924.018.296.016.694-.112 1.086.83.392.956 1.334 3.262 1.452 3.498.118.236.198.512.04.824-.158.314-.238.508-.476.784-.238.276-.5.618-.714.83-.238.236-.486.492-.208.964.276.47 1.234 2.038 2.65 3.3 1.822 1.632 3.356 2.14 3.83 2.376.474.236.75.196 1.028-.118.278-.316 1.192-1.39 1.51-1.866.318-.476.636-.396 1.072-.236.436.158 2.772 1.308 3.246 1.546.474.236.792.356.908.55.118.196.118 1.12-.274 2.226z" />
        </svg>
      </a>
    </div>
  );
}
