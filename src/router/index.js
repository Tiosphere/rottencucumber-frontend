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
      path: '/movie',
      name: 'movie',
      component: () => import('@/views/MoviesView.vue')
    },
    {
      path: '/toppicks',
      name: 'top-picks',
      component: () => import('@/views/ToppicksView.vue')
    },
    {
      path: '/latest',
      name: 'latest',
      component: () => import('@/views/LatestView.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/SearchView.vue')
     },
     {
      path: '/actor',
      name: 'actor',
      component: () => import('@/views/ActorView.vue')
    },
    {
      path: '/director',
      name: 'director',
      component: () => import('@/views/DirectorView.vue')
    },
    {
      path: '/writer',
      name: 'writer',
      component: () => import('@/views/WriterView.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue')
    },
    {
      path: '/admin/manage/accounts',
      name: 'manage-accounts',
      component: () => import('@/views/admin/ManageAccountView.vue')
    },
    {
      path: '/admin/manage/movies',
      name: 'manage-movies',
      component: () => import('@/views/admin/ManageMovieView.vue')
    },
    {
      path: '/admin/',
      name: 'dashboard',
      component: () => import('@/views/admin/DashboardView.vue')
    }
  ]
})

export default router
