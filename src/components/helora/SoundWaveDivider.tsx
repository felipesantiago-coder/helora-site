'use client';

import { useEffect, useRef } from 'react';
import { getSharedAnalyser, onAnalyserChange } from '@/lib/audio-analyser';

/**
 * Sound-wave divider between the hero and the next section.
 * Reads real-time audio data from AmbientSound's AnalyserNode
 * and renders an organic waveform on a canvas.
 *
 * Above the wave line: transparent  →  sage hero shows through
 * Below the wave line: white fill  →  blends into the next section
 */
export function SoundWaveDivider() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(getSharedAnalyser());
  const timeRef = useRef(0);

  /* Stay in sync when AmbientSound creates/destroys the analyser */
  useEffect(() => {
    return onAnalyserChange(() => { analyserRef.current = getSharedAnalyser(); });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    let dataArr: Uint8Array<ArrayBuffer> | null = null;
    let cw = 0;
    let ch = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Resize handler ── */
    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cw = rect.width;
      ch = rect.height;
      canvas!.width = cw * dpr;
      canvas!.height = ch * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener('resize', resize);

    /* ── Draw loop ── */
    function draw() {
      if (!cw || !ch) { rafId = requestAnimationFrame(draw); return; }

      const analyser = analyserRef.current;

      /* Prepare data array when analyser becomes available */
      if (analyser && !dataArr) {
        dataArr = new Uint8Array(analyser.frequencyBinCount) as Uint8Array<ArrayBuffer>;
      }
      if (analyser && dataArr) {
        analyser.getByteTimeDomainData(dataArr);
      }

      ctx!.clearRect(0, 0, cw, ch);

      /* Advance time (slower when reduced-motion) */
      timeRef.current += prefersReducedMotion ? 0.003 : 0.012;
      const t = timeRef.current;

      /* ── Build wave path ── */
      const SEGMENTS = 100;
      const points: { x: number; y: number }[] = [];

      for (let i = 0; i <= SEGMENTS; i++) {
        const nx = i / SEGMENTS; // 0..1
        const x = nx * cw;

        /*
         * Base organic wave: layered sines that create a
         * natural, never-repeating-feeling undulation.
         */
        let wave = 0;
        wave += Math.sin(nx * Math.PI * 2.0 + t * 0.7) * 0.30;
        wave += Math.sin(nx * Math.PI * 3.7 - t * 0.5) * 0.15;
        wave += Math.sin(nx * Math.PI * 5.3 + t * 1.1) * 0.08;
        wave += Math.sin(nx * Math.PI * 1.2 + t * 0.3) * 0.20;

        /* Audio modulation */
        if (dataArr && analyser) {
          /* Sample from time-domain data (waveform) */
          const idx = Math.floor(nx * dataArr.length * 0.4);
          const sample = (dataArr[idx] - 128) / 128; // -1..1
          wave += sample * 0.35;

          /* Add gentle frequency-band influence for fullness */
          const freqIdx = Math.floor(nx * 32); // first 32 bins (lows)
          const freqSample = (dataArr[freqIdx] - 128) / 128;
          wave += freqSample * 0.12;
        }

        /* Map wave (-1..1 range) to canvas Y, centered at 45% height */
        const y = ch * 0.45 + wave * ch * 0.32;
        points.push({ x, y });
      }

      /* ── Draw white fill below wave ── */
      ctx!.beginPath();
      ctx!.moveTo(points[0].x, points[0].y);

      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const cpx = (prev.x + curr.x) / 2;
        const cpy = (prev.y + curr.y) / 2;
        ctx!.quadraticCurveTo(prev.x, prev.y, cpx, cpy);
      }
      /* Last segment */
      const last = points[points.length - 1];
      ctx!.lineTo(last.x, last.y);

      /* Close: down to bottom-right, across to bottom-left, up to start */
      ctx!.lineTo(cw, ch);
      ctx!.lineTo(0, ch);
      ctx!.lineTo(0, points[0].y);
      ctx!.closePath();

      ctx!.fillStyle = '#FFFFFF';
      ctx!.fill();

      rafId = requestAnimationFrame(draw);
    }

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div
      className="w-full overflow-hidden"
      style={{ marginTop: '-1px' }}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full block"
        style={{ height: 'clamp(36px, 5vw, 64px)' }}
      />
    </div>
  );
}
