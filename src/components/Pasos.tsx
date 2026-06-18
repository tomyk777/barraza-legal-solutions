import React from "react";

const steps = [
  {
    n: "01",
    title: "Contacto inicial",
    text: "Escuchamos tu situación y evaluamos la viabilidad legal de forma inmediata.",
  },
  {
    n: "02",
    title: "Estrategia a tu medida",
    text: "Diseñamos un plan de acción claro, con plazos estimados y costos transparentes.",
  },
  {
    n: "03",
    title: "Gestión proactiva",
    text: "Ejecutamos la estrategia acordada, realizando el trámite judicial con máxima celeridad.",
  },
  {
    n: "04",
    title: "Resolución y cierre",
    text: "Concluimos el proceso asegurando el resguardo total de tus derechos.",
  },
];

export default function Pasos() {
  return (
    <section id="pasos" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-navy-deep font-semibold">
              Cómo trabajamos
            </p>
            <h2 className="gold-rule mt-3 font-display text-4xl leading-tight text-navy-deep lg:text-5xl">
              Paso a paso de tu trámite.
            </h2>
            <p className="mt-6 text-foreground/70">
              Un proceso transparente, con plazos y costos claros desde el primer contacto hasta la
              resolución final.
            </p>
          </div>
          <ol className="space-y-6 lg:col-span-8">
            {steps.map((s) => (
              <li
                key={s.n}
                className="group flex gap-6 border-l-3 border-navy/20 bg-background p-6 shadow-soft transition-all duration-300 hover:translate-x-2 hover:border-gold hover:shadow-md hover:bg-white active:translate-x-2 active:border-gold active:shadow-md active:bg-white"
              >
                <span className="font-display text-4xl text-gold-dark group-hover:text-gold-dark group-active:text-gold-dark transition-all duration-300 transform group-hover:scale-110 group-active:scale-110">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-display text-xl text-navy-deep group-hover:text-navy group-active:text-navy transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground/85">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
