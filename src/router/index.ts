import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/login-form.vue'
import Dashboard from '../components/page-dashboard.vue'
import waterQuality from '../components/water-quality.vue'
import notFound from '../views/not-found.vue'
import pageAuth from '../views/page-auth.vue'
import pageAlert from '../components/page-alert.vue'

const routes = [
  {
    path: '/',
    redirect: { name: 'Dashboard' },

    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { requiresAuth: true }
      },
      {
        path: '/waterquality',
        name: 'Water Quality',
        component: waterQuality,
        meta: { requiresAuth: true }
      }
    ]
  },

  {
    path: '/alerts',
    name: 'Alerts',
    component: pageAlert,
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },

  {
    path: '/auth',
    name: 'notAuth',
    component: pageAuth
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem('Authentication')

  if (!!auth && to.name === 'login') {
    next('/')
  }

  if (!!!auth && to.meta.requiresAuth) {
    next('/login')
  }

  if (!!auth && !to.meta.requiresAuth) {
    next('/auth')
  } else {
    next()
  }
})

export default router
