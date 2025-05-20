import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { setupI18n } from './locales';
// 通用样式
import '@wade/styles';

async function bootstrap(namespace: string) {
  console.log('namespace', namespace);
  const app = createApp(App);

  // 国际化 i18n 配置
  await setupI18n(app);

  // 配置 pinia-tore
  // await initStores(app, { namespace });

  // 路由
  app.use(router);

  // 挂载
  app.mount('#root');
}

export { bootstrap };
