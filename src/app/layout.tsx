import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#283107",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clinicahelora.com"),
  title: "Helora — Clínica de Psicologia em Brasília | Saúde Integrada",
  description:
    "Clínica de psicologia em Brasília, DF. Atendimento em psicoterapia, neuropsicologia e avaliação psicológica para todas as faixas etárias. Agende por WhatsApp.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Helora — Clínica de Psicologia em Brasília | Saúde Integrada",
    description:
      "Clínica de psicologia em Brasília, DF. Atendimento em psicoterapia, neuropsicologia e avaliação psicológica para todas as faixas etárias. Agende por WhatsApp.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.clinicahelora.com/",
    siteName: "Helora — Saúde Integrada",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Helora — Clínica de Psicologia em Brasília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Helora — Clínica de Psicologia em Brasília | Saúde Integrada",
    description:
      "Clínica de psicologia em Brasília, DF. Atendimento em psicoterapia, neuropsicologia e avaliação psicológica para todas as faixas etárias. Agende por WhatsApp.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.clinicahelora.com/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Helora — Saúde Integrada",
      url: "https://www.clinicahelora.com",
      logo: "https://www.clinicahelora.com/logo-mark.svg",
    },
    {
      "@type": ["LocalBusiness", "MedicalBusiness"],
      name: "Helora — Saúde Integrada",
      url: "https://www.clinicahelora.com",
      image: "https://www.clinicahelora.com/og-image.png",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Brasília",
        addressRegion: "DF",
        addressCountry: "BR",
      },
      telephone: "+55-61-99999-9999",
      priceRange: "$$",
      openingHoursSpecification: {
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
      medicalSpecialty: [
        "Psicologia Clínica",
        "Neuropsicologia",
        "Avaliação Psicológica",
      ],
      areaServed: { "@type": "City", name: "Brasília" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://www.clinicahelora.com/" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,600;1,9..144,400&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Preconnect to WhatsApp CDN for instant CTA load */}
        <link rel="preconnect" href="https://api.whatsapp.com" crossOrigin="anonymous" />
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
