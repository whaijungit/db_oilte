import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            path: '/',
            component: () =>import('@/views/home/index.vue')
        },
        {
            path: '/phenotype',
            component: () =>import('@/views/phenotype/index.vue')
        },
        {
            path: '/gene',
            component: () =>import('@/views/gene/index.vue')
        },
        {
            path: '/variant',
            component: () =>import('@/views/variant/index.vue')
        },
        {
            path: '/blast',
            component: () =>import('@/views/blast/index.vue')
        }
    ]
})

export default router