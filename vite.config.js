import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['inventionless-mai-cyano.ngrok-free.dev'], //  ngrok хост
  },
});