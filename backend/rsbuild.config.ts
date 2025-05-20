import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  plugins: [pluginVue()],
  html: {
    title: 'WadeBackend',
    meta: {
      viewport:
        'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0',
    },
  },
  server: {
    // base: '/wade',
    port: 5173,
  },
});
