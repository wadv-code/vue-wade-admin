import { getStorageKey } from '@wade/core';
import { useStorage } from '@wade/hooks';
import type { RemovableRef } from '@wade/hooks';
import { defaultThemeConfig } from './defaults';

// 主题配置
export const themeConfig: RemovableRef<ThemeConfigType> = useStorage(
  getStorageKey('themeConfig'),
  defaultThemeConfig(),
);
