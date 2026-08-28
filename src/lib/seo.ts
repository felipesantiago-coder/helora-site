import {
  SITE_URL,
  SITE_NAME,
  PHONE,
} from '@/lib/seo-constants';

/**
 * SEO: JSON-LD Structured Data Builders
 *
 * These schemas tell Google exactly what your business is,
 * which enables rich results (business info, sitelinks, FAQ, etc.)
 * without spending a single cent on ads.
 *
 * Usage: import and render via <JsonLd data={schema} /> in layout.tsx
 */

/* ─── Organization / MedicalBusiness ───────────────────────────────────── */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: 'Helora',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}/logo.svg`,
    description:
      'Clínica de psicologia e saúde integrada em Brasília/DF. Acolhimento, escuta sensível e cuidado genuíno para seu bem-estar.',
    telephone: PHONE,
    email: 'contato@helora.com.br',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brasília',
      addressRegion: 'DF',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -15.7975,
      longitude: -47.8919,
    },
    areaServed: [
      { '@type': 'City', name: 'Brasília' },
      { '@type': 'State', name: 'Distrito Federal' },
    ],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    sameAs: ['https://www.instagram.com/helora.saude'],
    medicalSpecialty: [
      'https://schema.org/Psychotherapy',
      'https://schema.org/Counseling',
    ],
    availableService: [
      {
        '@type': 'MedicalTherapy',
        name: 'Psicoterapia Individual',
        description: 'Sessões individuais de psicologia clínica com foco no acolhimento e cuidado integrado.',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Psicoterapia de Casal',
        description: 'Espaço compartilhado para reconstruir laços e fortalecer a conexão.',
      },
      {
        '@type': 'MedicalTherapy',
        name: 'Primeira Sessão de Cuidado',
        description: 'Um espaço inicial para se conhecer e entender como podemos te acompanhar.',
      },
    ],
  };
}

/* ─── WebSite (enables sitelinks) ─────────────────────────────────────── */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: 'Helora',
    url: SITE_URL,
    inLanguage: 'pt-BR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/* ─── FAQPage (rich FAQ results in Google) ───────────────────────────── */
export function getFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'O que é a Helora Saúde Integrada?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Helora é uma clínica de psicologia e saúde integrada em Brasília/DF. Nascemos da crença de que cuidado verdadeiro começa com presença. Oferecemos psicoterapia individual, de casal e acompanhamento integrado, sempre com acolhimento e escuta sensível.',
        },
      },
      {
        '@type': 'Question',
        name: 'Quais serviços a Helora oferece?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Helora oferece primeiríssima sessão de cuidado, psicoterapia individual e psicoterapia de casal. Cada sessão é pensada para o seu momento, sem pressa e sem julgamento.',
        },
      },
      {
        '@type': 'Question',
        name: 'Onde fica a Helora?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A Helora está localizada em Brasília, Distrito Federal. Atendemos de segunda a sexta das 08h às 20h e aos sábados das 08h às 14h.',
        },
      },
      {
        '@type': 'Question',
        name: 'Como agendar uma sessão na Helora?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Você pode agendar sua primeira sessão diretamente pelo nosso site, através do botão "Agendar sua primeira sessão", ou pelo WhatsApp.',
        },
      },
      {
        '@type': 'Question',
        name: 'A Helora atende por convênio?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sim, a Helora aceita diversos convênios. Consulte a lista completa no nosso site para verificar se o seu plano está incluído.',
        },
      },
    ],
  };
}

/* ─── BreadcrumbList (helps Google understand site structure) ─────────── */
export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
