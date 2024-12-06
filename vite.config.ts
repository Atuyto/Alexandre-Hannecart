export default defineConfig({
  plugins: [react()],
  base: "/Alexandre-Hannecart/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});