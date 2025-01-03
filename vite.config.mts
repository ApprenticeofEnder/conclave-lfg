import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { gadget } from "gadget-server/vite";
import path from "path"

export default defineConfig({
  plugins: [gadget(), react()],
  clearScreen: false,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
});
