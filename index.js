import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Users from '@/components/user'
import Login from '@/components/login'
import Register from '@/components/register'
import Accounts from '@/components/accountdetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/accounts/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/accounts/signup',
      name: 'Register',
      component: Register
    },
    {
      path: '/accounts/login/:username',
      name: 'accountdetails',
      component: Accounts
    }
  //     children:[
  //       {
  //         path:'update',
  //         component:Accounts
  //       },
  //       {
  //         path:'applyloan',
  //         component:Loans
  //       },
  //       {
  //         path:'loans',
  //         component:Loans
  //       }
  //   ]
  //   },
  //   {
  //     path: '/logout',
  //     component: Logout
  //   }
  // ]
  ]})
