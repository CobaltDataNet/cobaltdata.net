import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: "landing", // Set the root directory to landing
  publicDir: "landing/public", // Ensure Vite serves public assets from here
  plugins: [react()],
  build: {
    outDir: "dist", // Output the final build to dist/
    emptyOutDir: true,
  }
});
