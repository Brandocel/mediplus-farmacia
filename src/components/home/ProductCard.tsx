import { motion } from "framer-motion";
import { Star, ShoppingCart, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  index: number;
}

function badgeVariant(badge: string) {
  if (badge === "Más vendido") return "hot" as const;
  if (badge === "Genérico")   return "secondary" as const;
  if (badge === "Kit completo") return "new" as const;
  return "discount" as const;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10 transition-all duration-300 overflow-hidden flex flex-col"
    >
      {/* ── Imagen ── */}
      <div className="relative overflow-hidden bg-slate-50 aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transition: "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.07)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />

        {/* Vista rápida al hover */}
        <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/10 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/95 backdrop-blur-sm text-slate-700 hover:text-blue-600 p-2.5 rounded-xl shadow-lg border border-slate-100"
          >
            <Eye className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Badge de nombre */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge variant={badgeVariant(product.badge)}>{product.badge}</Badge>
          </div>
        )}

        {/* % descuento */}
        {product.discount && (
          <div className="absolute top-3 right-3">
            <Badge variant="discount">–{product.discount}%</Badge>
          </div>
        )}

        {/* Indicador de receta */}
        {product.prescription && (
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center gap-1 bg-blue-900/80 backdrop-blur-sm text-sky-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
              <FileText className="w-2.5 h-2.5" />
              Requiere receta
            </span>
          </div>
        )}
      </div>

      {/* ── Información ── */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 gap-3">
        <div>
          <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest mb-1">
            {product.category}
          </p>
          <h3 className="text-sm font-semibold text-slate-900 leading-snug">
            {product.name}
          </h3>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-slate-200 fill-slate-200"
                }`}
              />
            ))}
          </div>
          <span className="text-[10px] text-slate-400 font-medium">
            {product.rating} ({product.reviews.toLocaleString()})
          </span>
        </div>

        {/* Precio */}
        <div className="flex items-baseline gap-2 mt-auto">
          <span className="text-xl font-bold text-slate-950 tracking-tight">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          {product.discount && (
            <span className="text-xs font-bold text-blue-600 ml-auto">
              Ahorras ${(product.originalPrice! - product.price).toFixed(0)}
            </span>
          )}
        </div>

        <Button size="sm" className="w-full gap-2 mt-1">
          <ShoppingCart className="w-3.5 h-3.5" />
          {product.prescription ? "Comprar con receta" : "Agregar al carrito"}
        </Button>
      </div>
    </motion.div>
  );
}
