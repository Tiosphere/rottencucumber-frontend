import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/user/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/user/signup',
      name: 'signup',
      component: () => import('@/views/SignupView.vue')
    },
    {
      path: '/user/forget',
      name: 'forget-password',
      component: () => import('@/views/ForgetView.vue')
    },
    {
      path: '/user/forget/:token',
      name: 'new-password',
      component: () => import('@/views/NewPassView.vue')
    },
    {
      path: '/user/logout',
      name: 'logout',
      component: () => import('@/views/logout.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('@/views/MoviesView.vue')
    },
    {
      path: '/admin/',
      name: 'dashboard',
      component: () => import('@/views/admin/DashboardView.vue')
    }
  ]
})

export default router
