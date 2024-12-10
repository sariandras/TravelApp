import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// import About from '@/views/About.vue'
// import Brazil from '@/views/Brazil.vue'
// import Hawaii from '@/views/Hawaii.vue'
// import Jamaica from '@/views/Jamaica.vue'
// import Panama from '@/views/Panama.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:'custom-active-link',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: ()=>import('@/views/About.vue'),
    },
    {
      path: '/brazil',
      name: 'brazil',
      component: ()=>import('@/views/Brazil.vue'),
    },
    {
      path: '/hawaii',
      name: 'hawaii',
      component: ()=>import('@/views/Hawaii.vue'),
    },
    {
      path: '/jamaica',
      name: 'jamaica',
      component: ()=>import('@/views/Jamaica.vue'),
    },
    {
      path: '/panama',
      name: 'panama',
      component: ()=>import('@/views/Panama.vue'),
    },
    {
      path: '/destination/:id/:slug',
      name: 'destination',
      component: ()=>import('@/views/DestinationShow.vue'),
    }
  ],
})

export default router
