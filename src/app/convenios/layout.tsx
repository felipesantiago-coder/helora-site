import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convênios | Helora Saúde Integrada',
  description:
    'Confira todos os convênios e planos de saúde aceitos pela Helora. Atendimento via Notre Dame, GEAP, SERPRO, Saúde Caixa e muitos outros em Brasília, DF.',
  openGraph: {
    title: 'Convênios | Helora Saúde Integrada',
    description:
      'Confira todos os convênios e planos de saúde aceitos pela Helora em Brasília, DF.',
    url: 'https://www.clinicahelora.com/convenios',
    siteName: 'Helora | Saúde Integrada',
    locale: 'pt_BR',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.clinicahelora.com/convenios',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConveniosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
