import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../views/Landing.vue';
import sa from '../views/sa.vue';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/sa',
    name: 'sa',
    component: sa,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
