import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  html: {
    title: 'WadeUI',
  },
  server: {
    port: 4173,
  },
  source: {
    entry: {
      index: './src/main.ts',
    },
  },
});
