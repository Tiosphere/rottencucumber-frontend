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
      path: '/popular',
      name: 'popular',
      component: () => import('@/views/PopularView.vue')
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
      path: '/user/profile',
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
      path: '/admin/manage/actor',
      name: 'manage-actor',
      component: () => import('@/views/admin/ManageActorView.vue')
    },
    {
      path: '/admin/manage/director',
      name: 'manage-director',
      component: () => import('@/views/admin/ManageDirectorView.vue')
    },
    {
      path: '/admin/manage/genre',
      name: 'manage-genre',
      component: () => import('@/views/admin/ManageGenreView.vue')
    },
    {
      path: '/admin/manage/language',
      name: 'manage-language',
      component: () => import('@/views/admin/ManageLanguageView.vue')
    },
    {
      path: '/admin/manage/platform',
      name: 'manage-platform',
      component: () => import('@/views/admin/ManagePlatformView.vue')
    },
    {
      path: '/admin/manage/platform',
      name: 'manage-writer',
      component: () => import('@/views/admin/ManageWriterView.vue')
    },
    {
      path: '/admin/',
      name: 'dashboard',
      component: () => import('@/views/admin/DashboardView.vue')
    }
  ]
})

export default router
