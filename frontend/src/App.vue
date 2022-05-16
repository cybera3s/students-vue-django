<template>
  <Navbar />
  <router-view class="container" />
</template>

<script>
  import Navbar from '@/components/Navbar.vue'

  export default {
    name: 'App',
    components: {
      Navbar,
    },
    watch :{
      $route(){
        // if route changed checks the token for validation
        this.$store.dispatch("onStart")
      },
    },
    // 
    mounted(){
      // on page load checks the token for validation
      this.$store.dispatch("onStart")
    },
  }
</script>

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