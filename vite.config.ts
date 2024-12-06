import react from "@vitejs/plugin-react-swc";
import {defineConfig} from "vite";
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
