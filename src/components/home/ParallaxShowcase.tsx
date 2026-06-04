import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { MotionSection } from "@/components/ui/MotionSection";

// Imágenes farmacéuticas/médicas de Unsplash — alta resolución para el zoom
const pharmacyImages = [
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=900&fit=crop&auto=format&q=80",
    alt: "Farmacéutico profesional",
  },
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=900&fit=crop&auto=format&q=80",
    alt: "Médico con paciente",
  },
  {
    src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&h=900&fit=crop&auto=format&q=80",
    alt: "Medicamentos y cápsulas",
  },
  {
    src: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&h=900&fit=crop&auto=format&q=80",
    alt: "Laboratorio médico",
  },
  {
    src: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&h=900&fit=crop&auto=format&q=80",
    alt: "Productos de salud",
  },
  {
    src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=900&fit=crop&auto=format&q=80",
    alt: "Farmacéutico atendiendo",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=900&fit=crop&auto=format&q=80",
    alt: "Equipo médico y salud",
  },
];

export function ParallaxShowcase() {
  return (
    <>
      {/* ── Encabezado de sección — sobre fondo slate-50 ── */}
      <section className="pt-20 pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionSection className="text-center">
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Nuestro mundo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4 tracking-tight">
              Farmacia completa en un solo lugar
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Desde el analgésico más común hasta el instrumental más especializado. Todo con certificación COFEPRIS y asesoría farmacéutica incluida.
            </p>
          </MotionSection>
        </div>
      </section>

      {/* ── Zoom Parallax — fondo oscuro para maximizar contraste ── */}
      <div className="bg-slate-950">
        <ZoomParallax images={pharmacyImages} />
      </div>

      {/* ── Separador visual antes de la siguiente sección ── */}
      <div className="h-20 bg-white" />
    </>
  );
}
