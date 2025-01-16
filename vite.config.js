import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ajusta esto si despliegas en un subdirectorio
  build: {
    rollupOptions: {
      input: "./src/main.jsx", // Archivo de entrada principal
    },
  },
  assetsInclude: ["**/*.jpg", "**/*.png"], // Incluir imágenes en el build
});
