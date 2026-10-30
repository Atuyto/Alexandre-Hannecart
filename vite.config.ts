import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig(({ mode }) => {
  const isVercel = process.env.VERCEL === "1";
  const base =
    process.env.VITE_BASE_PATH ??
    (isVercel ? "/" : mode === "production" ? "/Alexandre-Hannecart/" : "/");

  return {
    plugins: [react()],
    base,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    optimizeDeps: {
      include: ["gifler"],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              if (id.includes("framer-motion")) return "motion";
              if (id.includes("react-router") || id.includes("react-dom") || id.includes("/react/"))
                return "vendor";
              if (id.includes("@tanstack/react-query")) return "query";
            }
          },
        },
      },
    },
  };
})
