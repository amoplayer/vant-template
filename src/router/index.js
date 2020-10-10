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
        component: () => import('../views/my'),
        meta: {
          title: '我的'
        }
      },
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/order',
        name: 'order',
        component: () => import('../views/order'),
        meta: {
          title: '预约'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
