
<template>
  <div class="w-full" >
<div :class="openSideBar ? 'transform translate-x-0':'transform -translate-x-64'" class="fixed top-0 z-50 transition-all duration-500" >

       <Sidebar @toggle-side-bar="openSideBar = !openSideBar"  />
  </div>     
  <!-- MAIN SECTION -->
  <main :class="openSideBar ? 'lg:ml-64' : 'lg:w-full'" class="flex-1  py-0   min-h-screen mt-0">
  <TopNav />
  <div class="px-4 content w-full">
 <router-view />
  </div>

</main>

</div>
</template>

<script >
import Sidebar from './components/Sidebar.vue'
import TopNav from './components/TopNav.vue'
export default {
  components: {
    Sidebar,
    TopNav
  },
  data() {
    return {
      openSideBar:true
    }
  }
}
</script>

<style>
#app {

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
</style>
