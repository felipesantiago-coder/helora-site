export interface Convenio {
  name: string;
  src: string | null;
}

/*
 * Convênios Helora Saúde
 * Logos serão adicionados via links fornecidos pelo cliente.
 * Arquivos WebP ficam em /public/convenios/
 */

export const ALL_CONVENIOS: Convenio[] = [
  { name: 'AFEB', src: null },
  { name: 'AFFEGO', src: null },
  { name: 'ANAFE SAÚDE', src: null },
  { name: 'BC SAÚDE', src: null },
  { name: 'BNDES', src: null },
  { name: 'CAEME', src: null },
  { name: 'SAÚDE CAIXA', src: null },
  { name: 'CÂMARA DOS DEPUTADOS', src: null },
  { name: 'CARE PLUS', src: null },
  { name: 'CASEC', src: null },
  { name: 'CASEMBRAPA', src: null },
  { name: 'CESAN', src: null },
  { name: 'CLIQUE MÉDICOS', src: null },
  { name: 'CNTI', src: null },
  { name: 'CONAB', src: null },
  { name: 'EMBRATEL', src: null },
  { name: 'FASCAL', src: null },
  { name: 'GDF SAÚDE', src: null },
  { name: 'GEAP', src: null },
  { name: 'GRAVIA', src: null },
  { name: 'LUMINAR SAÚDE', src: null },
  { name: 'PLAN-ASSISTE', src: null },
  { name: 'NOTRE DRAME', src: null },
  { name: 'OMINT SAÚDE', src: null },
  { name: 'SAÚDE PETROBRAS', src: null },
  { name: 'PF SAÚDE', src: null },
  { name: 'PMDF', src: null },
  { name: 'PROASA', src: null },
  { name: 'PRO-SOCIAL TRF', src: null },
  { name: 'REAL GRANDEZA', src: null },
  { name: 'SAÚDE BRB', src: null },
  { name: 'SERPRO', src: null },
  { name: 'SIS (SENADO)', src: null },
  { name: 'CMBDF', src: null },
  { name: 'STJ', src: null },
  { name: 'PLAS/JMU (STM)', src: null },
  { name: 'TJDFT', src: null },
  { name: 'TRE SAÚDE', src: null },
  { name: 'TRT', src: null },
  { name: 'UNAFISCO SAÚDE', src: null },
];

/* Marquee rows — para o componente ConveniosSection (carrossel na home) */
export const ROW_1 = ALL_CONVENIOS.slice(0, 14);
export const ROW_2 = ALL_CONVENIOS.slice(14, 28);
export const ROW_3 = ALL_CONVENIOS.slice(28);
