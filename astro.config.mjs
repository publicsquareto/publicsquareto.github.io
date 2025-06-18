// @ts-check
import { defineConfig } from 'astro/config';
import sectionize from '@hbsnow/rehype-sectionize';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://publicsquareto.github.io',
  experimental: {
    headingIdCompat: true,
  },

  markdown: {
    rehypePlugins: [sectionize],
  },

  integrations: [mdx()],
});
