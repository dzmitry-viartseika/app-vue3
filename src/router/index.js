import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CreateTask from '@/views/CreateTask.vue';
import Task from '@/views/Task.vue';
// import page404 from '@/views/page404.vue';

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
    path: '/task/:id',
    name: 'Task',
    component: Task,
  },
  // {
  //   path: '*',
  //   name: 'page404',
  //   component: page404,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
