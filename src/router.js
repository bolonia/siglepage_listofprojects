import { createRouter, createWebHistory  } from 'vue-router'
import MainPage from './components/MainPage';
import FunVersion from './components/FunVersion';

const routes = [
  { path: '/', component: MainPage },
  { path: '/fun', component: FunVersion }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router