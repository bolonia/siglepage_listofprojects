import { createRouter, createWebHistory  } from 'vue-router'
import MainPage from './components/MainPage.vue';
import FunVersion from './components/FunVersion.vue';

const routes = [
  { path: '/', component: MainPage },
  { path: '/fun', component: FunVersion }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router