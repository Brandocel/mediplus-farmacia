export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  cta: string;
  ctaSecondary: string;
  image: string;
  gradient: string;
  accentColor: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Medicamentos de patente",
    subtitle: "y genéricos certificados",
    description:
      "Compra en línea más de 5,000 medicamentos con registro COFEPRIS. Recibe tu pedido en casa el mismo día o al día siguiente.",
    badge: "✓ Registro COFEPRIS",
    cta: "Comprar medicamentos",
    ctaSecondary: "Ver catálogo completo",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1400&h=700&fit=crop&auto=format&q=80",
    gradient: "from-blue-950/92 via-blue-900/70 to-transparent",
    accentColor: "text-sky-300",
  },
  {
    id: 2,
    title: "Instrumental y equipo",
    subtitle: "médico de alta precisión",
    description:
      "Tensiómetros, glucómetros, termómetros, jeringas, sondas y más. Todo el instrumental que necesitas con garantía y precio justo.",
    badge: "Envío gratis en tu primera compra",
    cta: "Ver instrumental médico",
    ctaSecondary: "Comparar modelos",
    image:
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1400&h=700&fit=crop&auto=format&q=80",
    gradient: "from-slate-950/92 via-slate-800/70 to-transparent",
    accentColor: "text-cyan-300",
  },
  {
    id: 3,
    title: "Medicamentos con receta",
    subtitle: "entregados a domicilio",
    description:
      "Sube tu receta médica, valídala con nuestros farmacéuticos certificados y recibe tus medicamentos sin moverte de casa.",
    badge: "Farmacéutico en línea 24/7",
    cta: "Subir mi receta",
    ctaSecondary: "Hablar con farmacéutico",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1400&h=700&fit=crop&auto=format&q=80",
    gradient: "from-blue-950/92 via-sky-900/70 to-transparent",
    accentColor: "text-sky-300",
  },
  {
    id: 4,
    title: "Genéricos hasta",
    subtitle: "40% más económicos",
    description:
      "Misma fórmula, misma eficacia, menor precio. Ahorra en tus medicamentos de uso continuo sin sacrificar calidad ni seguridad.",
    badge: "Hasta 40% de ahorro",
    cta: "Ver genéricos disponibles",
    ctaSecondary: "Comparar precios",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=700&fit=crop&auto=format&q=80",
    gradient: "from-slate-950/92 via-blue-950/70 to-transparent",
    accentColor: "text-cyan-300",
  },
];
