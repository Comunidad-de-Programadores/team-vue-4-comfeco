import { createRouter, createWebHistory } from "vue-router";
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/SingInUp.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/SignIn.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/my-account",
    name: "MyAccount",
    component: () =>
      import(/* webpackChunkName: "MyAccount" */ "../views/MyAccount.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/recover-password",
    name: "RecoverPass",
    component: () =>
      import(/* webpackChunkName: "recoverPass" */ "../views/RecoverPass.vue"),
    meta: { requiresAuth: false },
  },
  {
    path: "/edit-my-account",
    name: "EditUserAccount",
    component: () =>
      import(
        /* webpackChunkName: "editUserAccount" */ "../views/EditUserAccount.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/home",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/comunity",
    name: "Comunidad",
    component: () =>
      import(/* webpackChunkName: "comunidad" */ "../views/Comunidad.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/404NotFount.vue"),
    meta: { requiresAuth: false },
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      behavior: "smooth",
    };
  },
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
  const user = firebase.auth().currentUser;
  if (requiresAuth && user === null) {
    next("/");
  } else {
    next();
  }
});

export default router;
