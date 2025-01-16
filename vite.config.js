import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Asegura que las rutas sean relativas
  build: {
    outDir: "dist", // Directorio de salida para el build
    assetsDir: "assets", // Directorio para recursos estáticos
  },
  assetsInclude: ["**/*.jpg", "**/*.png", "**/*.gif", "**/*.svg", "**/*.webp"], // Incluye formatos adicionales
});
