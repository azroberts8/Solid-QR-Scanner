import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    solidPlugin()
  ],
  base: "/Solid-QR-Scanner/",
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
