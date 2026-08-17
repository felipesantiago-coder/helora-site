import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços Institucionais | Helora Saúde Integrada',
  description:
    'Palestras, consultoria organizacional, supervisão clínica, avaliações psicológicas, laudos técnicos e programas de bem-estar para empresas e instituições em Brasília, DF.',
  openGraph: {
    title: 'Serviços Institucionais | Helora Saúde Integrada',
    description:
      'Levamos saúde mental para empresas, escolas, consultórios e instituições. Palestras, consultoria, supervisão e muito mais.',
    url: 'https://www.clinicahelora.com/institucional',
    siteName: 'Helora | Saúde Integrada',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.clinicahelora.com/institucional',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function InstitucionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
