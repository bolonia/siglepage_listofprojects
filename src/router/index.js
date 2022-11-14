import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/MainPage'
import Fun from '../components/FunVersion'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/fun',
    name: 'Fun',
    component: Fun
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
