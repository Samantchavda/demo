<template>
  <nav class="sidebar-nav">
  <ul class="nav">
    <li  v-for="(item, index) in navItems" :key="index">
        <a :href="item.url">{{item.name}}</a>
      </li>    
    </ul>  
  </nav>
</template>

<script>


export default {
  name: 'SidebarNav',
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    
  },
  data () {
    return {
      
    }
  },
  methods: {
    scrollHandle (evt) {
      // console.log(evt)
    }
  }
}
</script>

<style scoped lang="css">
  .scroll-area {
    position: relative;
    height: 100%;
    margin: auto;
  }
</style>
