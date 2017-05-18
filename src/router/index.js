import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home'
import Detail from '../views/detail'
import User from '../views/user'
import About from '../views/about'
import Login from '../views/login'
import Me from '../views/me'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'toHome',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/user/:username',
    name: 'user',
    component: User
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/me',
    name: 'me',
    component: Me
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
