import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 0, // Evita que pequenas imagens sejam embutidas como base64
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]", // Nome dos arquivos na build
      },
    },
  },
});
