import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/LoginForm.vue'
import BlankPage from '../components/BlankPage.vue'
import Menu from '../components/page-menu.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/blank',
    name: 'BlankPage',
    component: BlankPage
  },
  {
    path: '/menu',
    name: 'menu',
    component: Menu
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
