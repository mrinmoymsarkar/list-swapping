import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "4hygp6-5173.csb.app",
      ".csb.app", // This allows all CodeSandbox hosts
      "localhost",
    ],
  },
});
