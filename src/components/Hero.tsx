import Image from "next/image";

const WHATSAPP = "https://wa.me/5492262477807";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-deep text-bone">
      <Image
        src="/hero-law.jpg"
        alt="Justicia, libros y mazo"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-20"
        priority
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/90 to-navy-deep/70" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:py-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-36">
        <div className="lg:col-span-8">
          <p className="mb-3 sm:mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            <span className="h-px w-10 bg-gold" />
            Civil · Comercial · Laboral · Familia · Daños y Perjuicios
          </p>
          <h1 className="font-display text-[1.85rem] leading-[1.08] text-white sm:text-5xl lg:text-[64px]">
            ¿Necesitás asesoramiento o tenés que resolver un conflicto legal?
          </h1>
          <p className="mt-4 sm:mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/85">
            No dejes pasar tu tiempo. Poné tu caso en manos de un Estudio Jurídico con
            <strong className="font-semibold text-white"> más de 20 años de trayectoria </strong>
            que te dan la seguridad y la respuesta directa que necesitás.
          </p>
          <p className="mt-2 sm:mt-4 max-w-2xl text-[0.9rem] sm:text-base text-white/70">
            Dedicados al abordaje y resolución de asuntos civiles, comerciales, laborales, familia y
            daños y perjuicios.
          </p>

          <div className="mt-6 sm:mt-10 flex flex-wrap gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-navy-deep shadow-soft transition hover:brightness-110"
            >
              Solicitar consulta
            </a>
            <a
              href="#VerServicios"
              className="rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-white/10"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="lg:col-span-4 lg:pt-8">
          <ul className="space-y-5 border-l border-gold/40 pl-6">
            {[
              { k: "+20", v: "años de trayectoria" },
              { k: "Ágil", v: "Gestión legal confiable de tu caso" },
              { k: "Directa", v: "Atención personalizada y resolución del conflicto" },
            ].map((b) => (
              <li key={b.v}>
                <p className="font-display text-3xl text-gold">{b.k}</p>
                <p className="text-sm text-white/80">{b.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-y border-white/10 bg-navy-deep">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-4 text-center lg:px-10">
          <span className="text-xs uppercase tracking-[0.25em] text-gold font-semibold">
            Zona de actuación
          </span>
          <span className="hidden h-4 w-px bg-white/20 sm:inline-block" />
          <span className="text-sm font-medium text-white/90 sm:text-base">
            Mar del Plata <span className="mx-2 text-gold">·</span>
            Tandil <span className="mx-2 text-gold">·</span>
            Necochea <span className="mx-2 text-gold">·</span>
            Lobería <span className="mx-2 text-gold">·</span>
            Balcarce
          </span>
        </div>
      </div>
    </section>
  );
}
