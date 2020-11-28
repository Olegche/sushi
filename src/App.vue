<template>
  <div id="app">
    
   <navbar/>

   <router-view>

     </router-view>
    <!-- <store/> -->
    
    
   
  </div>
</template>

<script>

// import Store from "./components/Store";
import  Navbar  from "./components/Shop/components/Navbar";

export default {
  name: 'App',
  components: {
    // Store,
    Navbar
  },

  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
