import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/my',
        name: 'my',
        component: () => import('../views/my')
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home')
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/order')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
