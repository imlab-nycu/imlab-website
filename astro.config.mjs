import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://imlab-nycu.github.io/',
  base: '/',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
  },
});
