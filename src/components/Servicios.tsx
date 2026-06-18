import React from "react";

const services = [
  {
    title: "Derecho Civil",
    items:
      "Sucesiones de inmuebles rurales y urbanos. Sucesiones Testamentarias. Declaratorias de Herederos. Usucapiones. Desalojos. Escrituraciones. Contratos. Boletos de compraventa.",
  },
  {
    title: "Derecho Comercial",
    items:
      "Asesoramiento a Pymes. Conflictos entre socios. Contratos comerciales y bancarios. Ejecución y cobro de deudas comerciales.",
  },
  {
    title: "Derecho Agropecuario",
    items:
      "Sucesiones de campos, maquinaria agrícola y ganado. Asesoramiento a empresas agropecuarias familiares. Contratos rurales. Conflictos de vecindad. Conflictos de administración rural. Cobro de deudas.",
  },
  {
    title: "Derecho de Familia",
    items:
      "Divorcios de común acuerdo o conflictivos. Uniones convivenciales (concubinatos). Liquidación y partición de bienes del matrimonio. Filiación e impugnación. Alimentos. Régimen de comunicación (régimen de visitas).",
  },
  {
    title: "Daños y Perjuicios",
    items:
      "Accidentes de tránsito. Daños patrimoniales y lucro cesante. Lesiones físicas. Mala praxis médica. Reclamo ante aseguradoras. Daños derivados de contratos.",
  },
  {
    title: "ART",
    items:
      "Accidentes de trabajo y enfermedades profesionales. Reclamos ante ART. Rechazos. Expedientes ante Comisiones Médicas. Determinación de incapacidad. Indemnizaciones.",
  },
  {
    title: "Reclamos Laborales",
    items:
      "Liquidaciones laborales. Reclamo de indemnizaciones. Acuerdos. Telegramas. Juicios laborales.",
  },
  {
    title: "Derecho Inmobiliario",
    items:
      "Contratos de locación. Reajuste de cláusulas. Comodatos. Compraventas. Boletos. Cesiones.",
  },
];

export default function Servicios() {
  return (
    <section id="VerServicios" className="bg-navy-deep py-24 text-bone lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Áreas de Práctica</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-white lg:text-5xl">
            Servicios jurídicos integrales para cada situación.
          </h2>
          <p className="mt-6 text-white/70">
            Atendemos a personas, familias, trabajadores y empresas con un enfoque resolutivo y
            comunicación directa.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative bg-navy-deep p-7 transition-colors hover:bg-navy active:bg-navy"
            >
              <p className="font-display text-5xl text-gold/70">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-2xl text-white">{s.title}</h3>
              <div className="mt-3 h-px w-10 bg-gold" />
              <p className="mt-4 text-sm leading-relaxed text-white/90">{s.items}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
