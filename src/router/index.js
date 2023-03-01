import { createRouter, createWebHistory } from 'vue-router'
import landing from '../views/landing.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import course from '../views/course.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: landing
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/course',
    name: 'course',
    component: course,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router