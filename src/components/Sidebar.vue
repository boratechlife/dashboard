<template>
    <!-- SIDEBAR -->
  <div :class="openMobileMenu ? 'w-full overflow-hidden' : 'hidden lg:block'" class="fixed z-50 lg:w-64 bg-gray-800 top-0 h-screen text-gray-500 py-4 ">
    <!-- LOGO -->
    <h4 class="hidden lg:block text-xl font-extrabold w-full bg-opacity-90 shadow pb-3 ">
      <span class="text-teal-500">VI</span>
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
          <li tabindex="0" class="collapse collapse-arrow px-0 py-0 mx-0 my-0 ">
  <div class="collapse-title leading-8 text-sm ">
          <div class="flex justify-between w-full  px-3  cursor-pointer py-0 text-gray-500 items-center">
                 <span class="icon">
               <svg xmlns="http://www.w3.org/2000/svg"  width="24" class="stroke-current h-5 w-5 " height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
             </span>
            <span class="flex-1 font-medium px-2"> Dashboards</span>
           
         </div>
  </div>
  <div class="collapse-content mt-0"> 
              <!-- COLLAPSE -->
           <div class="w-full bg-transparent  text-white w-full px-3">
             <ul>
               <li class="flex justify-between w-full hover:bg-gray-900 px-4 pl-7 hover:text-gray-100 cursor-pointer py-1 text-gray-500 items-center font-normal text-sm lg:text-base">Saas</li>
                 <li class="flex justify-between w-full hover:bg-gray-900 px-4 pl-7 hover:text-gray-100 cursor-pointer py-1 text-gray-500 items-center font-normal text-sm lg:text-base">Crypto</li>
                   <li class="flex justify-between w-full hover:bg-gray-900 px-4 pl-7 hover:text-gray-100 cursor-pointer py-1 text-gray-500 items-center font-normal text-sm lg:text-base">Blog</li>
               
               
               
             </ul>
           </div>
  </div>
</li>
          
           
        </ul>
      </div>
  <!-- END ITEM -->
</div>


<!-- END MENU SECTION -->
  </div>
  <!-- END SIDEBAR -->
</template>

<script>

import { mapMutations } from 'vuex'
export default {
    name:'Sidebar',
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