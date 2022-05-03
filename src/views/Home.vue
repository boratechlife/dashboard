<template>


         <!-- START CONTENT -->

<div class="content py-4">
<BreadCrumb title="Dashboard" :crumbs="['Dashboard']" />

<!-- START CARDS SECTION -->
<div class="w-full px-4">
<StatisticsHeader />
<div class="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-6 relative">
  <div class="absolute z-10 rounded-t-2xl bg-gradient from-bg-gray-300 to-bg-tranparent w-full h-64"></div>
  <div class="card bg-transparent p-2 z-30 " v-for="(item, index) in metrics" :key="index"> 
  <div :class="item.background.toString().split(' ')[0]" class=" flex-col h-48 flex items-center space-y-3 justify-center rounded-t-2xl  w-full ">
    <h4 class="text-lg font-bold text-white  text-center">{{item.name}}</h4>
    <p class="text-gray-400 font-light">CRM Data:01/01/22 - 22-04-22</p>
  </div>
<draggable 
  v-model="item.KPI_metrics" 
  group="people" 
  @start="drag=true" 
  @end="drag=false" 
  class="grid grid-cols-1 lg:grid-cols-1 w-full lg:w-full  gap-4 -mt-10  justify-between"
  item-key="id">
  <template #item="{element}">
   <StatisticCard  :metric="element" :metric_type_index="index" :background="item.background"/>
  
   </template>
</draggable>
</div>
</div>
</div>
</div>
</template>

<script>

  import draggable from 'vuedraggable'
import StatisticsHeader from '../components/StatisticsHeader.vue'
import StatisticCard from '../components/StatisticCard.vue'
import BreadCrumb from '../components/BreadCrumb.vue'


import  { mapState } from 'vuex'

export default {
       components: {
           StatisticsHeader,
           StatisticCard,
           BreadCrumb,
           draggable
           
       },

       data() {
         return {
           drag: true,
         }
       },

       computed: {
         ...mapState(['kipsMetrics','enableEditing']),
         metrics: {
            get() {
            // if( this.kipsMetrics.some(item=>item.favorite ===true) && !this.enableEditing) {
            //  return this.kipsMetrics.filter(item=> item.favorite ===true)
            // }
           return  this.kipsMetrics;
        },
        set(value) {
          console.log(value);
          //  this.$store.commit('updateMetrics', value)
        }

         }
       },

       mounted() {
         console.log(this.kipsMetrics.some(item=>item.favorite ===true));
       }
}
</script>

<style>

</style>