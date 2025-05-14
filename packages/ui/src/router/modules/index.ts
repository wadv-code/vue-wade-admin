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
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView.vue'),
  },
];
