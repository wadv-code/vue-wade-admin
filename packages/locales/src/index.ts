import { type App, unref } from 'vue';
import { type Locale, createI18n } from 'vue-i18n';
import type {
  LoadMessageFn,
  LocaleSetupOptions,
  SupportedLanguagesType,
  TypedAny,
} from './typing';

let loadMessages: LoadMessageFn;

// 初始化语言
export const i18n = createI18n({
  legacy: false,
  locale: navigator.language.split('-')[0] || 'zh-CN',
  fallbackLocale: 'zh-CN',
  messages: {},
});

/**
 * Set i18n language
 * @param locale
 */
function setI18nLanguage(locale: Locale) {
  i18n.global.locale.value = locale;

  document?.querySelector('html')?.setAttribute('lang', locale);
}

/**
 * Load locale messages
 * @param lang
 */
async function loadLocaleMessages(lang: SupportedLanguagesType) {
  if (unref(i18n.global.locale) === lang) {
    return setI18nLanguage(lang);
  }

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
  if (message) {
    i18n.global.setLocaleMessage(lang, message);
  }

  const mergeMessage = await loadMessages(lang);
  i18n.global.mergeLocaleMessage(lang, mergeMessage);

  return setI18nLanguage(lang);
}

async function setupI18n(app: App, options: LocaleSetupOptions = {}) {
  const { defaultLocale = 'zh-CN' } = options;
  // app可以自行扩展一些第三方库和组件库的国际化
  loadMessages = options.loadMessages || (async () => ({}));
  app.use(i18n);
  await loadLocaleMessages(defaultLocale);

  // 在控制台打印警告
  i18n.global.setMissingHandler((locale, key) => {
    if (options.missingWarn && key.includes('.')) {
      console.warn(
        `[nitrify] Not found '${key}' key in '${locale}' locale messages.`,
      );
    }
  });
}

const $t = i18n.global.t;
const $te = i18n.global.te;

export { $t, $te, setupI18n, loadLocaleMessages };

export type {
  TypedAny,
  LoadMessageFn,
  SupportedLanguagesType,
  LocaleSetupOptions,
};
