// 用户管理页面
export const userRoutes = [
  {
    path: '/user',
    name: 'user',
    children: [
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/users/UsersView.vue'),
      },
    ],
  },
];
