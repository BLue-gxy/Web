import { type RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/view/layout/index.vue'),
    redirect: 'home',
    children: [
      {
        path: '/home',
        component: () => import('@/view/home/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/view/login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: constantRoutes
})

export default router
