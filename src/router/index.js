import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/SingInUp.vue"),
    meta: { isPublc: true },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/SignIn.vue"),
    meta: { isPublc: true },
  },
  {
    path: "/recover-password",
    name: "RecoverPass",
    component: () =>
      import(/* webpackChunkName: "recoverPass" */ "../views/RecoverPass.vue"),
    meta: { isPublc: true },
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () =>
      import(/* webpackChunkName: "Error" */ "../views/404NotFount.vue"),
    meta: { isPublc: true },
  },
  {
    path: "/comunidad",
    name: "Comunidad",
    component: () =>
      import(/* webpackChunkName: "comunidad" */ "../views/Comunidad.vue"),
    meta: { isPublc: true },
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
