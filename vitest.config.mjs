import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    include: ["tests/ui/**/*.test.tsx"],
    setupFiles: ["./tests/ui/setup.js"],
  },
  resolve: {
    alias: {
      "@/(.*)": path.resolve(import.meta.dirname, "./$1"),
      "@": path.resolve(import.meta.dirname, "./"),
    },
  },
});
