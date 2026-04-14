import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://augustusnas.github.io',
  base: '/augustusnas-site',
  vite: {
    plugins: [tailwindcss()],
  },
});