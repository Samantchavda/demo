import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// Containers
import DefaultContainer from '@/container/DefaultContainer'

// Views
import Dashboard from '@/views/Dashboard'
import Ticket from '@/views/Ticket'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'ticket',
          name: 'Ticket',
          component: Ticket
        }
      ]
    }
  ]
})
