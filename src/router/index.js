import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    // which is lazy-loaded when the route is visited
    { path: '/destination/:id', name:'destination.show', component: () => import('@/views/DestinationShow.vue') },
  ],
  // linkActiveClass: 'router-link-active', // this class will be added automatically to the active link
})

export default router
