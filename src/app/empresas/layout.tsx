import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Helora para Empresas | Helora Saúde Integrada',
  description:
    'Palestras, consultoria organizacional, supervisão clínica, avaliações psicológicas, laudos técnicos e programas de bem-estar para empresas e instituições em Brasília, DF.',
  openGraph: {
    title: 'Helora para Empresas | Helora Saúde Integrada',
    description:
      'Levamos saúde mental para empresas, escolas, consultórios e instituições. Palestras, consultoria, supervisão e muito mais.',
    url: 'https://www.clinicahelora.com/empresas',
    siteName: 'Helora | Saúde Integrada',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Helora | Clínica Multidisciplinar em Brasília',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.clinicahelora.com/empresas',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function EmpresasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
