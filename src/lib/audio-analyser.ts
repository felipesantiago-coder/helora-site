/**
 * Shared audio analyser so the sound-wave divider can
 * read real-time frequency/time-domain data from AmbientSound.
 */

let analyser: AnalyserNode | null = null;
const listeners = new Set<() => void>();

export function getSharedAnalyser(): AnalyserNode | null {
  return analyser;
}

export function setSharedAnalyser(a: AnalyserNode | null): void {
  analyser = a;
  listeners.forEach((fn) => fn());
}

export function onAnalyserChange(fn: () => void): () => void {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}
