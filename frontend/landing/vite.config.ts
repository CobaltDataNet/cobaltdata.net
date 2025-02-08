import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: "frontend/landing",  // Set root to landing inside frontend
  publicDir: "frontend/landing/public",  // Ensure Vite serves index.html correctly
  plugins: [react()],
  build: {
    outDir: "../../dist",  // Ensure build output is separate
    emptyOutDir: true,
  }
});
