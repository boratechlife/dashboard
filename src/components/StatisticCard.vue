<template>
  
  <div :class="metric.classes" class="stat card wrapper max-w-xs inline  rounded-2xl  relative  hover:scale-2  relative">
 <div :class="background" class="absolute rounded-l-3xl w-6  h-2/3 top-1/2 transform -translate-y-1/2 -right-1 bg-indigo-500"></div>
    <div v-if="enableEditing" :class="metric.favorite ? 'text-yellow-500' : ''" class="absolute  right-0 top-0 p-2 hover:text-yellow-500" >
     <svg @click.self="setFavorite({...metric, type: 'card',metric_type_index:metric_type_index})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </div>
    <router-link to="/details" class=" flex justify-betweenn">
 <div className="flex-grow">
   <div className="icon">
<p className="text-gray-400 text-left font-semibold text-sm mt-2 mb-1">{{metric.title}}</p>
<div className="text-xl lg:text-2xl font-bold text-left  mt-2 mb-1">{{metric.metric}}</div>

<p className="text-gray-500 text-left font-light text-sm  mt-2 mb-1">{{metric.period}}</p>
   </div>
 </div>
 <div className="pr-2">
   <div :class="metric.classes" className="h-14 w-14 rounded-full flex items-center relative justify-center">
     <div class="h-12 w-12 rounded-full bg-white flex justify-center text-sm font-bold items-center">
       <span class="text-emerald-500">{{metric.percent}}%</span>
     </div>
     <div :class="metric.classes" className="absolute -top-1 h-4 w-4 rounded-full"></div>
   </div>
 </div>
    </router-link>
  </div>
  
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { VueEllipseProgress } from "vue-ellipse-progress";
export default {
 name: 'Statistic',
 components: {
 VueEllipseProgress,
 },
 props: {
   metric: {
     type:Object,
     required:true,
   },
   metric_type_index: {
     type:Number,
     required:true,
   },
   background: {
     type:String,
     default:"bg-blue-500",
   }
 },

 computed: {
   ...mapState(['enableEditing'])
 },

 methods: {
   ...mapActions(['setFavorite'])
 },


}
</script>

<style>

</style>