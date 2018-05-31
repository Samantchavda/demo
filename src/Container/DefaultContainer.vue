<template>
  <div class="app">
    <SidebarNav :navItems="nav"></SidebarNav>
     <main class="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
  </div>
</template>

<script>
import nav from '../_nav'
import SidebarNav from '../components/SidebarNav.vue'
//import { Header as AppHeader, HeaderDropdown as AppHeaderDropdown, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
// import { Header as AppHeader, HeaderDropdown as AppHeaderDropdown, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Breadcrumb } from '../components/'
// import { Footer as TheFooter } from '@coreui/vue'
//import DafaultAside from './DafaultAside'

export default {
  name: 'full',
  components: {
    SidebarNav
  },
  data () {
    return {
      nav: nav.items,
      itemsCount: 42
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>
