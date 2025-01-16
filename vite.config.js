import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Para despliegues en directorio raíz
  build: {
    outDir: "dist", // Carpeta de salida para el build (por defecto ya es "dist")
    assetsDir: "assets", // Directorio para recursos estáticos
  },
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.gif", "**/*.svg", "**/*.webp"], // Incluye formatos adicionales
});
