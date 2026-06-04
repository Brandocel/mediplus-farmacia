import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, CheckCircle2, ArrowRight } from "lucide-react";
import { MotionSection } from "@/components/ui/MotionSection";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setEmail("");
  };

  return (
    <section id="contacto" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <div className="relative overflow-hidden rounded-3xl bg-white border border-slate-100 shadow-xl shadow-blue-950/5 p-10 md:p-16 max-w-3xl mx-auto text-center">

            {/* Decoración de fondo */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-blue-50 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-sky-50 rounded-full blur-3xl pointer-events-none" />

            <div className="relative">
              {/* Ícono */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/25">
                <Mail className="w-7 h-7 text-white" />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-3 tracking-tight">
                Alertas de precio en tus medicamentos
              </h2>
              <p className="text-slate-500 mb-10 max-w-md mx-auto leading-relaxed">
                Regístrate y recibe avisos cuando bajen los precios de los medicamentos que usas, además de ofertas en instrumental médico y genéricos nuevos.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="flex items-center justify-center gap-2.5 bg-blue-50 border border-blue-200 text-blue-700 rounded-2xl px-6 py-4 font-semibold"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  ¡Listo! Te has registrado correctamente.
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@correo.com"
                    required
                    className="flex-1 px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 focus:bg-white transition-all"
                  />
                  <Button type="submit" size="lg" className="gap-2 flex-shrink-0">
                    Registrarme
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}

              <p className="text-xs text-slate-400 mt-5">
                Sin spam. Cancela cuando quieras. Tu privacidad es importante para nosotros.
              </p>
            </div>
          </div>
        </MotionSection>
      </div>
    </section>
  );
}
