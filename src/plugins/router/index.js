import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/blind-printing",
        name: "Welcome",
        component: () => import("@/pages/main/index.vue")
    },
    {
        path: "/blind-printing/main",
        name: "Main",
        component: () => import("@/pages/trainer/index.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;