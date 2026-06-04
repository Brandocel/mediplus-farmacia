import { motion } from "framer-motion";
import {
  Pill, Sun, Wind, HeartPulse, Stethoscope, Shield, Activity, Cross,
} from "lucide-react";
import { categories } from "@/data/categories";
import { MotionSection } from "@/components/ui/MotionSection";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Pill, Sun, Wind, HeartPulse, Stethoscope, Shield, Activity, Cross,
};

export function Categories() {
  return (
    <section id="categorias" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <MotionSection className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
            Categorías
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4 tracking-tight">
            Busca tu medicamento o equipo
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
            Más de 5,000 medicamentos e instrumentos médicos organizados por especialidad. De patente, genérico o de libre venta.
          </p>
        </MotionSection>

        {/* Grid de categorías */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon];
            return (
              <motion.a
                key={cat.id}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, scale: 1.04 }}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/8 bg-white transition-all duration-300 cursor-pointer"
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110",
                    cat.bg
                  )}
                >
                  {Icon && <Icon className={cn("w-7 h-7", cat.color)} />}
                </div>
                <div className="text-center">
                  <p className="text-[11px] font-bold text-slate-700 group-hover:text-blue-600 transition-colors leading-tight">
                    {cat.name}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{cat.count} productos</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
