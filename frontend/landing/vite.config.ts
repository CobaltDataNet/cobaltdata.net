import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: "landing", // Set the root directory to the landing folder
  publicDir: "landing/public", // Ensure Vite finds index.html inside public
  plugins: [react()],
  build: {
    outDir: "dist", // Output the final build to dist/
    emptyOutDir: true,
  }
});
