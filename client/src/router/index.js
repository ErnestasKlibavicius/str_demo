import Vue from 'vue'
import Router from 'vue-router'
//Views
import Home from '@/components/Home'
import Faq from '@/components/Faq'
import Login from '@/components/Login'
import Documentation from '@/components/Documentation'
import Downloads from '@/components/Downloads'
import DownApp1 from '@/components/DownApp1'
import DownApp2 from '@/components/DownApp2'
import Account from '@/components/Account'
import Register from '@/components/Register'
import UpdPassword from '@/components/UpdPassword'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: Documentation
    },
    {
      path: '/downloads',
      name: 'Downloads',
      component: Downloads
    },
    {
      path: '/download-app-1',
      name: 'DownApp1',
      component: DownApp1
    },
    {
      path: '/download-app-2',
      name: 'DownApp2',
      component: DownApp2
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/update-password',
      name: 'UpdPassword',
      component: UpdPassword
    }  
  ]
})
