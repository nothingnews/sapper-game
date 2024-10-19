import { createRouter, createWebHistory } from 'vue-router'
import ResultsPage from '@/pages/ResultsPage.vue'
import SettingsPage from '@/pages/SettingsPage.vue'
import GamePage from '@/pages/GamePage.vue'
import { ROUTES } from '@/consts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES.SETTINGS,
      name: 'settings',
      component: SettingsPage
    },
    {
      path: ROUTES.GAME,
      name: 'game',
      component: GamePage
    },
    {
      path: ROUTES.RESULTS,
      name: 'results',
      component: ResultsPage
    }
  ]
})

export default router
