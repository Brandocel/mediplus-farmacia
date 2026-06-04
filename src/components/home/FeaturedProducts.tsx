import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { MotionSection } from "@/components/ui/MotionSection";

export function FeaturedProducts() {
  return (
    <section id="productos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <MotionSection>
            <span className="inline-block bg-blue-50 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">
              Medicamentos e instrumental
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950 tracking-tight">
              Los más comprados hoy
            </h2>
          </MotionSection>
          <MotionSection delay={0.1}>
            <Button variant="outline" size="sm" className="self-start sm:self-auto">
              Ver todos los productos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </MotionSection>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
