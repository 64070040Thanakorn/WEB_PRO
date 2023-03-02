import { createRouter, createWebHistory } from 'vue-router'
import course from '../views/course.vue'
import landing from '../views/landing.vue'
import login from '../views/login.vue'
import payment from '../views/payment.vue'
import register from '../views/register.vue'
import profile from '../views/profile.vue'

const routes = [
  {
    path: '/',
    name: 'landing',
    component: landing,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
  {
    path: '/course/:id',
    name: 'course.show',
    component: course,
  },
  {
    path: '/register',
    name: 'register',
    component: register,
  },
  {
    path: '/payment',
    name: 'payment',
    component: payment,
  },
  {
    path: '/profile/:id',
    name: 'profile.show',
    component: profile,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router