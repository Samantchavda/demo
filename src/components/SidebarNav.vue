/* eslint-disable */
<template>
  <nav class="sidebar-nav">
    <ul class="nav">
      <template v-for="item in navItems">
        <li>
          <a :href="item.url">{{item.name}}</a>
        </li>
      </template>
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
