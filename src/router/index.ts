import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import Layout from '@/views/layout/index.vue'
import Home from '@/views/home/index.vue'
// import Avatar from '@/views/avatar/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      }
    ]
  },
  {
    path: '/dicebear-avatar',
    component: Layout,
    children: [
      {
        path: '',
        name: 'DICEBEAR',
        component: () => import('@/views/dicebear/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
