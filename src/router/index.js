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
      path: '/movie/:slug',
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
      path: '/actor/:slug',
      name: 'actor',
      component: () => import('@/views/ActorView.vue')
    },
    {
      path: '/director/:slug',
      name: 'director',
      component: () => import('@/views/DirectorView.vue')
    },
    {
      path: '/writer/:slug',
      name: 'writer',
      component: () => import('@/views/WriterView.vue')
    },
    {
      path: '/user/profile/:slug',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue')
    },


    {
      path: '/admin/manage/accounts',
      name: 'manage-accounts',
      component: () => import('@/views/admin/ManageAccountView.vue')
    },
    {
      path: '/admin/manage/accounts/update/:slug',
      name: 'account-edit',
      component: () => import('@/views/admin/form/update/AccountForm.vue')
    },
    {
      path: '/admin/manage/accounts/create/',
      name: 'account-create',
      component: () => import('@/views/admin/form/create/CreateUserForm.vue')
    },
    {
      path: '/admin/manage/accounts/delete/:slug',
      name: 'account-delete',
      component: () => import('@/views/admin/form/delete/DeleteAccountForm.vue')
    },
    {
      path: '/genres/:slug',
      name: 'movies-genres',
      component: () => import('@/views/GenresView.vue')
    },
    {
      path: '/platform/:slug',
      name: 'platform',
      component: () => import('@/views/PlatformView.vue')
    },

    {
      path: '/admin/manage/movies',
      name: 'manage-movies',
      component: () => import('@/views/admin/ManageMovieView.vue')
    },
    {
      path: '/admin/manage/movies/update/:slug',
      name: 'movies-edit',
      component: () => import('@/views/admin/form/update/MovieForm.vue')
    },
    {
      path: '/admin/manage/movies/create/',
      name: 'movies-create',
      component: () => import('@/views/admin/form/create/CreateMovieForm.vue')
    },
    {
      path: '/admin/manage/movies/delete/:slug',
      name: 'movies-delete',
      component: () => import('@/views/admin/form/delete/DeleteMovieForm.vue')
    },


    {
      path: '/admin/manage/actor',
      name: 'manage-actor',
      component: () => import('@/views/admin/ManageActorView.vue')
    },
    {
      path: '/admin/manage/actor/update/:slug',
      name: 'actor-edit',
      component: () => import('@/views/admin/form/update/ActorForm.vue')
    },
    {
      path: '/admin/manage/actor/create/',
      name: 'actor-create',
      component: () => import('@/views/admin/form/create/CreateActorForm.vue')
    },
    {
      path: '/admin/manage/actor/delete/:slug',
      name: 'actor-delete',
      component: () => import('@/views/admin/form/delete/DeleteActorForm.vue')
    },



    {
      path: '/admin/manage/writer',
      name: 'manage-writer',
      component: () => import('@/views/admin/ManageWriterView.vue')
    },
    {
      path: '/admin/manage/writer/update/:slug',
      name: 'writer-edit',
      component: () => import('@/views/admin/form/update/WriterForm.vue')
    },
    {
      path: '/admin/manage/writer/create/',
      name: 'writer-create',
      component: () => import('@/views/admin/form/create/CreateWriterForm.vue')
    },
    {
      path: '/admin/manage/writer/delete/:slug',
      name: 'writer-delete',
      component: () => import('@/views/admin/form/delete/DeleteWriterForm.vue')
    },


    {
      path: '/admin/manage/director',
      name: 'manage-director',
      component: () => import('@/views/admin/ManageDirectorView.vue')
    },
    {
      path: '/admin/manage/director/update/:slug',
      name: 'director-edit',
      component: () => import('@/views/admin/form/update/DirectorForm.vue')
    },
    {
      path: '/admin/manage/director/create',
      name: 'director-create',
      component: () => import('@/views/admin/form/create/CreateDirectorForm.vue')
    },
    {
      path: '/admin/manage/director/delete/:slug',
      name: 'director-delete',
      component: () => import('@/views/admin/form/delete/DeleteDirectorForm.vue')
    },


    {
      path: '/admin/manage/genre',
      name: 'manage-genre',
      component: () => import('@/views/admin/ManageGenreView.vue')
    },
    {
      path: '/admin/manage/genre/update/:slug',
      name: 'genre-edit',
      component: () => import('@/views/admin/form/update/GenreForm.vue')
    },
    {
      path: '/admin/manage/genre/create',
      name: 'genre-create',
      component: () => import('@/views/admin/form/create/CreateGenreForm.vue')
    },
    {
      path: '/admin/manage/genre/delete/:slug',
      name: 'genre-delete',
      component: () => import('@/views/admin/form/delete/DeleteGenreForm.vue')
    },


    {
      path: '/admin/manage/language',
      name: 'manage-language',
      component: () => import('@/views/admin/ManageLanguageView.vue')
    },
    {
      path: '/admin/manage/language/update/:slug',
      name: 'language-edit',
      component: () => import('@/views/admin/form/update/LanguageForm.vue')
    },
    {
      path: '/admin/manage/language/create',
      name: 'language-create',
      component: () => import('@/views/admin/form/create/CreateLanguageForm.vue')
    },
    {
      path: '/admin/manage/language/delete/:slug',
      name: 'language-delete',
      component: () => import('@/views/admin/form/delete/DeleteLanguageForm.vue')
    },


    {
      path: '/admin/manage/platform',
      name: 'manage-platform',
      component: () => import('@/views/admin/ManagePlatformView.vue')
    },
    {
      path: '/admin/manage/platform/update/:slug',
      name: 'platform-edit',
      component: () => import('@/views/admin/form/update/PlatformForm.vue')
    },
    {
      path: '/admin/manage/platform/create',
      name: 'platform-create',
      component: () => import('@/views/admin/form/create/CreatePlatformForm.vue')
    },
    {
      path: '/admin/manage/platform/delete/:slug',
      name: 'platform-delete',
      component: () => import('@/views/admin/form/delete/DeletePlatformForm.vue')
    },

    {
      path: '/admin/manage/review',
      name: 'manage-review',
      component: () => import('@/views/admin/ManageReviewView.vue')
    },
    {
      path: '/admin/manage/review/delete/:id',
      name: 'review-delete',
      component: () => import('@/views/admin/form/delete/DeleteReviewForm.vue')
    },


    {
      path: '/admin/',
      name: 'dashboard',
      component: () => import('@/views/admin/DashboardView.vue')
    }
  ]
})

export default router
