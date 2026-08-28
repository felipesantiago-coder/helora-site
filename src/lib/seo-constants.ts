/**
 * SEO: Centralized constants for structured data and meta tags.
 * Update SITE_URL when the production domain changes.
 */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://helora.com.br';

export const SITE_NAME = 'Helora Saúde Integrada';

export const SITE_DESCRIPTION =
  'Clínica de psicologia e saúde integrada em Brasília/DF. Psicoterapia individual, de casal e primeira sessão de cuidado com acolhimento e escuta sensível. Agende online.';

export const SITE_KEYWORDS = [
  'psicologia Brasília',
  'psicoterapia',
  'clínica de psicologia',
  'saúde integrada',
  'terapia individual',
  'terapia de casal',
  'psicólogo DF',
  'acolhimento psicológico',
  'Helora',
  'bem-estar emocional',
  'sessão de psicologia',
  'cuidado mental',
];

/**
 * Phone number displayed in structured data.
 * TODO: substituir pelo número real do WhatsApp
 */
export const PHONE = '+55 61 99999-9999';

/** Instagram handle */
export const INSTAGRAM_URL = 'https://www.instagram.com/helora.saude';

/** Business info */
export const BUSINESS_CITY = 'Brasília';
export const BUSINESS_STATE = 'DF';
export const BUSINESS_COUNTRY = 'BR';
