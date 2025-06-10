import { useSessionStorage, useStorage } from '@vueuse/core';
import type { RemovableRef } from '@vueuse/core';
import { defaultThemeConfig } from './defaults';

/**
 * 根据环境设置 storage key
 * @param key
 */
export function getStorageKey(key: string): string {
  if (key === 'token') return key;
  return `backend:${key}`;
}

// 主题配置
export const themeConfig: RemovableRef<ThemeConfigType> = useStorage(
  getStorageKey('themeConfig'),
  defaultThemeConfig(),
);

// 用户token
export const token: RemovableRef<string | null> = useSessionStorage(
  getStorageKey('token'),
  null,
);
