
<template>
  <div class="w-full" >
     <Sidebar    />
<!-- <div :class="openSideBar ? 'transform translate-x-0':'transform -translate-x-64'" class="fixed top-0 z-50 transition-all duration-500" >

      
  </div>      -->
  <!-- MAIN SECTION -->
  <main class="flex-1 w-full lg:pl-24 my-2 lg:py-5 lg:pr-10   min-h-screen mt-0">
    <div class="wrapper rounded-2xl border bg-gray-light">

        <TopNav />

  <div class="px-4 content w-full pl-10">
  <FilterBar v-if="openFilter"/>
 <router-view />
  </div>


    </div>

</main>

</div>
</template>

<script >
import Sidebar from './components/Sidebar.vue'
import TopNav from './components/TopNav.vue'
import FilterBar from './components/FilterBar.vue'
import { mapState } from 'vuex'
export default {
  components: {
    Sidebar,
    TopNav,
    FilterBar,
  },
  data() {
    return {
      openSideBar:true
    }
  },
  computed: {
    ...mapState(['openFilter'])
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
