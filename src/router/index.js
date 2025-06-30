import Home from "@/pages/HomePage.vue";
import Landing from "@/pages/LandingPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'landing',
            component: Landing
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
    ]
})

export default router;