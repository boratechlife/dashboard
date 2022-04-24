<template>
<div class="border rounded p-2 shadow-xl mx-2 relative">
 <div v-if="enableChartEditing" :class="chartData.favorite ? 'text-yellow-500' : ''" class="absolute  right-0 top-0 p-2 hover:text-yellow-500" >
     <svg @click.self="setFavorite({...chartMetric,favChartIndex: index ,type: 'chart'})" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
 </div>
<apexchart width="100%" height="400" :type="chartData.type" :options="chartData.chartOptions" :series="chartData.series"></apexchart>
</div>
            
  
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
 props: {
     index: {
         type:Number,
         required:true,
     },
     chartMetric: {
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
   
console.log(this.chartData)
 }
}
</script>

<style>

</style>