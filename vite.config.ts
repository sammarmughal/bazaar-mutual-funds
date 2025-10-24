import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  root: path.resolve(__dirname, "client"), // Set 'client' as the root folder
  server: {
    host: "localhost",
    port: 8080,
    open: true, // auto open in browser
  },
  build: {
    outDir: path.resolve(__dirname, "dist"), // Build output folder
    emptyOutDir: true, // Clear 'dist' before build
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client"), // for cleaner imports
    },
  },
});
