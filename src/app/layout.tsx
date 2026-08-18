import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-fraunces',
});

const SITE_URL = "https://www.clinicahelora.com";

export const viewport: Viewport = {
  themeColor: "#283107",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Helora | Clínica de Psicologia em Brasília | Saúde Integrada",
  description:
    "Clínica de psicologia em Brasília, DF. Atendimento em psicoterapia, neuropsicologia e avaliação psicológica para todas as faixas etárias. Agende por WhatsApp.",
  keywords: [
    "psicologia Brasília",
    "psicoterapia",
    "clínica de psicologia",
    "saúde integrada",
    "terapia individual",
    "terapia de casal",
    "psicólogo DF",
    "neuropsicologia",
    "avaliação psicológica",
    "acolhimento psicológico",
    "Helora",
    "bem-estar emocional",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Helora | Clínica de Psicologia em Brasília",
    description:
      "Cuidar de você é nossa essência. Psicoterapia individual, de casal, neuropsicologia e avaliação psicológica em Brasília/DF. Um espaço de acolhimento pensado para você.",
    type: "website",
    locale: "pt_BR",
    url: `${SITE_URL}/`,
    siteName: "Helora | Saúde Integrada",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Helora | Clínica de Psicologia em Brasília — Cuidar de você é nossa essência",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helora | Clínica de Psicologia em Brasília",
    description:
      "Cuidar de você é nossa essência. Psicoterapia individual, de casal, neuropsicologia e avaliação psicológica em Brasília/DF. Um espaço de acolhimento pensado para você.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

/**
 * JSON-LD Structured Data: @graph com todos os schemas.
 * MedicalBusiness  → rich card com info do negócio
 * WebSite         → sitelinks + caixa de busca
 * FAQPage         → perguntas expandíveis nos resultados
 * BreadcrumbList  → estrutura de navegação
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Helora | Saúde Integrada",
      alternateName: "Helora",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-mark.svg`,
      telephone: "+55-61-99593-8870",
      email: "contato@clinicahelora.com",
      sameAs: ["https://www.instagram.com/heloraclinica?igsh=bXJkbTg3Z2VzYXRs"],
    },
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: "Helora | Saúde Integrada",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.webp`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "SEPS 707/907 Conjunto E Sala 214, Edifício San Marino, Asa Sul",
        addressLocality: "Brasília",
        addressRegion: "DF",
        addressCountry: "BR",
      },
      telephone: "+55-61-99593-8870",
      priceRange: "$$",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "20:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "14:00",
        },
      ],
      medicalSpecialty: [
        "Psicologia Clínica",
        "Neuropsicologia",
        "Avaliação Psicológica",
      ],
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Psicoterapia Individual",
          description: "Sessões de psicologia clínica com foco no acolhimento e cuidado integrado.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Psicoterapia de Casal",
          description: "Espaço compartilhado para reconstruir laços e fortalecer a conexão.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Neuropsicologia",
          description: "Avaliação e reabilitação neuropsicológica para todas as faixas etárias.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Avaliação Psicológica",
          description: "Avaliações psicológicas completas com laudo técnico.",
        },
      ],
      areaServed: [
        { "@type": "City", name: "Brasília" },
        { "@type": "State", name: "Distrito Federal" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Helora | Saúde Integrada",
      url: SITE_URL,
      inLanguage: "pt-BR",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O que é a Helora Saúde Integrada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Helora é uma clínica de psicologia e saúde integrada em Brasília/DF. Oferecemos psicoterapia individual, de casal, neuropsicologia e avaliação psicológica, sempre com acolhimento e escuta sensível.",
          },
        },
        {
          "@type": "Question",
          name: "Quais serviços a Helora oferece?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Helora oferece psicoterapia individual, psicoterapia de casal, neuropsicologia e avaliação psicológica. Cada sessão é pensada para o seu momento, sem pressa e sem julgamento.",
          },
        },
        {
          "@type": "Question",
          name: "Onde fica a Helora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Helora está localizada em Brasília, Distrito Federal. Atendemos de segunda a sexta das 08h às 20h e aos sábados das 08h às 14h.",
          },
        },
        {
          "@type": "Question",
          name: "Como agendar uma sessão na Helora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Você pode agendar sua primeira sessão diretamente pelo nosso site, através do botão Agendar, ou pelo WhatsApp.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Conceito", item: `${SITE_URL}/#conceito` },
        { "@type": "ListItem", position: 3, name: "Serviços", item: `${SITE_URL}/#servicos` },
        { "@type": "ListItem", position: 4, name: "Equipe", item: `${SITE_URL}/#equipe` },
        { "@type": "ListItem", position: 5, name: "Convênios", item: `${SITE_URL}/convenios` },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="canonical" href={`${SITE_URL}/`} />
        <link rel="preconnect" href="https://api.whatsapp.com" crossOrigin="anonymous" />
        <link rel="me" href="https://www.instagram.com/heloraclinica?igsh=bXJkbTg3Z2VzYXRs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-helora-dark-green focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
