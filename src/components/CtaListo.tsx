import React from "react";

export default function CtaListo() {
  return (
    <section className="w-full bg-black py-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center lg:px-10">
        <h2 className="font-display text-2xl text-white lg:text-3xl">
          ¿Necesitás asesoramiento legal?
        </h2>
        <p className="mt-2 text-sm text-white/70 lg:text-base">
          Analizamos tu caso y te respondemos a la brevedad.
        </p>
        <a
          href="https://wa.me/542262477807"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 rounded-sm bg-[#C9A84C] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-[#a88a3a]"
        >
          Escribinos por WhatsApp
        </a>
      </div>
    </section>
  );
}
