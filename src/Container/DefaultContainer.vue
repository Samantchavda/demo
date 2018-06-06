<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="../assets/logo.png" width="89" height="25" alt="Logo">
        <img class="navbar-brand-minimized" src="../assets/logo.png" width="30" height="30" alt="Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
    </AppHeader>
    <div class="app-body">
      <sidebar fixed>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarMinimizer/>
      </sidebar>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
    <AppFooter>
      <!--footer-->
    </AppFooter>
  </div>
</template>

<script>
import nav from '../_nav'
import AppHeader from '../components/Header/Header.vue'
import SidebarToggler from '../components/sidebar/SidebarToggler.vue'
import sidebar from '../components/sidebar/Sidebar.vue'
import SidebarMinimizer from '../components/sidebar/SidebarMinimizer.vue'
import SidebarNav from '../components/sidebar/SidebarNav.vue'
import AppFooter from '../components/Footer/Footer.vue'
import  Breadcrumb from '../components/Breadcrumb/Breadcrumb.vue'

export default {
  name: 'full',
  components: {
    AppHeader,
    sidebar,
    AppFooter,
    Breadcrumb,
    SidebarToggler,
    SidebarNav,
    SidebarMinimizer
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
