import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import DashBoard from '../views/DashBoard.vue'
import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'empty' },
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard,
  },
  // {
  //   path: "/:catchAll(.*)",
  //   component: NotFound,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
