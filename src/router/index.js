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
      path: '/user/forget-password',
      name: 'forget-password',
      component: () => import('@/views/ForgetView.vue')
    },
    {
      path: '/movies',
      name: 'movies',
      component: () => import('@/views/MoviesView.vue')
    }
  ]
})

export default router
