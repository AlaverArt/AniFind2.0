import { createRouter, createWebHistory } from 'vue-router';
import AnimeView from '@/pages/AnimeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
          path: '/',
          name: 'anime-view',
          component: AnimeView
        },
    ]
})

export default router;
