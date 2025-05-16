import LayoutView from '@/layout/LayoutView.vue';

export const routes = [
  {
    redirect: '/',
    path: '/',
    name: 'layout',
    component: LayoutView,
    children: [
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
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView.vue'),
  },
];
