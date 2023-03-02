import { createRouter, createWebHistory } from "vue-router";
import course from "../views/course.vue";
import landing from "../views/landing.vue";
import login from "../views/login.vue";
import payment from "../views/payment.vue";
import profile_course from "../views/profile/profile_course.vue";
import profile_edit from "../views/profile/profile_edit.vue";
import profile_history from "../views/profile/profile_history.vue";
import profile from "../views/profile/profile_main.vue";
import profile_payment from "../views/profile/profile_payment.vue";
import register from "../views/register.vue";

const routes = [
  {
    path: "/",
    name: "landing",
    component: landing,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/course/:id",
    name: "course.show",
    component: course,
  },
  {
    path: "/register",
    name: "register",
    component: register,
  },
  {
    path: "/payment",
    name: "payment",
    component: payment,
  },
  {
    path: "/profile/:id",
    name: "profile.show",
    component: profile,
    children: [
      {
        path: "profile_course",
        name: "profile_course",
        component: profile_course,
      },
      {
        path: "profile_edit",
        name: "profile_edit",
        component: profile_edit,
      },

      {
        path: "profile_history",
        name: "profile_history",
        component: profile_history,
      },
      {
        path: "profile_payment",
        name: "profile_payment",
        component: profile_payment,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
