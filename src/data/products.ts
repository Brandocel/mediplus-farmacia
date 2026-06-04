export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  prescription?: boolean; // requiere receta
}

export const products: Product[] = [
  {
    id: 1,
    name: "Paracetamol 500 mg — 20 tabs",
    category: "Analgésicos",
    price: 38,
    originalPrice: 52,
    discount: 27,
    rating: 4.9,
    reviews: 1284,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&h=500&fit=crop&auto=format&q=80",
    badge: "Más vendido",
  },
  {
    id: 2,
    name: "Amoxicilina 500 mg — 15 cápsulas",
    category: "Antibióticos",
    price: 85,
    originalPrice: 110,
    discount: 23,
    rating: 4.7,
    reviews: 632,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=500&h=500&fit=crop&auto=format&q=80",
    prescription: true,
  },
  {
    id: 3,
    name: "Metformina 850 mg — 30 tabs",
    category: "Antidiabéticos",
    price: 95,
    rating: 4.8,
    reviews: 849,
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500&h=500&fit=crop&auto=format&q=80",
    badge: "Genérico",
    prescription: true,
  },
  {
    id: 4,
    name: "Losartán 50 mg — 30 tabs",
    category: "Cardiovascular",
    price: 72,
    originalPrice: 95,
    discount: 24,
    rating: 4.7,
    reviews: 511,
    image: "https://images.unsplash.com/photo-1563213126-a4273aed2016?w=500&h=500&fit=crop&auto=format&q=80",
    prescription: true,
  },
  {
    id: 5,
    name: "Tensiómetro Digital de Brazo",
    category: "Instrumental médico",
    price: 349,
    originalPrice: 480,
    discount: 27,
    rating: 4.8,
    reviews: 724,
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500&h=500&fit=crop&auto=format&q=80",
    badge: "Oferta",
  },
  {
    id: 6,
    name: "Glucómetro + 25 tiras reactivas",
    category: "Antidiabéticos",
    price: 420,
    originalPrice: 580,
    discount: 28,
    rating: 4.9,
    reviews: 938,
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500&h=500&fit=crop&auto=format&q=80",
    badge: "Kit completo",
  },
  {
    id: 7,
    name: "Jeringas Desechables 3 ml (10 pz)",
    category: "Instrumental médico",
    price: 55,
    rating: 4.6,
    reviews: 318,
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&h=500&fit=crop&auto=format&q=80",
  },
  {
    id: 8,
    name: "Vendas Elásticas 10 cm (paq. 3)",
    category: "Material de curación",
    price: 48,
    originalPrice: 65,
    discount: 26,
    rating: 4.5,
    reviews: 275,
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=500&h=500&fit=crop&auto=format&q=80",
  },
];
