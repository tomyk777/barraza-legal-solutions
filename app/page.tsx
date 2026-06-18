import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import CtaAreas from "@/components/CtaAreas";
import Pasos from "@/components/Pasos";
import CtaListo from "@/components/CtaListo";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function Home() {
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
