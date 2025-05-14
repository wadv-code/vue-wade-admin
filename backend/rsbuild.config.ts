import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';
// import Components from 'unplugin-vue-components/rspack';
// import { ShadcnVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [pluginVue()],
  html: {
    title: 'WadeBackend',
  },
  server: {
    port: 5173,
  },
});
