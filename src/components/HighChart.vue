<template>
  <div class="">
      <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue'
export default {  
    props: {
   chartOptions: {
       type:Object,
       required:true,
   }
    },
//     data() {
//     return {
//       chartOptions: {
//         series: [{
//           data: [1,2,3] // sample data
//         }]
//       }
//     }
//   },
components: {
     highcharts:Chart,
}
}
</script>

<style>

</style>