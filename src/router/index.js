import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/FirstView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/secondview',
      name: 'secondview',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SecondView.vue')
    },
    {
      path: '/thirdview',
      name: 'thirdview',
      component: () => import('../views/ThirdView.vue')      

    },
    {
      path: '/fourthview',
      name: 'fourthview',
      component: () => import('../views/FourthView.vue')      

    },
  ]
})

export default router
