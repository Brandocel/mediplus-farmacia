import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    allowedHosts: true,           // true = acepta cualquier host
    host: "0.0.0.0",              // escucha en todas las interfaces
    port: Number(process.env.PORT) || 4173,
  },
});
