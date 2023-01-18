import { createRouter, createWebHistory } from 'vue-router'

import Main from '../components/Main.vue'
import EngVersion from '../components/EngVersion.vue'
import JapanVersion from '../components/JapanVersion.vue'

const routes = [
    { path: '/', component: Main },
    { path: '/en', component: EngVersion },
    { path: '/jp', component: JapanVersion },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router