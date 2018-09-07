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
import Register from '@/components/Register'
//User Views
import Account from '@/components/user/Account'
import UpdPassword from '@/components/user/UpdPassword'
import Referrals from '@/components/user/Referrals'
import ChangePassword from '@/components/user/ChangePassword'
import Purchase from '@/components/user/Purchase'
import User from '@/components/user/User'
//Admin Views
import Dashboard from '@/components/admin/Dashboard'
import Admins from '@/components/admin/Admins'
import Gifts from '@/components/admin/Gifts'
import Users from '@/components/admin/Users'


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
    },
    {
      path: '/referrals',
      name: 'Referrals',
      component: Referrals
    },
    {
      path: '/change-password',
      name: 'ChangePass',
      component: ChangePassword
    },
    {
      path: '/purchase',
      name: 'Purchase',
      component: Purchase
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Users
    },
    {
      path: '/admins',
      name: 'Admins',
      component: Admins
    },
    {
      path: '/gifts',
      name: 'Gifts',
      component: Gifts
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children: [
        {
          path: 'recoverpass',
        }
      ]
    },
    {
      path: '/api',
      name: 'Api'
    }
  ]
})
