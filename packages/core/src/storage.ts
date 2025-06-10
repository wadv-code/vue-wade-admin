import { useSessionStorage, type RemovableRef } from '@vueuse/core';

/**
 * 根据环境设置 storage key
 * @param key
 */
export function getStorageKey(key: string): string {
  if (key === 'token') return key;
  return `core:${key}`;
}

/**
 * 用户token
 */
export const token: RemovableRef<string | null> = useSessionStorage(
  getStorageKey('token'),
  null,
);
