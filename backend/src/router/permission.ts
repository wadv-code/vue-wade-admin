import { sleep } from '@wade/utils';
import TopBar from 'topbar';
import type { Router } from 'vue-router';

// 颜色
TopBar.config({
  barColors: {
    0: 'rgba(206,  0, 98, .5)',
    '.25': 'rgba(52,  152, 219, .9)',
    '.50': 'rgba(241, 196, 15,  .9)',
    '.75': 'rgba(230, 126, 34,  .9)',
    '1.0': 'rgba(206,  0, 98, .9)',
  },
});

/**
 * 权限控制
 * @param router
 */
export const usePermission = (router: Router) => {
  const whiteList = ['/login', '/error'];

  // 路由加载前
  router.beforeEach(async (to, from, next) => {
    // 显示进度条
    TopBar.show();
    // 白名单
    if (whiteList.includes(to.path)) {
      // 执行
      next();
    } else {
      // 等待
      await sleep(1000);
      // 执行
      next();
    }
  });
  // 路由加载后
  router.afterEach(() => {
    TopBar.hide();
  });
};
