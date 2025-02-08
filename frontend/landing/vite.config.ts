import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure correct build output
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": "/src", // Optional alias for cleaner imports
    },
  },
});
