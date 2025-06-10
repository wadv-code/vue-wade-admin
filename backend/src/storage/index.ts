import { useStorage } from '@vueuse/core';
import type { RemovableRef } from '@vueuse/core';
import { defaultThemeConfig } from './defaults';
import { getStorageKey } from '@wade/core';

// 主题配置
export const themeConfig: RemovableRef<ThemeConfigType> = useStorage(
  getStorageKey('themeConfig'),
  defaultThemeConfig(),
);
