import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";
dotenv.config();

const serviceURL = process.env.SERVICE_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
  },
  server: {
    proxy: {
      "/api": {
        target: serviceURL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
