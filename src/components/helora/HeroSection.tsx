'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AmbientSound } from './AmbientSound';
import { getWhatsAppLink } from '@/lib/utils';

/* ==========================================================================
 * 3D LAKE WAVE HERO BACKGROUND
 * Canvas-based water simulation with Mur's ABC + Blinn-Phong shading.
 * ========================================================================== */

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const section = sectionRef.current;
    if (!canvas || !section) return;

    const VW = 256;
    const VH = 256;
    const BORDER = 64;
    const SW = VW + 2 * BORDER;
    const SH = VH + 2 * BORDER;

    canvas.width = VW;
    canvas.height = VH;

    const ctx = canvas.getContext('2d', { willReadFrequently: false });
    if (!ctx) return;

    let curr = new Float32Array(SW * SH);
    let prev = new Float32Array(SW * SH);

    const DAMPING = 0.992;
    const C2 = 0.12;
    const C = Math.sqrt(C2);
    const CENTER = 2 - 4 * C2;
    const MUR_R = (C - 1) / (C + 1);

    const DROP_RADIUS = 14;
    const DROP_STRENGTH = 8;
    const OBJ_THROTTLE = 180;
    const MIN_MOVE = 5;

    const imgData = ctx.createImageData(VW, VH);
    const px = imgData.data;

    /* Pre-computed lighting */
    const lx = -0.3, ly = -0.5, lz = 1.0;
    const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);
    const Lx = lx / lLen, Ly = ly / lLen, Lz = lz / lLen;

    const hhx = lx, hhy = ly, hhz = lz + 1.0;
    const hLen = Math.sqrt(hhx * hhx + hhy * hhy + hhz * hhz);
    const Hx = hhx / hLen, Hy = hhy / hLen, Hz = hhz / hLen;

    let rafId = 0;
    let lastObjTime = 0;
    let prevGX = -1;
    let prevGY = -1;

    function addDrop(cx: number, cy: number) {
      const r = DROP_RADIUS;
      const r2 = r * r;
      const icx = Math.floor(cx) + BORDER;
      const icy = Math.floor(cy) + BORDER;
      for (let dy = -r; dy <= r; dy++) {
        const gy = icy + dy;
        if (gy < 1 || gy >= SH - 1) continue;
        const dy2 = dy * dy;
        for (let dx = -r; dx <= r; dx++) {
          const gx = icx + dx;
          if (gx < 1 || gx >= SW - 1) continue;
          const d2 = dx * dx + dy2;
          if (d2 > r2) continue;
          const f = Math.cos((Math.sqrt(d2) / r) * Math.PI * 0.5);
          curr[gy * SW + gx] += DROP_STRENGTH * f * f;
        }
      }
    }

    function setWake(cx: number, cy: number, dirX: number, dirY: number) {
      const perpX = -dirY;
      const perpY = dirX;
      const HALF = 5;
      const scx = Math.floor(cx) + BORDER;
      const scy = Math.floor(cy) + BORDER;
      for (let t = -HALF; t <= HALF; t++) {
        const gx = Math.floor(scx + perpX * t);
        const gy = Math.floor(scy + perpY * t);
        if (gx < 1 || gx >= SW - 1 || gy < 1 || gy >= SH - 1) continue;
        const f = Math.cos((t / HALF) * Math.PI * 0.5);
        curr[gy * SW + gx] += 0.15 * f * f;
      }
    }

    function propagate() {
      for (let y = 1; y < SH - 1; y++) {
        const yw = y * SW;
        for (let x = 1; x < SW - 1; x++) {
          const i = yw + x;
          prev[i] =
            (CENTER * curr[i] +
              C2 *
                (curr[i - 1] +
                  curr[i + 1] +
                  curr[i - SW] +
                  curr[i + SW]) -
              prev[i]) *
            DAMPING;
        }
      }

      const r = MUR_R;
      for (let y = 1; y < SH - 1; y++) {
        const yw = y * SW;
        prev[yw] = (curr[yw + 1] + r * (prev[yw + 1] - curr[yw])) * DAMPING;
        prev[yw + SW - 1] = (curr[yw + SW - 2] + r * (prev[yw + SW - 2] - curr[yw + SW - 1])) * DAMPING;
      }
      for (let x = 0; x < SW; x++) {
        prev[x] = (curr[SW + x] + r * (prev[SW + x] - curr[x])) * DAMPING;
        prev[(SH - 1) * SW + x] = (curr[(SH - 2) * SW + x] + r * (prev[(SH - 2) * SW + x] - curr[(SH - 1) * SW + x])) * DAMPING;
      }

      const tmp = curr;
      curr = prev;
      prev = tmp;
    }

    function render() {
      for (let vy = 0; vy < VH; vy++) {
        const sy = vy + BORDER;
        const syw = sy * SW;
        const t = vy / VH;
        const bR = 20 + t * 20;
        const bG = 30 + t * 19;
        const bB = 3 + t * 4;

        for (let vx = 0; vx < VW; vx++) {
          const sx = vx + BORDER;
          const pi = (vy * VW + vx) << 2;
          const si = syw + sx;

          const dhdx = (curr[si - 1] - curr[si + 1]) * 0.5;
          const dhdy = (curr[si - SW] - curr[si + SW]) * 0.5;
          const invN = 1.0 / Math.sqrt(dhdx * dhdx + dhdy * dhdy + 1.0);
          const nx = -dhdx * invN;
          const ny = -dhdy * invN;
          const nz = invN;

          const diff = nx * Lx + ny * Ly + nz * Lz;
          const diffuse = diff > 0 ? diff : 0;

          const sd = nx * Hx + ny * Hy + nz * Hz;
          if (sd > 0) {
            let s2 = sd * sd;
            let s4 = s2 * s2;
            const spec = s4 * s4;
            const light = 0.55 + diffuse * 0.4 + spec * 0.55;
            const specR = spec * 14;
            const specG = spec * 35;
            const specB = spec * 18;
            px[pi] = Math.min(255, (bR * light + specR) | 0);
            px[pi + 1] = Math.min(255, (bG * light + specG) | 0);
            px[pi + 2] = Math.min(255, (bB * light + specB) | 0);
          } else {
            const light = 0.55 + diffuse * 0.4;
            px[pi] = Math.min(255, (bR * light) | 0);
            px[pi + 1] = Math.min(255, (bG * light) | 0);
            px[pi + 2] = Math.min(255, (bB * light) | 0);
          }
          px[pi + 3] = 255;
        }
      }
      ctx!.putImageData(imgData, 0, 0);
    }

    function tick() {
      propagate();
      render();
      rafId = requestAnimationFrame(tick);
    }

    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mqDesktop = window.matchMedia('(min-width: 768px)');

    function isAnimationAllowed() {
      return mqDesktop.matches && !mqMotion.matches;
    }
    function startAnimation() {
      if (rafId) return;
      rafId = requestAnimationFrame(tick);
    }
    function stopAnimation() {
      if (rafId) { cancelAnimationFrame(rafId); rafId = 0; }
    }

    if (isAnimationAllowed()) rafId = requestAnimationFrame(tick);

    function onMotionChange(e: MediaQueryListEvent) {
      if (e.matches) stopAnimation();
      else startAnimation();
    }
    function onDesktopChange(e: MediaQueryListEvent) {
      if (e.matches) startAnimation();
      else stopAnimation();
    }
    mqMotion.addEventListener('change', onMotionChange);
    mqDesktop.addEventListener('change', onDesktopChange);

    function toGrid(clientX: number, clientY: number): [number, number] {
      const r = section!.getBoundingClientRect();
      return [((clientX - r.left) / r.width) * VW, ((clientY - r.top) / r.height) * VH];
    }

    function onMouseDown(e: MouseEvent) {
      const [cx, cy] = toGrid(e.clientX, e.clientY);
      addDrop(cx, cy);
    }
    function onMouseMove(e: MouseEvent) {
      const [cx, cy] = toGrid(e.clientX, e.clientY);
      const now = performance.now();
      if (now - lastObjTime < OBJ_THROTTLE) return;
      lastObjTime = now;
      if (prevGX < 0) { prevGX = cx; prevGY = cy; return; }
      let dx = cx - prevGX; let dy = cy - prevGY;
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len < MIN_MOVE) return;
      dx /= len; dy /= len;
      prevGX = cx; prevGY = cy;
      setWake(cx, cy, dx, dy);
    }
    function onTouchStart(e: TouchEvent) {
      const t = e.touches[0]; if (!t) return;
      const [cx, cy] = toGrid(t.clientX, t.clientY);
      addDrop(cx, cy); prevGX = cx; prevGY = cy;
    }
    function onTouchMove(e: TouchEvent) {
      const t = e.touches[0]; if (!t) return;
      const [cx, cy] = toGrid(t.clientX, t.clientY);
      const now = performance.now();
      if (now - lastObjTime < OBJ_THROTTLE) return;
      lastObjTime = now;
      if (prevGX < 0) { prevGX = cx; prevGY = cy; return; }
      let dx = cx - prevGX; let dy = cy - prevGY;
      const len = Math.sqrt(dx * dx + dy * dy);
      if (len < MIN_MOVE) return;
      dx /= len; dy /= len;
      prevGX = cx; prevGY = cy;
      setWake(cx, cy, dx, dy);
    }

    section.addEventListener('mousedown', onMouseDown, { passive: true });
    section.addEventListener('mousemove', onMouseMove, { passive: true });
    section.addEventListener('touchstart', onTouchStart, { passive: true });
    section.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      stopAnimation();
      mqMotion.removeEventListener('change', onMotionChange);
      mqDesktop.removeEventListener('change', onDesktopChange);
      section.removeEventListener('mousedown', onMouseDown);
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('touchstart', onTouchStart);
      section.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-12 md:pt-0"
      style={{ background: 'linear-gradient(to bottom, #141E03, #283107)' }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
        style={{ imageRendering: 'auto' }}
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, transparent 25%, rgba(10,16,3,0.50) 100%)' }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        {/* Mobile-only logo */}
        <motion.div
          className="md:hidden mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          <img
            src="/logo-mark.svg"
            alt="Helora Saúde Integrada"
            className="h-10 mx-auto brightness-0 invert"
          />
        </motion.div>

        <motion.h1
          className="font-serif font-light text-[1.85rem] sm:text-[2.75rem] md:text-5xl lg:text-6xl text-white tracking-tight text-balance leading-[1.2] mb-8 md:mb-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
        >
          Cuidar de você é
          <br />
          <span className="text-helora-gainsboro/75">nossa essência.</span>
        </motion.h1>

        <motion.p
          className="font-sans text-helora-gainsboro/80 text-[0.938rem] sm:text-base md:text-[1.063rem] max-w-md mx-auto mb-12 md:mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
        >
          Um espaço seguro para respirar, ser ouvido e cuidar de você. Sem pressa.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.65 }}
        >
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-helora-sage text-white font-medium py-2.5 px-6 sm:py-3.5 sm:px-9 hover:bg-helora-gainsboro/25 hover:text-white border border-helora-sage/40 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50 text-[15px] sm:text-base active:scale-[0.98] w-auto text-center"
          >
            Agendar sessão
          </a>
          <button
            onClick={() => document.getElementById('equipe')?.scrollIntoView({ behavior: 'smooth' })}
            className="font-sans font-medium text-[15px] text-helora-gainsboro/80 hover:text-white/90 border border-helora-gainsboro/20 hover:border-helora-gainsboro/40 rounded-full px-5 py-2.5 sm:px-6 sm:py-3 sm:text-base transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-helora-sage/50"
          >
            Conheça a equipe
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-20 right-6 z-20">
        <AmbientSound />
      </div>

      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
          style={{ height: 'clamp(30px, 5vw, 60px)' }}
        >
          <path d="M0 20 Q360 55, 720 30 Q1080 5, 1440 40 L1440 60 L0 60Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}
