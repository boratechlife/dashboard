<template>
<div class="nm-convave-gray-100 border-2 flex items-center justify-center p-10 border-gray-100 rounded-2xl px-4 hover:cursor-pointer wrapper mx-6   my-4 relative">
 <div v-if="enableChartEditing" :class="chartData.favorite ? 'text-yellow-500' : ''" class="absolute z-50 right-0 top-0 p-2 hover:text-yellow-500" >
     <svg @click.self="setFavorite({...chartMetric,favChartIndex: index ,type: 'chart'})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
 </div>
 <highcharts class="cursor-normal w-3/4 h-3/4" :options="chartOptions"></highcharts>
</div>
            
  
</template>

<script>
import {Chart} from 'highcharts-vue'
import { mapState, mapActions } from 'vuex'  

export default {
components: {
     highcharts:Chart,
},
 props: {
     index: {
         type:Number,
         required:true,
     },
     chartMetric: {
         type:Object,
         required:true,
     },
        chartOptions: {
       type:Object,
       required:true,
   },
     chartData: {
         type:Object,
         required:true,
     }
 },
computed: {
    ...mapState(['enableChartEditing']),
},
methods: {
   ...mapActions(['setFavorite'])
},
 mounted() {
   
console.log(this.chartMetric)
 }
}
</script>

<style>

</style>