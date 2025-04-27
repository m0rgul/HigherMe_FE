import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// import { resolve } from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  // resolve: {
  //   alias: {
  //     "@": resolve(__dirname, "src"),
  //     assets: resolve(__dirname, "src/assets"),
  //     components: resolve(__dirname, "src/components"),
  //     core: resolve(__dirname, "src/core"),
  //     hooks: resolve(__dirname, "src/hooks"),
  //     pages: resolve(__dirname, "src/pages"),
  //     store: resolve(__dirname, "src/store"),
  //   },
  // },
});
