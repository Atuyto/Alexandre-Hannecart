import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/Alexandre-Hannecart/", // Correspond au nom exact de ton dépôt
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});