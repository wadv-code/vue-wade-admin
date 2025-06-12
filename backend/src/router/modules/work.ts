// 工作台页面
export const workRoutes = [
  {
    path: '/work',
    name: 'work',
    children: [
      {
        path: 'workbench',
        name: 'workbench',
        component: () => import('@/views/work/WorkbenchView.vue'),
      },
    ],
  },
];
