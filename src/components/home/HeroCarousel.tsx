import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { slides } from "@/data/slides";
import { cn } from "@/lib/utils";

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-slate-950"
      style={{ height: "clamp(440px, 62vh, 640px)" }}
    >
      {/* ── Slides ── */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={slide.id}
          initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.75, ease: [0.32, 0.72, 0, 1] } }}
          exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.75, ease: [0.32, 0.72, 0, 1] } }}
          className="absolute inset-0"
        >
          {/* Background */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover scale-105"
            style={{ filter: "brightness(0.6)" }}
          />
          {/* Gradient izq → der */}
          <div className={cn("absolute inset-0 bg-gradient-to-r", slide.gradient)} />
          {/* Viñeta inferior */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
          {/* Noise texture subtle */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-1.5 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 text-sky-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  {slide.badge}
                </span>
              </motion.div>

              {/* Título */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.55 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-4"
              >
                {slide.title}
                <br />
                <span className={slide.accentColor}>{slide.subtitle}</span>
              </motion.h1>

              {/* Descripción */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.55 }}
                className="text-slate-300 text-base sm:text-lg mb-10 leading-relaxed max-w-lg"
              >
                {slide.description}
              </motion.p>

              {/* Botones */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.55 }}
                className="flex flex-wrap gap-3"
              >
                <Button size="lg" variant="default" className="gap-2">
                  {slide.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="white-outline">
                  {slide.ctaSecondary}
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ── Controles prev/next ── */}
      {[
        { onClick: prev, side: "left-4", Icon: ChevronLeft },
        { onClick: next, side: "right-4", Icon: ChevronRight },
      ].map(({ onClick, side, Icon }) => (
        <button
          key={side}
          onClick={onClick}
          className={`absolute ${side} top-1/2 -translate-y-1/2 z-10 w-11 h-11 bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105`}
        >
          <Icon className="w-5 h-5" />
        </button>
      ))}

      {/* ── Indicadores inferiores ── */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              "rounded-full transition-all duration-400",
              i === current
                ? "w-8 h-2 bg-white"
                : "w-2 h-2 bg-white/35 hover:bg-white/60"
            )}
          />
        ))}
      </div>

      {/* ── Contador ── */}
      <div className="absolute bottom-7 right-6 z-10 text-white/40 text-xs font-mono tracking-widest">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
