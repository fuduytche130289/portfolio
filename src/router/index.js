import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/pages/Home"),
    },
    {
        path: "/introduce",
        name: "Introduce",
        component: () => import("@/components/Introduce"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
