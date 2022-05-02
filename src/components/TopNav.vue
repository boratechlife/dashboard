<template>
           <!-- TOP NAV -->
        <nav class="w-full shadow-lg bg-gray-50 px-4 py-2">
        <div class="w-full flex justify-between">
              <div class="hidden bg-gray-200 rounded-2xl  text-gray-600 px-3 py-1.5 lg:flex items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </span>
                <input type="text" class="w-20 lg:w-auto flex-1 bg-transparent outline-none px-3 border-bone">
              </div>
              <div class="flex w-full lg:w-auto justify-between  items-center">
                <div class="lg:hidden" @click="TOGGLE_MOBILE_MENU()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </div>
                <div class="dropdown   lg:dropdown-end">
                  <label tabindex="0" class="h-4 w-4 lg:h-6 lg:w-6 object-contain">
                    <img src="https://themesbrand.com/skote-symfony/layouts/assets/images/flags/us.jpg" class="h-6 w-6 object-contain" alt="" srcset="">
                  </label>
                  <ul tabindex="0" class="dropdown-content menu  shadow bg-base-100 rounded border-none w-28 lg:w-48 text-xs md:text-sm">
                  <li><a class="flex items-center gap-2">
                    <img src="https://themesbrand.com/skote-symfony/layouts/assets/images/flags/us.jpg" class="h-4 w-4 lg:h-6 lg:w-6 object-contain" alt="" srcset="">
                    <span>English</span>
                    </a></li>

                     <li><a class="flex items-center gap-2">
                    <img src="https://themesbrand.com/skote-symfony/layouts/assets/images/flags/spain.jpg" class="h-4 w-4 lg:h-6 lg:w-6 object-contain" alt="" srcset="">
                    <span>French</span>
                    </a></li>

                  </ul>
                 </div>
                 <div class="w-auto lg:w-64">
            <div class="dropdown">
                <label tabindex="0" class="flex gap-4 items-center">
                  <div class="h-8 w-8  rounded-full border-2 border-gray-200 bg-green-500">
                    <img src="https://themesbrand.com/skote-symfony/layouts/assets/images/users/avatar-1.jpg" alt="" class="h-8 w-8  rounded-full">
                  </div>
                  <p class="hidden lg:flex items-center text-sm ">
                    <span class="font-light">Henry</span>
                    <span class="">
                      <svg class="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                    </span>
                  </p>
                </label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100  -ml-20 lg:w-40">
                     <li class="my-0 py-0">
                       <a href="" class="flex items-center my-0 py-1 gap-2 text-xs lg:text-sm">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                         <span>Profile</span>
                       </a>
                     </li>
                      <li class="my-0 py-0">
                       <a href="" class="flex items-center my-0 py-1 gap-2 text-xs lg:text-sm">
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                         <span><span class="hidden lg:inline">My </span>Wallet</span>
                       </a>
                     </li>
                </ul>
           </div>
                 </div>
              </div>
        </div>
        </nav>

         <!-- END TOP NAV -->
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations([
      'TOGGLE_MOBILE_MENU'
    ])
  }
}
</script>

<style>

</style>