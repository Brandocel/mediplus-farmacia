import { useState } from "react";
import { Search, ShoppingCart, Menu, Plus, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Inicio",          href: "#inicio"      },
  { label: "Nosotros",        href: "#nosotros"     },
  { label: "Medicamentos",    href: "#productos"    },
  { label: "Cuidado Personal",href: "#categorias"   },
  { label: "Material Médico", href: "#categorias"   },
  { label: "Promociones",     href: "#promociones"  },
  { label: "Contacto",        href: "#contacto"     },
];

export function Header() {
  const [cartCount] = useState(3);
  const [searchValue, setSearchValue] = useState("");

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-slate-950/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 h-16">

          {/* ── Logo ── */}
          <a href="#inicio" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-600/30 group-hover:bg-blue-700 transition-colors">
              <Plus className="w-5 h-5 text-white stroke-[3]" />
            </div>
            <div className="leading-none">
              <div className="text-[20px] font-bold tracking-tight">
                <span className="text-blue-700">Medi</span>
                <span className="text-slate-700">Plus</span>
              </div>
              <p className="text-[9px] text-slate-400 uppercase tracking-[0.18em] -mt-0.5 font-medium">
                Farmacia
              </p>
            </div>
          </a>

          {/* ── Buscador desktop ── */}
          <div className="hidden md:flex flex-1 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Buscar medicamentos, vitaminas…"
              className="w-full pl-4 pr-12 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-400 focus:bg-white transition-all"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-1.5 transition-colors shadow-sm">
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* ── Nav desktop ── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition-all whitespace-nowrap font-medium"
              >
                {link.label}
              </a>
            ))}
            {/* Dropdown "Más" */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm text-slate-600 hover:text-blue-600 px-3 py-2 rounded-lg hover:bg-blue-50 transition-all font-medium">
                Más <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-200" />
              </button>
              <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-48 bg-white rounded-2xl shadow-xl shadow-slate-950/10 border border-slate-100 py-2">
                  {navLinks.slice(5).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* ── Carrito + menú mobile ── */}
          <div className="flex items-center gap-1.5 ml-auto lg:ml-0">
            <button className="relative p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-blue-600 text-white text-[10px] font-bold min-w-[18px] min-h-[18px] rounded-full flex items-center justify-center px-1 shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile sheet */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="lg:hidden p-2.5 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                  <Menu className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white">
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2.5 text-left">
                    <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-md shadow-blue-600/30">
                      <Plus className="w-5 h-5 text-white stroke-[3]" />
                    </div>
                    <div className="leading-none">
                      <div className="text-lg font-bold">
                        <span className="text-blue-700">Medi</span>
                        <span className="text-slate-700">Plus</span>
                      </div>
                      <p className="text-[9px] text-slate-400 uppercase tracking-widest font-medium">Farmacia</p>
                    </div>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile search */}
                <div className="mt-6 relative">
                  <input
                    type="text"
                    placeholder="Buscar productos…"
                    className="w-full pl-4 pr-10 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>

                {/* Mobile nav */}
                <nav className="mt-4 flex flex-col gap-0.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="border-t border-slate-100 mt-6 pt-6">
                  <Button className="w-full" size="lg">
                    <ShoppingCart className="w-4 h-4" />
                    Ver carrito ({cartCount})
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
