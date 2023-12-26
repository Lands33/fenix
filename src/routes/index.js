import { createRouter, createWebHistory } from 'vue-router';
// import pageHome from '../pages/page-home.vue';
// import pageIndustries from '../pages/page-industries-businesses.vue';

const pageHome = () => import('../pages/page-home.vue');

const routes = [
    {
        path: '/home',
        component: pageHome
    },
    {
        path: '/industrias',
        component: () => import('../pages/page-industrias.vue')
    },
    {
        path: '/estamoscontigo',
        component: () => import('../pages/page-estamoscontigo.vue')
    },
    {
        path: '/clientes',
        component: () => import('../pages/page-clientes.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
