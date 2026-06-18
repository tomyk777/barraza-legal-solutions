import React from "react";
import Image from "next/image";

const WHATSAPP = "https://wa.me/5492262477807";
const INSTAGRAM = "https://instagram.com/estudiojuridicobarraza";

export default function Footer() {
  return (
    <footer className="bg-ink py-16 text-bone/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-white p-1.5 shadow-sm">
              <Image
                src="/Logosolo.jpg"
                alt="Estudio Jurídico Barraza"
                className="h-full w-auto object-contain"
                width={56}
                height={56}
              />
            </div>
            <div>
              <p className="font-display text-xl text-white leading-tight">
                Estudio Jurídico Barraza
              </p>
              <p className="text-xs tracking-[0.2em] text-bone/60">& Asociados</p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-bone/50 max-w-xs">
            Asesoramiento profesional y soluciones legales dinámicas en el Sudeste bonaerense con
            más de 20 años de trayectoria.
          </p>
        </div>

        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Navegación</p>
          <ul className="space-y-2.5">
            <li>
              <a href="#nosotros" className="transition-colors hover:text-gold">
                El Estudio
              </a>
            </li>
            <li>
              <a href="#VerServicios" className="transition-colors hover:text-gold">
                Áreas de Práctica
              </a>
            </li>
            <li>
              <a href="#pasos" className="transition-colors hover:text-gold">
                Proceso de Trabajo
              </a>
            </li>
            <li>
              <a href="#contacto" className="transition-colors hover:text-gold">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Contacto</p>
          <p className="mt-2">
            WhatsApp:{" "}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              2262-477807
            </a>
          </p>
          <p className="mt-1">
            Email:{" "}
            <a
              href="mailto:marbarraza@gmail.com"
              className="hover:text-gold transition-colors break-all"
            >
              marbarraza@gmail.com
            </a>
          </p>
        </div>

        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Seguinos</p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 hover:text-gold transition-colors"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
            @estudiojuridicobarraza
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-xs text-bone/50 lg:px-10">
        © {new Date().getFullYear()} Estudio Jurídico Barraza & Asociados. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
