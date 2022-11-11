// import Vue from 'vue'
import { createRouter, createWebHistory  } from 'vue-router'
import MainPage from './components/MainPage.vue';
import FunVersion from './components/FunVersion.vue';

// Vue.use(VueRouter)

const routes = [
  { path: '/', component: MainPage },
  { path: '/fun', component: FunVersion, name: FunVersion }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router