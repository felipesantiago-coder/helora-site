export interface Convenio {
  name: string;
  src: string | null;
}

/*
 * Convênios Helora Saúde
 * Logos WebP em /public/convenios/ (qualidade 88, max 800px)
 */

export const ALL_CONVENIOS: Convenio[] = [
  { name: 'AFEB (BRASAL)', src: '/convenios/afeb-brasal.webp' },
  { name: 'AFFEGO', src: '/convenios/affego.webp' },
  { name: 'ANAFE SAÚDE', src: '/convenios/anafe-saude.webp' },
  { name: 'BC SAÚDE', src: '/convenios/bc-saude.webp' },
  { name: 'BNDES', src: '/convenios/bndes.webp' },
  { name: 'CAEME', src: '/convenios/caeme.webp' },
  { name: 'SAÚDE CAIXA', src: '/convenios/saude-caixa.webp' },
  { name: 'CÂMARA DOS DEPUTADOS', src: '/convenios/camara-deputados.webp' },
  { name: 'CARE PLUS', src: '/convenios/care-plus.webp' },
  { name: 'CASEC', src: '/convenios/casec.webp' },
  { name: 'CASEMBRAPA', src: '/convenios/casembrapa.webp' },
  { name: 'CESAN', src: '/convenios/cesan.webp' },
  { name: 'CLIQUE MÉDICOS', src: '/convenios/clique-medicos.webp' },
  { name: 'CNTI', src: '/convenios/cnti.webp' },
  { name: 'CONAB', src: '/convenios/conab.webp' },
  { name: 'EMBRATEL', src: '/convenios/embratel.webp' },
  { name: 'FASCAL', src: '/convenios/fascal.webp' },
  { name: 'GDF SAÚDE', src: '/convenios/gdf-saude.webp' },
  { name: 'GEAP', src: '/convenios/geap.webp' },
  { name: 'GRAVIA', src: '/convenios/gravia.webp' },
  { name: 'LUMINAR SAÚDE', src: '/convenios/luminar-saude.webp' },
  { name: 'PLAN-ASSISTE', src: '/convenios/plan-assiste.webp' },
  { name: 'NOTRE DRAME', src: '/convenios/notre-drame.webp' },
  { name: 'OMINT SAÚDE', src: '/convenios/omint-saude.webp' },
  { name: 'SAÚDE PETROBRAS', src: '/convenios/saude-petrobras.webp' },
  { name: 'PF SAÚDE', src: '/convenios/pf-saude.webp' },
  { name: 'PMDF', src: '/convenios/pmdf.webp' },
  { name: 'PROASA', src: '/convenios/proasa.webp' },
  { name: 'PRO-SOCIAL TRF', src: '/convenios/pro-social-trf.webp' },
  { name: 'REAL GRANDEZA', src: '/convenios/real-grandeza.webp' },
  { name: 'SAÚDE BRB', src: '/convenios/saude-brb.webp' },
  { name: 'SERPRO', src: '/convenios/serpro.webp' },
  { name: 'SIS (SENADO)', src: '/convenios/sis-senado.webp' },
  { name: 'CMBDF', src: '/convenios/cbmdf.webp' },
  { name: 'STJ', src: '/convenios/stj.webp' },
  { name: 'PLAS/JMU (STM)', src: '/convenios/plas-jmu-stm.webp' },
  { name: 'TJDFT', src: '/convenios/tjdft.webp' },
  { name: 'TRE SAÚDE', src: '/convenios/tre-saude.webp' },
  { name: 'TRT', src: '/convenios/trt.webp' },
  { name: 'UNAFISCO SAÚDE', src: '/convenios/unafisco-saude.webp' },
  { name: 'STF MED', src: '/convenios/stf-med.webp' },
];

/* Marquee rows: para o componente ConveniosSection (carrossel na home) */
export const ROW_1 = ALL_CONVENIOS.slice(0, 14);
export const ROW_2 = ALL_CONVENIOS.slice(14, 28);
export const ROW_3 = ALL_CONVENIOS.slice(28);
