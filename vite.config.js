import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Ensure this matches your deployment base URL
  server: {
    host: true,
    open: '/index.html',
  }
});