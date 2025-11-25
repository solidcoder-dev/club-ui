import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const tenant = process.env.VITE_TENANT || "default";
const themePath = path.resolve(__dirname, `src/styles/${tenant}.scss`);
const resolvedTheme = fs.existsSync(themePath)
  ? themePath
  : path.resolve(__dirname, "src/styles/default.scss");

export default defineConfig({
  resolve: {
    alias: {
      "@tenant-theme": resolvedTheme
    }
  },
  plugins: [react()],
  server: {
    port: 5173
  }
});
