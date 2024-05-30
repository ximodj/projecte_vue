import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/landingPage.vue'
import Secundaria from "../views/secundaria.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/Productes',
      name: 'Productes',
      component: Secundaria
    }
  ]
})
export default router;




