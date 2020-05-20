import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../paginas/Home.vue'
import Login from '../paginas/Login.vue'
import Comissão from '../paginas/Comissão.vue'
import Pedidos from '../paginas/Pedidos.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
  path: '/',
  name: 'Login',
  component: Login
  },
  {
    path:'/comissao',
    name: 'Comissão',
    component: Comissão

  },

  {
    path:'/pedidos',
    name: 'Pedidos',
    component: Pedidos

  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
