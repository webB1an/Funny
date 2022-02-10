import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dicebear-avatar',
    name: 'DICEBEAR',
    component: () => import('@/views/dicebear/index.vue')
  },
  {
    path: '/multiavatar',
    name: 'MULTIAVATAR',
    component: () => import('@/views/multiavatar/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
