
<template>
  <div class="w-full" >

       <Sidebar />
  <!-- MAIN SECTION -->
  <main class="flex-1 lg:ml-64 py-0  bg-gray-100 min-h-screen mt-0">
  <TopNav />
 <router-view />
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
