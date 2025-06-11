import { defineConfig } from '@rsbuild/core';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig(({ env, command }) => {
  console.log('env:', env, 'command:', command);
  console.log();

  return {
    plugins: [pluginVue(), pluginImageCompress()],
    html: {
      title: 'Wade Backend',
      meta: {
        viewport:
          'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0',
      },
      favicon: './src/assets/favicon.ico',
    },
    output: {
      assetPrefix: './',
    },
    server: {
      port: 5173,
      proxy: {
        '/api': {
          target: process.env.BASE_REQUEST_API,
          changeOrigin: true,
        },
      },
    },
  };
});
