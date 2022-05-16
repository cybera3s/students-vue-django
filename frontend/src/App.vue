<template>
  <Navbar />
  <router-view class="container" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: white!important;
  font-weight: bold;
}

</style>
<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'App',
    components:{
      Navbar,
    }
  }
</script>