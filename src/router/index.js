import { createRouter, createWebHistory } from "vue-router";
import Welcome from "@/views/Welcome.vue";

const routes = [
    {
        path: "/blind-printing",
        name: "Welcome",
        component: Welcome
    },
    {
        path: "/blind-printing/main",
        name: "Main",
        component: () => import("@/views/Main.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;