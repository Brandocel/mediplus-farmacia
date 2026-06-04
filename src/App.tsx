import { useEffect } from "react";
import Lenis from "lenis";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { Categories } from "@/components/home/Categories";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { PromoBanner } from "@/components/home/PromoBanner";
import { ParallaxShowcase } from "@/components/home/ParallaxShowcase";
import { TrustSection } from "@/components/home/TrustSection";
import { Newsletter } from "@/components/home/Newsletter";

function App() {
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <Categories />
        <FeaturedProducts />
        <PromoBanner />
        <ParallaxShowcase />
        <TrustSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
