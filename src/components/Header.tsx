"use client";

import { useState } from "react";
import Image from "next/image";

const WHATSAPP = "https://wa.me/5492262477807";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/Logosolo.jpg"
            alt="Estudio Jurídico Barraza"
            className="h-12 w-auto object-contain"
            width={48}
            height={48}
            priority
          />
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-navy-deep">
              Estudio Jurídico Barraza
            </p>
            <p className="text-[11px] tracking-[0.18em] text-muted-foreground ">& Asociados</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-navy-deep font-semibold md:flex">
          <a href="#nosotros" className="transition-colors hover:text-gold">
            El Estudio
          </a>
          <a href="#VerServicios" className="transition-colors hover:text-gold">
            Áreas
          </a>
          <a href="#pasos" className="transition-colors hover:text-gold">
            Proceso
          </a>
          <a href="#contacto" className="transition-colors hover:text-gold">
            Contacto
          </a>
        </nav>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-sm border border-navy bg-navy px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-navy-deep md:inline-block"
        >
          Consulta
        </a>
        <button
          aria-label="Menú"
          className="text-navy-deep md:hidden hover:text-gold active:scale-95 transition-all"
          onClick={() => setOpen(!open)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-navy-deep text-sm font-semibold">
            <a
              href="#nosotros"
              className="border-b border-border/40 pb-2 transition-colors hover:text-gold active:text-gold/85"
              onClick={() => setOpen(false)}
            >
              El Estudio
            </a>
            <a
              href="#VerServicios"
              className="border-b border-border/40 pb-2 transition-colors hover:text-gold active:text-gold/85"
              onClick={() => setOpen(false)}
            >
              Áreas de Práctica
            </a>
            <a
              href="#pasos"
              className="border-b border-border/40 pb-2 transition-colors hover:text-gold active:text-gold/85"
              onClick={() => setOpen(false)}
            >
              Proceso
            </a>
            <a
              href="#contacto"
              className="border-b border-border/40 pb-2 transition-colors hover:text-gold active:text-gold/85"
              onClick={() => setOpen(false)}
            >
              Contacto
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-navy px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-navy-deep active:bg-navy-deep/95"
            >
              Solicitar consulta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
