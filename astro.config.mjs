import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://mrafael1.github.io',
  base: process.env.BASE_PATH || '/portfolio',
  trailingSlash: 'always',
  output: 'static',
  devToolbar: { enabled: false },
});
