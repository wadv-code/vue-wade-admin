import mdItCustomAttrs from 'markdown-it-custom-attrs';
import { defineConfig } from 'vitepress';

import { zhSearch } from './language/index.mts';
import { head, pwa } from './pwa.mts';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Wade Docs',
  description: '企业级管理系统框架',
  srcDir: 'src',
  base: '/docs/',
  head: head(),
  pwa: pwa(),
  markdown: {
    preConfig: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': 'gallery',
      });
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/cat.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        locales: {
          ...zhSearch,
        },
      },
    },
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wadv-code/vue-wade-admin' },
    ],

    darkModeSwitchLabel: '主题',
    darkModeSwitchTitle: '切换到深色模式',
    docFooter: {
      next: '下一页',
      prev: '上一页',
    },
    outline: {
      label: '页面导航',
    },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
  },
});
