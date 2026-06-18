import type { ReactNode } from "react";
import type { Metadata } from "next";
import "../src/styles.css";

export const metadata: Metadata = {
  title:
    "Estudio Jurídico Barraza & Asociados — Abogados en Mar del Plata, Tandil, Necochea y Lobería",
  description:
    "Más de 20 años de trayectoria en derecho Civil, Comercial, Laboral, Familia y Daños y Perjuicios. Mar del Plata, Tandil, Necochea y Lobería.",
  authors: [{ name: "Estudio Jurídico Barraza & Asociados" }],
  keywords: [
    "abogado Mar del Plata",
    "abogado Tandil",
    "abogado Necochea",
    "abogado Balcarce",
    "abogado Loberia",
    "Abogado daños y perjuicios en Mar del Plata",
    "Abogado herencias mar del plata",
    "Abogado civil en Mar del Plata",
    "Abogado de sucesiones en Mar del Plata",
    "Estudio Jurídico Inmobiliario mar del plata",
    "Estudio Jurídico agropecuario sudeste bonaerense",
    "Abogado ART mar del plata",
    "Abogado Sucesiones Costa Atlantica",
    "Abogado Sucesiones Necochea",
    "abogado Sucesiones Tandil",
    "abogado laboral mar del plata",
    "abogado divorcios mar del plata",
    "abogado usucapion mar del plata",
    "abogado Sucesiones Loberia",
    "abogado Sucesiones Balcarce",
    "abogado desalojos mar del plata",
  ],
  openGraph: {
    title: "Estudio Jurídico Barraza & Asociados",
    description:
      "Más de 20 años brindando soluciones legales en Mar del Plata, Tandil, Necochea y Balcarce.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
