import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CreateTask from '@/views/CreateTask.vue';
import AllList from '@/views/AllList.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/new',
    name: 'CreateTask',
    component: CreateTask,
  },
  {
    path: '/all',
    name: 'AllList',
    component: AllList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
