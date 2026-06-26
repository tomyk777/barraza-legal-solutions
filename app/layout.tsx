import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "../src/styles.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = "https://estudiojurídicobarraza.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Estudio Jurídico Barraza & Asociados — Abogados en Mar del Plata",
    template: "%s | Estudio Jurídico Barraza & Asociados",
  },
  description:
    "Más de 20 años de trayectoria en derecho Civil, Comercial, Laboral, Familia y Daños y Perjuicios. Atendemos en Mar del Plata, Tandil, Necochea y Lobería. Consultá ahora.",
  authors: [{ name: "Estudio Jurídico Barraza & Asociados" }],
  keywords: [
    "abogado Mar del Plata",
    "abogado Tandil",
    "abogado Necochea",
    "abogado Balcarce",
    "abogado Lobería",
    "abogado daños y perjuicios Mar del Plata",
    "abogado herencias Mar del Plata",
    "abogado civil Mar del Plata",
    "abogado sucesiones Mar del Plata",
    "estudio jurídico inmobiliario Mar del Plata",
    "estudio jurídico agropecuario sudeste bonaerense",
    "abogado ART Mar del Plata",
    "abogado sucesiones Necochea",
    "abogado sucesiones Tandil",
    "abogado laboral Mar del Plata",
    "abogado divorcios Mar del Plata",
    "abogado usucapión Mar del Plata",
    "abogado sucesiones Lobería",
    "abogado sucesiones Balcarce",
    "abogado desalojos Mar del Plata",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    title: "Estudio Jurídico Barraza & Asociados",
    description:
      "Más de 20 años brindando soluciones legales en Mar del Plata, Tandil, Necochea y Balcarce.",
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Estudio Jurídico Barraza & Asociados",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Estudio Jurídico Barraza & Asociados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Jurídico Barraza & Asociados",
    description: "Más de 20 años de trayectoria en derecho Civil, Comercial, Laboral y Familia.",
    images: ["/og-image.jpg"],
  },
  other: {
    "geo.region": "AR-B",
    "geo.placename": "Mar del Plata",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Estudio Jurídico Barraza & Asociados",
  description:
    "Estudio jurídico con más de 20 años de trayectoria especializado en derecho Civil, Comercial, Laboral, Familia, Agropecuario y Daños y Perjuicios.",
  url: siteUrl,
  telephone: "+542262477807",
  email: "marbarraza@gmail.com",
  founder: {
    "@type": "Person",
    name: "Mariano Barraza",
  },
  areaServed: [
    { "@type": "City", name: "Mar del Plata" },
    { "@type": "City", name: "Tandil" },
    { "@type": "City", name: "Necochea" },
    { "@type": "City", name: "Lobería" },
    { "@type": "City", name: "Balcarce" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Buenos Aires",
    addressCountry: "AR",
  },
  sameAs: ["https://instagram.com/estudiojuridicobarraza"],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
