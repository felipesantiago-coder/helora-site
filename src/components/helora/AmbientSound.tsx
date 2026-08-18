'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const FADE_DURATION = 1.5;
const MASTER_VOLUME = 2.5;
const LOOP_S = 48;

function snap(f: number): number {
  return Math.round(f * LOOP_S) / LOOP_S;
}

const F = {
  A2: snap(110.0),
  C3: snap(130.81), D3: snap(146.83), E3: snap(164.81),
  G2: snap(98.0),  G3: snap(196.0),  A3: snap(220.0),
  C4: snap(261.63), D4: snap(293.66), E4: snap(329.63),
  G4: snap(392.0),  A4: snap(440.0),  C5: snap(523.25),
};

const STEREO_PHASE = Math.PI / 5;

function smoothstep(t: number, a: number, b: number): number {
  if (t <= a) return 0;
  if (t >= b) return 1;
  const x = (t - a) / (b - a);
  return x * x * (3 - 2 * x);
}

type Chord = { t0: number; t1: number; notes: number[]; g: number[] };

const CHORDS: Chord[] = [
  { t0: 0,  t1: 12, notes: [F.C3, F.E3, F.G3],       g: [0.040, 0.032, 0.024] },
  { t0: 9,  t1: 21, notes: [F.A2, F.C3, F.E3],       g: [0.036, 0.028, 0.023] },
  { t0: 18, t1: 30, notes: [F.D3, F.G3, F.A3],       g: [0.032, 0.026, 0.020] },
  { t0: 27, t1: 36, notes: [F.E3, F.G3, F.A3],       g: [0.034, 0.025, 0.019] },
  { t0: 33, t1: 42, notes: [F.G2, F.C3, F.D3],       g: [0.030, 0.027, 0.021] },
  { t0: 39, t1: 48, notes: [F.A2, F.C3, F.E3, F.G3], g: [0.033, 0.026, 0.021, 0.016] },
];

type Bell = { t: number; freq: number; vol: number; decay: number };

const BELLS: Bell[] = [
  { t: 2.5,  freq: F.E4, vol: 0.015, decay: 3.5 },
  { t: 6.0,  freq: F.C5, vol: 0.017, decay: 4.0 },
  { t: 9.5,  freq: F.G4, vol: 0.012, decay: 3.0 },
  { t: 12.0, freq: F.A4, vol: 0.014, decay: 3.5 },
  { t: 16.0, freq: F.E4, vol: 0.016, decay: 4.0 },
  { t: 20.0, freq: F.D4, vol: 0.013, decay: 3.0 },
  { t: 23.5, freq: F.A4, vol: 0.015, decay: 3.5 },
  { t: 26.5, freq: F.G4, vol: 0.012, decay: 3.0 },
  { t: 29.0, freq: F.E4, vol: 0.016, decay: 4.0 },
  { t: 33.0, freq: F.C5, vol: 0.014, decay: 3.5 },
  { t: 35.5, freq: F.G4, vol: 0.013, decay: 3.0 },
  { t: 38.5, freq: F.D4, vol: 0.011, decay: 3.0 },
  { t: 41.0, freq: F.A4, vol: 0.013, decay: 3.0 },
];

function generateMusicBuffer(ctx: AudioContext): AudioBuffer {
  const sr = ctx.sampleRate;
  const len = Math.floor(sr * LOOP_S);
  const buf = ctx.createBuffer(2, len, sr);
  const L = buf.getChannelData(0);
  const R = buf.getChannelData(1);
  const TAU = 2 * Math.PI;

  for (const ch of CHORDS) {
    for (let n = 0; n < ch.notes.length; n++) {
      const freq = ch.notes[n];
      const vol = ch.g[n];
      const i0 = Math.floor(ch.t0 * sr);
      const i1 = Math.min(Math.floor(ch.t1 * sr), len);
      for (let i = i0; i < i1; i++) {
        const t = i / sr;
        const env = smoothstep(t, ch.t0, ch.t0 + 3) * (1 - smoothstep(t, ch.t1 - 3, ch.t1));
        const pulse = 1.0 + 0.06 * Math.sin(TAU * t);
        const a = env * vol * pulse;
        const phaseL = TAU * freq * i / sr;
        const phaseR = phaseL + STEREO_PHASE;
        L[i] += (Math.sin(phaseL) + Math.sin(phaseL * 2) * 0.10) * a;
        R[i] += (Math.sin(phaseR) + Math.sin(phaseR * 2) * 0.10) * a;
      }
    }
  }

  for (const b of BELLS) {
    const bs = Math.floor(b.t * sr);
    const be = Math.min(Math.floor((b.t + b.decay) * sr), len);
    for (let i = bs; i < be; i++) {
      const dt = (i - bs) / sr;
      const env = smoothstep(dt, 0, 0.25) * Math.exp(-dt * 1.3) * b.vol;
      const phase = TAU * b.freq * i / sr;
      const oPhase = TAU * b.freq * 2.5 * i / sr;
      const s = Math.sin(phase) * env;
      const o = Math.sin(oPhase) * env * 0.22;
      L[i] += s * 1.0 + o * 0.5;
      R[i] += s * 0.65 + o * 1.0;
    }
  }

  for (let i = 0; i < len; i++) {
    L[i] = Math.tanh(L[i] * 2.0) / 2.0;
    R[i] = Math.tanh(R[i] * 2.0) / 2.0;
  }

  return buf;
}

export function AmbientSound() {
  const [playing, setPlaying] = useState(true);
  const nodesRef = useRef<{
    ctx: AudioContext;
    master: GainNode;
    musicSrc: AudioBufferSourceNode;
    oscillators: (AudioBufferSourceNode | OscillatorNode)[];
    noiseProcessor: ScriptProcessorNode | null;
  } | null>(null);
  const userInteractedRef = useRef(false);

  /** Build all audio nodes (shared by init and re-init) */
  const buildNodes = useCallback((ctx: AudioContext) => {
    const now = ctx.currentTime;

    const master = ctx.createGain();
    master.gain.setValueAtTime(0, now);
    master.gain.linearRampToValueAtTime(MASTER_VOLUME, now + FADE_DURATION);
    master.connect(ctx.destination);

    const oscillators: (AudioBufferSourceNode | OscillatorNode)[] = [];

    /* WATER: brown noise */
    const waterGain = ctx.createGain();
    waterGain.gain.value = 0.10;
    waterGain.connect(master);

    const waterLPF = ctx.createBiquadFilter();
    waterLPF.type = 'lowpass';
    waterLPF.frequency.value = 350;
    waterLPF.Q.value = 0.5;
    waterLPF.connect(waterGain);

    const NOISE_BUF_SIZE = 4096;
    const noiseProc = ctx.createScriptProcessor(NOISE_BUF_SIZE, 0, 2);
    let nL = 0; let nR = 0;
    noiseProc.onaudioprocess = (e: AudioProcessingEvent) => {
      const oL = e.outputBuffer.getChannelData(0);
      const oR = e.outputBuffer.getChannelData(1);
      for (let i = 0; i < NOISE_BUF_SIZE; i++) {
        nL = (nL + 0.02 * (Math.random() * 2 - 1)) / 1.02;
        nR = (nR + 0.02 * (Math.random() * 2 - 1)) / 1.02;
        oL[i] = nL * 3.5;
        oR[i] = nR * 3.5;
      }
    };
    noiseProc.connect(waterLPF);

    /* SUB-BASS */
    const subBass = ctx.createOscillator();
    subBass.type = 'sine';
    subBass.frequency.value = 65.41;
    const subGain = ctx.createGain();
    subGain.gain.value = 0.020;
    subBass.connect(subGain);
    subGain.connect(master);
    subBass.start(now);
    oscillators.push(subBass);

    const pulseLFO = ctx.createOscillator();
    pulseLFO.type = 'sine';
    pulseLFO.frequency.value = 1.0;
    const pulseGain = ctx.createGain();
    pulseGain.gain.value = 0.004;
    pulseLFO.connect(pulseGain);
    pulseGain.connect(subGain.gain);
    pulseLFO.start(now);
    oscillators.push(pulseLFO);

    /* MUSIC */
    const musicBuf = generateMusicBuffer(ctx);
    const musicSrc = ctx.createBufferSource();
    musicSrc.buffer = musicBuf;
    musicSrc.loop = true;
    musicSrc.connect(master);
    musicSrc.start(now);

    return { ctx, master, musicSrc, oscillators, noiseProcessor: noiseProc };
  }, []);

  /** Initialize audio: create context + nodes, try resume */
  const initAudio = useCallback(() => {
    if (nodesRef.current) return;
    const ctx = new AudioContext();
    const nodes = buildNodes(ctx);
    nodesRef.current = nodes;
    setPlaying(true);

    /* Browser autoplay policy: try resume immediately.
     * Works if the user already interacted with the domain. */
    if (ctx.state === 'suspended') {
      ctx.resume().then(() => {
        if (ctx.state === 'running') setPlaying(true);
      }).catch(() => { /* will resume on gesture */ });
    }
  }, [buildNodes]);

  /** Destroy all nodes */
  const destroyNodes = useCallback((nodes: NonNullable<typeof nodesRef.current>) => {
    const { ctx, master } = nodes;
    const now = ctx.currentTime;
    master.gain.cancelScheduledValues(now);
    master.gain.setValueAtTime(master.gain.value, now);
    master.gain.linearRampToValueAtTime(0, now + FADE_DURATION);
    setTimeout(() => {
      try { nodes.musicSrc.stop(); } catch { /* ok */ }
      nodes.oscillators.forEach((n) => { try { n.stop(); } catch { /* ok */ } });
      if (nodes.noiseProcessor) nodes.noiseProcessor.disconnect();
      ctx.close();
    }, FADE_DURATION * 1000 + 150);
  }, []);

  const stopAudio = useCallback(() => {
    if (!nodesRef.current) return;
    const ref = nodesRef.current;
    nodesRef.current = null;
    destroyNodes(ref);
    setPlaying(false);
  }, [destroyNodes]);

  const toggle = useCallback(() => {
    if (playing) stopAudio();
    else initAudio();
  }, [playing, stopAudio, initAudio]);

  /* ── Auto-start: create context on mount, resume on gesture ── */
  useEffect(() => {
    // Create context immediately
    initAudio();

    // If context is still suspended, listen for any user gesture
    const resumeOnGesture = () => {
      if (userInteractedRef.current) return;
      userInteractedRef.current = true;
      const nodes = nodesRef.current;
      if (nodes?.ctx.state === 'suspended') {
        nodes.ctx.resume().then(() => setPlaying(true)).catch(() => {});
      }
    };

    document.addEventListener('click', resumeOnGesture);
    document.addEventListener('touchstart', resumeOnGesture);
    document.addEventListener('keydown', resumeOnGesture);

    return () => {
      document.removeEventListener('click', resumeOnGesture);
      document.removeEventListener('touchstart', resumeOnGesture);
      document.removeEventListener('keydown', resumeOnGesture);
    };
  }, [initAudio]);

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={playing ? 'Desativar som ambiente' : 'Ativar som ambiente'}
      title={playing ? 'Desativar som' : 'Ouvir som ambiente'}
      className={
        'group relative z-20 flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-500 ' +
        (playing
          ? 'border-white/30 bg-white/10 text-white hover:bg-white/15'
          : 'border-white/15 bg-white/5 text-white/50 hover:border-white/30 hover:text-white/70')
      }
    >
      {playing ? (
        <Volume2 className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
      ) : (
        <VolumeX className="w-4 h-4" strokeWidth={1.5} aria-hidden="true" />
      )}
      {playing && (
        <span className="absolute inset-0 rounded-full border border-white/20 animate-ping pointer-events-none" aria-hidden="true" />
      )}
    </button>
  );
}
