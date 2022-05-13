<template>


         <!-- START CONTENT -->

<div class="content py-4">
<BreadCrumb title="Dashboard" :crumbs="['Dashboard']" />

<!-- START CARDS SECTION -->
<div class="w-full px-4">

<div class="grid grid-cols-1 lg:grid-cols-5 lg:w-full gap-8 mt-6 relative">
  <div class="absolute z-10 rounded-t-2xl bg-gradient from-bg-gray-300 to-bg-tranparent w-full h-64"></div>
  <div class=" z-30 " v-for="(item, index) in metrics" :key="index"> 
    <div class="bg-gray-50 rounded-xl shadow-sm p-2 w-full">
      <h4 class="text-gray-500 font-bold uppercase mb-4 ">{{item.name}}</h4>
      <draggable 
  v-model="item.KPI_metrics" 
  group="people" 
  @start="drag=true" 
  @end="drag=false" 
  class="grid grid-cols-1 lg:grid-cols-1 w-full lg:w-full  gap-4   justify-between"
  item-key="id">
  <template #item="{element}">
   <StatisticCard  :metric="element" :metric_type_index="index" :background="item.background"/>
  
   </template>
</draggable>
    </div>


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
         ...mapState(['kipsMetrics','enableEditing','searchResults']),
         metrics: {
            get() {
              if(this.searchMetrics) {
                return this.searchMetrics;
              }
            if( this.kipsMetrics.some(item=>item.favorite ===true) && !this.enableEditing) {
             return this.kipsMetrics.filter(item=> item.favorite ===true)
            }
           return  this.kipsMetrics;
        },
        set(value) {
          console.log(value);
            this.$store.commit('updateMetrics', value)
        }

         },

          searchMetrics: {
            get() {
            if( this.searchResults?.kipsMetrics?.some(item=>item.favorite ===true) && !this.enableEditing) {
             return this.searchResults?.kipsMetrics?.filter(item=> item.favorite ===true)
            }
           return  this.searchResults?.kipsMetrics;
        },
        set(value) {
          console.log(value);
            this.$store.commit('updateMetrics', value)
        }

         }
       },

}
</script>

<style>

</style>