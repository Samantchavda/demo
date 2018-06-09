import Vue from 'vue'
import Router from 'vue-router'

// Notification
import Notifications from 'vue-notification'

//velocity-animate
import velocity      from 'velocity-animate'


// Containers
import DefaultContainer from '@/container/DefaultContainer'

// Views
import Dashboard from '@/views/Dashboard'
import Otherbindings from '@/views/Binding/Otherbindings'
import Databindings from '@/views/Binding/Databindings'
import Cssbindings from '@/views/Binding/Cssbindings'
import Inputtag from '@/views/Controll/Inputtag'
import Checkboxtag from '@/views/Controll/Checkboxtag'
import Radiotag from '@/views/Controll/Radiotag'
import Selecttag from '@/views/Controll/Selecttag'
import Form from '@/views/Controll/Form'
import Alerts from '@/views/Notifications/Alerts'
import Modals from '@/views/Notifications/Modals'


//Pages
import Page404 from '@/views/Pages/Page404'


Vue.use(Router)
Vue.use(Notifications, {velocity})

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
            },
            {
              path: 'Cssbindings',
              name: 'Cssbindings',
              component: Cssbindings
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
            },
            {
              path: 'Radiotag',
              name: 'Radiotag',
              component: Radiotag
            },
            {
              path: 'Selecttag',
              name: 'Selecttag',
              component: Selecttag
            },
            {
              path: 'Form',
              name: 'Form',
              component: Form
            }
          ]
        },
        {
          path: 'Notifications',
          redirect: '/Notifications/Alerts',
          name: 'Notifications',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'Alerts',
              name: 'Alerts',
              component: Alerts
            },
            {
              path: 'Modals',
              name: 'Modals',
              component: Modals
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
