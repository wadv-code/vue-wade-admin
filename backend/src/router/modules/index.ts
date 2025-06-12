import LayoutView from '@/layout/LayoutView.vue';

/**
 * 定义404、401界面
 */
export const notFoundView = [
  {
    path: '/:path(.*)*',
    name: 'notFound',
    component: () => import('@/views/error/ErrorNotFound.vue'),
    meta: {
      title: '404',
      isHide: true,
    },
  },
  {
    path: '/401',
    name: 'noPower',
    component: () => import('@/views/error/ErrorNotPower.vue'),
    meta: {
      title: '401',
      isHide: true,
    },
  },
];

export const routes = [
  {
    redirect: '/',
    path: '/',
    name: 'layout',
    component: LayoutView,
    children: [
      ...notFoundView,
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/HomeView.vue'),
      },
      {
        path: '/work',
        name: 'work',
        component: () => import('@/views/work/WorkView.vue'),
      },
      {
        path: '/users',
        name: 'users',
        component: () => import('@/views/users/UsersView.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView.vue'),
  },
];
