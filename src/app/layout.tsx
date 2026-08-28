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
  themeColor: "#9C6146",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Helora | Clínica de Psicologia em Brasília — Saúde Integrada",
    template: "%s | Helora Saúde Integrada",
  },
  description:
    "Clínica de psicologia em Brasília, DF. Psicoterapia individual, de casal, neuropsicologia e avaliação psicológica para todas as faixas etárias. Agende pelo WhatsApp.",
  authors: [{ name: "Helora Saúde Integrada", url: SITE_URL }],
  creator: "Helora Saúde Integrada",
  publisher: "Helora Saúde Integrada",
  keywords: [
    "psicologia Brasília",
    "psicoterapia Brasília",
    "clínica de psicologia Brasília",
    "psicólogo Brasília DF",
    "psicólogo Asa Sul",
    "terapia individual",
    "terapia de casal",
    "neuropsicologia",
    "avaliação psicológica",
    "avaliação neuropsicológica",
    "terapia cognitivo-comportamental",
    "terapia do esquema",
    "TDAH Brasília",
    "autismo avaliação",
    "saúde mental Brasília",
    "Helora",
    "saúde integrada",
    "acolhimento psicológico",
    "bem-estar emocional",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/favicon.svg",
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
        url: `${SITE_URL}/og-image.webp`,
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
      "Cuidar de você é nossa essência. Psicoterapia individual, de casal, neuropsicologia e avaliação psicológica em Brasília/DF.",
    images: [`${SITE_URL}/og-image.webp`],
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
  other: {
    "geo.region": "BR-DF",
    "geo.placename": "Brasília",
    "geo.position": "-15.7801;-47.9292",
    "ICBM": "-15.7801, -47.9292",
  },
};

/**
 * JSON-LD Structured Data: @graph com todos os schemas.
 * Organization        → identity + contact
 * LocalBusiness/MedicalBusiness → local SEO rich card
 * WebSite             → sitelinks search box
 * FAQPage             → perguntas expandíveis nos resultados
 * BreadcrumbList      → estrutura de navegação
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Helora Saúde Integrada",
      alternateName: ["Helora", "Clínica Helora"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo-mark.svg`,
        width: 200,
        height: 200,
      },
      image: `${SITE_URL}/og-image.webp`,
      telephone: "+55-61-99593-8870",
      email: "contato@clinicahelora.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "SEPS 707/907 Conjunto E Sala 214, Edifício San Marino, Asa Sul",
        addressLocality: "Brasília",
        addressRegion: "DF",
        postalCode: "70390-075",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -15.7801,
        longitude: -47.9292,
      },
      sameAs: [
        "https://www.instagram.com/heloraclinica",
        "https://api.whatsapp.com/send?phone=5561995938870",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-61-99593-8870",
        contactType: "customer service",
        availableLanguage: ["Portuguese"],
        areaServed: {
          "@type": "City",
          name: "Brasília",
        },
      },
    },
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: "Helora Saúde Integrada",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.webp`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "SEPS 707/907 Conjunto E Sala 214, Edifício San Marino, Asa Sul",
        addressLocality: "Brasília",
        addressRegion: "DF",
        postalCode: "70390-075",
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -15.7801,
        longitude: -47.9292,
      },
      telephone: "+55-61-99593-8870",
      priceRange: "$$",
      currenciesAccepted: "BRL",
      paymentAccepted: "Cash, Credit Card, Debit Card, Health Insurance",
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
        "Terapia Cognitivo-Comportamental",
        "Terapia do Esquema",
      ],
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Psicoterapia Individual",
          description: "Sessões de psicologia clínica com foco no acolhimento e cuidado integrado para crianças, adolescentes, adultos e idosos em Brasília.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Psicoterapia de Casal",
          description: "Espaço compartilhado para reconstruir laços e fortalecer a conexão entre casais.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Neuropsicologia",
          description: "Avaliação e reabilitação neuropsicológica para todas as faixas etárias, incluindo investigação de TDAH, TEA e outras condições cognitivas.",
        },
        {
          "@type": "MedicalTherapy",
          name: "Avaliação Psicológica",
          description: "Avaliações psicológicas completas com laudo técnico para diferentes finalidades.",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        bestRating: "5",
        worstRating: "1",
        ratingCount: "16",
        reviewCount: "16",
      },
      areaServed: [
        { "@type": "City", name: "Brasília" },
        { "@type": "AdministrativeArea", name: "Distrito Federal" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Helora | Saúde Integrada",
      url: SITE_URL,
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#organization` },
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
            text: "A Helora é uma clínica de psicologia e saúde integrada localizada na Asa Sul, em Brasília/DF. Oferecemos psicoterapia individual, de casal, neuropsicologia e avaliação psicológica, sempre com acolhimento e escuta sensível. Contamos com profissionais certificados pelo CRP e mais de 8.000 atendimentos realizados.",
          },
        },
        {
          "@type": "Question",
          name: "Quais serviços psicológicos a Helora oferece em Brasília?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Helora oferece psicologia clínica, terapia cognitivo-comportamental (TCC), terapia do esquema, avaliação psicológica e avaliação neuropsicológica. Atendemos crianças, adolescentes, adultos e idosos na Asa Sul, Brasília/DF.",
          },
        },
        {
          "@type": "Question",
          name: "Onde fica a Helora e qual o horário de funcionamento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Helora está localizada na SEPS 707/907 Conjunto E Sala 214, Edifício San Marino, Asa Sul, Brasília — DF. Atendemos de segunda a sexta das 08h às 20h e aos sábados das 08h às 14h.",
          },
        },
        {
          "@type": "Question",
          name: "Como agendar uma sessão de psicologia na Helora?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Você pode agendar sua primeira sessão diretamente pelo WhatsApp no número (61) 9 9593-8870 ou pelo botão 'Marcar uma conversa' disponível no site. O atendimento é rápido e sem burocracia.",
          },
        },
        {
          "@type": "Question",
          name: "A Helora aceita convênios e planos de saúde?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim, a Helora aceita diversos convênios e planos de saúde como Notre Dame, GEAP, SERPRO, Saúde Caixa, Petrobras e muitos outros. Consulte a página de convênios no site para ver a lista completa.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "A Helora", item: `${SITE_URL}/#sobre` },
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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="me" href="https://www.instagram.com/heloraclinica" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="geo.region" content="BR-DF" />
        <meta name="geo.placename" content="Brasília" />
        <meta name="geo.position" content="-15.7801;-47.9292" />
        <meta name="ICBM" content="-15.7801, -47.9292" />
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
