import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
import path from 'node:path';

export default defineConfig({
  plugins: [pluginVue()],
  html: {
    title: 'WadeBackend',
  },
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      '@repo/ui': path.resolve(__dirname, '../packages/ui'),
    },
  },
});
