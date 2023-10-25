import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../components/login-form.vue'
import BlankPage from '../components/blank-page.vue'
import Dashboard from '../components/page-dashboard.vue'
import pageTemplateVue from '../components/page-template.vue'
import waterQuality from '../components/water-quality.vue'
import notFound from '../views/not-found.vue'
import pageAuth from '../views/page-auth.vue'
import pageAlert from '../components/page-alert.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: pageTemplateVue,
    children: [
      {
        path: '/dashboard',
        name: Dashboard,
        component: Dashboard
      },
      {
        path: '/water quality',
        name: 'Water Quality',
        component: waterQuality
      },
      {
        path: '/alerts',
        name: 'alerts',
        component: pageAlert,
        meta: { requiresAuth: true }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/blank',
    name: 'BlankPage',
    component: BlankPage
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
//import.meta.env.BASE_URL
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
//to.matched.some(record => record.meta.requiresAuth)
router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem('Authentication')
  const access = localStorage.getItem('Authorization')
  if (!!auth && to.name === 'login') {
    next('/')
  } else if (!!!auth && to.name === 'home') {
    next('/login')
  } else if (!!auth && to.matched.some((record) => record.meta.requiresAuth)) {
    next('/auth')
  } else {
    next()
  }
})

// router.afterEach((to, from) => {
//   if (localStorage.getItem('Auth')) {
//     return { name: 'login' }
//   }
// })

// router.beforeEach((to, from, next) => {
//   if (to.matched.some((record) => record.meta.requiresAuth) && !authStore.isAuthenticated) {
//     next('/login')
//   } else {
//     next()
//   }
// })
// router.beforeEach(async (to, from) => {
//   if (!isAuthenticated && to.name !== 'login') {
//     // redirect the user to the login page
//     return { name: 'login' }
//   }
// })
// router.beforeEach((to, from, next) => {
//   if (to.name !== 'login' && !authStore.isAuthenticated) next({ name: 'login' })
//   else next()
// })

export default router
