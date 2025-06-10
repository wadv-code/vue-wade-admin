import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { usePermission } from './permission';
import { routes } from './modules';

const viteBase = '';
const hashHistory = 'hash';

/**
 *  @zh_CN 创建vue-router实例
 */
const router = createRouter({
  history:
    hashHistory === 'hash'
      ? createWebHashHistory(viteBase)
      : createWebHistory(viteBase),
  // 应该添加到路由的初始路由列表。
  routes,
  scrollBehavior: (to, _from, savedPosition) => {
    if (savedPosition) return savedPosition;
    return to.hash ? { behavior: 'smooth', el: to.hash } : { left: 0, top: 0 };
  },
});

// 路由权限控制
usePermission(router);

export { router };
