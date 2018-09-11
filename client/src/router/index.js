import Vue from 'vue'
import Router from 'vue-router'
// Static Views
import Home from '@/components/Home'
import Faq from '@/components/Faq'
import Login from '@/components/Login'
import Documentation from '@/components/Documentation'
import Downloads from '@/components/Downloads'
import DownApp1 from '@/components/DownApp1'
import DownApp2 from '@/components/DownApp2'  
import Register from '@/components/Register'
//Client Views
import Account from '@/components/client/Account'
import UpdPassword from '@/components/client/UpdPassword'
import Referrals from '@/components/client/Referrals'
import ChangePassword from '@/components/client/ChangePassword'
import Purchase from '@/components/client/Purchase'
import Client from '@/components/client/Client'
//Admin Views
import Dashboard from '@/components/admin/Dashboard'
import Admins from '@/components/admin/Admins'
import Gifts from '@/components/admin/Gifts'
import Clients from '@/components/admin/Clients'
import AdminLogin from '@/components/admin/Login'
import Confirm from '@/components/admin/Confirm'
import UpdatePasswordAdmin from '@/components/admin/UpdatePassword'
//Default Api root view
import ApiView from '@/components/ApiView'


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
      component: Clients,
    },
    {
      path: '/update-password',
      name: 'updatePasswordAdmin',
      component: UpdatePasswordAdmin
    },
    {
      path: '/log-in',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/admins',
      name: 'Admins',
      component: Admins
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/gifts',
      name: 'Gifts',
      component: Gifts
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/client',
      name: 'Client',
      component: Client,
      children: [
        {
          path: 'recoverpass',
        }
      ]
    },
    {
      path: '/api',
      name: 'Api',
      component: ApiView,
      children: [
        {
          path: 'client',
          component: Faq
        }
      ]
    }
  ]
})
