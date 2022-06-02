export default [
  {
    path: '',
    component: () => import('@/layouts/default.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/modules/static/views/dashboard/index.vue'),
        meta: {
          icon: 'home',
          title: '首页',
          affix: true,
          auth: true,
          pageHeader: [],
        },
      },
    ],
  },
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/modules/static/views/error-page/404.vue'),
    hidden: true,
  },
  {
    path: '/403',
    name: 'NoAuth',
    component: () => import('@/modules/static/views/error-page/403.vue'),
    hidden: true,
  },
  {
    path: '/401',
    name: 'NoLogin',
    component: () => import('@/modules/static/views/error-page/401.vue'),
    hidden: true,
  },
  {
    path: '/redirect',
    component: () => import('@/layouts/default.vue'),
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/modules/static/views/redirect/index.vue'),
      },
    ],
  },
];
