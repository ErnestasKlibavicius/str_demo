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
import Services from '@/components/client/Services'
import UpdPassword from '@/components/client/UpdPassword'
import Referrals from '@/components/client/Referrals'
import ChangePassword from '@/components/client/ChangePassword'
import AddFunds from '@/components/client/AddFunds'
import Client from '@/components/client/Client'
import Redeem from '@/components/client/Redeem'
//Admin Views
import Dashboard from '@/components/admin/Dashboard'
import Admins from '@/components/admin/Admins'
import Gifts from '@/components/admin/Gifts'
import Clients from '@/components/admin/Clients'
import AdminLogin from '@/components/admin/Login'
import Confirm from '@/components/admin/Confirm'
import UpdatePasswordAdmin from '@/components/admin/UpdatePassword'
import AdminRecover from '@/components/admin/Recover'
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
      path: '/services',
      name: 'Services',
      component: Services
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
      path: '/add-funds',
      name: 'AddFunds',
      component: AddFunds
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
      path: '/info',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/recover',
      name: 'Admin-Recover',
      component: AdminRecover
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
          path: 'recoverpass'
        }
      ]
    },
    {
      path: '/redeem',
      name: 'Redeem',
      component: Redeem
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
