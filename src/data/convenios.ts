export interface Convenio {
  name: string;
  src: string | null;
}

/*
 * Logos otimizados: arquivos WebP 3x resolução (Lanczos) em /public/convenios/
 * Antes: ~1.2 MB de base64 inline no bundle JS (não-cacheável)
 * Agora: ~835 KB de WebP estáticos (cacheável, lazy-loadable, CDN)
 */

export const ALL_CONVENIOS: Convenio[] = [
  { name: 'AFEB', src: '/convenios/afeb-brasal.webp' },
  { name: 'AFFEGO', src: '/convenios/affego.webp' },
  { name: 'ANAFE SAÚDE', src: '/convenios/anafe-saude.webp' },
  { name: 'BACEN SAÚDE', src: '/convenios/bacen.webp' },
  { name: 'BNDES', src: null },
  { name: 'CAEME', src: '/convenios/caeme.webp' },
  { name: 'SAÚDE CAIXA', src: '/convenios/saude-caixa.webp' },
  { name: 'CÂMARA DOS DEPUTADOS', src: '/convenios/pro-sauda-camara.webp' },
  { name: 'CARE PLUS', src: null },
  { name: 'CASEC', src: '/convenios/casec.webp' },
  { name: 'CASEMBRAPA', src: '/convenios/casembrapa.webp' },
  { name: 'CESAN', src: '/convenios/cesan.webp' },
  { name: 'CLIQUE MÉDICOS', src: '/convenios/clique-medicos.webp' },
  { name: 'CNTI', src: null },
  { name: 'CONAB', src: '/convenios/conab.webp' },
  { name: 'EMBRATEL', src: '/convenios/embratel-telos.webp' },
  { name: 'FASCAL', src: null },
  { name: 'GDF SAÚDE', src: '/convenios/gdf-saude.webp' },
  { name: 'GEAP', src: '/convenios/geap.webp' },
  { name: 'GRAVIA', src: '/convenios/gravia.webp' },
  { name: 'LUMINAR SAÚDE', src: '/convenios/luminar-saude.webp' },
  { name: 'PLAN-ASSISTE', src: null },
  { name: 'NOTRE DRAME', src: '/convenios/notre-dame.webp' },
  { name: 'OMINT SAÚDE', src: null },
  { name: 'SAÚDE PETROBRAS', src: '/convenios/saude-petrobras.webp' },
  { name: 'PF SAÚDE', src: '/convenios/pf-saude.webp' },
  { name: 'PMDF', src: '/convenios/pmdf.webp' },
  { name: 'PROASA', src: '/convenios/proasa.webp' },
  { name: 'PRO-SOCIAL TRF', src: '/convenios/pro-social-trf.webp' },
  { name: 'REAL GRANDEZA', src: '/convenios/real-grandeza.webp' },
  { name: 'SAÚDE BRB', src: '/convenios/brb-saude.webp' },
  { name: 'SERPRO', src: '/convenios/serpro.webp' },
  { name: 'SIS (SENADO)', src: '/convenios/sis-senado.webp' },
  { name: 'CMBDF', src: '/convenios/cbmdf.webp' },
  { name: 'STJ', src: '/convenios/pro-ser-stj.webp' },
  { name: 'PLAS/JMU (STM)', src: '/convenios/plas-jmu-stm.webp' },
  { name: 'TJDFT', src: '/convenios/pro-sauda-tjdft.webp' },
  { name: 'TRE SAÚDE', src: '/convenios/tst-saude.webp' },
  { name: 'TRT', src: '/convenios/trt-saude.webp' },
  { name: 'UNAFISCO SAÚDE', src: '/convenios/unafisco-saude.webp' },
];

/* Marquee rows — apenas para o componente ConveniosSection (carrossel na home) */
export const ROW_1 = ALL_CONVENIOS.slice(0, 14);
export const ROW_2 = ALL_CONVENIOS.slice(14, 28);
export const ROW_3 = ALL_CONVENIOS.slice(28);
