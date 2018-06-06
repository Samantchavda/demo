import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// Containers
import DefaultContainer from '@/container/DefaultContainer'

// Views
import Dashboard from '@/views/Dashboard'
import Otherbindings from '@/views/Binding/Otherbindings'
import Databindings from '@/views/Binding/Databindings'
import Inputtag from '@/views/Controll/Inputtag'
import Checkboxtag from '@/views/Controll/Checkboxtag'

//Pages
import Page404 from '@/views/Pages/Page404'


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
          path: 'Binding',
          redirect: '/Binding/Databindings',
          name: 'Binding',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'Otherbindings',
              name: 'Otherbindings',
              component: Otherbindings
            },
            {
              path: 'Databindings',
              name: 'Databindings',
              component: Databindings
            }
          ]
        },
        {
          path: 'Controll',
          redirect: '/Controll/inputtag',
          name: 'Controll',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'inputtag',
              name: 'Inputtag',
              component: Inputtag
            },
            {
              path: 'checkboxtag',
              name: 'Checkboxtag',
              component: Checkboxtag
            }
          ]
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        }
      ]
    }
  ]
})
