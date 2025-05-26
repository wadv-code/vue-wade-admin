import {
  $t,
  type LocaleSetupOptions,
  type SupportedLanguagesType,
  type TypedAny,
  setupI18n as coreSetup,
} from '@wade/locales';
import type { App } from 'vue';

/**
 * Load locale messages
 * @param lang
 */
async function loadMessages(lang: SupportedLanguagesType) {
  const modulesFiles = import.meta.webpackContext('./langs', {
    // 是否搜索子目录
    recursive: true,
    regExp: /\.json$/,
  });
  const message = modulesFiles
    .keys()
    .reduce((modules: TypedAny, modulePath: string) => {
      if (modulePath.indexOf(lang) !== -1) {
        const regex = /\/([^/]+)\.\w+$/;
        let moduleName = modulePath.replace(/\/([^/]+)\.\w+$/, '$1');
        const match = modulePath.match(regex);
        if (match) moduleName = match[1];
        const value = modulesFiles(modulePath);
        modules[moduleName] = value || {};
        return modules;
      }
      return modules;
    }, {});
  return message || {};
}

async function setupI18n(app: App, options: LocaleSetupOptions = {}) {
  await coreSetup(app, {
    defaultLocale: 'zh-CN',
    loadMessages,
    missingWarn: !import.meta.env.PROD,
    ...options,
  });
}

export { $t, setupI18n };
