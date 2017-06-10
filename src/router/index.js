import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home'
import Detail from '../views/detail'
import User from '../views/user'
import About from '../views/about'
import Login from '../views/login'
import Profile from '../views/profile'
import Topic from '../views/topic'
import Replies from '../views/replies'
import Notread from '../views/notread'
import Read from '../views/read'
import Create from '../views/create'

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
    path: '/profile',
    name: 'profile',
    component: Profile
  },
  {
    path: '/topic',
    name: 'topic',
    component: Topic
  },
  {
    path: '/replies',
    name: 'replies',
    component: Replies
  },
  {
    path: '/notread',
    name: 'notread',
    component: Notread
  },
  {
    path: '/read',
    name: 'read',
    component: Read
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  }
]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

export default router
