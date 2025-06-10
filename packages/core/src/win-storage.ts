/**
 * window.localStorage 浏览器永久缓存
 * @method set 设置永久缓存
 * @method get 获取永久缓存
 * @method remove 移除永久缓存
 * @method clear 移除全部永久缓存
 */
export const Local = {
  // v2.5.7版本 通过环境储存数据
  setKey(key: string) {
    if (key === 'token') return key;
    return `core:${key}`;
  },
  // 设置永久缓存
  set<T>(key: string, val: T) {
    window.localStorage.setItem(Local.setKey(key), JSON.stringify(val));
  },
  // 获取永久缓存
  get(key: string) {
    const json = <string>window.localStorage.getItem(Local.setKey(key));
    return JSON.parse(json);
  },
  // 移除永久缓存
  remove(key: string) {
    window.localStorage.removeItem(Local.setKey(key));
  },
  // 移除全部永久缓存
  clear() {
    window.localStorage.clear();
  },
};

/**
 * window.sessionStorage 浏览器临时缓存
 * @method set 设置临时缓存
 * @method get 获取临时缓存
 * @method remove 移除临时缓存
 * @method clear 移除全部临时缓存
 */
export const Session = {
  // 设置临时缓存
  set<T>(key: string, val: T) {
    window.sessionStorage.setItem(Local.setKey(key), JSON.stringify(val));
  },
  // 获取临时缓存
  get(key: string) {
    const json = <string>window.sessionStorage.getItem(Local.setKey(key));
    return JSON.parse(json);
  },
  // 移除临时缓存
  remove(key: string) {
    window.sessionStorage.removeItem(Local.setKey(key));
  },
  // 移除全部临时缓存
  clear() {
    window.sessionStorage.clear();
  },
};
