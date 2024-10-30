import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/components/NotFound.vue'
import Opiniones from '@/views/Opiniones.vue'
import Admin from '@/views/Admin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/opiniones/:gameId',
    name: 'Opiniones',
    component: Opiniones,
    props: true
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },

  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
