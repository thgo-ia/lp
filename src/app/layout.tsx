import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Workshop Lapidação Empresarial | 15-16 Nov 2025 | São Paulo",
  description: "Transforme sua empresa em uma máquina de resultados em 2 dias intensivos. Workshop presencial em São Paulo com estratégias comprovadas.",
  keywords: ["workshop empresarial", "gestão", "resultados", "são paulo", "estratégia empresarial"],
  authors: [{ name: "Workshop Lapidação Empresarial" }],
  creator: "Workshop Lapidação Empresarial",
  openGraph: {
    title: "Workshop Lapidação Empresarial - 15 e 16 de Novembro",
    description: "Transforme sua empresa em uma máquina de resultados em 2 dias intensivos",
    url: "https://workshop-lapidacao.com",
    siteName: "Workshop Lapidação Empresarial",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Workshop Lapidação Empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workshop Lapidação Empresarial",
    description: "Transforme sua empresa em uma máquina de resultados",
    images: ["/og-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "Workshop Lapidação Empresarial",
              "description": "Transforme sua empresa em uma máquina de resultados em 2 dias intensivos",
              "startDate": "2025-11-15T09:00:00-03:00",
              "endDate": "2025-11-16T18:00:00-03:00",
              "location": {
                "@type": "Place",
                "name": "São Paulo - SP",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "São Paulo",
                  "addressRegion": "SP",
                  "addressCountry": "BR"
                }
              },
              "organizer": {
                "@type": "Organization",
                "name": "Workshop Lapidação Empresarial"
              },
              "offers": {
                "@type": "Offer",
                "price": "1497",
                "priceCurrency": "BRL",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
