import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/views/Welcome.vue";

const routes = [
    {
        path: "/",
        name: "Welcome",
        component: Welcome
    },
    {
        path: "/main",
        name: "Main",
        component: () => import("@/views/Main.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;