import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

/* ── env vars — all optional with sensible defaults ──────────────────────── */
const port     = Number(process.env.PORT ?? "5173");
const basePath = process.env.BASE_PATH ?? "/";

/* ── Replit-only plugins (skipped on Vercel / other hosts) ────────────────── */
async function replitPlugins() {
  if (process.env.NODE_ENV === "production" || !process.env.REPL_ID) return [];
  const [{ cartographer }, { devBanner }, { default: runtimeErrorOverlay }] =
    await Promise.all([
      import("@replit/vite-plugin-cartographer"),
      import("@replit/vite-plugin-dev-banner"),
      import("@replit/vite-plugin-runtime-error-modal"),
    ]);
  return [
    cartographer({ root: path.resolve(import.meta.dirname, "..") }),
    devBanner(),
    runtimeErrorOverlay(),
  ];
}

export default defineConfig(async () => ({
  base: basePath,

  plugins: [
    react(),
    tailwindcss(),
    ...(await replitPlugins()),
  ],

  resolve: {
    alias: {
      /* `@assets` now lives inside the project — no monorepo dependency */
      "@":       path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "src/assets"),
    },
    dedupe: ["react", "react-dom"],
  },

  root: path.resolve(import.meta.dirname),

  build: {
    outDir:     path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },

  server: {
    port,
    strictPort: true,
    host:         "0.0.0.0",
    allowedHosts: true,
    proxy: {
      "/api": {
        target:      "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },

  preview: {
    port,
    host:         "0.0.0.0",
    allowedHosts: true,
  },
}));
