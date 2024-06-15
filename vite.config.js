import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Ensure this matches your deployment base URL
  server: {
    host: true,
    open: '/index.html',
  },
  build: {
    assetsInlineLimit: 0, // Ensure all assets are included as separate files
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});