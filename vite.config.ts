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
    // Permite cualquier host externo (Render, Vercel, etc.)
    allowedHosts: "all",
    port: Number(process.env.PORT) || 4173,
    host: true,
  },
});
