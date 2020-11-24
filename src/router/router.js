import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        name: 'ItemView',
        path: '',
        component: () => import('@/views/ItemView'),
      },
      {
        name: 'ItemDetail',
        path: '/item/detail/:id?',
        component: () => import('@/views/ItemDetail'),
      },
      {
        name: 'BuyList',
        path: '/buy/list',
        component: () => import('@/views/BuyList'),
      },
      {
        name: 'CartList',
        path: '/cart/list',
        component: () => import('@/views/CartList'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
