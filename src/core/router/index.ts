import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import homeRoutes from '@home';

const coreRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
  },
];

const routes: Array<RouteRecordRaw> = [...coreRoutes, ...homeRoutes];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
