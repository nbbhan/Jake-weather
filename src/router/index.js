import { createRouter, createWebHistory } from 'vue-router'

import Main from '../components/Main.vue'
import EngVersion from '../components/EngVersion.vue'
import JapanVersion from '../components/JapanVersion.vue'
import About from '../components/About.vue'
import Guide from '../components/Guide.vue'

const routes = [
    { path: '/', component: Main },
    { path: '/en', component: EngVersion },
    { path: '/jp', component: JapanVersion },
    { path: '/about', component: About },
    { path: '/guide', component: Guide },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router