<template>
                <div class="hidden bg-gray-200 rounded-2xl relative  text-gray-600 px-3 py-1.5 lg:flex items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                </span>
                <input type="text" v-model="searchString" @change="search"  class="w-20 lg:w-auto flex-1 bg-transparent outline-none px-3 border-bone">
                <div class="absolute hidden top-10 left-0 h-40 w-full z-40 bg-white shadow">

                </div>
              </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
   name:"Search",
   data() {
       return {
               searchString:"",
       }
   },
    methods: {
...mapMutations(['SEARCH_METRICS']),


    },
watch: {
        searchString(n,o) {
        this.SEARCH_METRICS(this.searchString);
    }
}


}
</script>

<style>

</style>