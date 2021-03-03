import { createRouter, createWebHistory } from "vue-router";
import firebase from "firebase/app";
import "firebase/app";
import "firebase/auth";

const routes = [{
        path: "/",
        name: "Login",
        component: () =>
            import ( /* webpackChunkName: "login" */ "../views/SingInUp.vue"),
        meta: { isPublc: true },
    },
    {
        path: "/register",
        name: "Register",
        component: () =>
            import ( /* webpackChunkName: "register" */ "../views/SignIn.vue"),
        meta: { isPublc: true },

    },
    {
        path: "/comunidad",
        name: "Comunidad",
        component: () =>
            import ( /* webpackChunkName: "comunidad" */ "../views/Comunidad.vue"),
    },
    {
        path: "/my-account",
        name: "Perfil",
        component: () =>
            import ( /* webpackChunkName: "Perfil" */ "../views/MyAccount.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/edit-my-account",
        name: "PxEditInfoUser",
        component: () =>
            import ( /* webpackChunkName: "edit" */ "../views/EditUserAccount.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/recover-password",
        name: "RecoverPass",
        component: () =>
            import ( /* webpackChunkName: "recoverPass" */ "../views/RecoverPass.vue"),
        meta: { isPublc: true },
    },

    {
        path: "/:catchAll(.*)",
        name: "Error",
        component: () =>
            import ( /* webpackChunkName: "Error" */ "../views/404NotFount.vue"),
        meta: { isPublc: true },

    },
    {
        path: "/edit-my-account",
        name: "EditUserAccount",
        component: () =>
            import ( /* webpackChunkName: "edit" */ "../views/EditUserAccount.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/home",
        name: "Home",
        component: () =>
            import ( /* webpackChunkName: "home" */ "../views/Home.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/comunidad",
        name: "Comunidad",
        component: () =>
            import ( /* webpackChunkName: "comunidad" */ "../views/Comunidad.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/my-account",
        name: "Perfil",
        component: () =>
            import ( /* webpackChunkName: "Perfil" */ "../views/MyAccount.vue"),
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/eventos",
        name: "Eventos",
        component: () =>
            import ( /* webpackChunkName: "Eventos"*/ "../views/Events"),
        meta: {
            requiresAuth: true,
        },
    }
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
    if (requiresAuth) {
        firebase.auth().onAuthStateChanged((user) => {
            if (!user) next("/");
            else next();
        });
    } else next();
});
export default router;