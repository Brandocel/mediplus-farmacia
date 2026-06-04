import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tag, ArrowRight, FileText } from "lucide-react";
import { MotionSection } from "@/components/ui/MotionSection";

export function PromoBanner() {
  return (
    <section id="promociones" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 p-10 md:p-16">

            {/* Decoración fondo */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-sky-400/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(56,189,248,0.07),_transparent_60%)] pointer-events-none" />
            <div className="absolute top-0 right-[30%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center justify-between gap-10">

              {/* Texto */}
              <div className="text-center md:text-left max-w-xl">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-5">
                  <div className="w-7 h-7 bg-sky-500/20 rounded-lg flex items-center justify-center">
                    <Tag className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                  <span className="text-sky-400 font-semibold text-xs uppercase tracking-widest">
                    Oferta en medicamentos
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
                  Medicamentos genéricos{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-300">
                    hasta 40% más baratos
                  </span>
                </h2>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-2">
                  Misma fórmula química, mismo principio activo, misma eficacia terapéutica.{" "}
                  <span className="text-sky-300 font-medium">Todos con registro COFEPRIS.</span>
                </p>
                <p className="text-slate-400 text-sm">
                  Disponibles: Antibióticos · Antidiabéticos · Cardiovascular · Analgésicos · Antiinflamatorios
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-9">
                  {[
                    { value: "+5,000", label: "Medicamentos" },
                    { value: "24 hrs",  label: "Entrega express" },
                    { value: "COFEPRIS", label: "Certificado" },
                  ].map(({ value, label }) => (
                    <div key={label} className="text-center md:text-left">
                      <p className="text-xl font-bold text-white">{value}</p>
                      <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mt-0.5">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botones */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0 w-full sm:w-auto md:w-auto">
                <Button size="xl" variant="white" className="gap-2 font-bold">
                  Ver medicamentos
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button size="xl" variant="white-outline" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Subir receta médica
                </Button>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="absolute top-8 right-36 hidden lg:flex flex-col items-center"
            >
              <div className="bg-white rounded-2xl shadow-2xl shadow-blue-950/30 px-4 py-3 text-center border border-slate-100">
                <p className="text-3xl font-black text-blue-600">40%</p>
                <p className="text-xs text-slate-500 font-semibold">AHORRO</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
              className="absolute bottom-10 right-14 hidden lg:flex flex-col items-center"
            >
              <div className="bg-sky-500 rounded-2xl shadow-2xl shadow-sky-950/30 px-4 py-3 text-center">
                <p className="text-sm font-bold text-white">Envío gratis</p>
                <p className="text-xs text-sky-100">+$500 MXN</p>
              </div>
            </motion.div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
