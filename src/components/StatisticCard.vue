<template>
  
  <div :class="metric.classes" class="stat card inline  rounded-2xl  relative  hover:scale-2  relative">
 <div :class="background" class="absolute rounded-l-3xl w-6  h-2/3 top-1/2 transform -translate-y-1/2 -right-1 bg-indigo-500"></div>
    <div v-if="enableEditing" :class="metric.favorite ? 'text-yellow-500' : ''" class="absolute  right-0 top-0 p-2 hover:text-yellow-500" >
     <svg @click.self="setFavorite({...metric, type: 'card',metric_type_index:metric_type_index})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    </div>
    <router-link to="/details" class=" flex justify-betweenn">
 <div className="flex-grow">
   <div className="icon">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 2H15V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0C13.7348 0 13.4804 0.105357 13.2929 0.292893C13.1054 0.48043 13 0.734784 13 1V2H7V1C7 0.734784 6.89464 0.48043 6.70711 0.292893C6.51957 0.105357 6.26522 0 6 0C5.73478 0 5.48043 0.105357 5.29289 0.292893C5.10536 0.48043 5 0.734784 5 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2V2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V10H18V17ZM18 8H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H5V5C5 5.26522 5.10536 5.51957 5.29289 5.70711C5.48043 5.89464 5.73478 6 6 6C6.26522 6 6.51957 5.89464 6.70711 5.70711C6.89464 5.51957 7 5.26522 7 5V4H13V5C13 5.26522 13.1054 5.51957 13.2929 5.70711C13.4804 5.89464 13.7348 6 14 6C14.2652 6 14.5196 5.89464 14.7071 5.70711C14.8946 5.51957 15 5.26522 15 5V4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V8Z" fill="black"/>
</svg>
<p className="text-gray-400 text-left font-semibold text-sm mt-4 mb-2">{{metric.title}}</p>
<div className="text-xl lg:text-2xl font-bold text-left mb-4 mt-2">{{metric.metric}}</div>

<p className="text-gray-500 text-left font-light text-sm mt-4 mb-2">{{metric.period}}</p>
   </div>
 </div>
 <div className="pr-2">
   <div :class="metric.classes" className="h-16 w-16 rounded-full flex items-center relative justify-center">
     <div class="h-14 w-14 rounded-full bg-white flex justify-center text-sm font-bold items-center">
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