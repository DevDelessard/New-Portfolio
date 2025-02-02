import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ErrorView from '../views/ErrorView.vue'
import CvView from '../views/CvView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/Cv',
      name: 'Cv',
      component: CvView,
    },
    {
      path: '/:catchAll(.*)',
      component: ErrorView,
    }
  ]
})

export default router
