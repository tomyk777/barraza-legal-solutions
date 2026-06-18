"use client";

import React, { useState, useId } from "react";

const WHATSAPP = "https://wa.me/5492262477807";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", apellido: "", telefono: "", consulta: "" });
  const consultaId = useId();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${form.nombre} ${form.apellido}.%0ATeléfono: ${form.telefono}%0AConsulta: ${form.consulta}`;
    window.open(`${WHATSAPP}?text=${msg}`, "_blank");
  };

  return (
    <section id="contacto" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <div className="relative h-full overflow-hidden rounded-sm border border-navy/15 bg-secondary/30 p-8 text-navy-deep shadow-soft lg:p-10">
            <div className="absolute left-0 top-0 h-full w-1 bg-navy" />
            <p className="text-xs uppercase tracking-[0.3em] text-navy-deep font-semibold">
              Contacto
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-navy-deep lg:text-5xl">
              Conversemos sobre tu caso.
            </h2>
            <div className="mt-4 h-px w-16 bg-navy/40" />
            <p className="mt-6 text-foreground/75">
              Respondemos cada consulta de forma directa. Escribinos por WhatsApp o completá el
              formulario.
            </p>
            <ul className="mt-10 space-y-4">
              <li className="group relative rounded-sm border-l-2 border-navy/25 pl-4 py-2 pr-4 transition-all duration-300 hover:border-navy hover:bg-navy/5 hover:translate-x-1">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block">
                  <p className="text-xs uppercase tracking-[0.2em] text-navy-deep font-semibold transition-colors duration-300">
                    Teléfono / WhatsApp
                  </p>
                  <p className="font-display text-2xl text-navy-deep mt-1 transition-colors duration-300 group-hover:text-navy-soft">
                    2262-477807
                  </p>
                </a>
              </li>
              <li className="group relative rounded-sm border-l-2 border-navy/25 pl-4 py-2 pr-4 transition-all duration-300 hover:border-navy hover:bg-navy/5 hover:translate-x-1">
                <a href="mailto:marbarraza@gmail.com" className="block">
                  <p className="text-xs uppercase tracking-[0.2em] text-navy-deep font-semibold transition-colors duration-300">
                    Email
                  </p>
                  <p className="font-display text-xl text-navy-deep mt-1 transition-colors duration-300 group-hover:text-navy-soft break-all">
                    marbarraza@gmail.com
                  </p>
                </a>
              </li>
              <li className="relative rounded-sm border-l-2 border-navy/25 pl-4 py-2 pr-4 transition-all duration-300">
                <p className="text-xs uppercase tracking-[0.2em] text-navy-deep font-semibold">
                  Zona de actuación
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  Mar del Plata · Tandil · Necochea · Costa Atlántica
                </p>
              </li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="space-y-5 border border-border bg-card p-8 shadow-soft lg:col-span-7 lg:p-10"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Nombre"
              value={form.nombre}
              onChange={(v) => setForm({ ...form, nombre: v })}
            />
            <Field
              label="Apellido"
              value={form.apellido}
              onChange={(v) => setForm({ ...form, apellido: v })}
            />
          </div>
          <Field
            label="Teléfono"
            type="tel"
            value={form.telefono}
            onChange={(v) => setForm({ ...form, telefono: v })}
          />
          <div>
            <label
              htmlFor={consultaId}
              className="text-xs uppercase tracking-[0.2em] text-navy-deep font-semibold"
            >
              Breve descripción de la consulta
            </label>
            <textarea
              id={consultaId}
              required
              maxLength={1000}
              rows={5}
              value={form.consulta}
              onChange={(e) => setForm({ ...form, consulta: e.target.value })}
              className="mt-2 w-full border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-navy"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-sm bg-navy-deep px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-navy"
          >
            Enviar consulta por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-[0.2em] text-navy-deep font-semibold"
      >
        {label}
      </label>
      <input
        id={id}
        required
        type={type}
        maxLength={120}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-navy"
      />
    </div>
  );
}
