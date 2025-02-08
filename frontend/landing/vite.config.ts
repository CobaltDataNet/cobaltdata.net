import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: "landing", // Set the correct root directory
  publicDir: "public", // Ensure index.html is served correctly
  plugins: [react()],
  build: {
    outDir: "../dist", // Build output outside landing/
    emptyOutDir: true,
  }
});
