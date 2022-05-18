<template>
  <div class="lg:w-48 ml-4">
<draggable 
  v-model="metrics.KPI_metrics" 
  group="people" 
  @start="drag=true" 
  @end="drag=false" 
  class="grid grid-cols-1 lg:grid-cols-1 w-full lg:w-full  gap-4   justify-between"
  item-key="id">
  <template #item="{element}">
   <StatisticCard  :metric="element" :metric_type_index="index" :background="''"/>
  
   </template>
</draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import StatisticCard from '../components/StatisticCard.vue'

import  { mapState } from 'vuex'

export default {
components: {
    StatisticCard,
    draggable,
},
computed: {
 ...mapState(['kipsMetrics','enableEditing']),
 metrics: {
    get() {
            if(this.kipsMetrics.some(item=>item.favorite ===true) && !this.enableEditing) {
             return this.kipsMetrics.filter(item=> item.favorite ===true)
            }
           return  this.kipsMetrics[0];
        },
        set(value) {
          console.log(value);
            this.$store.commit('updateMetrics', value)
        }

}
},

}
</script>
