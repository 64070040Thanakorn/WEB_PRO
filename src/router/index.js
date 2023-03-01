import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/landing.vue'
import Login from '../views/login.vue'

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router