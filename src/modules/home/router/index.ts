import { RouteRecordRaw } from 'vue-router';
import About from '../views/about/about.vue';
import Home from '../views/home/home.vue';

const homeRoutes: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

export default homeRoutes;
