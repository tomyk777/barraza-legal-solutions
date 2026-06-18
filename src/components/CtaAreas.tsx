import React from "react";

export default function CtaAreas() {
  return (
    <section className="w-full bg-[#0A1628] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <h2 className="font-display text-2xl text-white lg:text-3xl">
            ¿Tu situación entra en alguna de estas áreas?
          </h2>
          <p className="mt-2 text-sm text-white/70 lg:text-base">
            Consultanos sin compromiso. Respondemos de forma directa y rápida.
          </p>
        </div>
        <a
          href="https://wa.me/542262477807"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-sm bg-[#C9A84C] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#0A1628] transition hover:bg-[#a88a3a]"
        >
          Solicitar consulta
        </a>
      </div>
    </section>
  );
}
