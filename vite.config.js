import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        verein: resolve(__dirname, 'verein.html'),
        mitgliedschaft: resolve(__dirname, 'mitgliedschaft.html'),
        vorstand: resolve(__dirname, 'vorstand.html'),
        veranstaltungen: resolve(__dirname, 'veranstaltungen.html'),
        seemannschaft: resolve(__dirname, 'seemannschaft.html'),
        kontakt: resolve(__dirname, 'kontakt.html'),
      },
    },
  },
});
