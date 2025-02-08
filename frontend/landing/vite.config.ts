import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: "frontend/landing",  // Set the correct root directory for the landing page
  publicDir: "frontend/landing/public", // Ensure Vite finds public assets like index.html
  plugins: [react()],
  build: {
    outDir: "dist",  // The build output directory
    emptyOutDir: true,
  }
});
