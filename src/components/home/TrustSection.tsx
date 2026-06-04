import { ShieldCheck, Truck, MessageCircle, FileText } from "lucide-react";
import { AnimatedCard } from "@/components/ui/AnimatedCard";
import { MotionSection } from "@/components/ui/MotionSection";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Registro COFEPRIS garantizado",
    description:
      "Todos nuestros medicamentos cuentan con registro sanitario vigente. Compramos directamente a laboratorios y distribuidoras autorizadas.",
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "group-hover:border-blue-200",
  },
  {
    icon: Truck,
    title: "Entrega express en 24 hrs",
    description:
      "Recibe tus medicamentos sin salir de casa. Envíos refrigerados disponibles para medicamentos que requieren cadena de frío.",
    color: "text-sky-500",
    bg: "bg-sky-50",
    border: "group-hover:border-sky-200",
  },
  {
    icon: FileText,
    title: "Recetas médicas aceptadas",
    description:
      "Sube tu receta en línea. Nuestros farmacéuticos certificados la validan y procesan tu pedido de medicamentos controlados.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    border: "group-hover:border-cyan-200",
  },
  {
    icon: MessageCircle,
    title: "Asesoría farmacéutica gratis",
    description:
      "Farmacéuticos certificados disponibles vía WhatsApp. Resuelven dudas sobre dosis, interacciones y equivalentes genéricos.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "group-hover:border-blue-200",
  },
];

export function TrustSection() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <MotionSection className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Por qué comprar con nosotros
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4 tracking-tight">
            Medicamentos seguros, entrega confiable
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Cada medicamento que vendemos cumple con los estándares de la Comisión Federal para la Protección contra Riesgos Sanitarios (COFEPRIS).
          </p>
        </MotionSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trustItems.map((item, i) => (
            <AnimatedCard
              key={item.title}
              index={i}
              className={`group p-7 rounded-2xl border border-slate-100 ${item.border} hover:shadow-xl hover:shadow-blue-950/8 transition-all duration-300 bg-white cursor-default`}
            >
              <div
                className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
              >
                <item.icon className={`w-7 h-7 ${item.color}`} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2.5 text-base tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
