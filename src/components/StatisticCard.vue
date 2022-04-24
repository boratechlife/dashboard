<template>
  
  <div :class="metric.classes" class="stat inline bg-white border-l-8 relative">

    <div v-if="enableEditing" :class="metric.favorite ? 'text-yellow-500' : ''" class="absolute  right-0 top-0 p-2 hover:text-yellow-500" >
     <svg @click.self="setFavorite({...metric, type: 'card'})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </div>
    <router-link to="/details">
    <div class="stat-title mt-6 mb-2">{{metric.title}}</div>
    <div class="stat-value">{{metric.metric}}</div>
    <div :class="metric.percent > 0 ? 'text-green-600':'text-red-500' " class="flex  gap-1 w-full justify-center my-2 text-xl ">
      <span>
        <svg v-if="metric.percent > 0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"/><path d="M15 7h6v6"/></svg>
     <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.2 17.2l-7.7-7.7-4 4-5.7-5.7"/><path d="M15 18h6v-6"/></svg>
      </span>
      <span>{{metric.percent}}%</span>
    </div>
    <div class="stat-desc">{{metric.period}}</div>
    </router-link>
  </div>
  
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
 name: 'Statistic',
 props: {
   metric: {
     type:Object,
     required:true,
   }
 },

 computed: {
   ...mapState(['enableEditing'])
 },

 methods: {
   ...mapActions(['setFavorite'])
 }

}
</script>

<style>

</style>