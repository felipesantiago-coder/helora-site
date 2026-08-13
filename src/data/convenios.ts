export interface Convenio {
  name: string;
  src: string | null;
}

/*
 * Logos otimizados: arquivos WebP 3x resolução (Lanczos) em /public/convenios/
 * Antes: ~1.2 MB de base64 inline no bundle JS (não-cacheável)
 * Agora: ~835 KB de WebP estáticos (cacheável, lazy-loadable, CDN)
 */

export const ROW_1: Convenio[] = [
  { name: 'NOTRE DAME', src: '/convenios/notre-dame.webp' },
  { name: 'TRES SAUDE', src: '/convenios/tres-saude.webp' },
  { name: 'REAL GRANDEZA', src: '/convenios/real-grandeza.webp' },
  { name: 'UNAFISCO SAUDE', src: '/convenios/unafisco-saude.webp' },
  { name: 'GEAP', src: '/convenios/geap.webp' },
  { name: 'GRAVIA', src: '/convenios/gravia.webp' },
  { name: 'PROASA', src: '/convenios/proasa.webp' },
  { name: 'LUMINAR SAUDE', src: '/convenios/luminar-saude.webp' },
  { name: 'AFEB BRASAL', src: '/convenios/afeb-brasal.webp' },
  { name: 'AFFEGO', src: '/convenios/affego.webp' },
  { name: 'ANAFE SAUDE', src: '/convenios/anafe-saude.webp' },
  { name: 'CLIQUE MEDICOS', src: '/convenios/clique-medicos.webp' },
  { name: 'CUIDADOS PLUS', src: '/convenios/cuidados-plus.webp' },
  { name: 'FAPES', src: '/convenios/fapes.webp' },
  { name: 'SAUDE CAIXA', src: '/convenios/saude-caixa.webp' },
  { name: 'SAUDE PETROBRAS', src: '/convenios/saude-petrobras.webp' },
  { name: 'SERPRO', src: '/convenios/serpro.webp' },
  { name: 'SIS SENADO', src: '/convenios/sis-senado.webp' },
  { name: 'STF-MED', src: '/convenios/stf-med.webp' },
];

export const ROW_2: Convenio[] = [
  { name: 'GDF SAUDE', src: '/convenios/gdf-saude.webp' },
  { name: 'PF SAUDE', src: '/convenios/pf-saude.webp' },
  { name: 'PMDF', src: '/convenios/pmdf.webp' },
  { name: 'PRO-SAUDA CAMARA', src: '/convenios/pro-sauda-camara.webp' },
  { name: 'PRO-SAUDA TJDFT', src: '/convenios/pro-sauda-tjdft.webp' },
  { name: 'PRO-SER STJ', src: '/convenios/pro-ser-stj.webp' },
  { name: 'PRO-SOCIAL TRF', src: '/convenios/pro-social-trf.webp' },
  { name: 'SAUDE POSTAL', src: '/convenios/saude-postal.webp' },
  { name: 'PLAS/JMU STM', src: '/convenios/plas-jmu-stm.webp' },
  { name: 'TRT SAUDE', src: '/convenios/trt-saude.webp' },
  { name: 'TST SAUDE', src: '/convenios/tst-saude.webp' },
  { name: 'BACEN', src: '/convenios/bacen.webp' },
  { name: 'BRB SAUDE', src: '/convenios/brb-saude.webp' },
  { name: 'CONAB', src: '/convenios/conab.webp' },
  { name: 'CBMDF', src: '/convenios/cbmdf.webp' },
  { name: 'EMBRATEL TELOS', src: '/convenios/embratel-telos.webp' },
  { name: 'CAEME', src: '/convenios/caeme.webp' },
  { name: 'CESAN', src: '/convenios/cesan.webp' },
  { name: 'CASEC', src: '/convenios/casec.webp' },
  { name: 'CASEMBRAPA', src: '/convenios/casembrapa.webp' },
];

export const ROW_3: Convenio[] = [
  { name: 'VIDA EMPRESARIAL', src: '/convenios/vida-empresarial.webp' },
];

export const ALL_CONVENIOS: Convenio[] = [
  ...ROW_1,
  ...ROW_2,
  ...ROW_3,
];
