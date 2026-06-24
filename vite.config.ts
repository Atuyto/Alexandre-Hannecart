import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
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
  };
})
