import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShieldCheck, Timer, MessageSquare, CheckCircle2, History, Target, Scale } from "lucide-react";
import logoAsset from "@/assets/Logosolo.jpg";
import heroImg from "@/assets/hero-law.jpg";
import portraitImg from "@/assets/lawyer-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Estudio Jurídico Barraza & Asociados — Abogados" },
      { name: "description", content: "Más de 20 años de trayectoria en derecho Civil, Comercial, Laboral, Familia y Daños y Perjuicios en el Sudeste bonaerense." },
      { property: "og:title", content: "Estudio Jurídico Barraza & Asociados" },
      { property: "og:description", content: "Asesoramiento legal profesional con más de 20 años de trayectoria." },
    ],
  }),
  component: Landing,
});

const WHATSAPP = "https://wa.me/5492262477807";
const INSTAGRAM = "https://instagram.com/estudiojuridicobarraza";

const services = [
  { title: "Derecho Civil", items: "Sucesiones de inmuebles rurales y urbanos. Sucesiones Testamentarias. Declaratorias de Herederos. Usucapiones. Desalojos. Escrituraciones. Contratos. Boletos de compraventa." },
  { title: "Derecho Comercial", items: "Asesoramiento a Pymes. Conflictos entre socios. Contratos comerciales y bancarios. Ejecución y cobro de deudas comerciales." },
  { title: "Derecho Agropecuario", items: "Sucesiones de campos, maquinaria agrícola y ganado. Asesoramiento a empresas agropecuarias familiares. Contratos rurales. Conflictos de vecindad. Fumigaciones. Cobro de deudas." },
  { title: "Derecho de Familia", items: "Divorcios de común acuerdo o conflictivos. Uniones convivenciales. Liquidación y partición de bienes del matrimonio. Filiación e impugnación. Alimentos. Régimen de comunicación." },
  { title: "Daños y Perjuicios", items: "Accidentes de tránsito. Daños patrimoniales y lucro cesante. Lesiones físicas. Mala praxis médica. Reclamo ante aseguradoras. Daños derivados de contratos." },
  { title: "ART", items: "Accidentes de trabajo y enfermedades profesionales. Reclamos ante ART. Rechazos. Expedientes ante Comisiones Médicas. Determinación de incapacidad. Indemnizaciones." },
  { title: "Reclamos Laborales", items: "Liquidaciones laborales. Reclamo de indemnizaciones. Acuerdos. Telegramas." },
  { title: "Derecho Inmobiliario", items: "Contratos de locación. Reajuste de cláusulas. Comodatos. Compraventas. Boletos. Cesiones." },
];

const steps = [
  { n: "01", title: "Contacto inicial", text: "Escuchamos tu situación y evaluamos la viabilidad legal de forma inmediata." },
  { n: "02", title: "Estrategia a tu medida", text: "Diseñamos un plan de acción claro, con plazos estimados y costos transparentes." },
  { n: "03", title: "Gestión proactiva", text: "Ejecutamos la estrategia acordada, realizando el trámite judicial con máxima celeridad." },
  { n: "04", title: "Resolución y cierre", text: "Concluimos el proceso asegurando el resguardo total de tus derechos." },
];

const values = [
  { title: "Seguridad Jurídica", text: "Proteger tu patrimonio y asegurar tus derechos mediante contratos y defensas jurídicas sólidas.", Icon: ShieldCheck },
  { title: "Agilidad en trámites", text: "Optimizar los tiempos de cada proceso legal con una gestión rápida y eficiente.", Icon: Timer },
  { title: "Claridad absoluta", text: "Explicando cada etapa del reclamo judicial de forma directa.", Icon: MessageSquare },
  { title: "Resolución efectiva", text: "Priorizar acuerdos estratégicos y soluciones definitivas según el conflicto.", Icon: CheckCircle2 },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <Nosotros />
      <Servicios />
      <CtaAreas />
      <Pasos />
      <CtaListo />
      <Contacto />
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset} alt="Estudio Jurídico Barraza" className="h-12 w-auto object-contain" height={48} />
          <div className="leading-tight">
            <p className="font-display text-lg font-semibold text-navy-deep">Estudio Jurídico Barraza</p>
            <p className="text-[11px] tracking-[0.18em] text-muted-foreground ">& Asociados</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-navy md:flex">
          <a href="#nosotros" className="transition-colors hover:text-gold">El Estudio</a>
          <a href="#VerServicios" className="transition-colors hover:text-gold">Áreas</a>
          <a href="#pasos" className="transition-colors hover:text-gold">Proceso</a>
          <a href="#contacto" className="transition-colors hover:text-gold">Contacto</a>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hidden rounded-sm border border-navy bg-navy px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition hover:bg-navy-deep md:inline-block">
          Consulta
        </a>
        <button aria-label="Menú" className="text-navy md:hidden hover:text-gold active:scale-95 transition-all" onClick={() => setOpen(!open)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18" /></svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-5 text-navy text-sm font-medium">
            <a href="#nosotros" className="border-b border-border/40 pb-2 transition-colors hover:text-gold active:text-gold/85" onClick={() => setOpen(false)}>El Estudio</a>
            <a href="#VerServicios" className="border-b border-border/40 pb-2 transition-colors hover:text-gold active:text-gold/85" onClick={() => setOpen(false)}>Áreas de Práctica</a>
            <a href="#pasos" className="border-b border-border/40 pb-2 transition-colors hover:text-gold active:text-gold/85" onClick={() => setOpen(false)}>Proceso</a>
            <a href="#contacto" className="border-b border-border/40 pb-2 transition-colors hover:text-gold active:text-gold/85" onClick={() => setOpen(false)}>Contacto</a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-navy px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-navy-deep active:bg-navy-deep/95">Solicitar consulta</a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-navy-deep text-bone">
      <img src={heroImg} alt="Justicia, libros y mazo" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep via-navy-deep/85 to-navy-deep/40" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-12 lg:gap-16 lg:px-10 lg:py-36">
        <div className="lg:col-span-8">
          <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold" />
            Civil · Comercial · Laboral · Familia · Daños y Perjuicios
          </p>
          <h1 className="font-display text-4xl leading-[1.05] text-white sm:text-5xl lg:text-[64px]">
            ¿Tenés un asunto legal que resolver en el Sudeste bonaerense?
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
            No dejes pasar tu tiempo. Poné tu caso en manos de un Estudio Jurídico con
            <strong className="font-semibold text-white"> más de 20 años de trayectoria </strong>
            que te dan la seguridad y la respuesta directa que necesitás.
          </p>
          <p className="mt-4 max-w-2xl text-base text-white/70">
            Dedicados al abordaje y resolución de asuntos civiles, comerciales, laborales, familia y daños y perjuicios.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-navy-deep shadow-soft transition hover:brightness-110">
              Solicitar consulta
            </a>
            <a href="#VerServicios" className="rounded-sm border border-white/40 px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:bg-white/10">
              Ver servicios
            </a>
          </div>
        </div>


        <div className="lg:col-span-4 lg:pt-8">
          <ul className="space-y-5 border-l border-gold/40 pl-6">
            {[
              { k: "+20", v: "años de trayectoria" },
              { k: "Ágil", v: "Gestión legal confiable de tu caso" },
              { k: "Directa", v: "Atención y resolución rápida del conflicto" },
            ].map((b) => (
              <li key={b.v}>
                <p className="font-display text-3xl text-gold">{b.k}</p>
                <p className="text-sm text-white/80">{b.v}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative border-y border-white/10 bg-navy-deep/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-5 py-4 text-center lg:px-10">
          <span className="text-xs uppercase tracking-[0.25em] text-gold">Zona de actuación</span>
          <span className="hidden h-4 w-px bg-white/20 sm:inline-block" />
          <span className="text-sm font-medium text-white/90 sm:text-base">
            Mar del Plata <span className="mx-2 text-gold">·</span>
            Tandil <span className="mx-2 text-gold">·</span>
            Necochea <span className="mx-2 text-gold">·</span>
            Lobería <span className="mx-2 text-gold">·</span>
            Costa Atlántica
          </span>
        </div>
      </div>
    </section>
  );
}


function Nosotros() {
  return (
    <section id="nosotros" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full border border-gold/60 lg:block" />
            <img src={portraitImg} alt="Dr. Mariano Barraza" width={1024} height={1024} loading="lazy" className="relative aspect-[4/5] w-full object-cover shadow-elegant" />
          </div>
          <p className="mt-6 font-display text-xl text-navy-deep">Dr. Mariano Barraza</p>
          <p className="text-sm text-muted-foreground">Abogado · UNMdP · Fundador del Estudio (2006)</p>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">El Estudio</p>
          <h2 className="gold-rule mt-3 font-display text-4xl leading-tight text-navy-deep lg:text-5xl">
            Tu solución legal comienza aquí.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/80">
            Brindamos soluciones legales dinámicas y transparentes en Civil, Comercial, Inmobiliario, Familia y Laboral. Con más de 20 años de experiencia en el Sudeste bonaerense, hacemos que cada trámite avance con seguridad y resultados.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 border-l-2 border-gold bg-secondary/40 p-5">
                <v.Icon className="mt-0.5 h-6 w-6 shrink-0 text-gold" strokeWidth={1.75} />
                <div>
                  <p className="font-display text-lg text-navy-deep">{v.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-8 px-5 sm:grid-cols-3 lg:px-10">
        <div className="relative overflow-hidden rounded-md border border-navy/10 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant hover:border-gold/30 active:-translate-y-1.5 active:shadow-elegant active:border-gold/30 group">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold/55 via-gold to-gold/55 transform scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-500 origin-left" />
          
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy/5 text-navy group-hover:bg-gold/15 group-active:bg-gold/15 group-hover:text-navy-deep group-active:text-navy-deep transition-all duration-300">
              <History className="h-6 w-6 stroke-[1.5]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-navy-deep">Historia</h3>
          </div>
          
          <div className="mt-4 mb-3 h-[1px] w-12 bg-gold/60 group-hover:w-20 group-active:w-20 transition-all duration-500" />
          
          <p className="text-sm leading-relaxed text-foreground/80">
            Nació en 2006 cuando el Dr. Mariano Barraza, egresado de la Universidad Nacional de Mar del Plata, se radicó en Lobería, proyectándose con el tiempo hacia el Sudeste de la Provincia de Buenos Aires.
          </p>
          
          <History className="absolute -right-6 -bottom-6 h-28 w-28 text-navy-deep opacity-[0.02] group-hover:opacity-[0.05] group-active:opacity-[0.05] group-hover:scale-110 group-active:scale-110 transition-all duration-500 pointer-events-none" />
        </div>

        <div className="relative overflow-hidden rounded-md border border-navy/10 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant hover:border-gold/30 active:-translate-y-1.5 active:shadow-elegant active:border-gold/30 group">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold/55 via-gold to-gold/55 transform scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-500 origin-left" />
          
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy/5 text-navy group-hover:bg-gold/15 group-active:bg-gold/15 group-hover:text-navy-deep group-active:text-navy-deep transition-all duration-300">
              <Target className="h-6 w-6 stroke-[1.5]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-navy-deep">Visión</h3>
          </div>
          
          <div className="mt-4 mb-3 h-[1px] w-12 bg-gold/60 group-hover:w-20 group-active:w-20 transition-all duration-500" />
          
          <p className="text-sm leading-relaxed text-foreground/80">
            Ser un aliado estratégico de particulares, trabajadores and empresas, ofreciendo la seguridad jurídica y experiencia que los nuevos tiempos requieren.
          </p>
          
          <Target className="absolute -right-6 -bottom-6 h-28 w-28 text-navy-deep opacity-[0.02] group-hover:opacity-[0.05] group-active:opacity-[0.05] group-hover:scale-110 group-active:scale-110 transition-all duration-500 pointer-events-none" />
        </div>

        <div className="relative overflow-hidden rounded-md border border-navy/10 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-elegant hover:border-gold/30 active:-translate-y-1.5 active:shadow-elegant active:border-gold/30 group">
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold/55 via-gold to-gold/55 transform scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 transition-transform duration-500 origin-left" />
          
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-navy/5 text-navy group-hover:bg-gold/15 group-active:bg-gold/15 group-hover:text-navy-deep group-active:text-navy-deep transition-all duration-300">
              <Scale className="h-6 w-6 stroke-[1.5]" />
            </div>
            <h3 className="font-display text-2xl font-bold text-navy-deep">Enfoque</h3>
          </div>
          
          <div className="mt-4 mb-3 h-[1px] w-12 bg-gold/60 group-hover:w-20 group-active:w-20 transition-all duration-500" />
          
          <p className="text-sm leading-relaxed text-foreground/80">
            Transformamos la complejidad legal del caso en un proceso claro, seguro y ágil.
          </p>
          
          <Scale className="absolute -right-6 -bottom-6 h-28 w-28 text-navy-deep opacity-[0.02] group-hover:opacity-[0.05] group-active:opacity-[0.05] group-hover:scale-110 group-active:scale-110 transition-all duration-500 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}


function Servicios() {
  return (
    <section id="VerServicios" className="bg-navy-deep py-24 text-bone lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Áreas de Práctica</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-white lg:text-5xl">
            Servicios jurídicos integrales para cada situación.
          </h2>
          <p className="mt-6 text-white/70">
            Atendemos a personas, familias, trabajadores y empresas con un enfoque resolutivo y comunicación directa.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article key={s.title} className="group relative bg-navy-deep p-7 transition-colors hover:bg-navy active:bg-navy">
              <p className="font-display text-5xl text-gold/30">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-2xl text-white">{s.title}</h3>
              <div className="mt-3 h-px w-10 bg-gold" />
              <p className="mt-4 text-sm leading-relaxed text-white/75">{s.items}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pasos() {
  return (
    <section id="pasos" className="bg-secondary/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Cómo trabajamos</p>
            <h2 className="gold-rule mt-3 font-display text-4xl leading-tight text-navy-deep lg:text-5xl">
              Paso a paso de tu trámite.
            </h2>
            <p className="mt-6 text-foreground/70">
              Un proceso transparente, con plazos y costos claros desde el primer contacto hasta la resolución final.
            </p>
          </div>
          <ol className="space-y-6 lg:col-span-8">
            {steps.map((s) => (
              <li key={s.n} className="group flex gap-6 border-l-3 border-navy/20 bg-background p-6 shadow-soft transition-all duration-300 hover:translate-x-2 hover:border-gold hover:shadow-md hover:bg-white active:translate-x-2 active:border-gold active:shadow-md active:bg-white">
                <span className="font-display text-4xl text-gold/60 group-hover:text-gold group-active:text-gold transition-all duration-300 transform group-hover:scale-110 group-active:scale-110">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl text-navy-deep group-hover:text-navy group-active:text-navy transition-colors duration-300">{s.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  const [form, setForm] = useState({ nombre: "", apellido: "", telefono: "", consulta: "" });
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
            <p className="text-xs uppercase tracking-[0.3em] text-navy">Contacto</p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-navy-deep lg:text-5xl">
              Conversemos sobre tu caso.
            </h2>
            <div className="mt-4 h-px w-16 bg-navy/40" />
            <p className="mt-6 text-foreground/75">
              Respondemos cada consulta de forma directa. Escribinos por WhatsApp o completá el formulario.
            </p>
            <ul className="mt-10 space-y-4">
              <li className="group relative rounded-sm border-l-2 border-navy/25 pl-4 py-2 pr-4 transition-all duration-300 hover:border-navy hover:bg-navy/5 hover:translate-x-1">
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="block">
                  <p className="text-xs uppercase tracking-[0.2em] text-navy/70 group-hover:text-navy transition-colors duration-300">Teléfono / WhatsApp</p>
                  <p className="font-display text-2xl text-navy-deep mt-1 transition-colors duration-300 group-hover:text-navy-soft">2262-477807</p>
                </a>
              </li>
              <li className="group relative rounded-sm border-l-2 border-navy/25 pl-4 py-2 pr-4 transition-all duration-300 hover:border-navy hover:bg-navy/5 hover:translate-x-1">
                <a href="mailto:marbarraza@gmail.com" className="block">
                  <p className="text-xs uppercase tracking-[0.2em] text-navy/70 group-hover:text-navy transition-colors duration-300">Email</p>
                  <p className="font-display text-xl text-navy-deep mt-1 transition-colors duration-300 group-hover:text-navy-soft break-all">marbarraza@gmail.com</p>
                </a>
              </li>
              <li className="relative rounded-sm border-l-2 border-navy/25 pl-4 py-2 pr-4 transition-all duration-300">
                <p className="text-xs uppercase tracking-[0.2em] text-navy/70">Zona de actuación</p>
                <p className="mt-1 text-sm text-foreground/80">Mar del Plata · Tandil · Necochea · Costa Atlántica</p>
              </li>
            </ul>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-5 border border-border bg-card p-8 shadow-soft lg:col-span-7 lg:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Nombre" value={form.nombre} onChange={(v) => setForm({ ...form, nombre: v })} />
            <Field label="Apellido" value={form.apellido} onChange={(v) => setForm({ ...form, apellido: v })} />
          </div>
          <Field label="Teléfono" type="tel" value={form.telefono} onChange={(v) => setForm({ ...form, telefono: v })} />
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-navy">Breve descripción de la consulta</label>
            <textarea required maxLength={1000} rows={5} value={form.consulta} onChange={(e) => setForm({ ...form, consulta: e.target.value })} className="mt-2 w-full border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-navy" />
          </div>
          <button type="submit" className="w-full rounded-sm bg-navy-deep px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground transition hover:bg-navy">
            Enviar consulta por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-navy">{label}</label>
      <input required type={type} maxLength={120} value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 w-full border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-navy" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-16 text-bone/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-sm bg-white p-1.5 shadow-sm">
              <img src={logoAsset} alt="Estudio Jurídico Barraza" className="h-full w-auto object-contain" />
            </div>
            <div>
              <p className="font-display text-xl text-white leading-tight">Estudio Jurídico Barraza</p>
              <p className="text-xs tracking-[0.2em] text-bone/60">& Asociados</p>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-bone/50 max-w-xs">
            Asesoramiento profesional y soluciones legales dinámicas en el Sudeste bonaerense con más de 20 años de trayectoria.
          </p>
        </div>
        
        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Navegación</p>
          <ul className="space-y-2.5">
            <li>
              <a href="#nosotros" className="transition-colors hover:text-gold">El Estudio</a>
            </li>
            <li>
              <a href="#VerServicios" className="transition-colors hover:text-gold">Áreas de Práctica</a>
            </li>
            <li>
              <a href="#pasos" className="transition-colors hover:text-gold">Proceso de Trabajo</a>
            </li>
            <li>
              <a href="#contacto" className="transition-colors hover:text-gold">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Contacto</p>
          <p className="mt-2">
            WhatsApp: <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">2262-477807</a>
          </p>
          <p className="mt-1">
            Email: <a href="mailto:marbarraza@gmail.com" className="hover:text-gold transition-colors break-all">marbarraza@gmail.com</a>
          </p>
        </div>

        <div className="text-sm">
          <p className="text-xs uppercase tracking-[0.2em] text-gold mb-4">Seguinos</p>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 hover:text-gold transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
            @estudiojuridicobarraza
          </a>
        </div>
      </div>
      
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-5 pt-6 text-xs text-bone/50 lg:px-10">
        © {new Date().getFullYear()} Estudio Jurídico Barraza & Asociados. Todos los derechos reservados.
      </div>
    </footer>
  );
}

function CtaAreas() {
  return (
    <section className="w-full bg-[#0A1628] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-5 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <h2 className="font-display text-2xl text-white lg:text-3xl">¿Tu situación entra en alguna de estas áreas?</h2>
          <p className="mt-2 text-sm text-white/70 lg:text-base">Consultanos sin compromiso. Respondemos de forma directa y rápida.</p>
        </div>
        <a href="https://wa.me/542262477807" target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-sm bg-[#C9A84C] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-[#0A1628] transition hover:bg-[#a88a3a]">
          Solicitar consulta
        </a>
      </div>
    </section>
  );
}

function CtaListo() {
  return (
    <section className="w-full bg-black py-12">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-5 text-center lg:px-10">
        <h2 className="font-display text-2xl text-white lg:text-3xl">¿Listo para empezar?</h2>
        <p className="mt-2 text-sm text-white/70 lg:text-base">El primer paso es una consulta. Sin turnos, sin vueltas.</p>
        <a href="https://wa.me/542262477807" target="_blank" rel="noopener noreferrer" className="mt-6 rounded-sm bg-[#C9A84C] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-[#a88a3a]">
          Escribinos por WhatsApp
        </a>
      </div>
    </section>
  );
}

function StickyWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-elegant ring-4 ring-whatsapp/25 transition hover:scale-110"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" /></svg>
    </a>
  );
}
