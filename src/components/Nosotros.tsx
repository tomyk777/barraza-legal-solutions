import Image from "next/image";
import {
  ShieldCheck,
  Timer,
  MessageSquare,
  CheckCircle2,
  History,
  Target,
  Scale,
} from "lucide-react";

const values = [
  {
    title: "Seguridad Jurídica",
    text: "Proteger tu patrimonio y asegurar tus derechos mediante contratos y defensas jurídicas sólidas.",
    Icon: ShieldCheck,
  },
  {
    title: "Agilidad en trámites",
    text: "Optimizar los tiempos de cada proceso legal con una gestión rápida y eficiente.",
    Icon: Timer,
  },
  {
    title: "Claridad absoluta",
    text: "Explicando cada etapa del reclamo judicial de forma directa.",
    Icon: MessageSquare,
  },
  {
    title: "Resolución efectiva",
    text: "Priorizar acuerdos estratégicos y soluciones definitivas según el conflicto.",
    Icon: CheckCircle2,
  },
];

export default function Nosotros() {
  return (
    <section id="nosotros" className="bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full border border-gold/60 lg:block" />
            <Image
              src="/lawyer-portrait.jpg"
              alt="Dr. Mariano Barraza"
              width={1024}
              height={1024}
              className="relative aspect-[4/5] w-full object-cover shadow-elegant"
            />
          </div>
          <p className="mt-6 font-display text-xl text-navy-deep">Dr. Mariano Barraza</p>
          <p className="text-sm text-muted-foreground">
            Abogado · UNMdP · Fundador del Estudio (2006)
          </p>
        </div>

        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-navy-deep font-semibold">
            El Estudio
          </p>
          <h2 className="gold-rule mt-3 font-display text-4xl leading-tight text-navy-deep lg:text-5xl">
            Tu solución legal comienza aquí.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground/80">
            Brindamos soluciones legales dinámicas y transparentes en Civil, Comercial,
            Inmobiliario, Familia y Laboral. Con más de 20 años de experiencia en las principales
            ramas del derecho, hacemos que cada trámite avance con seguridad y resultados.
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
            Nació en 2006 cuando el Dr. Mariano Barraza, egresado de la Universidad Nacional de Mar
            del Plata, se radicó en Lobería, proyectándose con el tiempo hacia el Sudeste de la
            Provincia de Buenos Aires.
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
            Ser un aliado estratégico de particulares, trabajadores and empresas, ofreciendo la
            seguridad jurídica y experiencia que los nuevos tiempos requieren.
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
