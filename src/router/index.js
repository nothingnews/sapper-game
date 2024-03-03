import { createRouter, createWebHistory } from 'vue-router'
import ResultsPage from '@/pages/ResultsPage.vue'
import SettingsPage from '@/pages/SettingsPage.vue'
import GamePage from '@/pages/GamePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'settings',
      component: SettingsPage
    },
    {
      path: '/game',
      name: 'game',
      component: GamePage
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsPage
    },
  ]
})

export default router
