<template>
    <!-- SIDEBAR -->
  <div :class="openMobileMenu ? 'w-full overflow-hidden' : 'hidden lg:block'" class="fixed z-50 lg:w-64 bg-indigo-900 top-0 h-screen text-gray-200 py-4 ">
   <div class="relative w-full">
     <!-- MENU TOGGLE -->
<div @click="$emit('toggle-side-bar')" class="absolute cursor-pointer rounded-full h-24 w-12 top-1/2 -right-6 pl-3  transform -translate-1/2 bg-indigo-900 text-white flex items-center justify-center">
>
</div>

     <!-- END MENU TOGGLE -->

      <!-- LOGO -->
    <h4 class="hidden lg:block text-xl font-extrabold w-full bg-opacity-90 shadow pb-3 ">
      <span class="text-yellow-500">VI</span>
      <span class="text-white">ZONE</span>
    </h4>
    <!-- END LOGO -->

<!-- MENU SECTION -->
<div class="w-full text-left  py-3 relative">
  <!-- CLOSE BUTTON -->
<div class="text-white absolute right-2 -top-2 lg:hidden" @click="TOGGLE_MOBILE_MENU()">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
</div>

  <!-- END CLOSE BUTTON -->
  <!-- ITEM -->
      <div class="item font-sans">
        <h5 class="text-xs uppercase text-gray-500 px-3 font-bold">Menu</h5>
        <ul class="w-full my-3">
        <li class="flex items-center gap-2 px-3.5 py-2.5 hover:bg-gray-900 hover:text-white cursor-pointer" v-for="(item, index) in menu" :key="index">
<span v-if="item.id===1">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
</span>
<span v-if="item.id===2">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
</svg>
</span>

<span v-if="item.id===3">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
</svg>
</span>
<span v-if="item.id===4">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
</span>

<span v-if="item.id===5">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</span>
 <span>{{item.name}}</span>
          </li>        
        </ul>
      </div>
  <!-- END ITEM -->
</div>


<!-- END MENU SECTION -->
   </div>
   
  </div>
  <!-- END SIDEBAR -->
</template>

<script>

import { mapMutations } from 'vuex'

export default {
    name:'Sidebar',
   data(){
     return {
       menu: [
         {
           id:1,
           name:"IFT Activity",
         },
        {
           id:2,
           name:"Coverage",
         },
         {
           id:3,
           name:"Messaging",
         },
         {
           id:4,
           name:"Direct Sales",
         },
          {
           id:5,
           name:"IQVIA Sales",
         }
       ]
     }
   },
    computed: {
      openMobileMenu() {
        return this.$store.state.openMobileMenu;
      }
    },
    methods: {
    ...mapMutations(['TOGGLE_MOBILE_MENU'])
    },
    mounted() {
      console.log(this.openMobileMenu);
    }
}
</script>

<style>

</style>