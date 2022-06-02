import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import dynamicallyRoute from './dynamically-route';
import routerConstantMap from './router-constant';

const routes = [
  ...routerConstantMap,
] as RouteRecordRaw[];

const router = dynamicallyRoute(createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
}));

export default router;
