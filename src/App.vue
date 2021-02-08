<template>
  <div id="app">
    <navbar />
    
    <router-view> </router-view>
    <!-- <div class="footer">
      Develop and design by Cherniatiev Oleg 
      <br>
      for more information feel free to contact me with  <a href="mailto: develop.olegch@gmail.com ">develop.olegch@gmail.com</a>
    </div> -->
  </div>
</template>

<script>
// import Store from "./components/Store";
import Navbar from "./components/Shop/components/Navbar";

export default {
  name: "App",
  components: {
    // Store,
    Navbar,
  },
 


 
};
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

.footer{
  max-height: 30px;
  text-align: center;
  margin-top: 20px;
  bottom:0
}
</style>
